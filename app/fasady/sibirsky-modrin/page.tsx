import type { Metadata } from "next";import { ProductPageTemplate } from "@/components/ProductPageTemplate";import { productPages } from "@/data/products";
export const metadata: Metadata = { title: "Sibiřský modřín na fasády | IceWood", description: "Fasádní profily ze sibiřského modřínu pro provětrávané fasády." };
export default function Page(){return <ProductPageTemplate content={productPages["fasady-sibirsky"]} parentLabel="Fasády"/>}
