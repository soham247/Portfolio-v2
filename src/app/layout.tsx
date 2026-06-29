import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://sohamsadhukhan.vercel.app"
  ),
  title: {
    default: "Soham Sadhukhan — Full Stack Developer",
    template: "%s | Soham Sadhukhan",
  },
  description:
    "Full Stack Developer specializing in Next.js, React, Node.js, and modern web technologies. View my projects, skills, and experience.",
  keywords: [
    "Soham Sadhukhan",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "Portfolio",
    "Web Developer",
    "India",
    "West Bengal",
  ],
  authors: [{ name: "Soham Sadhukhan" }],
  creator: "Soham Sadhukhan",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Soham Sadhukhan — Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, and modern web technologies.",
    siteName: "Soham Sadhukhan",
    images: [
      {
        url: "/picture.webp",
        width: 300,
        height: 400,
        alt: "Soham Sadhukhan — Full Stack Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Soham Sadhukhan",
  jobTitle: "Full Stack Developer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sohamsadhukhan.vercel.app",
  worksFor: {
    "@type": "Organization",
    name: "Quantum Heaps",
  },
  sameAs: [
    "https://www.linkedin.com/in/sohamsadhukhan2004/",
    "https://github.com/soham247",
    "https://x.com/geekSoham",
    "https://leetcode.com/u/soham_247/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col px-0 sm:px-4 md:px-8 lg:px-12 xl:px-20 min-h-screen bg-background">
        <TooltipProvider>
          <div className="flex flex-col flex-1 border-x relative">
            <Navbar />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
