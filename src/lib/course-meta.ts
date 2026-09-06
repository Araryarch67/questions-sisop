import { tryoutChapters, tryoutEtsQuestions, type TryoutChapter } from "@/lib/tryout-ets";
import { tryoutEasChapters, tryoutEasQuestions } from "@/lib/tryout-eas";
import type { QuizBankMeta, QuizQuestion } from "@/components/tryout-ets-quiz";

export type BankId = "ets" | "eas";

export const ETS_META: QuizBankMeta = {
  bankTag: "ETS",
  subjectLine: "Sistem Operasi (M)",
  lecturer: "Umi Laili Yuhana",
  semester: "Semester Gasal 2026/2027",
  courseDescription:
    "Mata kuliah ini membahas konsep proses, thread, penjadwalan CPU, sinkronisasi, deadlock, manajemen memori, dan sistem berkas. Mahasiswa mengerjakan kuis per modul dan simulasi komprehensif seperti di IHateITS.",
  moduleEyebrow: "Semester Gasal 2026/2027 • Kuis ETS",
  hubDescription: "",
  searchPlaceholder: "Cari modul seru… ✨",
  simulationBadge: "KUIS KOMPREHENSIF ETS",
  simulationTitle: `Kuis Komprehensif ETS (Semua 117 Soal)`,
  simulationDescription:
    "Kerjakan semua modul dalam satu kuis seperti di IHateITS. Progres tersimpan otomatis di perangkatmu.",
  syllabusFooter: "IHATEITS • SISTEM OPERASI",
  partFilters: [
    { label: "SEMUA MODUL (7)", value: "ALL" },
    { label: "PART 1: BACKGROUND (CH 1-2)", value: "PART 1" },
    { label: "PART 2: PROCESSES & THREADS (CH 3-6)", value: "PART 2" },
    { label: "PART 4: SCHEDULING (CH 9)", value: "PART 4" },
  ],
};

export const EAS_META: QuizBankMeta = {
  bankTag: "EAS",
  subjectLine: "Jaringan Komputer (M)",
  lecturer: "Daniel O. Siahaan",
  semester: "Semester Gasal 2026/2027",
  courseDescription:
    "Mata kuliah ini membahas arsitektur jaringan dan Internet, application layer, dan transport layer. Mahasiswa mengerjakan kuis per modul dan simulasi komprehensif seperti di IHateITS.",
  moduleEyebrow: "Semester Gasal 2026/2027 • Kuis EAS",
  hubDescription: "",
  searchPlaceholder: "Cari modul seru… ✨",
  simulationBadge: "KUIS KOMPREHENSIF EAS",
  simulationTitle: `Kuis Komprehensif EAS (Semua ${tryoutEasQuestions.length} Soal)`,
  simulationDescription:
    "Kerjakan semua modul dalam satu kuis seperti di IHateITS. Progres tersimpan otomatis di perangkatmu.",
  syllabusFooter: "IHATEITS • JARINGAN KOMPUTER",
  partFilters: [
    { label: "SEMUA MODUL (3)", value: "ALL" },
    { label: "MODUL 1: NETWORKS & INTERNET", value: "PART 1" },
    { label: "MODUL 2: APPLICATION LAYER", value: "PART 2" },
    { label: "MODUL 3: TRANSPORT LAYER", value: "PART 3" },
  ],
};

export type CourseCard = {
  id: BankId;
  title: string;
  lecturer: string;
  semester: string;
  count: number;
  banner: string;
  sticker: string;
  blurb: string;
};

export const COURSES: CourseCard[] = [
  {
    id: "ets",
    title: "Sistem Operasi (M)",
    lecturer: "Umi Laili Yuhana",
    semester: "Semester Gasal 2026/2027",
    count: tryoutEtsQuestions.length,
    banner:
      "bg-[#ea76cb] dots-light bg-[linear-gradient(115deg,transparent_42%,rgba(255,255,255,0.35)_42%_58%,transparent_58%)]",
    sticker: "bg-[#8839ef] -rotate-2",
    blurb: "Proses, thread & scheduling — ayo taklukkan! 💪",
  },
  {
    id: "eas",
    title: "Jaringan Komputer (M)",
    lecturer: "Daniel O. Siahaan",
    semester: "Semester Gasal 2026/2027",
    count: tryoutEasQuestions.length,
    banner:
      "bg-[#04a5e5] dots-light bg-[repeating-radial-gradient(circle_at_30%_40%,transparent_0_16px,rgba(255,255,255,0.35)_16px_18px)]",
    sticker: "bg-[#40a02b] rotate-1",
    blurb: "Packets & protocols — let's gooo! 🚀",
  },
];

export function isBankId(value: string): value is BankId {
  return value === "ets" || value === "eas";
}

export type BankData = {
  questions: QuizQuestion[];
  chapters: TryoutChapter[];
  bank: QuizBankMeta;
  storagePrefix: string;
  title: string;
};

export function getBank(bankId: BankId): BankData {
  if (bankId === "eas") {
    return {
      questions: tryoutEasQuestions,
      chapters: tryoutEasChapters,
      bank: EAS_META,
      storagePrefix: "myits_classroom_eas",
      title: "Kuis EAS",
    };
  }
  return {
    questions: tryoutEtsQuestions,
    chapters: tryoutChapters,
    bank: ETS_META,
    storagePrefix: "myits_classroom_ets",
    title: "Kuis ETS",
  };
}
