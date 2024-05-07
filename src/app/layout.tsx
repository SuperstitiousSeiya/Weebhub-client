import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";


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
         {children}
         </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
