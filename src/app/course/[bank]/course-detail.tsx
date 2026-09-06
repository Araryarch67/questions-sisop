"use client";

import { useRouter } from "next/navigation";
import { TryoutEtsQuiz } from "@/components/tryout-ets-quiz";
import { getBank, type BankId } from "@/lib/course-meta";

export function CourseDetail({ bank }: { bank: BankId }) {
  const router = useRouter();
  const data = getBank(bank);

  return (
    <TryoutEtsQuiz
      key={bank}
      questions={data.questions}
      chapters={data.chapters}
      bank={data.bank}
      storagePrefix={data.storagePrefix}
      title={data.title}
      onSelectChapter={(id) => router.push(`/course/${bank}/play?mode=quiz&chapter=${id}`)}
      onSelectSpecialMode={(m) => router.push(`/course/${bank}/play?mode=${m}`)}
      onBackToCourses={() => router.push("/courses")}
    />
  );
}
