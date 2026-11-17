import { offersHome } from "@/content/home";
import { formatEuro, startingPrice } from "@/content/pricing";
import { OfferCards } from "@/components/landing/Landing";
import { Reveal } from "@/components/ui/motion";
import { ArrowLink, Container, SectionHeader } from "@/components/ui/primitives";

/** Tarifs sur l'accueil : les trois offres de prospection, puis le renvoi vers le logiciel. */
export function OffersHome() {
  return (
    <section id="tarifs" aria-labelledby="offers-home-title" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            id="offers-home-title"
            eyebrow={offersHome.eyebrow}
            title={offersHome.title}
            subtitle={offersHome.subtitle}
            align="center"
          />
        </Reveal>
        <div className="mt-14">
          <OfferCards />
        </div>
        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-[20px] border border-line bg-white px-6 py-5 sm:flex-row sm:items-center sm:px-8">
          <p className="text-[16px] text-ink">{offersHome.crm.text(formatEuro(startingPrice))}</p>
          <ArrowLink href={offersHome.crm.action.href} className="shrink-0">
            {offersHome.crm.action.label}
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}
