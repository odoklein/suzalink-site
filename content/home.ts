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

export type Action = { label: string; href: string };

export const hero = {
  eyebrow: "Prise de rendez-vous B2B",
  title: "Des RDV qualifiés. Chaque appel visible.",
  mark: "visible",
  subtitle:
    "Nos téléprospecteurs remplissent votre agenda, et vous écoutez chaque appel. Vous avez votre équipe ? Elle appelle avec notre logiciel.",
  primary: { label: "Demander une démo", href: "/demo" },
  secondary: { label: "Lancer un sprint test", href: "/demo?offre=sprint" },
  mockupLabel:
    "Aperçu du logiciel Suzalink : la liste des prospects à appeler, la fiche du contact en cours, les résultats en un clic et le bouton Appel suivant.",
};

/** Juste sous le hero : à qui s'adresse Suzalink, profil par profil. */
export const audience = {
  eyebrow: "Pour qui",
  title: "À qui s'adresse Suzalink ?",
  subtitle: "Vous déléguez les appels, ou votre équipe les passe elle-même. Dans les deux cas, rien n'est caché.",
  items: [
    {
      eyebrow: "Dirigeant de PME",
      title: "Des RDV dans votre agenda, sans recruter.",
      body: "Nos téléprospecteurs appellent vos cibles. Un RDV non honoré est remplacé, et vous commencez par un test de deux semaines.",
      action: { label: "Découvrir la prospection externalisée", href: "/prospection-externalisee" },
    },
    {
      eyebrow: "Directeur commercial externalisé",
      title: "Vous fixez le cap, on remplit l'agenda de vos clients.",
      body: "Pour chaque client que vous nous confiez : une mission dédiée et un portail où il voit ses appels et ses RDV.",
      action: { label: "Devenir partenaire", href: "/partenaires" },
    },
    {
      eyebrow: "Agence ou équipe commerciale",
      title: "Votre équipe appelle avec notre logiciel.",
      body: "Liste d'appels, téléphonie, IA et portail client, à votre marque. À partir de 59 € HT par mois.",
      action: { label: "Découvrir le logiciel", href: "/crm-agence-prospection" },
    },
  ],
} as const;

export const logos = {
  eyebrow: "Références",
  title: "Ils prospectent avec Suzalink",
  subtitle: "Des agences de prospection et des centres d'appels B2B.",
  action: { label: "Voir une mission en chiffres", href: "/#cas-clients" },
  // La liste des clients et leurs logos : content/brands.ts
};

/** Comment ça marche : le parcours d'un contact, du fichier au RDV. */
export const how = {
  eyebrow: "Comment ça marche",
  title: "Un contact, un appel, un rendez-vous",
  mark: "rendez-vous",
  subtitle:
    "Le téléprospecteur appelle, note le résultat en une touche et passe au suivant. Rien ne se perd entre deux journées.",
  steps: [
    { title: "Un fichier propre", body: "Doublons et faux numéros retirés avant le premier appel." },
    { title: "Chaque appel enregistré", body: "Vous pouvez réécouter n'importe quel échange." },
    { title: "Des rappels planifiés", body: "Un prospect absent est rappelé à une autre heure." },
    { title: "Un RDV préparé", body: "Il arrive avec sa fiche : besoin, budget, décideur." },
  ],
  action: { label: "Voir une mission en détail", href: "/prospection-externalisee#methode" },
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
    "Fichier clients, téléphonie, écoute des appels, emails de relance : chaque outil se paie par commercial. Suzalink réunit tout.",
  action: { label: "Voir les tarifs", href: "/#tarifs" },
  bigNumberCaption: "HT par personne et par mois. Appels, emails, relances et IA compris.",
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
  eyebrow: "Une vraie mission",
  title: "147 rendez-vous en deux mois",
  subtitle:
    "Cabinets dentaires, fin 2025. Notre client devait faire accepter la visite d'un commercial terrain, partout en France.",
  action: { label: "Lire la mission complète", href: "/secteurs/cabinets-dentaires" },
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
    { image: "caseAgency", eyebrow: "Agence de prospection", title: "XX téléprospecteurs pilotés sur un seul logiciel", href: "#", placeholder: true },
    { image: "caseFreelance", eyebrow: "Téléprospecteur indépendant", title: "XX appels par jour, sans changer d'outil", href: "#", placeholder: true },
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
  action: { label: "Lire le cas client", href: "#" }, // TODO
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
    action: { label: "Voir les offres du logiciel", href: "/tarifs#crm" },
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
  action: { label: "Poser vos questions sécurité", href: "/demo" },
  badges: [
    { icon: "server", title: "Un espace par client", body: "Votre logiciel tourne à part, jamais partagé avec une autre entreprise." },
    { icon: "database", title: "Une base à vous", body: "Vos contacts et vos notes sont rangés dans une base qui n'appartient qu'à vous." },
    { icon: "lock", title: "Des enregistrements privés", body: "Les appels enregistrés sont stockés dans un espace privé, à votre nom." },
    { icon: "shield", title: "RGPD", body: "Un refus d'être rappelé est noté et respecté sur toutes les missions." },
  ],
} as const;

export const finalCta = {
  eyebrow: "Démo",
  title: "Prêt à remplir votre agenda ?",
  mark: "agenda",
  subtitle: "Une démo sur vos propres cas, avec votre équipe.",
  action: { label: "Demander une démo", href: "/demo" },
};
