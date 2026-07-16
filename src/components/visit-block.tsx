import { shop, mapsRouteUrl } from "@/data/shop";
import { Link } from "@tanstack/react-router";

export function VisitBlock() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow mb-4">Besuch & Kontakt</p>
          <h2 className="text-3xl leading-tight text-anthracite md:text-4xl">
            Kommen Sie in unser Geschäft in Reinickendorf
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-anthracite/70">
            Wir freuen uns auf Ihren Besuch. In Ruhe zeigen wir Ihnen unser Sortiment,
            beraten Sie zu Trauringen oder besprechen Ihren Service-Auftrag.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="eyebrow mb-3">Adresse</p>
              <address className="text-sm not-italic leading-relaxed text-anthracite/85">
                {shop.name}<br />
                {shop.strasse}<br />
                {shop.plz} {shop.ort}
              </address>
            </div>
            <div>
              <p className="eyebrow mb-3">Öffnungszeiten</p>
              <div className="space-y-1 text-sm text-anthracite/85">
                {shop.oeffnungszeiten.map((o) => (
                  <p key={o.tag}>
                    <span className="text-anthracite">{o.tag}:</span>{" "}
                    <span className="text-anthracite/70">{o.zeit}</span>
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow mb-3">Telefon</p>
              <a href={shop.telefonHref} className="text-sm text-anthracite/85 hover:text-gold">
                {shop.telefon}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-3">E-Mail</p>
              <a href={`mailto:${shop.email}`} className="text-sm text-anthracite/85 hover:text-gold">
                {shop.email}
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={mapsRouteUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-anthracite bg-anthracite px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-gold hover:border-gold"
            >
              Route planen
            </a>
            <Link
              to="/kontakt"
              className="border border-anthracite/20 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-anthracite transition-colors hover:border-gold hover:text-gold"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] bg-ivory-dark lg:aspect-auto lg:min-h-[560px]">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
            <p className="eyebrow">Standort</p>
            <p className="max-w-xs font-serif text-2xl leading-snug text-anthracite">
              {shop.strasse}<br />{shop.plz} {shop.ort}
            </p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-anthracite/40">
              Kartendarstellung folgt
            </p>
          </div>
          <div className="absolute inset-0 border border-anthracite/10" />
        </div>
      </div>
    </section>
  );
}
