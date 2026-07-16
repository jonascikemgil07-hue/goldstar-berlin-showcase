import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/gold-star-logo.asset.json";

const nav = [
  { label: "Startseite", to: "/" as const },
  { label: "Sortiment", to: "/sortiment" as const },
  { label: "Services", to: "/services" as const },
  { label: "Über uns", to: "/ueber-uns" as const },
  { label: "Kontakt", to: "/kontakt" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-anthracite/5 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 md:px-8 md:py-4">
        <Link to="/" className="flex min-w-0 items-center" aria-label="Juwelier Gold & Star – Startseite">
          <img
            src={logoAsset.url}
            alt="Juwelier Gold & Star"
            className="h-10 w-auto md:h-12"
            width={200}
            height={64}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-gold" }}
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-anthracite/80 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/kontakt"
            className="hidden shrink-0 border border-anthracite bg-anthracite px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-gold hover:border-gold sm:inline-block"
          >
            Besuch planen
          </Link>
          <button
            aria-label="Menü öffnen"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="grid size-10 shrink-0 place-items-center border border-anthracite/15 text-anthracite lg:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ivory lg:hidden">
          <div className="flex items-center justify-between border-b border-anthracite/5 px-5 py-3">
            <img
              src={logoAsset.url}
              alt="Juwelier Gold & Star"
              className="h-10 w-auto"
            />
            <button
              aria-label="Menü schließen"
              onClick={() => setOpen(false)}
              className="grid size-10 place-items-center border border-anthracite/15"
            >
              <X className="size-4" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 px-5 py-8">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-gold" }}
                className="border-b border-anthracite/5 py-4 font-serif text-2xl text-anthracite hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-8 border border-anthracite bg-anthracite px-6 py-4 text-center text-xs uppercase tracking-[0.22em] text-ivory"
            >
              Besuch planen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
