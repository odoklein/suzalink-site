import { logos } from "@/content/home";
import { customers, ownTeams } from "@/content/brands";
import { BrandMark } from "@/components/ui/BrandMark";
import { Reveal } from "@/components/ui/motion";
import { ArrowLink, Container, Eyebrow, cascade } from "@/components/ui/primitives";

/**
 * Customer strip (content/brands.ts). Motion: the logos arrive one by one, left to right,
 * and come back to colour on hover.
 */
export function LogoStrip() {
  return (
    <section aria-labelledby="logos-title" className="border-y border-line py-16 sm:py-20">
      <Container>
        <Reveal stagger>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <div className="r-item">
              <Eyebrow>{logos.eyebrow}</Eyebrow>
            </div>
            <h2 id="logos-title" className="r-item font-display-tight text-3xl font-light sm:text-4xl" style={cascade(1)}>
              {logos.title}
            </h2>
            <p className="r-item text-muted" style={cascade(2)}>
              {logos.subtitle}
            </p>
          </div>
          <div className="r-item" style={cascade(2)}>
            <ArrowLink href={logos.action.href}>{logos.action.label}</ArrowLink>
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap gap-3">
          {customers.map((c, n) => (
            <li key={c.domain} className="r-item min-w-[calc(50%-6px)] flex-1 sm:flex-none sm:basis-72" style={cascade(n + 3)}>
              <div
              className="group flex h-full min-h-24 flex-col items-center justify-center gap-2 rounded-[18px] border border-line bg-white/60 px-4 py-4 text-center text-ink/75 transition-colors duration-300 hover:bg-white hover:text-ink sm:flex-row sm:gap-3.5"
            >
              <BrandMark
                brand={c}
                size={36}
                className="grayscale transition-[filter] duration-300 group-hover:grayscale-0"
              />
              <span className="font-display-tight text-[17px] leading-tight font-normal sm:text-[21px] sm:whitespace-nowrap">{c.name}</span>
              </div>
            </li>
          ))}
        </ul>
        <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
          {logos.stats.map((st, n) => (
            <div key={st.label} className="r-item flex flex-col-reverse" style={cascade(customers.length + 3 + n)}>
              <dt className="mt-2 text-[15px] leading-snug text-muted">
                {st.label} <span className="text-[13px]">({st.note})</span>
              </dt>
              <dd className="font-display-tight text-[clamp(2.5rem,5vw,3.5rem)] leading-none font-light text-navy tabular-nums">{st.value}</dd>
            </div>
          ))}
        </dl>
        <p className="r-item mt-6 text-[15px] text-muted" style={cascade(customers.length + 3)}>
          {logos.ownTeamsNote} {ownTeams.map((t) => t.name).join(" et ")}.
        </p>
        </Reveal>
      </Container>
    </section>
  );
}
