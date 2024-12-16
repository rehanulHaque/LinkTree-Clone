import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinkTree",
  description: "LinkTree Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${inter.className} grid grid-cols-6`}> */}
      <body className={`${inter.className}`}>
        {/* <div>
          <Navbar />
        </div>
        <div className="col-span-5">
          {children} <Toaster />
        </div> */}
        {children}
      </body>
    </html>
  );
}
