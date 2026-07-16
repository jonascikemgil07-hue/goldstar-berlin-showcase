import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="border-t border-anthracite/15 pt-6">
      <p className="font-serif text-sm italic text-gold">{service.nummer}</p>
      <h3 className="mt-3 font-serif text-2xl text-anthracite">{service.titel}</h3>
      <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-anthracite/50">
        {service.kurz}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-anthracite/75">{service.beschreibung}</p>
    </article>
  );
}
