/**
 * Réglages globaux du site : nom, URL, SEO, barre d'annonce, navigation, pied de page.
 */

export type NavLink = { label: string; href: string };

export const site = {
  name: "Suzalink",
  /** URL publique, utilisée pour le SEO, le sitemap et l'image de partage. TODO : domaine définitif. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://suzalink.com",
  locale: "fr_FR",
  lang: "fr",

  seo: {
    title: "Suzalink : logiciel de prospection téléphonique",
    titleTemplate: "%s | Suzalink",
    description:
      "Le logiciel des agences et équipes de prospection téléphonique : appels enregistrés, fiche de RDV par l'IA, portail client. Dès 29 € HT par utilisateur.",
    ogImageAlt: "Suzalink : votre prospection, vos règles.",
  },

  /** Lien « Se connecter ». TODO : URL de l'application. */
  loginUrl: "https://app.suzalink.com",
  /** Toutes les actions « Demander une démo » mènent ici. */
  demoHref: "/demo?offre=logiciel",
  demoLabel: "Demander une démo",
  loginLabel: "Se connecter",

  announcement: {
    badge: "Nouveaux tarifs",
    text: "Dès 29 € HT par utilisateur et par mois, sans engagement",
    href: "/tarifs",
  },

  // Menu principal : content/menu.ts


  footer: {
    tagline: "Le logiciel des agences et équipes de prospection téléphonique. Pas d'équipe ? Nos téléprospecteurs appellent pour vous.",
    /** Maison mère : affichée sous le logo et dans les données structurées. */
    parent: { name: "Suzali Conseil", url: "https://suzaliconseil.com", label: "Une marque de Suzali Conseil" },
    columns: [
      {
        title: "Logiciel",
        links: [
          { label: "Vue d'ensemble", href: "/logiciel" },
          { label: "File d'appels", href: "/logiciel/file-appels" },
          { label: "Téléphonie", href: "/logiciel/telephonie" },
          { label: "Fiche de RDV par l'IA", href: "/logiciel/ia" },
          { label: "Portail client", href: "/logiciel/portail-client" },
          { label: "Marque blanche", href: "/logiciel/marque-blanche" },
          { label: "Tarifs", href: "/tarifs" },
        ],
      },
      {
        title: "Solutions",
        links: [
          { label: "Agences de prospection", href: "/solutions/agences-prospection" },
          { label: "Équipes commerciales", href: "/solutions/equipes-commerciales" },
          { label: "Partenaires", href: "/partenaires" },
          { label: "Prospection externalisée", href: "/prospection-externalisee" },
          { label: "Sprint test", href: "/tarifs#sprint" },
        ],
      },
      {
        title: "Ressources",
        links: [
          { label: "Guides", href: "/guides" },
          { label: "Cas clients", href: "/cas-clients" },
          { label: "Secteurs", href: "/secteurs" },
          { label: "Sécurité", href: "/securite" },
        ],
      },
      {
        title: "Entreprise",
        links: [
          { label: "À propos", href: "/a-propos" },
          { label: "Suzali Conseil", href: "https://suzaliconseil.com" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Légal",
        links: [
          { label: "Mentions légales", href: "/mentions-legales" },
          { label: "Confidentialité", href: "/confidentialite" },
          { label: "CGV", href: "/cgv" },
          { label: "Cookies", href: "/cookies" },
        ],
      },
    ],
    // TODO : ajouter les vrais comptes (URL complète) ; un réseau sans URL n'est pas affiché.
    //   { label: "LinkedIn", href: "https://www.linkedin.com/company/…", icon: "linkedin" },
    //   { label: "YouTube", href: "https://www.youtube.com/@…", icon: "youtube" },
    socials: [] as ReadonlyArray<{ label: string; href: string; icon: "linkedin" | "youtube" }>,
    languages: {
      label: "Langue",
      current: "FR",
      // La version anglaise n'existe pas encore : le bouton EN est désactivé.
      other: { code: "EN", note: "English version coming soon" },
    },
    copyright: "Suzalink, une marque de Suzali Conseil. Tous droits réservés.",
  },
} as const;
