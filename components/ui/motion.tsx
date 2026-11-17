"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { useEffect, useRef, type CSSProperties, type ReactNode, type RefObject } from "react";

/** Loads only the DOM animation features (used by the mega menu) and honours prefers-reduced-motion. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

/**
 * Reveal the first time a block scrolls into view: a fade and rise as one block, or a cascade
 * of its children with `stagger` (classes r-item, r-line, r-media, r-key: see app/globals.css).
 * Progressive enhancement: the server HTML is always visible (search engines, AI crawlers,
 * no-JS). Only blocks that are still below the fold after load get hidden, then revealed.
 * Styles live in app/globals.css ([data-reveal]).
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  stagger = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
  /** Keep the block in place and play its .r-item / .r-line / .r-media children in cascade. */
  stagger?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.dataset.reveal = "hidden";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.reveal = "shown";
        io.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      delete el.dataset.reveal;
    };
  }, []);

  const style = delay ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined;
  const mode = stagger ? { "data-stagger": "" } : {};
  if (as === "li")
    return (
      <li ref={ref as RefObject<HTMLLIElement>} className={className} style={style} {...mode}>
        {children}
      </li>
    );
  if (as === "article")
    return (
      <article ref={ref} className={className} style={style} {...mode}>
        {children}
      </article>
    );
  return (
    <div ref={ref as RefObject<HTMLDivElement>} className={className} style={style} {...mode}>
      {children}
    </div>
  );
}
