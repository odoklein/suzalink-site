import { pledges } from "@/content/pledges";
import { Reveal } from "@/components/ui/motion";
import { ArrowLink, Container, SectionHeader, cascade } from "@/components/ui/primitives";

/**
 * « Nos engagements » : six promises on a navy band, set like a signed charter. Each line rises
 * in turn, its yellow number first, then the hairline draws under it.
 */
export function Pledges({ withAction = true }: { withAction?: boolean }) {
  return (
    <section id="engagements" aria-labelledby="pledges-title" className="on-dark relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(185,237,214,.12)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_80%_10%,black_10%,transparent_60%)]"
      />
      <Container className="relative">
        <Reveal stagger>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader id="pledges-title" eyebrow={pledges.eyebrow} title={pledges.title} subtitle={pledges.subtitle} tone="dark" />
            {withAction ? (
              <div className="r-item shrink-0" style={cascade(3)}>
                <ArrowLink href={pledges.action.href} tone="dark">
                  {pledges.action.label}
                </ArrowLink>
              </div>
            ) : null}
          </div>
          <ol className="mt-14 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {pledges.items.map((p, n) => (
              <li key={p.title} className="group relative py-8" style={cascade(n + 3)}>
                <span aria-hidden className="r-line absolute inset-x-0 top-0 h-px bg-white/15" />
                <div className="r-item">
                  <span aria-hidden className="font-mono text-[13px] text-rose tabular-nums">
                    {String(n + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display-tight mt-3 text-[clamp(1.6rem,2.6vw,2.1rem)] leading-[1.1] font-light text-white transition-colors duration-300 group-hover:text-mint">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-[38ch] text-[16px] leading-relaxed text-white/75">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
