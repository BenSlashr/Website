import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devis SEO | Tarifs Référencement Naturel | Slashr",
  description:
    "Demandez votre devis SEO personnalisé. Découvrez nos tarifs de référencement naturel et les facteurs qui influencent le coût d'une prestation SEO.",
  alternates: {
    canonical: "/prestations/devis",
  },
};

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
