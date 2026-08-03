import type { Metadata } from "next";
import { Geist } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ananda Utsav | Celebrating Tradition, Culture & Togetherness",
    template: "%s | Ananda Utsav",
  },

  description:
    "Ananda Utsav is a vibrant celebration of Bengali tradition, devotion and community. Experience Durga Puja, cultural festivities, social initiatives, Sindoor Utsav and the spirit of togetherness.",

  keywords: [
    "Ananda Utsav",
    "Ananda Utsav Pooja",
    "Durga Puja",
    "Bengali Durga Puja",
    "Bengali Festival",
    "Sindoor Utsav",
    "Durga Puja Celebration",
    "Bengali Cultural Association",
    "Bengali Community",
    "Cultural Events",
  ],

  authors: [{ name: "Ananda Utsav" }],

  openGraph: {
    title: "Ananda Utsav | Celebrating Tradition, Culture & Togetherness",
    description:
      "Celebrating devotion, Bengali heritage, culture and community through Durga Puja, festivities and social initiatives.",
    type: "website",
    locale: "en_IN",
    siteName: "Ananda Utsav",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* GLOBAL NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <Footer />

      </body>
    </html>
  );
}