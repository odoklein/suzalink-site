/**
 * Menu principal (desktop : panneaux déroulants ; mobile : accordéons).
 * Chaque lien pointe vers une page qui existe : n'ajoutez un lien que si la page est en ligne.
 */
import type { IconName } from "@/components/ui/Icon";
import { featurePages } from "./pages/logiciel";

export type MenuLink = { label: string; href: string; body?: string; icon?: IconName; /** Aperçu (cartes uniquement), fichier de public/visuals/. */ image?: string };
export type MenuFeature = { label: string; href: string; body: string; image: string; tag: string };

export type MenuItem =
  | { label: string; href: string }
  | {
      label: string;
      /** Colonnes de liens, chacune avec un titre. */
      columns: Array<{ title: string; links: MenuLink[]; layout?: "list" | "cards" }>;
      /** Carte mise en avant, à droite du panneau. */
      feature?: MenuFeature;
      /** Liens secondaires, en bas du panneau. */
      footer?: MenuLink[];
    };

export const menu: MenuItem[] = [
  {
    label: "Logiciel",
    columns: [
      {
        title: "Autour d'un appel",
        links: featurePages.map((f) => ({ label: f.label, href: f.href, body: f.body, icon: f.icon as IconName })),
      },
    ],
    feature: {
      tag: "IA",
      label: "La fiche de RDV rédigée par l'IA",
      href: "/logiciel/ia",
      body: "Besoin, budget, décideur, objections : relue par le téléprospecteur, prête pour le client.",
      image: "/visuals/fiche-rdv-ia.webp",
    },
    footer: [
      { label: "Vue d'ensemble du logiciel", href: "/logiciel", icon: "grid" },
      { label: "Sécurité des données", href: "/securite", icon: "lock" },
    ],
  },
  {
    label: "Solutions",
    columns: [
      {
        title: "Pour qui",
        layout: "cards",
        links: [
          { label: "Agences de prospection", href: "/solutions/agences-prospection", body: "Marque blanche, portail client, plusieurs missions par téléprospecteur.", icon: "building", image: "/visuals/marque-blanche.webp" },
          { label: "Équipes commerciales", href: "/solutions/equipes-commerciales", body: "Votre équipe de téléprospection, pilotée en direct.", icon: "users", image: "/visuals/mission-semaine.webp" },
          { label: "Partenaires", href: "/partenaires", body: "Directeurs commerciaux externalisés : des RDV pour vos clients.", icon: "briefcase" },
        ],
      },
    ],
    footer: [{ label: "Pas d'équipe ? Faire prospecter par nos téléprospecteurs", href: "/prospection-externalisee", icon: "phone" }],
  },
  {
    label: "Ressources",
    columns: [
      {
        title: "Guides",
        links: [
          { label: "Externaliser sa prospection", href: "/guides/externaliser-prospection-commerciale", icon: "book" },
          { label: "Prix d'un RDV qualifié", href: "/guides/prix-rdv-qualifie", icon: "chart" },
          { label: "Passer le barrage secrétaire", href: "/guides/barrage-secretaire", icon: "phone" },
          { label: "Tous les guides", href: "/guides", icon: "grid" },
        ],
      },
      {
        title: "Suzalink",
        links: [
          { label: "Cas clients", href: "/cas-clients", icon: "target" },
          { label: "Secteurs", href: "/secteurs", icon: "map" },
          { label: "Sécurité", href: "/securite", icon: "shield" },
          { label: "À propos", href: "/a-propos", icon: "users" },
          { label: "Contact", href: "/contact", icon: "mail" },
        ],
      },
    ],
    feature: {
      tag: "Cas client",
      label: "147 RDV terrain en deux mois",
      href: "/cas-clients",
      body: "Notre mission vers les cabinets dentaires, chiffres à l'appui.",
      image: "/visuals/tournees-dentaires.webp",
    },
  },
  { label: "Tarifs", href: "/tarifs" },
];
