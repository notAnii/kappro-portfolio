import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Kappro Portfolio | Photographer & Film Maker",
  description: "Explore the portfolio of Ahmed Osman, a photographer and film maker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Kappro's Portfolio</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
