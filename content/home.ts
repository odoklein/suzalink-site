/**
 * Tous les textes de la page d'accueil, section par section (dans l'ordre de la page).
 *
 * Règles éditoriales :
 * - chaque section : un eyebrow, un titre de 8 mots maximum, 1 à 2 lignes de texte, une seule action ;
 * - français simple, comme on parle à un dirigeant de PME : voir « Écrire simple » dans CLAUDE.md
 *   (téléprospecteur plutôt que SDR seul, pas de « stack », « outbound », « single-tenant »…) ;
 * - `mark` : le mot du titre souligné à la main en jaune (un seul par titre, pas sur chaque section) ;
 * - chaque affirmation correspond à une fonctionnalité réelle du produit ;
 * - aucun chiffre, logo ou témoignage inventé : les emplacements « Placeholder » / « TODO » sont à remplacer ;
 *   les logos clients (réels) sont dans content/brands.ts.
 *
 * Les prix sont dans content/pricing.ts et content/offers.ts, les photos dans content/images.ts.
 */

import { plans } from "./pricing";

export type Action = { label: string; href: string };

const annual = plans.map((p) => p.price.annual);

export const hero = {
  eyebrow: "Agences et équipes de prospection",
  title: "Le logiciel de la prospection téléphonique.",
  mark: "téléphonique",
  subtitle:
    "Appels, enregistrements, fiche de RDV par l'IA et portail client, dans un seul outil. Les données de chaque client sont hébergées à part.",
  primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
  secondary: { label: "Voir le logiciel", href: "/logiciel" },
  mockupLabel:
    "Aperçu du logiciel Suzalink : la liste des prospects à appeler, la fiche du contact en cours, les résultats en un clic et le bouton Appel suivant.",
};

/** Aiguillage : deux profils, deux pages. */
export const audience = {
  eyebrow: "Pour qui",
  title: "Une agence ou une équipe interne ?",
  subtitle: "Le même logiciel, réglé pour votre façon de prospecter.",
  items: [
    {
      eyebrow: "Je dirige une agence",
      title: "Vos clients voient leurs RDV, à votre marque.",
      body: "Plusieurs missions par téléprospecteur, portail client et marque blanche. Une base de données par agence.",
      action: { label: "Le logiciel pour les agences", href: "/solutions/agences-prospection" },
    },
    {
      eyebrow: "J'ai une équipe commerciale",
      title: "Votre équipe appelle, vous suivez en direct.",
      body: "File d'appels, téléphonie, appels enregistrés et tableau de bord manager, pour une équipe de 3 à 30 personnes.",
      action: { label: "Le logiciel pour les équipes", href: "/solutions/equipes-commerciales" },
    },
  ],
} as const;

export const logos = {
  eyebrow: "Références",
  title: "Ils utilisent Suzalink",
  subtitle: "Des agences de prospection et des centres d'appels B2B.",
  action: { label: "Voir une mission en chiffres", href: "/secteurs/cabinets-dentaires" },
  /** Deux chiffres déjà publiés (page /logiciel et mission dentaire). */
  stats: [
    { value: "≈ 20", label: "téléprospecteurs l'utilisent chaque jour", note: "chiffres internes, novembre 2026" },
    { value: "5 174", label: "appels sur une seule campagne, fin 2025", note: "mission cabinets dentaires" },
  ],
  /** Nos propres équipes (content/brands.ts, ownTeams), présentées honnêtement. */
  ownTeamsNote: "Nos propres équipes l'utilisent aussi chaque jour :",
  // La liste des clients et leurs logos : content/brands.ts
};

/** Le logiciel en 4 temps, autour d'un appel. */
export const how = {
  eyebrow: "Autour d'un appel",
  title: "De la file au portail client",
  mark: "portail",
  subtitle: "Le téléprospecteur appelle, note le résultat en une touche et passe au suivant. Le reste suit tout seul.",
  steps: [
    { title: "La file", body: "Le prospect suivant s'affiche, le résultat se note en une touche." },
    { title: "L'appel enregistré", body: "Allo ou OnOff, avec vos numéros. Chaque appel est gardé." },
    { title: "La fiche IA", body: "L'IA rédige la fiche de RDV, le téléprospecteur la relit." },
    { title: "Le portail client", body: "Votre client voit son RDV et peut écouter l'appel." },
  ],
  action: { label: "Voir le logiciel", href: "/logiciel" },
};

export const features = {
  eyebrow: "Le logiciel",
  title: "Le logiciel derrière chaque appel",
  /** Description of the whole grid for screen readers (the cards are UI illustrations). */
  label:
    "Aperçu du logiciel : la liste d'appels, le résultat en une touche, le résumé proposé par l'IA, l'historique des appels avec leurs enregistrements, et le portail client avec les RDV de la semaine.",
  queue: { title: "Liste d'appels", body: "Le prospect suivant s'affiche tout seul." },
  keys: { title: "Résultat en une touche", body: "Rappel, RDV pris, pas intéressé : une touche suffit." },
  ai: { title: "Résumé par l'IA", body: "L'IA résume l'appel et propose un résultat. Le téléprospecteur confirme." },
  journal: { title: "Historique des appels", body: "Les appels de la journée, avec leur durée et leur enregistrement." },
  portal: { title: "Portail client", body: "Vos clients voient leurs RDV à jour, sans vous écrire." },
};

export const stack = {
  eyebrow: "Coût total",
  title: "Cinq abonnements pour un seul métier",
  subtitle:
    "Fichier clients, téléphonie, écoute des appels, emails de relance : chaque outil se paie par personne. Calcul pour une équipe de 3.",
  action: { label: "Voir les tarifs", href: "/tarifs" },
  /** Taille d'équipe du calcul : l'offre Small Business inclut 3 utilisateurs (content/pricing.ts). */
  team: 3,
  bigNumberEyebrow: "Suzalink Small Business",
  bigNumberCaption: "HT par mois pour 3 utilisateurs, en annuel. Téléphonie, enregistrements et IA compris.",
  tableCaption: "Ce que coûtent les outils de prospection habituels pour une équipe de 3, par mois",
  columns: { tool: "Outil", use: "Usage", price: "Prix pour 3 / mois" },
  totalLabel: "Total",
  oursLabel: "Suzalink",
  oursUse: "Tout-en-un",
};

/**
 * Preuve : la mission dentaire réelle. Les chiffres viennent du bloc « proof » de
 * content/pages/prospection-externalisee.ts (une seule source).
 */
export const proof = {
  eyebrow: "Cas client",
  title: "147 rendez-vous en deux mois",
  subtitle:
    "Cabinets dentaires, fin 2025. Notre client devait faire accepter la visite d'un commercial terrain, partout en France.",
  action: { label: "Lire le cas client", href: "/cas-clients" },
};

export const cases = {
  eyebrow: "Cas clients",
  title: "Pourquoi les équipes nous font confiance",
  subtitle: "Des missions réelles, chiffres à l'appui.",
  action: { label: "Voir la mission dentaire", href: "/secteurs/cabinets-dentaires" },
  placeholderBadge: "Placeholder",
  readLabel: "Lire",
  // La section n'apparaît sur le site qu'à partir de deux cas réels (placeholder: false).
  // TODO : remplacer les « XX » par des résultats réels, validés par écrit avec chaque client.
  items: [
    // Mission réelle (client anonymisé) : Drive « LES RDV », nov.–déc. 2025.
    { image: "caseSmb", eyebrow: "Cabinets dentaires, 2025", title: "147 RDV terrain et 36 boîtes de collecte en deux mois", href: "/secteurs/cabinets-dentaires", placeholder: false },
    // TODO : cartes réservées, masquées tant qu'elles n'ont pas de résultat réel validé par écrit avec le client.
    //   { image: "caseAgency", eyebrow: "Agence de prospection", title: "XX téléprospecteurs pilotés sur un seul logiciel", href: "/secteurs/…", placeholder: true },
    //   { image: "caseFreelance", eyebrow: "Téléprospecteur indépendant", title: "XX appels par jour, sans changer d'outil", href: "/secteurs/…", placeholder: true },
  ],
} as const;

export const testimonial = {
  eyebrow: "Témoignage",
  placeholderBadge: "Placeholder",
  // La section reste masquée tant que `placeholder` vaut true.
  // TODO : remplacer par une citation réelle, validée par écrit avant publication, puis passer placeholder à false.
  placeholder: true,
  quote:
    "Emplacement réservé à un témoignage client. Remplacez ce texte par une citation réelle et validée.",
  name: "Prénom Nom",
  role: "Poste, Entreprise",
  logoLabel: "Logo client",
  action: { label: "Lire le cas client", href: "/secteurs/cabinets-dentaires" },
};

export const guaranteesSection = {
  eyebrow: "Garanties",
  title: "Nos engagements, écrits noir sur blanc",
  subtitle: "Ce que nous garantissons sur chaque mission de prospection.",
  action: { label: "Voir les offres", href: "/tarifs" },
  // Les garanties elles-mêmes : content/offers.ts (guarantees).
};

/** Tarifs sur l'accueil : les offres de prospection, puis un renvoi vers les offres du logiciel. */
export const offersHome = {
  eyebrow: "Tarifs",
  title: "Des prix publics, sans surprise",
  subtitle: "Hors taxes. Commencez par le sprint test : en deux semaines, vous savez ce que vaut votre cible.",
  crm: {
    text: (price: string) => `Votre équipe appelle elle-même ? Le logiciel Suzalink est à partir de ${price} HT par mois.`,
    action: { label: "Voir les offres du logiciel", href: "/tarifs" },
  },
};

/** Offres du logiciel (bloc utilisé sur /tarifs et /crm-agence-prospection). */
export const pricing = {
  eyebrow: "Tarifs du logiciel",
  title: "Un prix clair, tout compris",
  subtitle: "Appels, emails, relances et IA dans chaque offre. Prix HT, par mois.",
  periodLegend: "Période de facturation",
  perMonth: "HT / mois",
  usersIncluded: (n: number) => (n === 1 ? "1 utilisateur" : `${n} utilisateurs inclus`),
  extraSeat: (price: string, limit?: string) =>
    `+ ${price} HT / mois par utilisateur supplémentaire${limit ? `, ${limit}` : ""}`,
  annualTotal: (total: string) => `Soit ${total} HT facturés par an`,
  monthlyNote: "Sans engagement",
  saveLabel: (pct: number) => `jusqu'à −${pct} %`,
  footnote: "Tous les prix sont HT. Options disponibles : stockage d'appels, fiches IA supplémentaires, marque blanche.",
};

export const security = {
  eyebrow: "Sécurité",
  title: "Vos données restent les vôtres",
  subtitle:
    "Chaque client a son propre espace, sa propre base et ses propres enregistrements. Rien n'est partagé avec une autre entreprise.",
  action: { label: "Tout sur la sécurité", href: "/securite" },
  badges: [
    { icon: "server", title: "Un espace par client", body: "Votre logiciel tourne à part, jamais partagé avec une autre entreprise." },
    { icon: "database", title: "Une base à vous", body: "Vos contacts et vos notes sont rangés dans une base qui n'appartient qu'à vous." },
    { icon: "lock", title: "Des enregistrements privés", body: "Les appels enregistrés sont stockés dans un espace privé, à votre nom." },
    { icon: "shield", title: "RGPD", body: "Un refus d'être rappelé est noté et respecté sur toutes les missions." },
  ],
} as const;

/** Encart service : la prospection externalisée, en second. */
export const serviceBand = {
  eyebrow: "Prospection externalisée",
  title: "Pas d'équipe ? Nos téléprospecteurs appellent.",
  subtitle: "Ils travaillent sur le même logiciel : vous écoutez chaque appel. Commencez par deux semaines de test.",
  action: { label: "Découvrir la prospection externalisée", href: "/prospection-externalisee" },
};

/** FAQ de l'accueil (publiée aussi en données structurées FAQPage). */
export const homeFaq = {
  eyebrow: "Questions fréquentes",
  title: "Ce qu'on nous demande",
  items: [
    {
      q: "Qu'est-ce que Suzalink ?",
      a: "Un logiciel de prospection téléphonique pour les agences de prise de RDV et les équipes de téléprospection : file d'appels, téléphonie Allo et OnOff, appels enregistrés, fiche de RDV par l'IA et portail client. Voir [le logiciel](/logiciel).",
    },
    {
      q: "Combien coûte le logiciel ?",
      a: `De ${Math.min(...annual)} à ${Math.max(...annual)} € HT par mois en annuel selon l'offre et le nombre d'utilisateurs. Tous les prix sont publics : voir les [tarifs](/tarifs).`,
    },
    {
      q: "Mes données sont-elles séparées de celles des autres clients ?",
      a: "Oui. Chaque client a sa propre instance et sa propre base de données. Voir [sécurité](/securite).",
    },
    {
      q: "Vous pouvez aussi appeler pour nous ?",
      a: "Oui. Nos téléprospecteurs prennent vos RDV, sur le même logiciel : vous écoutez chaque appel. Voir la [prospection externalisée](/prospection-externalisee).",
    },
  ],
};

export const finalCta = {
  eyebrow: "Démo",
  title: "Voyez Suzalink sur vos missions",
  mark: "missions",
  subtitle: "Une démo sur vos propres cas, avec votre équipe.",
  action: { label: "Demander une démo", href: "/demo?offre=logiciel" },
};
