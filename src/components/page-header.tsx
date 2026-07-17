import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
};

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <section className="relative px-5 pt-6 md:px-8">
      <div className="liquid-glass mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-20 md:pt-28">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl leading-[1.1] text-anthracite md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-anthracite/70">{intro}</p>
        )}
      </div>
    </section>
  );
}
