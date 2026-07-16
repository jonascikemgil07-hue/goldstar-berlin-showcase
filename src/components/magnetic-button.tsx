import { useRef, type ReactNode, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
};

type LinkProps = CommonProps & {
  to: string;
  href?: never;
  onClick?: never;
  target?: never;
  rel?: never;
};

type AnchorProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  to?: never;
  onClick?: never;
};

type Props = LinkProps | AnchorProps;

const variants = {
  solid:
    "border border-anthracite bg-anthracite text-ivory hover:border-gold hover:bg-gold hover:shadow-[0_18px_40px_-20px_rgba(182,141,64,0.7)]",
  outline:
    "border border-anthracite/25 text-anthracite hover:border-gold hover:text-gold",
  ghost:
    "border border-ivory/25 text-ivory hover:border-gold hover:text-gold",
} as const;

/**
 * Button, dessen Inhalt einer Mausbewegung magnetisch folgt.
 * Auf Touch-Geräten fällt der Effekt automatisch weg (keine mousemove-Events).
 */
export function MagneticButton(props: Props) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  const handleMove = (e: MouseEvent) => {
    const el = wrapRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;
    const r = el.getBoundingClientRect();
    const relX = e.clientX - r.left - r.width / 2;
    const relY = e.clientY - r.top - r.height / 2;
    const strength = 0.22;
    inner.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
  };
  const reset = () => {
    if (innerRef.current) innerRef.current.style.transform = "translate(0,0)";
  };

  const classes = `magnetic-btn inline-flex items-center justify-center px-7 py-4 text-[11px] font-medium uppercase tracking-[0.24em] transition-all duration-500 ease-out ${
    variants[props.variant ?? "solid"]
  } ${props.className ?? ""}`;

  const inner = (
    <span
      ref={innerRef}
      className="inline-flex items-center gap-2 transition-transform duration-300 ease-out"
    >
      {props.children}
    </span>
  );

  if ("to" in props && props.to) {
    return (
      <span
        ref={wrapRef}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="inline-block"
      >
        <Link to={props.to as any} className={classes}>
          {inner}
        </Link>
      </span>
    );
  }
  return (
    <span
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      <a href={props.href} target={props.target} rel={props.rel} className={classes}>
        {inner}
      </a>
    </span>
  );
}
