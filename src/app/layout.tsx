import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans, Bokor } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoDefault = Noto_Sans({
  weight: ["900"],
  subsets: ["latin"],
  variable: "--font-noto-default",
  display: "swap",
});
const bokor = Bokor({
  subsets: ["latin"],
  variable: "--font-bokor",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Taskinoo",
  description: "task management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoDefault.variable} ${bokor.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
