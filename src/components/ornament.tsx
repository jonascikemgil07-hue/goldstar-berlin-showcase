type Props = {
  className?: string;
  label?: string;
};

/**
 * Feines goldenes Ornament: dünne Linie – vierzackiger Stern – dünne Linie.
 * Aufgegriffen aus dem Logo (Gold & Star), setzt einen ruhigen Akzent
 * zwischen Sektionen ohne aufdringlich zu wirken.
 */
export function Ornament({ className = "", label }: Props) {
  return (
    <div
      className={`flex items-center justify-center gap-4 text-gold ${className}`}
      aria-hidden={label ? undefined : true}
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60 md:w-24" />
      <svg
        viewBox="0 0 24 24"
        className="size-3.5 shrink-0 origin-center animate-[ornament-spin_18s_linear_infinite]"
        fill="currentColor"
      >
        {/* Vierzackiger Stern */}
        <path d="M12 0 L13.6 10.4 L24 12 L13.6 13.6 L12 24 L10.4 13.6 L0 12 L10.4 10.4 Z" />
      </svg>
      {label ? (
        <span className="font-serif text-xs italic tracking-[0.2em] text-anthracite/60">
          {label}
        </span>
      ) : null}
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60 md:w-24" />
    </div>
  );
}
