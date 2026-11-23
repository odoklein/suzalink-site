/**
 * Page /tarifs : onglet « Logiciel » (par défaut) puis « Prospection ».
 * Mot-clé principal : « prix logiciel de prospection ». Secondaires : « tarif prospection
 * téléphonique », « prix rendez-vous qualifié ».
 * Les montants viennent de content/pricing.ts et content/offers.ts : ne les changez que là.
 *
 * Grille du logiciel décidée le 23 novembre 2026 : 29 € et 59 € HT par utilisateur et par mois.
 * TODO direction : quotas, frais de mise en service et tarif annuel à confirmer (voir content/pricing.ts).
 */
import { plans, startingPrice } from "../pricing";
import { prospectionOffers } from "../offers";
import type { LandingPage } from "./types";

const eur = (n: number) => `${n.toLocaleString("fr-FR")} €`;
const [equipe, agence] = plans;
const sprint = prospectionOffers.find((o) => o.id === "sprint")!;
const mission = prospectionOffers.find((o) => o.id === "mission")!;

export const tarifsPage: LandingPage = {
  path: "/tarifs",
  meta: {
    title: "Tarifs : dès 29 € par utilisateur et par mois",
    description: `Logiciel de prospection téléphonique : ${startingPrice} € ou ${agence.pricePerUser} € HT par utilisateur et par mois, sans engagement. Prospection externalisée : sprint test à ${sprint.price.amount} €.`,
  },
  breadcrumb: "Tarifs",
  updated: "2026-11-23",
  hero: {
    eyebrow: "Tarifs",
    title: "Deux offres. Un prix par personne.",
    lead: "Pas de paquet de licences, pas de « nous consulter », pas de surprise à la signature. Vous payez pour les personnes qui appellent, chaque mois, et vous arrêtez quand vous voulez.",
    primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
    secondary: { label: "Comparer les offres", href: "#comparer" },
    bullets: [`${equipe.name} : ${eur(equipe.pricePerUser)} HT / utilisateur / mois`, `${agence.name} : ${eur(agence.pricePerUser)} HT / utilisateur / mois`, "Sans engagement, résiliable chaque mois", "Prix hors taxes, tous publics"],
  },
  blocks: [
    {
      kind: "answer",
      question: "Combien coûte le logiciel Suzalink ?",
      answer: `Deux offres, un prix par personne. ${equipe.name} : ${eur(equipe.pricePerUser)} HT par utilisateur et par mois, pour appeler, enregistrer, préparer les RDV avec l'IA et piloter l'équipe. ${agence.name} : ${eur(agence.pricePerUser)} HT par utilisateur et par mois, avec en plus le portail client, la marque blanche et plusieurs missions par téléprospecteur. Sans engagement.`,
      facts: [
        "Prix publics, hors taxes",
        "Téléphonie, enregistrements et IA dans chaque offre",
        "Sans engagement, résiliable chaque mois",
        `Prospection externalisée : sprint test à ${eur(sprint.price.amount)} HT`,
      ],
    },
    {
      kind: "pricing-tabs",
      id: "offres",
      label: "Choisir le type d'offre",
      software: "Logiciel",
      prospection: {
        label: "Prospection",
        eyebrow: "Suzalink Prospection",
        title: "Pas d'équipe ? Nos téléprospecteurs appellent",
        intro: "Commencez par deux semaines de test. Vous continuez seulement si le coût d'un RDV vous convient.",
        blocks: [
          {
            kind: "showcase",
            id: "bilan",
            eyebrow: "À la fin du sprint",
            title: "Vous connaissez le prix réel d'un RDV",
            intro: "Le bilan du sprint met tout sur la table : appels, contacts joints, intéressés, RDV, et le coût d'un RDV sur votre cible.",
            points: [
              "Le coût réel d'un RDV, calculé sur vos appels",
              "Tous les enregistrements, téléchargeables",
              "Les objections les plus fréquentes et ce qu'on change",
            ],
            image: {
              src: "/visuals/bilan-sprint.webp",
              alt: "Illustration d'un bilan de sprint : 820 appels, 310 contacts joints, 41 intéressés, 7 RDV, soit 142 € HT par RDV pour un sprint à 990 € HT.",
              width: 1448,
              height: 1086,
            },
            reverse: true,
            action: { label: "Lancer un sprint test", href: "/demo?offre=sprint" },
          },
        ],
      },
    },
    {
      kind: "faq",
      id: "faq",
      eyebrow: "Questions fréquentes",
      title: "Sur les prix",
      items: [
        {
          q: "Quelle offre choisir ?",
          a: `${equipe.name} si votre équipe appelle pour votre propre entreprise. ${agence.name} si vous appelez pour plusieurs clients et que vous devez leur montrer les RDV et les appels. Voir [agences](/solutions/agences-prospection) et [équipes commerciales](/solutions/equipes-commerciales).`,
        },
        {
          q: "Pourquoi un prix par utilisateur ?",
          a: "Parce que c'est simple : 3 personnes qui appellent, 3 utilisateurs. Vous ajoutez ou retirez quelqu'un quand l'équipe change, sans changer d'offre.",
        },
        {
          q: "Y a-t-il un engagement ?",
          a: "Non. L'abonnement est mensuel et résiliable chaque mois. Vos données vous appartiennent et vous les récupérez si vous arrêtez.",
        },
        {
          q: "Combien coûte la prospection externalisée ?",
          a: `Le sprint test coûte ${eur(sprint.price.amount)} HT pour deux semaines, déduits si vous continuez. La mission mensuelle coûte ${eur(mission.price.amount)} HT par mois plus 100 € HT par RDV honoré. Sur les cibles déjà prouvées, vous pouvez ne payer que les RDV honorés, de 180 à 300 € HT. Le calcul : [prix d'un RDV qualifié](/guides/prix-rdv-qualifie).`,
        },
        {
          q: "Qu'est-ce qu'un RDV honoré ?",
          a: "Un RDV qui a eu lieu, avec une personne qui correspond à la cible définie ensemble. Un RDV annulé sans être reporté, ou hors cible, n'est pas facturé et il est remplacé.",
        },
        {
          q: "Puis-je combiner le logiciel et la prospection ?",
          a: "Oui. Certaines équipes appellent elles-mêmes avec le logiciel et nous confient une partie des appels. Tout est dans le même outil.",
        },
        {
          q: "Les prix sont-ils hors taxes ?",
          a: "Oui, tous les prix du site sont hors taxes. La TVA s'ajoute au taux en vigueur. Voir les [conditions générales de vente](/cgv).",
        },
      ],
    },
    {
      kind: "links",
      id: "a-lire",
      eyebrow: "À voir aussi",
      title: "Avant de choisir",
      items: [
        { label: "Le logiciel", href: "/logiciel", body: "Toutes les fonctions, autour d'un appel." },
        { label: "Sécurité", href: "/securite", body: "Une instance et une base par client." },
        { label: "Prospection externalisée", href: "/prospection-externalisee", body: "Nos téléprospecteurs, notre méthode, nos garanties." },
      ],
    },
    {
      kind: "cta",
      id: "commencer",
      eyebrow: "Démo",
      title: "Voyez le logiciel sur vos cas",
      intro: "Une démo sur une mission qui ressemble aux vôtres, avec votre équipe.",
      primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
      secondary: { label: "Lancer un sprint test", href: "/demo?offre=sprint" },
    },
  ],
};
