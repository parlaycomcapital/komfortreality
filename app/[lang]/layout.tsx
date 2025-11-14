import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import { i18nConfig, type Locale, getTranslations } from "@/i18n/config";
import { baseMetadata } from "../metadata";
import { getHomePageSchemas } from "../schema";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

// SEO-optimized metadata
export const metadata: Metadata = baseMetadata;

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  // Generate structured data for homepage
  const structuredData = getHomePageSchemas();
  
  return (
    <html lang={params.lang} className={`${interTight.variable} ${inter.variable}`}>
      <head>
        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="beforeInteractive"
        />
        
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        
        {/* Alternate language versions */}
        <link rel="alternate" hrefLang="sk" href="https://komfortreality.sk/sk" />
        <link rel="alternate" hrefLang="cs" href="https://komfortreality.sk/cz" />
        <link rel="alternate" hrefLang="en" href="https://komfortreality.sk/en" />
        <link rel="alternate" hrefLang="x-default" href="https://komfortreality.sk/sk" />
      </head>
      <body>{children}</body>
    </html>
  );
}

