import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { CookieBanner } from "@/components/common/CookieBanner";
import { SchemaOrg } from "@/components/common/SchemaOrg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ágil Serviços BR | Soluções Contábeis e Burocráticas",
  description: "Especialistas em Imposto de Renda, MEI, Folha de Pagamento e Regularização de Imóveis. Atendimento ágil e 100% digital.",
  keywords: ["contabilidade", "MEI", "Imposto de Renda", "IRPF", "folha de pagamento", "regularização de imóveis", "INSS", "aposentadoria", "São Paulo"],
  authors: [{ name: "Ágil Serviços BR" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://agilservicosbr.com.br",
    title: "Ágil Serviços BR | Soluções Contábeis e Burocráticas",
    description: "Sua vida sem complicações burocráticas. Atendimento ágil e seguro para você e sua empresa.",
    siteName: "Ágil Serviços BR",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden min-h-screen flex flex-col`}
      >
        <SchemaOrg />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
