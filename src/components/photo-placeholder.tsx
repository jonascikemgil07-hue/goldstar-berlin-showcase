type Props = {
  code: string;
  label?: string;
  aspect?: "square" | "portrait" | "landscape" | "wide";
  className?: string;
};

const aspectClass = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[5/4]",
  wide: "aspect-[3/2]",
} as const;

/**
 * Platzhalter für ein noch nicht eingesetztes Foto.
 * Zeigt oben rechts eine Kennnummer (z. B. „4H"), damit echte Bilder
 * später eindeutig zugeordnet werden können.
 */
export function PhotoPlaceholder({
  code,
  label,
  aspect = "square",
  className = "",
}: Props) {
  return (
    <div
      className={`relative overflow-hidden border border-anthracite/10 bg-ivory-dark ${aspectClass[aspect]} ${className}`}
    >
      {/* Diagonale Linie als visueller Platzhalter-Marker */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 size-full text-anthracite/8"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.3" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.3" />
      </svg>

      {/* Kennnummer */}
      <div className="absolute right-3 top-3 flex items-center gap-2 border border-anthracite/15 bg-ivory/90 px-2.5 py-1 font-mono text-[11px] font-medium tracking-[0.15em] text-anthracite backdrop-blur-sm">
        <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
        {code}
      </div>

      {/* Label */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 p-5 text-center">
        <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-anthracite/45">
          Platzhalter Foto
        </span>
        {label && (
          <span className="font-serif text-base italic text-anthracite/70">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
