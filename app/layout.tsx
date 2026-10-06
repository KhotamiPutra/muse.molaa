import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muse Molaa — Muse Model Collab MUA Garut-Bandung",
  description:
    "Muse model hijab only untuk open collaboration makeup artist di Garut dan Bandung. Kenali Muse Molaa dan ajak collab melalui WhatsApp.",
  keywords: [
    "muse model Garut",
    "model collab MUA Bandung",
    "muse hijab Indonesia",
    "open collab makeup",
  ],
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fffaf8",
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
