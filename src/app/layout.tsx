import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryoku — A space for curious minds",
  description:
    "Pahami setiap lapisan. Ruang belajar Sistem Operasi dan Jaringan Komputer dengan 357 soal, latihan per bab, simulasi, dan pembahasan EAS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
