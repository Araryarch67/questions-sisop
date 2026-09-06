"use client";

import { Suspense } from "react";
import { notFound, useParams, useRouter, useSearchParams } from "next/navigation";
import { TryoutEtsQuiz } from "@/components/tryout-ets-quiz";
import { getBank, isBankId } from "@/lib/course-meta";

type PlayMode = "competitive" | "flashcards" | "drill";

function isPlayMode(value: string | null): value is PlayMode {
  return value === "competitive" || value === "flashcards" || value === "drill";
}

function PlayInner() {
  const params = useParams<{ bank: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();

  const bankParam = params.bank;
  if (!isBankId(bankParam)) notFound();
  const bank = bankParam;
  const data = getBank(bank);

  const mode = searchParams.get("mode");
  const chapter = searchParams.get("chapter");

  const initialSpecialMode: PlayMode | undefined = isPlayMode(mode) ? mode : undefined;
  const initialChapterId: string | undefined =
    initialSpecialMode !== undefined ? undefined : (chapter ?? "all");

  return (
    <TryoutEtsQuiz
      key={`${bank}-${mode ?? "quiz"}-${chapter ?? "default"}`}
      questions={data.questions}
      chapters={data.chapters}
      bank={data.bank}
      storagePrefix={data.storagePrefix}
      title={data.title}
      initialChapterId={initialChapterId}
      initialSpecialMode={initialSpecialMode}
      onExitToHub={() => router.push(`/course/${bank}`)}
      onBackToCourses={() => router.push("/courses")}
    />
  );
}

export function PlayClient() {
  return (
    <Suspense>
      <PlayInner />
    </Suspense>
  );
}
