import Link from "next/link";
import { chapters, type Chapter } from "@/content/pages/fonctionnalites";
import { RichText } from "@/components/landing/RichText";
import { Reveal } from "@/components/ui/motion";
import { ArrowLink, Container, cascade, cx } from "@/components/ui/primitives";
import { ChapterKeys } from "./ChapterKeys";
import { demos } from "./demos";

/** Hero visual of /fonctionnalites: six keycaps, one per chapter, that jump to it. */
export function HeroKeys() {
  return (
    <nav aria-label="Aller à un chapitre" className="stage-visual">
      <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {chapters.map((c) => (
          <li key={c.id}>
            <Link
              href={`#${c.id}`}
              className="group flex aspect-[5/4] flex-col justify-between rounded-[18px] border border-line bg-white p-4 shadow-[0_5px_0_var(--color-line)] transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:bg-mint/30 hover:shadow-[0_7px_0_var(--color-line)] active:translate-y-[3px] active:shadow-[0_2px_0_var(--color-line)]"
            >
              <span className="font-mono text-[13px] text-muted transition-colors duration-200 group-hover:text-navy">{c.key}</span>
              <span className="font-display-tight text-[22px] leading-none font-normal text-ink">{c.label}</span>
            </Link>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-[13px] text-muted">
        Astuce : les touches <kbd className="rounded border border-line bg-white px-1.5 font-mono text-[12px]">1</kbd> à{" "}
        <kbd className="rounded border border-line bg-white px-1.5 font-mono text-[12px]">6</kbd> de votre clavier marchent aussi.
      </p>
    </nav>
  );
}

function KeyEyebrow({ c, dark }: { c: Chapter; dark?: boolean }) {
  return (
    <p className={cx("r-item flex items-center gap-2.5 font-mono text-[12px] tracking-[0.08em] uppercase", dark ? "text-mint" : "text-muted")}>
      <kbd className={cx("grid size-7 place-items-center rounded-[7px] font-mono text-[12px]", dark ? "bg-rose text-navy" : "bg-navy text-white")}>{c.key}</kbd>
      {c.label}
    </p>
  );
}

function Items({ c }: { c: Chapter }) {
  return (
    <ul className="flex flex-col">
      {c.items.map((it, n) => (
        <li key={it.name} className="r-item border-t border-line py-4 first:border-t-0 first:pt-0" style={cascade(n + 3)}>
          <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[16px] font-semibold text-ink">
            {it.name}
            {it.plans.length === 1 ? (
              <span className="rounded-full bg-rose/25 px-2 py-0.5 text-[11.5px] font-semibold text-amber-ink">Offre Agence</span>
            ) : null}
          </p>
          <p className="mt-1 text-[15px] leading-relaxed text-muted">
            <RichText text={it.body} />
          </p>
          {it.detail ? <p className="mt-1 text-[13px] text-navy">{it.detail}</p> : null}
        </li>
      ))}
    </ul>
  );
}

function Head({ c, center }: { c: Chapter; center?: boolean }) {
  return (
    <div className={cx("flex flex-col gap-4", center && "items-center text-center")}>
      <KeyEyebrow c={c} />
      <h2 id={`${c.id}-title`} className="r-item font-display-tight max-w-[18ch] text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-light text-balance text-ink" style={cascade(1)}>
        {c.title}
      </h2>
      <p className="r-item max-w-[46ch] text-[17px] leading-relaxed text-pretty text-muted" style={cascade(2)}>
        {c.lead}
      </p>
    </div>
  );
}

function Chapter({ c, index }: { c: Chapter; index: number }) {
  const Demo = demos[c.id as keyof typeof demos];
  const demo = (
    <div className="r-item min-w-0" style={cascade(2)}>
      <Demo label={c.demoLabel} />
    </div>
  );
  const more = (
    <div className="r-item mt-6" style={cascade(c.items.length + 4)}>
      <ArrowLink href={c.link.href}>{c.link.label}</ArrowLink>
    </div>
  );
  // Layouts vary from chapter to chapter so the page doesn't read as one long zigzag.
  const layout = ["split", "stacked", "split-reverse", "split", "stacked", "centered"][index];
  return (
    <section id={c.id} aria-labelledby={`${c.id}-title`} className={cx("scroll-mt-36 py-20 sm:py-28", index % 2 === 1 && "border-y border-line bg-white")}>
      <Container>
        {layout === "stacked" ? (
          <Reveal stagger>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
              <Head c={c} />
              <div>
                <Items c={c} />
                {more}
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-[1040px]">{demo}</div>
          </Reveal>
        ) : layout === "centered" ? (
          <Reveal stagger className="flex flex-col items-center">
            <Head c={c} center />
            <div className="mt-12 w-full max-w-[880px]">{demo}</div>
            <ul className="mt-12 grid w-full gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {c.items.map((it, n) => (
                <li key={it.name} className="r-item" style={cascade(n + 4)}>
                  <p className="text-[16px] font-semibold text-ink">{it.name}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{it.body}</p>
                </li>
              ))}
            </ul>
            {more}
          </Reveal>
        ) : (
          <Reveal stagger className={cx("grid items-center gap-12 lg:gap-20", "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]")}>
            <div className={cx(layout === "split-reverse" && "lg:order-2")}>
              <Head c={c} />
              <div className="mt-8">
                <Items c={c} />
              </div>
              {more}
            </div>
            {demo}
          </Reveal>
        )}
      </Container>
    </section>
  );
}

/** The six chapters of /fonctionnalites, with the sticky key row. */
export function FeaturesCatalog() {
  return (
    <>
      <ChapterKeys keys={chapters.map(({ id, key, label }) => ({ id, key, label }))} />
      <p className="sr-only">Tout est inclus dans les deux offres, sauf les fonctions marquées « Offre Agence ».</p>
      <Container>
        <p className="pt-10 text-center text-[14px] text-muted">
          Tout est inclus dans les deux offres, sauf ce qui porte la mention{" "}
          <span className="rounded-full bg-rose/25 px-2 py-0.5 text-[12px] font-semibold text-amber-ink">Offre Agence</span>.{" "}
          <Link href="/tarifs" className="font-medium text-navy underline decoration-mint decoration-2 underline-offset-4 transition-colors duration-200 hover:decoration-navy">
            Voir les tarifs
          </Link>
        </p>
      </Container>
      {chapters.map((c, n) => (
        <Chapter key={c.id} c={c} index={n} />
      ))}
    </>
  );
}
