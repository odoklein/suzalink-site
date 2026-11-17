import { logos } from "@/content/home";
import { customers } from "@/content/brands";
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

        <ul className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {customers.map((c, n) => (
            <li key={c.domain} className="r-item" style={cascade(n + 3)}>
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
        </Reveal>
      </Container>
    </section>
  );
}
