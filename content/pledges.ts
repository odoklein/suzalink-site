/**
 * Nos engagements : six promesses courtes, toutes vérifiables dans le produit ou les tarifs.
 * Affichées sur l'accueil et sur /pourquoi-suzalink. N'ajoutez une ligne que si elle est vraie aujourd'hui.
 */
import { plans } from "./pricing";

const [equipe, agence] = plans;

export const pledges = {
  eyebrow: "Nos engagements",
  title: "Ce que nous promettons, noir sur blanc",
  subtitle: "Six phrases que vous pouvez nous ressortir en réunion.",
  items: [
    { title: "Un prix public.", body: `${equipe.pricePerUser} € ou ${agence.pricePerUser} € HT par utilisateur et par mois. Pas de « nous consulter », pas de paquet imposé.` },
    { title: "Sans engagement.", body: "Un abonnement mensuel. Vous arrêtez quand vous voulez, avec vos données." },
    { title: "Vos données à part.", body: "Une instance et une base de données par client. Rien n'est partagé." },
    { title: "L'IA propose, l'humain valide.", body: "Aucune fiche de RDV ne part sans la relecture du téléprospecteur." },
    { title: "Chaque appel prouvé.", body: "Enregistré, réécoutable, partageable avec votre client." },
    { title: "Construit en appelant.", body: "Nos propres équipes l'utilisent chaque jour, sur leurs vraies missions." },
  ],
  action: { label: "Pourquoi Suzalink", href: "/pourquoi-suzalink" },
};
