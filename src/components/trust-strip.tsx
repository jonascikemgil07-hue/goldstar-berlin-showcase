const items = [
  { nr: "01", label: "Persönliche Beratung" },
  { nr: "02", label: "Service vor Ort" },
  { nr: "03", label: "Ausgewählte Schmuckstücke" },
  { nr: "04", label: "Juwelier in Berlin-Reinickendorf" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-anthracite/10 bg-ivory-dark/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4 md:px-8 md:py-12">
        {items.map((i) => (
          <div key={i.nr} className="flex flex-col gap-2">
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
              {i.nr}
            </span>
            <span className="text-sm font-medium leading-tight text-anthracite">
              {i.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
