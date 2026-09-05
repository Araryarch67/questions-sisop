"use client";

import { useState } from "react";
import { TryoutEtsQuiz, type QuizBankMeta } from "@/components/tryout-ets-quiz";
import { tryoutChapters, tryoutEtsQuestions } from "@/lib/tryout-ets";
import { tryoutEasChapters, tryoutEasQuestions } from "@/lib/tryout-eas";

const easBankMeta: QuizBankMeta = {
  bankTag: "EAS",
  subjectLine: "JARINGAN KOMPUTER",
  moduleEyebrow: "MODUL PELATIHAN EAS // SILABUS KUROSE & ROSS",
  hubDescription:
    "Soal tryout telah dipetakan secara terstruktur ke dalam 3 Bab silabus mata kuliah Jaringan Komputer. Pilih bab yang ingin kamu kuasai, atau mulai simulasi penuh seluruh bab.",
  searchPlaceholder: "Cari topik (TCP, DNS, HTTP)...",
  simulationBadge: "FULL EAS SIMULATION MODE",
  simulationTitle: `Simulasi Komprehensif EAS (Semua ${tryoutEasQuestions.length} Soal)`,
  simulationDescription:
    "Uji kemampuanmu secara menyeluruh seperti menghadapi ujian EAS sesungguhnya. Progres jawaban tersimpan otomatis di perangkatmu dan dapat dilanjutkan kapan saja.",
  syllabusFooter: "TRYOUT-EAS // SILABUS KUROSE & ROSS",
  partFilters: [
    { label: "SEMUA BAB (3)", value: "ALL" },
    { label: "PART 1: NETWORKS & INTERNET (CH 1)", value: "PART 1" },
    { label: "PART 2: APPLICATION LAYER (CH 2)", value: "PART 2" },
    { label: "PART 3: TRANSPORT LAYER (CH 3)", value: "PART 3" },
  ],
};

type BankId = "ets" | "eas";

const banks: { id: BankId; label: string; detail: string; count: number }[] = [
  {
    id: "ets",
    label: "ETS",
    detail: "SISTEM OPERASI",
    count: tryoutEtsQuestions.length,
  },
  {
    id: "eas",
    label: "EAS",
    detail: "JARINGAN KOMPUTER",
    count: tryoutEasQuestions.length,
  },
];

export default function Home() {
  const [bank, setBank] = useState<BankId>("ets");

  return (
    <div className="min-h-svh bg-[#080808] text-[#e8e0d1]">
      <nav
        aria-label="Pilih bank soal"
        className="border-b border-white/10 bg-[#0c0c0c]"
      >
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 px-4 py-2.5 sm:px-6">
          <span className="mr-1 font-mono text-[0.58rem] font-semibold tracking-[0.2em] text-[#7d7973]">
            BANK SOAL:
          </span>
          {banks.map((b) => {
            const active = bank === b.id;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => setBank(b.id)}
                aria-pressed={active}
                className={`border px-3 py-1.5 font-mono text-[0.62rem] font-bold tracking-[0.14em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f0e9df] ${
                  active
                    ? "border-[#f2a89e] bg-[#f2a89e] text-[#171311]"
                    : "border-white/15 bg-white/[0.02] text-[#9d9992] hover:border-white/30 hover:text-[#e8e0d1]"
                }`}
              >
                {b.label} · {b.detail} · {b.count} SOAL
              </button>
            );
          })}
        </div>
      </nav>

      {bank === "eas" ? (
        <TryoutEtsQuiz
          key="eas"
          questions={tryoutEasQuestions}
          chapters={tryoutEasChapters}
          bank={easBankMeta}
          storagePrefix="ryoku_tryout_eas"
          title="TRYOUT-EAS"
        />
      ) : (
        <TryoutEtsQuiz
          key="ets"
          questions={tryoutEtsQuestions}
          chapters={tryoutChapters}
          title="TRYOUT-ETS"
        />
      )}
    </div>
  );
}
