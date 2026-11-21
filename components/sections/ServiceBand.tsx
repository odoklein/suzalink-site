import { serviceBand } from "@/content/home";
import { Reveal } from "@/components/ui/motion";
import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";

/** Encart service : la prospection externalisée, présentée en second, après le logiciel. */
export function ServiceBand() {
  return (
    <section aria-labelledby="service-title" className="pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 rounded-[28px] border border-line bg-white p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="flex max-w-[60ch] flex-col gap-4">
              <Eyebrow>{serviceBand.eyebrow}</Eyebrow>
              <h2 id="service-title" className="font-display-tight text-[clamp(1.9rem,3.6vw,2.75rem)] leading-[1.05] font-light text-ink">
                {serviceBand.title}
              </h2>
              <p className="text-[17px] leading-relaxed text-muted">{serviceBand.subtitle}</p>
            </div>
            <ButtonLink href={serviceBand.action.href} variant="ghost" size="lg" arrow className="shrink-0">
              {serviceBand.action.label}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
