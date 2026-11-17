import type { CSSProperties } from "react";
import { guaranteesSection } from "@/content/home";
import { guarantees } from "@/content/offers";
import { Reveal } from "@/components/ui/motion";
import { Container, Mark, SectionHeader, cascade } from "@/components/ui/primitives";

/**
 * Les garanties, en grands mots soulignés à la main : calme, lisible, rassurant.
 * Mouvement : chaque engagement arrive à son tour, son filet se dessine, puis le trait jaune
 * vient souligner le mot, comme une signature au bas d'un contrat.
 */
export function Guarantees() {
  return (
    <section id="garanties" aria-labelledby="guarantees-title" className="border-y border-line bg-white py-24 sm:py-32">
      <Container>
        <Reveal stagger>
          <SectionHeader
            id="guarantees-title"
            eyebrow={guaranteesSection.eyebrow}
            title={guaranteesSection.title}
            subtitle={guaranteesSection.subtitle}
            action={guaranteesSection.action}
            actionVariant="ghost"
          />
          <ul className="mt-14 grid md:grid-cols-2 md:gap-x-16">
            {guarantees.map((g, n) => (
              <li key={g.title} className="relative py-9" style={{ ...cascade(n + 3), "--mark-delay": "0.6s" } as CSSProperties}>
                <span aria-hidden className="r-line absolute inset-x-0 top-0 h-px bg-line" />
                <div className="r-item">
                  <h3 className="font-display-tight text-[clamp(2rem,3.6vw,2.75rem)] leading-[1.1] font-light text-ink">
                    <Mark>{g.title}</Mark>.
                  </h3>
                  <p className="mt-4 max-w-[46ch] text-[17px] leading-relaxed text-muted">{g.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
