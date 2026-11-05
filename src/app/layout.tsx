import type { Metadata } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/animate-ui/components/page-transition";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
});

const geistPixelSquare = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-pixel/GeistPixel-Square.woff2",
  variable: "--font-geist-pixel-square",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yash Patel | Software Developer",
  description: "Portfolio of Yash Patel, Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans",
        geistSans.variable,
        instrumentSerif.variable,
        geistMono.variable,
        geistPixelSquare.variable,
      )}
    >
      <body
        className={`${instrumentSerif.variable} ${geistSans.variable} ${geistMono.variable} ${geistPixelSquare.variable} font-mono antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <div className="global-header">
            <Header />
          </div>
          <PageTransition effect="push" className="flex-grow flex flex-col">
            {children}
          </PageTransition>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}