import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/providers/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eduardo Pereira - Portifólio",
  description: "Portifólio do Eduardo Pereira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`min-h-screen mx-auto max-w-6xl flex flex-col bg-white dark:bg-gray-900 ${inter.className}`}
      >
        <Providers>
          <Navbar />
          <main className="flex flex-col flex-1 max-w-6xl w-full">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
