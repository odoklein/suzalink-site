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

const perUser = plans.map((p) => p.pricePerUser);

export const hero = {
  eyebrow: "Logiciel de prospection téléphonique",
  title: "Appelez plus. Saisissez moins.",
  mark: "moins",
  subtitle:
    "File d'appels, téléphonie, appels enregistrés, fiche de RDV par l'IA et portail client, dans un seul outil. Dès 29 € HT par utilisateur et par mois.",
  primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
  secondary: { label: "Voir les tarifs", href: "/tarifs" },
  mockupLabel:
    "Aperçu du logiciel Suzalink : la liste des prospects à appeler, la fiche du contact en cours, les résultats en un clic et le bouton Appel suivant.",
};

/**
 * « Ça vous parle ? » : les situations que nos clients vivaient avant Suzalink, en une ligne chacune.
 * Elles reprennent les constats déjà publiés sur le site (pages agences, équipes, portail).
 */
export const pains = {
  eyebrow: "Ça vous parle ?",
  title: "Si vous avez dit oui une fois",
  subtitle: "C'est pour ces moments-là que nous avons construit Suzalink.",
  items: [
    "Vos rappels vivent dans un tableur ?",
    "Personne ne réécoute les appels ?",
    "Le compte rendu de RDV se tape à la main ?",
    "Vos clients demandent chaque vendredi combien d'appels ?",
    "Vous payez cinq abonnements par personne ?",
    "Un téléprospecteur, trois clients, trois fichiers ?",
    "Le manager découvre le retard en fin de semaine ?",
  ],
  action: { label: "Voir comment on règle ça", href: "/logiciel" },
};

/** Aiguillage : deux profils, deux pages. */
export const audience = {
  eyebrow: "Pour qui",
  title: "Agence ou équipe interne ?",
  subtitle: "Le même logiciel. Deux façons de l'utiliser.",
  items: [
    {
      eyebrow: "Vous appelez pour vos clients",
      title: "Prouvez chaque RDV, à votre marque.",
      body: "Plusieurs missions par téléprospecteur, un portail où chaque client voit ses RDV et écoute ses appels. Offre Agence, 59 € HT par utilisateur et par mois.",
      action: { label: "Le logiciel pour les agences", href: "/solutions/agences-prospection" },
    },
    {
      eyebrow: "Vous appelez pour vous",
      title: "Votre équipe appelle, vous voyez tout.",
      body: "File d'appels, appels enregistrés, fiche IA et tableau de bord manager en direct. Offre Équipe, 29 € HT par utilisateur et par mois.",
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
  title: "Un appel. Une touche. Au suivant.",
  mark: "suivant",
  subtitle: "Le téléprospecteur appelle, note le résultat et passe au contact suivant. Le rappel, la fiche et le portail suivent tout seuls.",
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
  title: "Ce qu'il faut pour appeler. Rien d'autre.",
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
  subtitle: "Fichier, téléphonie, écoute des appels, relances : chaque outil se paie par personne. Chez nous aussi, mais une seule fois.",
  action: { label: "Voir les tarifs", href: "/tarifs" },
  bigNumberEyebrow: "Suzalink, offre Équipe",
  bigNumberCaption: "HT par utilisateur et par mois. Téléphonie, appels enregistrés et IA compris.",
  tableCaption: "Ce que coûtent les outils de prospection habituels, par personne et par mois",
  columns: { tool: "Outil", use: "Usage", price: "Prix / personne / mois" },
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

/** Offres du logiciel (bloc utilisé sur /tarifs). Les prix : content/pricing.ts. */
export const pricing = {
  eyebrow: "Tarifs du logiciel",
  title: "Un prix par personne. C'est tout.",
  subtitle: "HT, par utilisateur et par mois. Sans engagement, sans paquet d'utilisateurs imposé.",
  perUser: "HT / utilisateur / mois",
  monthlyNote: "Sans engagement, résiliable chaque mois",
  notIncludedLabel: "Pas dans cette offre",
  calculator: {
    title: "Combien êtes-vous à appeler ?",
    label: "Nombre d'utilisateurs",
    total: (n: number) => (n === 1 ? "pour 1 utilisateur, par mois" : `pour ${n} utilisateurs, par mois`),
  },
  footnote: "Tous les prix sont HT. Options : heures d'enregistrement et fiches IA supplémentaires.",
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
      a: `${Math.min(...perUser)} € ou ${Math.max(...perUser)} € HT par utilisateur et par mois, selon l'offre, sans engagement. Tous les prix sont publics : voir les [tarifs](/tarifs).`,
    },
    {
      q: "Mes données sont-elles séparées de celles des autres clients ?",
      a: "Oui. Chaque client a sa propre instance et sa propre base de données. Voir [sécurité](/securite).",
    },
    {
      q: "Je suis directeur commercial externalisé : comment travailler avec vous ?",
      a: "Vous gardez la stratégie, nos téléprospecteurs remplissent l'agenda de vos clients, et chaque client suit ses appels dans son portail. Voir le [programme partenaires](/partenaires).",
    },
    {
      q: "Vous pouvez aussi appeler pour nous ?",
      a: "Oui. Nos téléprospecteurs prennent vos RDV, sur le même logiciel : vous écoutez chaque appel. Voir la [prospection externalisée](/prospection-externalisee).",
    },
  ],
};

export const finalCta = {
  eyebrow: "Démo",
  title: "Le prochain appel vous attend.",
  mark: "appel",
  subtitle: "Une démo sur vos propres cas, avec votre équipe. Vous repartez avec le prix exact.",
  action: { label: "Demander une démo", href: "/demo?offre=logiciel" },
};
