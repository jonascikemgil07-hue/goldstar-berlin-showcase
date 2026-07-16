import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ServiceCard } from "@/components/service-card";
import { ContactCTA } from "@/components/contact-cta";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services – Juwelier Gold & Star, Berlin-Reinickendorf" },
      {
        name: "description",
        content:
          "Schmuckservice, Uhrenservice, Gravuren und persönliche Beratung – unsere Leistungen im Überblick.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Was wir für Sie tun"
        intro="Neben dem Verkauf begleiten wir Ihre Schmuckstücke und Uhren auch nach dem Kauf – mit Sorgfalt und Erfahrung."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.nummer} service={s} />
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
