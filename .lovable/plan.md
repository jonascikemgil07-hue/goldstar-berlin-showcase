# Juwelier Gold & Star – Umsetzung „Modern-editorial"

Umsetzung ausschließlich Frontend mit lokalen Mock-Daten. Kein Backend, kein Warenkorb, kein Kontaktformular-Backend.

## Designsystem (in `src/styles.css`)

- Grundton: `ivory #FAF9F6`
- Text/Navigation: `anthracite #1C1C1C`
- Akzent: `gold #B68D40`, `gold-muted #D4C4A8`
- Serifenschrift für Überschriften: Playfair Display
- Sans-Serif für Fließtext/Navigation: Inter
- Fonts via `<link>` im Root-Head laden
- Semantische Tokens (`--background`, `--foreground`, `--primary`, `--accent`, `--border`, `--muted`) auf diese Werte mappen, damit alle shadcn-Komponenten passen
- Feine Linien (`border-anthracite/5`), großzügige Abstände, dezente Hover-States (Farbwechsel zu gold, langsame `duration-500/700`)

## Routen (TanStack Start, `src/routes/`)

- `index.tsx` – Startseite (Placeholder ersetzen)
- `schmuck.tsx` – Produktübersicht mit Filter-Chips (Kategorie-Filter über lokalen State)
- `uhren.tsx` – Übersicht (gleiches Layout, andere Mock-Daten)
- `trauringe.tsx` – Übersicht
- `services.tsx` – Serviceübersicht
- `ueber-uns.tsx` – Über uns
- `kontakt.tsx` – Kontaktseite mit Adresse, Öffnungszeiten, Karten-Platzhalter
- `produkt.$slug.tsx` – Produktdetailseite
- `impressum.tsx`, `datenschutz.tsx` – Rechtstexte als Platzhalter
- `__root.tsx` – Head-Metadaten (Titel, Description, og:*), globale Navigation + Footer um `<Outlet />`

Jede Route erhält eigenes `head()` mit deutschem Titel und Description.

## Komponenten (`src/components/`)

- `SiteHeader.tsx` – Sticky Nav, Logo „Gold & Star" (Serif + Gold-`&`), Desktop-Links, mobiles Sheet-Menü (shadcn `Sheet`), CTA „Besuch planen"
- `SiteFooter.tsx` – 3-Spalten-Footer (Marke, Geschäft/Adresse, Kontakt) + rechtliche Links
- `SectionHeading.tsx` – Eyebrow (uppercase, gold) + Serif-Titel
- `ProductCard.tsx` – Bild (aspect-square, langsame Zoom-Hover), Name (Serif), Kategorie/Material (uppercase klein), „Details ansehen"
- `CategoryTile.tsx` – Große Bildfläche mit ruhigem Overlay-Titel
- `ServiceCard.tsx` – Nummer + Titel + kurzer Text, feine Linie oben
- `TrustStrip.tsx` – 4 Punkte, gold Eyebrow + Label
- `ContactCTA.tsx` – Dunkler Abschnitt mit zwei Buttons
- `VisitBlock.tsx` – Adresse, Öffnungszeiten, Telefon, E-Mail, Karten-Platzhalter, Buttons „Route planen" / „Kontakt aufnehmen"
- `FilterChips.tsx` – Kategorie-Filter (lokaler State)
- `Button`-Varianten über shadcn: `default` (anthrazit), `outline` (feiner Rahmen), `ghost`

## Mock-Daten (`src/data/`)

- `products.ts` – ~14 Produkte mit `slug`, `name`, `kategorie` (Ringe, Halsketten, Armbänder, Ohrringe, Uhren, Trauringe), `material`, `beschreibung`, `bilder[]`, `eigenschaften[]`, `preisHinweis: "Preis auf Anfrage"`
- `services.ts` – Schmuckservice, Uhrenservice, Gravuren, Beratung
- `shop.ts` – Adresse, Öffnungszeiten, Telefon, E-Mail als Platzhalter (deutlich als vorläufig kommentiert)

## Bilder

- ~10 hochwertige Bilder via `imagegen--generate_image` (fast) generieren und unter `src/assets/` ablegen:
  - Hero (Vitrine/Interieur), 6 Produkte, 3 Kategorie-Tiles, Ladeninterieur/Werkbank für Über-uns, Karten-Platzhalter
- Alle Bilder mit deutschem Alt-Text, warme neutrale Cream/Anthrazit-Ästhetik, keine anonymen Model-Portraits

## Startseite (Reihenfolge)

1. Hero mit Serif-Headline und zwei CTAs
2. Trust-Strip (4 Punkte)
3. Ausgewählte Produkte (6 Karten in 3er-Grid)
4. Kategorien (3 hohe Bildkacheln → verlinken auf `/schmuck`, `/uhren`, `/trauringe`)
5. Services-Teaser (4 Karten → Link auf `/services`)
6. Über den Juwelier (Bild + kurzer Text → Link auf `/ueber-uns`)
7. Besuch & Kontakt (`VisitBlock`)
8. Abschluss-CTA (dunkel)

## Produktübersicht (`/schmuck`, `/uhren`, `/trauringe`)

- Seitenüberschrift, kurzer Intro-Text
- `FilterChips` (bei `/schmuck` nach Unterkategorie; andere Seiten zeigen bereits gefiltertes Set)
- Produkt-Grid (2 Spalten Mobile, 3 Desktop)

## Produktdetailseite (`/produkt/$slug`)

- Große Bildergalerie (Hauptbild + Thumbnails, ohne Warenkorb)
- Name, Kategorie, Material, Beschreibung, Eigenschaften-Liste
- „Verfügbarkeit auf Anfrage"
- Buttons: „Produkt anfragen" (öffnet `mailto:` mit vorbelegtem Betreff), „Im Geschäft ansehen" (Link zu `/kontakt`)
- Abschnitt „Ähnliche Produkte" (3 weitere aus gleicher Kategorie)
- 404 wenn Slug nicht existiert (`notFound()` + `notFoundComponent`)

## Weitere Seiten

- **Services**: 4 Servicebereiche mit ausführlicherem Text, Kontakt-CTA
- **Über uns**: Bild + persönlicher Text (ohne erfundene Zahlen/Jahreszahlen), Werte-Punkte
- **Kontakt**: Adresse, Öffnungszeiten, Telefon, E-Mail, Karten-Platzhalter, „Route planen"-Button (öffnet Google Maps), Hinweis dass kein Onlineshop
- **Impressum / Datenschutz**: klare Platzhaltertexte, Hinweis dass Inhalte zu ergänzen sind

## Responsive

- Mobile-first
- Nav-Sheet auf `<lg`, Hamburger, große Tap-Targets
- Grids: 1 Spalte Mobile, 2 Tablet, 3 Desktop
- Header-Row mit `grid-cols-[minmax(0,1fr)_auto]` + `min-w-0` wo Text neben festen Elementen steht

## Explizit ausgeschlossen

Kein Warenkorb, kein Checkout, keine Preise mit Rabatt, keine Countdowns, keine Bewertungen, keine erfundenen Auszeichnungen/Jahreszahlen/Familiengeschichte, kein pures Schwarz, keine Goldverläufe, kein Glassmorphism, keine Slideshow, kein echtes Kontaktformular.
