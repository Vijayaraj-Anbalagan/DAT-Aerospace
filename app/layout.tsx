import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";



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
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
