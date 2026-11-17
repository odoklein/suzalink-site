import Image from "next/image";
import { how } from "@/content/home";
import { resolveImage } from "@/lib/resolve-image";
import { Reveal } from "@/components/ui/motion";
import { ButtonLink, Container, SectionHeader } from "@/components/ui/primitives";

/**
 * « Comment ça marche » : le parcours d'un contact. Les étapes portent des touches 1 à 4,
 * comme les touches de résultat du logiciel (le motif de la page).
 */
export function HowItWorks() {
  const image = resolveImage("how");
  return (
    <section id="comment" aria-labelledby="how-title" className="border-y border-line bg-white py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader id="how-title" eyebrow={how.eyebrow} title={how.title} mark={how.mark} subtitle={how.subtitle} />
            <ol className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {how.steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <kbd
                    aria-hidden
                    className="grid size-9 shrink-0 place-items-center rounded-[10px] border border-line bg-paper font-mono text-[13px] text-navy shadow-[0_2px_0_var(--color-line)]"
                  >
                    {i + 1}
                  </kbd>
                  <div>
                    <h3 className="font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <ButtonLink href={how.action.href} variant="ghost" arrow className="mt-10">
              {how.action.label}
            </ButtonLink>
          </Reveal>
          {image ? (
            <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] bg-sand outline-1 -outline-offset-1 outline-ink/10">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
