import type { Metadata } from "next";import { ProductPageTemplate } from "@/components/ProductPageTemplate";import { productPages } from "@/data/products";
export const metadata: Metadata = { title: "Rhombus profily a fasádní obklady | IceWood", description: "Rhombus profily pro moderní fasády: čisté linie, odvětrání a dlouhá životnost." };
export default function Page(){return <ProductPageTemplate content={productPages["fasady-rhombus"]} parentLabel="Fasády"/>}
