import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { findProdukt, produkte } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { shop } from "@/data/shop";

export const Route = createFileRoute("/produkt/$slug")({
  loader: ({ params }) => {
    const produkt = findProdukt(params.slug);
    if (!produkt) throw notFound();
    return { produkt };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Produkt nicht gefunden – Juwelier Gold & Star" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.produkt;
    return {
      meta: [
        { title: `${p.name} – Juwelier Gold & Star` },
        {
          name: "description",
          content: `${p.name} · ${p.material}. ${p.kurz} Verfügbarkeit auf Anfrage bei Juwelier Gold & Star in Berlin-Reinickendorf.`,
        },
      ],
    };
  },
  notFoundComponent: NotFoundProdukt,
  component: ProduktPage,
});

function NotFoundProdukt() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-32 text-center md:px-8">
      <p className="eyebrow mb-6">Produkt nicht gefunden</p>
      <h1 className="text-3xl text-anthracite md:text-4xl">
        Dieses Stück haben wir aktuell nicht im Sortiment.
      </h1>
      <p className="mt-6 text-anthracite/70">
        Vielleicht finden Sie in unserer Auswahl etwas Passendes.
      </p>
      <div className="mt-10 flex justify-center gap-3">
        <Link
          to="/schmuck"
          className="border border-anthracite bg-anthracite px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-ivory hover:bg-gold hover:border-gold"
        >
          Zum Sortiment
        </Link>
      </div>
    </section>
  );
}

function ProduktPage() {
  const { produkt } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const bilder = produkt.bilder;

  const anfrageSubject = encodeURIComponent(`Produktanfrage: ${produkt.name}`);
  const anfrageBody = encodeURIComponent(
    `Guten Tag,\n\nich interessiere mich für folgendes Stück:\n\n${produkt.name} (${produkt.kategorie})\nMaterial: ${produkt.material}\n\nBitte lassen Sie mir Informationen zur Verfügbarkeit zukommen.\n\nVielen Dank\n`,
  );

  const aehnlich = produkte
    .filter((p) => p.slug !== produkt.slug && p.kategorie === produkt.kategorie)
    .slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 md:px-8 md:pt-20">
        <nav className="mb-10 text-[11px] uppercase tracking-[0.22em] text-anthracite/50">
          <Link to="/" className="hover:text-gold">
            Startseite
          </Link>
          <span className="mx-2">/</span>
          <Link
            to={produkt.gruppe === "uhren" ? "/uhren" : produkt.gruppe === "trauringe" ? "/trauringe" : "/schmuck"}
            className="hover:text-gold"
          >
            {produkt.gruppe === "uhren" ? "Uhren" : produkt.gruppe === "trauringe" ? "Trauringe" : "Schmuck"}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-anthracite">{produkt.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="aspect-square overflow-hidden bg-ivory-dark">
              <img
                src={bilder[active]}
                alt={produkt.name}
                className="size-full object-cover"
              />
            </div>
            {bilder.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {bilder.map((b: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`aspect-square overflow-hidden bg-ivory-dark border transition-colors ${
                      i === active ? "border-anthracite" : "border-transparent hover:border-anthracite/30"
                    }`}
                    aria-label={`Bild ${i + 1} anzeigen`}
                  >
                    <img src={b} alt="" className="size-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="eyebrow mb-5">{produkt.kategorie}</p>
            <h1 className="text-3xl leading-tight text-anthracite md:text-5xl">
              {produkt.name}
            </h1>
            <p className="mt-4 text-sm uppercase tracking-[0.22em] text-anthracite/60">
              {produkt.material}
            </p>

            <p className="mt-8 text-base leading-relaxed text-anthracite/80">
              {produkt.beschreibung}
            </p>

            <dl className="mt-10 divide-y divide-anthracite/10 border-y border-anthracite/10">
              {produkt.eigenschaften.map((e: { label: string; wert: string }) => (
                <div key={e.label} className="grid grid-cols-[140px_1fr] gap-4 py-3 text-sm">
                  <dt className="text-anthracite/50 uppercase tracking-[0.18em] text-[11px]">
                    {e.label}
                  </dt>
                  <dd className="text-anthracite">{e.wert}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-sm italic text-anthracite/70">
              Verfügbarkeit auf Anfrage – Preis auf Anfrage.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${shop.email}?subject=${anfrageSubject}&body=${anfrageBody}`}
                className="border border-anthracite bg-anthracite px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-gold hover:border-gold"
              >
                Produkt anfragen
              </a>
              <Link
                to="/kontakt"
                className="border border-anthracite/20 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-anthracite transition-colors hover:border-gold hover:text-gold"
              >
                Im Geschäft ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {aehnlich.length > 0 && (
        <section className="border-t border-anthracite/10 bg-ivory-dark/40">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
            <p className="eyebrow mb-4">Passt dazu</p>
            <h2 className="text-3xl text-anthracite md:text-4xl">Ähnliche Stücke</h2>
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {aehnlich.map((p) => (
                <ProductCard key={p.slug} produkt={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
