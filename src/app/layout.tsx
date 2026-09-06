import type { Metadata } from "next";
import "@fontsource/iosevka/400.css";
import "@fontsource/iosevka/500.css";
import "@fontsource/iosevka/600.css";
import "@fontsource/iosevka/700.css";
import "katex/dist/katex.min.css";
import "./globals.css";
import { SiteNavbar } from "@/components/site-navbar";

export const metadata: Metadata = {
  title: "IHateITS — Kuis & Latihan Soal",
  description:
    "IHateITS: latihan kuis Sistem Operasi dan Jaringan Komputer per modul, simulasi ETS/EAS, dan pembahasan soal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className="h-full antialiased"
      style={{
        fontFamily: '"Iosevka", ui-monospace, monospace',
        backgroundColor: "#eff1f5",
      }}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: '"Iosevka", ui-monospace, monospace' }}
      >
        <SiteNavbar />
        {children}
      </body>
    </html>
  );
}
