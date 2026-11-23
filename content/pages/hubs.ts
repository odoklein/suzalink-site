/**
 * Pages de rubrique : /secteurs et /a-propos.
 * La liste des secteurs se construit toute seule à partir de secteurs.ts.
 */
import { sectors } from "./secteurs";
import type { LandingPage } from "./types";

export const secteursHub: LandingPage = {
  path: "/secteurs",
  breadcrumb: "Secteurs",
  updated: "2026-11-12",
  meta: {
    title: "Prospection B2B par secteur : nos missions",
    description:
      "Les secteurs où nous avons déjà prospecté, avec les chiffres réels de nos missions : comment joindre le bon interlocuteur et ce qui fait dire oui.",
  },
  hero: {
    eyebrow: "Secteurs",
    title: "Chaque cible se prospecte différemment",
    lead: "Un cabinet dentaire ne décroche pas comme une direction financière. Nous ne publions une page secteur que lorsqu'une vraie mission nous a appris quelque chose de chiffré.",
    primary: { label: "Tester sur mon secteur", href: "/demo?offre=sprint" },
    secondary: { label: "Voir les cas clients", href: "/cas-clients" },
  },
  blocks: [
    {
      kind: "links",
      id: "secteurs",
      eyebrow: "Secteurs documentés",
      title: "Nos missions, secteur par secteur",
      items: sectors.map((s) => ({ label: s.name, href: s.path, body: s.meta.description })),
    },
    {
      kind: "pains",
      id: "en-cours",
      eyebrow: "En cours de documentation",
      title: "D'autres cibles appelées en ce moment",
      intro: "Ces pages sortiront quand les missions auront des résultats à montrer.",
      items: [
        { title: "Directions financières", body: "DAF et contrôleurs de gestion : une cible qui filtre beaucoup, et qui demande un message très précis." },
        { title: "Industrie et transport", body: "Dirigeants et directions financières de PME industrielles, prospectés par téléphone depuis 2025." },
        { title: "Laboratoires dentaires", body: "Une base nationale nettoyée de 6 732 cabinets, appelée en 2026." },
        { title: "Votre secteur ?", body: "Le [sprint test](/tarifs#sprint) vous dit en deux semaines ce que votre cible donne au téléphone." },
      ],
    },
  ],
};

export const aPropos: LandingPage = {
  path: "/a-propos",
  breadcrumb: "À propos",
  updated: "2026-11-22",
  meta: {
    title: "À propos de Suzalink (Suzali Conseil)",
    description:
      "Suzalink, marque de Suzali Conseil : un logiciel de prospection téléphonique construit sur le terrain par une vingtaine de téléprospecteurs.",
  },
  hero: {
    eyebrow: "À propos",
    title: "Nous appelons tous les jours. Suzalink en est né.",
    lead: "Suzalink est un nouveau chapitre de [Suzali Conseil](https://suzaliconseil.com). Nous menons des missions de prospection pour nos clients, et nous avons construit le CRM dont nous avions besoin pour les faire bien.",
    primary: { label: "Demander une démo", href: "/demo?offre=logiciel" },
    secondary: { label: "Nos offres", href: "/tarifs" },
  },
  blocks: [
    {
      kind: "answer",
      question: "Qui est derrière Suzalink ?",
      answer:
        "Suzalink est une marque de Suzali Conseil, société de conseil commercial. L'équipe compte une vingtaine de téléprospecteurs (SDR) qui mènent 5 à 10 missions de prospection en parallèle. Suzalink réunit deux offres : la prospection externalisée, et le CRM que nous utilisons pour la faire, proposé aux agences et aux équipes SDR.",
      facts: ["≈ 20 téléprospecteurs", "5 à 10 missions en parallèle", "Un CRM utilisé chaque jour par l'équipe"],
    },
    {
      kind: "prose",
      id: "histoire",
      eyebrow: "Notre histoire",
      title: "D'une agence à un produit",
      parts: [
        {
          title: "Suzali Conseil, la maison mère",
          paragraphs: [
            "Suzali Conseil accompagne des entreprises dans leur développement commercial. La prospection téléphonique B2B est devenue le cœur de son activité : cabinets dentaires, directions financières, industrie, transport.",
          ],
        },
        {
          title: "Pourquoi un CRM",
          paragraphs: [
            "Nos téléprospecteurs passaient d'une mission à l'autre dans la journée, nos clients voulaient voir les appels, et aucun outil ne faisait les deux sans bricolage. Nous avons donc construit le nôtre : file d'appels, enregistrements, fiche de RDV rédigée par l'IA, portail client. C'est devenu [le logiciel Suzalink](/logiciel).",
          ],
        },
        {
          title: "Suzalink, le nouveau chapitre",
          paragraphs: [
            "Suzalink réunit ce que nous savons faire : prendre des RDV pour vous avec [la prospection externalisée](/prospection-externalisee), ou vous donner l'outil pour les prendre vous-même.",
          ],
        },
      ],
    },
    {
      kind: "features",
      id: "principes",
      eyebrow: "Nos principes",
      title: "Ce sur quoi nous ne transigeons pas",
      items: [
        { icon: "waveform", title: "Tout est enregistré", body: "Chaque appel est consultable par le client. Rien ne se passe en coulisses." },
        { icon: "check", title: "Rien d'inventé", body: "Nos chiffres viennent de nos missions, avec leur date. Pas de promesse avant le premier appel." },
        { icon: "lock", title: "Les données au client", body: "Fichiers, contacts et enregistrements appartiennent au client. Les données des agences clientes du CRM ne sont jamais utilisées par nos équipes." },
        { icon: "users", title: "Respect des personnes appelées", body: "On se présente, on dit pourquoi on appelle, et un refus est enregistré et respecté." },
        { icon: "chart", title: "Des prix publics", body: "Tous nos prix sont sur le site, hors taxes. Voir les [tarifs](/tarifs)." },
        { icon: "shield", title: "Une instance par client", body: "Chaque agence cliente du CRM a sa propre instance et sa propre base." },
      ],
    },
    {
      kind: "links",
      id: "liens",
      eyebrow: "Pour aller plus loin",
      title: "Découvrir Suzalink",
      items: [
        { label: "Prospection externalisée", href: "/prospection-externalisee", body: "Nos téléprospecteurs prennent vos RDV." },
        { label: "Le logiciel", href: "/logiciel", body: "Le logiciel de prospection téléphonique, à votre marque." },
        { label: "Pourquoi Suzalink", href: "/pourquoi-suzalink", body: "Ce qui nous distingue, sans détour." },
      ],
    },
  ],
};
