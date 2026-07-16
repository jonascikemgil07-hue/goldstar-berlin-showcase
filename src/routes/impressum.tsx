import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { shop } from "@/data/shop";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Juwelier Gold & Star" },
      { name: "description", content: "Impressum von Juwelier Gold & Star, Berlin-Reinickendorf." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <div className="space-y-8 text-sm leading-relaxed text-anthracite/80">
          <p className="rounded border border-gold/30 bg-gold/5 p-4 text-anthracite/70">
            Hinweis: Die folgenden Angaben sind Platzhalter und müssen vor Veröffentlichung
            durch den Inhaber ergänzt und rechtlich geprüft werden.
          </p>
          <div>
            <p className="eyebrow mb-3">Angaben gemäß § 5 TMG</p>
            <address className="not-italic">
              {shop.name}<br />
              {shop.strasse}<br />
              {shop.plz} {shop.ort}
            </address>
          </div>
          <div>
            <p className="eyebrow mb-3">Vertreten durch</p>
            <p>Inhaber/in: [Name einfügen]</p>
          </div>
          <div>
            <p className="eyebrow mb-3">Kontakt</p>
            <p>Telefon: {shop.telefon}</p>
            <p>E-Mail: [E-Mail-Adresse einfügen]</p>
          </div>
          <div>
            <p className="eyebrow mb-3">Umsatzsteuer-ID</p>
            <p>[USt-IdNr. einfügen]</p>
          </div>
          <div>
            <p className="eyebrow mb-3">Verantwortlich für den Inhalt</p>
            <p>[Name und Anschrift einfügen]</p>
          </div>
        </div>
      </section>
    </>
  );
}
