"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type AnswerMap = Record<string, number | boolean | string | null>;

interface ResultRecord {
  quizId: string;
  score: number;
  total: number;
  percent: number;
  answers: AnswerMap;
  finishedAt: string;
  durationSec: number;
}

interface QuizStore {
  currentQuizId: string | null;
  answers: AnswerMap;
  startedAt: number | null;
  history: ResultRecord[];
  setQuiz: (id: string) => void;
  setAnswer: (qid: string, val: number | boolean | string | null) => void;
  reset: () => void;
  addResult: (r: ResultRecord) => void;
}

export const useQuizStore = create<QuizStore>()(
  persist(
    (set) => ({
      currentQuizId: null,
      answers: {},
      startedAt: null,
      history: [],
      setQuiz: (id) => set({ currentQuizId: id, answers: {}, startedAt: Date.now() }),
      setAnswer: (qid, val) => set((s) => ({ answers: { ...s.answers, [qid]: val } })),
      reset: () => set({ answers: {}, startedAt: null }),
      addResult: (r) => set((s) => ({ history: [r, ...s.history].slice(0, 50) })),
    }),
    { name: "myits-classroom-quiz-store" }
  )
);
