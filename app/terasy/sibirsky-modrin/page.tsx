import type { Metadata } from "next";import { ProductPageTemplate } from "@/components/ProductPageTemplate";import { productPages } from "@/data/products";
export const metadata: Metadata = { title: "Sibiřský modřín na terasy | IceWood", description: "Terasová prkna a hranoly ze sibiřského modřínu. Odolné řešení s přírodním vzhledem." };
export default function Page(){return <ProductPageTemplate content={productPages["sibirsky-modrin-terasy"]} parentLabel="Terasy"/>}
