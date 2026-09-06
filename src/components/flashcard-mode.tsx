"use client";

import { useEffect, useMemo, useState } from "react";
import {
  LuArrowLeft,
  LuArrowRight,
  LuBookOpen,
  LuCheck,
  LuEye,
  LuLayers,
  LuPin,
  LuRotateCcw,
  LuShuffle,
  LuSparkles,
  LuX,
} from "react-icons/lu";
import type { QuizQuestion } from "@/components/tryout-ets-quiz";
import { RichMathText } from "@/components/rich-math-text";
import { decodeUnicodeEscapes } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export type FlashcardModeProps = {
  questions: QuizQuestion[];
  courseTitle: string;
  storagePrefix: string;
  onExit: () => void;
};

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function loadKnown(storagePrefix: string): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(`${storagePrefix}_flash_known`);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((v): v is number => typeof v === "number");
  } catch {
    return [];
  }
}

export function FlashcardMode({
  questions,
  courseTitle,
  storagePrefix,
  onExit,
}: FlashcardModeProps) {
  // Deck: skip questions with no correct answers gracefully.
  const validQuestions = useMemo(
    () =>
      questions.filter(
        (q) =>
          Array.isArray(q.answers) &&
          q.answers.length > 0 &&
          Array.isArray(q.options) &&
          q.options.length > 0 &&
          q.answers.some((a) => a >= 0 && a < q.options.length),
      ),
    [questions],
  );

  const [known, setKnown] = useState<number[]>(() => loadKnown(storagePrefix));
  const [order, setOrder] = useState<number[] | null>(null); // null = original order
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showUnknownOnly, setShowUnknownOnly] = useState(false);

  // Reload persisted hafalan when the bank changes.
  useEffect(() => {
    setKnown(loadKnown(storagePrefix));
    setOrder(null);
    setPos(0);
    setFlipped(false);
    setShowUnknownOnly(false);
  }, [storagePrefix, questions]);

  // Persist hafalan.
  useEffect(() => {
    try {
      window.localStorage.setItem(
        `${storagePrefix}_flash_known`,
        JSON.stringify(known),
      );
    } catch {
      // storage may be unavailable — fail silently
    }
  }, [known, storagePrefix]);

  const knownSet = useMemo(() => new Set(known), [known]);

  const baseOrder = useMemo(
    () => validQuestions.map((q) => q.id),
    [validQuestions],
  );

  const deck = useMemo(() => {
    const byId = new Map(validQuestions.map((q) => [q.id, q]));
    const seqIds = order ?? baseOrder;
    const sequenced = seqIds
      .map((id) => byId.get(id))
      .filter((q): q is QuizQuestion => q !== undefined);
    // Include any new questions missing from a shuffled order.
    if (order) {
      const inOrder = new Set(seqIds);
      for (const q of validQuestions) {
        if (!inOrder.has(q.id)) sequenced.push(q);
      }
    }
    if (showUnknownOnly) return sequenced.filter((q) => !knownSet.has(q.id));
    return sequenced;
  }, [validQuestions, order, baseOrder, knownSet, showUnknownOnly]);

  // Keep position in range when deck shrinks (filter / bank change).
  useEffect(() => {
    if (pos >= deck.length) {
      setPos(deck.length > 0 ? deck.length - 1 : 0);
      setFlipped(false);
    }
  }, [deck.length, pos]);

  const current = deck.length > 0 ? deck[Math.min(pos, deck.length - 1)] : null;
  const currentKnown = current ? knownSet.has(current.id) : false;

  const goTo = (next: number) => {
    if (deck.length === 0) return;
    const clamped = Math.max(0, Math.min(next, deck.length - 1));
    setPos(clamped);
    setFlipped(false);
  };

  const shuffleDeck = () => {
    const ids = validQuestions.map((q) => q.id);
    for (let i = ids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ids[i], ids[j]] = [ids[j] as number, ids[i] as number];
    }
    setOrder(ids);
    setPos(0);
    setFlipped(false);
  };

  const markKnown = (id: number, value: boolean) => {
    setKnown((prev) => {
      const has = prev.includes(id);
      if (value && !has) return [...prev, id];
      if (!value && has) return prev.filter((v) => v !== id);
      return prev;
    });
  };

  const resetKnown = () => {
    if (
      window.confirm(
        "Reset semua tanda hafalan? Progres hafalan kartu akan dihapus.",
      )
    ) {
      setKnown([]);
    }
  };

  // Keyboard: space flips, arrows navigate. Ignored while typing.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(pos + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(pos - 1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pos, deck.length]);

  const knownCount = validQuestions.filter((q) => knownSet.has(q.id)).length;
  const progressValue =
    deck.length > 0 ? ((Math.min(pos, deck.length - 1) + 1) / deck.length) * 100 : 0;

  return (
    <div className="mx-auto w-full max-w-3xl space-y-5 px-4 pt-8 pb-12">
      {/* Intro header */}
      <div className="flex flex-wrap items-start justify-between gap-3 rounded-2xl border-2 border-[#4c4f69] bg-[#eff1f5] p-4 shadow-[4px_4px_0_#4c4f69]">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border-2 border-[#4c4f69] bg-[#8839ef] text-xl text-white shadow-[3px_3px_0_#4c4f69]">
            <LuLayers />
          </span>
          <div>
            <Badge className="border-2 border-[#4c4f69] bg-[#ea76cb] font-bold text-white">
              MODE HAFALAN
            </Badge>
            <h2 className="mt-1 text-xl font-black text-[#4c4f69]">
              {decodeUnicodeEscapes(courseTitle)}
            </h2>
            <p className="text-sm font-semibold text-[#4c4f69]/70">
              {validQuestions.length} kartu &bull; {knownCount} hafal &bull;{" "}
              spasi untuk balik, panah untuk pindah
            </p>
          </div>
        </div>
        <Button
          onClick={onExit}
          className="rounded-2xl border-2 border-[#4c4f69] bg-white font-bold text-[#4c4f69] shadow-[3px_3px_0_#4c4f69] hover:bg-[#e6e9ef]"
        >
          <LuX /> Keluar
        </Button>
      </div>

      {/* Progress + counters */}
      <div className="rounded-2xl border-2 border-[#4c4f69] bg-white p-4 shadow-[4px_4px_0_#4c4f69]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-black text-[#4c4f69]">
            Kartu {deck.length > 0 ? Math.min(pos, deck.length - 1) + 1 : 0} dari{" "}
            {deck.length}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border-2 border-[#4c4f69] bg-[#40a02b] font-bold text-white">
              <LuCheck className="mr-1" /> Hafal {knownCount}/{validQuestions.length}
            </Badge>
            <Button
              size="sm"
              onClick={() => {
                setShowUnknownOnly((v) => !v);
                setPos(0);
                setFlipped(false);
              }}
              className={`rounded-xl border-2 border-[#4c4f69] font-bold shadow-[2px_2px_0_#4c4f69] ${
                showUnknownOnly
                  ? "bg-[#df8e1d] text-white"
                  : "bg-white text-[#4c4f69] hover:bg-[#e6e9ef]"
              }`}
            >
              <LuPin /> Belum hafal aja
            </Button>
          </div>
        </div>
        <Progress value={progressValue} className="mt-3" />
      </div>

      {current ? (
        <>
          {/* Flip card */}
          <div className="[perspective:1200px]">
            <div
              className="relative transition-transform duration-500 [transform-style:preserve-3d]"
              style={{
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* FRONT */}
              <Card
                onClick={() => setFlipped(true)}
                className="relative flex min-h-[280px] cursor-pointer flex-col overflow-hidden rounded-2xl border-2 border-[#4c4f69] bg-white shadow-[4px_4px_0_#4c4f69] [backface-visibility:hidden]"
              >
                <span aria-hidden="true" className="dots-fun pointer-events-none absolute inset-0 opacity-50" />
                <span aria-hidden="true" className="pointer-events-none absolute -bottom-8 -right-2 select-none text-[120px] font-black leading-none text-[#8839ef]/10">?</span>
                <CardContent className="relative flex flex-1 flex-col justify-center gap-3 p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="border-2 border-[#4c4f69] bg-[#8839ef] font-bold text-white">
                      CH{current.chapterNumber} &bull;{" "}
                      {decodeUnicodeEscapes(current.chapterTitle)}
                    </Badge>
                    <Badge className="border-2 border-[#1e66f5] bg-[#1e66f5]/10 font-bold text-[#1e66f5]">
                      {decodeUnicodeEscapes(current.sectionTitle)}
                    </Badge>
                    {current.multiple ? (
                      <Badge className="border-2 border-[#4c4f69] bg-[#ea76cb]/20 font-bold text-[#ea76cb]">
                        Pilihan ganda
                      </Badge>
                    ) : null}
                  </div>
                  <div className="text-lg font-bold leading-relaxed text-[#4c4f69]">
                    <RichMathText
                      content={decodeUnicodeEscapes(current.text)}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm font-black text-[#8839ef]">
                    <LuEye /> Tap untuk balik!
                  </div>
                </CardContent>
              </Card>

              {/* BACK */}
              <Card className="absolute inset-0 overflow-y-auto rounded-2xl border-2 border-[#4c4f69] bg-[#e6e9ef] shadow-[4px_4px_0_#4c4f69] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <CardContent className="flex min-h-full flex-col gap-3 p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="border-2 border-[#4c4f69] bg-[#40a02b] font-bold text-white">
                      <LuCheck className="mr-1" /> Jawaban benar
                    </Badge>
                    <Badge className="border-2 border-[#4c4f69] bg-white font-bold text-[#4c4f69]">
                      CH{current.chapterNumber} &bull;{" "}
                      {decodeUnicodeEscapes(current.sectionTitle)}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {current.answers
                      .filter((a) => a >= 0 && a < current.options.length)
                      .map((a) => (
                        <li
                          key={a}
                          className="flex items-start gap-2 rounded-2xl border-2 border-[#4c4f69] bg-white p-3 shadow-[3px_3px_0_#4c4f69]"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border-2 border-[#4c4f69] bg-[#40a02b] text-sm font-black text-white">
                            {LETTERS[a] ?? a + 1}
                          </span>
                          <span className="text-sm font-bold leading-relaxed text-[#4c4f69]">
                            <RichMathText
                              content={decodeUnicodeEscapes(
                                current.options[a] ?? "",
                              )}
                            />
                          </span>
                        </li>
                      ))}
                  </ul>
                  {current.explanation ? (
                    <div className="rounded-2xl border-2 border-[#4c4f69] bg-[#df8e1d]/15 p-3 shadow-[3px_3px_0_#4c4f69]">
                      <p className="mb-1 flex items-center gap-1 text-xs font-black uppercase tracking-wide text-[#df8e1d]">
                        <LuSparkles /> Penjelasan
                      </p>
                      <div className="text-sm leading-relaxed text-[#4c4f69]">
                        <RichMathText
                          content={decodeUnicodeEscapes(current.explanation)}
                        />
                      </div>
                    </div>
                  ) : null}
                  <div
                    className="mt-auto flex flex-wrap gap-2 pt-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {currentKnown ? (
                      <>
                        <Button
                          onClick={() => markKnown(current.id, false)}
                          className="flex-1 rounded-2xl border-2 border-[#4c4f69] bg-white font-bold text-[#df8e1d] shadow-[3px_3px_0_#4c4f69] hover:bg-[#df8e1d]/10"
                        >
                          Belum hafal
                        </Button>
                        <Button
                          disabled
                          className="flex-1 rounded-2xl border-2 border-[#4c4f69] bg-[#40a02b] font-bold text-white opacity-90"
                        >
                          <LuCheck /> Udah hafal!
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          onClick={() => markKnown(current.id, true)}
                          className="flex-1 rounded-2xl border-2 border-[#4c4f69] bg-[#40a02b] font-bold text-white shadow-[3px_3px_0_#4c4f69] hover:bg-[#40a02b]/90"
                        >
                          Udah hafal!
                        </Button>
                        <Button
                          onClick={() => setFlipped(false)}
                          className="flex-1 rounded-2xl border-2 border-[#4c4f69] bg-white font-bold text-[#df8e1d] shadow-[3px_3px_0_#4c4f69] hover:bg-[#df8e1d]/10"
                        >
                          Belum hafal
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border-2 border-[#4c4f69] bg-white p-3 shadow-[4px_4px_0_#4c4f69]">
            <Button
              onClick={() => goTo(pos - 1)}
              disabled={pos <= 0}
              className="rounded-2xl border-2 border-[#4c4f69] bg-white font-bold text-[#4c4f69] shadow-[3px_3px_0_#4c4f69] hover:bg-[#e6e9ef] disabled:opacity-40"
            >
              <LuArrowLeft /> Prev
            </Button>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Button
                onClick={() => setFlipped((f) => !f)}
                className="rounded-2xl border-2 border-[#4c4f69] bg-[#8839ef] font-bold text-white shadow-[3px_3px_0_#4c4f69] hover:bg-[#8839ef]/90"
              >
                <LuEye /> {flipped ? "Lihat soal" : "Balik kartu"}
              </Button>
              <Button
                onClick={shuffleDeck}
                className="rounded-2xl border-2 border-[#4c4f69] bg-[#1e66f5] font-bold text-white shadow-[3px_3px_0_#4c4f69] hover:bg-[#1e66f5]/90"
              >
                <LuShuffle /> Acak
              </Button>
            </div>
            <Button
              onClick={() => goTo(pos + 1)}
              disabled={pos >= deck.length - 1}
              className="rounded-2xl border-2 border-[#4c4f69] bg-white font-bold text-[#4c4f69] shadow-[3px_3px_0_#4c4f69] hover:bg-[#e6e9ef] disabled:opacity-40"
            >
              Next <LuArrowRight />
            </Button>
          </div>

          <div className="flex justify-center">
            <Button
              size="sm"
              onClick={resetKnown}
              className="rounded-xl border-2 border-[#4c4f69] bg-white font-bold text-[#4c4f69]/60 shadow-[2px_2px_0_#4c4f69] hover:bg-[#e6e9ef] hover:text-[#4c4f69]"
            >
              <LuRotateCcw /> Reset hafalan
            </Button>
          </div>
        </>
      ) : (
        /* Empty deck state */
        <Card className="rounded-2xl border-2 border-[#4c4f69] bg-white p-8 text-center shadow-[4px_4px_0_#4c4f69]">
          <CardContent className="flex flex-col items-center gap-3 p-0">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#4c4f69] bg-[#ea76cb]/20 text-3xl text-[#ea76cb] shadow-[3px_3px_0_#4c4f69]">
              <LuBookOpen />
            </span>
            <p className="text-lg font-black text-[#4c4f69]">
              {validQuestions.length === 0
                ? "Belum ada kartu di deck ini!"
                : "Semua kartu sudah hafal!"}
            </p>
            <p className="max-w-sm text-sm font-semibold text-[#4c4f69]/70">
              {validQuestions.length === 0
                ? "Soal-soal di bank ini belum punya kunci jawaban, jadi belum bisa dibuatkan flashcard."
                : "Keren! Kamu sudah menandai semua kartu sebagai hafal. Mau review lagi dari awal?"}
            </p>
            {validQuestions.length > 0 && showUnknownOnly ? (
              <Button
                onClick={() => {
                  setShowUnknownOnly(false);
                  setPos(0);
                  setFlipped(false);
                }}
                className="rounded-2xl border-2 border-[#4c4f69] bg-[#8839ef] font-bold text-white shadow-[3px_3px_0_#4c4f69] hover:bg-[#8839ef]/90"
              >
                Tampilkan semua kartu
              </Button>
            ) : (
              <Button
                onClick={onExit}
                className="rounded-2xl border-2 border-[#4c4f69] bg-white font-bold text-[#4c4f69] shadow-[3px_3px_0_#4c4f69] hover:bg-[#e6e9ef]"
              >
                <LuX /> Keluar
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
