/**
 * Pages /securite, /cas-clients et /contact.
 * Sécurité : uniquement ce que le produit fait réellement. Ce qui reste à confirmer est marqué TODO.
 */
import type { LandingPage } from "./types";

export const securitePage: LandingPage = {
  path: "/securite",
  meta: {
    title: "Sécurité et données : une base par client",
    description:
      "Chez Suzalink, chaque client a sa propre instance et sa propre base de données. Appels enregistrés dans un stockage privé, rôles et permissions, RGPD.",
  },
  breadcrumb: "Sécurité",
  updated: "2026-11-21",
  hero: {
    eyebrow: "Sécurité",
    title: "Vos données restent les vôtres",
    lead: "Chaque client a son propre espace, sa propre base et ses propres enregistrements. Rien n'est partagé avec une autre entreprise.",
    primary: { label: "Poser une question sécurité", href: "/demo?offre=logiciel" },
    secondary: { label: "Le logiciel", href: "/logiciel" },
    visual: {
      src: "/creative/vault.webp",
      alt: "Illustration abstraite : la porte d'un coffre-fort teal, avec un liseré menthe et un point jaune.",
      width: 1536,
      height: 1024,
    },
  },
  blocks: [
    {
      kind: "answer",
      question: "Comment Suzalink protège-t-il les données de ses clients ?",
      answer:
        "Chaque client a sa propre instance du logiciel et sa propre base de données : ses contacts, ses notes et ses appels ne côtoient jamais ceux d'une autre entreprise. Les enregistrements sont gardés dans un stockage privé, et chaque utilisateur n'accède qu'à ce que son rôle autorise.",
      facts: ["Une instance par client", "Une base de données par client", "Enregistrements privés", "Refus de rappel respecté"],
    },
    {
      kind: "features",
      id: "engagements",
      eyebrow: "Nos engagements",
      title: "Ce que nous faisons, concrètement",
      items: [
        { icon: "server", title: "Une instance par client", body: "Votre logiciel tourne à part, jamais partagé avec une autre entreprise." },
        { icon: "database", title: "Une base à vous", body: "Vos contacts et vos notes sont rangés dans une base qui n'appartient qu'à vous." },
        { icon: "lock", title: "Enregistrements privés", body: "Les appels sont stockés dans Call Vault, un stockage privé à votre nom." },
        { icon: "users", title: "Rôles et permissions", body: "Téléprospecteur, manager, client : chacun ne voit que ce qui le concerne." },
        { icon: "shield", title: "RGPD", body: "Un refus d'être rappelé est noté et respecté sur toutes les missions." },
        { icon: "arrowUpRight", title: "Vos données vous appartiennent", body: "Contacts, fichiers et enregistrements sont à vous, et vous les récupérez si vous arrêtez." },
      ],
    },
    {
      kind: "prose",
      id: "details",
      eyebrow: "En détail",
      title: "Les questions qu'on nous pose",
      parts: [
        {
          title: "Suzalink fait aussi de la prospection : qui voit mes données ?",
          paragraphs: [
            "Votre instance est séparée de celles de nos propres missions. L'équipe Suzalink Prospection n'a aucun accès à vos données et ne les utilise jamais. C'est un engagement écrit dans votre contrat.",
          ],
        },
        {
          title: "Où sont hébergées les données ?",
          paragraphs: ["TODO : préciser l'hébergeur, le pays d'hébergement et les sauvegardes avant publication."],
        },
        {
          title: "Qui est responsable des données de mes prospects ?",
          paragraphs: [
            "En principe vous, en tant que client : Suzali Conseil agit pour votre compte. Le détail est dans notre [politique de confidentialité](/confidentialite).",
          ],
        },
        {
          title: "Comment signaler un problème de sécurité ?",
          paragraphs: ["TODO : adresse email de contact sécurité. En attendant, écrivez à [contact@suzaliconseil.com](mailto:contact@suzaliconseil.com)."],
        },
      ],
    },
    {
      kind: "faq",
      id: "faq",
      eyebrow: "Questions fréquentes",
      title: "Sécurité et RGPD",
      items: [
        { q: "Mes données sont-elles mélangées avec celles d'autres clients ?", a: "Non. Chaque client a sa propre instance et sa propre base de données." },
        { q: "Puis-je récupérer mes données si j'arrête ?", a: "Oui. Contacts, fichiers et enregistrements vous appartiennent. TODO : préciser le format et le délai d'export." },
        { q: "Que se passe-t-il si un prospect refuse d'être rappelé ?", a: "Le refus est noté et respecté sur toutes les missions. Voir la [politique de confidentialité](/confidentialite)." },
      ],
    },
    {
      kind: "links",
      id: "a-lire",
      eyebrow: "À voir aussi",
      title: "Pour aller plus loin",
      items: [
        { label: "Téléphonie et enregistrements", href: "/logiciel/telephonie", body: "Allo, OnOff et Call Vault." },
        { label: "Portail client", href: "/logiciel/portail-client", body: "Chaque client ne voit que ses données." },
        { label: "Confidentialité", href: "/confidentialite", body: "Données collectées, durées, vos droits." },
      ],
    },
    {
      kind: "cta",
      id: "demo",
      eyebrow: "Démo",
      title: "Posez-nous vos questions sécurité",
      intro: "Nous vous montrons comment l'instance et la base de chaque client sont séparées.",
      primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
    },
  ],
};

export const casClientsPage: LandingPage = {
  path: "/cas-clients",
  meta: {
    title: "Cas clients : des missions en chiffres",
    description:
      "Des missions de prospection réelles, chiffres datés à l'appui : contexte, cible, méthode et résultats. Premier cas : les cabinets dentaires.",
  },
  breadcrumb: "Cas clients",
  updated: "2026-11-21",
  hero: {
    eyebrow: "Cas clients",
    title: "Des missions réelles, en chiffres",
    lead: "Chaque cas présente le contexte, la cible, la méthode et des chiffres datés, issus de notre suivi de mission. Rien n'est arrondi à notre avantage.",
    primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
    secondary: { label: "Le logiciel", href: "/logiciel" },
    bullets: ["Chiffres datés et sourcés", "Clients anonymisés avec leur accord", "Méthode détaillée"],
  },
  blocks: [
    {
      kind: "links",
      id: "a-lire",
      eyebrow: "À voir aussi",
      title: "Pour aller plus loin",
      items: [
        { label: "Prospection des cabinets dentaires", href: "/secteurs/cabinets-dentaires", body: "La mission complète, étape par étape." },
        { label: "Prospection externalisée", href: "/prospection-externalisee", body: "Nos téléprospecteurs appellent pour vous." },
        { label: "Le logiciel", href: "/logiciel", body: "L'outil utilisé sur chacune de ces missions." },
      ],
    },
    {
      kind: "cta",
      id: "demo",
      eyebrow: "Démo",
      title: "Votre mission, le prochain cas ?",
      intro: "Voyez le logiciel sur une mission qui ressemble à la vôtre.",
      primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
    },
  ],
};

export const contactPage: LandingPage = {
  path: "/contact",
  meta: {
    title: "Contact",
    description: "Contactez Suzalink : démo du logiciel, prospection par nos téléprospecteurs ou programme partenaires. Réponse par email.",
  },
  breadcrumb: "Contact",
  updated: "2026-11-21",
  hero: {
    eyebrow: "Contact",
    title: "Parlons de votre prospection",
    lead: "Choisissez ce qui vous amène : nous vous répondons par email pour fixer un créneau. Pour toute autre question : [contact@suzaliconseil.com](mailto:contact@suzaliconseil.com).",
    primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
  },
  blocks: [
    {
      kind: "links",
      id: "choix",
      eyebrow: "Vous cherchez",
      title: "Trois façons de commencer",
      items: [
        { label: "Le logiciel pour mon équipe", href: "/demo?offre=logiciel", body: "Une démo sur vos propres cas, file d'appels et portail client compris." },
        { label: "Faire prospecter", href: "/demo?offre=prospection", body: "Nos téléprospecteurs appellent vos cibles. Commencez par deux semaines de test." },
        { label: "Devenir partenaire", href: "/demo?offre=partenaire", body: "Directeur commercial externalisé ? Confiez-nous les appels de vos clients." },
      ],
    },
  ],
};
