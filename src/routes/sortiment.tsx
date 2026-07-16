import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { CategoryTile } from "@/components/category-tile";
import { ContactCTA } from "@/components/contact-cta";
import { kategorien } from "@/data/categories";

export const Route = createFileRoute("/sortiment")({
  head: () => ({
    meta: [
      { title: "Sortiment – Juwelier Gold & Star, Berlin-Reinickendorf" },
      {
        name: "description",
        content:
          "Ringe, Ketten, Armreifen, Ohrringe, Uhren und Trauringe – das Sortiment von Juwelier Gold & Star in Berlin-Reinickendorf.",
      },
    ],
  }),
  component: SortimentPage,
});

function SortimentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sortiment"
        title="Was Sie bei uns finden"
        intro="Sechs Kategorien geben einen ersten Eindruck unseres Sortiments. Für die vollständige Auslage besuchen Sie uns gern in Berlin-Reinickendorf."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kategorien.map((k) => (
            <CategoryTile
              key={k.slug}
              slug={k.slug}
              label={k.name}
              eyebrow={k.eyebrow}
              code={k.tileCode}
            />
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
