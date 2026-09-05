"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarClock,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  CircleDashed,
  Clock,
  Cpu,
  Eye,
  Filter,
  Flame,
  GitBranch,
  Layers,
  ListChecks,
  Lock,
  RefreshCw,
  RotateCcw,
  Search,
  Send,
  Sparkles,
  Terminal,
  Trophy,
  X,
  Zap,
} from "lucide-react"
import {
  type TryoutChapter,
  type TryoutEtsQuestion,
  tryoutChapters,
  tryoutEtsQuestions,
} from "@/lib/tryout-ets"

export type { TryoutChapter, TryoutEtsQuestion }

export type TryoutEtsQuizProps = {
  questions?: TryoutEtsQuestion[]
  title?: string
  initialChapterId?: string | null
}

const optionLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Map chapter to tactical icon
function getChapterIcon(id: string) {
  switch (id) {
    case "ch01":
      return <Cpu className="size-5 text-[#38bdf8]" />
    case "ch02":
      return <Terminal className="size-5 text-[#4ade80]" />
    case "ch03":
      return <Layers className="size-5 text-[#facc15]" />
    case "ch04":
      return <GitBranch className="size-5 text-[#a78bfa]" />
    case "ch05":
      return <Lock className="size-5 text-[#fb7185]" />
    case "ch06":
      return <AlertTriangle className="size-5 text-[#f97316]" />
    case "ch09":
      return <CalendarClock className="size-5 text-[#818cf8]" />
    default:
      return <BookOpen className="size-5 text-[#f2a89e]" />
  }
}

// Chapter tactical difficulty indicator
function getChapterDifficulty(id: string): { label: string; color: string } {
  switch (id) {
    case "ch01":
      return { label: "FOUNDATIONAL", color: "text-[#38bdf8] border-[#38bdf8]/40 bg-[#38bdf8]/10" }
    case "ch02":
      return { label: "CORE ARCH", color: "text-[#4ade80] border-[#4ade80]/40 bg-[#4ade80]/10" }
    case "ch03":
      return { label: "INTERMEDIATE", color: "text-[#facc15] border-[#facc15]/40 bg-[#facc15]/10" }
    case "ch04":
      return { label: "INTERMEDIATE", color: "text-[#a78bfa] border-[#a78bfa]/40 bg-[#a78bfa]/10" }
    case "ch05":
      return { label: "ADVANCED", color: "text-[#fb7185] border-[#fb7185]/40 bg-[#fb7185]/10" }
    case "ch06":
      return { label: "ADVANCED", color: "text-[#f97316] border-[#f97316]/40 bg-[#f97316]/10" }
    case "ch09":
      return { label: "CORE ALGO", color: "text-[#818cf8] border-[#818cf8]/40 bg-[#818cf8]/10" }
    default:
      return { label: "COMPREHENSIVE", color: "text-[#f2a89e] border-[#f2a89e]/40 bg-[#f2a89e]/10" }
  }
}

function formatDuration(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return [hours, minutes, seconds]
    .map((part) => String(part).padStart(2, "0"))
    .join(":")
}

function hasSameOptions(selected: number[], expected: number[]) {
  return (
    selected.length === expected.length &&
    selected.every((option) => expected.includes(option))
  )
}

function getGradeBadge(scorePercent: number) {
  if (scorePercent >= 90) return { grade: "S-RANK", text: "PERFECT EXECUTION", color: "text-emerald-400 border-emerald-500 bg-emerald-500/15" }
  if (scorePercent >= 80) return { grade: "A-GRADE", text: "EXCELLENT COMMAND", color: "text-teal-400 border-teal-500 bg-teal-500/15" }
  if (scorePercent >= 70) return { grade: "B-GRADE", text: "COMPETENT PROTOCOL", color: "text-cyan-400 border-cyan-500 bg-cyan-500/15" }
  if (scorePercent >= 55) return { grade: "C-GRADE", text: "MARGINAL PASS", color: "text-amber-400 border-amber-500 bg-amber-500/15" }
  return { grade: "RE-TRAIN", text: "BELOW THRESHOLD", color: "text-rose-400 border-rose-500 bg-rose-500/15" }
}

export function TryoutEtsQuiz({
  questions = tryoutEtsQuestions,
  title = "TRYOUT-ETS",
  initialChapterId = null,
}: TryoutEtsQuizProps) {
  // Navigation & State
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(initialChapterId)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Initialize state with lazy localStorage reader
  const [answers, setAnswers] = useState<Record<number, number[]>>(() => {
    if (typeof window === "undefined") return {}
    try {
      const saved = localStorage.getItem("ryoku_tryout_answers")
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  const [flagged, setFlagged] = useState<number[]>(() => {
    if (typeof window === "undefined") return []
    try {
      const saved = localStorage.getItem("ryoku_tryout_flags")
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [submittedChapters, setSubmittedChapters] = useState<Record<string, boolean>>({})
  const [showSubmitNotice, setShowSubmitNotice] = useState(false)
  const [isReviewMode, setIsReviewMode] = useState(false)
  const [partFilter, setPartFilter] = useState<string>("ALL")
  const [searchQuery, setSearchQuery] = useState("")
  const [sidebarFilter, setSidebarFilter] = useState<"ALL" | "ANSWERED" | "UNANSWERED" | "FLAGGED">("ALL")
  const [reviewFilter, setReviewFilter] = useState<"ALL" | "WRONG" | "CORRECT" | "FLAGGED">("ALL")

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("ryoku_tryout_answers", JSON.stringify(answers))
    } catch {}
  }, [answers])

  useEffect(() => {
    try {
      localStorage.setItem("ryoku_tryout_flags", JSON.stringify(flagged))
    } catch {}
  }, [flagged])

  // Active question set based on selected chapter
  const activeQuestions = useMemo(() => {
    if (!selectedChapterId || selectedChapterId === "all") {
      return questions
    }
    return questions.filter((q) => q.chapterId === selectedChapterId)
  }, [questions, selectedChapterId])

  const currentChapter = useMemo(() => {
    if (!selectedChapterId || selectedChapterId === "all") return null
    return tryoutChapters.find((c) => c.id === selectedChapterId) ?? null
  }, [selectedChapterId])

  const isCurrentSubmitted = selectedChapterId
    ? !!submittedChapters[selectedChapterId]
    : false

  // Timer
  useEffect(() => {
    if (!selectedChapterId || isCurrentSubmitted || activeQuestions.length === 0) return

    const interval = window.setInterval(() => {
      setElapsedSeconds((seconds) => seconds + 1)
    }, 1000)

    return () => window.clearInterval(interval)
  }, [selectedChapterId, isCurrentSubmitted, activeQuestions.length])

  // Metrics for active question set
  const totalQuestions = activeQuestions.length
  const activeIndex = totalQuestions ? Math.min(currentIndex, totalQuestions - 1) : 0
  const currentQuestion = activeQuestions[activeIndex]

  const answeredCount = useMemo(
    () => activeQuestions.filter((question) => (answers[question.id]?.length ?? 0) > 0).length,
    [answers, activeQuestions],
  )
  const unansweredCount = totalQuestions - answeredCount
  const progress = totalQuestions ? Math.round((answeredCount / totalQuestions) * 100) : 0

  const correctCount = useMemo(() => {
    return activeQuestions.reduce((total, question) => {
      const selected = answers[question.id] ?? []
      const correct = question.answers ?? question.answerIndexes ?? []
      return hasSameOptions(selected, correct) ? total + 1 : total
    }, 0)
  }, [answers, activeQuestions])

  const scorePercent = totalQuestions
    ? Math.round((correctCount / totalQuestions) * 100)
    : 0

  // Overall statistics for all 117 questions
  const totalAllQuestions = questions.length
  const totalAllAnswered = useMemo(
    () => questions.filter((q) => (answers[q.id]?.length ?? 0) > 0).length,
    [answers, questions],
  )
  const totalAllCorrect = useMemo(() => {
    return questions.reduce((total, question) => {
      const selected = answers[question.id] ?? []
      const correct = question.answers ?? question.answerIndexes ?? []
      return hasSameOptions(selected, correct) ? total + 1 : total
    }, 0)
  }, [answers, questions])

  const totalAllProgress = totalAllQuestions
    ? Math.round((totalAllAnswered / totalAllQuestions) * 100)
    : 0

  // Chapter navigation handlers
  const handleSelectChapter = (chapterId: string | "all") => {
    setSelectedChapterId(chapterId)
    setCurrentIndex(0)
    setShowSubmitNotice(false)
    setIsReviewMode(false)
    setSidebarFilter("ALL")
    setReviewFilter("ALL")
  }

  const handleBackToHub = () => {
    setSelectedChapterId(null)
    setShowSubmitNotice(false)
    setIsReviewMode(false)
  }

  const goToQuestion = useCallback(
    (index: number) => {
      if (totalQuestions === 0) return
      setCurrentIndex(Math.max(0, Math.min(index, totalQuestions - 1)))
      setShowSubmitNotice(false)
    },
    [totalQuestions],
  )

  const selectOption = useCallback(
    (question: TryoutEtsQuestion, optionIndex: number) => {
      if (isReviewMode) return
      setAnswers((previousAnswers) => {
        const currentAnswers = previousAnswers[question.id] ?? []
        const nextAnswers = question.multiple
          ? currentAnswers.includes(optionIndex)
            ? currentAnswers.filter((index) => index !== optionIndex)
            : [...currentAnswers, optionIndex]
          : [optionIndex]

        return { ...previousAnswers, [question.id]: nextAnswers }
      })
      setShowSubmitNotice(false)
    },
    [isReviewMode],
  )

  const clearAnswer = (questionId: number) => {
    if (isReviewMode) return
    setAnswers((prev) => {
      const next = { ...prev }
      delete next[questionId]
      return next
    })
  }

  const toggleFlag = useCallback((questionId: number) => {
    setFlagged((currentFlags) =>
      currentFlags.includes(questionId)
        ? currentFlags.filter((id) => id !== questionId)
        : [...currentFlags, questionId],
    )
  }, [])

  // Keyboard navigation shortcuts
  useEffect(() => {
    if (!selectedChapterId || isCurrentSubmitted || !currentQuestion) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((event.target as HTMLElement)?.tagName)) return

      const key = event.key.toUpperCase()
      // A, B, C, D, E or 1, 2, 3, 4, 5
      if (["A", "B", "C", "D", "E"].includes(key)) {
        const optIdx = key.charCodeAt(0) - 65
        if (optIdx < currentQuestion.options.length) {
          selectOption(currentQuestion, optIdx)
        }
      } else if (["1", "2", "3", "4", "5"].includes(key)) {
        const optIdx = parseInt(key, 10) - 1
        if (optIdx < currentQuestion.options.length) {
          selectOption(currentQuestion, optIdx)
        }
      } else if (event.key === "ArrowRight" || key === "N") {
        if (activeIndex < totalQuestions - 1) {
          goToQuestion(activeIndex + 1)
        }
      } else if (event.key === "ArrowLeft" || key === "P") {
        if (activeIndex > 0) {
          goToQuestion(activeIndex - 1)
        }
      } else if (key === "F") {
        toggleFlag(currentQuestion.id)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [
    selectedChapterId,
    isCurrentSubmitted,
    currentQuestion,
    activeIndex,
    totalQuestions,
    goToQuestion,
    selectOption,
    toggleFlag,
  ])

  const finishCurrentSession = () => {
    if (!selectedChapterId) return
    setShowSubmitNotice(false)
    setSubmittedChapters((prev) => ({ ...prev, [selectedChapterId]: true }))
    setIsReviewMode(false)
  }

  const requestSubmit = () => {
    if (unansweredCount > 0) {
      setShowSubmitNotice(true)
      return
    }
    finishCurrentSession()
  }

  const restartCurrentChapter = () => {
    if (!selectedChapterId) return
    setAnswers((prev) => {
      const next = { ...prev }
      activeQuestions.forEach((q) => {
        delete next[q.id]
      })
      return next
    })
    setFlagged((prev) => prev.filter((id) => !activeQuestions.some((q) => q.id === id)))
    setSubmittedChapters((prev) => ({ ...prev, [selectedChapterId]: false }))
    setCurrentIndex(0)
    setShowSubmitNotice(false)
    setIsReviewMode(false)
  }

  const resetAllProgress = () => {
    if (
      window.confirm(
        "Peringatan: Reset akan menghapus seluruh rekaman jawaban dari semua 7 chapter. Lanjutkan?",
      )
    ) {
      setAnswers({})
      setFlagged([])
      setSubmittedChapters({})
      setElapsedSeconds(0)
      setSelectedChapterId(null)
      setCurrentIndex(0)
      setShowSubmitNotice(false)
      setIsReviewMode(false)
      try {
        localStorage.removeItem("ryoku_tryout_answers")
        localStorage.removeItem("ryoku_tryout_flags")
      } catch {}
    }
  }

  const handleNextChapter = () => {
    if (!selectedChapterId || selectedChapterId === "all") {
      handleBackToHub()
      return
    }
    const chapterIdx = tryoutChapters.findIndex((c) => c.id === selectedChapterId)
    if (chapterIdx >= 0 && chapterIdx < tryoutChapters.length - 1) {
      handleSelectChapter(tryoutChapters[chapterIdx + 1].id)
    } else {
      handleBackToHub()
    }
  }

  // Filter chapters in the selection hub with search
  const filteredChapters = useMemo(() => {
    return tryoutChapters.filter((c) => {
      const matchesPart = partFilter === "ALL" || c.part.includes(partFilter)
      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.topics.some((t) => t.toLowerCase().includes(q))
      return matchesPart && matchesSearch
    })
  }, [partFilter, searchQuery])

  // Filtered list in question map
  const displaySidebarQuestions = useMemo(() => {
    return activeQuestions
      .map((q, idx) => ({ question: q, index: idx }))
      .filter(({ question }) => {
        if (isReviewMode) {
          const qAns = answers[question.id] ?? []
          const qCorr = question.answers ?? question.answerIndexes ?? []
          const isRight = hasSameOptions(qAns, qCorr)
          const isFlg = flagged.includes(question.id)

          if (reviewFilter === "WRONG") return !isRight
          if (reviewFilter === "CORRECT") return isRight
          if (reviewFilter === "FLAGGED") return isFlg
          return true
        }

        const isAns = (answers[question.id]?.length ?? 0) > 0
        const isFlg = flagged.includes(question.id)
        if (sidebarFilter === "ANSWERED") return isAns
        if (sidebarFilter === "UNANSWERED") return !isAns
        if (sidebarFilter === "FLAGGED") return isFlg
        return true
      })
  }, [activeQuestions, answers, flagged, isReviewMode, reviewFilter, sidebarFilter])

  // VIEW 1: CHAPTER SELECTION HUB
  if (!selectedChapterId) {
    return (
      <section className="relative min-h-svh overflow-hidden bg-[#080808] text-[#e8e0d1]">
        {/* Ambient tactical background */}
        <div aria-hidden="true" className="ryoku-grid pointer-events-none absolute inset-0 opacity-40" />
        <div aria-hidden="true" className="ryoku-scanline pointer-events-none absolute inset-0 opacity-70" />

        <span aria-hidden="true" className="pointer-events-none absolute left-3 top-3 font-mono text-xs text-[#f2a89e]/30">┌ +</span>
        <span aria-hidden="true" className="pointer-events-none absolute right-3 top-3 font-mono text-xs text-[#f2a89e]/30">+ ┐</span>
        <span aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 font-mono text-xs text-[#f2a89e]/30">└ +</span>
        <span aria-hidden="true" className="pointer-events-none absolute bottom-3 right-3 font-mono text-xs text-[#f2a89e]/30">+ ┘</span>

        {/* Top Header HUD */}
        <header className="relative border-b border-white/10 bg-[#0c0c0c]/95 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[96rem] flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center border border-[#f2a89e]/60 bg-[#f2a89e]/10 text-[#f2a89e] tactical-glow">
                <Zap className="size-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[0.55rem] font-bold tracking-[0.28em] text-[#f2a89e]">
                    RYOKU // SYSTEM v2.5 • IOSEVKA NF
                  </span>
                  <span className="inline-block size-1.5 animate-pulse rounded-full bg-emerald-400" />
                  <span className="font-mono text-[0.55rem] text-emerald-400/90 tracking-wider">ONLINE</span>
                </div>
                <h1 className="font-[family-name:var(--font-display)] text-lg tracking-[0.06em] text-[#f0e9df] sm:text-xl">
                  {title} • SISTEM OPERASI & ARSITEKTUR
                </h1>
              </div>
            </div>

            {/* Metrics Ticker */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-[0.62rem]">
              <div className="border border-white/10 bg-white/[0.02] px-3 py-1.5 text-center">
                <span className="text-[0.5rem] tracking-widest text-[#8a867f]">TOTAL SOAL</span>
                <p className="font-bold text-[#f0e9df]">{totalAllQuestions}</p>
              </div>
              <div className="border border-white/10 bg-white/[0.02] px-3 py-1.5 text-center">
                <span className="text-[0.5rem] tracking-widest text-[#8a867f]">PROGRESS</span>
                <p className="font-bold text-[#f2a89e]">
                  {totalAllAnswered} / {totalAllQuestions} ({totalAllProgress}%)
                </p>
              </div>
              <div className="border border-white/10 bg-white/[0.02] px-3 py-1.5 text-center">
                <span className="text-[0.5rem] tracking-widest text-[#8a867f]">AKURASI GLOBAL</span>
                <p className="font-bold text-emerald-400">
                  {totalAllAnswered > 0
                    ? `${Math.round((totalAllCorrect / totalAllAnswered) * 100)}%`
                    : "—"}
                </p>
              </div>

              {totalAllAnswered > 0 && (
                <button
                  type="button"
                  onClick={resetAllProgress}
                  className="flex items-center gap-1.5 border border-red-500/40 bg-red-500/10 px-2.5 py-1.5 font-mono text-[0.6rem] font-bold text-red-300 transition-colors hover:bg-red-500/20"
                  title="Reset seluruh progres"
                >
                  <RotateCcw className="size-3" /> RESET
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="relative mx-auto max-w-[96rem] px-4 py-7 sm:px-6 lg:px-8">
          {/* Subtitle & Search Bar */}
          <div className="mb-8 border-b border-white/10 pb-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[0.58rem] font-bold tracking-[0.25em] text-[#9d9992]">
                  MODUL PELATIHAN ETS // SILABUS WILLIAM STALLINGS
                </p>
                <h2 className="mt-1 font-[family-name:var(--font-display)] text-2xl tracking-tight text-[#f0e9df] sm:text-3xl">
                  Pilih Chapter Materi Ujian
                </h2>
                <p className="mt-1.5 max-w-3xl text-xs leading-5 text-[#aaa69f]">
                  Soal tryout telah dipetakan secara terstruktur ke dalam 7 Bab silabus mata kuliah Sistem Operasi.
                  Pilih bab yang ingin kamu kuasai, atau mulai simulasi penuh seluruh bab.
                </p>
              </div>

              {/* Search input */}
              <div className="relative w-full sm:w-72">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-[#7d7973]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari topik (DMA, Semaphore, PCB)..."
                  className="w-full border border-white/15 bg-white/[0.03] py-2 pl-9 pr-8 font-mono text-xs text-[#f0e9df] placeholder:text-[#6e6a64] focus:border-[#f2a89e] focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#7d7973] hover:text-[#f0e9df]"
                  >
                    <X className="size-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="mt-5 flex flex-wrap items-center gap-1.5">
              <span className="mr-2 flex items-center gap-1 font-mono text-[0.58rem] font-semibold text-[#7d7973]">
                <Filter className="size-3" /> FILTER:
              </span>
              {[
                { label: "SEMUA BAB (7)", value: "ALL" },
                { label: "PART 1: BACKGROUND (CH 1-2)", value: "PART 1" },
                { label: "PART 2: PROCESSES & THREADS (CH 3-6)", value: "PART 2" },
                { label: "PART 4: SCHEDULING (CH 9)", value: "PART 4" },
              ].map((f) => (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setPartFilter(f.value)}
                  className={`border px-3 py-1.5 font-mono text-[0.62rem] font-semibold tracking-wider transition-all ${
                    partFilter === f.value
                      ? "border-[#f2a89e] bg-[#f2a89e] text-[#111111] font-bold shadow-md shadow-[#f2a89e]/20"
                      : "border-white/10 bg-white/[0.02] text-[#9d9992] hover:border-white/30 hover:text-[#e8e0d1]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Master Full Tryout ETS Banner Card */}
          <div className="ryoku-border mb-8 overflow-hidden bg-gradient-to-r from-[#171413] via-[#101010] to-[#1a1210] p-6 tactical-glow sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="flex items-center gap-1 border border-[#f2a89e]/80 bg-[#f2a89e]/20 px-2.5 py-0.5 font-mono text-[0.62rem] font-bold tracking-[0.2em] text-[#f8cdc7]">
                    <Flame className="size-3 text-[#f2a89e]" /> FULL ETS SIMULATION MODE
                  </span>
                  <span className="font-mono text-[0.6rem] text-[#9d9992] tracking-wider">
                    7 CHAPTERS • 117 QUESTIONS COMBINED
                  </span>
                </div>
                <h3 className="mt-2.5 font-[family-name:var(--font-display)] text-xl font-medium tracking-tight text-[#f0e9df] sm:text-2xl">
                  Simulasi Komprehensif ETS (Semua 117 Soal)
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-[#aaa69f]">
                  Uji kemampuanmu secara menyeluruh seperti menghadapi ujian ETS sesungguhnya.
                  Progres jawaban tersimpan otomatis di perangkatmu dan dapat dilanjutkan kapan saja.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 font-mono text-xs text-[#cfc8bd]">
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 bg-[#f2a89e]" /> 117 Soal Total
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 bg-cyan-400" /> Waktu Rekomendasi: ~90 Menit
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 bg-emerald-400" /> Terjawab: {totalAllAnswered}/117 ({totalAllProgress}%)
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleSelectChapter("all")}
                className="group flex items-center gap-2 border border-[#f2a89e] bg-[#f2a89e] px-6 py-3.5 font-mono text-xs font-bold tracking-[0.18em] text-[#171311] transition-all hover:bg-[#f8c2ba] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f0e9df]"
              >
                <Sparkles className="size-4 transition-transform group-hover:scale-110" />
                MULAI SIMULASI PENUH (117 SOAL)
              </button>
            </div>
          </div>

          {/* Chapter Cards Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredChapters.map((chapter) => {
              const chapterQuestions = questions.filter((q) => q.chapterId === chapter.id)
              const count = chapterQuestions.length
              const answered = chapterQuestions.filter((q) => (answers[q.id]?.length ?? 0) > 0).length
              const chProgress = count ? Math.round((answered / count) * 100) : 0
              const isSubmitted = !!submittedChapters[chapter.id]

              const chCorrect = chapterQuestions.reduce((tot, q) => {
                const sel = answers[q.id] ?? []
                const corr = q.answers ?? q.answerIndexes ?? []
                return hasSameOptions(sel, corr) ? tot + 1 : tot
              }, 0)
              const chScore = count ? Math.round((chCorrect / count) * 100) : 0
              const diff = getChapterDifficulty(chapter.id)

              return (
                <div
                  key={chapter.id}
                  className="ryoku-border group flex flex-col justify-between bg-[#0d0d0d]/95 p-5 transition-all hover:border-[#f2a89e]/50 hover:bg-[#111111] sm:p-6"
                >
                  <div>
                    {/* Chapter Header: Icon + Part + Difficulty */}
                    <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="flex size-8 items-center justify-center border border-white/15 bg-white/[0.03]">
                          {getChapterIcon(chapter.id)}
                        </div>
                        <div>
                          <p className="font-mono text-[0.55rem] font-bold tracking-[0.22em] text-[#f2a89e]">
                            {chapter.part}
                          </p>
                          <p className="font-mono text-[0.62rem] font-bold text-[#f0e9df]">
                            CHAPTER {String(chapter.number).padStart(2, "0")}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <span className={`border px-1.5 py-0.5 font-mono text-[0.52rem] font-bold tracking-wider ${diff.color}`}>
                          {diff.label}
                        </span>
                        <span className="font-mono text-[0.58rem] text-[#9d9992]">
                          {count} SOAL
                        </span>
                      </div>
                    </div>

                    {/* Chapter Title */}
                    <h3 className="mt-3.5 font-[family-name:var(--font-display)] text-lg font-medium leading-snug tracking-wide text-[#f0e9df] group-hover:text-[#f8c2ba] transition-colors">
                      {chapter.title}
                    </h3>

                    {/* Chapter Description */}
                    <p className="mt-2 text-xs leading-5 text-[#9d9992]">
                      {chapter.description}
                    </p>

                    {/* Subtopics Pills */}
                    <div className="mt-4 border-t border-white/5 pt-3">
                      <p className="font-mono text-[0.52rem] font-semibold tracking-[0.2em] text-[#7d7973]">
                        SUB-MATERI / SECTIONS:
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {chapter.topics.map((topic) => (
                          <span
                            key={topic}
                            className="border border-white/10 bg-white/[0.02] px-1.5 py-0.5 font-mono text-[0.55rem] text-[#b8b2a8]"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Progress & Start Button */}
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <div className="flex items-center justify-between font-mono text-[0.62rem]">
                      <span className="text-[#8e8a84]">STATUS PROGRES</span>
                      <span className="font-bold text-[#f0e9df]">
                        {answered} / {count} ({chProgress}%)
                      </span>
                    </div>

                    {/* Segmented Progress Bar */}
                    <div className="mt-2 h-1.5 overflow-hidden bg-white/10">
                      <div
                        className={`h-full transition-all duration-300 ${
                          isSubmitted ? "bg-emerald-400" : "bg-[#f2a89e]"
                        }`}
                        style={{ width: `${chProgress}%` }}
                      />
                    </div>

                    {isSubmitted && (
                      <div className="mt-2.5 flex items-center justify-between font-mono text-[0.62rem] font-bold text-emerald-400">
                        <span className="flex items-center gap-1">
                          <CircleCheck className="size-3" /> SELESAI
                        </span>
                        <span>SKOR: {chScore}%</span>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => handleSelectChapter(chapter.id)}
                      className={`mt-4 flex w-full items-center justify-center gap-2 border px-4 py-2.5 font-mono text-xs font-bold tracking-[0.16em] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f0e9df] ${
                        isSubmitted
                          ? "border-emerald-500/60 bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25"
                          : answered > 0
                            ? "border-[#f2a89e] bg-[#f2a89e] text-[#171311] hover:bg-[#f8c2ba]"
                            : "border-white/20 bg-white/[0.04] text-[#e8e0d1] hover:border-[#f2a89e] hover:bg-[#f2a89e]/10 hover:text-[#f2a89e]"
                      }`}
                    >
                      {isSubmitted ? (
                        <>
                          <Eye className="size-3.5" /> LIHAT HASIL / REVIEW ({count} SOAL)
                        </>
                      ) : answered > 0 ? (
                        <>
                          <ArrowRight className="size-3.5" /> LANJUTKAN ({answered}/{count})
                        </>
                      ) : (
                        <>
                          <BookOpen className="size-3.5" /> KERJAKAN BAB ({count} SOAL)
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </main>
      </section>
    )
  }

  // Handle empty question bank error
  if (totalQuestions === 0) {
    return (
      <section className="relative grid min-h-[32rem] place-items-center overflow-hidden border border-white/10 bg-[#080808] p-6 text-[#e8e0d1]">
        <div aria-hidden="true" className="ryoku-grid absolute inset-0 opacity-50" />
        <div className="ryoku-border relative max-w-md bg-[#0f0f0f]/95 p-8 text-center">
          <CircleDashed className="mx-auto mb-4 size-8 text-[#f2a89e]" aria-hidden="true" />
          <p className="font-mono text-[0.64rem] font-semibold tracking-[0.28em] text-[#9d9992]">
            NO DATA PACKET
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-tight">
            Question Bank Kosong
          </h2>
          <p className="mt-3 text-xs leading-5 text-[#aaa69f]">
            Soal untuk bab ini belum dimuat. Silakan kembali ke pemilihan bab.
          </p>
          <button
            type="button"
            onClick={handleBackToHub}
            className="mt-5 inline-flex items-center gap-2 border border-white/20 px-4 py-2 font-mono text-xs font-bold tracking-[0.16em] text-[#e8e0d1] hover:border-white/40"
          >
            <ArrowLeft className="size-4" /> KEMBALI KE HUB CHAPTER
          </button>
        </div>
      </section>
    )
  }

  const currentAnswers = answers[currentQuestion.id] ?? []
  const isCurrentFlagged = flagged.includes(currentQuestion.id)
  const currentCorrectAnswers = currentQuestion.answers ?? currentQuestion.answerIndexes ?? []
  const isCurrentCorrect = hasSameOptions(currentAnswers, currentCorrectAnswers)

  const activeTitle = currentChapter
    ? `CHAPTER ${currentChapter.number}: ${currentChapter.title.toUpperCase()}`
    : "SIMULASI PENUH ETS // SEMUA CHAPTER (117 SOAL)"

  // VIEW 2: RESULTS DOSSIER FOR CHAPTER
  if (isCurrentSubmitted && !isReviewMode) {
    return (
      <section className="relative min-h-svh overflow-hidden bg-[#080808] text-[#e8e0d1]">
        <div aria-hidden="true" className="ryoku-grid pointer-events-none absolute inset-0 opacity-40" />
        <div aria-hidden="true" className="ryoku-scanline pointer-events-none absolute inset-0 opacity-70" />

        {/* Top bar */}
        <header className="relative border-b border-white/10 bg-[#0d0d0d]/95 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[96rem] items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleBackToHub}
              className="flex items-center gap-2 border border-white/20 px-3 py-1.5 font-mono text-[0.62rem] font-bold tracking-[0.16em] text-[#e8e0d1] transition-colors hover:border-[#f2a89e] hover:text-[#f2a89e]"
            >
              <ArrowLeft className="size-3.5" /> GANTI CHAPTER
            </button>
            <span className="font-mono text-xs text-[#9d9992]">{activeTitle}</span>
          </div>
        </header>

        <ResultsDossier
          answeredCount={answeredCount}
          answers={answers}
          chapterTitle={activeTitle}
          correctCount={correctCount}
          elapsedSeconds={elapsedSeconds}
          flaggedCount={flagged.filter((id) => activeQuestions.some((q) => q.id === id)).length}
          hasNextChapter={
            selectedChapterId !== "all" &&
            tryoutChapters.findIndex((c) => c.id === selectedChapterId) < tryoutChapters.length - 1
          }
          onNextChapter={handleNextChapter}
          onRestart={restartCurrentChapter}
          onReturnToHub={handleBackToHub}
          onReview={() => setIsReviewMode(true)}
          questions={activeQuestions}
          scorePercent={scorePercent}
          totalQuestions={totalQuestions}
        />
      </section>
    )
  }

  // VIEW 3: QUIZ QUESTION RUNNER (NORMAL & REVIEW MODES)
  return (
    <section
      aria-label={`${activeTitle} practice quiz`}
      className="relative min-h-svh overflow-hidden bg-[#080808] text-[#e8e0d1]"
    >
      <div aria-hidden="true" className="ryoku-grid pointer-events-none absolute inset-0 opacity-40" />
      <div aria-hidden="true" className="ryoku-scanline pointer-events-none absolute inset-0 opacity-70" />

      {/* Top Header HUD with Chapter Switcher Dropdown */}
      <header className="relative border-b border-white/10 bg-[#0d0d0d]/95 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[96rem] flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleBackToHub}
              className="flex items-center gap-1.5 border border-white/20 bg-white/[0.03] px-3 py-1.5 font-mono text-[0.62rem] font-bold tracking-[0.16em] text-[#e8e0d1] transition-colors hover:border-[#f2a89e] hover:bg-[#f2a89e]/10 hover:text-[#f2a89e]"
            >
              <ArrowLeft className="size-3.5" /> PILIH BAB
            </button>

            {/* Quick chapter selection select box */}
            <select
              value={selectedChapterId ?? ""}
              onChange={(e) => handleSelectChapter(e.target.value)}
              className="hidden sm:block border border-white/15 bg-[#121212] px-2.5 py-1.5 font-mono text-[0.65rem] text-[#e8e0d1] focus:border-[#f2a89e] focus:outline-none"
            >
              <option value="all">★ FULL SIMULASI ETS (117 SOAL)</option>
              {tryoutChapters.map((c) => (
                <option key={c.id} value={c.id}>
                  Ch. {c.number}: {c.title} ({c.questionCount} Soal)
                </option>
              ))}
            </select>

            <div className="min-w-0">
              <p className="font-mono text-[0.52rem] font-bold tracking-[0.25em] text-[#9d9992]">
                {`${currentChapter?.part ?? "FULL EXAMINATION"} // ETS-NODE 01`}
              </p>
              <h1 className="truncate font-[family-name:var(--font-display)] text-base font-medium tracking-[0.04em] text-[#f0e9df] sm:text-lg">
                {activeTitle}
              </h1>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3 text-right">
            {isReviewMode ? (
              <div className="border border-emerald-500/70 bg-emerald-500/15 px-3 py-1.5 font-mono text-[0.62rem] font-bold tracking-[0.16em] text-emerald-300">
                MODE REVIEW AKTIF
              </div>
            ) : (
              <div className="hidden sm:block">
                <p className="font-mono text-[0.52rem] font-semibold tracking-[0.22em] text-[#9d9992]">
                  SESSION STATUS
                </p>
                <p className="mt-0.5 flex items-center justify-end gap-1.5 font-mono text-[0.62rem] font-semibold tracking-[0.18em] text-[#d9d2c8]">
                  <span className="size-1.5 animate-pulse rounded-full bg-[#f2a89e]" />
                  EXAM RUNNING
                </p>
              </div>
            )}

            <div className="border-l border-white/10 pl-3 tabular-nums sm:pl-4">
              <p className="flex items-center justify-end gap-1.5 font-mono text-[0.52rem] font-semibold tracking-[0.2em] text-[#9d9992]">
                <Clock className="size-3" aria-hidden="true" /> TIMER
              </p>
              <p className="mt-0.5 font-mono text-sm tracking-[0.12em] text-[#f0e9df]">
                {formatDuration(elapsedSeconds)}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Review Mode Banner */}
      {isReviewMode && (
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-500/30 bg-emerald-950/40 px-4 py-2.5 font-mono text-xs text-emerald-300 sm:px-8">
          <div className="flex items-center gap-2">
            <span className="font-bold">MODE REVIEW:</span>
            <span>Periksa jawabanmu terhadap kunci resmi sistem.</span>
          </div>

          {/* Filter review buttons */}
          <div className="flex flex-wrap items-center gap-1.5 text-[0.6rem]">
            {[
              { label: "SEMUA", val: "ALL" },
              { label: "SALAH SAJA", val: "WRONG" },
              { label: "BENAR SAJA", val: "CORRECT" },
              { label: "FLAGGED", val: "FLAGGED" },
            ].map((f) => (
              <button
                key={f.val}
                type="button"
                onClick={() => setReviewFilter(f.val as typeof reviewFilter)}
                className={`border px-2.5 py-1 font-bold ${
                  reviewFilter === f.val
                    ? "border-emerald-400 bg-emerald-400 text-black"
                    : "border-emerald-500/40 bg-emerald-950/50 text-emerald-300 hover:bg-emerald-900/50"
                }`}
              >
                {f.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setIsReviewMode(false)}
              className="ml-2 border border-emerald-400/80 bg-emerald-900/80 px-3 py-1 font-bold text-white hover:bg-emerald-800"
            >
              KEMBALI KE HASIL DOSSIER
            </button>
          </div>
        </div>
      )}

      <div className="relative mx-auto grid max-w-[96rem] gap-5 px-4 py-5 sm:px-6 lg:grid-cols-[minmax(17rem,21rem)_minmax(0,1fr)] lg:gap-6 lg:px-8 lg:py-7">
        {/* Sidebar Question Map */}
        <aside className="order-2 min-w-0 lg:order-1">
          <div className="ryoku-border bg-[#0d0d0d]/95 p-4 sm:p-5 lg:sticky lg:top-6">
            <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3.5">
              <div>
                <p className="font-mono text-[0.52rem] font-bold tracking-[0.25em] text-[#9d9992]">
                  ACTIVE EXAM DOSSIER
                </p>
                <h2 className="mt-1 font-[family-name:var(--font-display)] text-lg tracking-wide text-[#f0e9df]">
                  {currentChapter ? `BAB ${currentChapter.number}` : "ALL 117 SOAL"}
                </h2>
              </div>
              <div className="flex size-7 items-center justify-center border border-[#f2a89e]/50 bg-[#f2a89e]/10 text-[#f2a89e]">
                <ListChecks className="size-4" />
              </div>
            </div>

            {/* Quick Metrics */}
            <dl className="mt-3.5 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10">
              <div className="py-2.5 pr-2">
                <dt className="font-mono text-[0.5rem] font-semibold tracking-[0.16em] text-[#8e8a84]">TERJAWAB</dt>
                <dd className="mt-1 font-mono text-base font-bold text-[#f0e9df]">
                  {String(answeredCount).padStart(2, "0")}
                </dd>
              </div>
              <div className="px-2 py-2.5">
                <dt className="font-mono text-[0.5rem] font-semibold tracking-[0.16em] text-[#8e8a84]">TERBUKA</dt>
                <dd className="mt-1 font-mono text-base font-bold text-[#f0e9df]">
                  {String(unansweredCount).padStart(2, "0")}
                </dd>
              </div>
              <div className="py-2.5 pl-2">
                <dt className="font-mono text-[0.5rem] font-semibold tracking-[0.16em] text-[#8e8a84]">FLAGGED</dt>
                <dd className="mt-1 font-mono text-base font-bold text-[#f2a89e]">
                  {String(flagged.filter((id) => activeQuestions.some((q) => q.id === id)).length).padStart(2, "0")}
                </dd>
              </div>
            </dl>

            {/* Question Filter Tabs in Sidebar */}
            <div className="mt-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-mono text-[0.58rem] font-bold tracking-[0.2em] text-[#c6c0b8]">
                  QUESTION MAP
                </h3>
                <span className="font-mono text-[0.58rem] text-[#f2a89e]">{progress}% SELESAI</span>
              </div>

              {/* Progress Bar */}
              <div
                className="mt-2 h-1 overflow-hidden bg-white/10"
                role="progressbar"
                aria-label="Quiz progress"
                aria-valuemax={100}
                aria-valuemin={0}
                aria-valuenow={progress}
              >
                <div className="h-full bg-[#f2a89e] transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>

              {/* Filter pills */}
              <div className="mt-3 flex gap-1 font-mono text-[0.55rem]">
                {[
                  { label: "SEMUA", v: "ALL" },
                  { label: "TERJAWAB", v: "ANSWERED" },
                  { label: "BELUM", v: "UNANSWERED" },
                  { label: "FLAG", v: "FLAGGED" },
                ].map((item) => (
                  <button
                    key={item.v}
                    type="button"
                    onClick={() => setSidebarFilter(item.v as typeof sidebarFilter)}
                    className={`flex-1 border py-1 text-center font-bold transition-colors ${
                      sidebarFilter === item.v
                        ? "border-[#f2a89e] bg-[#f2a89e]/15 text-[#f5c4bd]"
                        : "border-white/10 bg-white/[0.02] text-[#8e8a84] hover:text-[#e8e0d1]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Numbered Question Map */}
              <div className="mt-3.5 max-h-72 overflow-y-auto pr-1">
                <div className="grid grid-cols-5 gap-1.5 sm:grid-cols-6 lg:grid-cols-5">
                  {displaySidebarQuestions.map(({ question, index }) => {
                    const isAnswered = (answers[question.id]?.length ?? 0) > 0
                    const isFlag = flagged.includes(question.id)
                    const isCurrent = index === activeIndex

                    let reviewColor = ""
                    if (isReviewMode) {
                      const qAns = answers[question.id] ?? []
                      const qCorr = question.answers ?? question.answerIndexes ?? []
                      const isRight = hasSameOptions(qAns, qCorr)
                      reviewColor = isRight
                        ? "border-emerald-500/80 bg-emerald-500/20 text-emerald-300"
                        : "border-red-500/80 bg-red-500/20 text-red-300"
                    }

                    return (
                      <button
                        key={question.id}
                        type="button"
                        onClick={() => goToQuestion(index)}
                        aria-current={isCurrent ? "step" : undefined}
                        className={`relative flex h-8 items-center justify-center border font-mono text-[0.62rem] font-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f0e9df] ${
                          isCurrent
                            ? "border-[#f0e9df] bg-[#e8e0d1] text-[#111111] shadow-sm"
                            : isReviewMode
                              ? reviewColor
                              : isAnswered
                                ? "border-[#f2a89e]/70 bg-[#f2a89e]/10 text-[#f5c4bd] hover:bg-[#f2a89e]/20"
                                : "border-white/10 bg-white/[0.02] text-[#9d9992] hover:border-white/30 hover:text-[#e8e0d1]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                        {isFlag && (
                          <span
                            className={`absolute -right-0.5 -top-0.5 size-2 rounded-full ${
                              isCurrent ? "bg-black" : "bg-[#f2a89e]"
                            }`}
                          />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Keyboard Shortcuts Notice */}
            <div className="mt-4 border-t border-white/10 pt-3 font-mono text-[0.52rem] text-[#8e8a84]">
              <p className="font-bold text-[#b5afa5] tracking-wider">PINTASAN KEYBOARD:</p>
              <p className="mt-1 flex justify-between">
                <span>[A-E] atau [1-5]</span>
                <span className="text-[#e8e0d1]">PILIH OPSI</span>
              </p>
              <p className="flex justify-between">
                <span>[← / →] atau [P / N]</span>
                <span className="text-[#e8e0d1]">SEBELUM / SESUDAH</span>
              </p>
              <p className="flex justify-between">
                <span>[F]</span>
                <span className="text-[#e8e0d1]">TANDAI RAGU (FLAG)</span>
              </p>
            </div>

            {/* Action buttons */}
            <div className="mt-4 border-t border-white/10 pt-3">
              {isReviewMode ? (
                <button
                  type="button"
                  onClick={() => setIsReviewMode(false)}
                  className="flex w-full items-center justify-center gap-2 border border-emerald-500 bg-emerald-600 px-3 py-2.5 font-mono text-[0.62rem] font-bold tracking-[0.16em] text-white transition-colors hover:bg-emerald-500"
                >
                  KEMBALI KE HASIL
                </button>
              ) : (
                <button
                  type="button"
                  onClick={requestSubmit}
                  className="flex w-full items-center justify-center gap-2 border border-[#f2a89e] bg-[#f2a89e] px-3 py-2.5 font-mono text-[0.62rem] font-bold tracking-[0.16em] text-[#171311] transition-colors hover:bg-[#f8c2ba] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f0e9df]"
                >
                  <Send className="size-3.5" aria-hidden="true" />
                  SELESAIKAN CHAPTER INI
                </button>
              )}
            </div>
          </div>
        </aside>

        {/* Question Panel */}
        <main className="order-1 min-w-0 lg:order-2">
          <article className="ryoku-border overflow-hidden bg-[#0d0d0d]/95 shadow-2xl shadow-black/30">
            {/* Question Sub-Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-white/[0.02] px-4 py-3 sm:px-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="border border-[#f2a89e]/80 bg-[#f2a89e]/15 px-2.5 py-0.5 font-mono text-[0.62rem] font-bold tracking-[0.18em] text-[#f5c4bd]">
                  SOAL {String(activeIndex + 1).padStart(2, "0")} / {String(totalQuestions).padStart(2, "0")}
                </span>

                {currentQuestion.sectionTitle && (
                  <span className="border border-white/15 bg-white/[0.03] px-2 py-0.5 font-mono text-[0.58rem] tracking-wider text-[#d6cfc5]">
                    {currentQuestion.sectionTitle}
                  </span>
                )}

                <span className="font-mono text-[0.55rem] font-semibold text-[#8e8a84] tracking-wider">
                  {currentQuestion.multiple ? "[MULTI-SELECT]" : "[SINGLE-CHOICE]"}
                </span>
              </div>

              {/* Flag button & Clear answer button */}
              <div className="flex items-center gap-2">
                {!isReviewMode && currentAnswers.length > 0 && (
                  <button
                    type="button"
                    onClick={() => clearAnswer(currentQuestion.id)}
                    className="border border-white/10 px-2 py-1 font-mono text-[0.55rem] text-[#8e8a84] hover:border-white/30 hover:text-[#e8e0d1]"
                  >
                    HAPUS PILIHAN
                  </button>
                )}

                {!isReviewMode && (
                  <button
                    type="button"
                    onClick={() => toggleFlag(currentQuestion.id)}
                    aria-pressed={isCurrentFlagged}
                    className={`flex items-center gap-1.5 border px-2.5 py-1 font-mono text-[0.58rem] font-bold tracking-wider transition-colors ${
                      isCurrentFlagged
                        ? "border-[#f2a89e] bg-[#f2a89e]/15 text-[#f5c4bd]"
                        : "border-white/10 text-[#aaa69f] hover:border-white/30 hover:text-[#e8e0d1]"
                    }`}
                  >
                    <span className={`size-1.5 rounded-full ${isCurrentFlagged ? "bg-[#f2a89e]" : "bg-transparent border border-white/30"}`} />
                    {isCurrentFlagged ? "FLAGGED" : "FLAG"}
                  </button>
                )}
              </div>
            </div>

            {/* Prompt Body */}
            <div className="px-4 py-6 sm:px-8 sm:py-8 lg:px-10">
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-[0.58rem] font-bold tracking-[0.24em] text-[#9d9992]">
                  {currentQuestion.chapterTitle ? `${currentQuestion.chapterTitle.toUpperCase()} // ` : ""}
                  QUESTION_ID #{currentQuestion.id}
                </p>

                {isReviewMode && (
                  <span
                    className={`font-mono text-xs font-bold px-2.5 py-0.5 border ${
                      isCurrentCorrect
                        ? "border-emerald-500/80 bg-emerald-500/20 text-emerald-300"
                        : "border-red-500/80 bg-red-500/20 text-red-300"
                    }`}
                  >
                    {isCurrentCorrect ? "BENAR (+1)" : "SALAH (0)"}
                  </span>
                )}
              </div>

              <h2
                id={`question-${currentQuestion.id}`}
                className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-xl font-normal leading-[1.3] tracking-[-0.01em] text-[#f0e9df] sm:text-2xl lg:text-3xl"
              >
                {currentQuestion.text}
              </h2>

              <p
                id={`question-instructions-${currentQuestion.id}`}
                className="mt-3 font-mono text-[0.68rem] text-[#9d9992]"
              >
                {isReviewMode
                  ? "Tinjauan hasil pengerjaan. Opsi dengan centang hijau adalah kunci jawaban yang sah."
                  : currentQuestion.multiple
                    ? "Pilih semua opsi yang benar. Tekan tombol huruf A-D atau klik opsi."
                    : "Pilih satu opsi paling tepat. Tekan tombol keyboard [A-D] atau klik opsi."}
              </p>

              {/* Options */}
              {currentQuestion.options.length > 0 ? (
                <fieldset
                  aria-describedby={`question-instructions-${currentQuestion.id}`}
                  aria-labelledby={`question-${currentQuestion.id}`}
                  className="mt-6"
                >
                  <legend className="sr-only">Pilihan jawaban</legend>
                  <div className="grid gap-2.5">
                    {currentQuestion.options.map((option, optionIndex) => {
                      const isSelected = currentAnswers.includes(optionIndex)
                      const isExpectedAnswer = currentCorrectAnswers.includes(optionIndex)
                      const inputId = `tryout-${currentQuestion.id}-option-${optionIndex}`
                      const optLabel = optionLabels[optionIndex] ?? String(optionIndex + 1)

                      let optionStyle = "border-white/10 bg-white/[0.015] text-[#c9c3ba] hover:border-white/30 hover:bg-white/[0.035]"
                      let bracketStyle = "text-[#8e8a84] border-white/15 bg-white/[0.02]"

                      if (isReviewMode) {
                        if (isExpectedAnswer) {
                          optionStyle = "border-emerald-500 bg-emerald-500/15 text-emerald-100 font-medium"
                          bracketStyle = "border-emerald-400 bg-emerald-500 text-black font-bold"
                        } else if (isSelected && !isExpectedAnswer) {
                          optionStyle = "border-red-500 bg-red-500/15 text-red-200 line-through opacity-85"
                          bracketStyle = "border-red-500 bg-red-500 text-white font-bold"
                        } else {
                          optionStyle = "border-white/5 bg-transparent text-[#6e6b66] opacity-50"
                        }
                      } else if (isSelected) {
                        optionStyle = "border-[#f2a89e] bg-[#f2a89e]/10 text-[#f6ebe3] tactical-glow"
                        bracketStyle = "border-[#f2a89e] bg-[#f2a89e] text-black font-bold"
                      }

                      return (
                        <label
                          key={inputId}
                          htmlFor={inputId}
                          className={`group flex items-center gap-3 border p-3 transition-all sm:gap-4 sm:p-3.5 ${
                            isReviewMode ? "cursor-default" : "cursor-pointer"
                          } ${optionStyle}`}
                        >
                          <input
                            id={inputId}
                            name={`tryout-question-${currentQuestion.id}`}
                            type={currentQuestion.multiple ? "checkbox" : "radio"}
                            value={optionIndex}
                            checked={isSelected}
                            disabled={isReviewMode}
                            onChange={() => selectOption(currentQuestion, optionIndex)}
                            className="sr-only"
                          />

                          {/* Tactical Bracket Label */}
                          <span
                            aria-hidden="true"
                            className={`flex size-7 shrink-0 items-center justify-center border font-mono text-xs transition-colors ${bracketStyle}`}
                          >
                            {isReviewMode && isExpectedAnswer ? (
                              <Check className="size-3.5 stroke-[3]" />
                            ) : isReviewMode && isSelected && !isExpectedAnswer ? (
                              <X className="size-3.5 stroke-[3]" />
                            ) : isSelected ? (
                              <Check className="size-3.5 stroke-[3]" />
                            ) : (
                              optLabel
                            )}
                          </span>

                          <span className="min-w-0 flex-1 text-sm leading-6 sm:text-[0.92rem]">
                            {option}
                          </span>

                          {/* Review badges */}
                          {isReviewMode && isExpectedAnswer && (
                            <span className="shrink-0 border border-emerald-500/60 bg-emerald-500/20 px-2 py-0.5 font-mono text-[0.55rem] font-bold text-emerald-300">
                              KUNCI BENAR
                            </span>
                          )}
                          {isReviewMode && isSelected && !isExpectedAnswer && (
                            <span className="shrink-0 border border-red-500/60 bg-red-500/20 px-2 py-0.5 font-mono text-[0.55rem] font-bold text-red-300">
                              PILIHAN ANDA
                            </span>
                          )}
                        </label>
                      )
                    })}
                  </div>
                </fieldset>
              ) : (
                <div role="alert" className="mt-6 flex items-start gap-3 border border-[#f2a89e]/50 bg-[#f2a89e]/10 p-4 font-mono text-xs text-[#f5c4bd]">
                  <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  Tidak ada opsi jawaban tersedia untuk pertanyaan ini.
                </div>
              )}

              {/* Submit warning banner */}
              {showSubmitNotice && (
                <div role="alert" className="mt-6 border border-[#f2a89e] bg-[#f2a89e]/10 p-4">
                  <div className="flex items-start gap-3">
                    <CircleAlert className="mt-0.5 size-4 shrink-0 text-[#f2a89e]" aria-hidden="true" />
                    <div>
                      <p className="font-mono text-xs font-bold text-[#f6ebe3]">
                        PERINGATAN: {unansweredCount} PERTANYAAN BELUM TERJAWAB
                      </p>
                      <p className="mt-1 text-xs text-[#d0c5bd]">
                        Apakah kamu ingin memeriksa kembali pertanyaan yang masih kosong, atau langsung mengirimkan sesi ini?
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2 font-mono text-[0.62rem]">
                        <button
                          type="button"
                          onClick={() => setShowSubmitNotice(false)}
                          className="border border-white/25 px-3 py-1.5 font-bold text-[#e8e0d1] hover:border-white/45"
                        >
                          PERIKSA KEMBALI
                        </button>
                        <button
                          type="button"
                          onClick={finishCurrentSession}
                          className="border border-[#f2a89e] bg-[#f2a89e] px-3 py-1.5 font-bold text-[#171311] hover:bg-[#f8c2ba]"
                        >
                          KIRIM SEKARANG
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Nav Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-black/20 px-4 py-3 sm:px-6">
              <button
                type="button"
                onClick={() => goToQuestion(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="flex items-center gap-1.5 border border-white/15 px-3 py-2 font-mono text-[0.62rem] font-bold text-[#c9c3ba] transition-colors hover:border-white/40 hover:text-[#f0e9df] disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f0e9df]"
              >
                <ChevronLeft className="size-3.5" aria-hidden="true" /> [P] PREV
              </button>

              <div className="font-mono text-[0.6rem] text-[#9d9992]">
                SOAL {activeIndex + 1} DARI {totalQuestions}
              </div>

              {activeIndex === totalQuestions - 1 ? (
                isReviewMode ? (
                  <button
                    type="button"
                    onClick={() => setIsReviewMode(false)}
                    className="flex items-center gap-1.5 border border-emerald-500/80 bg-emerald-600 px-3.5 py-2 font-mono text-[0.62rem] font-bold text-white"
                  >
                    SELESAI REVIEW
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={requestSubmit}
                    className="flex items-center gap-1.5 border border-[#f2a89e] bg-[#f2a89e] px-4 py-2 font-mono text-[0.62rem] font-bold text-[#171311] transition-colors hover:bg-[#f8c2ba] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f0e9df]"
                  >
                    SUBMIT CHAPTER <Send className="size-3.5" aria-hidden="true" />
                  </button>
                )
              ) : (
                <button
                  type="button"
                  onClick={() => goToQuestion(activeIndex + 1)}
                  className="flex items-center gap-1.5 border border-white/20 px-3.5 py-2 font-mono text-[0.62rem] font-bold text-[#e8e0d1] transition-colors hover:border-white/50 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f0e9df]"
                >
                  NEXT [N] <ChevronRight className="size-3.5" aria-hidden="true" />
                </button>
              )}
            </div>
          </article>
        </main>
      </div>
    </section>
  )
}

type ResultsDossierProps = {
  answeredCount: number
  answers: Record<number, number[]>
  chapterTitle: string
  correctCount: number
  elapsedSeconds: number
  flaggedCount: number
  hasNextChapter: boolean
  onNextChapter: () => void
  onRestart: () => void
  onReturnToHub: () => void
  onReview: () => void
  questions: TryoutEtsQuestion[]
  scorePercent: number
  totalQuestions: number
}

function ResultsDossier({
  answeredCount,
  answers,
  chapterTitle,
  correctCount,
  elapsedSeconds,
  flaggedCount,
  hasNextChapter,
  onNextChapter,
  onRestart,
  onReturnToHub,
  onReview,
  questions,
  scorePercent,
  totalQuestions,
}: ResultsDossierProps) {
  const unansweredCount = totalQuestions - answeredCount
  const grade = getGradeBadge(scorePercent)

  return (
    <main className="relative mx-auto max-w-[72rem] px-4 py-7 sm:px-6 sm:py-10">
      <article aria-live="polite" className="ryoku-border overflow-hidden bg-[#0d0d0d]/95 shadow-2xl shadow-black/40">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-white/[0.02] px-5 py-3 sm:px-7">
          <div className="flex items-center gap-2">
            <span className="border border-[#f2a89e]/60 bg-[#f2a89e]/10 px-2 py-0.5 font-mono text-[0.55rem] font-bold text-[#f2a89e]">
              REPORT DOSSIER
            </span>
            <p className="font-mono text-[0.61rem] text-[#9d9992]">
              {chapterTitle}
            </p>
          </div>
          <span className="flex items-center gap-1.5 font-mono text-[0.58rem] font-bold text-[#f5c4bd]">
            <span className="size-1.5 rounded-full bg-[#f2a89e]" /> DIVERIFIKASI
          </span>
        </div>

        <div className="grid gap-8 px-5 py-8 sm:px-7 sm:py-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-10 lg:px-10">
          <div>
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center border border-[#f2a89e]/60 bg-[#f2a89e]/10 text-[#f2a89e] tactical-glow">
                <Trophy className="size-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className={`border px-2 py-0.5 font-mono text-[0.58rem] font-bold ${grade.color}`}>
                    {grade.grade}
                  </span>
                  <span className="font-mono text-[0.6rem] text-[#9d9992]">{grade.text}</span>
                </div>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-[#f0e9df] sm:text-4xl">
                  {scorePercent >= 75 ? "Evaluasi Berhasil." : "Sesi Selesai."}
                </h2>
                <p className="mt-2 max-w-xl text-xs leading-5 text-[#aaa69f]">
                  Dossier hasil pengerjaan untuk {chapterTitle}. Kamu dapat meninjau setiap soal untuk melihat kunci resmi dan memperbaiki kesalahan.
                </p>
              </div>
            </div>

            {/* Tactical Metrics Box */}
            <div className="mt-6 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
              <div className="bg-[#0d0d0d] p-4">
                <p className="font-mono text-[0.55rem] font-semibold text-[#8e8a84]">SKOR AKHIR</p>
                <p className="mt-2 font-mono text-3xl font-bold tracking-tight text-[#f2a89e]">
                  {scorePercent}%
                </p>
              </div>
              <div className="bg-[#0d0d0d] p-4">
                <p className="font-mono text-[0.55rem] font-semibold text-[#8e8a84]">BENAR / TOTAL</p>
                <p className="mt-2 font-mono text-2xl font-bold tracking-tight text-[#f0e9df]">
                  {correctCount} / {totalQuestions}
                </p>
              </div>
              <div className="bg-[#0d0d0d] p-4">
                <p className="font-mono text-[0.55rem] font-semibold text-[#8e8a84]">WAKTU TEMPUH</p>
                <p className="mt-2 font-mono text-2xl font-bold tracking-tight text-[#f0e9df]">
                  {formatDuration(elapsedSeconds)}
                </p>
              </div>
            </div>

            {/* Completion Ratio */}
            <div className="mt-6">
              <div className="flex items-center justify-between font-mono text-[0.6rem] text-[#a9a49d]">
                <span>TINGKAT PENYELESAIAN</span>
                <span className="font-bold text-[#f0e9df]">
                  {answeredCount} / {totalQuestions} ({Math.round((answeredCount / totalQuestions) * 100)}%)
                </span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden bg-white/10">
                <div
                  className="h-full bg-[#f2a89e]"
                  style={{ width: `${Math.round((answeredCount / totalQuestions) * 100)}%` }}
                />
              </div>

              <div className="mt-4 grid gap-2 font-mono text-[0.6rem] sm:grid-cols-2">
                <p className="border border-white/10 bg-black/20 p-2.5 text-[#aaa69f]">
                  <span className="font-bold text-[#f0e9df] mr-2">{flaggedCount}</span> DITANDAI RAGU (FLAGGED)
                </p>
                <p className="border border-white/10 bg-black/20 p-2.5 text-[#aaa69f]">
                  <span className="font-bold text-[#f0e9df] mr-2">{unansweredCount}</span> TIDAK DIJAWAB
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={onReview}
                className="flex items-center gap-2 border border-emerald-500/80 bg-emerald-500/15 px-4 py-3 font-mono text-xs font-bold text-emerald-300 transition-colors hover:bg-emerald-500/25"
              >
                <BookOpen className="size-4" /> REVIEW DETAIL JAWABAN
              </button>

              {hasNextChapter && (
                <button
                  type="button"
                  onClick={onNextChapter}
                  className="flex items-center gap-2 border border-[#f2a89e] bg-[#f2a89e] px-4 py-3 font-mono text-xs font-bold text-[#171311] transition-colors hover:bg-[#f8c2ba]"
                >
                  LANJUT CHAPTER BERIKUTNYA <ArrowRight className="size-4" />
                </button>
              )}

              <button
                type="button"
                onClick={onRestart}
                className="flex items-center gap-2 border border-white/20 px-4 py-3 font-mono text-xs font-semibold text-[#e8e0d1] transition-colors hover:border-white/50 hover:bg-white/[0.04]"
              >
                <RefreshCw className="size-4" /> ULANGI CHAPTER
              </button>

              <button
                type="button"
                onClick={onReturnToHub}
                className="flex items-center gap-2 border border-white/20 px-4 py-3 font-mono text-xs font-semibold text-[#aaa69f] transition-colors hover:border-white/40 hover:text-[#f0e9df]"
              >
                <ArrowLeft className="size-4" /> PILIH BAB LAIN
              </button>
            </div>
          </div>

          {/* Quick Response Matrix Sidebar */}
          <aside className="border border-white/10 bg-black/20 p-4 sm:p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <p className="font-mono text-[0.58rem] font-bold tracking-[0.2em] text-[#9d9992]">
                RESPONSE MATRIX
              </p>
              <span className="font-mono text-[0.58rem] text-[#f2a89e]">
                {correctCount} / {totalQuestions}
              </span>
            </div>

            <div className="mt-3.5 grid grid-cols-5 gap-1.5 max-h-72 overflow-y-auto pr-1">
              {questions.map((question, index) => {
                const userAns = answers[question.id] ?? []
                const correctAns = question.answers ?? question.answerIndexes ?? []
                const isAnswered = userAns.length > 0
                const isCorrect = isAnswered && hasSameOptions(userAns, correctAns)

                return (
                  <span
                    key={question.id}
                    className={`flex h-8 items-center justify-center border font-mono text-[0.62rem] font-bold ${
                      !isAnswered
                        ? "border-white/10 text-[#67635d]"
                        : isCorrect
                          ? "border-emerald-500/80 bg-emerald-500/20 text-emerald-300"
                          : "border-red-500/80 bg-red-500/20 text-red-300"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )
              })}
            </div>

            <div className="mt-5 space-y-1.5 border-t border-white/10 pt-4 font-mono text-[0.58rem] text-[#8c8882]">
              <p className="flex items-center gap-2">
                <span className="size-2 bg-emerald-500" /> Benar: {correctCount}
              </p>
              <p className="flex items-center gap-2">
                <span className="size-2 bg-red-500" /> Salah: {answeredCount - correctCount}
              </p>
              <p className="flex items-center gap-2">
                <span className="size-2 border border-white/20" /> Belum Dijawab: {unansweredCount}
              </p>
            </div>
          </aside>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.01] px-5 py-3 font-mono text-[0.52rem] text-[#77736d] sm:px-7">
          <span>TRYOUT-ETS // SILABUS WILLIAM STALLINGS</span>
          <span>RYOKU ENGINE v2.5 • IOSEVKA NF</span>
        </div>
      </article>
    </main>
  )
}

export default TryoutEtsQuiz
