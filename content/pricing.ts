/**
 * TOUS LES PRIX DU LOGICIEL. Modifiez uniquement ce fichier pour changer un tarif.
 * Montants en euros HT, PAR UTILISATEUR ET PAR MOIS, affichés en mensuel.
 *
 * Grille décidée le 23 novembre 2026 : deux offres, 29 € et 59 € HT par utilisateur et par mois
 * (remplace l'ancienne grille 59 / 189 / 419 € par paquet d'utilisateurs).
 *
 * TODO direction, à confirmer avant mise en ligne :
 * - les quotas par utilisateur (heures d'enregistrement, fiches IA) : déduits de l'ancienne grille,
 *   soit 20 h et 150 fiches pour Équipe, 30 h et 300 fiches pour Agence ;
 * - les frais de mise en service (avant : 150 à 750 €) : plus affichés, à décider ;
 * - un éventuel tarif annuel (non affiché tant qu'il n'est pas décidé) ;
 * - les limites de contacts et de stockage (avant : 15 000 à 250 000 contacts, 5 à 100 Go).
 * Ce sont des engagements commerciaux : ne les changez que sur décision écrite.
 */

import type { ToolId } from "./brands";

export type PlanId = "equipe" | "agence";

export type Plan = {
  id: PlanId;
  name: string;
  /** Pour qui, en une ligne. */
  audience: string;
  /** Prix HT par utilisateur et par mois. */
  pricePerUser: number;
  highlight?: string;
  /** « Tout Équipe, plus : » en tête de liste. */
  includes?: string;
  features: string[];
  /** Ce que l'offre ne contient pas : affiché pour qu'on choisisse sans surprise. */
  notIncluded?: string[];
  cta: string;
};

export const currency = "EUR";

export const plans: Plan[] = [
  {
    id: "equipe",
    name: "Équipe",
    audience: "Pour une équipe de téléprospection qui veut appeler plus, et un manager qui veut tout voir.",
    pricePerUser: 29,
    features: [
      "File d'appels et résultat en une touche",
      "Rappels planifiés, rien ne se perd",
      "Téléphonie Allo ou OnOff, avec vos numéros",
      "Appels enregistrés : 20 h par utilisateur / mois",
      "Fiche de RDV par l'IA : 150 par utilisateur / mois",
      "Liste des priorités du matin",
      "Tableau de bord manager en direct",
      "Emails et modèles",
      "Une instance et une base de données à vous",
    ],
    notIncluded: ["Portail client", "Marque blanche", "Plusieurs clients en parallèle"],
    cta: "Choisir Équipe",
  },
  {
    id: "agence",
    name: "Agence",
    audience: "Pour une agence qui appelle pour plusieurs clients et doit leur prouver chaque RDV.",
    pricePerUser: 59,
    highlight: "Pour les agences",
    includes: "Tout Équipe, plus :",
    features: [
      "Portail client : RDV, appels et rapports",
      "Marque blanche : domaine, logo, couleurs",
      "Plusieurs missions par téléprospecteur",
      "RDV posé même sans agenda client",
      "Appels enregistrés : 30 h par utilisateur / mois",
      "Fiche de RDV par l'IA : 300 par utilisateur / mois",
    ],
    cta: "Choisir Agence",
  },
];

/** Prix d'appel affiché partout (« dès 29 € ») : le plus bas des prix par utilisateur. */
export const startingPrice = Math.min(...plans.map((p) => p.pricePerUser));
export const topPrice = Math.max(...plans.map((p) => p.pricePerUser));

/**
 * Tableau comparatif des 2 offres, fonction par fonction (page /tarifs).
 * true = inclus, false = non inclus. Les quotas reprennent les listes `features` ci-dessus.
 */
export const planComparison = {
  eyebrow: "Comparer",
  title: "Les deux offres, ligne par ligne",
  subtitle: "Prix HT, par utilisateur et par mois. Sans engagement.",
  groups: [
    {
      title: "Appeler",
      rows: [
        { label: "File d'appels et résultat en une touche", cells: [true, true] },
        { label: "Rappels planifiés", cells: [true, true] },
        { label: "Téléphonie Allo ou OnOff, vos numéros", cells: [true, true] },
        { label: "Appels enregistrés, par utilisateur / mois", cells: ["20 h", "30 h"] },
        { label: "Emails et modèles", cells: [true, true] },
      ],
    },
    {
      title: "Préparer les RDV",
      rows: [
        { label: "Fiche de RDV par l'IA, par utilisateur / mois", cells: ["150", "300"] },
        { label: "Liste des priorités du matin", cells: [true, true] },
        { label: "RDV posé sans agenda client", cells: [false, true] },
      ],
    },
    {
      title: "Piloter et montrer",
      rows: [
        { label: "Tableau de bord manager en direct", cells: [true, true] },
        { label: "Plusieurs missions par téléprospecteur", cells: [false, true] },
        { label: "Portail client", cells: [false, true] },
        { label: "Marque blanche (domaine, logo, couleurs)", cells: [false, true] },
      ],
    },
    {
      title: "Vos données",
      rows: [
        { label: "Une instance et une base de données à vous", cells: [true, true] },
        { label: "Vos données récupérables si vous arrêtez", cells: [true, true] },
      ],
    },
  ] satisfies Array<{ title: string; rows: Array<{ label: string; cells: Array<string | boolean> }> }>,
  note: "Options : heures d'enregistrement et fiches IA supplémentaires.",
};

/**
 * Accueil, « Cinq abonnements pour un seul métier ». Fourchettes de prix publics constatés,
 * HT, par utilisateur et par mois. TODO : revérifier chaque ligne avant publication
 * (la publicité comparative doit rester objective et vérifiable).
 */
export const stackComparison = {
  // `logos` : identifiants de content/brands.ts (logos affichés devant le nom).
  rows: [
    { tool: "HubSpot", logos: ["hubspot"], use: "CRM", min: 80, max: 150 },
    { tool: "Aircall", logos: ["aircall"], use: "Téléphonie", min: 40, max: 50 },
    { tool: "Modjo", logos: ["modjo"], use: "Analyse d'appels", min: 80, max: 120 },
    { tool: "Lemlist", logos: ["lemlist"], use: "Séquences email", min: 50, max: 80 },
    { tool: "Zapier ou Make", logos: ["zapier", "make"], use: "Connecteurs", min: 30, max: 60 },
  ] satisfies Array<{ tool: string; logos: ToolId[]; use: string; min: number; max: number }>,
  footnote:
    "Fourchettes indicatives de prix publics, HT, par utilisateur et par mois. Les tarifs des éditeurs peuvent évoluer.",
};

export const stackTotal = {
  min: stackComparison.rows.reduce((sum, r) => sum + r.min, 0),
  max: stackComparison.rows.reduce((sum, r) => sum + r.max, 0),
};

export const formatEuro = (amount: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency, maximumFractionDigits: 0 }).format(amount);
