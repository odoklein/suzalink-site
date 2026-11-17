/**
 * Page /partenaires : pour les directeurs commerciaux externalisés (DCE), consultants et
 * dirigeants à temps partagé qui veulent des RDV pour leurs clients.
 * Mot-clé principal : « directeur commercial externalisé » (plan SEO, novembre 2026).
 *
 * Ce qui est écrit ici repose sur les offres et garanties de content/offers.ts.
 * TODO équipe commerciale : les conditions de partenariat (commission, remise, volume) ne sont
 * pas encore fixées. Tant qu'elles ne le sont pas, la page renvoie vers un échange, sans chiffre.
 */
import type { LandingPage } from "./types";

export const partenairesPage: LandingPage = {
  path: "/partenaires",
  meta: {
    title: "Directeur commercial externalisé : devenez partenaire",
    description:
      "Directeur commercial externalisé ou consultant : vous fixez la stratégie, nos téléprospecteurs remplissent l'agenda de vos clients. Chaque appel reste visible.",
  },
  breadcrumb: "Partenaires",
  updated: "2026-11-17",
  hero: {
    eyebrow: "Directeurs commerciaux externalisés",
    title: "Recommandez Suzalink, suivez vos clients",
    lead: "Vous fixez le cap commercial de vos clients. Nos téléprospecteurs appellent leurs cibles et remplissent leur agenda. Vous suivez chaque appel avec eux, dans leur portail.",
    primary: { label: "Devenir partenaire", href: "/demo?offre=partenaire" },
    secondary: { label: "Voir les offres", href: "/tarifs" },
    bullets: [
      "Une mission dédiée pour chaque client",
      "Un portail par client : appels, enregistrements, RDV",
      "Un sprint test de 2 semaines pour convaincre",
      "Un RDV non honoré est remplacé",
    ],
  },
  blocks: [
    {
      kind: "answer",
      question: "Que peut confier un directeur commercial externalisé à Suzalink ?",
      answer:
        "Les appels qui mènent aux rendez-vous. Vous définissez avec votre client la cible et le discours. Nos téléprospecteurs appellent, chaque appel est enregistré, et votre client reçoit ses RDV avec une fiche qui résume le besoin. Vous gardez la stratégie, nous faisons les appels.",
      facts: [
        "Sprint test de 2 semaines : **990 € HT**",
        "Chaque appel enregistré et réécoutable",
        "RDV non honoré remplacé sous 14 jours",
      ],
    },
    {
      kind: "pains",
      id: "constat",
      eyebrow: "Votre quotidien",
      title: "Vous construisez la stratégie. Qui passe les appels ?",
      intro: "Ce que nous disent les directeurs commerciaux à temps partagé.",
      items: [
        {
          title: "Personne n'a le temps d'appeler",
          body: "Le plan d'action est prêt, la cible est claire. Mais chez votre client, personne ne peut passer ses journées au téléphone.",
        },
        {
          title: "Recruter pour un client, c'est long",
          body: "Embaucher et former un téléprospecteur prend des mois. Pour un client que vous accompagnez quelques jours par mois, ça ne tient pas. Nous comparons les options dans [notre guide pour externaliser sa prospection](/guides/externaliser-prospection-commerciale).",
        },
        {
          title: "Votre client veut des preuves",
          body: "Des chiffres le vendredi ne suffisent pas. Il veut savoir ce qui a été dit en son nom. Avec Suzalink, il écoute les appels lui-même.",
        },
      ],
    },
    {
      kind: "steps",
      id: "methode",
      eyebrow: "Comment ça se passe",
      title: "Quatre étapes, du premier échange aux RDV",
      howto: true,
      items: [
        {
          title: "Vous nous présentez le client",
          body: "Un premier échange pour comprendre son offre, sa cible et ce qu'est un bon RDV pour lui.",
        },
        {
          title: "Le cadrage, à trois",
          body: "Vous, votre client et nous : on fixe la cible, le bon interlocuteur et le script.",
        },
        {
          title: "Le sprint test",
          body: "Deux semaines d'appels. À la fin, votre client connaît le coût réel d'un RDV sur sa cible.",
        },
        {
          title: "La mission",
          body: "Si le test est concluant, la mission continue. Chaque semaine, un bilan : appels, objections, RDV.",
        },
      ],
    },
    {
      kind: "features",
      id: "ce-que-voit-votre-client",
      eyebrow: "Ce que voit votre client",
      title: "Tout est visible, rien n'est caché",
      items: [
        { title: "Son portail", body: "Ses appels, ses enregistrements et ses RDV, à jour le jour même.", icon: "grid" },
        { title: "Les enregistrements", body: "Chaque appel peut être réécouté, avec son résultat et les notes du téléprospecteur.", icon: "waveform" },
        { title: "La fiche de RDV", body: "Avant chaque RDV : le besoin, le budget et le décideur, rédigés par l'IA et relus.", icon: "sparkle" },
        { title: "Le bilan de la semaine", body: "Joignabilité, objections les plus fréquentes et ce qu'on change la semaine suivante.", icon: "chart" },
        { title: "Ses données", body: "Fichiers, contacts et enregistrements lui appartiennent. Il les récupère à tout moment.", icon: "lock" },
        { title: "Un RDV remplacé", body: "Un RDV non honoré ou hors de la cible est remplacé sous 14 jours, sans frais.", icon: "shield" },
      ],
    },
    {
      kind: "offers",
      id: "offres",
      eyebrow: "Offres pour vos clients",
      title: "Trois façons de commencer",
      intro: "Des prix publics, hors taxes. Le sprint test est la façon la plus simple de convaincre un client.",
    },
    {
      kind: "faq",
      id: "faq",
      eyebrow: "Questions fréquentes",
      title: "Avant de nous recommander",
      items: [
        {
          q: "Comment fonctionne le partenariat ?",
          a: "Les conditions (rémunération, volume de clients, suivi) se définissent ensemble, lors d'un premier échange. Nous préférons les fixer avec vous plutôt que d'afficher une grille qui ne vous correspondrait pas.",
        },
        {
          q: "Combien coûte une mission pour mon client ?",
          a: "Le sprint test coûte 990 € HT pour deux semaines, déduits s'il continue. La mission mensuelle coûte 1 290 € HT par mois plus 100 € HT par RDV honoré. Tous les prix sont sur la [page tarifs](/tarifs).",
        },
        {
          q: "Qui appelle les prospects de mon client ?",
          a: "Un téléprospecteur de l'équipe Suzali Conseil, dédié à la mission, formé à l'offre et au script. S'il change de mission, son remplaçant reprend avec tout l'historique.",
        },
        {
          q: "Mon client peut-il écouter les appels ?",
          a: "Oui. Chaque appel est enregistré et consultable dans son portail le jour même, avec le résultat de l'appel et les notes du téléprospecteur.",
        },
        {
          q: "Est-ce conforme au RGPD ?",
          a: "Nous appelons des professionnels sur leurs coordonnées professionnelles, au sujet de leur activité. Chaque personne peut refuser d'être rappelée : son refus est enregistré et respecté sur toutes les missions.",
        },
      ],
    },
    {
      kind: "links",
      id: "a-lire",
      eyebrow: "À voir aussi",
      title: "Pour aller plus loin",
      items: [
        { label: "Prospection externalisée", href: "/prospection-externalisee", body: "Comment se passe une mission, étape par étape." },
        { label: "Prix d'un RDV qualifié", href: "/guides/prix-rdv-qualifie", body: "Forfait, paiement au RDV, coût interne : le calcul complet." },
        { label: "Une vraie mission en chiffres", href: "/secteurs/cabinets-dentaires", body: "147 RDV terrain en deux mois auprès de cabinets dentaires." },
      ],
    },
    {
      kind: "cta",
      id: "commencer",
      eyebrow: "Partenaires",
      title: "Parlons de vos clients",
      intro: "Un premier échange pour voir quels clients pourraient en profiter, et fixer ensemble les conditions du partenariat.",
      primary: { label: "Devenir partenaire", href: "/demo?offre=partenaire" },
      secondary: { label: "Voir les tarifs", href: "/tarifs" },
    },
  ],
};
