/**
 * Page /solutions/equipes-commerciales : le logiciel pour les équipes de téléprospection internes
 * des PME et ETI (cible n°2). La page agences est content/pages/crm-agence-prospection.ts.
 * Mot-clé principal : « logiciel téléprospection équipe commerciale ».
 */
import { plans } from "../pricing";
import type { LandingPage } from "./types";

const [equipe] = plans;
const eur = (n: number) => `${n.toLocaleString("fr-FR")} €`;

export const equipesPage: LandingPage = {
  path: "/solutions/equipes-commerciales",
  meta: {
    title: "Logiciel pour équipe de téléprospection",
    description:
      "Équipez votre équipe de téléprospection : file d'appels, téléphonie, appels enregistrés, fiche de RDV par l'IA et tableau de bord manager en direct.",
  },
  breadcrumb: "Équipes commerciales",
  parent: { label: "Solutions", href: "/solutions" },
  updated: "2026-11-23",
  hero: {
    eyebrow: "Équipes commerciales",
    title: "Votre équipe appelle, vous voyez tout",
    lead: "Pour les PME et ETI qui prospectent avec leur propre équipe : chacun appelle depuis une file, chaque appel est enregistré, et le manager suit le rythme en direct.",
    primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
    secondary: { label: "Voir les tarifs", href: "/tarifs" },
    bullets: ["File d'appels et résultat en une touche", "Chaque appel enregistré", "Tableau de bord manager en direct", "Fiche de RDV par l'IA"],
  },
  blocks: [
    {
      kind: "answer",
      question: "Quel logiciel pour une équipe de téléprospection interne ?",
      answer: `Un outil qui réunit la file d'appels, la téléphonie, les appels enregistrés et le suivi du manager. Suzalink fait tout cela, avec la fiche de RDV rédigée par l'IA. L'offre ${equipe.name} coûte ${eur(equipe.pricePerUser)} HT par utilisateur et par mois, tableau de bord manager compris.`,
      facts: ["Tableau de bord manager en direct", "Allo ou OnOff avec vos numéros", "Chaque appel enregistré", `${equipe.name} : ${eur(equipe.pricePerUser)} HT / utilisateur / mois`],
    },
    {
      kind: "pains",
      id: "constat",
      eyebrow: "Sans outil dédié",
      title: "Ce qui freine une équipe interne",
      items: [
        { title: "Un tableur pour appeler", body: "Chacun cherche qui rappeler, et les relances se perdent entre deux journées." },
        { title: "Des appels invisibles", body: "Sans enregistrement, impossible de coacher ou de comprendre un refus." },
        { title: "Des comptes rendus à la main", body: "Après chaque RDV, il faut tout retaper pour le commercial qui s'y rend." },
      ],
    },
    {
      kind: "features",
      id: "fonctions",
      eyebrow: "Pour votre équipe",
      title: "Appeler plus, sans saisie",
      items: [
        { icon: "grid", title: "File d'appels", body: "Le suivant s'affiche, le résultat se note en une touche : [la file d'appels](/logiciel/file-appels)." },
        { icon: "phone", title: "Téléphonie intégrée", body: "Allo ou OnOff, avec vos numéros : [la téléphonie intégrée](/logiciel/telephonie)." },
        { icon: "waveform", title: "Appels enregistrés", body: "Réécoutez un échange pour coacher ou comprendre un refus." },
        { icon: "sparkle", title: "Fiche de RDV par l'IA", body: "Le commercial reçoit [une fiche prête](/logiciel/ia), relue par le téléprospecteur." },
        { icon: "chart", title: "Tableau de bord manager", body: "Appels, RDV et rythme de chacun, en direct." },
        { icon: "sun", title: "Les priorités du matin", body: "Chaque téléprospecteur commence la journée avec sa liste de priorités." },
      ],
    },
    {
      kind: "steps",
      id: "mise-en-service",
      eyebrow: "Mise en service",
      title: "Prêts à appeler en quelques étapes",
      items: [
        { title: "Votre espace", body: "On crée votre instance, avec sa propre base de données." },
        { title: "Vos contacts", body: "On importe vos contacts, listes et historiques." },
        { title: "Vos lignes", body: "On branche Allo ou OnOff avec vos numéros." },
        { title: "Votre équipe", body: "Une session de prise en main, sur vos vraies listes." },
      ],
    },
    {
      kind: "faq",
      id: "faq",
      eyebrow: "Questions fréquentes",
      title: "Ce que les équipes nous demandent",
      items: [
        { q: "Quelle offre pour une équipe interne ?", a: `L'offre ${equipe.name} : ${eur(equipe.pricePerUser)} HT par utilisateur et par mois, pour chaque personne qui appelle. Vous ajoutez ou retirez un utilisateur quand vous voulez. Voir les [tarifs](/tarifs).` },
        { q: "Y a-t-il un nombre minimum ou maximum d'utilisateurs ?", a: "Non : le prix est par personne, de 1 à autant que vous voulez. Voir les [tarifs](/tarifs)." },
        { q: "Pouvons-nous confier une partie des appels à vos téléprospecteurs ?", a: "Oui. Certaines équipes appellent elles-mêmes et nous confient le reste. Voir la [prospection externalisée](/prospection-externalisee)." },
        { q: "Nos données restent-elles chez nous ?", a: "Elles sont dans votre propre instance et votre propre base de données. Voir [sécurité](/securite)." },
      ],
    },
    {
      kind: "links",
      id: "a-lire",
      eyebrow: "À voir aussi",
      title: "Pour aller plus loin",
      items: [
        { label: "Le logiciel", href: "/logiciel", body: "Toutes les fonctions, autour d'un appel." },
        { label: "Tarifs", href: "/tarifs", body: "Deux offres, un prix par utilisateur, hors taxes." },
        { label: "Passer le barrage secrétaire", href: "/guides/barrage-secretaire", body: "Le guide à partager avec votre équipe, tiré de nos appels." },
      ],
    },
    {
      kind: "cta",
      id: "demo",
      eyebrow: "Démo",
      title: "Voyez votre équipe dans Suzalink",
      intro: "Une démo sur vos propres listes, avec le tableau de bord du manager.",
      primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
      secondary: { label: "Voir les tarifs", href: "/tarifs" },
    },
  ],
};

/** Page /solutions : le carrefour des quatre façons de travailler avec Suzalink. */
export const solutionsHub: LandingPage = {
  path: "/solutions",
  meta: {
    title: "Solutions : agences, équipes, partenaires",
    description:
      "Le logiciel de prospection téléphonique pour les agences et les équipes internes, le programme partenaires, et la prospection par nos téléprospecteurs.",
  },
  breadcrumb: "Solutions",
  updated: "2026-11-23",
  hero: {
    eyebrow: "Solutions",
    title: "Quatre façons de travailler avec nous",
    lead: "Vous avez une agence, une équipe interne, des clients à faire prospecter, ou pas d'équipe du tout. Le logiciel est le même, l'organisation change.",
    primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
    secondary: { label: "Voir le logiciel", href: "/logiciel" },
    bullets: ["Le même logiciel pour tous", "Chaque appel enregistré", "Une base de données par client", "Prix publics, hors taxes"],
  },
  blocks: [
    {
      kind: "answer",
      question: "Quelle solution Suzalink choisir ?",
      answer:
        "Une agence de prospection prend le logiciel avec la marque blanche et le portail client. Une PME ou une ETI avec sa propre équipe prend le logiciel avec le tableau de bord manager. Un directeur commercial externalisé rejoint le programme partenaires. Sans équipe, nos téléprospecteurs appellent pour vous.",
    },
    {
      kind: "links",
      id: "solutions",
      eyebrow: "Pour qui",
      title: "Choisissez votre point de départ",
      items: [
        { label: "Agences de prospection", href: "/solutions/agences-prospection", body: "Marque blanche, portail client, plusieurs missions par téléprospecteur." },
        { label: "Équipes commerciales", href: "/solutions/equipes-commerciales", body: "Votre équipe de téléprospection interne, pilotée en direct." },
        { label: "Partenaires", href: "/partenaires", body: "Directeurs commerciaux externalisés : des RDV pour vos clients." },
        { label: "Prospection externalisée", href: "/prospection-externalisee", body: "Pas d'équipe ? Nos téléprospecteurs appellent pour vous." },
        { label: "Tarifs", href: "/tarifs", body: "Logiciel et prospection : tous les prix sont publics." },
        { label: "Cas clients", href: "/cas-clients", body: "Des missions réelles, chiffres datés à l'appui." },
      ],
    },
    {
      kind: "faq",
      id: "faq",
      eyebrow: "Questions fréquentes",
      title: "Avant de choisir",
      items: [
        { q: "Puis-je combiner le logiciel et la prospection externalisée ?", a: "Oui. Certaines équipes appellent elles-mêmes avec le logiciel et nous confient une partie des appels. Tout est dans le même outil." },
        { q: "Le logiciel est-il le même pour une agence et une équipe interne ?", a: "Oui. L'agence ajoute la [marque blanche](/logiciel/marque-blanche) et le [portail client](/logiciel/portail-client) ; l'équipe interne s'appuie sur le tableau de bord manager." },
        { q: "Par où commencer ?", a: "Par une démo sur vos propres cas. Si vous n'avez pas d'équipe, par un [sprint test](/tarifs#sprint) de deux semaines." },
      ],
    },
    {
      kind: "cta",
      id: "demo",
      eyebrow: "Démo",
      title: "Parlons de votre organisation",
      intro: "Une démo sur une mission qui ressemble aux vôtres.",
      primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
      secondary: { label: "Voir les tarifs", href: "/tarifs" },
    },
  ],
};
