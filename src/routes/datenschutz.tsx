import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – Juwelier Gold & Star" },
      {
        name: "description",
        content: "Datenschutzhinweise für die Website von Juwelier Gold & Star.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Datenschutz" />
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <div className="space-y-8 text-sm leading-relaxed text-anthracite/80">
          <p className="rounded border border-gold/30 bg-gold/5 p-4 text-anthracite/70">
            Hinweis: Diese Datenschutzerklärung ist ein Platzhalter und muss vor
            Veröffentlichung an die tatsächlichen Verarbeitungsvorgänge angepasst und
            rechtlich geprüft werden.
          </p>
          <div>
            <p className="eyebrow mb-3">Allgemeines</p>
            <p>
              Wir freuen uns über Ihren Besuch auf unserer Website. Der Schutz Ihrer
              persönlichen Daten ist uns ein wichtiges Anliegen. Diese Website erhebt
              standardmäßig nur die Daten, die für den technischen Betrieb erforderlich sind.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Kontaktaufnahme</p>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre Angaben
              ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Ihre Rechte</p>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
