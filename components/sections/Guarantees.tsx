import { guaranteesSection } from "@/content/home";
import { guarantees } from "@/content/offers";
import { Reveal } from "@/components/ui/motion";
import { Container, Mark, SectionHeader } from "@/components/ui/primitives";

/** Les garanties, en grands mots soulignés à la main : calme, lisible, rassurant. */
export function Guarantees() {
  return (
    <section id="garanties" aria-labelledby="guarantees-title" className="border-y border-line bg-white py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            id="guarantees-title"
            eyebrow={guaranteesSection.eyebrow}
            title={guaranteesSection.title}
            subtitle={guaranteesSection.subtitle}
            action={guaranteesSection.action}
            actionVariant="ghost"
          />
        </Reveal>
        <ul className="mt-14 grid md:grid-cols-2 md:gap-x-16">
          {guarantees.map((g) => (
            <li key={g.title} className="border-t border-line py-9">
              <h3 className="font-display-tight text-[clamp(2rem,3.6vw,2.75rem)] leading-[1.1] font-light text-ink">
                <Mark>{g.title}</Mark>.
              </h3>
              <p className="mt-4 max-w-[46ch] text-[17px] leading-relaxed text-muted">{g.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
