import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cxntradict",
  description: "Premium contradiction-driven media intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[#07090d] text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative isolate pt-8">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
