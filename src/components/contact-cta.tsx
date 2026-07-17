import { Link } from "@tanstack/react-router";
import { mapsRouteUrl } from "@/data/shop";

export function ContactCTA() {
  return (
    <section className="relative px-5 py-16 md:px-8 md:py-24">
      <div className="liquid-glass-dark relative mx-auto max-w-6xl overflow-hidden text-ivory">
        {/* Watermark im Hintergrund */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-8 select-none font-serif text-[22vw] italic leading-none text-ivory/[0.06] md:text-[16vw]"
        >
          &amp;
        </span>
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-28">
        <div className="mx-auto mb-8 flex items-center justify-center gap-4 text-gold">
          <span className="h-px w-14 bg-gold/60" />
          <svg viewBox="0 0 24 24" className="size-3" fill="currentColor">
            <path d="M12 0 L13.6 10.4 L24 12 L13.6 13.6 L12 24 L10.4 13.6 L0 12 L10.4 10.4 Z" />
          </svg>
          <span className="h-px w-14 bg-gold/60" />
        </div>
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
            className="border border-ivory bg-ivory px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-anthracite transition-all duration-500 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-ivory hover:shadow-[0_18px_40px_-20px_rgba(182,141,64,0.7)]"
          >
            Besuch planen
          </a>
          <Link
            to="/kontakt"
            className="border border-ivory/25 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-ivory transition-colors duration-500 hover:border-gold hover:text-gold"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
}
