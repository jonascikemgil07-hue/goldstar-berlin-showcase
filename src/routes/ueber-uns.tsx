import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ContactCTA } from "@/components/contact-cta";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns – Juwelier Gold & Star, Berlin-Reinickendorf" },
      {
        name: "description",
        content:
          "Ein lokaler Familienbetrieb in Berlin-Reinickendorf. Persönliche Beratung, Handwerk und Vertrauen.",
      },
    ],
  }),
  component: UeberUnsPage,
});

function UeberUnsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Über uns"
        title="Ein Ort mit Gesicht"
        intro="\n"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <PhotoPlaceholder code="0D" aspect="portrait" label="Ladeninneres / Team" />
          <div className="space-y-6 text-base leading-relaxed text-anthracite/80">
            <p>
              Bei Juwelier Gold &amp; Star nehmen wir uns Zeit. Für Sie, für Ihre Wünsche und für
              jedes Stück, das durch unsere Hände geht.
            </p>
            <p>
              Ob Sie einen Verlobungsring suchen, eine Uhr überholen lassen möchten oder ein
              Erbstück wieder tragbar machen wollen – wir hören zu, bevor wir beraten.
            </p>
            <p>
              Wir sind bewusst kein Onlineshop. Der Wert eines Schmuckstücks entsteht im
              Gespräch, im Ausprobieren, im gemeinsamen Blick. Wir freuen uns darauf, Sie in
              unserem Geschäft in Reinickendorf zu begrüßen.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-anthracite/10 pt-8">
              <div>
                <p className="eyebrow mb-2">Beratung</p>
                <p className="font-serif text-xl text-anthracite">In Ruhe, ohne Druck</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Handwerk</p>
                <p className="font-serif text-xl text-anthracite">Service im Haus</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Standort</p>
                <p className="font-serif text-xl text-anthracite">Berlin-Reinickendorf</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Auswahl</p>
                <p className="font-serif text-xl text-anthracite">Kuratiert, nicht endlos</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
