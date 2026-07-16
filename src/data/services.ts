export type Service = {
  nummer: string;
  titel: string;
  kurz: string;
  beschreibung: string;
};

// Platzhalter-Beschreibungen – vor Veröffentlichung zu bestätigen.
export const services: Service[] = [
  {
    nummer: "01",
    titel: "Schmuckservice",
    kurz: "Reinigung, Aufarbeitung, Reparatur",
    beschreibung:
      "Wir prüfen, reinigen und arbeiten Ihre Schmuckstücke sorgfältig auf – von der Kettenreparatur bis zur Neufassung eines Steins.",
  },
  {
    nummer: "02",
    titel: "Uhrenservice",
    kurz: "Wartung und Batteriewechsel",
    beschreibung:
      "Batteriewechsel, Bandanpassung und Wartungsarbeiten für Quarz- und Automatikuhren – in Ruhe und mit Sorgfalt.",
  },
  {
    nummer: "03",
    titel: "Gravuren",
    kurz: "Individuelle Personalisierung",
    beschreibung:
      "Trauringe, Anhänger oder Uhren – wir gravieren Ihre persönlichen Worte, Daten oder Symbole direkt bei uns im Haus.",
  },
  {
    nummer: "04",
    titel: "Persönliche Beratung",
    kurz: "Termin nach Vereinbarung",
    beschreibung:
      "Für Trauringe, besondere Geschenke oder Anfertigungen nehmen wir uns in aller Ruhe Zeit für Sie – gerne nach Terminvereinbarung.",
  },
];
