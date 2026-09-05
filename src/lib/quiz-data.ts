export type QuestionType = "mcq" | "true-false" | "essay";

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  answer: number | boolean | string; // index for mcq, bool for tf, string for essay keyword
  explanation?: string;
  points?: number;
  tags?: string[];
}

export interface QuizSet {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  difficulty: "Pemula" | "Menengah" | "Lanjut";
  timeLimitSec?: number; // optional timer per set
  questions: Question[];
  createdAt: string;
  color?: string;
}

export const quizSets: QuizSet[] = [
  {
    id: "so-01",
    title: "SISTEM OPERASI",
    subtitle: "// DOSSIER 01 — FUNDAMENTAL",
    description: "Konsep proses, scheduling, memory management & file system.",
    category: "01 SYSTEMS",
    difficulty: "Menengah",
    timeLimitSec: 600,
    createdAt: "2026-09-05",
    questions: [
      {
        id: "so-01-q1",
        type: "mcq",
        question: "Apa fungsi utama scheduler pada sistem operasi?",
        options: [
          "Mengatur tampilan desktop",
          "Menentukan urutan eksekusi proses di CPU",
          "Mengenkripsi file sistem",
          "Mengelola koneksi jaringan",
        ],
        answer: 1,
        explanation: "Scheduler memutuskan proses mana yang dieksekusi CPU berikutnya berdasarkan algoritma (FCFS, SJF, Round Robin, dll).",
        points: 10,
        tags: ["scheduling"],
      },
      {
        id: "so-01-q2",
        type: "mcq",
        question: "Deadlock terjadi ketika...",
        options: [
          "CPU overheating",
          "Dua atau lebih proses saling menunggu resource yang dipegang proses lain",
          "RAM penuh",
          "Hard disk rusak",
        ],
        answer: 1,
        explanation: "Kondisi Coffman: mutual exclusion, hold and wait, no preemption, circular wait.",
        points: 10,
      },
      {
        id: "so-01-q3",
        type: "mcq",
        question: "Page fault terjadi saat...",
        options: [
          "Printer tidak terhubung",
          "Program mengakses page yang tidak ada di RAM",
          "Battery low",
          "User logout",
        ],
        answer: 1,
        explanation: "MMU trigger page fault → OS load page dari disk ke frame.",
        points: 10,
      },
      {
        id: "so-01-q4",
        type: "true-false",
        question: "Virtual memory memungkinkan program melebihi kapasitas RAM fisik.",
        answer: true,
        explanation: "Dengan paging & swapping ke disk.",
        points: 10,
      },
      {
        id: "so-01-q5",
        type: "mcq",
        question: "Sistem file ext4, NTFS, APFS termasuk kategori?",
        options: ["Scheduler", "File System", "Bootloader", "Firewall"],
        answer: 1,
        points: 10,
      },
    ],
  },
  {
    id: "jarkom-01",
    title: "JARINGAN KOMPUTER",
    subtitle: "// DOSSIER 02 — OSI & TCP/IP",
    description: "Model OSI, subnetting, routing & troubleshooting.",
    category: "02 NETWORKS",
    difficulty: "Menengah",
    timeLimitSec: 600,
    createdAt: "2026-09-05",
    questions: [
      {
        id: "jk-q1",
        type: "mcq",
        question: "Pada layer berapa TCP beroperasi?",
        options: ["Layer 2 Data Link", "Layer 3 Network", "Layer 4 Transport", "Layer 7 Application"],
        answer: 2,
        explanation: "TCP adalah protokol Transport yang reliable, connection-oriented.",
        points: 10,
      },
      {
        id: "jk-q2",
        type: "mcq",
        question: "CIDR /24 setara dengan subnet mask?",
        options: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.255"],
        answer: 0,
        points: 10,
      },
      {
        id: "jk-q3",
        type: "true-false",
        question: "UDP menjamin pengiriman paket berurutan dan tanpa loss.",
        answer: false,
        explanation: "UDP connectionless & unreliable, cepat untuk streaming/DNS.",
        points: 10,
      },
      {
        id: "jk-q4",
        type: "mcq",
        question: "Perintah untuk cek hop routing adalah?",
        options: ["ping", "traceroute / tracert", "nslookup", "ipconfig"],
        answer: 1,
        points: 10,
      },
    ],
  },
  {
    id: "pbo-01",
    title: "PEMROGRAMAN BERORIENTASI OBJEK",
    subtitle: "// DOSSIER 03 — OOP PRIMER",
    description: "Encapsulation, inheritance, polymorphism & SOLID.",
    category: "03 CODE",
    difficulty: "Pemula",
    timeLimitSec: 480,
    createdAt: "2026-09-05",
    questions: [
      {
        id: "pbo-q1",
        type: "mcq",
        question: "Prinsip menyembunyikan detail implementasi disebut?",
        options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
        answer: 1,
        points: 10,
      },
      {
        id: "pbo-q2",
        type: "mcq",
        question: "Method overriding terjadi pada...",
        options: ["Class yang sama", "Subclass terhadap superclass", "Interface saja", "Tidak ada"],
        answer: 1,
        points: 10,
      },
      {
        id: "pbo-q3",
        type: "true-false",
        question: "Abstract class bisa di-instansiasi langsung.",
        answer: false,
        points: 10,
      },
    ],
  },
  {
    id: "basisdata-01",
    title: "BASIS DATA",
    subtitle: "// DOSSIER 04 — SQL & NORMALISASI",
    description: "ERD, normalisasi, indexing & transaksi ACID.",
    category: "04 DATA",
    difficulty: "Lanjut",
    timeLimitSec: 720,
    createdAt: "2026-09-05",
    questions: [
      {
        id: "bd-q1",
        type: "mcq",
        question: "Bentuk normal yang menghilangkan transitive dependency adalah?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        answer: 2,
        points: 10,
      },
      {
        id: "bd-q2",
        type: "mcq",
        question: "ACID - I adalah...",
        options: ["Integrity", "Isolation", "Index", "Inheritance"],
        answer: 1,
        points: 10,
      },
      {
        id: "bd-q3",
        type: "mcq",
        question: "Perintah DDL adalah?",
        options: ["SELECT", "INSERT", "CREATE", "UPDATE"],
        answer: 2,
        points: 10,
      },
    ],
  },
];

export function getQuizById(id: string) {
  return quizSets.find((q) => q.id === id);
}
