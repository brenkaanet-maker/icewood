export type Realization = {
  id: string;
  category: "terasy" | "fasady" | "wpc";
  title: string;
  location: string;
  material: string;
  description: string;
  image: string;
};

export const realizations: Realization[] = [
  { id: "r1", category: "terasy", title: "Terasa ze sibiřského modřínu", location: "Brno", material: "Sibiřský modřín", description: "Kompletní realizace terasy včetně podkladního roštu a olejování.", image: "/assets/realizations/realization-terrace-1.svg" },
  { id: "r2", category: "fasady", title: "Fasáda s rhombus profilem", location: "Praha", material: "Rhombus modřín", description: "Provětrávaná fasáda moderní novostavby s čistou linií.", image: "/assets/realizations/realization-facade-1.svg" },
  { id: "r3", category: "wpc", title: "WPC terasa u bazénu", location: "Plzeň", material: "WPC prkna", description: "Bezúdržbová terasa s vysokou odolností proti vlhkosti.", image: "/assets/realizations/realization-wpc-1.svg" },
  { id: "r4", category: "terasy", title: "Garapa terasa s pergolou", location: "Olomouc", material: "Garapa", description: "Prémiová terasa s jemnou kresbou exotického dřeva.", image: "/assets/realizations/realization-terrace-2.svg" }
];
