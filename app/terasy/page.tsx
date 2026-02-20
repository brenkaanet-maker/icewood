import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";
import { productPages } from "@/data/products";

export const metadata: Metadata = { title: "Terasy | IceWood s.r.o.", description: "Dřevěné i WPC terasy včetně realizace. Sibiřský modřín, garapa, WPC prkna a akáciové dlaždice." };
export default function Page() { return <ProductPageTemplate content={productPages["terasy-main"]} parentLabel="Terasy" />; }
