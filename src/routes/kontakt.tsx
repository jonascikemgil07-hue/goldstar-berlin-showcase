import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { VisitBlock } from "@/components/visit-block";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Juwelier Gold & Star, Berlin-Reinickendorf" },
      {
        name: "description",
        content:
          "Adresse, Öffnungszeiten und Kontakt zu Juwelier Gold & Star in Berlin-Reinickendorf.",
      },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Wir freuen uns auf Ihren Besuch"
        intro="Rufen Sie uns an, schreiben Sie uns eine E-Mail oder kommen Sie direkt vorbei. Ein Onlineshop ist bewusst nicht Teil unseres Angebots – die Beratung geschieht bei uns im Geschäft."
      />
      <VisitBlock />
    </>
  );
}
