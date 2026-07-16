import ringSolitaer from "@/assets/product-ring-solitaer.jpg";
import ringSolitaer2 from "@/assets/product-ring-solitaer-2.jpg";
import ketteAurora from "@/assets/product-kette-aurora.jpg";
import uhrChronograph from "@/assets/product-uhr-chronograph.jpg";
import trauringe from "@/assets/product-trauringe.jpg";
import ohrringePerle from "@/assets/product-ohrringe-perle.jpg";
import armbandGold from "@/assets/product-armband-gold.jpg";

export type Kategorie = "Ringe" | "Halsketten" | "Armbänder" | "Ohrringe" | "Uhren" | "Trauringe";

export const kategorien: Kategorie[] = [
  "Ringe",
  "Halsketten",
  "Armbänder",
  "Ohrringe",
  "Uhren",
  "Trauringe",
];

export type Produkt = {
  slug: string;
  name: string;
  kategorie: Kategorie;
  material: string;
  kurz: string;
  beschreibung: string;
  eigenschaften: { label: string; wert: string }[];
  bilder: string[];
  gruppe: "schmuck" | "uhren" | "trauringe";
};

export const produkte: Produkt[] = [
  {
    slug: "solitaerring-aurum",
    name: "Solitärring Aurum",
    kategorie: "Ringe",
    material: "750 Gelbgold, Brillant",
    kurz: "Zeitloser Solitär in fein poliertem Gelbgold.",
    beschreibung:
      "Ein klassischer Solitärring in warmem Gelbgold, gefasst mit einem funkelnden Brillanten. Ein ruhiger Entwurf, der sich in jeder Situation trägt.",
    eigenschaften: [
      { label: "Metall", wert: "750 Gelbgold" },
      { label: "Stein", wert: "Brillant" },
      { label: "Ringschiene", wert: "Rund, poliert" },
    ],
    bilder: [ringSolitaer, ringSolitaer2],
    gruppe: "schmuck",
  },
  {
    slug: "kette-aurora",
    name: "Halskette Aurora",
    kategorie: "Halsketten",
    material: "750 Gelbgold",
    kurz: "Feine Ankerkette mit dezentem Anhänger.",
    beschreibung:
      "Eine leichte Ankerkette aus Gelbgold mit einem kleinen, warm schimmernden Anhänger. Ideal als Alltagsbegleiter oder in Kombination mit weiteren Ketten.",
    eigenschaften: [
      { label: "Metall", wert: "750 Gelbgold" },
      { label: "Länge", wert: "42 – 45 cm verstellbar" },
      { label: "Verschluss", wert: "Karabiner" },
    ],
    bilder: [ketteAurora],
    gruppe: "schmuck",
  },
  {
    slug: "armband-linea",
    name: "Armband Linea",
    kategorie: "Armbänder",
    material: "585 Gelbgold",
    kurz: "Feingliedriges Armband für den täglichen Genuss.",
    beschreibung:
      "Ein zartes Panzerarmband aus Gelbgold, das sich sanft an das Handgelenk schmiegt. Zurückhaltend, aber mit Präsenz.",
    eigenschaften: [
      { label: "Metall", wert: "585 Gelbgold" },
      { label: "Länge", wert: "17 – 19 cm" },
      { label: "Verschluss", wert: "Karabiner mit Sicherheitsöse" },
    ],
    bilder: [armbandGold],
    gruppe: "schmuck",
  },
  {
    slug: "perlenstecker-luna",
    name: "Perlenstecker Luna",
    kategorie: "Ohrringe",
    material: "Süßwasserperle, 585 Weißgold",
    kurz: "Zeitlose Ohrstecker mit Süßwasserperlen.",
    beschreibung:
      "Ein klassisches Paar Perlenohrstecker – schlicht, elegant und über Jahrzehnte tragbar. Ein leises Statement.",
    eigenschaften: [
      { label: "Perle", wert: "Süßwasser, 7 – 7,5 mm" },
      { label: "Fassung", wert: "585 Weißgold" },
      { label: "Verschluss", wert: "Ohrstecker mit Sicherheitsscheibe" },
    ],
    bilder: [ohrringePerle],
    gruppe: "schmuck",
  },
  {
    slug: "chronograph-heritage",
    name: "Heritage Chronograph",
    kategorie: "Uhren",
    material: "Edelstahl, Lederband",
    kurz: "Klassischer Chronograph mit warmem Lederband.",
    beschreibung:
      "Ein ruhiger Automatik-Chronograph mit anthrazitfarbenem Zifferblatt und braunem Kalbslederband. Ein Begleiter mit Charakter.",
    eigenschaften: [
      { label: "Gehäuse", wert: "Edelstahl, 40 mm" },
      { label: "Werk", wert: "Automatik" },
      { label: "Band", wert: "Kalbsleder, braun" },
    ],
    bilder: [uhrChronograph],
    gruppe: "uhren",
  },
  {
    slug: "trauringset-unio",
    name: "Trauring-Set Unio",
    kategorie: "Trauringe",
    material: "750 Roségold, matt / poliert",
    kurz: "Ein Paar in Roségold – schlicht und beständig.",
    beschreibung:
      "Ein klassisches Trauringpaar aus Roségold mit weicher, matter Oberfläche. Auf Wunsch gravieren wir Ihre Worte direkt im Haus.",
    eigenschaften: [
      { label: "Metall", wert: "750 Roségold" },
      { label: "Oberfläche", wert: "Matt / poliert nach Wunsch" },
      { label: "Gravur", wert: "Auf Wunsch inklusive" },
    ],
    bilder: [trauringe],
    gruppe: "trauringe",
  },
  // Weitere Beispiele
  {
    slug: "ring-noble",
    name: "Ring Noble",
    kategorie: "Ringe",
    material: "585 Weißgold, Diamant",
    kurz: "Feiner Diamantring in Weißgold.",
    beschreibung:
      "Ein zurückhaltender Diamantring aus Weißgold – der Stein sitzt ruhig und sicher in einer klassischen Krappenfassung.",
    eigenschaften: [
      { label: "Metall", wert: "585 Weißgold" },
      { label: "Stein", wert: "Diamant" },
    ],
    bilder: [ringSolitaer2],
    gruppe: "schmuck",
  },
  {
    slug: "kette-filo",
    name: "Kette Filo",
    kategorie: "Halsketten",
    material: "925 Sterlingsilber",
    kurz: "Feine Silberkette mit weichem Fall.",
    beschreibung:
      "Eine leichte Silberkette, ideal als Basis zum Kombinieren mit weiteren Anhängern oder Ketten.",
    eigenschaften: [
      { label: "Metall", wert: "925 Sterlingsilber" },
      { label: "Länge", wert: "45 cm" },
    ],
    bilder: [ketteAurora],
    gruppe: "schmuck",
  },
  {
    slug: "armreif-cubus",
    name: "Armreif Cubus",
    kategorie: "Armbänder",
    material: "Messing, brüniert",
    kurz: "Ruhiger Armreif in gebürsteter Oberfläche.",
    beschreibung:
      "Ein schlichter Armreif mit gebürsteter Oberfläche – klare Linien und eine warme, natürliche Patina.",
    eigenschaften: [
      { label: "Material", wert: "Messing, brüniert" },
      { label: "Innenmaß", wert: "58 mm" },
    ],
    bilder: [armbandGold],
    gruppe: "schmuck",
  },
  {
    slug: "ohrringe-goccia",
    name: "Ohrringe Goccia",
    kategorie: "Ohrringe",
    material: "750 Gelbgold",
    kurz: "Tropfenförmige Ohrringe in Gelbgold.",
    beschreibung:
      "Ein Paar sanft geschwungener Ohrringe in warmem Gelbgold – leicht zu tragen und angenehm im Alltag.",
    eigenschaften: [
      { label: "Metall", wert: "750 Gelbgold" },
      { label: "Länge", wert: "18 mm" },
    ],
    bilder: [ohrringePerle],
    gruppe: "schmuck",
  },
  {
    slug: "uhr-classique",
    name: "Uhr Classique",
    kategorie: "Uhren",
    material: "Edelstahl, Milanaiseband",
    kurz: "Klassische Dreizeigeruhr mit Milanaiseband.",
    beschreibung:
      "Eine schlichte Dreizeigeruhr mit klarem Zifferblatt und feinem Milanaiseband – ein ruhiger Begleiter.",
    eigenschaften: [
      { label: "Gehäuse", wert: "Edelstahl, 38 mm" },
      { label: "Werk", wert: "Quarz" },
    ],
    bilder: [uhrChronograph],
    gruppe: "uhren",
  },
  {
    slug: "trauringe-quiete",
    name: "Trauringe Quiete",
    kategorie: "Trauringe",
    material: "950 Platin",
    kurz: "Ruhiges Trauringpaar in Platin.",
    beschreibung:
      "Ein zurückhaltendes Trauringpaar aus Platin. Klare Kanten, angenehmer Tragekomfort.",
    eigenschaften: [
      { label: "Metall", wert: "950 Platin" },
      { label: "Breite", wert: "3,0 mm" },
    ],
    bilder: [trauringe],
    gruppe: "trauringe",
  },
  {
    slug: "trauringe-legame",
    name: "Trauringe Legame",
    kategorie: "Trauringe",
    material: "585 Gelbgold",
    kurz: "Warme Trauringe in klassischem Gelbgold.",
    beschreibung:
      "Ein Paar Trauringe in warmem Gelbgold mit weichem Profil – zeitlos und angenehm zu tragen.",
    eigenschaften: [
      { label: "Metall", wert: "585 Gelbgold" },
      { label: "Breite", wert: "4,0 mm" },
    ],
    bilder: [trauringe],
    gruppe: "trauringe",
  },
];

export const findProdukt = (slug: string) => produkte.find((p) => p.slug === slug);

export const featuredSlugs = [
  "solitaerring-aurum",
  "chronograph-heritage",
  "kette-aurora",
  "trauringset-unio",
  "perlenstecker-luna",
  "armband-linea",
];

export const featured = featuredSlugs
  .map((s) => produkte.find((p) => p.slug === s))
  .filter((p): p is Produkt => Boolean(p));
