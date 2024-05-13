"use client";

import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import NextTopLoader from 'nextjs-toploader';
import { Suspense } from "react";
import HomeSkeleton from "@/components/weebui/Skeletons/HomeSkeleton";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          " bg-background font-sans antialiased box-border",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <div>
            <Navbar />
          </div>
          <main className="pt-[80px] box-border w-full">
            {" "}
            <NextTopLoader
              color="white"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              // showSpinner={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            />
            <Suspense fallback={<HomeSkeleton />}>

            {children}
            </Suspense>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
