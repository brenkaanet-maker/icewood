import type { Metadata } from "next";import { ProductPageTemplate } from "@/components/ProductPageTemplate";import { productPages } from "@/data/products";
export const metadata: Metadata = { title: "Sauny a saunové profily | IceWood", description: "Saunové profily lavicové i obkladové z osiky a olše." };
export default function Page(){return <ProductPageTemplate content={productPages["sauny-main"]} parentLabel="Sauny"/>}
