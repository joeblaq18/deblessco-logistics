import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Deblessco Logistics | Your Gateway to Global Trade",
  description:
    "Professional sourcing and logistics services connecting China and Ghana.",
  keywords: [
    "China",
    "Ghana",
    "Shipping",
    "Logistics",
    "Import",
    "Export",
    "Freight",
    "Sourcing",
  ],
  authors: [{ name: "Orbital Labs" }],
  creator: "Orbital Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}