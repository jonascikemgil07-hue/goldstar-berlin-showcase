import { useEffect, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Weicher Übergang beim Wechseln der Route:
 * - Neuer Inhalt wird per key neu gemountet und blendet elegant ein
 *   (leichter Fade + minimale Aufwärtsbewegung + subtile Blur-Auflösung).
 * - Scrollt sanft nach oben.
 * - Respektiert prefers-reduced-motion.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    // sanft nach oben scrollen bei jedem Routenwechsel
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div key={pathname} className="page-transition-in">
      {children}
    </div>
  );
}
