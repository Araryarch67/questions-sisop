"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  LuArrowLeft,
  LuChevronLeft,
  LuChevronRight,
  LuCircleCheck,
  LuCircleX,
  LuDumbbell,
  LuEye,
  LuRotateCcw,
  LuTarget,
  LuSparkles,
  LuTrash2,
  LuTrophy,
} from "react-icons/lu";
import type { QuizQuestion } from "@/components/tryout-ets-quiz";
import { RichExplanationCard } from "@/components/rich-explanation-card";
import { RichMathText } from "@/components/rich-math-text";
import { decodeUnicodeEscapes } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export type DrillModeProps = {
  /** Wrong ones (for "salahku" source), filtered by the parent. */
  questions: QuizQuestion[];
  /** Full pool (for "acak" source). */
  allQuestions: QuizQuestion[];
  courseTitle: string;
  onExit: () => void;
  onClearDrill?: () => void;
};

const COUNT_OPTIONS = [5, 10, 20, 50] as const;

function sampleRandom<T>(pool: T[], n: number): T[] {
  const arr = [...pool];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j] as T, arr[i] as T];
  }
  return arr.slice(0, Math.max(0, Math.min(n, arr.length)));
}

const optionLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function hasSameOptions(selected: number[], expected: number[]): boolean {
  if (selected.length !== expected.length) return false;
  return expected.every((idx) => selected.includes(idx));
}

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    target.isContentEditable
  );
}

export function DrillMode({
  questions,
  allQuestions,
  courseTitle,
  onExit,
  onClearDrill,
}: DrillModeProps) {
  // Setup: source pool + how many questions. Deck is null until user starts.
  const [source, setSource] = useState<"wrong" | "random">(
    questions.length > 0 ? "wrong" : "random",
  );
  const [count, setCount] = useState<number | "all">(10);
  const [deck, setDeck] = useState<QuizQuestion[] | null>(null);

  const pool = source === "wrong" ? questions : allQuestions;
  const poolSize = pool.length;
  const resolvedCount = count === "all" ? poolSize : Math.min(count, poolSize);

  const startDrill = useCallback(() => {
    if (pool.length === 0) return;
    const n = count === "all" ? pool.length : Math.min(count, pool.length);
    setDeck(sampleRandom(pool, n));
    setAnswers({});
    setRevealed({});
    setPendingMulti({});
    setIndex(0);
    setFinished(false);
  }, [pool, count]);

  // Back to setup when the underlying pools change.
  useEffect(() => {
    setDeck(null);
    setAnswers({});
    setRevealed({});
    setPendingMulti({});
    setIndex(0);
    setFinished(false);
  }, [questions, allQuestions]);

  const qs = deck ?? [];
  const total = qs.length;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number[]>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [finished, setFinished] = useState(false);

  const safeIndex = total === 0 ? 0 : Math.min(index, total - 1);
  const current = total === 0 ? undefined : qs[safeIndex];

  const answeredCount = useMemo(
    () =>
      qs.filter((q) => {
        if (revealed[q.id]) return true;
        const a = answers[q.id];
        return Array.isArray(a) && a.length > 0;
      }).length,
    [qs, answers, revealed],
  );

  const correctCount = useMemo(
    () =>
      qs.filter((q) => {
        if (revealed[q.id]) return false;
        const a = answers[q.id];
        if (!a || a.length === 0) return false;
        return hasSameOptions(a, q.answers);
      }).length,
    [qs, answers, revealed],
  );

  const allAnswered = total > 0 && answeredCount >= total;
  const progress = total === 0 ? 0 : Math.round((answeredCount / total) * 100);

  // Ulangi = fresh random sample with the same setup.
  const resetDrill = useCallback(() => {
    if (pool.length === 0) return;
    const n = count === "all" ? pool.length : Math.min(count, pool.length);
    setDeck(sampleRandom(pool, n));
    setAnswers({});
    setRevealed({});
    setPendingMulti({});
    setIndex(0);
    setFinished(false);
  }, [pool, count]);

  const backToSetup = useCallback(() => {
    setDeck(null);
    setAnswers({});
    setRevealed({});
    setPendingMulti({});
    setIndex(0);
    setFinished(false);
  }, []);

  const lockSingleAnswer = useCallback(
    (questionId: number, optionIdx: number) => {
      setAnswers((prev) => {
        if (prev[questionId] && prev[questionId].length > 0) return prev;
        return { ...prev, [questionId]: [optionIdx] };
      });
    },
    [],
  );

  const [pendingMulti, setPendingMulti] = useState<Record<number, number[]>>(
    {},
  );

  const handlePick = useCallback(
    (q: QuizQuestion, optionIdx: number) => {
      if (finished) return;
      if (revealed[q.id]) return;
      if (q.multiple) {
        const locked = answers[q.id];
        if (locked && locked.length > 0) return;
        setPendingMulti((prev) => {
          const cur = prev[q.id] ?? [];
          return {
            ...prev,
            [q.id]: cur.includes(optionIdx)
              ? cur.filter((i) => i !== optionIdx)
              : [...cur, optionIdx],
          };
        });
        return;
      }
      lockSingleAnswer(q.id, optionIdx);
    },
    [finished, revealed, answers, lockSingleAnswer],
  );

  const handleCheckMulti = useCallback(
    (q: QuizQuestion) => {
      const staged = pendingMulti[q.id] ?? [];
      if (staged.length === 0) return;
      setAnswers((prev) => {
        if (prev[q.id] && prev[q.id].length > 0) return prev;
        return { ...prev, [q.id]: [...staged].sort((a, b) => a - b) };
      });
    },
    [pendingMulti],
  );

  const handleReveal = useCallback((q: QuizQuestion) => {
    setRevealed((prev) => ({ ...prev, [q.id]: true }));
  }, []);

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(Math.max(total - 1, 0), i + 1));
  }, [total]);

  // Keyboard: A-E / 1-5 to answer, arrows to navigate. Guard form inputs.
  useEffect(() => {
    if (total === 0 || finished || !current) return;
    const onKey = (e: KeyboardEvent) => {
      if (isTypingTarget(e.target)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key.toUpperCase();
      if (key === "ARROWLEFT") {
        e.preventDefault();
        goPrev();
        return;
      }
      if (key === "ARROWRIGHT") {
        e.preventDefault();
        goNext();
        return;
      }
      const letterIdx = "ABCDE".indexOf(key);
      const digitMap: Record<string, number> = {
        "1": 0,
        "2": 1,
        "3": 2,
        "4": 3,
        "5": 4,
      };
      const optIdx =
        letterIdx >= 0 ? letterIdx : (digitMap[e.key] ?? -1);
      if (optIdx >= 0 && optIdx < current.options.length) {
        e.preventDefault();
        handlePick(current, optIdx);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total, finished, current, goPrev, goNext, handlePick]);

  // ---- Setup screen: pick source + how many ----
  if (deck === null) {
    const canStart = poolSize > 0 && resolvedCount > 0;
    return (
      <div className="mx-auto w-full max-w-2xl px-4 pt-8 pb-12">
        <Card className="overflow-hidden rounded-2xl border-2 border-[#4c4f69] bg-white shadow-[4px_4px_0_#4c4f69]">
          <div className="border-b-2 border-[#4c4f69] bg-[#8839ef] p-6 text-center">
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl border-2 border-[#4c4f69] bg-white text-[#8839ef] shadow-[3px_3px_0_#4c4f69]">
              <LuTarget className="size-7" />
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white drop-shadow-[2px_2px_0_#4c4f69]">
              Atur drill yuk!
            </h2>
            <p className="mt-1 text-sm font-bold text-white/90">{courseTitle}</p>
          </div>
          <CardContent className="space-y-5 p-5 sm:p-6">
            <div>
              <p className="text-sm font-bold text-[#4c4f69]">1. Ambil soal dari mana?</p>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setSource("wrong")}
                  disabled={questions.length === 0}
                  className={`rounded-2xl border-2 p-3 text-left transition-all active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 ${
                    source === "wrong"
                      ? "border-[#4c4f69] bg-[#e64553]/10 shadow-[3px_3px_0_#4c4f69]"
                      : "border-[#bcc0cc] bg-white hover:border-[#4c4f69]"
                  }`}
                >
                  <p className="font-bold text-[#4c4f69]">Soal salahku</p>
                  <p className="mt-0.5 text-xs font-medium text-[#6c6f85]">
                    {questions.length > 0
                      ? `${questions.length} soal pernah salah — bedah sampai bisa!`
                      : "Belum ada yang salah. Keren!"}
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setSource("random")}
                  disabled={allQuestions.length === 0}
                  className={`rounded-2xl border-2 p-3 text-left transition-all active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 ${
                    source === "random"
                      ? "border-[#4c4f69] bg-[#1e66f5]/10 shadow-[3px_3px_0_#4c4f69]"
                      : "border-[#bcc0cc] bg-white hover:border-[#4c4f69]"
                  }`}
                >
                  <p className="font-bold text-[#4c4f69]">Acak semua</p>
                  <p className="mt-0.5 text-xs font-medium text-[#6c6f85]">
                    {allQuestions.length} soal diacak dari seluruh course!
                  </p>
                </button>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-[#4c4f69]">2. Mau berapa soal?</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {COUNT_OPTIONS.map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setCount(n)}
                    className={`rounded-full border-2 px-4 py-1.5 text-sm font-bold transition-all active:scale-95 ${
                      count === n
                        ? "border-[#4c4f69] bg-[#8839ef] text-white shadow-[2px_2px_0_#4c4f69]"
                        : "border-[#bcc0cc] bg-white text-[#6c6f85] hover:border-[#4c4f69] hover:text-[#4c4f69]"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setCount("all")}
                  className={`rounded-full border-2 px-4 py-1.5 text-sm font-bold transition-all active:scale-95 ${
                    count === "all"
                      ? "border-[#4c4f69] bg-[#8839ef] text-white shadow-[2px_2px_0_#4c4f69]"
                      : "border-[#bcc0cc] bg-white text-[#6c6f85] hover:border-[#4c4f69] hover:text-[#4c4f69]"
                  }`}
                >
                  Semua ({poolSize})
                </button>
              </div>
              <p className="mt-2 text-xs font-bold text-[#8839ef]">
                Dapat {resolvedCount} soal {source === "wrong" ? "salahmu" : "acak"} — gas!
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button type="button" onClick={startDrill} disabled={!canStart} className="flex-1">
                Mulai drill ({resolvedCount} soal)!
              </Button>
              <Button type="button" variant="outline" onClick={onExit}>
                <LuArrowLeft className="size-4" /> Keluar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ---- Finish screen ----
  if (finished) {
    const pct = Math.round((correctCount / total) * 100);
    return (
      <div className="mx-auto w-full max-w-2xl px-4 pt-8 pb-12">
        <Card className="overflow-hidden rounded-2xl border-2 border-[#4c4f69] bg-white shadow-[4px_4px_0_#4c4f69]">
          <div className="border-b-2 border-[#4c4f69] bg-[#8839ef] p-6 text-center">
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl border-2 border-[#4c4f69] bg-white text-[#8839ef] shadow-[3px_3px_0_#4c4f69]">
              <LuTrophy className="size-7" />
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white drop-shadow-[2px_2px_0_#4c4f69]">
              Drill selesai!
            </h2>
            <p className="mt-1 text-sm font-bold text-white/90">{courseTitle}</p>
          </div>
          <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
            <p className="text-5xl font-bold tabular-nums tracking-tight text-[#4c4f69]">
              {correctCount}
              <span className="text-2xl text-[#6c6f85]">/{total}</span>
            </p>
            <Badge variant="secondary" className="text-xs">
              <LuSparkles className="size-3" /> {pct}% bener, makin jago!
            </Badge>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Button type="button" onClick={resetDrill}>
                <LuRotateCcw className="size-4" /> Acak & ulangi
              </Button>
              <Button type="button" variant="outline" onClick={backToSetup}>
                Ganti setting
              </Button>
              <Button type="button" variant="outline" onClick={onExit}>
                <LuArrowLeft className="size-4" /> Keluar
              </Button>
              {onClearDrill && (
                <Button
                  type="button"
                  variant="destructive"
                  onClick={onClearDrill}
                >
                  <LuTrash2 className="size-4" /> Hapus drill
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!current) return null;
  const q = current;
  const locked = answers[q.id] ?? [];
  const isRevealed = !!revealed[q.id];
  const isLocked = isRevealed || locked.length > 0;
  const staged = q.multiple ? (pendingMulti[q.id] ?? []) : [];
  const selectedForCard = isRevealed ? [] : locked;
  const isCorrect =
    !isRevealed && locked.length > 0 && hasSameOptions(locked, q.answers);
  const stickerBgs = [
    "bg-[#8839ef]",
    "bg-[#ea76cb]",
    "bg-[#1e66f5]",
    "bg-[#df8e1d]",
    "bg-[#40a02b]",
  ];

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pt-8 pb-12">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-2">
        <Button type="button" variant="outline" size="sm" onClick={onExit}>
          <LuArrowLeft className="size-4" /> Keluar
        </Button>
        <Badge className="-rotate-1">
          <LuDumbbell className="size-3" /> Drill • {source === "wrong" ? "soal salah" : "acak"}
        </Badge>
        <Button type="button" variant="ghost" size="sm" onClick={backToSetup} className="text-xs">
          Ganti
        </Button>
        <span className="ml-auto rounded-full border-2 border-[#4c4f69] bg-white px-3 py-1 text-xs font-bold tabular-nums text-[#4c4f69] shadow-[2px_2px_0_#4c4f69]">
          Soal drill {safeIndex + 1} dari {total}
        </span>
      </div>

      <div className="mt-3 rounded-2xl border-2 border-[#4c4f69] bg-white p-3 shadow-[3px_3px_0_#4c4f69]">
        <div className="mb-2 flex items-center justify-between gap-2 text-xs font-bold text-[#4c4f69]">
          <span className="truncate">{courseTitle}</span>
          <span className="shrink-0 tabular-nums text-[#8839ef]">
            {answeredCount}/{total} terjawab
          </span>
        </div>
        <Progress value={progress} />
      </div>

      {/* Question card */}
      <Card
        key={q.id}
        className="mt-4 rounded-2xl border-2 border-[#4c4f69] bg-white shadow-[4px_4px_0_#4c4f69]"
      >
        <CardContent className="space-y-4 p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge variant="secondary" className="text-[11px]">
              CH {q.chapterNumber} • {q.chapterTitle}
            </Badge>
            {q.sectionTitle && (
              <Badge variant="outline" className="text-[11px]">
                {q.sectionTitle}
              </Badge>
            )}
            {q.multiple && (
              <Badge className="bg-[#1e66f5] text-[11px]">
                Pilih {q.answers.length} jawaban
              </Badge>
            )}
            {isRevealed && (
              <Badge variant="secondary" className="text-[11px]">
                <LuEye className="size-3" /> Kunci diintip
              </Badge>
            )}
          </div>

          <div className="text-[1.02rem] leading-relaxed font-medium text-[#4c4f69]">
            <RichMathText content={decodeUnicodeEscapes(q.text)} />
          </div>

          {/* Options */}
          <div className="grid gap-2.5" role="radiogroup" aria-label="Pilihan jawaban">
            {q.options.map((opt, optionIdx) => {
              const label = optionLabels[optionIdx] ?? String(optionIdx + 1);
              const isCorrectOpt = q.answers.includes(optionIdx);
              const isPicked = q.multiple
                ? (isLocked ? locked : staged).includes(optionIdx)
                : locked.includes(optionIdx);

              let optionStyle =
                "border-2 border-[#4c4f69] bg-white text-[#4c4f69] shadow-[3px_3px_0_#4c4f69] hover:-translate-y-0.5 hover:bg-[#e6e9ef]";
              let circleStyle = `border-2 border-[#4c4f69] ${stickerBgs[optionIdx % stickerBgs.length]} text-white shadow-[2px_2px_0_#4c4f69]`;

              if (isLocked) {
                if (isCorrectOpt) {
                  optionStyle =
                    "border-2 border-[#4c4f69] bg-[#40a02b]/15 font-bold text-[#4c4f69] shadow-[3px_3px_0_#4c4f69]";
                  circleStyle =
                    "border-2 border-[#4c4f69] bg-[#40a02b] font-bold text-white shadow-[2px_2px_0_#4c4f69]";
                } else if (isPicked) {
                  optionStyle =
                    "border-2 border-[#4c4f69] bg-[#e64553]/10 font-bold text-[#4c4f69] shadow-[3px_3px_0_#4c4f69]";
                  circleStyle =
                    "border-2 border-[#4c4f69] bg-[#e64553] font-bold text-white shadow-[2px_2px_0_#4c4f69]";
                } else {
                  optionStyle =
                    "border-2 border-[#bcc0cc] bg-white text-[#6c6f85]";
                  circleStyle =
                    "border-2 border-[#bcc0cc] bg-[#e6e9ef] text-[#6c6f85]";
                }
              } else if (q.multiple && staged.includes(optionIdx)) {
                optionStyle =
                  "border-2 border-[#4c4f69] bg-[#8839ef]/10 font-bold text-[#4c4f69] shadow-[3px_3px_0_#4c4f69] -translate-y-0.5";
                circleStyle =
                  "border-2 border-[#4c4f69] bg-[#8839ef] font-bold text-white shadow-[2px_2px_0_#4c4f69] scale-110";
              }

              return (
                <button
                  key={optionIdx}
                  type="button"
                  disabled={isLocked}
                  onClick={() => handlePick(q, optionIdx)}
                  className={`flex w-full cursor-pointer items-start gap-3 rounded-2xl p-3 text-left transition-all duration-150 active:scale-[0.99] disabled:cursor-default disabled:hover:translate-y-0 ${optionStyle}`}
                >
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-xl font-mono text-sm ${circleStyle}`}
                  >
                    {isLocked && isCorrectOpt ? (
                      <LuCircleCheck className="size-4" />
                    ) : isLocked && isPicked && !isCorrectOpt ? (
                      <LuCircleX className="size-4" />
                    ) : (
                      label
                    )}
                  </span>
                  <span className="min-w-0 flex-1 text-sm leading-relaxed">
                    <RichMathText content={decodeUnicodeEscapes(opt)} />
                  </span>
                  <span className="hidden shrink-0 rounded-lg border border-[#4c4f69]/20 bg-white/70 px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#6c6f85] sm:inline">
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Multi-check + reveal */}
          {!isLocked && (
            <div className="flex flex-wrap items-center gap-2">
              {q.multiple && (
                <Button
                  type="button"
                  disabled={staged.length === 0}
                  onClick={() => handleCheckMulti(q)}
                >
                  <LuCircleCheck className="size-4" /> Cek jawaban (
                  {staged.length}/{q.answers.length})
                </Button>
              )}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleReveal(q)}
                className="ml-auto"
              >
                <LuEye className="size-3.5" /> Belum bisa? Intip kunci
              </Button>
            </div>
          )}

          {/* Instant feedback */}
          {isLocked && (
            <RichExplanationCard
              questionId={q.id}
              questionText={q.text}
              options={q.options}
              selectedAnswers={selectedForCard}
              correctAnswers={q.answers}
              explanation={q.explanation}
              sectionTitle={q.sectionTitle}
              chapterTitle={q.chapterTitle}
              isCorrect={isCorrect}
            />
          )}

          {/* Nav */}
          <div className="flex items-center justify-between gap-2 pt-1">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={goPrev}
              disabled={safeIndex === 0}
            >
              <LuChevronLeft className="size-4" /> Prev
            </Button>
            {allAnswered ? (
              <Button type="button" onClick={() => setFinished(true)}>
                <LuTrophy className="size-4" /> Lihat hasil
              </Button>
            ) : (
              <p className="text-center text-[11px] font-bold text-[#6c6f85]">
                {q.multiple
                  ? "Pilih semua jawaban bener, terus cek!"
                  : "Klik jawaban — langsung dikoreksi!"}{" "}
                <span className="hidden sm:inline">(A–E / 1–5, ← →)</span>
              </p>
            )}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={goNext}
              disabled={safeIndex >= total - 1}
            >
              Next <LuChevronRight className="size-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
