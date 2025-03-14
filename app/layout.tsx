


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import Navbar from "./Navbar";
import { Theme } from "@radix-ui/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This website will showcase my portfolio",
};

export default function RootLayout({

    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}>
        <Theme className="md:flex h-screen">
          <div className="hidden md:block border-r bg-purple-400">
            <Navbar/>
          </div>
          <main className="h-screen overflow-y-auto flex flex-col flex-grow ">
            <div className="md:hidden bg-purple-200">
              <Navbar/>
            </div>
              {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}