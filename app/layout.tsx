import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { GorillaDeskScript } from "@/components/forms/GorillaDeskScript";
import "./globals.css";
import { assetPath } from "@/lib/paths";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const isGithubPages = process.env.GITHUB_PAGES === "true";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Rodent Exclusion and Pest Control in Sonoma & Marin`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  robots: isGithubPages
    ? { index: false, follow: false }
    : { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    images: [
      { url: assetPath("/images/truck-hero.jpg"), width: 1200, height: 800 },
    ],
  },
  icons: {
    icon: assetPath("/images/badge.png"),
    apple: assetPath("/images/badge.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <ScrollToTop />
        <Header />
        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-x-clip">
          <main id="main-content" className="min-w-0 flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
        <MobileCTA />
        <GorillaDeskScript />
      </body>
    </html>
  );
}
