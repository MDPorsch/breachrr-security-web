import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import { SiteHeader, SiteFooter } from "@/components/layout";
import { site } from "@/content/site";
import "./globals.css";

const SITE_URL = "https://breachrrsecurity.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Breachrr Security — Cybersecurity services for startups and growing businesses",
    template: "%s · Breachrr Security",
  },

  description:
    "Breachrr Security helps startups and growing businesses identify and reduce cybersecurity risks, and build a security program that fits how they actually work. Security assessments, program build-outs, and ongoing advisory.",

  applicationName: "Breachrr Security",
  authors: [{ name: "Breachrr Security" }],
  generator: "Next.js",
  creator: "Breachrr Security",
  publisher: "Breachrr Ltd",
  category: "cybersecurity",

  keywords: [
    "cybersecurity consultancy",
    "security assessment",
    "SOC 2 readiness",
    "ISO 27001",
    "UK GDPR",
    "application security",
    "cloud security",
    "security program",
    "fractional CISO",
    "incident response",
    "startup security",
    "SaaS security",
    "grey-box assessment",
    "security advisory",
  ],

  referrer: "strict-origin-when-cross-origin",

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Breachrr Security",
    title:
      "Breachrr Security — Cybersecurity services for startups and growing businesses",
    description:
      "Security assessments, program build-outs, and ongoing advisory. Open for engagements.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Breachrr Security — Find the gaps. Fix the risks. Stay secure.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Breachrr Security",
    description:
      "Cybersecurity services for startups and growing businesses. Open for engagements.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",

  verification: {
    // TODO: add real verification codes when Google Search Console + Bing Webmaster
    // are set up. Left empty for now — safe default.
  },

  other: {
    "msapplication-TileColor": "#1a1613",
    "theme-color": "#1a1613",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f2ec" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1613" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

/**
 * Organization JSON-LD (Schema.org)
 *
 * Signals to search engines what this site represents. The `ProfessionalService`
 * schema on the homepage extends this with service-specific structure.
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: "Breachrr Security",
  legalName: "Breachrr Ltd",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/brand/wordmark/wordmark-ink.svg`,
    width: 400,
    height: 100,
  },
  image: `${SITE_URL}/opengraph-image`,
  description: site.slogan,
  slogan: site.slogan,
  email: site.contact.email,
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Nigeria" },
  ],
  serviceType: [
    "Cybersecurity consulting",
    "Security assessment",
    "Security program development",
    "SOC 2 readiness",
    "ISO 27001 readiness",
    "Application security",
    "Cloud security",
    "Incident response preparedness",
  ],
  knowsAbout: [
    "Cybersecurity",
    "Information security",
    "SOC 2 Type II",
    "ISO 27001",
    "UK GDPR",
    "Application security",
    "Cloud security",
    "Identity and access management",
    "Incident response",
    "Security architecture",
  ],
  founder: {
    "@type": "Person",
    name: "Mohammed Orunsolu",
  },
  sameAs: [
    // TODO: add LinkedIn, X/Twitter, etc. once profiles are live.
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: site.contact.email,
    availableLanguage: ["en"],
  },
};

/**
 * WebSite JSON-LD — enables site search markup for potential future site search.
 */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Breachrr Security",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-GB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />

        {/* Structured data — Organization + WebSite */}
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}
