import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import type { Kategorie, Produkt } from "@/data/products";

type Props = {
  produkte: Produkt[];
  filterKategorien?: Kategorie[];
};

export function ProductGrid({ produkte, filterKategorien }: Props) {
  const [active, setActive] = useState<"alle" | Kategorie>("alle");

  const sichtbar = useMemo(() => {
    if (active === "alle") return produkte;
    return produkte.filter((p) => p.kategorie === active);
  }, [produkte, active]);

  return (
    <div>
      {filterKategorien && filterKategorien.length > 0 && (
        <div className="mb-12 flex flex-wrap gap-2">
          <button
            onClick={() => setActive("alle")}
            className={`border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition-colors ${
              active === "alle"
                ? "border-anthracite bg-anthracite text-ivory"
                : "border-anthracite/20 text-anthracite hover:border-gold hover:text-gold"
            }`}
          >
            Alle
          </button>
          {filterKategorien.map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition-colors ${
                active === k
                  ? "border-anthracite bg-anthracite text-ivory"
                  : "border-anthracite/20 text-anthracite hover:border-gold hover:text-gold"
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      )}

      {sichtbar.length === 0 ? (
        <p className="py-16 text-center text-sm text-anthracite/60">
          Keine Stücke in dieser Auswahl.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {sichtbar.map((p) => (
            <ProductCard key={p.slug} produkt={p} />
          ))}
        </div>
      )}
    </div>
  );
}
