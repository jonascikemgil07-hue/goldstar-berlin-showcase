import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – Juwelier Gold & Star" },
      {
        name: "description",
        content: "Datenschutzerklärung von Juwelier Gold & Star, Berlin.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Datenschutz,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-3">{title}</p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Datenschutz() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <div className="space-y-10 text-sm leading-relaxed text-anthracite/80">
          <p>
            Personenbezogene Daten (nachfolgend zumeist nur „Daten" genannt) werden von
            uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung
            eines funktionsfähigen und nutzerfreundlichen Internetauftritts, inklusive
            seiner Inhalte und der dort angebotenen Leistungen, verarbeitet.
          </p>
          <p>
            Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der
            Datenschutz-Grundverordnung (nachfolgend nur „DSGVO" genannt), gilt als
            „Verarbeitung" jeder mit oder ohne Hilfe automatisierter Verfahren
            ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
            personenbezogenen Daten, wie das Erheben, das Erfassen, die Organisation, das
            Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das
            Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung
            oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung,
            die Einschränkung, das Löschen oder die Vernichtung.
          </p>
          <p>
            Mit der nachfolgenden Datenschutzerklärung informieren wir Sie insbesondere
            über Art, Umfang, Zweck, Dauer und Rechtsgrundlage der Verarbeitung
            personenbezogener Daten, soweit wir entweder allein oder gemeinsam mit anderen
            über die Zwecke und Mittel der Verarbeitung entscheiden.
          </p>

          <Section title="I. Informationen über uns als Verantwortliche">
            <address className="not-italic">
              Juwelier Goldstar Berlin<br />
              Gerorge Cikemgil<br />
              Schwedenstr. 1A<br />
              13357 Berlin
            </address>
            <p>Tel: +49 30 49791770</p>
            <p>info@goldstarberlin.de</p>
            <p>www.goldstarberlin.de</p>
          </Section>

          <Section title="II. Rechte der Nutzer und Betroffenen">
            <p>
              Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung
              haben die Nutzer und Betroffenen das Recht
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft
                über die verarbeiteten Daten, auf weitere Informationen über die
                Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15 DSGVO);
              </li>
              <li>
                auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger
                Daten (vgl. auch Art. 16 DSGVO);
              </li>
              <li>
                auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art. 17
                DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gemäß Art. 17
                Abs. 3 DSGVO erforderlich ist, auf Einschränkung der Verarbeitung nach
                Maßgabe von Art. 18 DSGVO;
              </li>
              <li>
                auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und
                auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche (vgl.
                auch Art. 20 DSGVO);
              </li>
              <li>
                auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht
                sind, dass die sie betreffenden Daten durch den Anbieter unter Verstoß
                gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch
                Art. 77 DSGVO).
              </li>
            </ul>
            <p>
              Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen
              gegenüber Daten durch den Anbieter offengelegt worden sind, über jedwede
              Berichtigung oder Löschung von Daten oder die Einschränkung der
              Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt, zu
              unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit diese
              Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand verbunden
              ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft über diese
              Empfänger.
            </p>
            <p>
              Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf
              Widerspruch gegen die künftige Verarbeitung der sie betreffenden Daten,
              sofern die Daten durch den Anbieter nach Maßgabe von Art. 6 Abs. 1 lit. f)
              DSGVO verarbeitet werden. Insbesondere ist ein Widerspruch gegen die
              Datenverarbeitung zum Zwecke der Direktwerbung statthaft.
            </p>
          </Section>

          <Section title="III. Informationen zur Datenverarbeitung">
            <p>
              Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden
              gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der
              Löschung der Daten keine gesetzlichen Aufbewahrungspflichten entgegenstehen
              und nachfolgend keine anderslautenden Angaben zu einzelnen
              Verarbeitungsverfahren gemacht werden.
            </p>
          </Section>

          <Section title="Serverdaten">
            <p>
              Aus technischen Gründen, insbesondere zur Gewährleistung eines sicheren und
              stabilen Internetauftritts, werden Daten durch Ihren Internet-Browser an
              uns bzw. an unseren Webspace-Provider übermittelt. Mit diesen sog.
              Server-Logfiles werden u.a. Typ und Version Ihres Internetbrowsers, das
              Betriebssystem, die Website, von der aus Sie auf unseren Internetauftritt
              gewechselt haben (Referrer URL), die Website(s) unseres Internetauftritts,
              die Sie besuchen, Datum und Uhrzeit des jeweiligen Zugriffs sowie die
              IP-Adresse des Internetanschlusses, von dem aus die Nutzung unseres
              Internetauftritts erfolgt, erhoben.
            </p>
            <p>
              Diese so erhobenen Daten werden vorrübergehend gespeichert, dies jedoch
              nicht gemeinsam mit anderen Daten von Ihnen.
            </p>
            <p>
              Diese Speicherung erfolgt auf der Rechtsgrundlage von Art. 6 Abs. 1 lit. f)
              DSGVO. Unser berechtigtes Interesse liegt in der Verbesserung, Stabilität,
              Funktionalität und Sicherheit unseres Internetauftritts.
            </p>
            <p>
              Die Daten werden spätestens nach sieben Tagen wieder gelöscht, soweit keine
              weitere Aufbewahrung zu Beweiszwecken erforderlich ist. Andernfalls sind die
              Daten bis zur endgültigen Klärung eines Vorfalls ganz oder teilweise von
              der Löschung ausgenommen.
            </p>
          </Section>

          <Section title="Cookies – a) Sitzungs-Cookies/Session-Cookies">
            <p>
              Wir verwenden mit unserem Internetauftritt sog. Cookies. Cookies sind kleine
              Textdateien oder andere Speichertechnologien, die durch den von Ihnen
              eingesetzten Internet-Browser auf Ihrem Endgerät abgelegt und gespeichert
              werden. Durch diese Cookies werden im individuellen Umfang bestimmte
              Informationen von Ihnen, wie beispielsweise Ihre Browser- oder
              Standortdaten oder Ihre IP-Adresse, verarbeitet.
            </p>
            <p>
              Durch diese Verarbeitung wird unser Internetauftritt benutzerfreundlicher,
              effektiver und sicherer, da die Verarbeitung bspw. die Wiedergabe unseres
              Internetauftritts in unterschiedlichen Sprachen oder das Angebot einer
              Warenkorbfunktion ermöglicht.
            </p>
            <p>
              Rechtsgrundlage dieser Verarbeitung ist Art. 6 Abs. 1 lit b.) DSGVO, sofern
              diese Cookies Daten zur Vertragsanbahnung oder Vertragsabwicklung
              verarbeitet werden.
            </p>
            <p>
              Falls die Verarbeitung nicht der Vertragsanbahnung oder Vertragsabwicklung
              dient, liegt unser berechtigtes Interesse in der Verbesserung der
              Funktionalität unseres Internetauftritts. Rechtsgrundlage ist dann Art. 6
              Abs. 1 lit. f) DSGVO.
            </p>
            <p>Mit Schließen Ihres Internet-Browsers werden diese Session-Cookies gelöscht.</p>
          </Section>

          <Section title="b) Drittanbieter-Cookies">
            <p>
              Gegebenenfalls werden mit unserem Internetauftritt auch Cookies von
              Partnerunternehmen, mit denen wir zum Zwecke der Werbung, der Analyse oder
              der Funktionalitäten unseres Internetauftritts zusammenarbeiten, verwendet.
            </p>
            <p>
              Die Einzelheiten hierzu, insbesondere zu den Zwecken und den Rechtsgrundlagen
              der Verarbeitung solcher Drittanbieter-Cookies, entnehmen Sie bitte den
              nachfolgenden Informationen.
            </p>
          </Section>

          <Section title="c) Beseitigungsmöglichkeit">
            <p>
              Sie können die Installation der Cookies durch eine Einstellung Ihres
              Internet-Browsers verhindern oder einschränken. Ebenfalls können Sie bereits
              gespeicherte Cookies jederzeit löschen. Die hierfür erforderlichen Schritte
              und Maßnahmen hängen jedoch von Ihrem konkret genutzten Internet-Browser
              ab. Bei Fragen benutzen Sie daher bitte die Hilfefunktion oder Dokumentation
              Ihres Internet-Browsers oder wenden sich an dessen Hersteller bzw. Support.
            </p>
            <p>
              Sollten Sie die Installation der Cookies verhindern oder einschränken, kann
              dies allerdings dazu führen, dass nicht sämtliche Funktionen unseres
              Internetauftritts vollumfänglich nutzbar sind.
            </p>
          </Section>

          <Section title="Vertragsabwicklung">
            <p>
              Die von Ihnen zur Inanspruchnahme unseres Waren- und/oder
              Dienstleistungsangebots übermittelten Daten werden von uns zum Zwecke der
              Vertragsabwicklung verarbeitet und sind insoweit erforderlich.
              Vertragsschluss und Vertragsabwicklung sind ohne Bereitstellung Ihrer Daten
              nicht möglich.
            </p>
            <p>Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.</p>
            <p>
              Wir löschen die Daten mit vollständiger Vertragsabwicklung, müssen dabei
              aber die steuer- und handelsrechtlichen Aufbewahrungsfristen beachten.
            </p>
            <p>
              Im Rahmen der Vertragsabwicklung geben wir Ihre Daten an das mit der
              Warenlieferung beauftragte Transportunternehmen oder an den
              Finanzdienstleister weiter, soweit die Weitergabe zur Warenauslieferung oder
              zu Bezahlzwecken erforderlich ist. Rechtsgrundlage für die Weitergabe der
              Daten ist dann Art. 6 Abs. 1 lit. b) DSGVO.
            </p>
          </Section>

          <Section title="Kundenkonto / Registrierungsfunktion">
            <p>
              Falls Sie über unseren Internetauftritt ein Kundenkonto bei uns anlegen,
              werden wir die von Ihnen bei der Registrierung eingegebenen Daten (also
              bspw. Ihren Namen, Ihre Anschrift oder Ihre E-Mail-Adresse) ausschließlich
              für vorvertragliche Leistungen, für die Vertragserfüllung oder zum Zwecke
              der Kundenpflege erheben und speichern. Gleichzeitig speichern wir dann die
              IP-Adresse und das Datum Ihrer Registrierung nebst Uhrzeit. Eine Weitergabe
              dieser Daten an Dritte erfolgt nicht.
            </p>
            <p>
              Soweit Sie in diese Verarbeitung einwilligen, ist Art. 6 Abs. 1 lit. a)
              DSGVO Rechtsgrundlage. Sofern die Eröffnung des Kundenkontos zusätzlich auch
              vorvertraglichen Maßnahmen oder der Vertragserfüllung dient, so ist
              Rechtsgrundlage zusätzlich Art. 6 Abs. 1 lit. b) DSGVO.
            </p>
            <p>
              Die uns erteilte Einwilligung können Sie gemäß Art. 7 Abs. 3 DSGVO jederzeit
              mit Wirkung für die Zukunft widerrufen.
            </p>
          </Section>

          <Section title="Kontaktanfragen / Kontaktmöglichkeit">
            <p>
              Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten, werden
              die dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage genutzt.
              Die Angabe der Daten ist zur Bearbeitung und Beantwortung Ihrer Anfrage
              erforderlich – ohne deren Bereitstellung können wir Ihre Anfrage nicht oder
              allenfalls eingeschränkt beantworten.
            </p>
            <p>Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.</p>
            <p>
              Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet
              worden ist und der Löschung keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen.
            </p>
          </Section>

          <Section title="E-Mail-Werbung mit Anmeldung zum Newsletter">
            <p>
              Wenn Sie sich zu unserem Newsletter anmelden, verwenden wir die hierfür
              erforderlichen oder gesondert von Ihnen mitgeteilten Daten, um Ihnen
              regelmäßig unseren E-Mail-Newsletter aufgrund Ihrer Einwilligung gemäß
              Art. 6 Abs. 1 S. 1 lit. a DSGVO zuzusenden.
            </p>
            <p>
              Die Abmeldung vom Newsletter ist jederzeit möglich und kann entweder durch
              eine Nachricht an die unten beschriebene Kontaktmöglichkeit oder über einen
              dafür vorgesehenen Link im Newsletter erfolgen.
            </p>
          </Section>

          <Section title="Google Fonts">
            <p>
              In unserem Internetauftritt setzen wir Google Fonts zur Darstellung externer
              Schriftarten ein. Es handelt sich hierbei um einen Dienst der Google LLC,
              1600 Amphitheatre Parkway, Mountain View, CA 94043 USA, nachfolgend nur
              „Google" genannt.
            </p>
            <p>
              Um die Darstellung bestimmter Schriften in unserem Internetauftritt zu
              ermöglichen, wird bei Aufruf unseres Internetauftritts eine Verbindung zu
              dem Google-Server in den USA aufgebaut.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse
              liegt in der Optimierung und dem wirtschaftlichen Betrieb unseres
              Internetauftritts.
            </p>
            <p>
              Google bietet unter{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="text-gold hover:underline"
              >
                policies.google.com/privacy
              </a>{" "}
              weitere Informationen, insbesondere zu den Möglichkeiten der Unterbindung
              der Datennutzung.
            </p>
          </Section>

          <p className="text-xs text-anthracite/50">
            Muster-Datenschutzerklärung der Anwaltskanzlei Weiß &amp; Partner
          </p>
        </div>
      </section>
    </>
  );
}
