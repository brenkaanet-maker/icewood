import type { Metadata } from "next";import { ProductPageTemplate } from "@/components/ProductPageTemplate";import { productPages } from "@/data/products";
export const metadata: Metadata = { title: "Exotická Garapa na terasy | IceWood", description: "Prémiové terasové dřevo Garapa s elegantním vzhledem a dlouhou životností." };
export default function Page(){return <ProductPageTemplate content={productPages["garapa-terasy"]} parentLabel="Terasy"/>}
