/**
 * Menu principal (desktop : panneaux déroulants ; mobile : accordéons).
 * Chaque lien pointe vers une page qui existe : n'ajoutez un lien que si la page est en ligne.
 *
 * Pas de photo ni d'illustration ici : un visuel n'apparaît qu'une fois sur le site (CLAUDE.md).
 * Les panneaux utilisent les tuiles d'icônes de la marque (public/creative/*.svg) et des cartes
 * en texte (points clés, chiffres réels déjà publiés).
 */
import type { IconName } from "@/components/ui/Icon";
import { featurePages } from "./pages/logiciel";

export type MenuLink = {
  label: string;
  href: string;
  body?: string;
  icon?: IconName;
  /** Tuile d'icône de la marque (public/creative/*.svg), prioritaire sur `icon`. */
  tile?: string;
};

/** Carte mise en avant, à droite du panneau : des points clés ou des chiffres, jamais une image. */
export type MenuFeature = {
  tag: string;
  label: string;
  href: string;
  body: string;
  tile?: string;
  points?: string[];
  stats?: Array<{ value: string; label: string }>;
  /** Source des chiffres, affichée en petit. */
  note?: string;
};

export type MenuColumn = {
  title: string;
  /** Une phrase sous le titre de colonne. */
  intro?: string;
  links: MenuLink[];
  /** Lien « voir tout », en dernière case de la colonne. */
  more?: { label: string; href: string; body: string };
  /** list : liste simple ; steps : étapes numérotées sur deux colonnes ; cards : cartes. */
  layout?: "list" | "steps" | "cards";
};

export type MenuItem =
  | { label: string; href: string }
  | {
      label: string;
      columns: MenuColumn[];
      feature?: MenuFeature;
      /** Liens secondaires, en bas du panneau. */
      footer?: MenuLink[];
      /** Action à droite de la barre du bas. */
      footerAction?: { label: string; href: string };
    };

export const menu: MenuItem[] = [
  {
    label: "Logiciel",
    columns: [
      {
        title: "Autour d'un appel",
        intro: "De la file au portail client, dans un seul outil.",
        layout: "steps",
        more: { label: "Tout le logiciel", href: "/logiciel", body: "Les cinq fonctions autour d'un appel, sur une page." },
        links: featurePages.map((f) => ({ label: f.label, href: f.href, body: f.body, icon: f.icon as IconName, tile: f.tile })),
      },
    ],
    feature: {
      tag: "IA",
      label: "La fiche de RDV rédigée par l'IA",
      href: "/logiciel/ia",
      body: "Relue par le téléprospecteur, prête pour le commercial et le client.",
      points: ["Besoin", "Budget", "Décideur", "Objections"],
    },
    footer: [
      { label: "Sécurité des données", href: "/securite", icon: "lock" },
    ],
    footerAction: { label: "Demander une démo", href: "/demo?offre=logiciel" },
  },
  {
    label: "Solutions",
    columns: [
      {
        title: "Pour qui",
        intro: "Le même logiciel, réglé pour votre façon de prospecter.",
        layout: "cards",
        links: [
          {
            label: "Agences de prospection",
            href: "/solutions/agences-prospection",
            body: "Marque blanche, portail client, plusieurs missions par téléprospecteur.",
            icon: "building",
            tile: "/creative/client.svg",
          },
          {
            label: "Équipes commerciales",
            href: "/solutions/equipes-commerciales",
            body: "Votre équipe de téléprospection, pilotée en direct par le manager.",
            icon: "users",
            tile: "/creative/manager.svg",
          },
          {
            label: "Partenaires",
            href: "/partenaires",
            body: "Directeurs commerciaux externalisés : des RDV pour vos clients.",
            icon: "briefcase",
            tile: "/creative/bd.svg",
          },
        ],
      },
    ],
    footer: [
      { label: "Toutes les solutions", href: "/solutions", icon: "grid" },
      { label: "Pas d'équipe ? Faire prospecter par nos téléprospecteurs", href: "/prospection-externalisee", icon: "phone" },
    ],
    footerAction: { label: "Voir les tarifs", href: "/tarifs" },
  },
  {
    label: "Ressources",
    columns: [
      {
        title: "Guides",
        layout: "list",
        links: [
          { label: "Externaliser sa prospection", href: "/guides/externaliser-prospection-commerciale", body: "Quand, comment, à quel prix.", icon: "book" },
          { label: "Prix d'un RDV qualifié", href: "/guides/prix-rdv-qualifie", body: "Le calcul, avec nos chiffres.", icon: "chart" },
          { label: "Passer le barrage secrétaire", href: "/guides/barrage-secretaire", body: "Ce qui marche au téléphone.", icon: "phone" },
          { label: "Tous les guides", href: "/guides", icon: "grid" },
        ],
      },
      {
        title: "Suzalink",
        layout: "list",
        links: [
          { label: "Cas clients", href: "/cas-clients", body: "Des missions réelles, en chiffres.", icon: "target" },
          { label: "Secteurs", href: "/secteurs", body: "Ce que nous avons déjà appelé.", icon: "map" },
          { label: "Sécurité", href: "/securite", body: "Une base de données par client.", icon: "shield", tile: "/creative/instance.svg" },
          { label: "À propos", href: "/a-propos", icon: "users" },
          { label: "Contact", href: "/contact", icon: "mail" },
        ],
      },
    ],
    feature: {
      tag: "Cas client",
      label: "Cabinets dentaires, fin 2025",
      href: "/cas-clients",
      body: "Faire accepter la visite d'un commercial terrain, partout en France.",
      stats: [
        { value: "147", label: "RDV terrain" },
        { value: "5 174", label: "appels" },
      ],
      note: "Client anonymisé, suivi de mission",
    },
  },
  { label: "Tarifs", href: "/tarifs" },
];
