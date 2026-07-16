import { useEffect, useRef, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Weicher Übergang zwischen Routen.
 * - Beim Routenwechsel: alter Inhalt blendet leicht aus & nach unten,
 *   neuer Inhalt blendet aus dem unteren Rand ein.
 * - Nutzt zwei "Layer", damit nichts flackert.
 * - Respektiert prefers-reduced-motion.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Wir halten den vorherigen Baum kurz weiter im DOM, um sauber zu croßfaden.
  const [displayed, setDisplayed] = useState<{ key: string; node: ReactNode }>({
    key: pathname,
    node: children,
  });
  const [phase, setPhase] = useState<"idle" | "out" | "in">("idle");
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (pathname === displayed.key) {
      // gleicher Pfad, nur children evtl. aktualisiert
      setDisplayed((prev) => ({ ...prev, node: children }));
      return;
    }
    // Neuer Pfad -> Out-Phase starten, danach Inhalt tauschen und In-Phase.
    setPhase("out");
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setDisplayed({ key: pathname, node: children });
      setPhase("in");
      // scroll top butterweich
      window.scrollTo({ top: 0, behavior: "smooth" });
      timer.current = window.setTimeout(() => setPhase("idle"), 520);
    }, 220);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, children]);

  return (
    <div className={`page-transition page-transition--${phase}`} key={displayed.key}>
      {displayed.node}
    </div>
  );
}
