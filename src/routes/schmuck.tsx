import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ProductGrid } from "@/components/product-grid";
import { ContactCTA } from "@/components/contact-cta";
import { produkte } from "@/data/products";

export const Route = createFileRoute("/schmuck")({
  head: () => ({
    meta: [
      { title: "Schmuck – Juwelier Gold & Star, Berlin-Reinickendorf" },
      {
        name: "description",
        content:
          "Ringe, Halsketten, Armbänder und Ohrringe – ausgewählte Schmuckstücke bei Juwelier Gold & Star in Berlin.",
      },
    ],
  }),
  component: SchmuckPage,
});

function SchmuckPage() {
  const items = produkte.filter((p) => p.gruppe === "schmuck");
  return (
    <>
      <PageHeader
        eyebrow="Schmuck"
        title="Ausgewählte Schmuckstücke"
        intro="Eine Auswahl unserer aktuellen Stücke. Bitte besuchen Sie uns für die vollständige Auslage oder fragen Sie ein Stück direkt bei uns an."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <ProductGrid
          produkte={items}
          filterKategorien={["Ringe", "Halsketten", "Armbänder", "Ohrringe"]}
        />
      </section>
      <ContactCTA />
    </>
  );
}
