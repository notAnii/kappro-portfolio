import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Kappro Portfolio | Photographer & Film Maker",
  description: "Explore the portfolio of Ahmed Osman, a photographer and film maker.",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <title>{"Kappro's Portfolio"}</title>
      </head>
      <body>
        <Header />
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
