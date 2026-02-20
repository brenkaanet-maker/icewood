import type { Metadata } from "next";import { ProductPageTemplate } from "@/components/ProductPageTemplate";import { productPages } from "@/data/products";
export const metadata: Metadata = { title: "Akáciové dřevěné dlaždice | IceWood", description: "Rychlá pokládka dřevěných akáciových dlaždic pro balkony a menší terasy." };
export default function Page(){return <ProductPageTemplate content={productPages["akaciove-dlazdice"]} parentLabel="Terasy"/>}
