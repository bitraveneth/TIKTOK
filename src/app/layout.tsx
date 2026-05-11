import type { Metadata } from "next";
import { Bagel_Fat_One, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import AgeGate from "@/components/AgeGate";
import { site } from "@/lib/site";

const display = Bagel_Fat_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const logo = localFont({
  src: "./fonts/Gonnex-Regular.otf",
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${logo.variable}`}
    >
      <body>
        <AgeGate />
        {children}
      </body>
    </html>
  );
}
