import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ProductGrid } from "@/components/product-grid";
import { ContactCTA } from "@/components/contact-cta";
import { produkte } from "@/data/products";

export const Route = createFileRoute("/trauringe")({
  head: () => ({
    meta: [
      { title: "Trauringe – Juwelier Gold & Star, Berlin-Reinickendorf" },
      {
        name: "description",
        content:
          "Trauringe in Gelbgold, Weißgold, Roségold und Platin – individuell beraten und mit Gravur direkt bei uns im Haus.",
      },
    ],
  }),
  component: TrauringePage,
});

function TrauringePage() {
  const items = produkte.filter((p) => p.gruppe === "trauringe");
  return (
    <>
      <PageHeader
        eyebrow="Trauringe"
        title="Zwei Ringe. Ein Anfang."
        intro="Trauringe wählt man nicht in einer Minute. Kommen Sie in Ruhe zu uns – wir nehmen uns die Zeit, die richtige Entscheidung mit Ihnen zu treffen."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <ProductGrid produkte={items} />
      </section>
      <ContactCTA />
    </>
  );
}
