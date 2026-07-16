import { useEffect, useRef } from "react";

/**
 * Ganzflächiger, dezent animierter goldener Schleier im Hintergrund.
 * Reagiert auf Klicks mit einer sanften Ripple-Welle vom Klickpunkt aus.
 */
export function GoldVeil() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onClick = (e: MouseEvent) => {
      // nur bei interaktiven Elementen
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [role='button'], input[type='submit'], .magnetic-btn",
      );
      if (!interactive) return;

      const ripple = document.createElement("span");
      ripple.className = "gold-veil-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      root.appendChild(ripple);

      // Schleier kurz "aufblühen"
      root.classList.remove("is-pulsing");
      // force reflow to restart animation
      void root.offsetWidth;
      root.classList.add("is-pulsing");

      window.setTimeout(() => ripple.remove(), 1400);
    };

    window.addEventListener("click", onClick, { passive: true });
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <div ref={rootRef} className="gold-veil" aria-hidden="true">
      <span className="gold-veil-orb gold-veil-orb--1" />
      <span className="gold-veil-orb gold-veil-orb--2" />
      <span className="gold-veil-orb gold-veil-orb--3" />
      <span className="gold-veil-grain" />
    </div>
  );
}
