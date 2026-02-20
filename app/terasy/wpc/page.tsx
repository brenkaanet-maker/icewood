import type { Metadata } from "next";import { ProductPageTemplate } from "@/components/ProductPageTemplate";import { productPages } from "@/data/products";
export const metadata: Metadata = { title: "WPC terasy a WPC prkna | IceWood", description: "WPC materiály pro moderní bezúdržbové terasy. Návrh i dodávka na míru." };
export default function Page(){return <ProductPageTemplate content={productPages["wpc-terasy"]} parentLabel="Terasy"/>}
