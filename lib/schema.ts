import { site } from "@/content/site";
import { plans } from "@/content/pricing";

/** schema.org SoftwareApplication for the Suzalink software, offers built from content/pricing.ts. */
export function softwareSchema(opts: { url?: string; description: string }) {
  const prices = plans.map((p) => p.pricePerUser);
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${site.url}/logiciel#logiciel`,
    name: site.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Logiciel de prospection téléphonique",
    operatingSystem: "Web",
    inLanguage: "fr-FR",
    url: opts.url ?? `${site.url}/logiciel`,
    description: opts.description,
    image: `${site.url}/opengraph-image.png`,
    publisher: { "@id": `${site.url}/#organisation` },
    featureList: [
      "File d'appels et résultat en une touche",
      "Téléphonie Allo et OnOff",
      "Enregistrement de chaque appel (Call Vault)",
      "Fiche de RDV rédigée par l'IA, relue par le téléprospecteur",
      "Portail client",
      "Marque blanche",
      "Tableau de bord manager",
      "Une instance et une base de données par client",
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      offerCount: plans.length,
      offers: plans.map((p) => ({
        "@type": "Offer",
        name: p.name,
        description: p.audience,
        price: p.pricePerUser,
        priceCurrency: "EUR",
        url: `${site.url}/tarifs#${p.id}`,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: p.pricePerUser,
          priceCurrency: "EUR",
          unitText: "par utilisateur et par mois",
          billingDuration: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
          referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitText: "utilisateur" },
          valueAddedTaxIncluded: false,
        },
      })),
    },
  };
}
