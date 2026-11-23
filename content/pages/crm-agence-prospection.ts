/**
 * Page /solutions/agences-prospection (ancienne /crm-agence-prospection, redirigée) : le logiciel
 * Suzalink pour les agences de prospection et de prise de RDV (marque blanche).
 * Mot-clé principal : « CRM agence de prospection ». Secondaires : « CRM marque blanche »,
 * « logiciel de prospection téléphonique », « portail client agence ».
 * Fonctions citées : uniquement celles du produit (voir content/home.ts et l'app).
 */
import type { LandingPage } from "./types";

export const crmAgencePage: LandingPage = {
  path: "/solutions/agences-prospection",
  meta: {
    title: "Logiciel pour agence de prospection",
    description:
      "Le logiciel des agences de prospection et de prise de RDV : téléphonie, appels enregistrés, fiche IA et portail client à votre marque. Une base par agence.",
  },
  breadcrumb: "Agences de prospection",
  parent: { label: "Solutions", href: "/solutions" },
  updated: "2026-11-23",
  hero: {
    eyebrow: "Agences de prospection",
    title: "Le logiciel de votre agence, à votre marque",
    lead: "Vos téléprospecteurs appellent, vos clients suivent leurs RDV dans un portail à vos couleurs. Nous l'utilisons chaque jour pour nos propres missions : chaque fonction est née d'un problème de terrain.",
    primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
    secondary: { label: "Voir les tarifs", href: "/tarifs" },
    bullets: ["Votre domaine, votre logo, vos couleurs", "Portail client inclus", "Plusieurs missions par téléprospecteur", "Une base de données par agence"],
  },
  blocks: [
    {
      kind: "answer",
      question: "Qu'est-ce qu'un logiciel pour agence de prospection ?",
      answer:
        "C'est un outil conçu pour faire appeler plusieurs téléprospecteurs sur les missions de plusieurs clients, et pour montrer à chaque client ses propres résultats. Suzalink réunit la file d'appels, la téléphonie, les enregistrements, la fiche de RDV rédigée par l'IA et un portail client à la marque de l'agence.",
      facts: [
        "Votre domaine, votre logo, vos couleurs",
        "Portail client inclus",
        "Téléphonie Allo et OnOff, appels enregistrés",
        "**59 € HT par utilisateur et par mois**, sans engagement",
      ],
    },
    {
      kind: "pains",
      id: "constat",
      eyebrow: "Le quotidien d'une agence",
      title: "Vendre des RDV, c'est aussi les prouver",
      items: [
        {
          title: "Un outil par besoin",
          body: "Un CRM, une téléphonie, un outil d'enregistrement, des séquences, un tableur pour le client. Chaque abonnement se paie par commercial, et rien ne se parle. Voir [le comparatif des coûts](/#cout).",
        },
        {
          title: "Des clients qui veulent voir",
          body: "« Combien d'appels cette semaine ? Qu'est-ce qu'ils ont répondu ? » Sans portail, chaque question devient un export et un email.",
        },
        {
          title: "Des téléprospecteurs sur plusieurs missions",
          body: "Le matin pour un client, l'après-midi pour un autre. Si l'outil ne suit pas, on mélange les scripts, les fichiers et les rappels. C'est notre quotidien chez [Suzalink Prospection](/prospection-externalisee).",
        },
        {
          title: "Le rapport du vendredi",
          body: "Des heures à compiler des chiffres à la main, pour un document que le client lit en deux minutes.",
        },
      ],
    },
    {
      kind: "features",
      id: "fonctions",
      eyebrow: "Ce que fait le logiciel",
      title: "Tout ce qu'une agence utilise, dans un seul outil",
      items: [
        { icon: "users", title: "Portail client", body: "Chaque client voit ses RDV, ses enregistrements et ses rapports. Rien d'autre, et sans vous écrire." },
        { icon: "sparkle", title: "Marque blanche", body: "Votre domaine, votre logo, vos couleurs. Vos clients ne voient que votre agence." },
        { icon: "phone", title: "Téléphonie intégrée", body: "Allo et OnOff avec vos numéros. Le téléprospecteur appelle depuis la file, sans changer d'écran." },
        { icon: "waveform", title: "Appels enregistrés", body: "Chaque appel gardé dans votre stockage privé. Écoute et partage en un clic." },
        { icon: "mail", title: "Fiche de RDV par l'IA", body: "Dès qu'un RDV est pris, l'IA rédige la fiche : besoin, budget, objections. Le téléprospecteur relit et confirme." },
        { icon: "chart", title: "Pilotage en direct", body: "Appels, RDV et rythme de chaque téléprospecteur, mission par mission. Une alerte signale qui prend du retard." },
        { icon: "arrowUpRight", title: "Plusieurs missions par téléprospecteur", body: "Un téléprospecteur passe d'une mission à l'autre sans planning imposé. Scripts, listes et rappels suivent la mission." },
        { icon: "check", title: "RDV sans agenda client", body: "Votre client n'a pas de calendrier connecté ? Le téléprospecteur pose quand même le RDV, et le client le retrouve dans son portail." },
        { icon: "lock", title: "Instance dédiée", body: "Une instance et une base de données par agence. Vos données ne côtoient jamais celles d'une autre." },
      ],
    },
    {
      kind: "showcase",
      id: "ia",
      eyebrow: "IA intégrée",
      title: "Ils passent l'appel, l'IA écrit la fiche",
      intro: "Fini le compte rendu tapé à la main après chaque RDV. L'IA prépare la fiche, le téléprospecteur la relit, votre client la reçoit dans son portail.",
      points: [
        "Besoin, budget, décideur et objections, rangés au même endroit",
        "Résultat d'appel proposé par l'IA, confirmé en un clic",
        "La liste des priorités du matin, pour chaque téléprospecteur",
      ],
      panel: { tag: "Fiche de RDV", title: "Rédigée par l'IA, relue par le téléprospecteur", rows: ["Besoin", "Budget", "Décideur", "Objections"], status: "À relire", actions: ["Confirmer", "Modifier"] },
      reverse: true,
      action: { label: "La fiche de RDV par l'IA", href: "/logiciel/ia" },
    },
    {
      kind: "proof",
      id: "terrain",
      eyebrow: "Construit sur le terrain",
      title: "Nous sommes notre premier client",
      intro: "Suzali Conseil fait tourner ses propres missions de prospection sur Suzalink, tous les jours.",
      stats: [
        { value: "≈ 20", label: "téléprospecteurs qui l'utilisent au quotidien" },
        { value: "5 à 10", label: "missions menées en parallèle" },
        { value: "5 174", label: "appels sur une seule campagne dentaire, fin 2025" },
        { value: "1", label: "instance et une base par agence cliente" },
      ],
      story:
        "Chaque fonction du logiciel vient d'un problème rencontré en mission : les téléprospecteurs qui changent de client dans la journée, les clients sans agenda partagé, les numéros faux qu'il faut écarter avant d'appeler.",
      note: "Chiffres internes Suzali Conseil, novembre 2026.",
    },
    {
      kind: "steps",
      id: "mise-en-service",
      eyebrow: "Mise en service",
      title: "De la signature au premier appel",
      items: [
        { title: "Votre instance", body: "On crée votre instance à votre domaine, avec votre logo et vos couleurs." },
        { title: "Vos missions", body: "On importe vos clients, vos listes et vos scripts." },
        { title: "Vos lignes", body: "On branche Allo ou OnOff avec vos numéros." },
        { title: "Votre équipe", body: "Une session de prise en main, sur vos vraies missions." },
        { title: "Vos clients", body: "Vous ouvrez le portail à vos clients, quand vous êtes prêts." },
      ],
    },
    {
      kind: "faq",
      id: "faq",
      eyebrow: "Questions fréquentes",
      title: "Ce que les agences nous demandent",
      items: [
        {
          q: "Combien coûte le logiciel pour une agence ?",
          a: "L'offre Agence coûte 59 € HT par utilisateur et par mois, sans engagement, avec la marque blanche et le portail client. Vous payez pour les personnes qui appellent, pas pour un paquet d'utilisateurs.",
        },
        {
          q: "Mes clients verront-ils le nom Suzalink ?",
          a: "Non. Avec la marque blanche, le logiciel et le portail client utilisent votre domaine, votre logo et vos couleurs.",
        },
        {
          q: "Suzalink fait aussi de la prospection. Mes données sont-elles en sécurité ?",
          a: "Oui. Chaque agence a sa propre instance et sa propre base de données. L'équipe Suzalink Prospection n'a aucun accès à vos données et ne les utilise jamais. C'est un engagement écrit dans votre contrat.",
        },
        {
          q: "Quelle téléphonie puis-je utiliser ?",
          a: "Allo et OnOff sont intégrés nativement, avec vos propres numéros. Chaque appel est enregistré dans un stockage privé. Voir [téléphonie](/logiciel/telephonie).",
        },
        {
          q: "Puis-je importer mes données actuelles ?",
          a: "Oui. Nous importons vos clients, contacts, listes et historiques lors du déploiement.",
        },
      ],
    },
    {
      kind: "links",
      id: "a-lire",
      eyebrow: "À voir aussi",
      title: "Pour aller plus loin",
      items: [
        { label: "Portail client", href: "/logiciel/portail-client", body: "Ce que voient vos clients, à vos couleurs." },
        { label: "Marque blanche", href: "/logiciel/marque-blanche", body: "Domaine, logo, couleurs : la mise en service pas à pas." },
        { label: "Sécurité", href: "/securite", body: "Une instance et une base par agence, enregistrements privés." },
      ],
    },
    {
      kind: "cta",
      id: "demo",
      eyebrow: "Démo",
      title: "Voyez le CRM à vos couleurs",
      intro: "Envoyez-nous votre logo : la démo se fait sur une instance à votre marque, avec une mission qui ressemble aux vôtres.",
      primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
      secondary: { label: "Voir les tarifs", href: "/tarifs" },
    },
  ],
};
