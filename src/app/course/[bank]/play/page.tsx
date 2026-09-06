import { PlayClient } from "./play-client";

export function generateStaticParams() {
  return [{ bank: "ets" }, { bank: "eas" }];
}

export default function PlayPage() {
  return <PlayClient />;
}
