import type { Metadata } from "next";import { ProductPageTemplate } from "@/components/ProductPageTemplate";import { productPages } from "@/data/products";
export const metadata: Metadata = { title: "Dubové řezivo a výroba na míru | IceWood", description: "Dubové truhlářské řezivo a zakázková výroba dubových prvků na míru." };
export default function Page(){return <ProductPageTemplate content={productPages["dubove-rezivo"]} parentLabel="Dubové řezivo"/>}
