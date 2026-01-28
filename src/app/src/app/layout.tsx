import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IslandMatch — Jersey-first • UK-wide",
  description:
    "A Jersey-first dating community with a clean, privacy-led experience. Join the waitlist.",
  metadataBase: new URL("https://islandmatch.app"),
  openGraph: {
    title: "IslandMatch — Jersey-first • UK-wide",
    description:
      "A Jersey-first dating community with a clean, privacy-led experience. Join the waitlist.",
    url: "https://islandmatch.app",
    siteName: "IslandMatch",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "IslandMatch" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IslandMatch — Jersey-first • UK-wide",
    description:
      "A Jersey-first dating community with a clean, privacy-led experience. Join the waitlist.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
