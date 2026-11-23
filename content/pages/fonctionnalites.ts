/**
 * Page /fonctionnalites : toutes les fonctions du logiciel, rangées en six « touches », comme les
 * touches de résultat de la file d'appels. Chaque fonction listée existe aujourd'hui dans le produit
 * (mêmes sources que content/pricing.ts et les pages /logiciel/*). `plans` dit dans quelle offre elle est.
 * Mot-clé principal : « fonctionnalités logiciel de prospection téléphonique ».
 */
import { plans } from "../pricing";
import type { LandingPage } from "./types";

export type PlanId = (typeof plans)[number]["id"];
export type FeatureItem = { name: string; body: string; plans: PlanId[]; detail?: string };
export type Chapter = {
  id: string;
  key: number;
  /** Mot court sur la touche. */
  label: string;
  title: string;
  lead: string;
  items: FeatureItem[];
  link: { label: string; href: string };
  /** Description de la maquette pour les lecteurs d'écran. */
  demoLabel: string;
};

const both: PlanId[] = ["equipe", "agence"];
const agence: PlanId[] = ["agence"];

export const chapters: Chapter[] = [
  {
    id: "appeler",
    key: 1,
    label: "Appeler",
    title: "Le prochain appel est déjà à l'écran",
    lead: "Le téléprospecteur ne cherche plus qui appeler, ni où noter ce qu'on lui a dit.",
    items: [
      { name: "File d'appels", body: "Le prospect suivant s'affiche tout seul, avec sa fiche.", plans: both },
      { name: "Résultat en une touche", body: "RDV pris, rappel, pas intéressé : une touche, et au suivant.", plans: both },
      { name: "Rappels planifiés", body: "Un absent revient dans la file à une autre heure.", plans: both },
      { name: "Emails et modèles", body: "La relance part depuis la fiche, sans changer d'outil.", plans: both },
      { name: "Plusieurs missions par téléprospecteur", body: "Scripts, listes et rappels suivent la mission, pas la personne.", plans: agence },
    ],
    link: { label: "La file d'appels en détail", href: "/logiciel/file-appels" },
    demoLabel: "Illustration de la file d'appels : un appel en cours avec son chronomètre, les touches de résultat 1 à 4 et le prochain contact à appeler.",
  },
  {
    id: "enregistrer",
    key: 2,
    label: "Enregistrer",
    title: "Chaque appel est gardé, et retrouvé",
    lead: "Vos numéros, votre opérateur, et l'enregistrement de chaque échange.",
    items: [
      { name: "Allo et OnOff intégrés", body: "L'appel part depuis la fiche, avec vos numéros.", plans: both },
      { name: "Appels enregistrés", body: "Gardés dans un stockage privé, à votre nom.", plans: both, detail: "20 h (Équipe) ou 30 h (Agence) par utilisateur et par mois" },
      { name: "Historique de la journée", body: "Chaque appel avec sa durée, son résultat et son enregistrement.", plans: both },
      { name: "Écoute et partage en un clic", body: "Pour coacher, comprendre un refus ou le montrer au client.", plans: both },
    ],
    link: { label: "La téléphonie en détail", href: "/logiciel/telephonie" },
    demoLabel: "Illustration de l'historique des appels : trois appels de la matinée avec leur durée et leur résultat, et le lecteur d'un appel enregistré.",
  },
  {
    id: "preparer",
    key: 3,
    label: "Préparer",
    title: "La fiche de RDV, écrite pour vous",
    lead: "L'IA rédige, le téléprospecteur relit, le commercial reçoit une fiche propre.",
    items: [
      { name: "Fiche de RDV par l'IA", body: "Besoin, budget, décideur et objections, rangés au même endroit.", plans: both, detail: "150 (Équipe) ou 300 (Agence) fiches par utilisateur et par mois" },
      { name: "Résultat proposé", body: "L'IA propose le résultat de l'appel, une touche le confirme.", plans: both },
      { name: "Priorités du matin", body: "Chaque téléprospecteur commence la journée avec sa liste.", plans: both },
      { name: "RDV sans agenda client", body: "Le RDV est posé même si votre client n'a pas de calendrier partagé.", plans: agence },
    ],
    link: { label: "La fiche de RDV en détail", href: "/logiciel/ia" },
    demoLabel: "Illustration d'une fiche de RDV rédigée par l'IA : besoin, budget, décideur et objections, avec les boutons Confirmer et Modifier.",
  },
  {
    id: "piloter",
    key: 4,
    label: "Piloter",
    title: "Le retard se voit le mardi, pas le vendredi",
    lead: "Le manager suit les appels, les RDV et le rythme de chacun, en direct.",
    items: [
      { name: "Tableau de bord manager", body: "Appels, RDV et rythme de chaque téléprospecteur, en direct.", plans: both },
      { name: "Alerte de rythme", body: "Une alerte signale qui prend du retard.", plans: both },
      { name: "Rôles et permissions", body: "Téléprospecteur, manager, client : chacun voit ce qui le concerne.", plans: both },
      { name: "Vue par mission", body: "Les chiffres de chaque client, séparés.", plans: agence },
    ],
    link: { label: "Le logiciel pour les équipes", href: "/solutions/equipes-commerciales" },
    demoLabel: "Illustration du tableau de bord manager : le nombre d'appels et de RDV de quatre téléprospecteurs, et une alerte sur celui qui prend du retard.",
  },
  {
    id: "montrer",
    key: 5,
    label: "Montrer",
    title: "Vos clients voient tout, à votre marque",
    lead: "Le portail répond avant que le client ne pose la question.",
    items: [
      { name: "Portail client", body: "Ses RDV, ses appels enregistrés et ses rapports.", plans: agence },
      { name: "Marque blanche", body: "Votre domaine, votre logo, vos couleurs.", plans: agence },
      { name: "Chacun chez soi", body: "Un client ne voit jamais les données d'un autre.", plans: agence },
    ],
    link: { label: "Le portail client en détail", href: "/logiciel/portail-client" },
    demoLabel: "Illustration du portail client en marque blanche : les RDV de la semaine aux couleurs de l'agence.",
  },
  {
    id: "proteger",
    key: 6,
    label: "Protéger",
    title: "Une base de données par client",
    lead: "Votre logiciel tourne à part. Vos données restent les vôtres.",
    items: [
      { name: "Une instance par client", body: "Jamais partagée avec une autre entreprise.", plans: both },
      { name: "Une base de données à vous", body: "Vos contacts et vos notes, rangés chez vous.", plans: both },
      { name: "Refus de rappel respecté", body: "Noté une fois, respecté sur toutes les missions.", plans: both },
      { name: "Vos données récupérables", body: "Contacts, fichiers et enregistrements vous appartiennent.", plans: both },
    ],
    link: { label: "La sécurité en détail", href: "/securite" },
    demoLabel: "Schéma : trois clients, chacun avec sa propre instance, sa propre base de données et ses propres enregistrements, sans lien entre eux.",
  },
];

export const fonctionnalitesPage: LandingPage = {
  path: "/fonctionnalites",
  meta: {
    title: "Fonctionnalités du logiciel de prospection",
    description:
      "File d'appels, appels enregistrés, fiche de RDV par l'IA, tableau de bord manager, portail client, marque blanche : toutes les fonctions, par offre.",
  },
  breadcrumb: "Fonctionnalités",
  parent: { label: "Logiciel", href: "/logiciel" },
  updated: "2026-11-23",
  hero: {
    eyebrow: "Fonctionnalités",
    title: "Toutes les fonctions, touche par touche",
    lead: "Six touches, comme dans la file d'appels : appeler, enregistrer, préparer, piloter, montrer, protéger. Tout ce qui est listé ici existe aujourd'hui.",
    primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
    secondary: { label: "Voir les tarifs", href: "/tarifs" },
  },
  blocks: [
    {
      kind: "faq",
      id: "faq",
      eyebrow: "Questions fréquentes",
      title: "Sur les fonctionnalités",
      items: [
        { q: "Toutes les fonctions sont-elles dans les deux offres ?", a: "Presque. Le portail client, la marque blanche, les missions multiples et le RDV sans agenda client sont dans l'offre Agence. Tout le reste est dans les deux. Voir les [tarifs](/tarifs)." },
        { q: "La téléphonie est-elle comprise ?", a: "Le logiciel est branché à Allo et à OnOff, avec vos numéros. Voir [la téléphonie](/logiciel/telephonie)." },
        { q: "L'IA peut-elle envoyer une fiche sans relecture ?", a: "Non. Le téléprospecteur relit et confirme chaque fiche avant qu'elle parte. Voir [la fiche de RDV par l'IA](/logiciel/ia)." },
        { q: "Où sont mes données ?", a: "Dans votre propre instance, avec votre propre base de données. Voir [sécurité](/securite)." },
      ],
    },
    {
      kind: "links",
      id: "a-lire",
      eyebrow: "À voir aussi",
      title: "Pour aller plus loin",
      items: [
        { label: "Pourquoi Suzalink", href: "/pourquoi-suzalink", body: "Un outil au lieu de cinq abonnements." },
        { label: "Tarifs", href: "/tarifs", body: "Deux offres, un prix par utilisateur." },
        { label: "Agences de prospection", href: "/solutions/agences-prospection", body: "Le logiciel à votre marque, avec portail client." },
      ],
    },
    {
      kind: "cta",
      id: "demo",
      eyebrow: "Démo",
      title: "Appuyez sur les touches vous-même",
      intro: "Une démo sur une mission qui ressemble aux vôtres, de la file au portail client.",
      primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
      secondary: { label: "Voir les tarifs", href: "/tarifs" },
    },
  ],
};
