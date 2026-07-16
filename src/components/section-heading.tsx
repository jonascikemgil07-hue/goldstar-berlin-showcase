import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, intro, align = "left", className = "" }: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-3xl leading-[1.15] text-anthracite md:text-4xl lg:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-anthracite/70">{intro}</p>}
    </div>
  );
}
