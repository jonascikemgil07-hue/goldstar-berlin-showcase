type Props = {
  items: string[];
  speed?: number; // Sekunden pro Runde
  className?: string;
};

/**
 * Endlos scrollende Zeile im Editorial-Stil.
 * Duplikate garantieren einen nahtlosen Loop.
 */
export function Marquee({ items, speed = 45, className = "" }: Props) {
  const track = [...items, ...items];
  return (
    <div
      className={`marquee-mask relative overflow-hidden border-y border-anthracite/10 bg-ivory ${className}`}
      aria-hidden="true"
    >
      <div
        className="flex w-max animate-[marquee_var(--marquee-duration)_linear_infinite] gap-14 py-4"
        style={{ ["--marquee-duration" as any]: `${speed}s` }}
      >
        {track.map((t, i) => (
          <div key={i} className="flex shrink-0 items-center gap-14">
            <span className="font-serif text-lg italic text-anthracite/80 md:text-xl">
              {t}
            </span>
            <svg viewBox="0 0 24 24" className="size-3 shrink-0 text-gold" fill="currentColor">
              <path d="M12 0 L13.6 10.4 L24 12 L13.6 13.6 L12 24 L10.4 13.6 L0 12 L10.4 10.4 Z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
