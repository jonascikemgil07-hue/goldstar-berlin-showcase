import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-ivory/90 backdrop-blur-md transition-[box-shadow,border-color,background-color] duration-500 ${
        scrolled
          ? "border-anthracite/10 shadow-[0_10px_30px_-24px_rgba(28,28,28,0.35)]"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 md:px-8 md:py-4">
        <Link to="/" className="flex min-w-0 items-center transition-opacity duration-300 hover:opacity-80" aria-label="Juwelier Gold & Star – Startseite">
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
              className="story-link text-[11px] font-medium uppercase tracking-[0.22em] text-anthracite/80 transition-colors duration-300 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/kontakt"
            className="hidden shrink-0 border border-anthracite bg-anthracite px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-ivory transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-gold hover:border-gold hover:shadow-[0_12px_24px_-16px_rgba(182,141,64,0.7)] sm:inline-block"
          >
            Besuch planen
          </Link>
          <button
            aria-label="Menü öffnen"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="grid size-10 shrink-0 place-items-center border border-anthracite/15 text-anthracite transition-colors duration-300 hover:border-gold hover:text-gold lg:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-anthracite/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Panel */}
        <div
          style={{ backgroundColor: "var(--ivory)" }}
          className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-anthracite/10 px-5 py-3">
            <img
              src={logoAsset.url}
              alt="Juwelier Gold & Star"
              className="h-10 w-auto"
            />
            <button
              aria-label="Menü schließen"
              onClick={() => setOpen(false)}
              className="grid size-10 place-items-center border border-anthracite/15 text-anthracite transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <X className="size-4" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 px-5 py-8">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-gold" }}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
                className={`border-b border-anthracite/10 py-4 font-serif text-2xl text-anthracite transition-all duration-500 ease-out hover:text-gold hover:translate-x-1 ${
                  open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-8 border border-anthracite bg-anthracite px-6 py-4 text-center text-xs uppercase tracking-[0.22em] text-ivory transition-all duration-500 hover:bg-gold hover:border-gold"
            >
              Besuch planen
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
