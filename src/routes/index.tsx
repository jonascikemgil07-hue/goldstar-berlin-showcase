import { createFileRoute, Link } from "@tanstack/react-router";

import { SectionHeading } from "@/components/section-heading";
import { CategoryTile } from "@/components/category-tile";
import { ServiceCard } from "@/components/service-card";
import { TrustStrip } from "@/components/trust-strip";
import { VisitBlock } from "@/components/visit-block";
import { ContactCTA } from "@/components/contact-cta";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Reveal } from "@/components/reveal";

import { services } from "@/data/services";
import { kategorien } from "@/data/categories";

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
          "Ausgewählter Schmuck, feine Uhren und Trauringe mit persönlicher Beratung. Ihr Juwelier in der Residenzstraße 47–48, Berlin-Reinickendorf.",
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
          <div className="lg:col-span-6 animate-fade-up">
            <p className="eyebrow mb-6">Juwelier in Berlin-Reinickendorf</p>
            <h1 className="text-4xl leading-[1.08] text-anthracite sm:text-5xl lg:text-6xl xl:text-7xl">
              Schmuck, Uhren und <em className="text-gold">persönliche</em> Beratung in Berlin
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-anthracite/75 md:text-lg">
              In unserem Geschäft in der Residenzstraße 47–48 zeigen wir Ihnen in Ruhe
              ausgewählten Schmuck, feine Uhren und Trauringe – mit der Zeit und der
              Beratung, die Ihre Entscheidung verdient.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/sortiment"
                className="border border-anthracite bg-anthracite px-7 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-ivory transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-gold hover:border-gold hover:shadow-[0_16px_32px_-20px_rgba(182,141,64,0.7)]"
              >
                Sortiment entdecken
              </Link>
              <Link
                to="/kontakt"
                className="border border-anthracite/20 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-anthracite transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                Besuch planen
              </Link>
            </div>
          </div>

          <Reveal className="relative lg:col-span-6" delay={150} y={32}>
            <PhotoPlaceholder code="0A" aspect="portrait" label="Ladenansicht" />
            <div className="absolute -bottom-4 -left-4 hidden max-w-[220px] border border-anthracite/10 bg-ivory p-6 md:block md:-bottom-8 md:-left-8">
              <p className="eyebrow mb-2">Seit vielen Jahren</p>
              <p className="font-serif text-lg italic leading-snug text-anthracite">
                Vertrauen. Beratung. Handwerk.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <TrustStrip />

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Kategorien"
            title="Was Sie bei uns finden"
            intro="Von zeitlosem Schmuck über klassische Uhren bis hin zu Trauringen – jede Kategorie mit einer eigenen Fotogalerie."
          />
          <Link
            to="/sortiment"
            className="border-b border-gold pb-1 text-[11px] uppercase tracking-[0.22em] text-anthracite hover:text-gold"
          >
            Zum gesamten Sortiment
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kategorien.map((k, i) => (
            <Reveal key={k.slug} delay={i * 90}>
              <CategoryTile
                slug={k.slug}
                label={k.name}
                eyebrow={k.eyebrow}
                code={k.tileCode}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-ivory-dark/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_2fr] lg:gap-20">
            <SectionHeading
              eyebrow="Services"
              title="Was wir für Sie tun"
              intro="Neben Beratung und Verkauf begleiten wir Ihre Schmuckstücke und Uhren auch über Jahre hinweg."
            />
            <div className="grid gap-10 sm:grid-cols-2">
              {services.map((s, i) => (
                <Reveal key={s.nummer} delay={i * 90}>
                  <ServiceCard service={s} />
                </Reveal>
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
        </div>
      </section>

      {/* About */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-2 lg:items-center lg:gap-20">
          <PhotoPlaceholder code="0B" aspect="landscape" label="Werkbank / Beratung" />
          <div>
            <p className="eyebrow mb-5">Über den Juwelier</p>
            <h2 className="text-3xl leading-tight text-anthracite md:text-4xl">
              Ein Fachgeschäft, das zuhört, bevor es zeigt.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-anthracite/75">
              <p>
                Bei Gold &amp; Star nehmen wir uns Zeit, Ihre Wünsche zu verstehen.
                Ob Verlobungsring, kleines Geschenk oder die Wartung eines vertrauten
                Stücks – jeder Kunde wird bei uns persönlich beraten.
              </p>
              <p>
                Kein anonymer Onlineshop, sondern ein Ort mit Gesicht. Wir freuen uns,
                wenn Sie zu uns finden.
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
