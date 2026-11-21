/**
 * Cas clients et témoignages nommés.
 *
 * Règles :
 * - un cas n'est publié que si `published: true` ET que ses chiffres sont réels, datés et validés
 *   par écrit avec le client (ou anonymisés avec son accord) ;
 * - un témoignage ne s'affiche que si TOUS ses champs sont remplis (photo, nom, poste, société,
 *   citation) et que `approved` vaut true. Sinon, rien n'apparaît sur le site.
 * Les visuels illustratifs de public/photos/ ne doivent jamais servir de photo de témoignage.
 */

export type Testimonial = {
  /** Photo réelle de la personne, dans public/photos/temoignages/. */
  photo: string | null;
  name: string | null;
  role: string | null;
  company: string | null;
  quote: string | null;
  /** Accord écrit de la personne pour publier son nom, sa photo et sa citation. */
  approved: boolean;
};

export type CaseStudy = {
  slug: string;
  published: boolean;
  /** Secteur ou type de client, affiché en eyebrow. */
  sector: string;
  title: string;
  /** Période de la mission, ex. « novembre–décembre 2025 ». */
  period: string;
  context: string;
  target: string;
  method: string;
  /** Chiffres datés, issus du suivi de mission. */
  stats: Array<{ value: string; label: string }>;
  whatWorked: string;
  /** Lien vers la page détaillée. */
  href: string;
  /** Source et date des chiffres. */
  note: string;
  testimonial?: Testimonial;
};

export const cases: CaseStudy[] = [
  {
    slug: "cabinets-dentaires",
    published: true,
    sector: "Cabinets dentaires",
    title: "147 RDV terrain en deux mois",
    period: "novembre–décembre 2025",
    context: "Notre client devait faire accepter le passage de son commercial terrain dans des cabinets dentaires, partout en France.",
    target: "Cabinets dentaires, plus de 20 départements.",
    method: "Appels hors des heures de soins, d'abord à l'assistante, avec une demande simple : le passage d'un commercial pour déposer une boîte de collecte. RDV groupés par tournée.",
    stats: [
      { value: "5 174", label: "appels passés" },
      { value: "147", label: "RDV pris pour le commercial terrain" },
      { value: "36", label: "cabinets d'accord pour une boîte de collecte" },
      { value: "20+", label: "départements couverts" },
    ],
    whatWorked: "Parler d'abord à l'assistante, qui décide souvent seule, et proposer une demande qu'elle peut accepter sans attendre le praticien.",
    href: "/secteurs/cabinets-dentaires",
    note: "Client anonymisé. Chiffres issus de notre suivi de mission.",
    // TODO : témoignage nommé du client, s'il accepte d'être cité (accord écrit).
    testimonial: { photo: null, name: null, role: null, company: null, quote: null, approved: false },
  },
  // TODO : prochains cas (agence cliente du logiciel, équipe interne…), à publier avec des chiffres réels validés.
];

export const publishedCases = cases.filter((c) => c.published);

/** true seulement si le témoignage est complet et approuvé : sinon il ne s'affiche pas. */
export function isTestimonialReady(t?: Testimonial): t is Testimonial & { photo: string; name: string; role: string; company: string; quote: string } {
  return Boolean(t && t.approved && t.photo && t.name && t.role && t.company && t.quote);
}
