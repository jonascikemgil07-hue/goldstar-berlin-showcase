import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ContactCTA } from "@/components/contact-cta";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { findKategorie, kategorien } from "@/data/categories";

export const Route = createFileRoute("/kategorie/$slug")({
  loader: ({ params }) => {
    const kategorie = findKategorie(params.slug);
    if (!kategorie) throw notFound();
    return { kategorie };
  },
  head: ({ loaderData }) => {
    const k = loaderData?.kategorie;
    return {
      meta: [
        {
          title: k
            ? `${k.name} – Juwelier Gold & Star, Berlin-Reinickendorf`
            : "Kategorie – Juwelier Gold & Star",
        },
        {
          name: "description",
          content: k?.kurz ?? "Sortiment bei Juwelier Gold & Star in Berlin.",
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-32 text-center">
      <p className="eyebrow mb-6">Nicht gefunden</p>
      <h1 className="text-3xl text-anthracite">Diese Kategorie kennen wir nicht.</h1>
      <Link
        to="/sortiment"
        className="mt-8 inline-block border-b border-gold pb-1 text-[11px] uppercase tracking-[0.22em]"
      >
        Zurück zum Sortiment
      </Link>
    </div>
  ),
  component: KategoriePage,
});

const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"] as const;

function KategoriePage() {
  const { kategorie } = Route.useLoaderData();
  const bilder = Array.from({ length: kategorie.bildAnzahl }, (_, i) => ({
    code: `${kategorie.codePrefix}${LETTERS[i] ?? i + 1}`,
    label: `${kategorie.name} · Beispiel`,
  }));

  const weitere = kategorien.filter((k) => k.slug !== kategorie.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={kategorie.eyebrow}
        title={kategorie.name}
        intro={kategorie.intro}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
          <p className="eyebrow">Auswahl aus dem Sortiment</p>
          <p className="text-xs text-anthracite/50">
            {kategorie.bildAnzahl} Beispielbilder · Fotos folgen
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {bilder.map((b) => (
            <PhotoPlaceholder
              key={b.code}
              code={b.code}
              aspect="square"
              label={b.label}
            />
          ))}
        </div>

        <div className="mt-16 border-t border-anthracite/10 pt-10 text-center">
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-anthracite/70">
            Sie interessieren sich für ein bestimmtes Stück? Kommen Sie in unser
            Geschäft in Berlin-Reinickendorf – wir zeigen Ihnen unser vollständiges
            Sortiment gerne persönlich.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/kontakt"
              className="border border-anthracite bg-anthracite px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-gold hover:border-gold"
            >
              Besuch planen
            </Link>
            <Link
              to="/sortiment"
              className="border border-anthracite/20 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-anthracite transition-colors hover:border-gold hover:text-gold"
            >
              Weitere Kategorien
            </Link>
          </div>
        </div>
      </section>

      {/* Weitere Kategorien */}
      <section className="bg-ivory-dark/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-8">Weitere Kategorien</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {weitere.map((k) => (
              <Link
                key={k.slug}
                to="/kategorie/$slug"
                params={{ slug: k.slug }}
                className="group flex items-center justify-between border border-anthracite/10 bg-ivory px-6 py-6 transition-colors hover:border-gold"
              >
                <div>
                  <p className="eyebrow mb-2">{k.eyebrow}</p>
                  <p className="font-serif text-xl text-anthracite">{k.name}</p>
                </div>
                <span className="text-gold transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
