import { hero } from "@/content/home";
import { SdrQueueMockup } from "@/components/mockups/SdrQueueMockup";
import { ButtonLink, Container, Eyebrow, cascade, withMark } from "@/components/ui/primitives";

/**
 * Accueil, haut de page. Chorégraphie (CSS seul, dès le premier affichage, voir .stage dans
 * app/globals.css) : l'eyebrow, puis chaque phrase du titre glisse hors d'un masque, le trait
 * jaune se dessine sous « visible », la phrase et les boutons suivent, enfin le logiciel se pose.
 * Une fois posé, l'appel en cours tourne et la touche « RDV pris » est pressée une fois.
 */
export function Hero() {
  // One line per sentence: « Des RDV qualifiés. » / « Chaque appel visible. »
  const lines = hero.title.split(/(?<=\.)\s+/);
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 lg:pb-28">
      <Container className="stage flex flex-col items-center text-center">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1
          id="hero-title"
          className="stage-lines font-display-tight mt-6 max-w-[16ch] text-[clamp(2.6rem,6.6vw,5rem)] leading-[1.02] font-light text-ink"
        >
          {lines.map((line, i) => (
            <span key={line} className="-mb-[0.22em] block overflow-hidden pb-[0.22em]">
              <span className="line-in block" style={cascade(i + 1)}>
                {withMark(line, hero.mark)}
              </span>
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted sm:text-xl" style={cascade(lines.length + 1)}>
          {hero.subtitle}
        </p>
        <div
          className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          style={cascade(lines.length + 2)}
        >
          <ButtonLink href={hero.primary.href} size="lg" arrow className="w-full sm:w-auto">
            {hero.primary.label}
          </ButtonLink>
          <ButtonLink href={hero.secondary.href} size="lg" variant="ghost" className="w-full sm:w-auto">
            {hero.secondary.label}
          </ButtonLink>
        </div>
      </Container>

      <Container className="mt-14 sm:mt-16">
        <div className="stage-visual mx-auto max-w-[1080px] rounded-[28px] bg-sand p-2 sm:p-3">
          <SdrQueueMockup label={hero.mockupLabel} />
        </div>
      </Container>
    </section>
  );
}
