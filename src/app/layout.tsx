import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { fontPrompt, fontUnbounded } from "@/lib/fonts";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.creator,
      url: siteConfig.url
    }
  ],
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${fontUnbounded.variable} ${fontPrompt.variable}`}>
        {children}
      </body>
    </html>
  );
};
