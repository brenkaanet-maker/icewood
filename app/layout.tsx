import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TopBar } from "@/components/TopBar";

export const metadata: Metadata = {
  title: "IceWood s.r.o. | Dřevěné a WPC materiály, terasy, fasády a realizace",
  description:
    "IceWood s.r.o. dodává dřevěné a WPC materiály pro terasy, fasády, interiér a sauny. Zajišťujeme také profesionální realizace po celé ČR.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IceWood s.r.o.",
  url: "https://www.icewood.cz",
  logo: "https://www.icewood.cz/assets/logo/icewood-logo.svg",
  email: "info@icewood.cz",
  telephone: "+420777000000",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "IceWood s.r.o.",
  image: "https://www.icewood.cz/assets/hero/hero_garapa.svg",
  telephone: "+420777000000",
  email: "info@icewood.cz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "TODO: doplnit adresu",
    addressLocality: "TODO",
    postalCode: "TODO",
    addressCountry: "CZ",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
