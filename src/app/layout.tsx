import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Yeasin's Portfolio",
  description: "Yeasin's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} bg-[#0c0f11] text-gray-400`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
