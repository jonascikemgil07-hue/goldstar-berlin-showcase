import { createFileRoute, Link } from "@tanstack/react-router";
import heroAtelier from "@/assets/hero-atelier.jpg";
import kategorieSchmuck from "@/assets/kategorie-schmuck.jpg";
import kategorieUhren from "@/assets/kategorie-uhren.jpg";
import kategorieTrauringe from "@/assets/kategorie-trauringe.jpg";
import ueberUnsBild from "@/assets/ueber-uns-werkbank.jpg";

import { SectionHeading } from "@/components/section-heading";
import { ProductCard } from "@/components/product-card";
import { CategoryTile } from "@/components/category-tile";
import { ServiceCard } from "@/components/service-card";
import { TrustStrip } from "@/components/trust-strip";
import { VisitBlock } from "@/components/visit-block";
import { ContactCTA } from "@/components/contact-cta";

import { featured } from "@/data/products";
import { services } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Juwelier Gold & Star – Schmuck, Uhren und Trauringe in Berlin-Reinickendorf",
      },
      {
        name: "description",
        content:
          "Ausgewählter Schmuck, feine Uhren und Trauringe mit persönlicher Beratung. Ihr Juwelier vor Ort in Berlin-Reinickendorf.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-6">Juwelier in Berlin-Reinickendorf</p>
            <h1 className="text-4xl leading-[1.08] text-anthracite sm:text-5xl lg:text-6xl xl:text-7xl">
              Schmuck, Uhren und <em className="text-gold">persönliche</em> Beratung in Berlin
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-anthracite/75 md:text-lg">
              In unserem Geschäft in Reinickendorf zeigen wir Ihnen in Ruhe ausgewählte
              Schmuckstücke, feine Uhren und Trauringe – mit der Zeit und der Beratung, die
              Ihre Entscheidung verdient.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/schmuck"
                className="border border-anthracite bg-anthracite px-7 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-ivory transition-colors hover:bg-gold hover:border-gold"
              >
                Sortiment entdecken
              </Link>
              <Link
                to="/kontakt"
                className="border border-anthracite/20 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-anthracite transition-colors hover:border-gold hover:text-gold"
              >
                Besuch planen
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="aspect-[4/5] overflow-hidden bg-ivory-dark">
              <img
                src={heroAtelier}
                alt="Innenansicht des Juweliergeschäfts Gold & Star"
                width={1600}
                height={1800}
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden max-w-[220px] border border-anthracite/10 bg-ivory p-6 md:block md:-bottom-8 md:-left-8">
              <p className="eyebrow mb-2">Seit vielen Jahren</p>
              <p className="font-serif text-lg italic leading-snug text-anthracite">
                Vertrauen. Beratung. Handwerk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Ausgewählt" title="Besondere Stücke aus unserer Auslage" />
          <Link
            to="/schmuck"
            className="border-b border-gold pb-1 text-[11px] uppercase tracking-[0.22em] text-anthracite hover:text-gold"
          >
            Zum gesamten Sortiment
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} produkt={p} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-ivory-dark/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Kategorien"
            title="Was Sie bei uns finden"
            intro="Von zeitlosem Schmuck über klassische Uhren bis hin zu Trauringen – jedes Stück wählen wir mit Bedacht aus."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <CategoryTile
              label="Schmuck"
              eyebrow="Ringe · Ketten · Ohrringe"
              to="/schmuck"
              image={kategorieSchmuck}
            />
            <CategoryTile
              label="Uhren"
              eyebrow="Klassisch · Automatik · Quarz"
              to="/uhren"
              image={kategorieUhren}
            />
            <CategoryTile
              label="Trauringe"
              eyebrow="Zwei Ringe. Ein Anfang."
              to="/trauringe"
              image={kategorieTrauringe}
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_2fr] lg:gap-20">
          <SectionHeading
            eyebrow="Services"
            title="Was wir für Sie tun"
            intro="Neben der Beratung und dem Verkauf begleiten wir Ihre Schmuckstücke und Uhren auch über Jahre hinweg."
          />
          <div className="grid gap-10 sm:grid-cols-2">
            {services.map((s) => (
              <ServiceCard key={s.nummer} service={s} />
            ))}
          </div>
        </div>
        <div className="mt-14">
          <Link
            to="/services"
            className="border-b border-gold pb-1 text-[11px] uppercase tracking-[0.22em] text-anthracite hover:text-gold"
          >
            Alle Services ansehen
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="bg-ivory-dark/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative aspect-[5/4] overflow-hidden bg-ivory">
            <img
              src={ueberUnsBild}
              alt="Werkbank in unserem Atelier"
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-5">Über den Juwelier</p>
            <h2 className="text-3xl leading-tight text-anthracite md:text-4xl">
              Ein Familienbetrieb, der zuhört, bevor er zeigt.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-anthracite/75">
              <p>
                Bei Gold &amp; Star nehmen wir uns die Zeit, Ihre Wünsche zu verstehen. Ob
                Verlobungsring, kleines Geschenk oder die Wartung eines vertrauten Stücks –
                jeder Kunde wird bei uns persönlich beraten.
              </p>
              <p>
                Kein anonymer Onlineshop, sondern ein Ort mit Gesicht. Wir freuen uns, wenn
                Sie zu uns finden.
              </p>
            </div>
            <div className="mt-10">
              <Link
                to="/ueber-uns"
                className="border border-anthracite/20 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-anthracite transition-colors hover:border-gold hover:text-gold"
              >
                Mehr über uns
              </Link>
            </div>
          </div>
        </div>
      </section>

      <VisitBlock />
      <ContactCTA />
    </>
  );
}
