import Image from "next/image";
import { finalCta } from "@/content/home";
import { resolveImage } from "@/lib/resolve-image";
import { ButtonLink, Container, Eyebrow, withMark } from "@/components/ui/primitives";

/**
 * Appel à l'action final : le chemin vers le repère jaune (du premier appel au RDV).
 * Sur ordinateur, le texte se pose sur le mur crème, à gauche de l'image ; sur téléphone,
 * il passe au-dessus de l'image.
 */
export function FinalCta() {
  const image = resolveImage("ctaPath");
  return (
    <section aria-labelledby="final-cta-title" className="py-24 sm:py-32">
      <Container>
        <div className="relative flex flex-col-reverse overflow-hidden rounded-[28px] bg-sand lg:block lg:min-h-[600px]">
          {image ? (
            <div className="relative aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1240px) 1180px, 100vw" className="object-cover object-[70%_center]" />
            </div>
          ) : null}
          <div className="relative flex flex-col items-start gap-6 p-8 sm:p-12 lg:max-w-[520px] lg:p-16">
            <Eyebrow>{finalCta.eyebrow}</Eyebrow>
            <h2 id="final-cta-title" className="font-display-tight text-[clamp(2.4rem,5vw,4rem)] leading-[1.04] font-light text-ink">
              {withMark(finalCta.title, finalCta.mark)}
            </h2>
            <p className="max-w-[36ch] text-lg text-ink/80">{finalCta.subtitle}</p>
            <ButtonLink href={finalCta.action.href} size="lg" arrow className="mt-2">
              {finalCta.action.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
