import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { portfolioData } from "@/config/data";

export const metadata: Metadata = {
  title: {
    default: portfolioData.personal.name,
    template: `%s | ${portfolioData.personal.name}`,
  },
  description: portfolioData.personal.summary,
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-accent selection:text-black`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
