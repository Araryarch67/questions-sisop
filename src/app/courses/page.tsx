"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { LuArrowRight, LuBookOpen, LuChevronDown, LuLayoutGrid, LuList, LuPartyPopper, LuSearch } from "react-icons/lu";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "cn";
import { COURSES } from "@/lib/course-meta";

const overviewTabs = ["All", "In progress"];

type SortKey = "name" | "count";

export default function CoursesPage() {
  const [tab, setTab] = useState("In progress");
  const [sort, setSort] = useState<SortKey>("name");
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const visibleCourses = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = COURSES.filter((c) => {
      if (q && !c.title.toLowerCase().includes(q)) return false;
      return true;
    });
    return [...list].sort((a, b) =>
      sort === "name" ? a.title.localeCompare(b.title) : a.count - b.count,
    );
  }, [sort, query]);

  return (
    <div className="min-h-svh bg-[#eff1f5] text-[#4c4f69]">
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap items-end gap-3">
          <div>
            <Badge className="-rotate-2 bg-[#df8e1d] text-white">halo, pejuang kuis!</Badge>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#4c4f69] sm:text-4xl">My courses</h1>
            <p className="mt-1 text-[15px] font-bold text-[#6c6f85]">Course overview — pilih petualanganmu hari ini!</p>
          </div>
          <span className="ml-auto hidden rotate-2 rounded-2xl border-2 border-[#4c4f69] bg-[#04a5e5] px-3 py-1.5 text-xs font-bold text-white shadow-[3px_3px_0_#4c4f69] sm:inline-block">2 kursus seru menantimu!</span>
        </div>
        <div role="tablist" aria-label="Filter course" className="mt-4 flex gap-2 overflow-x-auto whitespace-nowrap pb-1 text-[13px] font-bold">
          {overviewTabs.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              type="button"
              onClick={() => setTab(t)}
              className={`shrink-0 rounded-full border-2 px-3.5 py-1.5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#8839ef] ${
                tab === t
                  ? "border-[#4c4f69] bg-[#8839ef] text-white shadow-[3px_3px_0_#4c4f69]"
                  : "border-[#bcc0cc] bg-white text-[#6c6f85] hover:border-[#4c4f69] hover:text-[#4c4f69] hover:shadow-[2px_2px_0_#4c4f69]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => { const v = e.target.value; if (v === "name" || v === "count") setSort(v); }}
              aria-label="Sort courses"
              className="h-10 w-56 appearance-none rounded-xl border-2 border-[#4c4f69] bg-white pl-3 pr-8 text-xs font-bold text-[#4c4f69] shadow-[2px_2px_0_#4c4f69] outline-none transition-all hover:-translate-y-px focus:border-[#8839ef]"
            >
              <option value="name">Sort by course name</option>
              <option value="count">Sort by question count</option>
            </select>
            <LuChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-[#8839ef]" />
          </div>
          <div className="relative">
            <LuSearch className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#8839ef]" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari kursus seru…"
              aria-label="Search courses"
              className="h-10 w-60 bg-white py-2 pl-9 pr-3 text-xs placeholder:text-[#9ca0b0]"
            />
          </div>
          <div className="ml-auto flex items-center gap-1 rounded-xl border-2 border-[#4c4f69] bg-white p-1 shadow-[2px_2px_0_#4c4f69]">
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => setView("grid")}
              aria-label="Grid view"
              aria-pressed={view === "grid"}
              className={view === "grid" ? "border-2 border-[#4c4f69] bg-[#8839ef] text-white shadow-[2px_2px_0_#4c4f69]" : "border-2 border-transparent text-[#9ca0b0]"}
            >
              <LuLayoutGrid className="size-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => setView("list")}
              aria-label="List view"
              aria-pressed={view === "list"}
              className={view === "list" ? "border-2 border-[#4c4f69] bg-[#8839ef] text-white shadow-[2px_2px_0_#4c4f69]" : "border-2 border-transparent text-[#9ca0b0]"}
            >
              <LuList className="size-4" />
            </Button>
          </div>
        </div>

        {visibleCourses.length === 0 ? (
          <Card className="animate-pop-in mx-auto mt-6 flex max-w-md flex-col items-center gap-2 rounded-2xl bg-white p-8 text-center">
            <span className="animate-wiggle flex size-14 items-center justify-center rounded-2xl border-2 border-[#4c4f69] bg-[#ea76cb] text-white shadow-[3px_3px_0_#4c4f69]">
              <LuBookOpen className="size-7" />
            </span>
            <p className="mt-2 text-base font-bold text-[#4c4f69]">
              Hmm, nggak ketemu nih!
            </p>
            <p className="text-xs font-medium text-[#6c6f85]">
              Coba ubah kata kunci pencarianmu, siapa tahu ketemu!
            </p>
            <Button
              type="button"
              size="sm"
              onClick={() => { setTab("All"); setQuery(""); }}
              className="mt-3"
            >
              <LuPartyPopper className="size-4" /> Kembali ke semua course
            </Button>
          </Card>
        ) : view === "grid" ? (
          <div className="mt-6 grid w-full max-w-4xl gap-6 sm:grid-cols-2 justify-start">
            {visibleCourses.map((c) => (
              <Card
                key={c.id}
                className="animate-pop-in flex flex-col gap-0 overflow-hidden rounded-2xl bg-white py-0 transition-all duration-150 hover:-translate-y-1 hover:shadow-[6px_6px_0_#4c4f69]"
              >
                <div className={`relative h-32 border-b-2 border-[#4c4f69] ${c.banner}`}>
                  <span className={`absolute left-3 top-3 -rotate-2 rounded-full border-2 border-[#4c4f69] px-2.5 py-1 text-[10px] font-bold text-white shadow-[2px_2px_0_#4c4f69] ${c.sticker}`}>
                    {c.id === "ets" ? "seru abis!" : "gaskeun!"}
                  </span>
                  <span className="absolute bottom-3 right-3 rotate-1 rounded-full border-2 border-[#4c4f69] bg-white px-2.5 py-1 text-[10px] font-bold text-[#4c4f69] shadow-[2px_2px_0_#4c4f69]">
                    {c.count} soal
                  </span>
                </div>
                <CardContent className="relative flex flex-1 flex-col px-5 pb-5 pt-0">
                  <Badge variant="outline" className="w-fit -translate-y-1/2 rotate-1 bg-white px-2 py-0.5 text-[10px] font-bold text-[#4c4f69]">
                    {c.semester}
                  </Badge>
                  <h3 className="line-clamp-2 min-h-[2.5rem] text-[15px] font-bold leading-snug tracking-tight text-[#4c4f69]">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-[#6c6f85]">{c.blurb}</p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-[11px] font-medium text-[#6c6f85]">
                    <LuBookOpen className="size-4 text-[#8839ef]" />
                    <span className="line-clamp-1">
                      {c.lecturer} • {c.count} soal
                    </span>
                  </p>
                  <div className="mt-auto pt-4">
                    <Link
                      href={`/course/${c.id}`}
                      className={cn(buttonVariants({ size: "sm" }), "w-full")}
                    >
                      View Course — yuk mulai!
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="mt-6 flex w-full max-w-4xl flex-col gap-4">
            {visibleCourses.map((c) => (
              <Card
                key={c.id}
                className="overflow-hidden rounded-2xl bg-white transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#4c4f69]"
              >
                <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
                  <Link
                    href={`/course/${c.id}`}
                    aria-label={`Buka ${c.title}`}
                    className="relative block h-24 w-full shrink-0 overflow-hidden rounded-xl border-2 border-[#4c4f69] shadow-[2px_2px_0_#4c4f69] sm:h-20 sm:w-40"
                  >
                    <span className={`absolute inset-0 ${c.banner}`} aria-hidden="true" />
                    <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                      <LuBookOpen className="size-8 text-white drop-shadow-[2px_2px_0_rgba(76,79,105,0.9)]" />
                    </span>
                    <span className="absolute bottom-1.5 right-1.5 rotate-1 rounded-full border-2 border-[#4c4f69] bg-white px-2 py-px text-[10px] font-bold text-[#4c4f69] shadow-[2px_2px_0_#4c4f69]">
                      {c.count} soal
                    </span>
                  </Link>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="truncate text-[15px] font-bold tracking-tight text-[#4c4f69]">{c.title}</h3>
                      <Badge variant="outline" className="rotate-1 bg-white px-2 py-px text-[10px] font-bold text-[#4c4f69]">
                        {c.semester}
                      </Badge>
                    </div>
                    <p className="mt-1 line-clamp-1 text-xs font-bold text-[#6c6f85]">{c.blurb}</p>
                    <p className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-[#6c6f85]">
                      <LuBookOpen className="size-3.5 text-[#8839ef]" />
                      {c.lecturer} • {c.count} soal
                    </p>
                  </div>
                  <Link
                    href={`/course/${c.id}`}
                    className={cn(buttonVariants({ size: "sm" }), "shrink-0 sm:self-center")}
                  >
                    View Course
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
