"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuGraduationCap, LuSparkles } from "react-icons/lu";

export function SiteNavbar() {
  const pathname = usePathname();
  const homeActive = pathname === "/";
  const coursesActive = pathname === "/courses" || pathname.startsWith("/course");

  return (
    <header className="sticky top-0 z-20 border-b-2 border-[#4c4f69] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-2 px-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-xl border-2 border-transparent px-1 py-1 outline-none transition-all duration-150 hover:-translate-y-0.5 hover:border-[#4c4f69] hover:bg-[#dce0e8] hover:shadow-[3px_3px_0_#4c4f69] active:scale-95 focus-visible:ring-2 focus-visible:ring-[#8839ef]"
        >
          <span className="flex size-9 items-center justify-center rounded-xl border-2 border-[#4c4f69] bg-[#8839ef] text-white shadow-[2px_2px_0_#4c4f69]">
            <LuGraduationCap className="size-5" />
          </span>
          <span className="whitespace-nowrap text-base font-bold tracking-tight text-[#4c4f69]">
            IHateITS
            <span className="ml-1.5 inline-block -rotate-2 rounded-full border-2 border-[#4c4f69] bg-[#ea76cb] px-2 py-px align-middle text-[10px] font-bold text-white shadow-[2px_2px_0_#4c4f69]">yay!</span>
          </span>
        </Link>
        <nav aria-label="Navigasi utama" className="ml-2 flex h-16 items-stretch gap-1 self-stretch text-[13px] font-bold">
          <Link
            href="/"
            aria-current={homeActive ? "page" : undefined}
            className={`flex items-center gap-1 px-3 transition-all hover:-translate-y-0.5 ${homeActive ? "border-b-4 border-[#8839ef] text-[#8839ef]" : "text-[#6c6f85] hover:text-[#4c4f69]"}`}
          >
            Home
          </Link>
          <Link
            href="/courses"
            aria-current={coursesActive ? "page" : undefined}
            className={`flex items-center gap-1 px-3 transition-all hover:-translate-y-0.5 ${coursesActive ? "border-b-4 border-[#8839ef] text-[#8839ef]" : "text-[#6c6f85] hover:text-[#4c4f69]"}`}
          >
            <LuSparkles className="size-3.5" /> My courses
          </Link>
        </nav>
      </div>
    </header>
  );
}
