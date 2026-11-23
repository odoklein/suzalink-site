/**
 * Pages du logiciel : /logiciel (page pilier) et ses 5 pages fonctionnalités.
 * Chaque fonction citée existe dans le produit (mêmes sources que content/pricing.ts et
 * l'ancienne page CRM agences). Aucun chiffre ajouté : les quotas viennent de content/pricing.ts.
 * Mot-clé principal : « logiciel de prospection téléphonique ».
 */
import { plans } from "../pricing";
import type { LandingPage, Link } from "./types";

const eur = (n: number) => `${n.toLocaleString("fr-FR")} €`;
const [equipe, agence] = plans;

const UPDATED = "2026-11-23";
const parent: Link = { label: "Logiciel", href: "/logiciel" };
const demo = { label: "Demander une démo", href: "/demo?offre=logiciel" };

/** Vidéo de démo de 90 secondes. TODO : déposer le fichier dans public/video/ puis renseigner `src` et `poster`. */
export const demoVideo: { src: string | null; poster: string | null; title: string; captions: string | null } = {
  src: null,
  poster: null,
  title: "Suzalink en 90 secondes : un appel, de la file au portail client",
  captions: null,
};

/** Les 5 pages fonctionnalités, dans l'ordre d'un appel. Utilisé par le menu et la page pilier. */
export const featurePages = [
  { label: "File d'appels", href: "/logiciel/file-appels", body: "Le prospect suivant s'affiche tout seul, le résultat se note en une touche.", icon: "grid", tile: "/creative/execution.svg" },
  { label: "Téléphonie et enregistrements", href: "/logiciel/telephonie", body: "Allo ou OnOff avec vos numéros, chaque appel enregistré.", icon: "phone", tile: "/creative/sdr.svg" },
  { label: "Fiche de RDV par l'IA", href: "/logiciel/ia", body: "L'IA rédige la fiche, le téléprospecteur la relit.", icon: "sparkle", tile: "/creative/ia.svg" },
  { label: "Portail client", href: "/logiciel/portail-client", body: "Vos clients voient leurs RDV et leurs appels, sans vous écrire.", icon: "users", tile: undefined },
  { label: "Marque blanche", href: "/logiciel/marque-blanche", body: "Votre domaine, votre logo, vos couleurs.", icon: "building", tile: undefined },
] as const;

export const logicielPage: LandingPage = {
  path: "/logiciel",
  meta: {
    title: "Logiciel de prospection téléphonique",
    description:
      "File d'appels, téléphonie Allo et OnOff, appels enregistrés, fiche de RDV par l'IA et portail client, dans un seul outil. Une base de données par client.",
  },
  breadcrumb: "Logiciel",
  updated: UPDATED,
  hero: {
    eyebrow: "Le logiciel",
    title: "Tout l'appel dans un seul outil",
    lead: "Le logiciel des agences et des équipes de prospection téléphonique : appels, enregistrements, fiche de RDV par l'IA et portail client. Les données de chaque client sont hébergées à part.",
    primary: demo,
    secondary: { label: "Voir les tarifs", href: "/tarifs" },
    visual: {
      src: "/visuals/mission-semaine.webp",
      alt: "Illustration du logiciel : la semaine 2 d'une mission avec 412 appels, 38 % de joignables et 9 RDV, puis la liste des appels enregistrés avec leur durée et leur résultat (RDV pris, rappel, barrage).",
      width: 1536,
      height: 1024,
    },
  },
  blocks: [
    {
      kind: "answer",
      question: "Qu'est-ce que le logiciel Suzalink ?",
      answer:
        "Suzalink est un logiciel de prospection téléphonique pour les agences de prise de RDV et les équipes de téléprospection. Le téléprospecteur appelle depuis une file, note le résultat en une touche, l'appel est enregistré, l'IA rédige la fiche de RDV et le client la retrouve dans son portail.",
      facts: [
        "Téléphonie Allo et OnOff intégrée",
        "Chaque appel enregistré",
        "Une instance et une base par client",
        `Dès **${eur(equipe.pricePerUser)} HT par utilisateur et par mois** ([voir les tarifs](/tarifs))`,
      ],
    },
    {
      kind: "steps",
      id: "un-appel",
      eyebrow: "Autour d'un appel",
      title: "Quatre temps, un seul écran",
      items: [
        { title: "La file", body: "Le prospect suivant s'affiche tout seul : voir [la file d'appels](/logiciel/file-appels)." },
        { title: "L'appel enregistré", body: "Allo ou OnOff, depuis la fiche, et l'appel est gardé : voir [la téléphonie](/logiciel/telephonie)." },
        { title: "La fiche IA", body: "Le téléprospecteur relit [la fiche de RDV rédigée par l'IA](/logiciel/ia)." },
        { title: "Le portail client", body: "Le client voit le RDV et écoute l'appel dans [son portail](/logiciel/portail-client)." },
      ],
    },
    {
      kind: "features",
      id: "fonctions",
      eyebrow: "Fonctions",
      title: "Ce que fait le logiciel",
      items: [
        { icon: "grid", title: "File d'appels", body: "Résultat en une touche : RDV pris, rappel, pas intéressé. Le suivant s'affiche." },
        { icon: "phone", title: "Téléphonie intégrée", body: "Allo et OnOff avec vos numéros, sans changer d'écran." },
        { icon: "waveform", title: "Appels enregistrés", body: "Chaque appel gardé dans un stockage privé. Écoute et partage en un clic." },
        { icon: "sparkle", title: "Fiche de RDV par l'IA", body: "Besoin, budget, décideur, objections. Relue et confirmée par le téléprospecteur." },
        { icon: "users", title: "Portail client", body: "Chaque client voit ses RDV, ses enregistrements et ses rapports. Rien d'autre." },
        { icon: "building", title: "Marque blanche", body: "Votre domaine, votre logo, vos couleurs : voir [la marque blanche](/logiciel/marque-blanche)." },
        { icon: "arrowUpRight", title: "Plusieurs missions par personne", body: "Scripts, listes et rappels suivent la mission, pas le téléprospecteur." },
        { icon: "chart", title: "Tableau de bord manager", body: "Appels, RDV et rythme de chaque téléprospecteur, mission par mission." },
        { icon: "lock", title: "Une base par client", body: "Une instance et une base de données par client. Rien n'est partagé. [Sécurité](/securite)." },
      ],
    },
    {
      kind: "showcase",
      id: "ia",
      eyebrow: "Fiche de RDV",
      title: "Le téléprospecteur appelle, l'IA écrit",
      intro: "Plus de compte rendu tapé après chaque RDV. L'IA prépare la fiche, le téléprospecteur la relit, le client la reçoit.",
      points: [
        "Besoin, budget, décideur et objections au même endroit",
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
      title: "Nos équipes l'utilisent chaque jour",
      intro: "Suzali Conseil fait tourner ses propres missions de prospection sur Suzalink.",
      stats: [
        { value: "≈ 20", label: "téléprospecteurs qui l'utilisent au quotidien" },
        { value: "5 à 10", label: "missions menées en parallèle" },
        { value: "5 174", label: "appels sur une seule campagne dentaire, fin 2025" },
        { value: "1", label: "instance et une base par client" },
      ],
      story:
        "Chaque fonction vient d'un problème rencontré en mission : changer de client dans la journée, poser un RDV pour un client sans agenda partagé, écarter les faux numéros avant d'appeler. Voir [la mission dentaire](/secteurs/cabinets-dentaires) et [qui nous sommes](/a-propos).",
      note: "Chiffres internes Suzali Conseil, novembre 2026.",
    },
    {
      kind: "faq",
      id: "faq",
      eyebrow: "Questions fréquentes",
      title: "Sur le logiciel",
      items: [
        {
          q: "Pour qui est fait Suzalink ?",
          a: "Pour les agences de prospection et de prise de RDV, et pour les équipes de téléprospection internes des PME et ETI. Voir [agences](/solutions/agences-prospection) et [équipes commerciales](/solutions/equipes-commerciales).",
        },
        {
          q: "Combien coûte le logiciel ?",
          a: `Deux offres, un prix par personne. ${equipe.name} : ${eur(equipe.pricePerUser)} HT par utilisateur et par mois. ${agence.name} : ${eur(agence.pricePerUser)} HT par utilisateur et par mois, avec le portail client et la marque blanche. Sans engagement. Détails sur la page [tarifs](/tarifs).`,
        },
        {
          q: "Quelle téléphonie utiliser ?",
          a: "Allo et OnOff sont intégrés, avec vos propres numéros. Chaque appel est enregistré dans un stockage privé. Voir [téléphonie](/logiciel/telephonie).",
        },
        {
          q: "Mes données sont-elles séparées de celles des autres clients ?",
          a: "Oui. Chaque client a sa propre instance et sa propre base de données. Voir [sécurité](/securite).",
        },
        {
          q: "Puis-je importer mes contacts actuels ?",
          a: "Oui. Nous importons vos clients, contacts, listes et historiques lors de la mise en service.",
        },
      ],
    },
    {
      kind: "links",
      id: "a-lire",
      eyebrow: "À voir aussi",
      title: "Pour aller plus loin",
      items: [
        { label: "Agences de prospection", href: "/solutions/agences-prospection", body: "Marque blanche, portail client, plusieurs missions par téléprospecteur." },
        { label: "Équipes commerciales", href: "/solutions/equipes-commerciales", body: "Une équipe de téléprospection interne, pilotée en direct." },
        { label: "Tarifs", href: "/tarifs", body: "Deux offres, 29 € ou 59 € HT par utilisateur et par mois." },
      ],
    },
    {
      kind: "cta",
      id: "demo",
      eyebrow: "Démo",
      title: "Voyez un appel de bout en bout",
      intro: "Une démo sur une mission qui ressemble aux vôtres : file, appel, fiche IA, portail client.",
      primary: demo,
      secondary: { label: "Voir les tarifs", href: "/tarifs" },
    },
  ],
};

const related = (exclude: string): LandingPage["blocks"][number] => ({
  kind: "links",
  id: "a-lire",
  eyebrow: "À voir aussi",
  title: "Les autres fonctions",
  items: featurePages
    .filter((f) => f.href !== exclude)
    .slice(0, 3)
    .map((f) => ({ label: f.label, href: f.href, body: f.body })),
});

const ctaBlock = (title: string, intro: string): LandingPage["blocks"][number] => ({
  kind: "cta",
  id: "demo",
  eyebrow: "Démo",
  title,
  intro,
  primary: demo,
  secondary: { label: "Tout le logiciel", href: "/logiciel" },
});

export const fileAppelsPage: LandingPage = {
  path: "/logiciel/file-appels",
  meta: {
    title: "File d'appels et résultat en une touche",
    description:
      "La file d'appels Suzalink : le prospect suivant s'affiche, le résultat se note en une touche, les rappels sont planifiés. Plusieurs missions par personne.",
  },
  breadcrumb: "File d'appels",
  parent,
  updated: UPDATED,
  hero: {
    eyebrow: "File d'appels",
    title: "Un appel, une touche, le suivant",
    lead: "Le téléprospecteur ne cherche plus qui appeler : le prospect suivant s'affiche, le résultat se note en une touche, le rappel se planifie tout seul.",
    primary: demo,
    secondary: { label: "Tout le logiciel", href: "/logiciel" },
    bullets: ["Résultat en une touche", "Rappels planifiés", "Plusieurs missions par téléprospecteur", "RDV posé même sans agenda client"],
  },
  blocks: [
    {
      kind: "answer",
      question: "À quoi sert une file d'appels ?",
      answer:
        "Une file d'appels présente au téléprospecteur le prochain contact à appeler, avec sa fiche. Dans Suzalink, il note le résultat en une touche (RDV pris, rappel, pas intéressé) et le contact suivant s'affiche. Un absent est rappelé à une autre heure, sans liste à tenir à la main.",
    },
    {
      kind: "features",
      id: "fonctions",
      eyebrow: "Dans la file",
      title: "Moins de clics, plus d'appels",
      items: [
        { icon: "grid", title: "Le suivant s'affiche", body: "Le téléprospecteur enchaîne sans chercher dans un tableur." },
        { icon: "check", title: "Résultat en une touche", body: "RDV pris, rappel, pas intéressé : une touche suffit." },
        { icon: "calendar", title: "Rappels planifiés", body: "Un prospect absent est rappelé à une autre heure." },
        { icon: "arrowUpRight", title: "Plusieurs missions", body: "Le matin pour un client, l'après-midi pour un autre : scripts, listes et rappels suivent la mission." },
        { icon: "users", title: "RDV sans agenda client", body: "Votre client n'a pas de calendrier connecté ? Le RDV est posé quand même et il le retrouve dans son portail." },
        { icon: "chart", title: "Le rythme visible", body: "Le manager voit les appels et les RDV de chacun, en direct (dans les deux offres)." },
      ],
    },
    {
      kind: "faq",
      id: "faq",
      eyebrow: "Questions fréquentes",
      title: "Sur la file d'appels",
      items: [
        { q: "Un téléprospecteur peut-il travailler sur plusieurs missions ?", a: "Oui. Il passe d'une mission à l'autre sans planning imposé. Scripts, listes et rappels restent rangés par mission." },
        { q: "Que se passe-t-il quand un prospect ne répond pas ?", a: "Le téléprospecteur note le résultat et le rappel est planifié à une autre heure. Le contact revient dans la file au bon moment." },
        { q: "La file est-elle dans toutes les offres ?", a: "Oui, dans les deux offres, dès le premier utilisateur. Voir les [tarifs](/tarifs)." },
      ],
    },
    related("/logiciel/file-appels"),
    ctaBlock("Voyez la file sur votre mission", "Nous préparons la démo avec une liste qui ressemble à la vôtre."),
  ],
};

export const telephoniePage: LandingPage = {
  path: "/logiciel/telephonie",
  meta: {
    title: "Téléphonie Allo, OnOff et appels enregistrés",
    description:
      "Appelez avec Allo ou OnOff et vos numéros depuis Suzalink. Chaque appel est enregistré dans un stockage privé : écoute et partage en un clic.",
  },
  breadcrumb: "Téléphonie",
  parent,
  updated: UPDATED,
  hero: {
    eyebrow: "Téléphonie et enregistrements",
    title: "Vos numéros, chaque appel enregistré",
    lead: "Allo et OnOff sont intégrés : le téléprospecteur appelle depuis la file, avec vos numéros. Chaque appel est gardé dans votre stockage privé.",
    primary: demo,
    secondary: { label: "Tout le logiciel", href: "/logiciel" },
    visual: {
      src: "/visuals/appel-objection.webp",
      alt: "Illustration d'un appel enregistré : l'objection « On a déjà un prestataire » et la réponse du téléprospecteur, avec un rappel planifié jeudi à 9 h 30.",
      width: 1672,
      height: 941,
    },
  },
  blocks: [
    {
      kind: "answer",
      question: "Quelle téléphonie utilise Suzalink ?",
      answer:
        "Suzalink est intégré à Allo et à OnOff. Le téléprospecteur appelle depuis la fiche du prospect, avec vos propres numéros, sans changer d'écran. Chaque appel est enregistré dans un stockage privé : vous pouvez le réécouter et le partager en un clic.",
      facts: [
        `${equipe.name} : 20 h d'appels enregistrés par utilisateur et par mois`,
        `${agence.name} : 30 h par utilisateur et par mois`,
        "Vos numéros, sur chaque poste",
      ],
    },
    {
      kind: "features",
      id: "fonctions",
      eyebrow: "Téléphonie",
      title: "Appeler, enregistrer, réécouter",
      items: [
        { icon: "phone", title: "Allo et OnOff", body: "Vos numéros, branchés pendant la mise en service." },
        { icon: "grid", title: "Depuis la file", body: "Le téléprospecteur appelle sans quitter la fiche du prospect." },
        { icon: "waveform", title: "Appels enregistrés", body: "Chaque appel gardé dans un stockage privé, à votre nom." },
        { icon: "play", title: "Écoute en un clic", body: "L'historique de la journée, avec la durée et l'enregistrement de chaque appel." },
        { icon: "users", title: "Partage au client", body: "Le client écoute ses appels dans son portail." },
        { icon: "shield", title: "Refus respecté", body: "Un refus d'être rappelé est noté et respecté sur toutes les missions." },
      ],
    },
    {
      kind: "faq",
      id: "faq",
      eyebrow: "Questions fréquentes",
      title: "Sur la téléphonie",
      items: [
        { q: "Puis-je garder mes numéros ?", a: "Oui. Allo et OnOff sont branchés avec vos propres numéros pendant la mise en service." },
        { q: "Où sont stockés les enregistrements ?", a: "Dans un stockage privé propre à votre instance. Voir [sécurité](/securite)." },
        { q: "Combien d'heures d'enregistrement sont incluses ?", a: `${equipe.name} : 20 h par utilisateur et par mois. ${agence.name} : 30 h. Des heures supplémentaires sont disponibles en option. Voir les [tarifs](/tarifs).` },
      ],
    },
    related("/logiciel/telephonie"),
    ctaBlock("Écoutez un appel enregistré", "La démo se fait sur de vrais écrans, de la file à l'écoute."),
  ],
};

export const iaPage: LandingPage = {
  path: "/logiciel/ia",
  meta: {
    title: "Fiche de RDV rédigée par l'IA",
    description:
      "Après l'appel, l'IA rédige la fiche de RDV (besoin, budget, décideur, objections) et propose le résultat. Le téléprospecteur relit et confirme.",
  },
  breadcrumb: "Fiche de RDV par l'IA",
  parent,
  updated: UPDATED,
  hero: {
    eyebrow: "IA",
    title: "La fiche de RDV, écrite pour vous",
    lead: "Dès qu'un RDV est pris, l'IA rédige la fiche : besoin, budget, décideur, objections. Le téléprospecteur la relit et la confirme, le client la reçoit dans son portail.",
    primary: demo,
    secondary: { label: "Tout le logiciel", href: "/logiciel" },
    visual: {
      src: "/visuals/fiche-rdv-ia.webp",
      alt: "Illustration d'une fiche de RDV rédigée par l'IA, avec les boutons Confirmer et Modifier.",
      width: 1122,
      height: 1402,
    },
  },
  blocks: [
    {
      kind: "answer",
      question: "Que fait l'IA dans Suzalink ?",
      answer:
        "L'IA rédige la fiche de RDV à partir de l'appel (besoin, budget, décideur, objections), propose le résultat de l'appel et prépare chaque matin la liste des priorités de chaque téléprospecteur. Rien ne part sans relecture : le téléprospecteur confirme ou corrige.",
      facts: [
        `${equipe.name} : 150 fiches par utilisateur et par mois`,
        `${agence.name} : 300 fiches par utilisateur et par mois`,
        "Chaque fiche relue avant d'être envoyée",
      ],
    },
    {
      kind: "features",
      id: "fonctions",
      eyebrow: "Ce que fait l'IA",
      title: "Moins de saisie, rien sans relecture",
      items: [
        { icon: "sparkle", title: "Fiche de RDV", body: "Besoin, budget, décideur et objections, rangés au même endroit." },
        { icon: "check", title: "Résultat proposé", body: "L'IA propose le résultat de l'appel, le téléprospecteur confirme en un clic." },
        { icon: "sun", title: "Les priorités du matin", body: "Chaque téléprospecteur commence la journée avec sa liste de priorités." },
        { icon: "chart", title: "Alerte de rythme", body: "Le manager voit qui prend du retard sur sa mission." },
      ],
    },
    {
      kind: "faq",
      id: "faq",
      eyebrow: "Questions fréquentes",
      title: "Sur l'IA",
      items: [
        { q: "L'IA envoie-t-elle des fiches sans contrôle ?", a: "Non. Le téléprospecteur relit chaque fiche et la confirme ou la modifie avant que le client la voie." },
        { q: "Combien de fiches sont incluses ?", a: `${equipe.name} : 150 par utilisateur et par mois. ${agence.name} : 300. Des fiches supplémentaires sont disponibles en option.` },
        { q: "Qui voit la fiche ?", a: "Votre équipe, et le client concerné dans son [portail](/logiciel/portail-client)." },
      ],
    },
    related("/logiciel/ia"),
    ctaBlock("Voyez une fiche se rédiger", "Nous vous montrons la fiche produite après un appel réel, puis sa relecture."),
  ],
};

export const portailPage: LandingPage = {
  path: "/logiciel/portail-client",
  meta: {
    title: "Portail client pour agence de prospection",
    description:
      "Le portail client Suzalink : chaque client de votre agence voit ses RDV, écoute ses appels et lit ses rapports, à vos couleurs.",
  },
  breadcrumb: "Portail client",
  parent,
  updated: UPDATED,
  hero: {
    eyebrow: "Portail client",
    title: "Vos clients voient tout, sans écrire",
    lead: "« Combien d'appels cette semaine ? » Le client a la réponse dans son portail : ses RDV, ses enregistrements et ses rapports. Rien d'autre.",
    primary: demo,
    secondary: { label: "Tout le logiciel", href: "/logiciel" },
    bullets: ["Ses RDV, fiche comprise", "Ses appels à réécouter", "Ses rapports, à jour", "À votre marque"],
  },
  blocks: [
    {
      kind: "answer",
      question: "Qu'est-ce que le portail client de Suzalink ?",
      answer:
        "C'est un espace où chaque client de votre agence suit sa mission : ses RDV, l'écoute de ses appels enregistrés et ses rapports. Il ne voit que ses propres données. Le portail est inclus dans l'offre Agence, avec la marque blanche.",
      facts: ["RDV à jour, fiche IA comprise", "Appels à réécouter", "À votre marque", `Offre ${agence.name}`],
    },
    {
      kind: "pains",
      id: "constat",
      eyebrow: "Sans portail",
      title: "Chaque question devient un export",
      items: [
        { title: "Des clients qui veulent voir", body: "« Qu'est-ce qu'ils ont répondu ? » Sans portail, il faut exporter, trier, envoyer." },
        { title: "Le rapport du vendredi", body: "Des heures à compiler des chiffres à la main, pour un document lu en deux minutes." },
      ],
    },
    {
      kind: "features",
      id: "fonctions",
      eyebrow: "Dans le portail",
      title: "Ce que voit votre client",
      items: [
        { icon: "calendar", title: "Ses RDV", body: "Avec la fiche de RDV rédigée par l'IA et relue par le téléprospecteur." },
        { icon: "waveform", title: "Ses appels", body: "Il peut réécouter les enregistrements de sa mission." },
        { icon: "chart", title: "Ses rapports", body: "Les chiffres de sa mission, sans attendre votre email." },
        { icon: "lock", title: "Rien d'autre", body: "Il ne voit que ses données, jamais celles d'un autre client." },
      ],
    },
    {
      kind: "faq",
      id: "faq",
      eyebrow: "Questions fréquentes",
      title: "Sur le portail client",
      items: [
        { q: "Mes clients verront-ils le nom Suzalink ?", a: "Non. Avec la [marque blanche](/logiciel/marque-blanche), le portail utilise votre domaine, votre logo et vos couleurs." },
        { q: "Quand ouvrir le portail à mes clients ?", a: "Quand vous êtes prêts : vous l'ouvrez client par client." },
        { q: "Dans quelle offre est le portail ?", a: `Dans l'offre ${agence.name}, à ${eur(agence.pricePerUser)} HT par utilisateur et par mois. Voir les [tarifs](/tarifs).` },
      ],
    },
    related("/logiciel/portail-client"),
    ctaBlock("Montrez le portail à vos clients", "La démo se fait sur un portail à votre marque, avec une mission fictive."),
  ],
};

export const marqueBlanchePage: LandingPage = {
  path: "/logiciel/marque-blanche",
  meta: {
    title: "Logiciel de prospection en marque blanche",
    description:
      "Suzalink en marque blanche : votre domaine, votre logo et vos couleurs sur le logiciel et le portail client. Vos clients ne voient que votre agence.",
  },
  breadcrumb: "Marque blanche",
  parent,
  updated: UPDATED,
  hero: {
    eyebrow: "Marque blanche",
    title: "Votre logiciel, à votre nom",
    lead: "Votre domaine, votre logo, vos couleurs, sur le logiciel comme sur le portail client. Vos clients ne voient que votre agence.",
    primary: demo,
    secondary: { label: "Tout le logiciel", href: "/logiciel" },
    visual: {
      src: "/visuals/marque-blanche.webp",
      alt: "Illustration : le même portail client aux couleurs de deux agences fictives, avec les RDV de la semaine.",
      width: 1536,
      height: 1024,
    },
  },
  blocks: [
    {
      kind: "answer",
      question: "Que comprend la marque blanche ?",
      answer:
        "La marque blanche met votre domaine, votre logo et vos couleurs sur le logiciel et sur le portail client. Vos clients ne voient jamais le nom Suzalink. Elle est incluse dans l'offre Agence, avec le portail client et une instance dédiée à votre agence.",
      facts: ["Votre domaine", "Votre logo et vos couleurs", "Portail client compris", `Offre ${agence.name}`],
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
      title: "Sur la marque blanche",
      items: [
        { q: "Mes clients verront-ils le nom Suzalink ?", a: "Non. Le logiciel et le portail utilisent votre domaine, votre logo et vos couleurs." },
        { q: "Combien coûte la marque blanche ?", a: `Elle est incluse dans l'offre ${agence.name}, à ${eur(agence.pricePerUser)} HT par utilisateur et par mois. Voir les [tarifs](/tarifs).` },
        { q: "Mes données côtoient-elles celles d'autres agences ?", a: "Non. Chaque agence a sa propre instance et sa propre base. Voir [sécurité](/securite)." },
      ],
    },
    related("/logiciel/marque-blanche"),
    ctaBlock("Voyez le logiciel à vos couleurs", "Envoyez-nous votre logo : la démo se fait sur une instance à votre marque."),
  ],
};

export const softwarePages = [logicielPage, fileAppelsPage, telephoniePage, iaPage, portailPage, marqueBlanchePage];
