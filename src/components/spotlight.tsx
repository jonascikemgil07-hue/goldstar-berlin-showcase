import { useRef, type ReactNode } from "react";

/**
 * Weiches Cursor-Licht, das dem Zeiger folgt.
 * Setzt CSS-Variablen --mx / --my, die eine radiale Gold-Aura sichtbar machen.
 * Auf Touch-Geräten unauffällig (kein Hover).
 */
export function Spotlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
        el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
      }}
      className={`spotlight relative ${className}`}
    >
      {children}
    </div>
  );
}
