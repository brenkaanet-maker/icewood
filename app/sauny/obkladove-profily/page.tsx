import type { Metadata } from "next";import { ProductPageTemplate } from "@/components/ProductPageTemplate";import { productPages } from "@/data/products";
export const metadata: Metadata = { title: "Saunové profily obkladové | IceWood", description: "Obkladové saunové profily z osiky a olše pro stěny a stropy." };
export default function Page(){return <ProductPageTemplate content={productPages["obkladove-profily"]} parentLabel="Sauny"/>}
