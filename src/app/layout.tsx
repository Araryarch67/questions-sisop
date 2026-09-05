import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TRYOUT ETS // RYOKU DOSSIER",
  description:
    "Tryout ETS bergaya Ryoku untuk latihan Sistem Operasi dan arsitektur komputer (William Stallings).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${jetbrainsMono.variable} ${geistSans.variable} ${geistMono.variable} ${instrument.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-[#080808] text-[#E8E0D1] flex flex-col selection:bg-[#E8E0D1] selection:text-black">
        {children}
      </body>
    </html>
  );
}
