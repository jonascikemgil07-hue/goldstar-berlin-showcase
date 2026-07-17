import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { SectionHeading } from "@/components/section-heading";
import { CategoryTile } from "@/components/category-tile";
import { ServiceCard } from "@/components/service-card";
import { TrustStrip } from "@/components/trust-strip";
import { VisitBlock } from "@/components/visit-block";
import { ContactCTA } from "@/components/contact-cta";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Reveal } from "@/components/reveal";
import { Ornament } from "@/components/ornament";
import { Marquee } from "@/components/marquee";
import { MagneticButton } from "@/components/magnetic-button";
import { Spotlight } from "@/components/spotlight";
import { KineticHeading } from "@/components/kinetic-heading";

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

function useParallax() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return y;
}

function Index() {
  const scrollY = useParallax();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Große Serifen-Watermark im Hintergrund */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-8 right-[-4%] select-none font-serif text-[22vw] italic leading-none text-anthracite/[0.04] md:text-[16vw]"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        >
          Gold&amp;Star
        </span>

        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="relative lg:col-span-6">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
                Juwelier · Berlin-Reinickendorf
              </p>
            </div>

            <KineticHeading
              as="h1"
              text="Schmuck, Uhren und persönliche Beratung in Berlin"
              highlight="persönliche"
              className="text-4xl leading-[1.08] text-anthracite sm:text-5xl lg:text-6xl xl:text-[68px]"
            />

            <Reveal delay={600} y={12}>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-anthracite/75 md:text-lg">
                In unserem Geschäft in der Residenzstraße 47–48 zeigen wir Ihnen in Ruhe
                ausgewählten Schmuck, feine Uhren und Trauringe – mit der Zeit und der
                Beratung, die Ihre Entscheidung verdient.
              </p>
            </Reveal>

            <Reveal delay={800} y={8}>
              <div className="mt-10 flex flex-wrap gap-3">
                <MagneticButton to="/sortiment" variant="solid">
                  Sortiment entdecken
                </MagneticButton>
                <MagneticButton to="/kontakt" variant="outline">
                  Besuch planen
                </MagneticButton>
              </div>
            </Reveal>

            {/* Mini-Meta unter den CTAs */}
            <Reveal delay={950}>
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-anthracite/10 pt-6 text-[11px] uppercase tracking-[0.2em] text-anthracite/55">
                <div>
                  <p className="text-gold">Adresse</p>
                  <p className="mt-2 normal-case tracking-normal text-anthracite/75">
                    Residenzstr. 47–48
                  </p>
                </div>
                <div>
                  <p className="text-gold">Heute</p>
                  <p className="mt-2 normal-case tracking-normal text-anthracite/75">
                    10:30 – 17:00
                  </p>
                </div>
                <div>
                  <p className="text-gold">Telefon</p>
                  <p className="mt-2 normal-case tracking-normal text-anthracite/75">
                    0179 79 73 549
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="relative lg:col-span-6" delay={200} y={40}>
            <div
              className="relative"
              style={{ transform: `translateY(${Math.min(scrollY * -0.06, 0)}px)` }}
            >
              <Spotlight className="photo-frame">
                <PhotoPlaceholder code="0A" aspect="portrait" label="Ladenansicht" />
              </Spotlight>

              {/* Overlay-Karte */}
              <div className="absolute -bottom-4 -left-4 hidden max-w-[240px] border border-anthracite/10 bg-ivory p-6 shadow-[0_24px_60px_-32px_rgba(28,28,28,0.35)] md:block md:-bottom-8 md:-left-8">
                <p className="eyebrow mb-2">Seit vielen Jahren</p>
                <p className="font-serif text-lg italic leading-snug text-anthracite">
                  Vertrauen. Beratung. Handwerk.
                </p>
                <div className="dotted-gold mt-4 w-full" />
              </div>

              {/* Kleines vertikales Label */}
              <div className="pointer-events-none absolute -right-3 top-6 hidden origin-top-right rotate-90 md:block">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-anthracite/40">
                  Est. Berlin · No. 001
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Editorial-Ticker */}
      <Marquee
        speed={50}
        items={[
          "Persönliche Beratung im Ladengeschäft",
          "Reparatur & Wartung von Schmuck – bei uns kostenlos",
          "Trauringgravur direkt bei uns im Haus",
          "Reparatur & Wartung von Uhren",
          "Ohrlochstechen mit medizinischen Studex-Systemen",
          "Schmuckänderungen · Ringgröße · Kettenkürzung",
          "Ankauf von Altgold zu tagesaktuellen Preisen",
        ]}
      />

      <TrustStrip />

      {/* Categories */}
      <section className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-5 top-16 select-none font-serif text-[120px] italic leading-none text-anthracite/[0.05] md:right-8 md:text-[200px]"
        >
          01
        </span>

        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Kategorien"
            title="Was Sie bei uns finden"
            intro="Von zeitlosem Schmuck über klassische Uhren bis hin zu Trauringen – jede Kategorie mit einer eigenen Fotogalerie."
          />
          <Link
            to="/sortiment"
            className="story-link border-b border-gold pb-1 text-[11px] uppercase tracking-[0.22em] text-anthracite hover:text-gold"
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

      <Ornament className="mx-auto max-w-7xl px-5 pb-4 md:px-8" label="Handwerk seit vielen Jahren" />

      {/* Services */}
      <section className="relative bg-ivory-dark/40 py-24 md:py-32">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-5 top-16 select-none font-serif text-[120px] italic leading-none text-anthracite/[0.05] md:left-8 md:text-[200px]"
        >
          02
        </span>
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
              className="story-link border-b border-gold pb-1 text-[11px] uppercase tracking-[0.22em] text-anthracite hover:text-gold"
            >
              Alle Services ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-5 top-20 select-none font-serif text-[120px] italic leading-none text-anthracite/[0.05] md:right-8 md:text-[200px]"
        >
          03
        </span>
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <Spotlight className="photo-frame">
              <PhotoPlaceholder code="0B" aspect="landscape" label="Werkbank / Beratung" />
            </Spotlight>
          </Reveal>
          <div>
            <p className="eyebrow mb-5">Über den Juwelier</p>
            <h2 className="text-3xl leading-tight text-anthracite md:text-4xl lg:text-5xl">
              Ein Fachgeschäft, das zuhört, <em className="text-gold">bevor</em> es zeigt.
            </h2>
            <div className="dotted-gold mt-8 w-24" />
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
            <blockquote className="mt-10 border-l-2 border-gold pl-5 font-serif text-xl italic leading-snug text-anthracite/85 md:text-2xl">
              „Ein gutes Schmuckstück erzählt eine Geschichte – wir helfen Ihnen,
              die richtige zu finden."
            </blockquote>
            <div className="mt-10">
              <MagneticButton to="/ueber-uns" variant="outline">
                Mehr über uns
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <VisitBlock />
      <ContactCTA />
    </>
  );
}
