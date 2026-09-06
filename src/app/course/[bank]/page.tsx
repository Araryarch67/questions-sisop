import { notFound } from "next/navigation";
import { isBankId } from "@/lib/course-meta";
import { CourseDetail } from "./course-detail";

export function generateStaticParams() {
  return [{ bank: "ets" }, { bank: "eas" }];
}

export default async function CoursePage({ params }: { params: Promise<{ bank: string }> }) {
  const { bank } = await params;
  if (!isBankId(bank)) notFound();
  return <CourseDetail bank={bank} />;
}
