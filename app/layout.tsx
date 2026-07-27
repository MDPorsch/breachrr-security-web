import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SiteHeader, SiteFooter } from "@/components/layout";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://breachrrsecurity.com"),
  title: {
    default: "Breachrr Security — Security programs, built for the stage you're at.",
    template: "%s · Breachrr Security",
  },
  description:
    "Breachrr Security helps startups and growing businesses identify and reduce cybersecurity risks, and build a security program that fits how they actually work.",
  openGraph: {
    type: "website",
    title: "Breachrr Security",
    description:
      "Cybersecurity services for startups and growing businesses. Assessments, technical services, ongoing advisory.",
    siteName: "Breachrr Security",
    locale: "en_GB",
  },
  robots: {
    // Placeholder — during v0.1 dev we won't be indexed.
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
