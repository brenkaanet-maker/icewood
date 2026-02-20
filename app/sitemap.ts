import type { MetadataRoute } from "next";

const routes = ["", "/terasy", "/terasy/sibirsky-modrin", "/terasy/garapa", "/terasy/wpc", "/terasy/akaciove-dlazdice", "/fasady", "/fasady/sibirsky-modrin", "/fasady/rhombus-profily", "/fasady/garapa", "/interier", "/interier/akusticke-panely", "/sauny", "/sauny/lavicove-profily", "/sauny/obkladove-profily", "/dubove-rezivo", "/realizace", "/realizace/terasy", "/realizace/fasady", "/realizace/wpc", "/o-nas", "/kontakt", "/poptavka"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `https://www.icewood.cz${route}`, lastModified: new Date(), changeFrequency: "weekly", priority: route === "" ? 1 : 0.8 }));
}
