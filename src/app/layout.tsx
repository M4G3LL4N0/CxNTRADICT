import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cxntradict | Premium Narrative Intelligence", 
    template: "%s | Cxntradict"
  },
  description: "Enterprise-grade contradiction analysis for decision makers.",
  metadataBase: new URL("https://cxntradict.com"),
  openGraph: {
    title: "Cxntradict",
    description: "Premium contradiction-driven media intelligence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className="min-h-screen premium-ui">
        <div className="relative isolate mx-auto max-w-7xl px-6">
          <div className="premium-edge-glow" />
          {children}
        </div>
      </body>
    </html>
  );
}
