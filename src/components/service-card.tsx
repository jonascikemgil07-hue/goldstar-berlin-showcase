import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative border-t border-anthracite/15 pt-6 transition-colors duration-500 hover:border-gold">
      <span className="absolute left-0 top-0 h-px w-0 bg-gold transition-[width] duration-700 ease-out group-hover:w-full" aria-hidden="true" />
      <p className="font-serif text-sm italic text-gold">{service.nummer}</p>
      <h3 className="mt-3 font-serif text-2xl text-anthracite transition-colors duration-500 group-hover:text-gold">{service.titel}</h3>
      <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-anthracite/50">
        {service.kurz}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-anthracite/75">{service.beschreibung}</p>
    </article>
  );
}
