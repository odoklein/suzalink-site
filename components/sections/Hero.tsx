import { hero } from "@/content/home";
import { SdrQueueMockup } from "@/components/mockups/SdrQueueMockup";
import { ButtonLink, Container, Eyebrow, withMark } from "@/components/ui/primitives";

/**
 * Accueil, haut de page : eyebrow (mot-clé), titre avec le mot souligné, une phrase, deux actions,
 * puis le vrai logiciel sur fond uni. Pas de décor derrière la maquette : le produit est l'image.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 lg:pb-28">
      <Container className="flex flex-col items-center text-center">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1
          id="hero-title"
          className="font-display-tight mt-6 max-w-[16ch] text-[clamp(2.6rem,6.6vw,5rem)] leading-[1.02] font-light text-ink"
        >
          {withMark(hero.title, hero.mark)}
        </h1>
        <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted sm:text-xl">{hero.subtitle}</p>
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href={hero.primary.href} size="lg" arrow className="w-full sm:w-auto">
            {hero.primary.label}
          </ButtonLink>
          <ButtonLink href={hero.secondary.href} size="lg" variant="ghost" className="w-full sm:w-auto">
            {hero.secondary.label}
          </ButtonLink>
        </div>
      </Container>

      <Container className="mt-14 sm:mt-16">
        <div className="mx-auto max-w-[1080px] rounded-[28px] bg-sand p-2 sm:p-3">
          <SdrQueueMockup label={hero.mockupLabel} />
        </div>
      </Container>
    </section>
  );
}
