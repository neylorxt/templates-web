import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toast } from "@heroui/react";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} light`}
      data-theme="light"
      suppressHydrationWarning
    >
      <body
        className="bg-background font-sans text-foreground antialiased"
        suppressHydrationWarning
      >
        {children}
        <Toast.Provider />
      </body>
    </html>
  );
}
