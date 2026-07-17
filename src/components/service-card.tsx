import { useState, useId } from "react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className="group liquid-glass relative overflow-hidden p-6 transition-all duration-500 hover:-translate-y-0.5 md:p-8">
      <span
        className="absolute left-0 top-0 z-[2] h-px w-0 bg-gold transition-[width] duration-700 ease-out group-hover:w-full"
        aria-hidden="true"
      />
      <p className="font-serif text-sm italic text-gold">{service.nummer}</p>
      <h3 className="mt-3 font-serif text-2xl text-anthracite transition-colors duration-500 group-hover:text-gold">
        {service.titel}
      </h3>
      <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-anthracite/50">
        {service.kurz}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-anthracite/75">
        {service.beschreibung}
      </p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-5 inline-flex items-center gap-2 border-b border-gold pb-1 text-[11px] uppercase tracking-[0.22em] text-anthracite transition-colors hover:text-gold"
      >
        {open ? "Preisliste schließen" : "Preisliste ansehen"}
        <span
          aria-hidden="true"
          className={`inline-block transition-transform duration-500 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>

      <div
        id={panelId}
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="border-t border-anthracite/10 pt-5">
            {service.preisHinweis && (
              <p className="mb-4 font-serif text-sm italic text-gold">
                {service.preisHinweis}
              </p>
            )}
            <ul className="divide-y divide-anthracite/10">
              {service.leistungen.map((l) => (
                <li
                  key={l.bezeichnung}
                  className="flex items-baseline justify-between gap-4 py-2.5"
                >
                  <span className="text-sm text-anthracite/85">
                    {l.bezeichnung}
                  </span>
                  <span
                    className={`shrink-0 text-[11px] uppercase tracking-[0.18em] ${
                      l.preis.toLowerCase() === "kostenlos"
                        ? "text-gold"
                        : "text-anthracite/60"
                    }`}
                  >
                    {l.preis}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-anthracite/50">
              Alle Preise unverbindlich · Endpreis nach Sichtung im Geschäft
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
