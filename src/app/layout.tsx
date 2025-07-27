import type { Metadata } from "next";
import "./global.css";
import { Archivo, Days_One, Dongle, Inter } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const daysOne = Days_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-days-one",
  weight: "400",
});

const dongle = Dongle({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dongle",
  weight: ["300", "400", "700"],
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "VIXTERO - Global Trade Ecosystem Enabler",
  description:
    "VIXTERO provides a comprehensive platform simplifying global and domestic trade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${daysOne.variable} ${dongle.variable} ${archivo.variable} scroll-smooth`}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="Vixtero" />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
