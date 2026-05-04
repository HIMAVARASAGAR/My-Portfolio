"use client";

import { useMemo } from "react";

/**
 * NorrisText — Character-by-character hover slide animation
 * Inspired by Lando Norris' website.
 *
 * Usage:
 *   <NorrisText text="Hello World" tag="h2" className={styles.myTitle} />
 *   <NorrisText text="Click me" tag="a" href="/about" />
 */
export default function NorrisText({
  text,
  tag: Tag = "span",
  className = "",
  variant = "",
  ...rest
}) {
  const chars = useMemo(() => {
    // Use Intl.Segmenter for grapheme-safe splitting
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
      return Array.from(segmenter.segment(text), (s) => s.segment);
    }
    return Array.from(text);
  }, [text]);

  const variantClass = variant ? `norris-text--${variant}` : "";

  return (
    <Tag
      className={`norris-text ${variantClass} ${className}`.trim()}
      data-cursor="lg"
      {...rest}
    >
      {chars.map((char, i) => (
        <span
          key={`${i}-${char}`}
          className="norris-char"
          data-char={char}
          style={{ "--char-index": i }}
        >
          {char}
        </span>
      ))}
    </Tag>
  );
}
