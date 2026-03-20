import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cxntradict - Challenge the Narrative",
  description: "AI-powered news analysis exposing hidden contexts and alternatives",
  keywords: ["news analysis", "media bias", "alternative narratives", "critical thinking"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl">
            <div className="w-full bg-surface ring-1 ring-white/5" />
          </div>
        </div>
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}
