import { homeFaq } from "@/content/home";
import { RichText } from "@/components/landing/RichText";
import { Container, SectionHeader, cascade } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/motion";

/** FAQ de l'accueil. Les mêmes questions sont publiées en FAQPage (app/page.tsx). */
export function HomeFaq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-y border-line bg-white py-24 sm:py-32">
      <Container>
        <Reveal stagger className="grid gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader id="faq-title" eyebrow={homeFaq.eyebrow} title={homeFaq.title} />
          </div>
          <div className="divide-y divide-line border-y border-line">
            {homeFaq.items.map((q, n) => (
              <details key={q.q} className="r-item group py-5" style={cascade(n + 2)}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 rounded-md text-[17px] font-medium text-ink transition-colors hover:text-navy [&::-webkit-details-marker]:hidden">
                  <h3 className="font-medium">{q.q}</h3>
                  <span
                    aria-hidden
                    className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-line text-navy transition-[transform,background-color,color] duration-300 group-open:rotate-45 group-open:border-navy group-open:bg-navy group-open:text-white"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[64ch] leading-relaxed text-muted">
                  <RichText text={q.a} />
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
