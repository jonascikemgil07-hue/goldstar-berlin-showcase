import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Juwelier Gold & Star" },
      { name: "description", content: "Impressum von Juwelier Gold & Star, Berlin." },
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
          <div>
            <p className="eyebrow mb-3">Anbieter</p>
            <address className="not-italic">
              Juwelier Goldstar Berlin<br />
              Residenzstraße 47-48<br />
              13409 Berlin
            </address>
            <p className="mt-4">Tel: +49 30 49791770</p>
            <p>info@goldstarberlin.com</p>
            <p>www.goldstarberlin.com</p>
          </div>

          <div>
            <p className="eyebrow mb-3">Geschäftsführer</p>
            <p>Corc Cikemgil</p>
          </div>

          <div>
            <p className="eyebrow mb-3">Handelsregister</p>
            <p>HRB Berlin Reinickendorf</p>
          </div>

          <div>
            <p className="eyebrow mb-3">Umsatzsteuer-ID</p>
            <p>DE268743835</p>
          </div>

          <div>
            <p className="eyebrow mb-3">Online-Streitbeilegung</p>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
              (OS) bereit, die Sie hier finden:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noreferrer"
                className="text-gold hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .
            </p>
            <p className="mt-3">
              Wir sind bereit, an einem außergerichtlichen Schlichtungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen. Zuständig ist die Allgemeine
              Verbraucherschlichtungsstelle des Zentrums für Schlichtung e.V.,
              Straßburger Straße 8, 77694 Kehl am Rhein, www.verbraucher-schlichter.de.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3">Rechtliche Hinweise</p>
            <p>
              Obwohl wir uns um Aktualität, Vollständigkeit und Richtigkeit der Inhalte
              unserer Seiten bemühen, können wir hierfür keine Garantie übernehmen. Nach
              § 7 Absatz 1 TDG sind wir als Diensteanbieter für eigene Inhalte auf unseren
              Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
            <p className="mt-3">
              Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder
              Informationen besteht jedoch nicht (§§ 8-10 TDG). Sobald uns Rechtsverstöße
              bekannt werden, werden wir die entsprechenden Inhalte umgehend entfernen.
              Eine dahingehende Haftung wird jedoch erst ab dem Zeitpunkt der Kenntnis
              konkreter Rechtsverletzungen übernommen.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3">Haftung für Links</p>
            <p>
              Unsere Seiten enthalten Links auf externe Webseiten Dritter. Auf die Inhalte
              dieser verlinkten Webseiten haben wir keinen Einfluss. Für die Richtigkeit
              der Inhalte ist immer der jeweilige Anbieter oder Betreiber verantwortlich,
              weshalb wir diesbezüglich keinerlei Gewähr übernehmen.
            </p>
            <p className="mt-3">
              Die fremden Webseiten haben wir zum Zeitpunkt der Verlinkung auf mögliche
              Rechtsverstöße überprüft. Zum Zeitpunkt der Verlinkung waren keinerlei
              Rechtsverletzungen erkennbar. Eine ständige Überprüfung sämtlicher Inhalte
              der von uns verlinkten Seiten ohne tatsächliche Anhaltspunkte für einen
              Rechtsverstoß können wir nicht leisten. Falls uns Rechtsverletzungen bekannt
              werden, werden wir die entsprechenden Links sofort entfernen.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3">Urheberrecht</p>
            <p>
              Die durch den Betreiber dieser Seite erstellten Inhalte und Werke auf diesen
              Webseiten unterliegen dem deutschen Urheberrecht. Sämtliche Beiträge Dritter
              sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors
              bzw. Erstellers. Kopien von diesen Seiten sind nur für den privaten Bereich
              gestattet, nicht jedoch für kommerzielle Zwecke.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3">Datenschutz</p>
            <p>
              Für die Sicherheit der Datenübertragung im Internet können wir keine Gewähr
              übernehmen, insbesondere besteht bei der Übertragung von Daten per E-Mail
              die Gefahr des Zugriffs durch Dritte. Im Falle der Erhebung personenbezogener
              Daten auf unseren Seiten erfolgt die Preisgabe dieser Daten seitens des
              Nutzers stets auf freiwilliger Basis. Die Inanspruchnahme und Bezahlung aller
              angebotenen Dienste ist auch ohne Angabe solcher Daten bzw. unter Angabe
              anonymisierter Daten oder eines Pseudonyms gestattet, soweit dies technisch
              möglich und zumutbar ist.
            </p>
            <p className="mt-3">
              Einer Nutzung der im Impressum veröffentlichten Kontaktdaten durch Dritte zu
              Werbezwecken wird hiermit ausdrücklich widersprochen. Der Betreiber behält
              sich für den Fall unverlangt zugesandter Werbe- oder Informationsmaterialien
              ausdrücklich rechtliche Schritte vor.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3">Rechtswirksamkeit dieses Haftungsausschlusses</p>
            <p>
              Sollten einzelne Regelungen oder Formulierungen dieses Haftungsausschlusses
              unwirksam sein oder werden, bleiben die übrigen Regelungen in ihrem Inhalt
              und ihrer Gültigkeit hiervon unberührt.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3">
              Alternative Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO und § 36 VSBG
            </p>
            <p>
              Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
