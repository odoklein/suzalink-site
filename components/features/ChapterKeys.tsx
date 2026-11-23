"use client";

import { useEffect, useState } from "react";
import { cx } from "@/components/ui/primitives";

type Key = { id: string; key: number; label: string };

/**
 * Sticky row of keys (1 to 6) under the header: each key jumps to its chapter and lights up
 * while that chapter is on screen, like the result keys of the call queue.
 * The digit keys of the keyboard work too (1 to 6), outside form fields.
 */
export function ChapterKeys({ keys }: { keys: Key[] }) {
  const [active, setActive] = useState(keys[0].id);

  useEffect(() => {
    const els = keys.map((k) => document.getElementById(k.id)).filter((e): e is HTMLElement => Boolean(e));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((e) => io.observe(e));
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (e.metaKey || e.ctrlKey || e.altKey || t.closest("input, textarea, select, [contenteditable]")) return;
      const k = keys.find((x) => String(x.key) === e.key);
      if (!k) return;
      document.getElementById(k.id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    };
    window.addEventListener("keydown", onKey);
    return () => {
      io.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, [keys]);

  return (
    <nav aria-label="Chapitres des fonctionnalités" className="sticky top-[72px] z-30 border-y border-line bg-paper/90 backdrop-blur-md">
      <ol className="mx-auto flex max-w-[1240px] gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] sm:px-6 lg:justify-center lg:px-8">
        {keys.map((k) => {
          const on = active === k.id;
          return (
            <li key={k.id} className="shrink-0">
              <a
                href={`#${k.id}`}
                aria-current={on ? "true" : undefined}
                className={cx(
                  "group flex h-11 items-center gap-2.5 rounded-[12px] border pr-4 pl-1.5 text-[14px] font-medium transition-[background-color,color,transform,box-shadow] duration-200 active:scale-[0.96]",
                  on ? "border-navy bg-navy text-white shadow-[0_3px_0_var(--color-night)]" : "border-line bg-white text-ink shadow-[0_3px_0_var(--color-line)] hover:bg-mint/40",
                )}
              >
                <kbd className={cx("grid size-8 place-items-center rounded-[8px] font-mono text-[13px]", on ? "bg-rose text-navy" : "bg-paper text-navy")}>{k.key}</kbd>
                {k.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
