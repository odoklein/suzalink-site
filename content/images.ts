/**
 * Toutes les photos du site, au même endroit.
 *
 * VOS VISUELS : déposez chaque fichier dans /public/photos avec le nom indiqué
 * (extension libre : .jpg, .jpeg, .png, .webp ou .avif). Au prochain build, le site
 * l'utilise automatiquement à la place de la photo Unsplash de secours.
 * Les prompts de génération sont dans IMAGE_PROMPTS.md.
 *
 * `alt` décrit VOTRE visuel ; `fallback.alt` décrit la photo Unsplash de secours.
 * Si vous changez un visuel, mettez son `alt` à jour.
 */

export type SiteImage = { src: string; alt: string };

export type PhotoEntry = {
  /** Chemin dans /public, sans extension. */
  file: string;
  alt: string;
  /** Photo utilisée tant que le fichier n'existe pas. */
  fallback?: SiteImage;
  /** Position du cadrage (CSS object-position), si le sujet n'est pas centré. */
  position?: string;
};

const unsplash = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=2400`;

export const images = {
  /*
   * Série de visuels de la marque (crème, teal, menthe, une touche de jaune), dans public/photos/.
   * Ce sont des visuels illustratifs : ne jamais les placer à côté d'un témoignage ou d'un cas
   * client, ils passeraient pour de vrais clients.
   */
  /** Accueil, « Pour qui » : la directrice commerciale qui pilote. */
  audience: {
    file: "/photos/directrice-commerciale",
    alt: "Une directrice commerciale prend des notes dans un carnet à son bureau, près d'une fenêtre donnant sur des immeubles parisiens",
    position: "72% center",
  },
  /** Accueil, « Comment ça marche » : contact, appel, agenda, relance. */
  how: {
    file: "/photos/contact-appel-relance",
    alt: "Deux mains posent une fiche contact sur une table, suivie d'une pastille téléphone, d'un calendrier et d'une étiquette jaune « À relancer »",
  },
  /** Accueil, appel à l'action final : le chemin qui mène au repère jaune. */
  ctaPath: {
    file: "/photos/chemin-rdv",
    alt: "",
  },
  /** 9. Cas clients (prompts n°3, 4 et 5). Section affichée seulement avec au moins deux cas réels. */
  caseAgency: {
    file: "/photos/case-agency",
    alt: "Open space en briques et plantes : des téléprospecteurs en casque passent leurs appels autour d'une grande table en bois",
    fallback: {
      src: unsplash("photo-1522071820081-009f0129c71c"),
      alt: "Équipe concentrée sur ses ordinateurs portables autour d'une table en bois, certains avec un casque",
    },
  },
  caseSmb: {
    file: "/photos/case-smb",
    alt: "Une manager montre un graphique sur l'ordinateur d'une commerciale assise à côté d'elle",
    fallback: {
      src: unsplash("photo-1552664730-d307ca884978"),
      alt: "Réunion d'équipe devant un mur couvert de notes adhésives",
    },
  },
  caseFreelance: {
    file: "/photos/case-freelance",
    alt: "Consultant en casque, en plein appel devant son ordinateur, dans un appartement haussmannien",
    position: "60% center",
    fallback: {
      src: unsplash("photo-1525182008055-f88b95ff7980"),
      alt: "Commercial au téléphone à son bureau, devant son écran",
    },
  },
} satisfies Record<string, PhotoEntry>;

export type ImageKey = keyof typeof images;
