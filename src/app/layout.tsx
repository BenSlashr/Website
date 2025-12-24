import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SLASHR | Agence SEO & Search Marketing",
    template: "%s | SLASHR",
  },
  description:
    "L'agence des marques qui veulent gagner la bataille de l'attention. Google, ChatGPT, TikTok, YouTube... Où qu'ils cherchent, vos clients doivent tomber sur vous.",
  keywords: [
    "SEO",
    "Search Marketing",
    "Agence SEO",
    "SEO Lille",
    "Référencement naturel",
    "Google Ads",
    "SEA",
    "Content Marketing",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  authors: [{ name: "SLASHR" }],
  creator: "SLASHR",
  publisher: "SLASHR",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://slashr.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SLASHR | Agence SEO & Search Marketing",
    description:
      "L'agence des marques qui veulent gagner la bataille de l'attention.",
    url: "https://slashr.fr",
    siteName: "SLASHR",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SLASHR | Agence SEO & Search Marketing",
    description:
      "L'agence des marques qui veulent gagner la bataille de l'attention.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
