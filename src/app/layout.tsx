import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/providers/Providers";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eduardo Silva Pereira - Desenvolvedor Web e Mobile",
  authors: ["Eduardo Silva Pereira"],
  description:
    "Desenvolvedor especializado em React, React Native, Next.js e Node.js. Construindo aplicações performáticas e escaláveis.",
  keywords: [
    "React",
    "Next.js",
    "TypeScript",
    "Desenvolvedor Web",
    "Node.js",
    "React Native",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Eduardo Silva Pereira - Desenvolvedor Web e Mobile",
    description:
      "Desenvolvedor especializado em aplicações escaláveis e performáticas.",
    url: "https://eduardosilvapereira.com.br",
    images: {
      url: "/assets/eduardo-silva-pereira-thumb.jpg",
      alt: "Eduardo Silva Pereira - Desenvolvedor Web e Mobile",
    },
  },
} as Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`min-h-screen mx-auto max-w-screen-lg flex flex-col bg-white dark:bg-gray-900 ${inter.className}`}
      >
        <Providers>
          <Navbar />
          <main className="flex flex-col flex-1 max-w-screen-lg w-full">
            {children}
          </main>
          <Footer />
        </Providers>

        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Eduardo Silva Pereira",
              jobTitle: "Desenvolvedor Web e Mobile",
              url: "https://eduardosilvapereira.com.br",
              sameAs: [
                "https://www.linkedin.com/in/eduardo-silva-pereira-7945026b/",
                "https://github.com/seu-github",
              ],
            }),
          }}
        />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LS6R8STSND"
        ></Script>

        <Script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LS6R8STSND');
          `,
          }}
        ></Script>
      </body>
    </html>
  );
}
