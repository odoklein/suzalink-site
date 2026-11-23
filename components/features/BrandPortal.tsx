"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cx } from "@/components/ui/primitives";

// White-label demo: the visitor picks an agency colour and the client portal follows.
// The three colours are site tokens (teal, green, burgundy), all AA with white text.
const themes = [
  { id: "teal", name: "Teal", fill: "bg-navy", text: "text-navy", soft: "bg-navy/10" },
  { id: "vert", name: "Vert", fill: "bg-ok", text: "text-ok-ink", soft: "bg-ok/10" },
  { id: "bordeaux", name: "Bordeaux", fill: "bg-danger-ink", text: "text-danger-ink", soft: "bg-danger-ink/10" },
] as const;

const rdv = [
  ["Jeudi 10:00", "Société Nordfil", "Claire Martin"],
  ["Jeudi 14:30", "Bâtir et Co", "Pierre Petit"],
  ["Vendredi 11:00", "Delta Digital", "Alice Bernard"],
];

export function BrandPortal({ label }: { label: string }) {
  const [theme, setTheme] = useState<(typeof themes)[number]>(themes[0]);
  return (
    <div className="flex flex-col gap-4">
      <div role="group" aria-label="Couleur de votre agence (démonstration de la marque blanche)" className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-[14px] text-muted">Essayez une couleur :</span>
        {themes.map((t) => (
          <button
            key={t.id}
            type="button"
            aria-pressed={theme.id === t.id}
            onClick={() => setTheme(t)}
            className={cx(
              "flex h-10 items-center gap-2 rounded-full border px-3.5 text-[14px] font-medium transition-[background-color,color,transform] duration-200 active:scale-[0.96]",
              theme.id === t.id ? "border-ink/15 bg-white text-ink shadow-[0_8px_20px_-14px_rgba(12,31,35,.5)]" : "border-line bg-transparent text-ink/75 hover:bg-white hover:text-ink",
            )}
          >
            <span className={cx("size-4 rounded-full", t.fill)} />
            {t.name}
          </button>
        ))}
      </div>

      <div role="img" aria-label={label} className="select-none">
        <div aria-hidden className="overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_30px_60px_-36px_rgba(12,31,35,.45)]">
          <div className={cx("flex items-center gap-3 px-5 py-3.5 text-white transition-colors duration-300", theme.fill)}>
            <span className="grid size-8 place-items-center rounded-[10px] bg-white/15 text-[12px] font-bold">VA</span>
            <span className="text-[14px] font-semibold whitespace-nowrap">Votre agence</span>
            <span className="ml-auto hidden rounded-full bg-white/15 px-2.5 py-1 font-mono text-[11px] sm:inline">portail.votre-agence.fr</span>
          </div>
          <div className="grid gap-4 p-5 sm:grid-cols-[1fr_180px]">
            <div>
              <p className="text-[13px] font-semibold text-ink">RDV de la semaine</p>
              <ul className="mt-2 divide-y divide-line">
                {rdv.map(([d, c, p]) => (
                  <li key={d} className="flex items-center gap-3 py-2.5">
                    <span className={cx("grid size-8 shrink-0 place-items-center rounded-full transition-colors duration-300", theme.soft, theme.text)}>
                      <Icon name="calendar" className="size-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[13.5px] font-medium text-ink">{d}</span>
                      <span className="block text-[12px] text-muted">
                        {c}, {p}
                      </span>
                    </span>
                    <span className={cx("text-[12px] font-medium transition-colors duration-300", theme.text)}>Écouter l&apos;appel</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("flex flex-col justify-between rounded-[16px] p-4 transition-colors duration-300", theme.soft)}>
              <p className="text-[12px] text-muted">Cette semaine</p>
              <p className={cx("font-display-tight mt-2 text-[40px] leading-none font-light tabular-nums transition-colors duration-300", theme.text)}>3</p>
              <p className="text-[12px] text-ink/80">RDV confirmés</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
