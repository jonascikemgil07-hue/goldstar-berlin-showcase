import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "AGB – Juwelier Gold & Star" },
      {
        name: "description",
        content:
          "Allgemeine Geschäftsbedingungen mit Kundeninformationen von Juwelier Gold & Star, Berlin.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AGB,
});

function H({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-3">{children}</p>;
}

function AGB() {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        title="Allgemeine Geschäftsbedingungen"
        intro="mit Kundeninformationen"
      />
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <div className="space-y-10 text-sm leading-relaxed text-anthracite/80">
          <div>
            <H>Übersicht</H>
            <ol className="ml-5 list-decimal space-y-1">
              <li>Geltungsbereich</li>
              <li>Angebote und Leistungsbeschreibungen</li>
              <li>Bestellvorgang und Vertragsabschluss</li>
              <li>Preise und Versandkosten</li>
              <li>Lieferung, Warenverfügbarkeit</li>
              <li>Zahlungsmodalitäten</li>
              <li>Eigentumsvorbehalt</li>
              <li>Sachmängelgewährleistung und Garantie</li>
              <li>Haftung</li>
              <li>Speicherung des Vertragstextes</li>
              <li>Schlussbestimmungen</li>
            </ol>
          </div>

          <div>
            <H>1. Geltungsbereich</H>
            <p>
              1.1. Für die Geschäftsbeziehung zwischen Juwelier Goldstar Berlin,
              Residenzstraße 47-48, 13409 Berlin (nachfolgend „Verkäufer") und dem Kunden
              (nachfolgend „Kunde") gelten ausschließlich die nachfolgenden Allgemeinen
              Geschäftsbedingungen in ihrer zum Zeitpunkt der Bestellung gültigen Fassung.
            </p>
            <p className="mt-3">
              1.2. Sie erreichen unseren Kundendienst für Fragen, Reklamationen und
              Beanstandungen werktags unter der Telefonnummer +49 30 49791770 sowie per
              E-Mail unter kundendienst(at)goldstarberlin.de.
            </p>
            <p className="mt-3">
              1.3. Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein
              Rechtsgeschäft zu einem Zwecke abschließt, der überwiegend weder ihrer
              gewerblichen noch ihrer selbstständigen beruflichen Tätigkeit zugerechnet
              werden kann (§ 13 BGB).
            </p>
            <p className="mt-3">
              1.4. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei
              denn, der Verkäufer stimmt ihrer Geltung ausdrücklich zu.
            </p>
          </div>

          <div>
            <H>2. Angebote und Leistungsbeschreibungen</H>
            <p>
              Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes
              Angebot, sondern eine Aufforderung zur Abgabe einer Bestellung dar.
              Leistungsbeschreibungen in Katalogen sowie auf den Websites des Verkäufers
              haben nicht den Charakter einer Zusicherung oder Garantie.
            </p>
            <p className="mt-3">
              Alle Angebote gelten „solange der Vorrat reicht", wenn nicht bei den
              Produkten etwas anderes vermerkt ist. Im Übrigen bleiben Irrtümer
              vorbehalten.
            </p>
          </div>

          <div>
            <H>3. Bestellvorgang und Vertragsabschluss</H>
            <p>
              3.1. Der Kunde kann aus dem Sortiment des Verkäufers Produkte unverbindlich
              auswählen und diese über die Schaltfläche [in den Warenkorb] in einem so
              genannten Warenkorb sammeln. Innerhalb des Warenkorbes kann die
              Produktauswahl verändert, z.B. gelöscht werden. Anschließend kann der Kunde
              innerhalb des Warenkorbs über die Schaltfläche [Weiter zur Kasse] zum
              Abschluss des Bestellvorgangs schreiten.
            </p>
            <p className="mt-3">
              3.2. Über die Schaltfläche [zahlungspflichtig bestellen] gibt der Kunde
              einen verbindlichen Antrag zum Kauf der im Warenkorb befindlichen Waren ab.
              Vor Abschicken der Bestellung kann der Kunde die Daten jederzeit ändern und
              einsehen sowie mithilfe der Browserfunktion „zurück" zum Warenkorb
              zurückgehen oder den Bestellvorgang insgesamt abbrechen. Notwendige Angaben
              sind mit einem Sternchen (*) gekennzeichnet.
            </p>
            <p className="mt-3">
              3.3. Der Verkäufer schickt daraufhin dem Kunden eine automatische
              Empfangsbestätigung per E-Mail zu, in welcher die Bestellung des Kunden
              nochmals aufgeführt wird und die der Kunde über die Funktion „Drucken"
              ausdrucken kann (Bestellbestätigung). Die automatische Empfangsbestätigung
              dokumentiert lediglich, dass die Bestellung des Kunden beim Verkäufer
              eingegangen ist und stellt keine Annahme des Antrags dar. Der Kaufvertrag
              kommt erst dann zustande, wenn der Verkäufer das bestellte Produkt
              innerhalb von 2 Tagen an den Kunden versendet, übergeben oder den Versand
              an den Kunden innerhalb von 2 Tagen mit einer zweiten E-Mail,
              ausdrücklicher Auftragsbestätigung oder Zusendung der Rechnung bestätigt
              hat.
            </p>
            <p className="mt-3">
              3.4. Sollte der Verkäufer eine Vorkassezahlung ermöglichen, kommt der
              Vertrag mit der Bereitstellung der Bankdaten und Zahlungsaufforderung
              zustande. Wenn die Zahlung trotz Fälligkeit auch nach erneuter Aufforderung
              nicht bis zu einem Zeitpunkt von 10 Kalendertagen nach Absendung der
              Bestellbestätigung beim Verkäufer eingegangen ist, tritt der Verkäufer vom
              Vertrag zurück mit der Folge, dass die Bestellung hinfällig ist und den
              Verkäufer keine Lieferpflicht trifft. Eine Reservierung des Artikels bei
              Vorkassezahlungen erfolgt daher längstens für 10 Kalendertage.
            </p>
          </div>

          <div>
            <H>4. Preise und Versandkosten</H>
            <p>
              4.1. Alle Preise, die auf der Website des Verkäufers angegeben sind,
              verstehen sich einschließlich der jeweils gültigen gesetzlichen
              Umsatzsteuer.
            </p>
            <p className="mt-3">
              4.2. Zusätzlich zu den angegebenen Preisen berechnet der Verkäufer für die
              Lieferung Versandkosten. Die Versandkosten werden dem Käufer auf einer
              gesonderten Informationsseite und im Rahmen des Bestellvorgangs deutlich
              mitgeteilt.
            </p>
          </div>

          <div>
            <H>5. Lieferung, Warenverfügbarkeit</H>
            <p>
              5.1. Soweit Vorkasse vereinbart ist, erfolgt die Lieferung nach Eingang des
              Rechnungsbetrages.
            </p>
            <p className="mt-3">
              5.2. Sollte die Zustellung der Ware durch Verschulden des Käufers trotz
              dreimaligem Auslieferversuchs scheitern, kann der Verkäufer vom Vertrag
              zurücktreten. Ggf. geleistete Zahlungen werden dem Kunden unverzüglich
              erstattet.
            </p>
            <p className="mt-3">
              5.3. Wenn das bestellte Produkt nicht verfügbar ist, weil der Verkäufer mit
              diesem Produkt von seinem Lieferanten ohne eigenes Verschulden nicht
              beliefert wird, kann der Verkäufer vom Vertrag zurücktreten. In diesem Fall
              wird der Verkäufer den Kunden unverzüglich informieren und ihm ggf. die
              Lieferung eines vergleichbaren Produktes vorschlagen. Wenn kein
              vergleichbares Produkt verfügbar ist oder der Kunde keine Lieferung eines
              vergleichbaren Produktes wünscht, wird der Verkäufer dem Kunden ggf.
              bereits erbrachte Gegenleistungen unverzüglich erstatten.
            </p>
            <p className="mt-3">
              5.4. Kunden werden über Lieferzeiten und Lieferbeschränkungen (z.B.
              Beschränkung der Lieferungen auf bestimmte Länder) auf einer gesonderten
              Informationsseite oder innerhalb der jeweiligen Produktbeschreibung
              unterrichtet.
            </p>
          </div>

          <div>
            <H>6. Zahlungsmodalitäten</H>
            <p>
              6.1. Der Kunde kann im Rahmen und vor Abschluss des Bestellvorgangs aus den
              zur Verfügung stehenden Zahlungsarten wählen. Kunden werden über die zur
              Verfügung stehenden Zahlungsmittel auf einer gesonderten Informationsseite
              unterrichtet.
            </p>
            <p className="mt-3">
              6.2. Ist die Bezahlung per Rechnung möglich, hat die Zahlung innerhalb von
              30 Tagen nach Erhalt der Ware und der Rechnung zu erfolgen. Bei allen
              anderen Zahlweisen hat die Zahlung im Voraus ohne Abzug zu erfolgen.
            </p>
            <p className="mt-3">
              6.3. Werden Drittanbieter mit der Zahlungsabwicklung beauftragt, z.B.
              PayPal, gelten deren Allgemeine Geschäftsbedingungen.
            </p>
            <p className="mt-3">
              6.4. Ist die Fälligkeit der Zahlung nach dem Kalender bestimmt, so kommt
              der Kunde bereits durch Versäumung des Termins in Verzug. In diesem Fall
              hat der Kunde die gesetzlichen Verzugszinsen zu zahlen.
            </p>
            <p className="mt-3">
              6.5. Die Verpflichtung des Kunden zur Zahlung von Verzugszinsen schließt die
              Geltendmachung weiterer Verzugsschäden durch den Verkäufer nicht aus.
            </p>
            <p className="mt-3">
              6.6. Ein Recht zur Aufrechnung steht dem Kunden nur zu, wenn seine
              Gegenansprüche rechtskräftig festgestellt oder von dem Verkäufer anerkannt
              sind. Der Kunde kann ein Zurückbehaltungsrecht nur ausüben, soweit die
              Ansprüche aus dem gleichen Vertragsverhältnis resultieren.
            </p>
          </div>

          <div>
            <H>7. Eigentumsvorbehalt</H>
            <p>
              Bis zur vollständigen Bezahlung verbleiben die gelieferten Waren im
              Eigentum des Verkäufers.
            </p>
          </div>

          <div>
            <H>8. Sachmängelgewährleistung und Garantie</H>
            <p>8.1. Die Gewährleistung bestimmt sich nach gesetzlichen Vorschriften.</p>
            <p className="mt-3">
              8.2. Eine Garantie besteht bei den vom Verkäufer gelieferten Waren nur, wenn
              diese ausdrücklich abgegeben wurde. Kunden werden über die
              Garantiebedingungen vor der Einleitung des Bestellvorgangs informiert.
            </p>
          </div>

          <div>
            <H>9. Haftung</H>
            <p>
              9.1. Für eine Haftung des Verkäufers auf Schadensersatz gelten unbeschadet
              der sonstigen gesetzlichen Anspruchsvoraussetzungen folgende
              Haftungsausschlüsse und -begrenzungen.
            </p>
            <p className="mt-3">
              9.2. Der Verkäufer haftet unbeschränkt, soweit die Schadensursache auf
              Vorsatz oder grober Fahrlässigkeit beruht.
            </p>
            <p className="mt-3">
              9.3. Ferner haftet der Verkäufer für die leicht fahrlässige Verletzung von
              wesentlichen Pflichten, deren Verletzung die Erreichung des Vertragszwecks
              gefährdet, oder für die Verletzung von Pflichten, deren Erfüllung die
              ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht und auf
              deren Einhaltung der Kunde regelmäßig vertraut. In diesem Fall haftet der
              Verkäufer jedoch nur für den vorhersehbaren, vertragstypischen Schaden. Der
              Verkäufer haftet nicht für die leicht fahrlässige Verletzung anderer als
              der in den vorstehenden Sätzen genannten Pflichten.
            </p>
            <p className="mt-3">
              9.4. Die vorstehenden Haftungsbeschränkungen gelten nicht bei Verletzung
              von Leben, Körper und Gesundheit, für einen Mangel nach Übernahme einer
              Garantie für die Beschaffenheit des Produktes und bei arglistig
              verschwiegenen Mängeln. Die Haftung nach dem Produkthaftungsgesetz bleibt
              unberührt.
            </p>
            <p className="mt-3">
              9.5. Soweit die Haftung des Verkäufers ausgeschlossen oder beschränkt ist,
              gilt dies auch für die persönliche Haftung von Arbeitnehmern, Vertretern
              und Erfüllungsgehilfen.
            </p>
          </div>

          <div>
            <H>10. Speicherung des Vertragstextes</H>
            <p>
              10.1. Der Kunde kann den Vertragstext vor der Abgabe der Bestellung an den
              Verkäufer ausdrucken, indem er im letzten Schritt der Bestellung die
              Druckfunktion seines Browsers nutzt.
            </p>
            <p className="mt-3">
              10.2. Der Verkäufer sendet dem Kunden außerdem eine Bestellbestätigung mit
              allen Bestelldaten an die von ihm angegebene E-Mail-Adresse zu. Mit der
              Bestellbestätigung, spätestens jedoch bei der Lieferung der Ware, erhält
              der Kunde ferner eine Kopie der AGB nebst Widerrufsbelehrung und den
              Hinweisen zu Versandkosten sowie Liefer- und Zahlungsbedingungen. Sofern
              Sie sich in unserem Shop registriert haben sollten, können Sie in Ihrem
              Profilbereich Ihre aufgegebenen Bestellungen einsehen. Darüber hinaus
              speichern wir den Vertragstext, machen ihn jedoch im Internet nicht
              zugänglich.
            </p>
          </div>

          <div>
            <H>11. Schlussbestimmungen</H>
            <p>
              11.1. Gerichtsstand und Erfüllungsort ist der Sitz des Verkäufers, wenn der
              Kunde Kaufmann, juristische Person des öffentlichen Rechts oder
              öffentlich-rechtliches Sondervermögen ist.
            </p>
            <p className="mt-3">11.2. Vertragssprache ist deutsch.</p>
            <p className="mt-3">
              11.3. Plattform der Europäischen Kommission zur Online-Streitbeilegung (OS)
              für Verbraucher:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noreferrer"
                className="text-gold hover:underline"
              >
                ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht bereit und nicht verpflichtet an einem
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
