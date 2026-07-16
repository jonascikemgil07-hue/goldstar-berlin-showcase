import { Link } from "@tanstack/react-router";
import type { Produkt } from "@/data/products";

export function ProductCard({ produkt }: { produkt: Produkt }) {
  return (
    <Link
      to="/produkt/$slug"
      params={{ slug: produkt.slug }}
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden bg-ivory-dark">
        <img
          src={produkt.bilder[0]}
          alt={produkt.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="pt-5">
        <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-anthracite/50">
          {produkt.kategorie}
        </p>
        <h3 className="mt-2 font-serif text-xl text-anthracite">{produkt.name}</h3>
        <p className="mt-1 text-sm text-anthracite/60">{produkt.material}</p>
        <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.22em]">
          <span className="italic text-anthracite/60">Preis auf Anfrage</span>
          <span className="border-b border-gold pb-0.5 text-gold transition-colors group-hover:text-anthracite group-hover:border-anthracite">
            Details
          </span>
        </div>
      </div>
    </Link>
  );
}
