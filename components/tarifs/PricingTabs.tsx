"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Container, cx } from "@/components/ui/primitives";

export type PricingTab = { id: string; label: string; panel: ReactNode; /** Anchors (#…) that open this tab. */ anchors: string[] };

/**
 * /tarifs: "Logiciel" (default) | "Prospection" tabs, ARIA Tabs pattern (arrows, Home / End).
 * Both panels stay in the HTML (the inactive one is `hidden`), so search engines keep every
 * price. A link to #sprint, #mission… opens the right tab and scrolls to the card.
 */
export function PricingTabs({ tabs, label }: { tabs: PricingTab[]; label: string }) {
  const [active, setActive] = useState(tabs[0].id);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const anchors = tabs.map((t) => [t.id, ...t.anchors].join(",")).join("|");

  useEffect(() => {
    const map = anchors.split("|").map((group) => group.split(","));
    const open = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      const group = map.find((g) => g.includes(hash));
      if (!group) return;
      setActive(group[0]);
      window.setTimeout(() => document.getElementById(hash)?.scrollIntoView({ block: "start" }), 60);
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, [anchors]);

  const onKey = (e: KeyboardEvent, i: number) => {
    const last = tabs.length - 1;
    const keys: Record<string, number> = { ArrowRight: i === last ? 0 : i + 1, ArrowLeft: i === 0 ? last : i - 1, Home: 0, End: last };
    const next = keys[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setActive(tabs[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div className="pt-4">
      <Container>
        <div role="tablist" aria-label={label} className="mx-auto flex w-fit rounded-full border border-line bg-white p-1 shadow-[0_12px_30px_-24px_rgba(12,31,35,.4)]">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={active === t.id}
              aria-controls={`panel-${t.id}`}
              tabIndex={active === t.id ? 0 : -1}
              onClick={() => setActive(t.id)}
              onKeyDown={(e) => onKey(e, i)}
              className={cx(
                "rounded-full px-6 py-3 text-[15px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
                active === t.id ? "bg-navy text-white" : "text-ink/75 hover:text-ink",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </Container>
      {tabs.map((t) => (
        <div key={t.id} role="tabpanel" id={`panel-${t.id}`} aria-labelledby={`tab-${t.id}`} tabIndex={0} hidden={active !== t.id} className="mt-10 outline-none">
          {t.panel}
        </div>
      ))}
    </div>
  );
}
