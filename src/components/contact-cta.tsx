import { Link } from "@tanstack/react-router";
import { mapsRouteUrl } from "@/data/shop";

export function ContactCTA() {
  return (
    <section className="bg-anthracite text-ivory">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold-muted">
          Vor Ort in Berlin
        </p>
        <h2 className="mt-6 font-serif text-3xl leading-tight text-ivory md:text-5xl">
          Entdecken Sie unser Sortiment <em className="text-gold-muted">persönlich</em> vor Ort.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-ivory/70">
          Nehmen Sie sich Zeit, das Passende zu finden. Wir freuen uns, Sie in unserem Geschäft
          in Berlin-Reinickendorf zu begrüßen.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={mapsRouteUrl}
            target="_blank"
            rel="noreferrer"
            className="border border-ivory bg-ivory px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-anthracite transition-colors hover:bg-gold hover:border-gold hover:text-ivory"
          >
            Besuch planen
          </a>
          <Link
            to="/kontakt"
            className="border border-ivory/25 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
}
