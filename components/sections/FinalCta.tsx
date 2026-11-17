import Image from "next/image";
import type { CSSProperties } from "react";
import { finalCta } from "@/content/home";
import { resolveImage } from "@/lib/resolve-image";
import { Reveal } from "@/components/ui/motion";
import { ButtonLink, Container, Eyebrow, cascade, withMark } from "@/components/ui/primitives";

/**
 * Appel à l'action final : le chemin vers le repère jaune (du premier appel au RDV).
 * Sur ordinateur, le texte se pose sur le mur crème, à gauche de l'image ; sur téléphone,
 * il passe au-dessus de l'image.
 * Mouvement : le plus lent de la page. L'image se pose longuement depuis un léger zoom, le titre
 * arrive, « agenda » se souligne, puis le bouton : la page finit sur une respiration.
 */
export function FinalCta() {
  const image = resolveImage("ctaPath");
  return (
    <section aria-labelledby="final-cta-title" className="py-24 sm:py-32">
      <Container>
        <Reveal stagger className="relative flex flex-col-reverse overflow-hidden rounded-[28px] bg-sand lg:block lg:min-h-[600px]">
          {image ? (
            <div
              className="r-media relative aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto"
              style={{ "--media-delay": "0s" } as CSSProperties}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1240px) 1180px, 100vw"
                className="object-cover object-[70%_center]"
              />
            </div>
          ) : null}
          <div className="relative flex flex-col items-start gap-6 p-8 sm:p-12 lg:max-w-[520px] lg:p-16">
            <div className="r-item" style={cascade(2)}>
              <Eyebrow>{finalCta.eyebrow}</Eyebrow>
            </div>
            <h2
              id="final-cta-title"
              className="r-item font-display-tight text-[clamp(2.4rem,5vw,4rem)] leading-[1.04] font-light text-ink"
              style={{ ...cascade(3), "--mark-delay": "0.7s" } as CSSProperties}
            >
              {withMark(finalCta.title, finalCta.mark)}
            </h2>
            <p className="r-item max-w-[36ch] text-lg text-ink/80" style={cascade(4)}>
              {finalCta.subtitle}
            </p>
            <div className="r-item mt-2" style={cascade(5)}>
              <ButtonLink href={finalCta.action.href} size="lg" arrow>
                {finalCta.action.label}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
