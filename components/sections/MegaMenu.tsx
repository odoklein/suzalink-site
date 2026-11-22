"use client";

// Desktop mega menu (Logiciel, Solutions, Ressources) and the matching mobile accordions.
// Panels open on hover (with a short intent delay), on click, or with the keyboard
// (Enter, Space, ArrowDown), and close on Escape, outside click, pointer leave or navigation.
// No photo or illustration in the panels: brand icon tiles and text cards only (CLAUDE.md:
// a visual appears once on the site).
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";
import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { menu, type MenuFeature, type MenuItem, type MenuLink } from "@/content/menu";
import { Icon, type IconName } from "@/components/ui/Icon";
import { cx } from "@/components/ui/primitives";

type Panel = Extract<MenuItem, { columns: unknown }>;
const isPanel = (item: MenuItem): item is Panel => "columns" in item;

const ease = [0.16, 1, 0.3, 1] as const;

type AnyLink = { label: string; href: string; body?: string; icon?: IconName; tile?: string };

// Every link of a panel once (the mobile menu lists them all; the feature card often repeats a page).
const linksOf = (item: Panel): AnyLink[] => uniqueByHref([
  ...item.columns.flatMap((c) => [...c.links, ...(c.more ? [{ label: c.more.label, href: c.more.href, icon: "grid" as IconName }] : [])]),
  ...(item.feature ? [{ label: item.feature.label, href: item.feature.href, tile: item.feature.tile, icon: "sparkle" as IconName }] : []),
  ...(item.footer ?? []),
]);

function uniqueByHref(links: AnyLink[]) {
  const seen = new Set<string>();
  return links.filter((l) => (seen.has(l.href) ? false : (seen.add(l.href), true)));
}

function matches(pathname: string, href: string) {
  const path = href.split("#")[0];
  // The demo page is a contact link in several panels, not a section of the menu.
  if (!path || path === "/" || path === "/demo" || href.startsWith("http")) return false;
  return pathname === path || pathname.startsWith(`${path}/`);
}

/** Brand icon tile (public/creative/*.svg) or, failing that, a mint square with a line icon. */
function Tile({ link, size = "md" }: { link: { tile?: string; icon?: IconName }; size?: "sm" | "md" | "lg" }) {
  const box = size === "lg" ? "size-12 rounded-[14px]" : size === "md" ? "size-10 rounded-[12px]" : "size-8 rounded-[10px]";
  if (link.tile)
    return (
      <Image
        src={link.tile}
        alt=""
        width={48}
        height={48}
        unoptimized
        className={cx(box, "shrink-0 transition-transform duration-300 ease-out group-hover/link:-rotate-6 group-hover/link:scale-105")}
      />
    );
  return (
    <span
      className={cx(
        box,
        "grid shrink-0 place-items-center bg-navy text-mint shadow-[inset_0_0_0_1px_rgba(185,237,214,.18)] transition-transform duration-300 ease-out group-hover/link:-rotate-6 group-hover/link:scale-105",
      )}
    >
      <Icon name={link.icon ?? "arrowRight"} className={size === "sm" ? "size-4" : "size-5"} />
    </span>
  );
}

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.26, delay, ease },
});

function ListLink({ link, delay, onNavigate }: { link: MenuLink; delay: number; onNavigate: () => void }) {
  return (
    <m.li {...rise(delay)}>
      <Link
        href={link.href}
        onClick={onNavigate}
        className="group/link flex items-center gap-3 rounded-[14px] px-2.5 py-2 transition-colors duration-200 hover:bg-paper focus-visible:bg-paper"
      >
        <Tile link={link} size="sm" />
        <span className="min-w-0 flex-1">
          <span className="block text-[15px] font-medium text-ink">{link.label}</span>
          {link.body ? <span className="block truncate text-[13px] text-muted">{link.body}</span> : null}
        </span>
        <Icon
          name="arrowRight"
          className="size-4 shrink-0 -translate-x-1 text-navy opacity-0 transition-[opacity,transform] duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100 group-focus-visible/link:opacity-100"
        />
      </Link>
    </m.li>
  );
}

function StepLink({ link, n, delay, onNavigate }: { link: MenuLink; n: number; delay: number; onNavigate: () => void }) {
  return (
    <m.li {...rise(delay)}>
      <Link
        href={link.href}
        onClick={onNavigate}
        className="group/link relative flex h-full gap-4 rounded-[18px] border border-transparent p-4 transition-[background-color,border-color,box-shadow] duration-300 hover:border-line hover:bg-paper hover:shadow-[0_16px_32px_-26px_rgba(12,31,35,.45)] focus-visible:border-line focus-visible:bg-paper"
      >
        <Tile link={link} />
        <span className="min-w-0 flex-1">
          <span className="flex items-baseline justify-between gap-3">
            <span className="text-[15.5px] font-semibold text-ink">{link.label}</span>
            <span className="font-mono text-[11px] text-muted tabular-nums transition-colors group-hover/link:text-navy">{String(n).padStart(2, "0")}</span>
          </span>
          {link.body ? <span className="mt-1 block text-[13.5px] leading-relaxed text-muted">{link.body}</span> : null}
        </span>
      </Link>
    </m.li>
  );
}

function CardLink({ link, delay, onNavigate }: { link: MenuLink; delay: number; onNavigate: () => void }) {
  return (
    <m.li {...rise(delay)}>
      <Link
        href={link.href}
        onClick={onNavigate}
        className="group/link relative flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-paper p-6 transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-navy/20 hover:bg-white hover:shadow-[0_22px_44px_-28px_rgba(12,31,35,.45)]"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-[radial-gradient(closest-side,rgba(185,237,214,.7),transparent)] opacity-0 transition-opacity duration-500 group-hover/link:opacity-100"
        />
        <span className="relative flex items-start justify-between">
          <Tile link={link} size="lg" />
          <span className="grid size-8 place-items-center rounded-full border border-line bg-white text-navy transition-[transform,background-color,color,border-color] duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:border-navy group-hover/link:bg-navy group-hover/link:text-white">
            <Icon name="arrowUpRight" className="size-4" />
          </span>
        </span>
        <span className="relative mt-6 text-[17px] font-semibold text-ink">{link.label}</span>
        {link.body ? <span className="relative mt-1.5 text-[14px] leading-relaxed text-muted">{link.body}</span> : null}
      </Link>
    </m.li>
  );
}

/** Highlight on the right of a panel: a navy card with key points or real, published figures. */
function FeatureCard({ feature, onNavigate }: { feature: MenuFeature; onNavigate: () => void }) {
  return (
    <m.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.32, delay: 0.08, ease }}>
      <Link
        href={feature.href}
        onClick={onNavigate}
        className="group/feature on-dark relative flex h-full flex-col overflow-hidden rounded-[22px] bg-navy p-6 text-white transition-shadow duration-300 hover:shadow-[0_26px_50px_-28px_rgba(7,21,24,.8)]"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(185,237,214,.16)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:radial-gradient(ellipse_at_85%_0%,black_10%,transparent_65%)]"
        />
        <span className="relative flex items-center justify-between">
          <span className="eyebrow text-mint">{feature.tag}</span>
          {feature.tile ? <Image src={feature.tile} alt="" width={40} height={40} unoptimized className="size-10 rounded-[12px] ring-1 ring-white/15" /> : null}
        </span>
        <span className="relative mt-5 text-[19px] leading-snug font-semibold">{feature.label}</span>
        <span className="relative mt-2 text-[14px] leading-relaxed text-white/75">{feature.body}</span>
        {feature.points ? (
          <span className="relative mt-5 flex flex-wrap gap-2">
            {feature.points.map((p, i) => (
              <m.span
                key={p}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.24, delay: 0.18 + i * 0.05, ease }}
                className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[13px] text-white ring-1 ring-white/10"
              >
                <Icon name="check" className="size-3.5 text-mint" />
                {p}
              </m.span>
            ))}
          </span>
        ) : null}
        {feature.stats ? (
          <span className="relative mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-[14px] bg-white/15">
            {feature.stats.map((s) => (
              <span key={s.label} className="bg-navy p-3.5">
                <span className="font-display-tight block text-[32px] leading-none font-light text-mint tabular-nums">{s.value}</span>
                <span className="mt-1.5 block text-[13px] text-white/75">{s.label}</span>
              </span>
            ))}
          </span>
        ) : null}
        <span className="relative mt-auto flex items-center justify-between gap-3 pt-6 text-[14px] font-medium">
          {feature.note ? <span className="text-[12px] font-normal text-white/65">{feature.note}</span> : <span />}
          <span className="flex items-center gap-1.5">
            Découvrir
            <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover/feature:translate-x-1" />
          </span>
        </span>
      </Link>
    </m.div>
  );
}

function PanelContent({ item, onNavigate }: { item: Panel; onNavigate: () => void }) {
  let n = 0;
  const next = () => n++ * 0.03 + 0.05;
  const cols = item.columns.length;
  return (
    <div className="overflow-hidden rounded-[26px] border border-line bg-white shadow-[0_40px_80px_-40px_rgba(7,21,24,.45)]">
      <div className={cx("grid gap-6 p-6", item.feature ? "grid-cols-[minmax(0,1fr)_320px]" : "grid-cols-1")}>
        <div className={cx("grid gap-6", cols === 2 ? "grid-cols-2" : "grid-cols-1")}>
          {item.columns.map((col) => (
            <div key={col.title} className="min-w-0">
              <div className="mb-3 px-2.5">
                <p className="eyebrow text-muted">{col.title}</p>
                {col.intro ? <p className="mt-1.5 text-[14px] text-ink/70">{col.intro}</p> : null}
              </div>
              {col.layout === "cards" ? (
                <ul className={cx("grid gap-3", col.links.length >= 3 ? "grid-cols-3" : "grid-cols-2")}>
                  {col.links.map((l) => (
                    <CardLink key={l.href} link={l} delay={next()} onNavigate={onNavigate} />
                  ))}
                </ul>
              ) : col.layout === "steps" ? (
                <ol className="grid grid-cols-2 gap-1">
                  {col.links.map((l, i) => (
                    <StepLink key={l.href} link={l} n={i + 1} delay={next()} onNavigate={onNavigate} />
                  ))}
                  {col.more ? (
                    <m.li {...rise(next())}>
                      <Link
                        href={col.more.href}
                        onClick={onNavigate}
                        className="group/more flex h-full items-center justify-between gap-4 rounded-[18px] border border-dashed border-navy/25 p-4 transition-[background-color,border-color] duration-300 hover:border-navy/50 hover:bg-mint/25 focus-visible:bg-mint/25"
                      >
                        <span>
                          <span className="block text-[15.5px] font-semibold text-navy">{col.more.label}</span>
                          <span className="mt-1 block text-[13.5px] leading-relaxed text-muted">{col.more.body}</span>
                        </span>
                        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-navy text-white transition-transform duration-300 group-hover/more:translate-x-0.5">
                          <Icon name="arrowRight" className="size-4" />
                        </span>
                      </Link>
                    </m.li>
                  ) : null}
                </ol>
              ) : (
                <ul className="flex flex-col gap-0.5">
                  {col.links.map((l) => (
                    <ListLink key={l.href} link={l} delay={next()} onNavigate={onNavigate} />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        {item.feature ? <FeatureCard feature={item.feature} onNavigate={onNavigate} /> : null}
      </div>
      {item.footer || item.footerAction ? (
        <div className="flex items-center justify-between gap-4 border-t border-line bg-paper/70 px-5 py-3">
          <ul className="flex flex-wrap gap-1">
            {(item.footer ?? []).map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={onNavigate}
                  className="group/foot flex items-center gap-2.5 rounded-full px-3 py-2 text-[14px] font-medium text-ink transition-colors hover:bg-white focus-visible:bg-white"
                >
                  {l.icon ? (
                    <span className="grid size-7 place-items-center rounded-full bg-navy text-white transition-transform duration-200 group-hover/foot:scale-110">
                      <Icon name={l.icon} className="size-3.5" />
                    </span>
                  ) : null}
                  {l.label}
                  <Icon name="arrowRight" className="size-3.5 text-navy transition-transform duration-200 group-hover/foot:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
          {item.footerAction ? (
            <Link
              href={item.footerAction.href}
              onClick={onNavigate}
              className="group/act flex shrink-0 items-center gap-2 rounded-full bg-navy py-1.5 pr-1.5 pl-4 text-[14px] font-medium text-white transition-colors hover:bg-navy-deep"
            >
              {item.footerAction.label}
              <span className="grid size-7 place-items-center rounded-full bg-rose text-navy transition-transform duration-200 group-hover/act:translate-x-0.5">
                <Icon name="arrowRight" className="size-3.5" />
              </span>
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

/** Desktop navigation with dropdown panels. */
export function MegaMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState<number | null>(null);
  const openTimer = useRef<number | undefined>(undefined);
  const closeTimer = useRef<number | undefined>(undefined);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggers = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();

  const clearTimers = () => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
  };
  const close = useCallback(() => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
    setOpen(null);
  }, []);
  const hoverOpen = (i: number) => {
    clearTimers();
    // Instant switch when a panel is already open; short intent delay otherwise.
    if (open !== null) setOpen(i);
    else openTimer.current = window.setTimeout(() => setOpen(i), 70);
  };
  const scheduleClose = () => {
    window.clearTimeout(openTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 160);
  };

  useEffect(() => {
    if (open === null) return;
    const onDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) close();
    };
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        triggers.current[open]?.focus();
        close();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const onTriggerKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(i);
      requestAnimationFrame(() => document.getElementById(`${baseId}-${i}`)?.querySelector<HTMLElement>("a")?.focus());
    }
  };

  const current = open !== null ? menu[open] : null;
  // One active entry at most: the first panel that links to the current page.
  const activeIndex = menu.findIndex((item) =>
    isPanel(item) ? linksOf(item).some((l) => matches(pathname, l.href)) : matches(pathname, item.href),
  );

  return (
    <div ref={rootRef} className="hidden flex-1 justify-center lg:flex" onPointerLeave={(e) => e.pointerType === "mouse" && scheduleClose()}>
      <nav aria-label="Navigation principale">
        <ul className="flex items-center gap-1">
          {menu.map((item, i) => {
            const active = i === activeIndex;
            const expanded = open === i;
            const cls = cx(
              "relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[15px] transition-colors duration-200",
              expanded ? "bg-ink/[.05] text-ink" : "text-ink/75 hover:bg-ink/[.04] hover:text-ink",
              active && "font-medium text-navy",
            );
            const dot = (
              <span
                aria-hidden
                className={cx(
                  "absolute -bottom-1.5 left-1/2 size-1.5 -translate-x-1/2 rounded-[2px] bg-rose transition-[opacity,transform] duration-200",
                  expanded || (open === null && active) ? "scale-100 opacity-100" : "scale-0 opacity-0",
                )}
              />
            );
            return (
              <li key={item.label} onPointerEnter={(e) => (e.pointerType === "mouse" ? (isPanel(item) ? hoverOpen(i) : scheduleClose()) : undefined)}>
                {isPanel(item) ? (
                  <button
                    ref={(el) => {
                      triggers.current[i] = el;
                    }}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={expanded ? `${baseId}-${i}` : undefined}
                    onClick={() => (expanded ? close() : setOpen(i))}
                    onKeyDown={(e) => onTriggerKey(e, i)}
                    className={cls}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 12 12"
                      aria-hidden
                      className={cx("size-3 transition-transform duration-300", expanded && "rotate-180")}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3 4.5 3 3 3-3" />
                    </svg>
                    {dot}
                  </button>
                ) : (
                  <Link href={item.href} aria-current={active ? "page" : undefined} className={cls}>
                    {item.label}
                    {dot}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <AnimatePresence>
        {current && isPanel(current) ? (
          <>
            <m.div
              key="backdrop"
              aria-hidden
              className="absolute inset-x-0 top-full -z-10 h-[100dvh] bg-night/15 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onPointerDown={close}
            />
            <m.div
              key="panel"
              className="absolute inset-x-0 top-full px-4 pt-2 sm:px-6 lg:px-8"
              initial={{ opacity: 0, y: -10, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.99, transition: { duration: 0.14 } }}
              transition={{ duration: 0.22, ease }}
              style={{ transformOrigin: "top center" }}
              onPointerEnter={clearTimers}
            >
              <div className="mx-auto max-w-[1176px]">
                <AnimatePresence mode="wait" initial={false}>
                  <m.div
                    key={open}
                    id={`${baseId}-${open}`}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.08 } }}
                    transition={{ duration: 0.16, ease }}
                  >
                    <PanelContent item={current} onNavigate={close} />
                  </m.div>
                </AnimatePresence>
              </div>
            </m.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/** Mobile menu: one accordion per panel, plain links otherwise. */
export function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  const [expanded, setExpanded] = useState<number | null>(null);
  const pathname = usePathname();
  return (
    <ul className="flex flex-col">
      {menu.map((item, i) =>
        isPanel(item) ? (
          <li key={item.label} className="border-b border-line">
            <button
              type="button"
              aria-expanded={expanded === i}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="font-display-tight flex w-full items-center justify-between py-3.5 text-2xl font-light"
            >
              {item.label}
              <span
                aria-hidden
                className={cx(
                  "grid size-8 place-items-center rounded-full border border-line text-navy transition-transform duration-300",
                  expanded === i && "rotate-45 bg-navy text-white",
                )}
              >
                +
              </span>
            </button>
            <div className={cx("grid transition-[grid-template-rows] duration-300 ease-out", expanded === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <ul className="flex flex-col gap-0.5 overflow-hidden pb-2" hidden={expanded !== i}>
                {linksOf(item).map((l) => (
                  <li key={`${l.label}-${l.href}`}>
                    <Link
                      href={l.href}
                      onClick={onNavigate}
                      aria-current={matches(pathname, l.href) ? "page" : undefined}
                      className="group/link flex items-center gap-3 rounded-[12px] px-2 py-2.5 text-[16px] text-ink/85 active:bg-mint/40 aria-[current=page]:font-medium aria-[current=page]:text-navy"
                    >
                      <Tile link={l} size="sm" />
                      <span className="min-w-0">
                        <span className="block">{l.label}</span>
                        {l.body ? <span className="block text-[13px] leading-snug text-muted">{l.body}</span> : null}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ) : (
          <li key={item.label}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={matches(pathname, item.href) ? "page" : undefined}
              className="font-display-tight block border-b border-line py-3.5 text-2xl font-light aria-[current=page]:text-navy"
            >
              {item.label}
            </Link>
          </li>
        ),
      )}
    </ul>
  );
}
