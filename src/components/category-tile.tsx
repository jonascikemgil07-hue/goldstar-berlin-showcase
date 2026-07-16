import { Link } from "@tanstack/react-router";
import type { FileRoutesByPath } from "@tanstack/react-router";

type Props = {
  label: string;
  eyebrow: string;
  to: keyof FileRoutesByPath;
  image: string;
};

export function CategoryTile({ label, eyebrow, to, image }: Props) {
  return (
    <Link to={to as any} className="group relative block aspect-[3/4] overflow-hidden bg-ivory-dark">
      <img
        src={image}
        alt={label}
        loading="lazy"
        className="size-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite/70 via-anthracite/10 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-ivory md:p-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-ivory/70">
          {eyebrow}
        </p>
        <h3 className="mt-2 font-serif text-3xl md:text-4xl">{label}</h3>
        <span className="mt-4 inline-flex w-fit border-b border-ivory/60 pb-1 text-[11px] uppercase tracking-[0.22em] transition-colors group-hover:border-gold group-hover:text-gold">
          Entdecken
        </span>
      </div>
    </Link>
  );
}
