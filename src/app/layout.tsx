import "./globals.css";
import { Header } from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aulas Next.js",
  description: "Aprendendo Next.js",
  openGraph: {
    title: "Aulas Next.js",
    description: "Aprendendo Next.js",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
