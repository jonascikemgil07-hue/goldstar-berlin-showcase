import type { ReactNode } from "react";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2";
  highlight?: string; // Wort/Phrase, das in Gold-Italic gesetzt wird
  trailing?: ReactNode;
};

/**
 * Wortweise gestaffelte Enthüllung – jedes Wort blendet mit leichter Verzögerung ein.
 * Reduzierte Bewegung wird respektiert (Global CSS: prefers-reduced-motion).
 */
export function KineticHeading({
  text,
  className = "",
  as: Tag = "h1",
  highlight,
  trailing,
}: Props) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      {words.map((w, i) => {
        const isHi = highlight && w.replace(/[.,]/g, "") === highlight;
        return (
          <span
            key={i}
            className="kinetic-word"
            style={{ animationDelay: `${120 + i * 70}ms` }}
          >
            <span className="kinetic-word-inner">
              {isHi ? <em className="text-gold">{w}</em> : w}
            </span>
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
      {trailing}
    </Tag>
  );
}
