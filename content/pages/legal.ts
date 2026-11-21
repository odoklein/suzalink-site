/**
 * Pages légales : /mentions-legales, /confidentialite, /cookies et /cgv.
 *
 * Source de l'identité de l'éditeur : les mentions légales de suzaliconseil.com (Suzalink est une
 * marque de Suzali Conseil), reprises du dépôt captainprospect-crm (commit fc901b0b, relevées le
 * 16 novembre 2026). TODO : relire ces informations avant la mise en ligne.
 * Tout ce qui manque est marqué « TODO » : il s'affiche tel quel sur la page tant qu'il n'est pas rempli.
 * Liens [texte](/url) et **gras** possibles dans les paragraphes (voir content/pages/types.ts).
 *
 * TODO : ces textes sont des projets de rédaction, à faire relire par un avocat ou un conseil RGPD.
 */

import { prospectionOffers, guarantees } from "../offers";

export type LegalSection = { id: string; title: string; paragraphs: string[] };
export type LegalPageData = {
  path: string;
  meta: { title: string; description: string };
  title: string;
  lead: string;
  updated: string;
  /** Encadré d'avertissement affiché sous le titre (ex. : validation juridique en attente). */
  notice?: string;
  sections: LegalSection[];
};

export const company = {
  name: "Suzali Conseil",
  form: "SASU (société par actions simplifiée unipersonnelle)",
  capital: "1 €",
  address: "10 rue de la Paix, 75002 Paris, France",
  rcs: "RCS de Paris 992 281 097",
  director: "M. Hichem Hammouche, Président",
  email: "contact@suzaliconseil.com",
  phone: "+33 7 57 90 24 79",
  /** TODO : nom, adresse et téléphone de l'hébergeur (obligatoires, loi pour la confiance dans l'économie numérique). */
  host: "TODO : nom, adresse et téléphone de l'hébergeur",
  /** TODO : contact RGPD dédié ou délégué à la protection des données (DPO), s'il existe. */
  privacyContact: "TODO : adresse email dédiée aux demandes RGPD (à défaut, l'adresse de contact ci-dessous)",
  /** TODO : numéro de TVA intracommunautaire. */
  vat: "TODO : numéro de TVA intracommunautaire",
  /** TODO : tribunal ou médiateur compétent. */
  jurisdiction: "TODO : tribunal compétent (à confirmer par le conseil juridique)",
};

const c = company;
const UPDATED = "2026-11-21";

export const mentionsLegales: LegalPageData = {
  path: "/mentions-legales",
  meta: {
    title: "Mentions légales",
    description: "Mentions légales de suzalink.com, édité par Suzali Conseil : éditeur, hébergement, contact et propriété intellectuelle.",
  },
  title: "Mentions légales",
  lead: "Suzalink est une marque de Suzali Conseil. Voici qui édite ce site et comment nous joindre.",
  updated: UPDATED,
  sections: [
    {
      id: "editeur",
      title: "Éditeur du site",
      paragraphs: [
        `Le site suzalink.com est édité par **${c.name}**, ${c.form} au capital de ${c.capital}, dont le siège est situé ${c.address}, immatriculée au ${c.rcs}.`,
        `Directeur de la publication : ${c.director}.`,
        `TVA intracommunautaire : ${c.vat}.`,
      ],
    },
    {
      id: "hebergement",
      title: "Hébergement",
      paragraphs: [`Le site est hébergé par : ${c.host}.`],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: [`Par email : [${c.email}](mailto:${c.email}). Par téléphone : ${c.phone}. Vous pouvez aussi [demander une démo](/demo).`],
    },
    {
      id: "propriete",
      title: "Propriété intellectuelle",
      paragraphs: [
        `La marque Suzalink, son logo, les textes, visuels et maquettes de ce site appartiennent à ${c.name}. Toute reproduction, même partielle, demande notre accord écrit.`,
        "Les logos et noms des clients et des outils cités appartiennent à leurs propriétaires respectifs et sont reproduits à titre d'information.",
      ],
    },
    {
      id: "donnees",
      title: "Données personnelles et cookies",
      paragraphs: [
        "Ce que nous collectons, pourquoi, combien de temps et comment exercer vos droits : voir notre [politique de confidentialité](/confidentialite). Notre usage des cookies est décrit sur la page [cookies](/cookies).",
      ],
    },
    {
      id: "responsabilite",
      title: "Limitation de responsabilité",
      paragraphs: [
        `${c.name} veille à l'exactitude des informations publiées, sans pouvoir en garantir l'exhaustivité. Les prix sont indiqués hors taxes et peuvent évoluer : l'offre qui fait foi est celle de votre devis ou de votre contrat.`,
        "Les liens vers d'autres sites sont fournis pour votre information : nous ne sommes pas responsables de leur contenu.",
      ],
    },
  ],
};

export const confidentialite: LegalPageData = {
  path: "/confidentialite",
  meta: {
    title: "Politique de confidentialité",
    description: "Comment Suzalink (Suzali Conseil) traite vos données : formulaire de démo, appels enregistrés, durées de conservation et vos droits RGPD.",
  },
  title: "Politique de confidentialité",
  lead: "Ce que nous collectons, pourquoi, combien de temps, et comment exercer vos droits.",
  updated: UPDATED,
  notice: "TODO : ce texte est un projet, à faire relire par un conseil juridique ou RGPD avant la mise en ligne.",
  sections: [
    {
      id: "responsable",
      title: "Qui est responsable de vos données",
      paragraphs: [
        `${c.name}, ${c.address}, ${c.rcs}, est responsable des données collectées sur ce site. Contact RGPD : ${c.privacyContact}. Email général : [${c.email}](mailto:${c.email}).`,
        "Quand nous prospectons ou quand notre logiciel est utilisé pour le compte d'un client, la situation est différente : voir la section « Appels et logiciel » plus bas.",
      ],
    },
    {
      id: "collecte",
      title: "Ce que nous collectons sur ce site",
      paragraphs: [
        "**Formulaire de démo** : votre nom, votre email professionnel, le nom de votre entreprise, la taille de votre équipe commerciale, ce que vous cherchez (le logiciel, la prospection ou le partenariat) et, le cas échéant, l'offre qui vous intéresse. Rien n'est collecté si vous n'envoyez pas le formulaire.",
        "**Journaux techniques** : comme tout serveur web, le nôtre enregistre l'adresse IP, la date et la page demandée, pour la sécurité et le bon fonctionnement du site.",
      ],
    },
    {
      id: "finalites",
      title: "Pourquoi, et sur quelle base",
      paragraphs: [
        "Répondre à votre demande et vous recontacter à ce sujet : c'est une mesure précontractuelle prise à votre demande (article 6.1.b du RGPD).",
        "Assurer la sécurité du site : c'est notre intérêt légitime (article 6.1.f du RGPD).",
        "Nous ne vendons pas vos données et nous ne les utilisons pas pour de la publicité.",
      ],
    },
    {
      id: "destinataires",
      title: "Qui y a accès",
      paragraphs: [
        `L'équipe commerciale de ${c.name} et l'outil qui reçoit les demandes de démo. Nos prestataires techniques n'y accèdent que pour faire fonctionner le service. TODO : lister les sous-traitants réels (hébergeur, outil de réception des demandes, messagerie, téléphonie, IA).`,
      ],
    },
    {
      id: "duree",
      title: "Combien de temps",
      paragraphs: [
        "Demandes de démo : trois ans après notre dernier échange, puis suppression. Journaux techniques : un an au plus. TODO : durées à confirmer (ce sont les durées usuelles recommandées par la CNIL).",
      ],
    },
    {
      id: "appels",
      title: "Appels et logiciel : données de vos prospects",
      paragraphs: [
        "Nos téléprospecteurs appellent des professionnels pour le compte de nos clients, à partir de coordonnées professionnelles fournies ou validées par ces clients. Les appels peuvent être enregistrés et sont consultables par le client concerné dans son portail. Ces données servent uniquement à la mission de ce client.",
        "Pour ces données, c'est en principe le client qui décide de la finalité et des moyens : il est responsable du traitement, et Suzali Conseil agit pour son compte en tant que sous-traitant. TODO : valider cette qualification et rédiger l'accord de sous-traitance (article 28 du RGPD).",
        "Durée de conservation des enregistrements et des fichiers : à fixer avec chaque client, puis suppression ou restitution à la fin de la mission. TODO : durée par défaut à définir. TODO : confirmer comment la personne appelée est informée de l'enregistrement au début de l'appel.",
        "La fiche de RDV est rédigée par une intelligence artificielle à partir de l'appel, puis relue par le téléprospecteur. TODO : nommer le prestataire d'IA, le lieu de traitement et les garanties associées.",
      ],
    },
    {
      id: "opposition",
      title: "Si l'on vous a appelé : refuser d'être rappelé",
      paragraphs: [
        "Vous pouvez vous opposer à tout moment à être rappelé : dites-le au téléprospecteur pendant l'appel, ou écrivez-nous. Nous transmettons votre refus au client concerné.",
        "Bloctel, la liste d'opposition au démarchage téléphonique, protège les consommateurs. Pour un appel à un numéro professionnel, le droit d'opposition décrit ci-dessus s'applique directement. TODO : faire confirmer cette formulation par le conseil juridique.",
      ],
    },
    {
      id: "droits",
      title: "Vos droits",
      paragraphs: [
        `Vous pouvez demander l'accès à vos données, leur rectification, leur effacement, leur portabilité, la limitation du traitement, ou vous y opposer : écrivez à [${c.email}](mailto:${c.email}). Nous répondons sous un mois.`,
        "Si notre réponse ne vous satisfait pas, vous pouvez saisir la CNIL ([cnil.fr](https://www.cnil.fr)).",
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      paragraphs: ["Voir la page dédiée : [cookies](/cookies)."],
    },
  ],
};

export const cookies: LegalPageData = {
  path: "/cookies",
  meta: {
    title: "Cookies",
    description: "Suzalink.com ne dépose aucun cookie de mesure d'audience ou de publicité : ce que le site stocke dans votre navigateur.",
  },
  title: "Cookies",
  lead: "Ce que ce site stocke dans votre navigateur.",
  updated: UPDATED,
  sections: [
    {
      id: "usage",
      title: "Notre usage des cookies",
      paragraphs: [
        "À la date de mise à jour de cette page, ce site ne dépose **aucun cookie** et n'utilise aucun stockage dans votre navigateur : pas de mesure d'audience, pas de publicité, pas de réseau social, pas de vidéo hébergée par un tiers. C'est pourquoi aucun bandeau de consentement ne s'affiche.",
        "Les polices et les logos affichés sont servis par ce site lui-même : votre navigateur n'appelle pas de service tiers pour les charger.",
      ],
    },
    {
      id: "changement",
      title: "Si cela change",
      paragraphs: [
        "Si nous ajoutons un jour un outil de mesure d'audience ou un contenu tiers qui dépose des cookies, cette page sera mise à jour et votre accord vous sera demandé avant tout dépôt de cookie non nécessaire.",
      ],
    },
    {
      id: "contact",
      title: "Une question",
      paragraphs: [`Écrivez-nous : [${c.email}](mailto:${c.email}). Voir aussi la [politique de confidentialité](/confidentialite).`],
    },
  ],
};

const eur = (n: number) => `${n.toLocaleString("fr-FR")} €`;
const sprint = prospectionOffers.find((o) => o.id === "sprint")!;
const mission = prospectionOffers.find((o) => o.id === "mission")!;
const resultat = prospectionOffers.find((o) => o.id === "resultat")!;
const g = (title: string) => guarantees.find((x) => x.title === title)?.body ?? "";

export const cgv: LegalPageData = {
  path: "/cgv",
  meta: {
    title: "Conditions générales de vente",
    description: "Conditions générales de vente de Suzalink : logiciel et prospection externalisée, prix HT, durée, résiliation, RDV remplacé, données.",
  },
  title: "Conditions générales de vente",
  lead: "Les règles qui s'appliquent à nos offres : le logiciel Suzalink et la prospection externalisée.",
  updated: UPDATED,
  notice:
    "TODO : validation juridique. Ces conditions reprennent les engagements publiés sur le site et n'ont pas encore été relues par un avocat. Ne pas les faire signer avant validation.",
  sections: [
    {
      id: "objet",
      title: "Objet",
      paragraphs: [
        `Ces conditions régissent les ventes de ${c.name} (marque Suzalink), ${c.address}, ${c.rcs}, à des clients professionnels : l'abonnement au logiciel Suzalink et les missions de prospection externalisée.`,
        "Elles s'appliquent sauf accord écrit contraire. Le devis ou le bon de commande signé précise l'offre choisie.",
      ],
    },
    {
      id: "offres",
      title: "Offres",
      paragraphs: [
        "**Le logiciel** : abonnement mensuel ou annuel à l'une des offres décrites sur la page [tarifs](/tarifs), avec le nombre d'utilisateurs inclus et les options indiqués pour chaque offre.",
        `**La prospection externalisée** : trois formules. Le **${sprint.name}** (2 semaines, 1 téléprospecteur dédié), la **${mission.name}** (1 téléprospecteur dédié, 22 jours par mois) et l'offre **${resultat.name}** (réservée aux cibles déjà prouvées en mission, facturée au RDV honoré). Le contenu de chaque formule est décrit sur la page [prospection externalisée](/prospection-externalisee).`,
      ],
    },
    {
      id: "prix",
      title: "Prix et paiement",
      paragraphs: [
        "Tous les prix sont en euros, hors taxes (HT) : la TVA applicable s'ajoute. Les prix en vigueur sont ceux de la page [tarifs](/tarifs) à la date de la commande ; ils peuvent évoluer pour les commandes futures.",
        `Prospection : ${sprint.name} à ${eur(sprint.price.amount)} HT, une fois (déduit du premier mois si la mission continue) ; ${mission.name} à ${eur(mission.price.amount)} HT par mois, plus 100 € HT par RDV honoré ; ${resultat.name} à partir de ${eur(resultat.price.amount)} HT par RDV honoré, selon la cible (de 180 à 300 € HT).`,
        "TODO : délai de paiement, pénalités de retard et indemnité forfaitaire de recouvrement à confirmer par le conseil juridique.",
      ],
    },
    {
      id: "duree",
      title: "Durée et résiliation",
      paragraphs: [
        `**Prospection** : mission mensuelle sans engagement, avec un mois de préavis ; après le sprint test, vous arrêtez quand vous voulez. ${g("Sans engagement")}`,
        "**Logiciel** : l'abonnement mensuel est sans engagement ; l'abonnement annuel est facturé chaque année. TODO : modalités de résiliation et sort de l'année en cours à confirmer.",
      ],
    },
    {
      id: "sprint",
      title: "Sprint test",
      paragraphs: [
        "Le sprint test sert à mesurer, en deux semaines, ce que votre cible peut donner. Il se termine par un bilan avec le coût réel d'un RDV sur votre cible. Son prix est déduit du premier mois de mission si vous continuez.",
      ],
    },
    {
      id: "rdv",
      title: "RDV honoré, RDV remplacé",
      paragraphs: [
        "Un RDV est facturé lorsqu'il est honoré. En offre « 100 % résultat », le RDV est validé avec vous avant facturation.",
        g("RDV remplacé"),
        "TODO : définition précise d'un « RDV honoré » et d'un RDV « hors cible » à confirmer avec l'équipe commerciale.",
      ],
    },
    {
      id: "donnees",
      title: "Données et enregistrements",
      paragraphs: [
        g("Vos données"),
        g("Rien de caché"),
        "Pour les données personnelles de vos prospects, Suzali Conseil agit pour votre compte : voir la [politique de confidentialité](/confidentialite). TODO : accord de sous-traitance des données (article 28 du RGPD) à rédiger et à annexer.",
      ],
    },
    {
      id: "obligations",
      title: "Vos obligations",
      paragraphs: [
        "Vous vous engagez à fournir des fichiers de contacts obtenus et utilisés légalement, et à nous transmettre les informations nécessaires à la mission (offre, cible, argumentaire). TODO : à compléter par le conseil juridique.",
      ],
    },
    {
      id: "responsabilite",
      title: "Responsabilité",
      paragraphs: [
        "Nous nous engageons sur les moyens mis en œuvre et sur les garanties écrites plus haut. Nous ne pouvons pas garantir un nombre de RDV ou un chiffre d'affaires, qui dépendent de votre offre et de votre cible.",
        "TODO : plafond de responsabilité et exclusions à définir par le conseil juridique.",
      ],
    },
    {
      id: "droit",
      title: "Droit applicable et litiges",
      paragraphs: [
        "Ces conditions sont soumises au droit français. En cas de litige, nous cherchons d'abord une solution amiable.",
        `À défaut : ${c.jurisdiction}.`,
      ],
    },
  ],
};
