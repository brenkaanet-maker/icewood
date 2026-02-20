import type { Metadata } from "next";import { ProductPageTemplate } from "@/components/ProductPageTemplate";import { productPages } from "@/data/products";
export const metadata: Metadata = { title: "Exotická Garapa na fasády | IceWood", description: "Exotické dřevo Garapa pro reprezentativní fasády s prémiovým vzhledem." };
export default function Page(){return <ProductPageTemplate content={productPages["fasady-garapa"]} parentLabel="Fasády"/>}
