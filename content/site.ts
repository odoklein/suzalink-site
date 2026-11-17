/**
 * Réglages globaux du site : nom, URL, SEO, barre d'annonce, navigation, pied de page.
 * Les liens marqués TODO pointent vers des pages qui n'existent pas encore.
 */

export type NavLink = { label: string; href: string };

export const site = {
  name: "Suzalink",
  /** URL publique, utilisée pour le SEO, le sitemap et l'image de partage. TODO : domaine définitif. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://suzalink.com",
  locale: "fr_FR",
  lang: "fr",

  seo: {
    title: "Suzalink : prise de rendez-vous B2B et CRM de prospection",
    titleTemplate: "%s | Suzalink",
    description:
      "Prise de rendez-vous B2B : nos téléprospecteurs remplissent votre agenda, ou votre équipe appelle avec notre CRM. Chaque appel est enregistré et visible.",
    ogImageAlt: "Suzalink : votre prospection, vos règles.",
  },

  /** Lien « Se connecter ». TODO : URL de l'application. */
  loginUrl: "https://app.suzalink.com",
  /** Toutes les actions « Demander une démo » mènent ici. */
  demoHref: "/demo",
  demoLabel: "Demander une démo",
  loginLabel: "Se connecter",

  announcement: {
    badge: "Nouveau",
    text: "Sprint test : 2 semaines de prospection pour juger sur pièces",
    href: "/tarifs#sprint",
  },

  // Menu principal : content/menu.ts


  footer: {
    tagline: "Des RDV B2B pris par nos téléprospecteurs, ou le logiciel pour les prendre vous-même.",
    /** Maison mère : affichée sous le logo et dans les données structurées. */
    parent: { name: "Suzali Conseil", url: "https://suzaliconseil.com", label: "Une marque de Suzali Conseil" },
    columns: [
      {
        title: "Offres",
        links: [
          { label: "Prospection externalisée", href: "/prospection-externalisee" },
          { label: "Sprint test", href: "/tarifs#sprint" },
          { label: "CRM pour agences", href: "/crm-agence-prospection" },
          { label: "Partenaires", href: "/partenaires" },
          { label: "Tarifs", href: "/tarifs" },
        ],
      },
      {
        title: "Produit",
        links: [
          { label: "Comment ça marche", href: "/#comment" },
          { label: "Le logiciel", href: "/#produit" },
          { label: "Garanties", href: "/#garanties" },
          { label: "Sécurité", href: "/#securite" },
        ],
      },
      {
        title: "Ressources",
        links: [
          { label: "Guides", href: "/guides" },
          { label: "Externaliser sa prospection", href: "/guides/externaliser-prospection-commerciale" },
          { label: "Prix d'un RDV qualifié", href: "/guides/prix-rdv-qualifie" },
          { label: "Barrage secrétaire", href: "/guides/barrage-secretaire" },
          { label: "Secteurs", href: "/secteurs" },
          { label: "Prospection des cabinets dentaires", href: "/secteurs/cabinets-dentaires" },
        ],
      },
      {
        title: "Entreprise",
        links: [
          { label: "À propos", href: "/a-propos" },
          { label: "Suzali Conseil", href: "https://suzaliconseil.com" },
          { label: "Contact", href: "/demo" },
        ],
      },
      {
        title: "Légal",
        // TODO : créer ces pages avant la mise en ligne.
        links: [
          { label: "Mentions légales", href: "#" },
          { label: "Confidentialité", href: "#" },
          { label: "CGV", href: "#" },
          { label: "Cookies", href: "#" },
        ],
      },
    ],
    // TODO : renseigner les vrais comptes.
    socials: [
      { label: "LinkedIn", href: "#", icon: "linkedin" },
      { label: "YouTube", href: "#", icon: "youtube" },
    ],
    languages: {
      label: "Langue",
      current: "FR",
      // La version anglaise n'existe pas encore : le bouton EN est désactivé.
      other: { code: "EN", note: "English version coming soon" },
    },
    copyright: "Suzalink, une marque de Suzali Conseil. Tous droits réservés.",
  },
} as const;
