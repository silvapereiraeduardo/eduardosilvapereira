import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/providers/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
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
      <Head>
        <title>Eduardo Silva Pereira - Desenvolvedor Web e Mobile</title>
        <meta
          name="description"
          content="Desenvolvedor especializado em React, React Native, Next.js e Node.js. Construindo aplicações performáticas e escaláveis."
        />
        <meta
          name="keywords"
          content="React, Next.js, TypeScript, Desenvolvedor Web, Node.js, React Native"
        />
        <meta name="author" content="Eduardo Silva Pereira" />
        <meta
          property="og:title"
          content="Eduardo Silva Pereira - Desenvolvedor Web e Mobile"
        />
        <meta
          property="og:description"
          content="Desenvolvedor especializado em aplicações escaláveis e performáticas."
        />
        <meta
          property="og:image"
          content="/assets/eduardo-silva-pereira-thumb.jpg"
        />
        <meta property="og:url" content="https://eduardosilvapereira.com.br" />
        <meta name="robots" content="index, follow" />

        <script
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

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LS6R8STSND"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LS6R8STSND');
          `,
          }}
        ></script>
      </Head>
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
      </body>
    </html>
  );
}
