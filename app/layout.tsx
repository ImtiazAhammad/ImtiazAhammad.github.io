import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "../public/fonts/inter-latin.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/inter-latin-ext.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/inter-latin.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/inter-latin.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/inter-latin.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/inter-latin.woff2", weight: "800", style: "normal" },
    { path: "../public/fonts/inter-latin.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-inter-display",
  display: "swap",
});

const caveat = localFont({
  src: [
    { path: "../public/fonts/caveat-latin.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/caveat-latin.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/caveat-latin.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/caveat-latin.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-caveat",
  display: "swap",
});

const geistMono = localFont({
  src: "../public/fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  display: "swap",
});

const zalando = localFont({
  src: [
    { path: "../public/fonts/zalando-sans-expanded-800-latin.woff2", weight: "800", style: "normal" },
    { path: "../public/fonts/zalando-sans-expanded-latin.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-zalando",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imtiaz Ahammad — AI Engineer & Team Lead",
  description:
    "AI Engineer with 2+ years of production experience building computer vision and LLM-powered systems.",
  keywords: [
    "AI Engineer",
    "Computer Vision",
    "LLM",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Imtiaz Ahammad" }],
  icons: {
    icon: "/avatar.ico",
    shortcut: "/avatar.ico",
    apple: "/avatar.png",
  },
  openGraph: {
    title: "Imtiaz Ahammad — AI Engineer & Team Lead",
    description: "Building intelligent systems that see, think, and act.",
    type: "website",
    locale: "en_US",
  },
};

// Home page only: the root layout also renders 404.html, which has no Loader to remove the cover.
const LOADER_SCRIPT = `(function(){try{var k="portfolio-loader-shown";if(!/^\\/(index\\.html)?$/.test(location.pathname)||sessionStorage.getItem(k)||matchMedia("(prefers-reduced-motion: reduce)").matches)return;sessionStorage.setItem(k,"true");document.documentElement.dataset.loader="show"}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} ${geistMono.variable} ${zalando.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: LOADER_SCRIPT }} />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
