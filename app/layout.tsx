import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";



export const metadata: Metadata = {
  title: "Dashagriv Aerospace Technology - Pioneering Near-Space Innovations",
  description: "Advancing aerospace technology with high-altitude platform systems for near-space applications, providing sustainable, cost-effective solutions for defense, research, and commercial enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />

      </Head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
