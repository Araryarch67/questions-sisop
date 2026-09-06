import Link from "next/link";
import { LuArrowRight, LuBookOpen, LuRocket, LuTarget, LuTrophy } from "react-icons/lu";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "cn";
import { COURSES } from "@/lib/course-meta";
import { tryoutChapters, tryoutEtsQuestions } from "@/lib/tryout-ets";
import { tryoutEasChapters, tryoutEasQuestions } from "@/lib/tryout-eas";

export default function Home() {
  const totalSoal = tryoutEtsQuestions.length + tryoutEasQuestions.length;
  const totalModul = tryoutChapters.length + tryoutEasChapters.length;

  return (
    <div className="min-h-svh bg-[#eff1f5] text-[#4c4f69]">
      <main className="mx-auto max-w-6xl px-4 pb-16">
        {/* HERO */}
        <section className="relative mt-8 overflow-hidden rounded-3xl border-2 border-[#4c4f69] bg-white p-8 shadow-[5px_5px_0_#4c4f69] sm:p-12">
          <div className="dots-fun pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative">
            <Badge className="-rotate-2 bg-[#df8e1d] text-white">halo, pejuang kuis!</Badge>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#4c4f69] sm:text-5xl">
              Belajar kuis jadi <span className="text-[#8839ef]">petualangan</span> yang <span className="text-[#ea76cb]">seru!</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#6c6f85] sm:text-base">
              {totalSoal} soal Sistem Operasi & Jaringan Komputer menantimu dalam {totalModul} modul.
              Kerjakan per modul, ikut simulasi penuh, dan intip pembahasan lengkapnya!
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/courses"
                className={cn(buttonVariants(), "border-2 border-[#4c4f69] bg-[#8839ef] font-bold text-white shadow-[3px_3px_0_#4c4f69] hover:-translate-y-0.5 hover:bg-[#ea76cb] active:scale-95")}
              >
                <LuRocket className="size-4" /> Mulai petualangan <LuArrowRight className="size-4" />
              </Link>
              <Link
                href="/course/ets"
                className={cn(buttonVariants({ variant: "outline" }), "border-2 border-[#4c4f69] bg-white font-bold text-[#4c4f69] shadow-[3px_3px_0_#4c4f69] hover:-translate-y-0.5 active:scale-95")}
              >
                <LuBookOpen className="size-4" /> Langsung ke Sistem Operasi
              </Link>
            </div>
            <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
              {[
                { icon: <LuBookOpen className="size-5" />, bg: "bg-[#1e66f5]", val: String(totalSoal), label: "soal seru" },
                { icon: <LuTarget className="size-5" />, bg: "bg-[#40a02b]", val: String(totalModul), label: "modul" },
                { icon: <LuTrophy className="size-5" />, bg: "bg-[#df8e1d]", val: "2", label: "course" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border-2 border-[#4c4f69] bg-[#eff1f5] p-3 text-center shadow-[3px_3px_0_#4c4f69]">
                  <span className={`mx-auto flex size-9 items-center justify-center rounded-xl border-2 border-[#4c4f69] ${s.bg} text-white`}>
                    {s.icon}
                  </span>
                  <p className="mt-2 text-2xl font-bold tabular-nums text-[#4c4f69]">{s.val}</p>
                  <p className="text-[11px] font-bold text-[#6c6f85]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CARA MAIN */}
        <section className="mt-10">
          <h2 className="text-xl font-bold tracking-tight text-[#4c4f69]">Cara mainnya gampang!</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              { n: "1", bg: "bg-[#ea76cb]", t: "Pilih coursemu", d: "Sistem Operasi atau Jaringan Komputer — bebas mau mulai dari mana!" },
              { n: "2", bg: "bg-[#1e66f5]", t: "Kerjakan modulnya", d: "Satu modul satu petualangan. Tandai yang ragu, lanjutkan kapan aja!" },
              { n: "3", bg: "bg-[#40a02b]", t: "Intip pembahasan", d: "Selesai? Lihat nilai, baca pembahasan, ulangi sampai sempurna!" },
            ].map((s) => (
              <Card key={s.n} className="border-2 border-[#4c4f69] bg-white shadow-[4px_4px_0_#4c4f69] transition-all hover:-translate-y-1">
                <CardContent className="p-5">
                  <span className={`flex size-10 items-center justify-center rounded-xl border-2 border-[#4c4f69] ${s.bg} text-lg font-bold text-white shadow-[2px_2px_0_#4c4f69]`}>
                    {s.n}
                  </span>
                  <p className="mt-3 font-bold text-[#4c4f69]">{s.t}</p>
                  <p className="mt-1 text-[13px] leading-5 text-[#6c6f85]">{s.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* COURSE PILIHAN */}
        <section className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-bold tracking-tight text-[#4c4f69]">Course pilihan minggu ini!</h2>
            <Link
              href="/courses"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "border-2 border-[#4c4f69] bg-white font-bold shadow-[2px_2px_0_#4c4f69] hover:-translate-y-0.5")}
            >
              Lihat semua <LuArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            {COURSES.map((c) => (
              <Link
                key={c.id}
                href={`/course/${c.id}`}
                className="group flex items-center gap-4 rounded-2xl border-2 border-[#4c4f69] bg-white p-4 text-left shadow-[4px_4px_0_#4c4f69] transition-all hover:-translate-y-1 active:scale-[0.99]"
              >
                <span className={`flex size-14 shrink-0 items-center justify-center rounded-2xl border-2 border-[#4c4f69] text-white shadow-[2px_2px_0_#4c4f69] ${c.banner.split(" ")[0]}`}>
                  <LuBookOpen className="size-6" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-bold text-[#4c4f69] group-hover:text-[#8839ef]">{c.title}</span>
                  <span className="mt-0.5 block text-xs text-[#6c6f85]">{c.count} soal • {c.semester}</span>
                </span>
                <LuArrowRight className="size-5 shrink-0 text-[#9ca0b0] transition-transform group-hover:translate-x-1 group-hover:text-[#8839ef]" />
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-12 flex flex-wrap items-center justify-between gap-2 border-t-2 border-dashed border-[#bcc0cc] pt-5 text-xs text-[#9ca0b0]">
          <span className="font-bold">IHateITS — belajar sambil having fun!</span>
          <span>progres tersimpan otomatis di perangkatmu</span>
        </footer>
      </main>
    </div>
  );
}
