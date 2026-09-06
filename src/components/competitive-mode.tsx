"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  LuTrophy,
  LuClock,
  LuArrowLeft,
  LuArrowRight,
  LuSend,
  LuRotateCcw,
  LuEye,
  LuLogOut,
  LuCircleCheck,
  LuCircleX,
  LuSparkles,
  LuMedal,
  LuTimer,
  LuZap,
  LuKeyboard,
  LuFlag,
} from "react-icons/lu";
import type { QuizQuestion } from "@/components/tryout-ets-quiz";
import { RichMathText } from "@/components/rich-math-text";
import { RichExplanationCard } from "@/components/rich-explanation-card";
import { decodeUnicodeEscapes } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export type CompetitiveModeProps = {
  questions: QuizQuestion[];
  courseTitle: string;
  storagePrefix: string;
  onExit: () => void;
};

type BestScore = {
  percent: number;
  correct: number;
  total: number;
  date: string;
};

type Phase = "start" | "running" | "finished";

const optionLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SECONDS_PER_QUESTION = 120;

function formatHMS(totalSeconds: number) {
  const s = Math.max(0, totalSeconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(sec)}`;
}

function formatDuration(totalSeconds: number) {
  const s = Math.max(0, totalSeconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) return `${h}j ${m}m ${sec}d`;
  if (m > 0) return `${m}m ${sec}d`;
  return `${sec}d`;
}

function isAnswerCorrect(q: QuizQuestion, selected: number[]) {
  const a = [...selected].sort((x, y) => x - y);
  const b = [...(q.answers ?? [])].sort((x, y) => x - y);
  if (a.length !== b.length) return false;
  return a.every((v, i) => v === b[i]);
}

function gradeFor(percent: number) {
  if (percent >= 90) return { grade: "S", message: "Sempurna, sepuh!" };
  if (percent >= 80) return { grade: "A", message: "Keren banget!" };
  if (percent >= 70) return { grade: "B", message: "Bagus, dikit lagi!" };
  return { grade: "C", message: "Coba lagi yuk!" };
}

export function CompetitiveMode({
  questions,
  courseTitle,
  storagePrefix,
  onExit,
}: CompetitiveModeProps) {
  const totalTime = Math.max(1, questions.length) * SECONDS_PER_QUESTION;
  const bestKey = `${storagePrefix}_comp_best`;

  const [phase, setPhase] = useState<Phase>("start");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number[][]>(() =>
    questions.map(() => []),
  );
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [timeUsed, setTimeUsed] = useState(0);
  const [best, setBest] = useState<BestScore | null>(null);
  const [reviewing, setReviewing] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isNewBest, setIsNewBest] = useState(false);

  const finishedRef = useRef(false);

  // Load best score
  useEffect(() => {
    try {
      const raw = localStorage.getItem(bestKey);
      if (raw) {
        const parsed = JSON.parse(raw) as BestScore;
        if (typeof parsed?.percent === "number") setBest(parsed);
      }
    } catch {
      setBest(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bestKey]);

  // Reset selection shape when questions change
  useEffect(() => {
    setSelected(questions.map(() => []));
    setIndex(0);
    setTimeLeft(Math.max(1, questions.length) * SECONDS_PER_QUESTION);
    setReviewing(false);
    setReviewIndex(0);
    finishedRef.current = false;
  }, [questions]);

  const results = useMemo(
    () =>
      questions.map((q, i) => ({
        question: q,
        user: selected[i] ?? [],
        correct: isAnswerCorrect(q, selected[i] ?? []),
      })),
    [questions, selected],
  );

  const correctCount = useMemo(
    () => results.filter((r) => r.correct).length,
    [results],
  );
  const answeredCount = useMemo(
    () => selected.filter((s) => s.length > 0).length,
    [selected],
  );
  const percent =
    questions.length === 0
      ? 0
      : Math.round((correctCount / questions.length) * 100);

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setTimeUsed((prev) => (prev > 0 ? prev : totalTime - timeLeft));
    setPhase("finished");
    setReviewing(false);
    setReviewIndex(0);
  }, [timeLeft, totalTime]);

  // Keep timeUsed in sync while running
  useEffect(() => {
    if (phase === "running") {
      setTimeUsed(totalTime - timeLeft);
    }
  }, [phase, timeLeft, totalTime]);

  // Countdown timer with proper cleanup
  useEffect(() => {
    if (phase !== "running") return;
    const id = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [phase]);

  // Auto-submit at 0
  useEffect(() => {
    if (phase === "running" && timeLeft <= 0) {
      finish();
    }
  }, [phase, timeLeft, finish]);

  // Save best on finish
  useEffect(() => {
    if (phase !== "finished" || questions.length === 0) return;
    const record: BestScore = {
      percent,
      correct: correctCount,
      total: questions.length,
      date: new Date().toISOString(),
    };
    setBest((prev) => {
      const better = !prev || record.percent > prev.percent;
      setIsNewBest(better);
      if (better) {
        try {
          localStorage.setItem(bestKey, JSON.stringify(record));
        } catch {
          /* ignore */
        }
        return record;
      }
      return prev;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const start = useCallback(() => {
    finishedRef.current = false;
    setSelected(questions.map(() => []));
    setIndex(0);
    setTimeLeft(totalTime);
    setTimeUsed(0);
    setReviewing(false);
    setReviewIndex(0);
    setIsNewBest(false);
    setPhase("running");
  }, [questions, totalTime]);

  const toggleOption = useCallback(
    (qIndex: number, optIndex: number) => {
      const q = questions[qIndex];
      if (!q) return;
      setSelected((prev) => {
        const next = prev.map((s) => [...s]);
        const cur = next[qIndex] ?? [];
        if (q.multiple) {
          next[qIndex] = cur.includes(optIndex)
            ? cur.filter((v) => v !== optIndex)
            : [...cur, optIndex];
        } else {
          next[qIndex] = cur.includes(optIndex) ? [] : [optIndex];
        }
        return next;
      });
    },
    [questions],
  );

  const goPrev = useCallback(() => {
    if (reviewing) {
      setReviewIndex((p) => Math.max(0, p - 1));
    } else {
      setIndex((p) => Math.max(0, p - 1));
    }
  }, [reviewing]);

  const goNext = useCallback(() => {
    if (reviewing) {
      setReviewIndex((p) => Math.min(questions.length - 1, p + 1));
    } else {
      setIndex((p) => Math.min(questions.length - 1, p + 1));
    }
  }, [questions.length, reviewing]);

  // Keyboard shortcuts
  useEffect(() => {
    if (phase !== "running" || questions.length === 0) return;
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA"))
        return;
      const q = questions[index];
      if (!q) return;
      const key = e.key.toLowerCase();
      const letterIdx = "abcde".indexOf(key);
      const numIdx = ["1", "2", "3", "4", "5"].indexOf(e.key);
      const optIdx = letterIdx >= 0 ? letterIdx : numIdx;
      if (optIdx >= 0 && optIdx < q.options.length) {
        e.preventDefault();
        toggleOption(index, optIdx);
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setIndex((p) => Math.max(0, p - 1));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setIndex((p) => Math.min(questions.length - 1, p + 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, index, questions, toggleOption]);

  // Keyboard for review mode
  useEffect(() => {
    if (!(phase === "finished" && reviewing)) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setReviewIndex((p) => Math.max(0, p - 1));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setReviewIndex((p) => Math.min(questions.length - 1, p + 1));
      } else if (e.key === "Escape") {
        setReviewing(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, reviewing, questions.length]);

  if (questions.length === 0) {
    return (
      <Card className="rounded-2xl border-2 border-[#4c4f69] bg-[#eff1f5] shadow-[4px_4px_0_#4c4f69]">
        <CardContent className="p-8 text-center">
          <p className="font-bold text-[#4c4f69]">
            Belum ada soal buat mode kompetitif
          </p>
          <Button onClick={onExit} variant="outline" className="mt-4">
            <LuArrowLeft /> Kembali
          </Button>
        </CardContent>
      </Card>
    );
  }

  /* ------------------------------ START SCREEN ----------------------------- */
  if (phase === "start") {
    return (
      <div className="mx-auto w-full max-w-2xl space-y-5 px-4 pt-8 pb-12">
        <Card className="overflow-hidden rounded-2xl border-2 border-[#4c4f69] bg-[#eff1f5] shadow-[4px_4px_0_#4c4f69]">
          <CardContent className="p-6 text-center sm:p-8">
            <div className="mx-auto flex size-20 -rotate-3 items-center justify-center rounded-2xl border-2 border-[#4c4f69] bg-[#df8e1d] text-white shadow-[4px_4px_0_#4c4f69]">
              <LuTrophy className="size-10" />
            </div>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-[#4c4f69]">
              Mode Kompetitif
            </h2>
            <p className="mt-1 text-sm font-medium text-[#4c4f69]/70">
              {courseTitle} • {questions.length} soal •{" "}
              {formatDuration(totalTime)} total
            </p>

            {best && (
              <div className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-2xl border-2 border-[#4c4f69] bg-[#df8e1d]/15 px-4 py-2 text-sm font-bold text-[#4c4f69] shadow-[3px_3px_0_#4c4f69]">
                <LuMedal className="size-4 text-[#df8e1d]" />
                Best: {best.percent}% ({best.correct}/{best.total})
              </div>
            )}

            <div className="mt-5 space-y-2 rounded-2xl border-2 border-[#4c4f69] bg-white p-4 text-left text-sm font-medium text-[#4c4f69] shadow-[3px_3px_0_#4c4f69]">
              <p className="font-black">Rules main:</p>
              <ul className="list-inside list-disc space-y-1 text-[0.85rem]">
                <li>
                  <b>2 menit per soal</b> — total{" "}
                  {formatDuration(totalTime)} untuk {questions.length}{" "}
                  soal.
                </li>
                <li>Semua soal keluar, bebas maju–mundur (prev/next).</li>
                <li>Pembahasan baru muncul setelah kamu kumpulkan.</li>
                <li>
                  Keyboard: <b>A–E / 1–5</b> buat jawab, <b>← →</b>{" "}
                  buat pindah soal.
                </li>
                <li>Waktu habis = otomatis dikumpulkan!</li>
              </ul>
            </div>

            <Button onClick={start} size="lg" className="mt-6 w-full text-base">
              <LuZap /> Gaskeun!
            </Button>
            <Button
              onClick={onExit}
              variant="outline"
              className="mt-2 w-full"
            >
              <LuArrowLeft /> Balik dulu
            </Button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-medium text-[#4c4f69]/60">
              <LuKeyboard className="size-3.5" /> Tips: tangan di keyboard,
              mata di soal!
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* ----------------------------- FINISH SCREEN ----------------------------- */
  if (phase === "finished") {
    const { grade, message } = gradeFor(percent);
    const wrongCount = questions.length - correctCount;
    const gradeBg =
      grade === "S"
        ? "bg-[#df8e1d]"
        : grade === "A"
          ? "bg-[#40a02b]"
          : grade === "B"
            ? "bg-[#1e66f5]"
            : "bg-[#e64553]";

    if (reviewing) {
      const r = results[reviewIndex];
      const q = r.question;
      return (
        <div className="mx-auto w-full max-w-3xl space-y-4 px-4 pt-8 pb-12">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Badge className="rounded-xl border-2 border-[#4c4f69] bg-[#8839ef] px-3 py-1 text-xs font-black text-white shadow-[3px_3px_0_#4c4f69]">
              <LuEye /> Pembahasan {reviewIndex + 1}/{questions.length}
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setReviewing(false)}
            >
              <LuFlag /> Balik ke skor
            </Button>
          </div>

          <Card className="rounded-2xl border-2 border-[#4c4f69] bg-white shadow-[4px_4px_0_#4c4f69]">
            <CardContent className="space-y-4 p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="secondary"
                  className="rounded-xl border-2 border-[#4c4f69]"
                >
                  Soal {reviewIndex + 1}/{questions.length}
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-xl border-2 border-[#4c4f69] bg-[#eff1f5]"
                >
                  {decodeUnicodeEscapes(q.sectionTitle)}
                </Badge>
                {r.correct ? (
                  <Badge className="rounded-xl border-2 border-[#4c4f69] bg-[#40a02b] text-white">
                    <LuCircleCheck /> Benar
                  </Badge>
                ) : (
                  <Badge className="rounded-xl border-2 border-[#4c4f69] bg-[#e64553] text-white">
                    <LuCircleX /> Salah
                  </Badge>
                )}
              </div>

              <div className="text-[0.95rem] font-bold leading-relaxed text-[#4c4f69]">
                <RichMathText content={q.text} />
              </div>

              <div className="space-y-2">
                {q.options.map((opt, oi) => {
                  const isCorrect = q.answers.includes(oi);
                  const isUser = r.user.includes(oi);
                  return (
                    <div
                      key={oi}
                      className={`flex items-start gap-3 rounded-2xl border-2 p-3 text-sm font-medium ${
                        isCorrect
                          ? "border-[#4c4f69] bg-[#40a02b]/10 shadow-[3px_3px_0_#4c4f69]"
                          : isUser
                            ? "border-[#4c4f69] bg-[#e64553]/10 shadow-[3px_3px_0_#4c4f69]"
                            : "border-[#4c4f69]/20 bg-[#eff1f5]"
                      }`}
                    >
                      <span
                        className={`flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-[#4c4f69] text-xs font-black ${
                          isCorrect
                            ? "bg-[#40a02b] text-white"
                            : isUser
                              ? "bg-[#e64553] text-white"
                              : "bg-white text-[#4c4f69]"
                        }`}
                      >
                        {optionLabels[oi] ?? oi + 1}
                      </span>
                      <div className="flex-1 text-[#4c4f69]">
                        <RichMathText content={opt} />
                      </div>
                      {isCorrect && (
                        <LuCircleCheck className="mt-0.5 size-4 shrink-0 text-[#40a02b]" />
                      )}
                      {!isCorrect && isUser && (
                        <LuCircleX className="mt-0.5 size-4 shrink-0 text-[#e64553]" />
                      )}
                    </div>
                  );
                })}
              </div>

              <RichExplanationCard
                questionId={q.id}
                questionText={q.text}
                options={q.options}
                selectedAnswers={r.user}
                correctAnswers={q.answers}
                explanation={q.explanation}
                sectionTitle={q.sectionTitle}
                chapterTitle={q.chapterTitle}
                isCorrect={r.correct}
              />
            </CardContent>
          </Card>

          <div className="flex items-center justify-between gap-2">
            <Button
              variant="outline"
              onClick={goPrev}
              disabled={reviewIndex === 0}
            >
              <LuArrowLeft /> Prev
            </Button>
            <span className="text-xs font-bold tabular-nums text-[#4c4f69]/70">
              {reviewIndex + 1} / {questions.length}
            </span>
            <Button
              variant="outline"
              onClick={goNext}
              disabled={reviewIndex === questions.length - 1}
            >
              Next <LuArrowRight />
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="mx-auto w-full max-w-2xl space-y-5 px-4 pt-8 pb-12">
        <Card className="overflow-hidden rounded-2xl border-2 border-[#4c4f69] bg-[#eff1f5] text-center shadow-[4px_4px_0_#4c4f69]">
          <CardContent className="p-6 sm:p-8">
            <div
              className={`mx-auto flex size-20 rotate-3 items-center justify-center rounded-2xl border-2 border-[#4c4f69] text-3xl font-black text-white shadow-[4px_4px_0_#4c4f69] ${gradeBg}`}
            >
              {grade}
            </div>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-[#4c4f69]">
              {message}
            </h2>
            <p className="mt-2 text-5xl font-black tabular-nums tracking-tight text-[#8839ef]">
              {percent}%
            </p>
            <p className="mt-1 text-sm font-bold text-[#4c4f69]/70">
              {correctCount} benar dari {questions.length} soal •{" "}
              {courseTitle}
            </p>

            {isNewBest ? (
              <div className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-2xl border-2 border-[#4c4f69] bg-[#40a02b]/15 px-4 py-2 text-sm font-black text-[#40a02b] shadow-[3px_3px_0_#4c4f69]">
                <LuSparkles className="size-4" /> Rekor baru! Best tersimpan
              </div>
            ) : best ? (
              <div className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-2xl border-2 border-[#4c4f69] bg-white px-4 py-2 text-sm font-bold text-[#4c4f69] shadow-[3px_3px_0_#4c4f69]">
                <LuMedal className="size-4 text-[#df8e1d]" />
                Best: {best.percent}% ({best.correct}/{best.total})
              </div>
            ) : null}

            <div className="mt-5 grid grid-cols-3 gap-2.5">
              <div className="rounded-2xl border-2 border-[#4c4f69] bg-[#40a02b]/10 p-3 shadow-[3px_3px_0_#4c4f69]">
                <LuCircleCheck className="mx-auto size-5 text-[#40a02b]" />
                <p className="mt-1 text-xl font-black tabular-nums text-[#4c4f69]">
                  {correctCount}
                </p>
                <p className="text-xs font-bold text-[#4c4f69]/70">Benar</p>
              </div>
              <div className="rounded-2xl border-2 border-[#4c4f69] bg-[#e64553]/10 p-3 shadow-[3px_3px_0_#4c4f69]">
                <LuCircleX className="mx-auto size-5 text-[#e64553]" />
                <p className="mt-1 text-xl font-black tabular-nums text-[#4c4f69]">
                  {wrongCount}
                </p>
                <p className="text-xs font-bold text-[#4c4f69]/70">Salah</p>
              </div>
              <div className="rounded-2xl border-2 border-[#4c4f69] bg-[#1e66f5]/10 p-3 shadow-[3px_3px_0_#4c4f69]">
                <LuTimer className="mx-auto size-5 text-[#1e66f5]" />
                <p className="mt-1 text-sm font-black tabular-nums text-[#4c4f69]">
                  {formatDuration(timeUsed)}
                </p>
                <p className="text-xs font-bold text-[#4c4f69]/70">Waktu</p>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Button
                onClick={() => {
                  setReviewIndex(0);
                  setReviewing(true);
                }}
                className="w-full"
                size="lg"
              >
                <LuEye /> Lihat pembahasan
              </Button>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" onClick={start}>
                  <LuRotateCcw /> Main lagi
                </Button>
                <Button variant="outline" onClick={onExit}>
                  <LuLogOut /> Keluar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* ----------------------------- RUNNING SCREEN ---------------------------- */
  const q = questions[index];
  const urgent = timeLeft < 60;
  const progressPct =
    questions.length === 0 ? 0 : (answeredCount / questions.length) * 100;

  return (
    <div className="mx-auto w-full max-w-3xl space-y-4 px-4 pt-8 pb-12">
      {/* Timer + progress header */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div
          className={`flex items-center gap-2 rounded-2xl border-2 border-[#4c4f69] px-4 py-2 font-black tabular-nums shadow-[4px_4px_0_#4c4f69] ${
            urgent
              ? "animate-pulse bg-[#e64553] text-white"
              : "bg-white text-[#4c4f69]"
          }`}
        >
          <LuClock className="size-5" />
          <span className="text-lg tabular-nums">{formatHMS(timeLeft)}</span>
        </div>
        <Badge className="rounded-xl border-2 border-[#4c4f69] bg-white px-3 py-1 text-xs font-black text-[#4c4f69] shadow-[3px_3px_0_#4c4f69]">
          <LuZap className="size-3.5 text-[#df8e1d]" />
          Terjawab {answeredCount}/{questions.length}
        </Badge>
      </div>
      <Progress value={progressPct} className="h-2.5" />

      {/* Question card */}
      <Card className="rounded-2xl border-2 border-[#4c4f69] bg-white shadow-[4px_4px_0_#4c4f69]">
        <CardContent className="space-y-4 p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="rounded-xl border-2 border-[#4c4f69] bg-[#8839ef] px-3 py-1 text-xs font-black text-white shadow-[3px_3px_0_#4c4f69]">
              Soal {index + 1}/{questions.length}
            </Badge>
            <Badge
              variant="outline"
              className="rounded-xl border-2 border-[#4c4f69] bg-[#eff1f5] text-[#4c4f69]"
            >
              {decodeUnicodeEscapes(q.sectionTitle)}
            </Badge>
            {q.multiple && (
              <Badge className="rounded-xl border-2 border-[#4c4f69] bg-[#ea76cb] text-xs font-black text-white shadow-[2px_2px_0_#4c4f69]">
                Pilih banyak!
              </Badge>
            )}
          </div>

          <div className="text-[0.95rem] font-bold leading-relaxed text-[#4c4f69]">
            <RichMathText content={q.text} />
          </div>

          <div className="space-y-2.5">
            {q.options.map((opt, oi) => {
              const isSelected = (selected[index] ?? []).includes(oi);
              return (
                <button
                  key={oi}
                  type="button"
                  onClick={() => toggleOption(index, oi)}
                  className={`flex w-full items-start gap-3 rounded-2xl border-2 p-3.5 text-left transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 ${
                    isSelected
                      ? "border-[#8839ef] bg-blue-50 shadow-[4px_4px_0_#8839ef]"
                      : "border-[#4c4f69] bg-white shadow-[3px_3px_0_#4c4f69] hover:bg-[#eff1f5]"
                  }`}
                >
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-black ${
                      isSelected
                        ? "border-[#8839ef] bg-[#8839ef] text-white"
                        : "border-[#4c4f69] bg-[#eff1f5] text-[#4c4f69]"
                    }`}
                  >
                    {optionLabels[oi] ?? oi + 1}
                  </span>
                  <span className="flex-1 text-sm font-medium leading-relaxed text-[#4c4f69]">
                    <RichMathText content={opt} />
                  </span>
                </button>
              );
            })}
          </div>
          <p className="flex items-center gap-1.5 text-xs font-medium text-[#4c4f69]/50">
            <LuKeyboard className="size-3.5" /> Tekan A–E / 1–5 buat jawab,
            ← → buat pindah soal.
          </p>
        </CardContent>
      </Card>

      {/* Footer nav */}
      <div className="flex items-center justify-between gap-2">
        <Button
          variant="outline"
          onClick={goPrev}
          disabled={index === 0}
        >
          <LuArrowLeft /> Prev
        </Button>
        <Button onClick={finish} variant="default">
          <LuSend /> Kumpulkan!
        </Button>
        <Button
          variant="outline"
          onClick={goNext}
          disabled={index === questions.length - 1}
        >
          Next <LuArrowRight />
        </Button>
      </div>
    </div>
  );
}
