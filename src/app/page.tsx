import { TryoutEtsQuiz } from "@/components/tryout-ets-quiz";
import { tryoutEtsQuestions } from "@/lib/tryout-ets";

export default function Home() {
  return <TryoutEtsQuiz questions={tryoutEtsQuestions} />;
}
