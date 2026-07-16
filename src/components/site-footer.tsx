import { Link } from "@tanstack/react-router";
import { shop } from "@/data/shop";
import logoAsset from "@/assets/gold-star-logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-anthracite/10 bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-3 md:px-8">
        <div>
          <img
            src={logoAsset.url}
            alt="Juwelier Gold & Star"
            className="h-12 w-auto"
          />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-anthracite/70">
            Ihr Juwelier in Berlin-Reinickendorf. Ausgewählter Schmuck, Uhren und
            Trauringe – mit persönlicher Beratung vor Ort.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-5">Besuch</p>
          <address className="space-y-1 text-sm not-italic text-anthracite/80">
            <p>{shop.name}</p>
            <p>{shop.strasse}</p>
            <p>{shop.plz} {shop.ort}</p>
          </address>
          <div className="mt-6 space-y-1 text-sm text-anthracite/70">
            {shop.oeffnungszeiten.map((o) => (
              <p key={o.tag}>
                <span className="text-anthracite">{o.tag}:</span> {o.zeit}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow mb-5">Kontakt</p>
          <div className="space-y-2 text-sm text-anthracite/80">
            <p>
              <a href={shop.telefonHref} className="hover:text-gold">
                {shop.telefon}
              </a>
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-2 text-xs uppercase tracking-[0.22em]">
            <Link to="/impressum" className="text-anthracite/60 hover:text-gold">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-anthracite/60 hover:text-gold">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-anthracite/5">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-6 text-[10px] uppercase tracking-[0.22em] text-anthracite/50 sm:flex-row sm:items-center md:px-8">
          <p>© {new Date().getFullYear()} Juwelier Gold & Star, Berlin</p>
          <p>Kein Onlineshop – Verkauf ausschließlich im Ladengeschäft.</p>
        </div>
      </div>
    </footer>
  );
}
