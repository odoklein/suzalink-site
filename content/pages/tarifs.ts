/**
 * Page /tarifs : onglet « Logiciel » (par défaut) puis « Prospection ».
 * Mot-clé principal : « prix logiciel de prospection ». Secondaires : « tarif prospection
 * téléphonique », « prix rendez-vous qualifié ».
 * Les montants viennent de content/pricing.ts et content/offers.ts : ne les changez que là.
 *
 * TODO direction : la grille du logiciel (59 / 189 / 419 € HT par mois en annuel) reste à confirmer
 * face à une grille au siège (79 / 119 €) en discussion. Rien n'est changé sans accord écrit.
 */
import { plans, startingPrice } from "../pricing";
import { prospectionOffers } from "../offers";
import type { LandingPage } from "./types";

const eur = (n: number) => `${n.toLocaleString("fr-FR")} €`;
const [solo, small, medium] = plans;
const sprint = prospectionOffers.find((o) => o.id === "sprint")!;
const mission = prospectionOffers.find((o) => o.id === "mission")!;

export const tarifsPage: LandingPage = {
  path: "/tarifs",
  meta: {
    title: "Tarifs du logiciel et de la prospection",
    description: `Prix publics, hors taxes : logiciel de prospection téléphonique dès ${startingPrice} € par mois, et prospection externalisée avec un sprint test à ${sprint.price.amount} €.`,
  },
  breadcrumb: "Tarifs",
  updated: "2026-11-21",
  hero: {
    eyebrow: "Tarifs",
    title: "Des prix publics, sans « nous consulter »",
    lead: "Le logiciel pour votre équipe, ou nos téléprospecteurs qui appellent pour vous. Dans les deux cas, le prix est écrit ici, hors taxes.",
    primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
    secondary: { label: "Comparer les offres", href: "#comparer" },
    bullets: ["Logiciel : mensuel sans engagement, ou annuel", "Mise en service et formation comprises selon l'offre", "Prospection : sprint test de deux semaines"],
  },
  blocks: [
    {
      kind: "answer",
      question: "Combien coûte le logiciel Suzalink ?",
      answer: `${solo.name} : ${eur(solo.price.annual)} HT par mois en annuel pour 1 utilisateur. ${small.name} : ${eur(small.price.annual)} HT par mois pour ${small.seatsIncluded} utilisateurs, avec le tableau de bord manager. ${medium.name} : ${eur(medium.price.annual)} HT par mois pour ${medium.seatsIncluded} utilisateurs, avec la marque blanche et le portail client. En mensuel, sans engagement : ${eur(solo.price.monthly)}, ${eur(small.price.monthly)} et ${eur(medium.price.monthly)} HT.`,
      facts: [
        "Prix publics, hors taxes",
        "Téléphonie, enregistrements et IA dans chaque offre",
        "Mensuel sans engagement, ou annuel",
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
          q: "Quelle offre du logiciel choisir ?",
          a: `${solo.name} si vous prospectez seul. ${small.name} pour une équipe de 3 à 7 personnes avec un manager. ${medium.name} pour une agence de prospection ou une équipe de 8 à 30 personnes, avec la marque blanche et le portail client. Voir [agences](/solutions/agences-prospection) et [équipes commerciales](/solutions/equipes-commerciales).`,
        },
        {
          q: "Y a-t-il des frais de mise en service ?",
          a: `Oui, une fois : ${eur(solo.setupFee.price)} HT pour ${solo.name} (optionnelle), ${eur(small.setupFee.price)} HT pour ${small.name} (mise en service et formation), ${eur(medium.setupFee.price)} HT pour ${medium.name} (déploiement accompagné).`,
        },
        {
          q: "Puis-je ajouter des utilisateurs ?",
          a: `Oui : ${eur(small.extraSeat!.price)} HT par mois par utilisateur en ${small.name} (jusqu'à 7), ${eur(medium.extraSeat!.price)} HT par mois en ${medium.name}. L'offre ${solo.name} est prévue pour 1 utilisateur.`,
        },
        {
          q: "Le mensuel est-il sans engagement ?",
          a: "Oui. L'annuel coûte moins cher par mois et il est facturé chaque année.",
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
