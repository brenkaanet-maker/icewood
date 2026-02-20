import type { Metadata } from "next";import { ProductPageTemplate } from "@/components/ProductPageTemplate";import { productPages } from "@/data/products";
export const metadata: Metadata = { title: "Dřevěné fasády | IceWood s.r.o.", description: "Dřevěné fasády, rhombus profily, modřín a garapa. Materiály i realizace fasád." };
export default function Page(){return <ProductPageTemplate content={productPages["fasady-main"]} parentLabel="Fasády"/>}
