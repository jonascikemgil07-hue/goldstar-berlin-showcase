import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ProductGrid } from "@/components/product-grid";
import { ContactCTA } from "@/components/contact-cta";
import { produkte } from "@/data/products";

export const Route = createFileRoute("/uhren")({
  head: () => ({
    meta: [
      { title: "Uhren – Juwelier Gold & Star, Berlin-Reinickendorf" },
      {
        name: "description",
        content:
          "Klassische Automatik- und Quarzuhren, sorgfältig ausgewählt und mit persönlichem Service. Vor Ort in Berlin-Reinickendorf.",
      },
    ],
  }),
  component: UhrenPage,
});

function UhrenPage() {
  const items = produkte.filter((p) => p.gruppe === "uhren");
  return (
    <>
      <PageHeader
        eyebrow="Uhren"
        title="Feine Uhren, mit Ruhe ausgewählt"
        intro="Automatik- und Quarzuhren aus unserem Sortiment. Sprechen Sie uns für Modelle jenseits der abgebildeten Stücke gerne an."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <ProductGrid produkte={items} />
      </section>
      <ContactCTA />
    </>
  );
}
