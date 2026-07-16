import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "article" | "header";
  className?: string;
  y?: number;
};

/**
 * Sanftes Einblenden beim Scrollen (IntersectionObserver).
 * Rendert serverseitig sichtbar, animiert nur clientseitig nach Hydration.
 */
export function Reveal({ children, delay = 0, as = "div", className = "", y = 24 }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as any;
  const shouldHide = hydrated && !visible;
  const style = {
    transitionDelay: `${delay}ms`,
    transform: shouldHide ? `translateY(${y}px)` : "translateY(0)",
    opacity: shouldHide ? 0 : 1,
  } as const;

  return (
    <Tag
      ref={ref as any}
      style={style}
      className={`transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
    >
      {children}
    </Tag>
  );
}
