import type { Metadata } from "next";import { ProductPageTemplate } from "@/components/ProductPageTemplate";import { productPages } from "@/data/products";
export const metadata: Metadata = { title: "Interiér | IceWood", description: "Dřevěné obklady a akustické interiérové panely pro moderní prostory." };
export default function Page(){return <ProductPageTemplate content={productPages["interier-main"]} parentLabel="Interiér"/>}
