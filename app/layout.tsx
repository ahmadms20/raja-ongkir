"use client"

import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/app/_contexts/AuthContext";
import Navbar from "@/app/_components/Navbar";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./_fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./_fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showNavbar = pathname !== "/login";

  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {showNavbar ? <Navbar /> : null}
          {children}
        </body>
      </html>
    </AuthProvider>
  );
};