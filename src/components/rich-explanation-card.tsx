"use client";

import { useMemo, useState } from "react";
import {
  CheckCircle2,
  XCircle,
  BookOpen,
  Sparkles,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Lightbulb,
  Copy,
  Check,
} from "lucide-react";
import { RichMathText } from "./rich-math-text";

interface RichExplanationCardProps {
  questionId: number;
  questionText: string;
  options: string[];
  selectedAnswers: number[];
  correctAnswers: number[];
  explanation?: string;
  sectionTitle?: string;
  chapterTitle?: string;
  isCorrect: boolean;
}

function parseExplanationSections(explanation: string) {
  if (!explanation) return null;

  const sections: {
    answerHeader?: string;
    concept?: string;
    discussion?: string;
    optionsAnalysis?: string;
    keyTakeaway?: string;
    raw?: string;
  } = {};

  // Standard pattern matching
  const answerMatch = explanation.match(/\*\*Jawaban Benar:?\*\*([\s\S]*?)(?=\n\n\*\*|$)/i);
  const conceptMatch = explanation.match(/\*\*Konsep Kunci:?\*\*([\s\S]*?)(?=\n\n\*\*|$)/i);
  const discMatch = explanation.match(/\*\*Pembahasan Lengkap:?\*\*([\s\S]*?)(?=\n\n\*\*|$)/i);
  const optMatch = explanation.match(/\*\*Analisis Opsi Lain:?\*\*([\s\S]*?)(?=\n\n\*\*|$)/i);
  const takeawayMatch = explanation.match(/\*\*Poin Penting:?\*\*([\s\S]*?)$/i);

  if (answerMatch || conceptMatch || discMatch || optMatch || takeawayMatch) {
    sections.answerHeader = answerMatch ? answerMatch[1].trim() : undefined;
    sections.concept = conceptMatch ? conceptMatch[1].trim() : undefined;
    sections.discussion = discMatch ? discMatch[1].trim() : undefined;
    sections.optionsAnalysis = optMatch ? optMatch[1].trim() : undefined;
    sections.keyTakeaway = takeawayMatch ? takeawayMatch[1].trim() : undefined;
    return sections;
  }

  return { raw: explanation };
}

export function RichExplanationCard({
  options,
  selectedAnswers,
  correctAnswers,
  explanation = "",
  sectionTitle,
  isCorrect,
}: RichExplanationCardProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleCopy = () => {
    if (!explanation) return;
    navigator.clipboard.writeText(explanation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const parsedSections = useMemo(() => parseExplanationSections(explanation), [explanation]);

  const optionLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="mt-6 overflow-hidden rounded-md border border-white/15 bg-[#0e0e11]/90 backdrop-blur-xl shadow-2xl">
      {/* Tactical Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2.5">
          <div
            className={`flex size-6 items-center justify-center rounded border font-mono text-xs font-bold ${
              isCorrect
                ? "border-emerald-500/60 bg-emerald-500/20 text-emerald-400"
                : "border-rose-500/60 bg-rose-500/20 text-rose-400"
            }`}
          >
            {isCorrect ? (
              <CheckCircle2 className="size-3.5" />
            ) : (
              <XCircle className="size-3.5" />
            )}
          </div>
          <span className="font-mono text-xs font-bold tracking-wider text-[#e8e0d1]">
            {isCorrect ? "EVALUASI: JAWABAN TEPAT (+1)" : "EVALUASI: JAWABAN KELIRU (0)"}
          </span>
          {sectionTitle && (
            <span className="hidden rounded border border-white/10 bg-black/40 px-2 py-0.5 font-mono text-[0.65rem] text-[#9d9992] md:inline-block">
              {sectionTitle}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {explanation && (
            <button
              type="button"
              onClick={handleCopy}
              className={`flex items-center gap-1 rounded border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[0.62rem] transition-all duration-300 hover:border-white/30 hover:text-white ${copied ? "scale-105 text-emerald-400 border-emerald-500/30" : "text-[#b5afa6]"}`}
              title="Salin penjelasan ke clipboard"
            >
              {copied ? (
                <>
                  <Check className="size-3 text-emerald-400" /> TERSALIN
                </>
              ) : (
                <>
                  <Copy className="size-3" /> SALIN TEKS
                </>
              )}
            </button>
          )}

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 rounded border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[0.62rem] text-[#b5afa6] transition-colors hover:border-white/30 hover:text-white"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="size-3" /> SEMBUNYIKAN
              </>
            ) : (
              <>
                <ChevronDown className="size-3" /> BUKA DETAIL
              </>
            )}
          </button>
        </div>
      </div>

      <div 
        style={{ 
          display: "grid", 
          gridTemplateRows: isExpanded ? "1fr" : "0fr", 
          transition: "grid-template-rows 400ms cubic-bezier(0.22, 1, 0.36, 1)" 
        }}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 p-4 sm:p-5">
          {/* Answer Status Summary */}
          <div className="grid gap-2 text-xs sm:grid-cols-2">
            <div className="rounded border border-emerald-500/30 bg-emerald-950/20 p-3">
              <span className="font-mono text-[0.65rem] font-bold text-emerald-400 tracking-wider">
                KUNCI JAWABAN BENAR:
              </span>
              <div className="mt-1 font-mono text-sm text-emerald-200">
                {correctAnswers.map((ansIdx) => {
                  const letter = optionLetters[ansIdx] || `${ansIdx + 1}`;
                  const text = options[ansIdx] || "";
                  return (
                    <div key={ansIdx} className="flex items-start gap-2">
                      <span className="font-bold">[{letter}]</span>
                      <span className="font-sans text-xs leading-5 text-emerald-100">{text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className={`rounded border p-3 ${
                isCorrect
                  ? "border-emerald-500/30 bg-emerald-950/20"
                  : selectedAnswers.length === 0
                  ? "border-amber-500/30 bg-amber-950/20"
                  : "border-rose-500/30 bg-rose-950/20"
              }`}
            >
              <span
                className={`font-mono text-[0.65rem] font-bold tracking-wider ${
                  isCorrect
                    ? "text-emerald-400"
                    : selectedAnswers.length === 0
                    ? "text-amber-400"
                    : "text-rose-400"
                }`}
              >
                PILIHAN ANDA:
              </span>
              <div className="mt-1 font-mono text-sm">
                {selectedAnswers.length === 0 ? (
                  <span className="text-amber-300 italic text-xs">Belum dijawab (kosong)</span>
                ) : (
                  selectedAnswers.map((ansIdx) => {
                    const letter = optionLetters[ansIdx] || `${ansIdx + 1}`;
                    const text = options[ansIdx] || "";
                    return (
                      <div key={ansIdx} className="flex items-start gap-2">
                        <span className={`font-bold ${isCorrect ? "text-emerald-300" : "text-rose-300"}`}>
                          [{letter}]
                        </span>
                        <span className="font-sans text-xs leading-5 text-[#d0c6bc]">{text}</span>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* Structured Deep Breakdown */}
          {parsedSections && !parsedSections.raw ? (
            <div className="space-y-3.5 pt-1">
              {/* Section 1: Konsep Kunci */}
              {parsedSections.concept && (
                <div
                  className="rounded border border-amber-500/25 bg-amber-500/[0.04] p-3.5 text-xs text-[#e8dfd3]"
                >
                  <div className="mb-2 flex items-center gap-1.5 font-mono text-[0.7rem] font-bold tracking-wider text-amber-400">
                    <BookOpen className="size-3.5" /> KONSEP KUNCI & BUKU REFERENSI
                  </div>
                  <RichMathText content={parsedSections.concept} className="text-[#e2dad0] text-[0.82rem]" />
                </div>
              )}

              {/* Section 2: Pembahasan Lengkap */}
              {parsedSections.discussion && (
                <div
                  className="rounded border border-sky-500/25 bg-sky-500/[0.03] p-3.5 text-xs text-[#dbe7f3]"
                >
                  <div className="mb-2 flex items-center gap-1.5 font-mono text-[0.7rem] font-bold tracking-wider text-sky-400">
                    <Lightbulb className="size-3.5" /> PEMBAHASAN LENGKAP & DERIVASI
                  </div>
                  <RichMathText content={parsedSections.discussion} className="text-[#d8e3ed] text-[0.82rem]" />
                </div>
              )}

              {/* Section 3: Analisis Opsi Lain */}
              {parsedSections.optionsAnalysis && (
                <div
                  className="rounded border border-rose-500/20 bg-rose-500/[0.02] p-3.5 text-xs text-[#edd4d2]"
                >
                  <div className="mb-2 flex items-center gap-1.5 font-mono text-[0.7rem] font-bold tracking-wider text-rose-400">
                    <AlertCircle className="size-3.5" /> ANALISIS OPSI LAIN (DISTRACTOR DECONSTRUCTION)
                  </div>
                  <RichMathText content={parsedSections.optionsAnalysis} className="text-[#ebd1cf] text-[0.82rem]" />
                </div>
              )}

              {/* Section 4: Poin Penting */}
              {parsedSections.keyTakeaway && (
                <div
                  className="rounded border border-purple-500/30 bg-purple-500/[0.05] p-3.5 text-xs text-[#f1e6fc]"
                >
                  <div className="mb-1.5 flex items-center gap-1.5 font-mono text-[0.7rem] font-bold tracking-wider text-purple-300">
                    <Sparkles className="size-3.5 text-purple-400" /> POIN PENTING & INTI RINGKASAN
                  </div>
                  <RichMathText content={parsedSections.keyTakeaway} className="text-[#f5ebff] text-[0.82rem] font-medium" />
                </div>
              )}
            </div>
          ) : explanation ? (
            <div className="rounded border border-white/10 bg-white/[0.02] p-4 text-xs">
              <div className="mb-2 font-mono text-[0.68rem] font-bold text-[#b5afa6]">
                CATATAN & PEMBAHASAN SOAL
              </div>
              <RichMathText content={explanation} className="text-[#ded6cb] text-[0.82rem]" />
            </div>
          ) : (
            <div className="rounded border border-white/10 bg-white/[0.01] p-3 font-mono text-xs text-[#8c8780]">
              [INFO] Modul pembahasan rinci untuk nomor ini sedang diarsipkan dalam basis data. Kunci jawaban telah divalidasi sesuai silabus resmi.
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
