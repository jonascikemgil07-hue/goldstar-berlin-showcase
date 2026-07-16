import { Link } from "@tanstack/react-router";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

type Props = {
  slug: string;
  label: string;
  eyebrow: string;
  code: string;
};

export function CategoryTile({ slug, label, eyebrow, code }: Props) {
  return (
    <Link
      to="/kategorie/$slug"
      params={{ slug }}
      className="group hover-lift relative block overflow-hidden"
    >
      <div className="photo-frame transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
        <PhotoPlaceholder code={code} aspect="portrait" label={label} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-anthracite/85 via-anthracite/30 to-transparent p-6 text-ivory transition-opacity duration-500 md:p-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-ivory/70">
          {eyebrow}
        </p>
        <h3 className="mt-2 font-serif text-3xl md:text-4xl">{label}</h3>
        <span className="mt-4 inline-flex w-fit border-b border-ivory/60 pb-1 text-[11px] uppercase tracking-[0.22em] transition-all duration-500 group-hover:border-gold group-hover:text-gold group-hover:translate-x-1">
          Ansehen →
        </span>
      </div>
    </Link>
  );
}
