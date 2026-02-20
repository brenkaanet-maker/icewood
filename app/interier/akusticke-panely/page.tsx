import type { Metadata } from "next";import { ProductPageTemplate } from "@/components/ProductPageTemplate";import { productPages } from "@/data/products";
export const metadata: Metadata = { title: "Akustické dřevěné panely | IceWood", description: "Akustické interiérové panely pro lepší zvuk a moderní design interiéru." };
export default function Page(){return <ProductPageTemplate content={productPages["akusticke-panely"]} parentLabel="Interiér"/>}
