export type Kategorie = {
  slug: string;
  name: string;
  eyebrow: string;
  kurz: string;
  intro: string;
  // 1-stellige Nummer, wird mit A–H kombiniert (z. B. "1A")
  codePrefix: string;
  bildAnzahl: number;
  tileCode: string; // Platzhalter-Code für die Übersichtskachel
};

export const kategorien: Kategorie[] = [
  {
    slug: "ringe",
    name: "Ringe",
    eyebrow: "Kategorie 01",
    kurz: "Solitäre, Verlobungsringe, Vorsteckringe und mehr.",
    intro:
      "Klassische und moderne Ringe in Gelbgold, Weißgold, Roségold und Silber – gefasst mit oder ohne Stein. Eine Auswahl aus unserem Sortiment; für die vollständige Auslage besuchen Sie uns gern im Geschäft.",
    codePrefix: "1",
    bildAnzahl: 8,
    tileCode: "1T",
  },
  {
    slug: "ketten",
    name: "Ketten",
    eyebrow: "Kategorie 02",
    kurz: "Ankerketten, Panzerketten, Colliers und Anhänger.",
    intro:
      "Von der feinen Alltagskette bis zum kräftigen Statementstück – in verschiedenen Längen, Materialien und Verschlussarten. Anhänger können individuell kombiniert werden.",
    codePrefix: "2",
    bildAnzahl: 8,
    tileCode: "2T",
  },
  {
    slug: "armreifen",
    name: "Armreifen & Armbänder",
    eyebrow: "Kategorie 03",
    kurz: "Feste Armreifen, gliederige Armbänder, Tennisarmbänder.",
    intro:
      "Ausgewählte Armreifen und Armbänder in unterschiedlichen Weiten und Ausführungen. Auf Wunsch passen wir das Stück an Ihre Handgelenkgröße an.",
    codePrefix: "3",
    bildAnzahl: 8,
    tileCode: "3T",
  },
  {
    slug: "ohrringe",
    name: "Ohrringe",
    eyebrow: "Kategorie 04",
    kurz: "Ohrstecker, Creolen und Hänger.",
    intro:
      "Ohrstecker, Creolen und Hänger – klassisch mit Perle oder Stein, ebenso wie zeitgemäß-schlicht. Wir helfen bei der Auswahl, was zu Ihrem Stil passt.",
    codePrefix: "4",
    bildAnzahl: 8,
    tileCode: "4T",
  },
  {
    slug: "uhren",
    name: "Uhren",
    eyebrow: "Kategorie 05",
    kurz: "Damen- und Herrenuhren, Quarz und Automatik.",
    intro:
      "Klassische Damen- und Herrenuhren in Quarz- und Automatikausführung. Für Bandanpassungen, Batteriewechsel und Wartungen sind wir vor Ort für Sie da.",
    codePrefix: "5",
    bildAnzahl: 8,
    tileCode: "5T",
  },
  {
    slug: "trauringe",
    name: "Trauringe",
    eyebrow: "Kategorie 06",
    kurz: "Trauringe in Gelbgold, Weißgold, Roségold und Platin.",
    intro:
      "Trauringe wählt man nicht in fünf Minuten. In Ruhe zeigen wir Ihnen unterschiedliche Materialien, Oberflächen und Breiten – Gravuren fertigen wir direkt bei uns im Haus.",
    codePrefix: "6",
    bildAnzahl: 8,
    tileCode: "6T",
  },
];

export const findKategorie = (slug: string) =>
  kategorien.find((k) => k.slug === slug);
