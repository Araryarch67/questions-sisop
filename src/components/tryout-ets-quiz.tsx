"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import {
  LuTriangleAlert,
  LuArrowLeft,
  LuArrowRight,
  LuBookOpen,
  LuCalendarClock,
  LuCheck,
  LuChevronLeft,
  LuChevronRight,
  LuCircleAlert,
  LuCircleCheck,
  LuCircleDashed,
  LuClock,
  LuCpu,
  LuEye,
  LuFileText,
  LuFilter,
  LuFlame,
  LuGitBranch,
  LuLayers,
  LuBandage,
  LuListChecks,
  LuLock,
  LuPartyPopper,
  LuStar,
  LuSwords,
  LuRefreshCw,
  LuRotateCcw,
  LuSearch,
  LuSend,
  LuSparkles,
  LuTerminal,
  LuTrophy,
  LuX,
  LuZap,
} from "react-icons/lu"
import {
  type TryoutChapter,
  type TryoutEtsQuestion,
  tryoutChapters,
  tryoutEtsQuestions,
} from "@/lib/tryout-ets"
import { RichExplanationCard } from "@/components/rich-explanation-card"
import { CompetitiveMode } from "@/components/competitive-mode"
import { FlashcardMode } from "@/components/flashcard-mode"
import { DrillMode } from "@/components/drill-mode"
import { decodeUnicodeEscapes } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export type { TryoutChapter, TryoutEtsQuestion }

/** Display copy + filters for a question bank. Defaults preserve the ETS bank. */
export type QuizBankMeta = {
  bankTag: string
  subjectLine: string
  lecturer?: string
  semester?: string
  courseDescription?: string
  moduleEyebrow: string
  hubDescription: string
  searchPlaceholder: string
  simulationBadge: string
  simulationTitle: string
  simulationDescription: string
  /** Shown as "~90 Menit" chip; omit when the bank has no recommended time. */
  recommendedTime?: string
  syllabusFooter: string
  partFilters: { label: string; value: string }[]
}

export const etsBankMeta: QuizBankMeta = {
  bankTag: "ETS",
  subjectLine: "Sistem Operasi (M)",
  moduleEyebrow: "Semester Gasal 2026/2027 • Kuis ETS",
  hubDescription:
    "Kumpulan kuis ETS Sistem Operasi per modul. Pilih modul yang ingin dikerjakan, atau mulai kuis komprehensif semua modul.",
  searchPlaceholder: "Search modules",
  simulationBadge: "KUIS KOMPREHENSIF ETS",
  simulationTitle: "Kuis Komprehensif ETS (Semua 117 Soal)",
  simulationDescription:
    "Kerjakan semua modul dalam satu kuis seperti di IHateITS. Progres tersimpan otomatis di perangkatmu.",
  recommendedTime: "~90 Menit",
  syllabusFooter: "IHateITS",
  partFilters: [
    { label: "SEMUA Modul (7)", value: "ALL" },
    { label: "PART 1: BACKGROUND (CH 1-2)", value: "PART 1" },
    { label: "PART 2: PROCESSES & THREADS (CH 3-6)", value: "PART 2" },
    { label: "PART 4: SCHEDULING (CH 9)", value: "PART 4" },
  ],
}

export type QuizQuestion = TryoutEtsQuestion & { explanation?: string }

export type TryoutEtsQuizProps = {
  questions?: QuizQuestion[]
  chapters?: TryoutChapter[]
  bank?: QuizBankMeta
  /** Prefix for localStorage keys; keeps answer banks isolated per subject. */
  storagePrefix?: string
  title?: string
  initialChapterId?: string | null
  /** When provided, hub chapter clicks navigate via router instead of internal setState. */
  onSelectChapter?: (chapterId: string | "all") => void
  /** When provided, hub study-mode clicks navigate via router instead of internal setState. */
  onSelectSpecialMode?: (mode: "competitive" | "flashcards" | "drill") => void
  initialSpecialMode?: "competitive" | "flashcards" | "drill" | null
  /** When provided, runner "back" navigates via router instead of internal setState. */
  onExitToHub?: () => void
  onBackToCourses?: () => void
}

const optionLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Map chapter to icon
function getChapterIcon(id: string) {
  switch (id) {
    case "ch01":
      return <LuCpu className="size-5 text-[#04a5e5]" />
    case "ch02":
      return <LuTerminal className="size-5 text-[#40a02b]" />
    case "ch03":
      return <LuLayers className="size-5 text-[#df8e1d]" />
    case "ch04":
      return <LuGitBranch className="size-5 text-[#8839ef]" />
    case "ch05":
      return <LuLock className="size-5 text-[#e64553]" />
    case "ch06":
      return <LuTriangleAlert className="size-5 text-[#fe640b]" />
    case "ch09":
      return <LuCalendarClock className="size-5 text-[#7287fd]" />
    default:
      return <LuBookOpen className="size-5 text-[#8839ef]" />
  }
}

// Chapter difficulty indicator
function getChapterDifficulty(id: string): { label: string; color: string } {
  switch (id) {
    case "ch01":
      return { label: "FOUNDATIONAL", color: "text-[#04a5e5] border-2 border-[#4c4f69] bg-white shadow-[2px_2px_0_#4c4f69]" }
    case "ch02":
      return { label: "CORE ARCH", color: "text-[#40a02b] border-2 border-[#4c4f69] bg-white shadow-[2px_2px_0_#4c4f69]" }
    case "ch03":
      return { label: "INTERMEDIATE", color: "text-[#df8e1d] border-2 border-[#4c4f69] bg-white shadow-[2px_2px_0_#4c4f69]" }
    case "ch04":
      return { label: "INTERMEDIATE", color: "text-[#8839ef] border-2 border-[#4c4f69] bg-white shadow-[2px_2px_0_#4c4f69]" }
    case "ch05":
      return { label: "ADVANCED", color: "text-[#e64553] border-2 border-[#4c4f69] bg-white shadow-[2px_2px_0_#4c4f69]" }
    case "ch06":
      return { label: "ADVANCED", color: "text-[#fe640b] border-2 border-[#4c4f69] bg-white shadow-[2px_2px_0_#4c4f69]" }
    case "ch09":
      return { label: "CORE ALGO", color: "text-[#7287fd] border-2 border-[#4c4f69] bg-white shadow-[2px_2px_0_#4c4f69]" }
    default:
      return { label: "COMPREHENSIVE", color: "text-[#8839ef] border-2 border-[#4c4f69] bg-white shadow-[2px_2px_0_#4c4f69]" }
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
  if (scorePercent >= 90) return { grade: "Nilai S!", text: "WOW, sempurna banget!", color: "border-[#4c4f69] bg-[#40a02b] text-white shadow-[3px_3px_0_#4c4f69] -rotate-2" }
  if (scorePercent >= 80) return { grade: "Nilai A!", text: "Keren banget, lanjutkan!", color: "border-[#4c4f69] bg-[#179299] text-white shadow-[3px_3px_0_#4c4f69] rotate-1" }
  if (scorePercent >= 70) return { grade: "Nilai B!", text: "Udah oke, dikit lagi!", color: "border-[#4c4f69] bg-[#04a5e5] text-white shadow-[3px_3px_0_#4c4f69] -rotate-1" }
  if (scorePercent >= 55) return { grade: "Nilai C!", text: "Lumayan! Gas lagi yuk!", color: "border-[#4c4f69] bg-[#df8e1d] text-white shadow-[3px_3px_0_#4c4f69] rotate-2" }
  return { grade: "Coba lagi yuk!", text: "Gapapa, latihan bikin jago!", color: "border-[#4c4f69] bg-[#e64553] text-white shadow-[3px_3px_0_#4c4f69] -rotate-2" }
}

export function TryoutEtsQuiz({
  questions = tryoutEtsQuestions,
  chapters = tryoutChapters,
  bank = etsBankMeta,
  storagePrefix = "myits_classroom_ets",
  title = "Kuis ETS",
  initialChapterId = null,
  onSelectChapter,
  onSelectSpecialMode,
  initialSpecialMode = null,
  onExitToHub,
  onBackToCourses,
}: TryoutEtsQuizProps) {
  const answersKey = `${storagePrefix}_answers`
  const flagsKey = `${storagePrefix}_flags`
  const submittedKey = `${storagePrefix}_submitted`
  const sessionKey = `${storagePrefix}_session`
  // Hub-only mode (detail route): never auto-jump into the runner from a saved session.
  const hubOnly = onSelectChapter != null
  // Navigation & State (restored from localStorage so refresh never restarts from zero)
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(() => {
    if (hubOnly) return null
    if (initialChapterId) return initialChapterId
    if (typeof window === "undefined") return null
    try {
      const saved = localStorage.getItem(sessionKey)
      return saved ? (JSON.parse(saved).chapterId ?? null) : null
    } catch {
      return null
    }
  })
  const [currentIndex, setCurrentIndex] = useState(() => {
    if (hubOnly) return 0
    if (typeof window === "undefined") return 0
    try {
      const saved = localStorage.getItem(sessionKey)
      const idx = saved ? JSON.parse(saved).index : 0
      return typeof idx === "number" && idx >= 0 ? idx : 0
    } catch {
      return 0
    }
  })

  // Initialize state with lazy localStorage reader
  const [answers, setAnswers] = useState<Record<number, number[]>>(() => {
    if (typeof window === "undefined") return {}
    try {
      const saved = localStorage.getItem(answersKey)
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  const [flagged, setFlagged] = useState<number[]>(() => {
    if (typeof window === "undefined") return []
    try {
      const saved = localStorage.getItem(flagsKey)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [elapsedSeconds, setElapsedSeconds] = useState(() => {
    if (hubOnly) return 0
    if (typeof window === "undefined") return 0
    try {
      const saved = localStorage.getItem(sessionKey)
      const secs = saved ? JSON.parse(saved).elapsed : 0
      return typeof secs === "number" && secs >= 0 ? secs : 0
    } catch {
      return 0
    }
  })
  const [submittedChapters, setSubmittedChapters] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") return {}
    try {
      const saved = localStorage.getItem(submittedKey)
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })
  const [showSubmitNotice, setShowSubmitNotice] = useState(false)
  const [isReviewMode, setIsReviewMode] = useState(false)
  const [partFilter, setPartFilter] = useState<string>("ALL")
  const [searchQuery, setSearchQuery] = useState("")
  const [infoExpanded, setInfoExpanded] = useState(false)
  const [sidebarFilter, setSidebarFilter] = useState<"ALL" | "ANSWERED" | "UNANSWERED" | "Ragu">("ALL")
  const [reviewFilter, setReviewFilter] = useState<"ALL" | "WRONG" | "CORRECT" | "Ragu">("ALL")

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(answersKey, JSON.stringify(answers))
    } catch {}
  }, [answers, answersKey])

  useEffect(() => {
    try {
      localStorage.setItem(flagsKey, JSON.stringify(flagged))
    } catch {}
  }, [flagged, flagsKey])

  useEffect(() => {
    try {
      localStorage.setItem(submittedKey, JSON.stringify(submittedChapters))
    } catch {}
  }, [submittedChapters, submittedKey])

  // Persist session (chapter, position, timer) so refresh resumes mid-quiz
  useEffect(() => {
    try {
      localStorage.setItem(
        sessionKey,
        JSON.stringify({ chapterId: selectedChapterId, index: currentIndex, elapsed: elapsedSeconds }),
      )
    } catch {}
  }, [selectedChapterId, currentIndex, elapsedSeconds, sessionKey])

  // Active question set based on selected chapter
  const activeQuestions = useMemo(() => {
    if (!selectedChapterId || selectedChapterId === "all") {
      return questions
    }
    return questions.filter((q) => q.chapterId === selectedChapterId)
  }, [questions, selectedChapterId])

  const currentChapter = useMemo(() => {
    if (!selectedChapterId || selectedChapterId === "all") return null
    return chapters.find((c) => c.id === selectedChapterId) ?? null
  }, [selectedChapterId, chapters])

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

  // Overall statistics for all questions in this bank
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

  // Study modes: modules (default) + competitive + flashcards + wrong-answer drill
  const [specialMode, setSpecialMode] = useState<"competitive" | "flashcards" | "drill" | null>(
    () => initialSpecialMode ?? null,
  )
  const exitSpecialMode = useCallback(() => {
    if (onExitToHub) {
      onExitToHub()
      return
    }
    setSpecialMode(null)
  }, [onExitToHub])

  // Questions answered incorrectly at least once — fuel for the drill mode
  const drillQuestions = useMemo(() => {
    return questions.filter((question) => {
      const selected = answers[question.id] ?? []
      if (selected.length === 0) return false
      const correct = question.answers ?? question.answerIndexes ?? []
      return !hasSameOptions(selected, correct)
    })
  }, [answers, questions])

  const clearDrillQuestions = useCallback(() => {
    setAnswers((prev) => {
      const next = { ...prev }
      drillQuestions.forEach((q) => {
        delete next[q.id]
      })
      return next
    })
  }, [drillQuestions])

  // Chapter navigation handlers
  const handleSelectChapter = (chapterId: string | "all") => {
    if (onSelectChapter) {
      onSelectChapter(chapterId)
      return
    }
    setSelectedChapterId(chapterId)
    setSpecialMode(null)
    setCurrentIndex(0)
    setShowSubmitNotice(false)
    setIsReviewMode(false)
    setSidebarFilter("ALL")
    setReviewFilter("ALL")
  }

  const handleSelectSpecialMode = (mode: "competitive" | "flashcards" | "drill") => {
    if (onSelectSpecialMode) {
      onSelectSpecialMode(mode)
      return
    }
    setSpecialMode(mode)
  }

  const handleBackToHub = () => {
    if (onExitToHub) {
      onExitToHub()
      return
    }
    setSelectedChapterId(null)
    setSpecialMode(null)
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
    (question: QuizQuestion, optionIndex: number) => {
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
      } else if (event.key === "LuArrowRight" || key === "N") {
        if (activeIndex < totalQuestions - 1) {
          goToQuestion(activeIndex + 1)
        }
      } else if (event.key === "LuArrowLeft" || key === "P") {
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
        `Peringatan: Reset akan menghapus seluruh rekaman jawaban dari semua ${chapters.length} chapter bank ${bank.bankTag}. Lanjutkan?`,
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
        localStorage.removeItem(answersKey)
        localStorage.removeItem(flagsKey)
        localStorage.removeItem(submittedKey)
        localStorage.removeItem(sessionKey)
      } catch {}
    }
  }

  const handleNextChapter = () => {
    if (!selectedChapterId || selectedChapterId === "all") {
      handleBackToHub()
      return
    }
    const chapterIdx = chapters.findIndex((c) => c.id === selectedChapterId)
    if (chapterIdx >= 0 && chapterIdx < chapters.length - 1) {
      handleSelectChapter(chapters[chapterIdx + 1].id)
    } else {
      handleBackToHub()
    }
  }

  // LuFilter chapters in the selection hub with search
  const filteredChapters = useMemo(() => {
    return chapters.filter((c) => {
      const matchesPart = partFilter === "ALL" || c.part.includes(partFilter)
      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.topics.some((t) => t.toLowerCase().includes(q))
      return matchesPart && matchesSearch
    })
  }, [partFilter, searchQuery, chapters])

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
          if (reviewFilter === "Ragu") return isFlg
          return true
        }

        const isAns = (answers[question.id]?.length ?? 0) > 0
        const isFlg = flagged.includes(question.id)
        if (sidebarFilter === "ANSWERED") return isAns
        if (sidebarFilter === "UNANSWERED") return !isAns
        if (sidebarFilter === "Ragu") return isFlg
        return true
      })
  }, [activeQuestions, answers, flagged, isReviewMode, reviewFilter, sidebarFilter])

  // SPECIAL STUDY MODES — competitive / flashcards / wrong-answer drill
  if (specialMode === "competitive") {
    return (
      <CompetitiveMode
        questions={questions}
        courseTitle={bank.subjectLine}
        storagePrefix={storagePrefix}
        onExit={exitSpecialMode}
      />
    )
  }
  if (specialMode === "flashcards") {
    return (
      <FlashcardMode
        questions={questions}
        courseTitle={bank.subjectLine}
        storagePrefix={storagePrefix}
        onExit={exitSpecialMode}
      />
    )
  }
  if (specialMode === "drill") {
    return (
      <DrillMode
        questions={drillQuestions}
        allQuestions={questions}
        courseTitle={bank.subjectLine}
        onExit={exitSpecialMode}
        onClearDrill={clearDrillQuestions}
      />
    )
  }

  // VIEW 1: COURSE DETAIL (course page) — chapter list inside the course
  if (!selectedChapterId) {
    const semester = bank.semester ?? "Semester Gasal 2026/2027"
    const courseDesc = bank.courseDescription ?? bank.hubDescription
    return (
      <section className="min-h-svh bg-[#eff1f5] text-[#4c4f69]">
        <main className="mx-auto max-w-6xl px-4 py-6">
          {onBackToCourses && (
            <Button type="button" variant="ghost" onClick={onBackToCourses}
              className="mb-3 flex items-center gap-1.5 text-[13px] font-bold hover:underline">
              <LuArrowLeft className="size-4" /> My courses
            </Button>
          )}
          <p className="truncate text-[11px] text-[#6c6f85]">
            ITS / Sarjana / FTEIC / S-1 RPL / {semester}
          </p>

          {/* Banner — pastel sticker party! */}
          <div className={`relative mt-3 overflow-hidden rounded-2xl border-2 border-[#4c4f69] shadow-[5px_5px_0_#4c4f69] ${bank.bankTag === "EAS" ? "bg-[#04a5e5]" : "bg-[#ea76cb]"} dots-light`}>
            <div className="absolute right-5 top-5 rotate-12 rounded-2xl border-2 border-[#4c4f69] bg-white/50 px-3 py-1.5 text-[#ea76cb]" aria-hidden="true"><LuPartyPopper className="size-7" /></div>
            <div className="absolute bottom-5 right-24 -rotate-12 rounded-full border-2 border-[#4c4f69] bg-white/50 px-2.5 py-1 text-[#df8e1d]" aria-hidden="true"><LuStar className="size-5" /></div>
            <div className="relative p-6 sm:p-8">
              <span className="inline-block -rotate-2 rounded-full border-2 border-[#4c4f69] bg-white px-2.5 py-1 text-[11px] font-bold text-[#4c4f69] shadow-[2px_2px_0_#4c4f69]">{semester}</span>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-white drop-shadow-[2px_2px_0_#4c4f69] sm:text-4xl">{bank.subjectLine}</h1>
              <p className="mt-1 text-sm font-bold text-white/95">Yuk belajar sambil main — {totalAllAnswered}/{totalAllQuestions} soal udah dijawab!</p>
              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="w-full max-w-xs rounded-2xl border-2 border-[#4c4f69] bg-white p-3.5 shadow-[3px_3px_0_#4c4f69]">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-xs font-bold text-[#4c4f69]">Progres course</p>
                    <p className="text-lg font-bold tabular-nums text-[#8839ef]">{totalAllProgress}%</p>
                  </div>
                  <div className="mt-2 h-4 overflow-hidden rounded-full border-2 border-[#4c4f69] bg-[#e6e9ef]">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#8839ef] via-[#ea76cb] to-[#04a5e5] stripes-fun transition-all duration-500" style={{ width: `${totalAllProgress}%` }} />
                  </div>
                  <p className="mt-1.5 text-[11px] font-bold text-[#6c6f85]">{totalAllAnswered}/{totalAllQuestions} soal selesai — mantap!</p>
                </div>
                <Button type="button" onClick={() => handleSelectChapter("all")}
                  className="shrink-0 px-5 py-2.5 text-[13px]">
                  Resume seru!
                </Button>
              </div>
            </div>
          </div>

          {/* Tabs — single active tab */}
          <div className="mt-4 flex items-center gap-3 overflow-x-auto whitespace-nowrap pb-1 text-[13px] font-bold">
            <span className="-rotate-1 rounded-full border-2 border-[#4c4f69] bg-[#8839ef] px-3.5 py-1.5 text-white shadow-[3px_3px_0_#4c4f69]">Course</span>
            {totalAllAnswered > 0 && (
              <Button type="button" variant="outline" size="sm" onClick={resetAllProgress} className="ml-auto mb-1 flex shrink-0 items-center gap-1 text-[11px]">
                <LuRotateCcw className="size-3" /> Reset progres
              </Button>
            )}
          </div>

          {/* Study modes */}
          <h2 className="mt-6 text-lg font-bold tracking-tight">Mode belajar — pilih gayamu!</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <button
              type="button"
              onClick={() => handleSelectSpecialMode("competitive")}
              className="group flex items-center gap-3 rounded-2xl border-2 border-[#4c4f69] bg-white p-4 text-left shadow-[4px_4px_0_#4c4f69] transition-all hover:-translate-y-1 active:scale-[0.99]"
            >
              <span className="flex size-12 shrink-0 -rotate-3 items-center justify-center rounded-xl border-2 border-[#4c4f69] bg-[#e64553] text-white shadow-[2px_2px_0_#4c4f69]"><LuSwords className="size-6" /></span>
              <span className="min-w-0">
                <span className="block font-bold text-[#4c4f69] group-hover:text-[#8839ef]">Kompetitif!</span>
                <span className="mt-0.5 block text-xs text-[#6c6f85]">2 menit/soal • {totalAllQuestions} soal ngebut!</span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => handleSelectSpecialMode("flashcards")}
              className="group flex items-center gap-3 rounded-2xl border-2 border-[#4c4f69] bg-white p-4 text-left shadow-[4px_4px_0_#4c4f69] transition-all hover:-translate-y-1 active:scale-[0.99]"
            >
              <span className="flex size-12 shrink-0 rotate-3 items-center justify-center rounded-xl border-2 border-[#4c4f69] bg-[#1e66f5] text-white shadow-[2px_2px_0_#4c4f69]"><LuLayers className="size-6" /></span>
              <span className="min-w-0">
                <span className="block font-bold text-[#4c4f69] group-hover:text-[#8839ef]">Flip Card!</span>
                <span className="mt-0.5 block text-xs text-[#6c6f85]">Kartu hafalan bolak-balik!</span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => handleSelectSpecialMode("drill")}
              className="group flex items-center gap-3 rounded-2xl border-2 border-[#4c4f69] bg-white p-4 text-left shadow-[4px_4px_0_#4c4f69] transition-all hover:-translate-y-1 active:scale-[0.99]"
            >
              <span className="flex size-12 shrink-0 -rotate-3 items-center justify-center rounded-xl border-2 border-[#4c4f69] bg-[#40a02b] text-white shadow-[2px_2px_0_#4c4f69]"><LuBandage className="size-6" /></span>
              <span className="min-w-0">
                <span className="block font-bold text-[#4c4f69] group-hover:text-[#8839ef]">
                  Drill Salah! {drillQuestions.length > 0 && <span className="ml-1 rounded-full bg-[#e64553] px-1.5 py-px text-[10px] font-bold text-white">{drillQuestions.length}</span>}
                </span>
                <span className="mt-0.5 block text-xs text-[#6c6f85]">Bedah soal yang pernah salah!</span>
              </span>
            </button>
          </div>

          {/* Course Information */}
          <Card className="mt-5 rounded-2xl bg-white shadow-sm">
            <CardContent className="p-5">
              <h2 className="text-xl font-bold tracking-tight">Course Information — intip yuk!</h2>
              <p className={`mt-2 max-w-5xl text-[13px] leading-6 text-[#6c6f85] ${infoExpanded ? "" : "line-clamp-3"}`}>{courseDesc} {bank.simulationDescription}</p>
              <Button type="button" variant="link" size="sm" onClick={() => setInfoExpanded((v) => !v)} className="mt-1 px-0 text-[13px]">{infoExpanded ? "Show Less" : "Show More"}</Button>
            </CardContent>
          </Card>

          {/* LuFilter + search */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Select value={partFilter} onValueChange={(v) => { if (v) setPartFilter(v) }}>
              <SelectTrigger aria-label="Filter modul" className="w-64 bg-white text-xs text-[#6c6f85]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {bank.partFilters.map((f) => (<SelectItem key={f.value} value={f.value}>{f.label}</SelectItem>))}
              </SelectContent>
            </Select>
            <div className="relative">
              <LuSearch className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-[#9ca0b0]" />
              <Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder={bank.searchPlaceholder}
                className="w-44 bg-white py-2 pl-8 pr-3 text-xs placeholder:text-[#9ca0b0]" />
            </div>
            <span className="ml-auto rotate-1 rounded-full border-2 border-[#4c4f69] bg-[#df8e1d] px-3 py-1 text-xs font-bold text-white shadow-[2px_2px_0_#4c4f69]">{totalAllAnswered}/{totalAllQuestions} soal terjawab!</span>
          </div>

          {/* Chapter / module list like classroom resources */}
          <div className="mt-4 space-y-4 pb-10">
            {filteredChapters.length === 0 && (
              <Card className="animate-pop-in mx-auto max-w-md rounded-2xl bg-white p-8 text-center">
                <CardContent className="flex flex-col items-center gap-2 p-0">
                  <span className="animate-wiggle flex size-14 items-center justify-center rounded-2xl border-2 border-[#4c4f69] bg-[#7287fd] text-white shadow-[3px_3px_0_#4c4f69]"><LuBookOpen className="size-7" /></span>
                  <p className="mt-2 text-sm font-bold text-[#4c4f69]">Hmm, modulnya ngumpet!</p>
                  <p className="text-xs font-medium text-[#6c6f85]">Coba ubah filter atau kata kunci pencarian yuk.</p>
                  <Button type="button" variant="outline" size="sm" onClick={() => { setPartFilter("ALL"); setSearchQuery("") }} className="mt-3">
                    Kembali ke semua modul
                  </Button>
                </CardContent>
              </Card>
            )}
            {filteredChapters.map((chapter) => {
              const chapterQuestions = questions.filter((q) => q.chapterId === chapter.id)
              const count = chapterQuestions.length
              const answered = chapterQuestions.filter((q) => (answers[q.id]?.length ?? 0) > 0).length
              const chProgress = count ? Math.round((answered / count) * 100) : 0
              const isSubmitted = !!submittedChapters[chapter.id]
              return (
                <Card key={chapter.id}
                  onClick={() => handleSelectChapter(chapter.id)}
                  className="group flex w-full cursor-pointer flex-row items-start gap-4 rounded-2xl bg-white p-5 text-left transition-all duration-150 hover:-translate-y-1 hover:shadow-[6px_6px_0_#4c4f69] active:scale-[0.99]">
                  <span className="flex size-11 shrink-0 -rotate-2 items-center justify-center rounded-xl border-2 border-[#4c4f69] bg-[#ea76cb] text-white shadow-[3px_3px_0_#4c4f69] transition-transform group-hover:rotate-2"><LuFileText className="size-5" /></span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[15px] font-bold tracking-tight text-[#4c4f69]">[Kuis] Modul {chapter.number}: {chapter.title}</h3>
                      {isSubmitted && (
                        <Badge className="flex shrink-0 rotate-2 items-center gap-1 bg-[#40a02b] px-2 py-0.5 text-[11px] text-white">Done!</Badge>
                      )}
                    </div>
                    <p className="mt-2 text-[12px] text-[#6c6f85]">{chapter.part} • {count} soal • {answered}/{count} terjawab ({chProgress}%)</p>
                    <p className="mt-1 line-clamp-1 text-xs text-[#9ca0b0]">{chapter.topics.join(" • ")}</p>
                    <Progress value={chProgress} className="mt-3 w-full" />
                  </div>
                  <LuChevronRight className="size-6 shrink-0 self-center rounded-full border-2 border-[#4c4f69] bg-[#dce0e8] p-0.5 text-[#4c4f69] transition-all group-hover:translate-x-1 group-hover:bg-[#8839ef] group-hover:text-white" />
                </Card>
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
      <section className="grid min-h-[32rem] place-items-center bg-[#eff1f5] p-6 text-[#4c4f69]">
        <Card className="mx-auto w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
          <CardContent className="flex flex-col items-center p-0">
            <span className="animate-floaty mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl border-2 border-[#4c4f69] bg-[#ea76cb] text-white shadow-[3px_3px_0_#4c4f69]"><LuCircleDashed className="size-7" aria-hidden="true" /></span>
            <p className="text-sm font-semibold text-[#6c6f85]">
              Belum ada soal
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[#4c4f69]">
              Ups, soalnya belum nongol!
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#6c6f85]">
              Soal untuk modul ini masih dimasak di dapur. Balik ke daftar modul yuk!
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={handleBackToHub}
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#4c4f69]"
            >
              <LuArrowLeft className="size-4" /> Kembali ke daftar modul
            </Button>
          </CardContent>
        </Card>
      </section>
    )
  }

  const currentAnswers = answers[currentQuestion.id] ?? []
  const isCurrentFlagged = flagged.includes(currentQuestion.id)
  const currentCorrectAnswers = currentQuestion.answers ?? currentQuestion.answerIndexes ?? []
  const isCurrentCorrect = hasSameOptions(currentAnswers, currentCorrectAnswers)
  // Explanation beside the question (not below) so the nav buttons never shift
  const showSideExplanation = isReviewMode && !!currentQuestion.explanation

  const activeTitle = currentChapter
    ? `Modul ${currentChapter.number}: ${currentChapter.title}`
    : `Simulasi penuh ${bank.bankTag} // SEMUA Modul (${questions.length} SOAL)`

  // VIEW 2: RESULTS FOR CHAPTER
  if (isCurrentSubmitted && !isReviewMode) {
    return (
      <section className="min-h-svh bg-[#eff1f5] text-[#4c4f69]">
        {/* Top bar */}
        <header className="border-b-2 border-[#4c4f69] bg-white px-4 py-3 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
            <Button type="button" variant="outline" size="sm" onClick={handleBackToHub}>
              <LuArrowLeft className="size-4" /> Ganti modul
            </Button>
            <span className="truncate text-sm text-[#6c6f85]">{activeTitle}</span>
          </div>
        </header>

        <QuizResult
          answeredCount={answeredCount}
          answers={answers}
          chapterTitle={activeTitle}
          correctCount={correctCount}
          elapsedSeconds={elapsedSeconds}
          flaggedCount={flagged.filter((id) => activeQuestions.some((q) => q.id === id)).length}
          hasNextChapter={
            selectedChapterId !== "all" &&
            chapters.findIndex((c) => c.id === selectedChapterId) < chapters.length - 1
          }
          onNextChapter={handleNextChapter}
          onRestart={restartCurrentChapter}
          onReturnToHub={handleBackToHub}
          onReview={() => setIsReviewMode(true)}
          questions={activeQuestions}
          scorePercent={scorePercent}
          syllabusFooter={bank.syllabusFooter}
          totalQuestions={totalQuestions}
        />
      </section>
    )
  }

  // VIEW 3: QUIZ QUESTION RUNNER (NORMAL & REVIEW MODES)
  return (
    <section
      aria-label={`${activeTitle} practice quiz`}
      className="min-h-svh bg-[#eff1f5] text-[#4c4f69]"
    >
      {/* Slim top bar: true breadcrumb + timer + finish */}
      <header className="border-b-2 border-[#4c4f69] bg-white px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2">
          <nav aria-label="Breadcrumb" className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5 text-sm font-bold text-[#6c6f85]">
            <button
              type="button"
              onClick={onBackToCourses ?? onExitToHub ?? handleBackToHub}
              className="shrink-0 font-medium text-[#8839ef] hover:underline"
            >
              My courses
            </button>
            <span aria-hidden="true" className="shrink-0 text-[#bcc0cc]">/</span>
            <button
              type="button"
              onClick={handleBackToHub}
              className="max-w-48 truncate font-medium text-[#8839ef] hover:underline"
              title={bank.subjectLine}
            >
              {bank.subjectLine}
            </button>
            <span aria-hidden="true" className="shrink-0 text-[#bcc0cc]">/</span>
            <span className="truncate font-semibold text-[#4c4f69]">
              {currentChapter ? `Modul ${currentChapter.number}` : "Simulasi penuh"}
            </span>
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <p className="flex items-center gap-1.5 rounded-full border-2 border-[#4c4f69] bg-[#df8e1d] px-3 py-1 text-sm font-bold tabular-nums text-white shadow-[2px_2px_0_#4c4f69]">
              <LuClock className="size-4" aria-hidden="true" />
              {formatDuration(elapsedSeconds)}
            </p>
            {isReviewMode ? (
              <Badge className="rotate-1 bg-[#04a5e5] px-2.5 py-1 text-xs text-white">Pembahasan</Badge>
            ) : (
              <Button type="button" size="sm" onClick={requestSubmit}>
                Selesaikan!
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Review Mode Banner */}
      {isReviewMode && (
        <div className="border-b-2 border-[#4c4f69] bg-[#df8e1d] px-4 py-3 text-white sm:px-8 dots-light">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
            <p className="text-sm">
              <span className="font-bold">Mode pembahasan seru: </span>
              <span className="font-medium">Intip jawabanmu vs kunci jawaban — no nyontek ya!</span>
            </p>
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { label: "Semua", val: "ALL" },
                { label: "Salah", val: "WRONG" },
                { label: "Benar", val: "CORRECT" },
                { label: "Ragu", val: "Ragu" },
              ].map((f) => (
                <Button
                  key={f.val}
                  type="button"
                  size="sm"
                  variant={reviewFilter === f.val ? "default" : "outline"}
                  onClick={() => setReviewFilter(f.val as typeof reviewFilter)}
                  className={reviewFilter === f.val ? "" : "bg-white text-[#4c4f69]"}
                >
                  {f.label}
                </Button>
              ))}
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => setIsReviewMode(false)}
                className="ml-1 bg-white text-[#4c4f69] text-sm"
              >
                Kembali ke hasil
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className={`mx-auto grid gap-5 px-4 py-5 sm:px-6 lg:gap-6 lg:px-8 lg:py-7 ${showSideExplanation ? "max-w-7xl xl:grid-cols-[minmax(0,1fr)_minmax(0,23rem)_18rem]" : "max-w-6xl lg:grid-cols-[minmax(0,1fr)_20rem]"}`}>
        {/* Sidebar Question Map */}
        <aside className={`min-w-0 ${showSideExplanation ? "order-3 xl:order-3" : "order-2 lg:order-2"}`}>
          <Card className="bg-white p-4 shadow-sm sm:p-5 lg:sticky lg:top-20">
            <div className="flex items-center justify-between gap-3 border-b border-[#bcc0cc] pb-3">
              <h2 className="text-lg font-bold tracking-tight text-[#4c4f69]">Navigasi kuis</h2>
              <span className="flex size-9 -rotate-3 items-center justify-center rounded-xl border-2 border-[#4c4f69] bg-[#8839ef] text-white shadow-[2px_2px_0_#4c4f69]">
                <LuListChecks className="size-4" />
              </span>
            </div>
            <p className="mt-2 text-sm text-[#6c6f85]">
              {currentChapter ? `Modul ${currentChapter.number} • ${currentChapter.title}` : `Simulasi penuh • ${totalQuestions} soal`}
            </p>

            {/* Quick Metrics */}
            <dl className="mt-3 grid grid-cols-3 gap-2">
              <div className="rounded-xl border-2 border-[#4c4f69] bg-[#40a02b]/15 p-2.5 text-center shadow-[2px_2px_0_#4c4f69]">
                <dt className="text-xs font-bold text-[#40a02b]">Terjawab</dt>
                <dd className="mt-1 text-lg font-bold text-[#4c4f69]">
                  {String(answeredCount).padStart(2, "0")}
                </dd>
              </div>
              <div className="rounded-xl border-2 border-[#4c4f69] bg-white p-2.5 text-center shadow-[2px_2px_0_#4c4f69]">
                <dt className="text-xs font-bold text-[#6c6f85]">Belum</dt>
                <dd className="mt-1 text-lg font-bold text-[#4c4f69]">
                  {String(unansweredCount).padStart(2, "0")}
                </dd>
              </div>
              <div className="rounded-xl border-2 border-[#4c4f69] bg-[#df8e1d]/15 p-2.5 text-center shadow-[2px_2px_0_#4c4f69]">
                <dt className="text-xs font-bold text-[#df8e1d]">Ragu</dt>
                <dd className="mt-1 text-lg font-bold text-[#df8e1d]">
                  {String(flagged.filter((id) => activeQuestions.some((q) => q.id === id)).length).padStart(2, "0")}
                </dd>
              </div>
            </dl>

            {/* Question Filter Tabs in Sidebar */}
            <div className="mt-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-bold text-[#4c4f69]">
                  Daftar soal
                </h3>
                <span className="-rotate-2 rounded-full border-2 border-[#4c4f69] bg-[#8839ef] px-2 py-0.5 text-xs font-bold text-white shadow-[2px_2px_0_#4c4f69]">{progress}% selesai!</span>
              </div>

              {/* Progress Bar */}
              <Progress value={progress} aria-label="Quiz progress" className="mt-3" />

              {/* Filter pills */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {[
                  { label: "Semua", v: "ALL" },
                  { label: "Terjawab", v: "ANSWERED" },
                  { label: "Belum", v: "UNANSWERED" },
                  { label: "Ragu", v: "Ragu" },
                ].map((item) => (
                  <Button
                    key={item.v}
                    type="button"
                    size="sm"
                    variant={sidebarFilter === item.v ? "default" : "outline"}
                    onClick={() => setSidebarFilter(item.v as typeof sidebarFilter)}
                    className={sidebarFilter === item.v ? "text-xs" : "text-xs bg-white text-[#4c4f69]"}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>

              {/* Numbered Question Map */}
              <div className="mt-3 max-h-72 overflow-y-auto pr-1">
                <div className="grid grid-cols-5 gap-1.5 sm:grid-cols-6 lg:grid-cols-5">
                  {displaySidebarQuestions.map(({ question, index }) => {
                    const isAnswered = (answers[question.id]?.length ?? 0) > 0
                    const isFlag = flagged.includes(question.id)
                    const isCurrent = index === activeIndex

                    let reviewClass = ""
                    if (isReviewMode) {
                      const qAns = answers[question.id] ?? []
                      const qCorr = question.answers ?? question.answerIndexes ?? []
                      const isRight = hasSameOptions(qAns, qCorr)
                      reviewClass = isRight
                        ? "border-2 border-[#4c4f69] bg-[#40a02b] text-white shadow-[2px_2px_0_#4c4f69]"
                        : "border-2 border-[#4c4f69] bg-[#e64553] text-white shadow-[2px_2px_0_#4c4f69]"
                    }

                    return (
                      <button
                        key={question.id}
                        type="button"
                        onClick={() => goToQuestion(index)}
                        aria-current={isCurrent ? "step" : undefined}
                        aria-label={`Soal ${index + 1}${isAnswered ? ", terjawab" : ""}${isFlag ? ", ragu" : ""}`}
                        className={`relative flex size-10 items-center justify-center rounded-xl border-2 text-sm font-bold transition-all duration-150 hover:-translate-y-0.5 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ea76cb] ${
                          isCurrent
                            ? "rotate-3 border-[#4c4f69] bg-[#8839ef] text-white shadow-[3px_3px_0_#4c4f69]"
                            : isReviewMode
                              ? reviewClass
                              : isAnswered
                                ? "border-[#4c4f69] bg-[#8839ef]/10 text-[#8839ef] shadow-[2px_2px_0_#4c4f69] hover:bg-[#8839ef]/20"
                                : "border-[#bcc0cc] bg-white text-[#6c6f85] hover:border-[#4c4f69] hover:text-[#4c4f69] hover:shadow-[2px_2px_0_#4c4f69]"
                        }`}
                      >
                        {index + 1}
                        {isFlag && (
                          <span
                            aria-hidden="true"
                            className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full border-2 border-[#4c4f69] bg-[#df8e1d] text-[8px] text-white"
                          />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Keyboard Shortcuts Notice */}
            <div className="mt-4 rounded-2xl border-2 border-[#4c4f69] bg-[#e6e9ef] p-3 text-xs text-[#6c6f85] shadow-[2px_2px_0_#4c4f69]">
              <p className="font-bold text-[#4c4f69]">Tips keyboard ninja!</p>
              <ul className="mt-1.5 space-y-1">
                <li className="flex justify-between gap-2">
                  <span>A–E atau 1–5</span>
                  <span className="font-medium text-[#4c4f69]">Pilih jawaban</span>
                </li>
                <li className="flex justify-between gap-2">
                  <span>← / → atau P / N</span>
                  <span className="font-medium text-[#4c4f69]">Sebelumnya / berikutnya</span>
                </li>
                <li className="flex justify-between gap-2">
                  <span>F</span>
                  <span className="font-medium text-[#4c4f69]">Tandai ragu</span>
                </li>
              </ul>
            </div>

            {/* Action buttons */}
            <div className="mt-4 border-t-2 border-dashed border-[#bcc0cc] pt-3">
              {isReviewMode ? (
                <Button
                  type="button"
                  onClick={() => setIsReviewMode(false)}
                  className="w-full text-sm"
                >
                  Kembali ke hasil
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={requestSubmit}
                  className="w-full text-sm"
                >
                  <LuSend className="size-4" aria-hidden="true" />
                  Selesaikan modul ini!
                </Button>
              )}
            </div>
          </Card>
        </aside>

        {/* Question Panel */}
        <main className="order-1 w-full min-w-0">
          <Card className="animate-pop-in bg-white">
            {/* Question header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#4c4f69] bg-[#e6e9ef] px-4 py-3 sm:px-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="-rotate-1 px-3 py-1 text-sm">
                  Soal {String(activeIndex + 1).padStart(2, "0")}/{String(totalQuestions).padStart(2, "0")}
                </Badge>

                {currentQuestion.sectionTitle && (
                  <span className="text-sm text-[#6c6f85]">
                    {currentQuestion.sectionTitle}
                  </span>
                )}

                <span className="text-xs font-medium text-[#6c6f85]">
                  {currentQuestion.multiple ? "[Pilih banyak]" : "[Pilih satu]"}
                </span>
              </div>

              {/* Flag button & Clear answer button */}
              <div className="flex items-center gap-2">
                {!isReviewMode && currentAnswers.length > 0 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => clearAnswer(currentQuestion.id)}
                    className="text-xs text-[#6c6f85] hover:text-[#4c4f69]"
                  >
                    Hapus jawaban
                  </Button>
                )}

                {!isReviewMode && (
                  <Button
                    type="button"
                    variant={isCurrentFlagged ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFlag(currentQuestion.id)}
                    aria-pressed={isCurrentFlagged}
                    className={isCurrentFlagged ? "bg-[#df8e1d] text-xs text-white" : "text-xs bg-white text-[#4c4f69]"}
                  >
                    {isCurrentFlagged ? "Ragu" : "Tandai ragu"}
                  </Button>
                )}
              </div>
            </div>

            {/* Prompt Body */}
            <div className="px-4 py-6 sm:px-8 sm:py-8">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm text-[#6c6f85]">
                  {currentQuestion.chapterTitle ? `${currentQuestion.chapterTitle} • ` : ""}
                  Soal #{currentQuestion.id}
                </p>

                {isReviewMode && (
                  <Badge
                    variant="outline"
                    className={isCurrentCorrect
                      ? "bg-[#40a02b] text-sm text-white rotate-2"
                      : "bg-[#e64553] text-sm text-white -rotate-2"
                    }
                  >
                    {isCurrentCorrect ? "Benar, hebat!" : "Kurang tepat, gapapa!"}
                  </Badge>
                )}
              </div>

              <h2
                id={`question-${currentQuestion.id}`}
                className="mt-4 max-w-4xl text-xl font-bold leading-snug tracking-tight text-[#4c4f69] sm:text-2xl"
              >
                {decodeUnicodeEscapes(currentQuestion.text)}
              </h2>

              <p
                id={`question-instructions-${currentQuestion.id}`}
                className="mt-3 text-[13px] text-[#6c6f85]"
              >
                {isReviewMode
                  ? "Tinjauan seru! Opsi berstiker hijau itu kunci jawabannya."
                  : currentQuestion.multiple
                    ? "Pilih semua yang bener ya! Pencet A–D atau klik opsinya. Kamu bisa!"
                    : "Pilih satu yang paling pas! Pencet A–D atau klik opsinya. Semangat!"}
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

                      const stickerPalette = ["bg-[#8839ef]", "bg-[#1e66f5]", "bg-[#ea76cb]", "bg-[#40a02b]", "bg-[#04a5e5]", "bg-[#7287fd]"]
                      const stickerBg = stickerPalette[optionIndex % stickerPalette.length]
                      const tilt = optionIndex % 2 === 0 ? "-rotate-3" : "rotate-3"
                      let optionStyle = "border-2 border-[#4c4f69] bg-white text-[#4c4f69] shadow-[3px_3px_0_#4c4f69] hover:-translate-y-0.5 hover:bg-[#e6e9ef]"
                      let circleStyle = `border-2 border-[#4c4f69] ${stickerBg} text-white shadow-[2px_2px_0_#4c4f69] ${tilt}`

                      if (isReviewMode) {
                        if (isExpectedAnswer) {
                          optionStyle = "border-2 border-[#4c4f69] bg-[#40a02b]/15 font-bold text-[#4c4f69] shadow-[3px_3px_0_#4c4f69]"
                          circleStyle = "border-2 border-[#4c4f69] bg-[#40a02b] font-bold text-white shadow-[2px_2px_0_#4c4f69]"
                        } else if (isSelected && !isExpectedAnswer) {
                          optionStyle = "border-2 border-[#4c4f69] bg-[#e64553]/10 font-bold text-[#4c4f69] shadow-[3px_3px_0_#4c4f69]"
                          circleStyle = "border-2 border-[#4c4f69] bg-[#e64553] font-bold text-white shadow-[2px_2px_0_#4c4f69]"
                        } else {
                          optionStyle = "border-2 border-[#bcc0cc] bg-white text-[#9ca0b0]"
                        }
                      } else if (isSelected) {
                        optionStyle = "border-2 border-[#4c4f69] bg-[#8839ef]/10 font-bold text-[#4c4f69] shadow-[3px_3px_0_#4c4f69] -translate-y-0.5"
                        circleStyle = "border-2 border-[#4c4f69] bg-[#8839ef] font-bold text-white shadow-[2px_2px_0_#4c4f69] scale-110"
                      }

                      return (
                        <label
                          key={inputId}
                          htmlFor={inputId}
                          className={`group flex w-full items-center gap-3 rounded-2xl p-3.5 text-left transition-all duration-150 active:scale-[0.99] sm:gap-4 sm:p-4 ${
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

                          {/* Circle letter badge */}
                          <span
                            aria-hidden="true"
                            className={`flex size-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-150 ${circleStyle}`}
                          >
                            {isReviewMode && isExpectedAnswer ? (
                              <LuCheck className="size-4 stroke-[3]" />
                            ) : isReviewMode && isSelected && !isExpectedAnswer ? (
                              <LuX className="size-4 stroke-[3]" />
                            ) : isSelected && !isReviewMode ? (
                              <LuCheck className="size-4 stroke-[3]" />
                            ) : (
                              optLabel
                            )}
                          </span>

                          <span className="min-w-0 flex-1 text-sm leading-6 sm:text-base">
                            {decodeUnicodeEscapes(option)}
                          </span>

                          {/* Review badges */}
                          {isReviewMode && isExpectedAnswer && (
                            <Badge className="shrink-0 rotate-2 bg-[#40a02b] text-xs text-white">
                              Kunci jawaban!
                            </Badge>
                          )}
                          {isReviewMode && isSelected && !isExpectedAnswer && (
                            <Badge className="shrink-0 -rotate-2 bg-[#e64553] text-xs text-white">
                              Jawabanmu
                            </Badge>
                          )}
                        </label>
                      )
                    })}
                  </div>
                </fieldset>
              ) : (
                <div role="alert" className="mt-6 flex items-start gap-3 rounded-2xl border-2 border-[#4c4f69] bg-[#df8e1d]/15 p-4 text-sm text-[#4c4f69] shadow-[3px_3px_0_#4c4f69]">
                  <LuCircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  Tidak ada opsi jawaban tersedia untuk pertanyaan ini.
                </div>
              )}

              {/* Submit warning popup */}
              <Dialog open={showSubmitNotice} onOpenChange={setShowSubmitNotice}>
                <DialogContent aria-describedby={undefined} className="border-[#df8e1d] bg-[#fff9ec]">
                  <div className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 -rotate-3 items-center justify-center rounded-xl border-2 border-[#4c4f69] bg-[#df8e1d] text-white shadow-[2px_2px_0_#4c4f69]">
                      <LuCircleAlert className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <DialogTitle className="text-base font-bold text-[#4c4f69]">
                        Oopsie! {unansweredCount} soal belum terjawab
                      </DialogTitle>
                      <DialogDescription className="mt-1 text-sm text-[#6c6f85]">
                        Mau cek lagi yang kosong, atau langsung kumpulkan aja? Kamu hebat kok!
                      </DialogDescription>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setShowSubmitNotice(false)}
                    >
                      Cek lagi
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      onClick={finishCurrentSession}
                    >
                      Kumpulkan sekarang!
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Bottom Nav Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-[#4c4f69] bg-[#e6e9ef] px-4 py-3 sm:px-6">
              <Button
                type="button"
                variant="ghost"
                onClick={() => goToQuestion(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="text-sm"
              >
                <LuChevronLeft className="size-4" aria-hidden="true" /> Sebelumnya
              </Button>

              <div className="rounded-full border-2 border-[#4c4f69] bg-white px-3 py-1 text-sm font-bold text-[#4c4f69] shadow-[2px_2px_0_#4c4f69]">
                Soal {activeIndex + 1} dari {totalQuestions}
              </div>

              {activeIndex === totalQuestions - 1 ? (
                isReviewMode ? (
                  <Button
                    type="button"
                    onClick={() => setIsReviewMode(false)}
                    className="text-sm"
                  >
                    Selesai lihat pembahasan
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={requestSubmit}
                    className="text-sm"
                  >
                    Kumpulkan! <LuSend className="size-4" aria-hidden="true" />
                  </Button>
                )
              ) : (
                <Button
                  type="button"
                  onClick={() => goToQuestion(activeIndex + 1)}
                  className="text-sm"
                >
                  Berikutnya <LuChevronRight className="size-4" aria-hidden="true" />
                </Button>
              )}
            </div>
          </Card>
        </main>

        {/* Pembahasan beside the question — nav buttons stay put */}
        {showSideExplanation && (
          <aside key={currentQuestion.id} className="order-2 min-w-0 animate-pop-in xl:sticky xl:top-24 xl:max-h-[calc(100vh-8rem)] xl:overflow-y-auto xl:pb-2">
            <RichExplanationCard
              questionId={currentQuestion.id}
              questionText={decodeUnicodeEscapes(currentQuestion.text)}
              options={currentQuestion.options.map(decodeUnicodeEscapes)}
              selectedAnswers={currentAnswers}
              correctAnswers={currentCorrectAnswers}
              explanation={currentQuestion.explanation ?? ""}
              sectionTitle={currentQuestion.sectionTitle}
              chapterTitle={currentQuestion.chapterTitle}
              isCorrect={isCurrentCorrect}
            />
          </aside>
        )}
      </div>
    </section>
  )
}

type QuizResultProps = {
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
  questions: QuizQuestion[]
  scorePercent: number
  syllabusFooter: string
  totalQuestions: number
}

function QuizResult({
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
  syllabusFooter,
  totalQuestions,
}: QuizResultProps) {
  const unansweredCount = totalQuestions - answeredCount
  const wrongCount = answeredCount - correctCount
  const grade = getGradeBadge(scorePercent)

  return (
    <main className="mx-auto max-w-5xl px-4 py-7 sm:px-6 sm:py-10">
      <Card aria-live="polite" className="animate-pop-in overflow-hidden bg-white">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#4c4f69] bg-[#e6e9ef] px-5 py-3 sm:px-7">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="-rotate-2 px-3 py-1 text-sm">
              Hasil kuis!
            </Badge>
            <p className="text-sm text-[#6c6f85]">
              {chapterTitle}
            </p>
          </div>
          <span className="flex rotate-1 items-center gap-1.5 rounded-full border-2 border-[#4c4f69] bg-[#40a02b] px-2.5 py-1 text-xs font-bold text-white shadow-[2px_2px_0_#4c4f69]">
            <LuCircleCheck className="size-4" /> Tersimpan!
          </span>
        </div>

        <div className="grid gap-8 px-5 py-8 sm:px-7 sm:py-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-8">
          <div className="min-w-0">
            <div className="flex items-start gap-4">
              <div className="animate-wiggle flex size-14 shrink-0 items-center justify-center rounded-2xl border-2 border-[#4c4f69] bg-[#df8e1d] text-white shadow-[3px_3px_0_#4c4f69]">
                <LuTrophy className="size-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className={`px-4 py-1.5 text-sm ${grade.color}`}>
                    {grade.grade}
                  </Badge>
                  <span className="text-sm font-bold text-[#6c6f85]">{grade.text}</span>
                </div>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#4c4f69] sm:text-4xl">
                  {scorePercent >= 75 ? "Hasil kuismu keluar!" : "Selesai, hebat!"}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-[#6c6f85]">
                  Hasil kece untuk {chapterTitle}! Yuk intip pembahasan tiap soal biar makin jago!
                </p>
              </div>
            </div>

            {/* Score box */}
            <div className="dots-fun mt-6 rounded-2xl border-2 border-[#4c4f69] bg-[#8839ef] p-6 text-center shadow-[4px_4px_0_#4c4f69]">
              <p className="inline-block -rotate-2 rounded-full border-2 border-[#4c4f69] bg-white px-3 py-0.5 text-sm font-bold text-[#4c4f69]">Skor akhir</p>
              <p className="mt-2 text-6xl font-bold tabular-nums tracking-tight text-white drop-shadow-[3px_3px_0_#4c4f69]">
                {scorePercent}%
              </p>
              <p className="mt-2 inline-block rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-[#4c4f69]">{correctCount} dari {totalQuestions} soal benar!</p>
            </div>

            {/* Stats grid */}
            <div className="mt-4 grid grid-cols-2 gap-2.5 xl:grid-cols-4">
              <div className="min-w-0 rounded-2xl border-2 border-[#4c4f69] bg-[#40a02b] p-3 text-center shadow-[3px_3px_0_#4c4f69]">
                <p className="whitespace-nowrap text-xs font-bold text-white">Benar</p>
                <p className="mt-1 truncate text-2xl font-bold tabular-nums text-white">{correctCount}</p>
              </div>
              <div className="min-w-0 rounded-2xl border-2 border-[#4c4f69] bg-[#e64553] p-3 text-center shadow-[3px_3px_0_#4c4f69]">
                <p className="whitespace-nowrap text-xs font-bold text-white">Salah</p>
                <p className="mt-1 truncate text-2xl font-bold tabular-nums text-white">{wrongCount}</p>
              </div>
              <div className="min-w-0 rounded-2xl border-2 border-[#4c4f69] bg-white p-3 text-center shadow-[3px_3px_0_#4c4f69]">
                <p className="whitespace-nowrap text-xs font-bold text-[#8839ef]">Terjawab</p>
                <p className="mt-1 truncate text-xl font-bold tabular-nums text-[#4c4f69] xl:text-2xl">{answeredCount}/{totalQuestions}</p>
              </div>
              <div className="min-w-0 rounded-2xl border-2 border-[#4c4f69] bg-[#04a5e5] p-3 text-center shadow-[3px_3px_0_#4c4f69]">
                <p className="whitespace-nowrap text-xs font-bold text-white">Waktu</p>
                <p className="mt-1 truncate text-base font-bold tabular-nums text-white xl:text-lg">
                  {formatDuration(elapsedSeconds)}
                </p>
              </div>
            </div>

            {/* Completion Ratio */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm text-[#6c6f85]">
                <span>Progres selesai</span>
                <span className="font-bold text-[#4c4f69]">
                  {answeredCount} / {totalQuestions} ({totalQuestions ? Math.round((answeredCount / totalQuestions) * 100) : 0}%)
                </span>
              </div>
              <Progress value={totalQuestions ? Math.round((answeredCount / totalQuestions) * 100) : 0} aria-label="Completion progress" className="mt-3" />

              <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                <p className="flex items-center gap-2 whitespace-nowrap rounded-2xl border-2 border-[#4c4f69] bg-white p-2.5 font-medium text-[#6c6f85] shadow-[2px_2px_0_#4c4f69]">
                  <span className="font-bold tabular-nums text-[#df8e1d]">{flaggedCount}</span> Ditandai ragu
                </p>
                <p className="flex items-center gap-2 whitespace-nowrap rounded-2xl border-2 border-[#4c4f69] bg-white p-2.5 font-medium text-[#6c6f85] shadow-[2px_2px_0_#4c4f69]">
                  <span className="font-bold tabular-nums text-[#4c4f69]">{unansweredCount}</span> Belum dijawab
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              <Button
                type="button"
                onClick={onReview}
                className="px-4 py-2.5 text-sm"
              >
                <LuBookOpen className="size-4" /> Lihat pembahasan!
              </Button>

              {hasNextChapter && (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={onNextChapter}
                  className="px-4 py-2.5 text-sm"
                >
                  Lanjut yuk! <LuArrowRight className="size-4" />
                </Button>
              )}

              <Button
                type="button"
                variant="outline"
                onClick={onRestart}
                className="px-4 py-2.5 text-sm"
              >
                <LuRefreshCw className="size-4" /> Ulangi lagi!
              </Button>

              <Button
                type="button"
                variant="ghost"
                onClick={onReturnToHub}
                className="px-4 py-2.5 text-sm"
              >
                <LuArrowLeft className="size-4" /> Modul lain
              </Button>
            </div>
          </div>

          {/* Answer summary sidebar */}
          <aside className="h-fit min-w-0 rounded-2xl border-2 border-[#4c4f69] bg-white p-4 shadow-[4px_4px_0_#4c4f69] sm:p-5 lg:sticky lg:top-24">
            <div className="flex items-center justify-between border-b-2 border-dashed border-[#bcc0cc] pb-3">
              <p className="text-sm font-bold text-[#4c4f69]">
                Ringkasan jawaban
              </p>
              <span className="-rotate-2 rounded-full border-2 border-[#4c4f69] bg-[#8839ef] px-2 py-0.5 text-sm font-bold text-white shadow-[2px_2px_0_#4c4f69]">
                {correctCount} / {totalQuestions}
              </span>
            </div>

            <div className="mt-3.5 grid max-h-72 grid-cols-5 gap-1.5 overflow-y-auto pr-1">
              {questions.map((question, index) => {
                const userAns = answers[question.id] ?? []
                const correctAns = question.answers ?? question.answerIndexes ?? []
                const isAnswered = userAns.length > 0
                const isCorrect = isAnswered && hasSameOptions(userAns, correctAns)

                return (
                  <span
                    key={question.id}
                    title={`Soal ${index + 1}: ${!isAnswered ? "belum dijawab" : isCorrect ? "benar" : "salah"}`}
                    className={`flex size-9 items-center justify-center rounded-xl border-2 text-sm font-bold ${
                      !isAnswered
                        ? "border-[#bcc0cc] bg-white text-[#9ca0b0]"
                        : isCorrect
                          ? "border-[#4c4f69] bg-[#40a02b] text-white shadow-[2px_2px_0_#4c4f69]"
                          : "border-[#4c4f69] bg-[#e64553] text-white shadow-[2px_2px_0_#4c4f69]"
                    }`}
                  >
                    {index + 1}
                  </span>
                )
              })}
            </div>

            <ul className="mt-5 space-y-1.5 border-t border-[#bcc0cc] pt-4 text-sm text-[#6c6f85]">
              <li className="flex items-center gap-2">
                <span className="size-3 rounded-full border-2 border-[#4c4f69] bg-[#40a02b]" /> Benar: {correctCount}
              </li>
              <li className="flex items-center gap-2">
                <span className="size-3 rounded-full border-2 border-[#4c4f69] bg-[#e64553]" /> Salah: {wrongCount}
              </li>
              <li className="flex items-center gap-2">
                <span className="size-3 rounded-full border-2 border-[#4c4f69] bg-white" /> Belum dijawab: {unansweredCount}
              </li>
            </ul>
          </aside>
        </div>

        <div className="flex items-center justify-between border-t-2 border-[#4c4f69] bg-[#e6e9ef] px-5 py-3 text-xs font-bold text-[#6c6f85] sm:px-7">
          <span>{syllabusFooter}</span>
          <span>IHateITS • Sistem Informasi ITS</span>
        </div>
      </Card>
    </main>
  )
}

export default TryoutEtsQuiz
