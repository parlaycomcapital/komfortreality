import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Komfort Reality — Premium Real Estate Excellence",
  description: "Discover your perfect property with the region's most trusted luxury real estate agency. 10+ years of excellence, 500+ successful transactions.",
  keywords: ["real estate", "luxury properties", "premium homes", "property sale", "real estate agency"],
  authors: [{ name: "Komfort Reality" }],
  openGraph: {
    title: "Komfort Reality — Premium Real Estate Excellence",
    description: "Discover your perfect property with the region's most trusted luxury real estate agency.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

