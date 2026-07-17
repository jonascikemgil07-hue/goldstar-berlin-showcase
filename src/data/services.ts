export type Leistung = {
  bezeichnung: string;
  preis: string;
  hinweis?: string;
};

export type Service = {
  nummer: string;
  titel: string;
  kurz: string;
  beschreibung: string;
  leistungen: Leistung[];
  preisHinweis?: string;
};

// Preise sind Richtwerte – vor Veröffentlichung zu bestätigen.
// „Reparaturen und Wartung von Schmuck sind bei uns kostenlos."
export const services: Service[] = [
  {
    nummer: "01",
    titel: "Schmuckservice",
    kurz: "Reinigung, Aufarbeitung, Reparatur",
    beschreibung:
      "Wir prüfen, reinigen und arbeiten Ihre Schmuckstücke sorgfältig auf – von der Kettenreparatur bis zur Neufassung eines Steins.",
    preisHinweis:
      "Reparaturen und Wartung von Schmuck sind bei uns grundsätzlich kostenlos.",
    leistungen: [
      { bezeichnung: "Ultraschall-Reinigung", preis: "kostenlos" },
      { bezeichnung: "Prüfung & Sichtkontrolle", preis: "kostenlos" },
      { bezeichnung: "Kettenreparatur (Öse, Verschluss)", preis: "kostenlos" },
      { bezeichnung: "Löten von Ketten & Ringen", preis: "kostenlos" },
      { bezeichnung: "Ringgröße ändern", preis: "auf Anfrage" },
      { bezeichnung: "Neufassung eines Steins", preis: "auf Anfrage" },
      { bezeichnung: "Umarbeitung Altschmuck", preis: "auf Anfrage" },
    ],
  },
  {
    nummer: "02",
    titel: "Uhrenservice",
    kurz: "Wartung und Batteriewechsel",
    beschreibung:
      "Batteriewechsel, Bandanpassung und Wartungsarbeiten für Quarz- und Automatikuhren – in Ruhe und mit Sorgfalt.",
    preisHinweis: ".",
    leistungen: [
      { bezeichnung: "Batteriewechsel (Standard)", preis: "auf Anfrage" },
      { bezeichnung: "Bandkürzung Metallband", preis: "auf Anfrage" },
      { bezeichnung: "Lederband Wechsel", preis: "auf Anfrage" },
      { bezeichnung: "Wartung Quarzuhr", preis: "auf Anfrage" },
      { bezeichnung: "Wartung Automatikuhr", preis: "auf Anfrage" },
      { bezeichnung: "Glasersatz", preis: "auf Anfrage" },
    ],
  },
  {
    nummer: "03",
    titel: "Gravuren",
    kurz: "Individuelle Personalisierung",
    beschreibung:
      "Trauringe, Anhänger oder Uhren – wir gravieren Ihre persönlichen Worte, Daten oder Symbole direkt bei uns im Haus.",
    preisHinweis: "Preis nach Zeichenanzahl und Material.",
    leistungen: [
      { bezeichnung: "Innengravur Ring (Text/Datum)", preis: "auf Anfrage" },
      { bezeichnung: "Anhänger-Gravur", preis: "auf Anfrage" },
      { bezeichnung: "Uhrengravur (Boden)", preis: "auf Anfrage" },
      { bezeichnung: "Handschrift-Gravur", preis: "auf Anfrage" },
      { bezeichnung: "Symbol- oder Motivgravur", preis: "auf Anfrage" },
    ],
  },
  {
    nummer: "04",
    titel: "Persönliche Beratung",
    kurz: "Termin nach Vereinbarung",
    beschreibung:
      "Für Trauringe, besondere Geschenke oder Anfertigungen nehmen wir uns in aller Ruhe Zeit für Sie – gerne nach Terminvereinbarung.",
    preisHinweis: "Unsere Beratung ist immer unverbindlich und kostenfrei.",
    leistungen: [
      { bezeichnung: "Beratungstermin im Geschäft", preis: "kostenlos" },
      { bezeichnung: "Trauring-Beratung", preis: "kostenlos" },
      { bezeichnung: "Anfertigungsberatung", preis: "kostenlos" },
      { bezeichnung: "Wertermittlung Altgold", preis: "kostenlos" },
    ],
  },
];
