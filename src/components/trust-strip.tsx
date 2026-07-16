import { CountUp } from "@/components/count-up";

const items = [
  { value: 30, suffix: "+", label: "Jahre Erfahrung im Fachhandel" },
  { value: 6, suffix: "", label: "Kategorien vor Ort im Sortiment" },
  { value: 100, suffix: "%", label: "Beratung ohne Onlineshop-Kompromiss" },
  { value: 1, suffix: "", label: "Fachgeschäft in Berlin-Reinickendorf" },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-anthracite/10 bg-ivory-dark/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-14 md:grid-cols-4 md:gap-x-10 md:px-8 md:py-16">
        {items.map((i, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col gap-3 px-2 md:px-4 ${
              idx > 0 ? "md:border-l md:border-anthracite/10" : ""
            }`}
          >
            <span className="font-serif text-4xl leading-none text-anthracite md:text-5xl">
              <CountUp to={i.value} suffix={i.suffix} />
            </span>
            <span className="h-px w-8 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-anthracite/60">
              {i.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
