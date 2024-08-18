import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arthur's Portfolio",
  description: "About Arthur Krieger and his Career",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row flex-auto justify-evenly my-16 text-4xl">
          <span className="py-2.5 px-4 hover:bg-slate-700/[.70]"><p className="transition-colors duration-500 rainbow-text">Arthur Krieger</p></span>
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}