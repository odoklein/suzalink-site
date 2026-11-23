import { pains } from "@/content/home";
import { Reveal } from "@/components/ui/motion";
import { ArrowLink, Container, Eyebrow, cascade } from "@/components/ui/primitives";

/**
 * « Ça vous parle ? » : the situations prospects recognise, on two slow ribbons that drift in
 * opposite directions. The list is real HTML once (readable by screen readers and search
 * engines); the moving copies are decorative. With reduced motion, the ribbons stand still
 * and wrap.
 */
export function Pains() {
  const half = Math.ceil(pains.items.length / 2);
  const rows = [pains.items.slice(0, half), pains.items.slice(half)];
  return (
    <section aria-labelledby="pains-title" className="overflow-hidden py-20 sm:py-24">
      <Container>
        <Reveal stagger className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <div className="r-item">
              <Eyebrow>{pains.eyebrow}</Eyebrow>
            </div>
            <h2 id="pains-title" className="r-item font-display-tight text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-light text-ink" style={cascade(1)}>
              {pains.title}
            </h2>
            <p className="r-item max-w-[52ch] text-muted" style={cascade(2)}>
              {pains.subtitle}
            </p>
          </div>
          <div className="r-item" style={cascade(3)}>
            <ArrowLink href={pains.action.href}>{pains.action.label}</ArrowLink>
          </div>
        </Reveal>
      </Container>

      <ul className="sr-only">
        {pains.items.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>

      <div aria-hidden className="marquee-mask mt-12 flex flex-col gap-3">
        {rows.map((row, r) => (
          <div key={r} className="marquee group/marquee flex w-max gap-3" data-direction={r === 0 ? "left" : "right"}>
            {[0, 1].map((copy) => (
              <div key={copy} className="marquee-track flex shrink-0 gap-3">
                {row.map((q) => (
                  <span
                    key={q}
                    className="flex items-center gap-3 rounded-full border border-line bg-white px-5 py-3 text-[16px] whitespace-nowrap text-ink shadow-[0_10px_24px_-20px_rgba(12,31,35,.35)] sm:text-[17px]"
                  >
                    <span className="size-1.5 rounded-full bg-rose" />
                    {q}
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
