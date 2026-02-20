import type { Metadata } from "next";import { ProductPageTemplate } from "@/components/ProductPageTemplate";import { productPages } from "@/data/products";
export const metadata: Metadata = { title: "Saunové profily lavicové | IceWood", description: "Lavicové saunové profily z osiky a olše pro pohodlí i bezpečnost." };
export default function Page(){return <ProductPageTemplate content={productPages["lavicove-profily"]} parentLabel="Sauny"/>}
