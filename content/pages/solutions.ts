/**
 * Page /solutions/equipes-commerciales : le logiciel pour les équipes de téléprospection internes
 * des PME et ETI (cible n°2). La page agences est content/pages/crm-agence-prospection.ts.
 * Mot-clé principal : « logiciel téléprospection équipe commerciale ».
 */
import { plans } from "../pricing";
import type { LandingPage } from "./types";

const small = plans.find((p) => p.id === "small-business")!;
const eur = (n: number) => `${n.toLocaleString("fr-FR")} €`;

export const equipesPage: LandingPage = {
  path: "/solutions/equipes-commerciales",
  meta: {
    title: "Logiciel pour équipe de téléprospection",
    description:
      "Équipez votre équipe de téléprospection : file d'appels, téléphonie, appels enregistrés, fiche de RDV par l'IA et tableau de bord manager en direct.",
  },
  breadcrumb: "Équipes commerciales",
  updated: "2026-11-21",
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
      answer: `Un outil qui réunit la file d'appels, la téléphonie, l'enregistrement des appels et le suivi du manager. Suzalink fait tout cela, avec la fiche de RDV rédigée par l'IA. L'offre ${small.name} coûte ${eur(small.price.annual)} HT par mois en annuel pour ${small.seatsIncluded} utilisateurs, tableau de bord manager compris.`,
      facts: ["Tableau de bord manager en direct", "Allo ou OnOff avec vos numéros", "Chaque appel enregistré", `${small.name} : ${eur(small.price.annual)} HT / mois pour ${small.seatsIncluded}`],
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
        { icon: "grid", title: "File d'appels", body: "Le suivant s'affiche, le résultat se note en une touche. [Voir](/logiciel/file-appels)." },
        { icon: "phone", title: "Téléphonie intégrée", body: "Allo ou OnOff, avec vos numéros. [Voir](/logiciel/telephonie)." },
        { icon: "waveform", title: "Appels enregistrés", body: "Réécoutez un échange pour coacher ou comprendre un refus." },
        { icon: "sparkle", title: "Fiche de RDV par l'IA", body: "Le commercial reçoit une fiche prête, relue par le téléprospecteur. [Voir](/logiciel/ia)." },
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
        { q: "Quelle offre pour une équipe de 3 à 7 personnes ?", a: `L'offre ${small.name} : ${eur(small.price.annual)} HT par mois en annuel (${eur(small.price.monthly)} HT en mensuel) pour ${small.seatsIncluded} utilisateurs, puis ${eur(small.extraSeat!.price)} HT par utilisateur supplémentaire, jusqu'à 7. Voir les [tarifs](/tarifs).` },
        { q: "Et au-delà de 7 personnes ?", a: "L'offre Medium Business inclut 8 utilisateurs et accepte des utilisateurs supplémentaires. Voir les [tarifs](/tarifs)." },
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
        { label: "Tarifs", href: "/tarifs", body: "Trois offres publiques, hors taxes." },
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
