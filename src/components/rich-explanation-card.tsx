"use client";

import { useMemo, useState } from "react";
import {
  LuCircleCheck,
  LuCircleX,
  LuBookOpen,
  LuSparkles,
  LuChevronDown,
  LuChevronUp,
  LuCircleAlert,
  LuLightbulb,
  LuCopy,
  LuCheck,
} from "react-icons/lu";
import { RichMathText } from "./rich-math-text";
import { decodeUnicodeEscapes } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    navigator.clipboard.writeText(decodeUnicodeEscapes(explanation));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const parsedSections = useMemo(() => parseExplanationSections(explanation), [explanation]);

  const optionLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <Card className="mt-6 gap-0 overflow-hidden bg-white py-0">
      {/* Sticker Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#4c4f69] bg-[#e6e9ef] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2.5">
          <div
            className={`flex size-8 -rotate-3 items-center justify-center rounded-xl border-2 border-[#4c4f69] font-mono text-xs font-bold shadow-[2px_2px_0_#4c4f69] ${
              isCorrect ? "bg-[#40a02b] text-white" : "bg-[#e64553] text-white"
            }`}
          >
            {isCorrect ? (
              <LuCircleCheck className="size-3.5" />
            ) : (
              <LuCircleX className="size-3.5" />
            )}
          </div>
          <span className="text-sm font-bold tracking-tight text-[#4c4f69]">
            {isCorrect ? "Jawaban tepat, keren!" : "Kurang tepat, gapapa!"}
          </span>
          {sectionTitle && (
            <Badge variant="secondary" className="hidden px-2 py-0.5 text-[11px] md:inline-flex">
              {sectionTitle}
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-2">
          {explanation && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className={`flex items-center gap-1 rounded-xl border-2 bg-white px-2.5 py-1 text-[11px] font-bold ${copied ? "scale-105 border-[#4c4f69] text-[#40a02b]" : "border-[#4c4f69] text-[#6c6f85]"}`}
              title="Salin penjelasan ke clipboard"
            >
              {copied ? (
                <>
                  <LuCheck className="size-3" /> Tersalin!
                </>
              ) : (
                <>
                  <LuCopy className="size-3" /> Salin
                </>
              )}
            </Button>
          )}

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 px-2.5 py-1 text-[11px] text-[#6c6f85]"
          >
            {isExpanded ? (
              <>
                <LuChevronUp className="size-3" /> Tutup
              </>
            ) : (
              <>
                <LuChevronDown className="size-3" /> Lihat detail!
              </>
            )}
          </Button>
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
            <div className="rounded-2xl border-2 border-[#4c4f69] bg-[#40a02b]/10 p-3 shadow-[2px_2px_0_#4c4f69]">
              <span className="text-[11px] font-bold text-[#40a02b]">
                Kunci jawaban:
              </span>
              <div className="mt-1 text-sm font-medium text-[#4c4f69]">
                {correctAnswers.map((ansIdx) => {
                  const letter = optionLetters[ansIdx] || `${ansIdx + 1}`;
                  const text = options[ansIdx] || "";
                  return (
                    <div key={ansIdx} className="flex items-start gap-2">
                      <span className="font-bold">[{letter}]</span>
                      <span className="text-xs font-medium leading-5 text-[#4c4f69]">{text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className={`rounded-2xl border-2 p-3 ${
                isCorrect
                  ? "border-emerald-200 bg-emerald-50"
                  : selectedAnswers.length === 0
                  ? "border-amber-200 bg-amber-50"
                  : "border-red-200 bg-red-50"
              }`}
            >
              <span
                className={`text-[11px] font-bold ${
                  isCorrect
                    ? "text-emerald-400"
                    : selectedAnswers.length === 0
                    ? "text-amber-400"
                    : "text-rose-400"
                }`}
              >
                Jawaban kamu:
              </span>
              <div className="mt-1 text-sm">
                {selectedAnswers.length === 0 ? (
                  <span className="text-amber-600 italic text-xs">Belum dijawab</span>
                ) : (
                  selectedAnswers.map((ansIdx) => {
                    const letter = optionLetters[ansIdx] || `${ansIdx + 1}`;
                    const text = options[ansIdx] || "";
                    return (
                      <div key={ansIdx} className="flex items-start gap-2">
                        <span className={`font-bold ${isCorrect ? "text-emerald-300" : "text-rose-300"}`}>
                          [{letter}]
                        </span>
                        <span className="text-xs leading-5 text-[#6c6f85]">{text}</span>
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
                  className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-3.5 text-xs text-[#4c4f69]"
                >
                  <div className="mb-2 flex items-center gap-1.5 text-[14px] font-bold tracking-tight text-[#df8e1d]">
                    <LuBookOpen className="size-4" /> Konsep kunci seru!
                  </div>
                  <RichMathText content={parsedSections.concept} className="text-[#4c4f69] text-[0.82rem]" />
                </div>
              )}

              {/* Section 2: Pembahasan Lengkap */}
              {parsedSections.discussion && (
                <div
                  className="rounded-2xl border-2 border-[#4c4f69] bg-blue-50 p-3.5 text-xs text-[#4c4f69]"
                >
                  <div className="mb-2 flex items-center gap-1.5 text-[13px] font-bold text-[#8839ef]">
                    <LuLightbulb className="size-4" /> Pembahasan santai!
                  </div>
                  <RichMathText content={parsedSections.discussion} className="text-[#4c4f69] text-[0.82rem]" />
                </div>
              )}

              {/* Section 3: Analisis Opsi Lain */}
              {parsedSections.optionsAnalysis && (
                <div
                  className="rounded-2xl border-2 border-red-200 bg-red-50 p-3.5 text-xs text-[#4c4f69]"
                >
                  <div className="mb-2 flex items-center gap-1.5 text-[13px] font-bold text-red-600">
                    <LuCircleAlert className="size-4" /> Kenapa opsi lain salah?
                  </div>
                  <RichMathText content={parsedSections.optionsAnalysis} className="text-[#4c4f69] text-[0.82rem]" />
                </div>
              )}

              {/* Section 4: Poin Penting */}
              {parsedSections.keyTakeaway && (
                <div
                  className="rounded-2xl border-2 border-[#4c4f69] bg-[#e6e9ef] p-3.5 text-xs text-[#4c4f69]"
                >
                  <div className="mb-1.5 flex items-center gap-1.5 text-[13px] font-bold text-[#4c4f69]">
                    <LuSparkles className="size-3.5 text-[#6c6f85]" /> Poin penting
                  </div>
                  <RichMathText content={parsedSections.keyTakeaway} className="text-[#4c4f69] text-[0.82rem] font-medium" />
                </div>
              )}
            </div>
          ) : explanation ? (
            <div className="rounded-2xl border-2 border-[#4c4f69] bg-[#e6e9ef] p-4 text-xs">
              <div className="mb-2 font-mono text-[0.68rem] font-bold text-[#6c6f85]">
                Pembahasan soal
              </div>
              <RichMathText content={explanation} className="text-[#4c4f69] text-[0.82rem]" />
            </div>
          ) : (
            <div className="rounded-2xl border-2 border-[#4c4f69] bg-[#e6e9ef] p-3 text-xs text-[#6c6f85]">
              Ups, pembahasan rinci belum ada nih! Tapi kunci jawabannya udah bener kok.
            </div>
          )}
          </div>
        </div>
      </div>
    </Card>
  );
}
