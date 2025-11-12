import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { ReCaptchaProvider } from "@/components/recaptcha-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "LABNOV - Laboratório de Desenvolvimento de Novos Materiais",
    template: "%s | LABNOV",
  },
  description:
    "Laboratório de Desenvolvimento de Novos Materiais da UFCG, coordenado pela Profa. Meiry Gláucia, focado em pesquisa em catálise e meio ambiente.",
  keywords: [
    "LABNOV",
    "UFCG",
    "novos materiais",
    "catálise",
    "meio ambiente",
    "pesquisa",
    "UAEQ",
    "CCT",
  ],
  authors: [{ name: "LABNOV UFCG" }],
  creator: "LABNOV UFCG",
  publisher: "LABNOV UFCG",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: "https://labnov.ufcg.edu.br",
    siteName: "LABNOV UFCG",
    title: "LABNOV - Laboratório de Desenvolvimento de Novos Materiais",
    description:
      "Laboratório de Desenvolvimento de Novos Materiais da UFCG, coordenado pela Profa. Meiry Gláucia, focado em pesquisa em catálise e meio ambiente.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LABNOV UFCG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LABNOV - Laboratório de Desenvolvimento de Novos Materiais",
    description:
      "Laboratório de Desenvolvimento de Novos Materiais da UFCG, coordenado pela Profa. Meiry Gláucia, focado em pesquisa em catálise e meio ambiente.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LABNOV - Laboratório de Desenvolvimento de Novos Materiais",
              url: "https://labnov.ufcg.edu.br",
              logo: "https://labnov.ufcg.edu.br/logo.png",
              description:
                "Laboratório de Desenvolvimento de Novos Materiais da UFCG, coordenado pela Profa. Meiry Gláucia, focado em pesquisa em catálise e meio ambiente.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
                addressLocality: "Campina Grande",
                addressRegion: "PB",
              },
              parentOrganization: {
                "@type": "Organization",
                name: "Universidade Federal de Campina Grande",
                url: "https://www.ufcg.edu.br",
              },
              sameAs: [
                "https://www.instagram.com/labnov_ufcg",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Meiry Gláucia",
              jobTitle: "Coordenadora",
              worksFor: {
                "@type": "Organization",
                name: "LABNOV - Laboratório de Desenvolvimento de Novos Materiais",
              },
              affiliation: {
                "@type": "Organization",
                name: "Universidade Federal de Campina Grande",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ReCaptchaProvider>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}

