/**
 * Page /pourquoi-suzalink : pourquoi Suzalink plutôt qu'un CRM généraliste et des outils séparés.
 * Mots-clés : « alternative CRM prospection téléphonique », « logiciel téléprospection tout-en-un ».
 *
 * Comparaison objective et vérifiable (publicité comparative) : les fourchettes de prix des outils
 * cités viennent de content/pricing.ts (stackComparison) et doivent être revérifiées avant chaque
 * mise en ligne. TODO : préciser si l'abonnement Allo ou OnOff est compris dans nos prix ou facturé
 * à part par l'opérateur ; d'ici là, le site dit « branché », jamais « offert ».
 */
import { plans, stackComparison, stackTotal } from "../pricing";
import type { LandingPage } from "./types";

const [equipe, agence] = plans;
const row = (tool: string) => {
  const r = stackComparison.rows.find((x) => x.tool === tool)!;
  return `${r.tool}, ${r.min} à ${r.max} € HT`;
};

export const pourquoiPage: LandingPage = {
  path: "/pourquoi-suzalink",
  meta: {
    title: "Pourquoi Suzalink : un outil au lieu de cinq",
    description: `CRM, téléphonie, écoute des appels, relances, connecteurs : ou Suzalink, dès ${equipe.pricePerUser} € HT par utilisateur et par mois. La comparaison ligne par ligne.`,
  },
  breadcrumb: "Pourquoi Suzalink",
  updated: "2026-11-23",
  hero: {
    eyebrow: "Pourquoi Suzalink",
    title: "Fait pour ceux qui décrochent le téléphone",
    lead: "La plupart des CRM ont été pensés pour suivre des ventes, pas pour enchaîner les appels toute la journée. Suzalink part de l'appel : la file, la ligne, l'enregistrement, la fiche, le portail. Rien d'autre à assembler.",
    primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
    secondary: { label: "Voir les tarifs", href: "/tarifs" },
    bullets: ["Un outil au lieu de cinq", `${equipe.pricePerUser} € ou ${agence.pricePerUser} € HT par utilisateur et par mois`, "Une base de données par client", "Sans engagement"],
  },
  blocks: [
    {
      kind: "answer",
      question: "Pourquoi choisir Suzalink plutôt qu'un CRM et des outils séparés ?",
      answer: `Parce que la prospection téléphonique demande cinq choses au même endroit : une file d'appels, une ligne, l'enregistrement de chaque appel, un compte rendu de RDV et un moyen de montrer les résultats au client. Avec des outils séparés, vous payez environ ${stackTotal.min} à ${stackTotal.max} € HT par personne et par mois. Suzalink réunit tout, dès ${equipe.pricePerUser} € HT.`,
      facts: ["File d'appels et résultat en une touche", "Chaque appel enregistré", "Fiche de RDV par l'IA, relue", "Portail client (offre Agence)"],
    },
    {
      kind: "compare",
      id: "comparaison",
      eyebrow: "Ligne par ligne",
      title: "Ce que vous n'aurez plus à assembler",
      intro: "À gauche, les outils qu'on empile d'habitude, avec leur prix public par personne. À droite, la même tâche dans Suzalink.",
      columns: ["Avec des outils séparés", "Avec Suzalink"],
      rows: [
        { label: "Suivre les contacts et les rappels", cells: [row("HubSpot"), "File d'appels, rappels planifiés, résultat en une touche"] },
        { label: "Appeler", cells: [row("Aircall"), "Votre ligne Allo ou OnOff, branchée dans la file"] },
        { label: "Réécouter les appels", cells: [row("Modjo"), "Chaque appel enregistré, 20 à 30 h par utilisateur et par mois"] },
        { label: "Relancer par email", cells: [row("Lemlist"), "Emails et modèles"] },
        { label: "Faire parler les outils entre eux", cells: [row("Zapier ou Make"), "Rien à brancher : tout est au même endroit"] },
        { label: "Écrire le compte rendu de RDV", cells: ["À la main, après chaque appel", "Rédigé par l'IA, relu par le téléprospecteur"] },
        { label: "Montrer les résultats au client", cells: ["Un export et un email le vendredi", "Le portail client, à votre marque (offre Agence)"] },
        { label: "Total par personne et par mois", cells: [`≈ ${stackTotal.min} à ${stackTotal.max} € HT`, `${equipe.pricePerUser} € ou ${agence.pricePerUser} € HT`] },
      ],
      note: `${stackComparison.footnote} Les noms cités appartiennent à leurs éditeurs ; ce sont des exemples courants, pas un classement.`,
    },
    {
      kind: "fit",
      id: "pour-qui",
      eyebrow: "Franchement",
      title: "Fait pour vous, ou pas",
      intro: "Nous préférons vous le dire avant la démo.",
      yes: {
        title: "Suzalink est fait pour vous si…",
        items: [
          "Votre équipe passe ses journées au téléphone.",
          "Vous devez prouver chaque RDV à un client ou à votre direction.",
          "Vous appelez pour plusieurs clients et vous en avez assez des tableurs : voir [agences](/solutions/agences-prospection).",
          "Vous voulez lire le prix avant d'appeler un commercial.",
        ],
      },
      no: {
        title: "Ce n'est pas pour vous si…",
        items: [
          "Vous ne prospectez pas par téléphone.",
          "Vous voulez un devis sur mesure avant de voir un prix : chez nous, il est déjà [écrit](/tarifs).",
          "Vous cherchez un outil où l'IA envoie des comptes rendus sans relecture.",
        ],
      },
    },
    { kind: "pledges", id: "engagements" },
    {
      kind: "faq",
      id: "faq",
      eyebrow: "Questions fréquentes",
      title: "Avant de changer d'outil",
      items: [
        {
          q: "Pourquoi Suzalink coûte-t-il moins cher que des outils séparés ?",
          a: "Parce que vous payez un seul outil, pensé pour un seul métier : la prospection au téléphone. Pas cinq abonnements qui se recouvrent, ni des connecteurs pour les faire parler.",
        },
        {
          q: "Qu'est-ce qui distingue Suzalink d'un CRM classique ?",
          a: "Il part de l'appel, pas du tableau de ventes : la file d'appels, la ligne, l'enregistrement, la fiche de RDV par l'IA et le portail client sont dans le même écran. Et chaque client a sa propre base de données.",
        },
        {
          q: "L'IA remplace-t-elle le téléprospecteur ?",
          a: "Non. Elle rédige la fiche de RDV et propose le résultat de l'appel ; le téléprospecteur relit et confirme. Voir [la fiche de RDV par l'IA](/logiciel/ia).",
        },
        {
          q: "Mes données restent-elles à moi si je pars ?",
          a: "Oui. Contacts, fichiers et enregistrements vous appartiennent. Voir [sécurité](/securite).",
        },
      ],
    },
    {
      kind: "links",
      id: "a-lire",
      eyebrow: "À voir aussi",
      title: "Pour vous faire votre avis",
      items: [
        { label: "Le logiciel", href: "/logiciel", body: "Les cinq fonctions autour d'un appel." },
        { label: "Tarifs", href: "/tarifs", body: "Deux offres, un prix par utilisateur, un calculateur." },
        { label: "Cas clients", href: "/cas-clients", body: "Une mission réelle, chiffres datés à l'appui." },
      ],
    },
    {
      kind: "cta",
      id: "demo",
      eyebrow: "Démo",
      title: "Comparez sur vos propres appels",
      intro: "Une démo sur une mission qui ressemble aux vôtres. Vous repartez avec le prix exact.",
      primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
      secondary: { label: "Voir les tarifs", href: "/tarifs" },
    },
  ],
};
