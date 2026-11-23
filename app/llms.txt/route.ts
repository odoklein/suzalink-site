import { site } from "@/content/site";
import { prospectionPage } from "@/content/pages/prospection-externalisee";
import { crmAgencePage } from "@/content/pages/crm-agence-prospection";
import { tarifsPage } from "@/content/pages/tarifs";
import { partenairesPage } from "@/content/pages/partenaires";
import { sectors } from "@/content/pages/secteurs";
import { aPropos } from "@/content/pages/hubs";
import { pourquoiPage } from "@/content/pages/pourquoi";
import { fonctionnalitesPage } from "@/content/pages/fonctionnalites";
import { softwarePages } from "@/content/pages/logiciel";
import { equipesPage, solutionsHub } from "@/content/pages/solutions";
import { securitePage, casClientsPage, contactPage } from "@/content/pages/ressources";

// llms.txt (https://llmstxt.org): a plain summary of the site for AI assistants and answer engines.
export const dynamic = "force-static";

const line = (p: { path: string; meta: { title: string; description: string } }) => `- [${p.meta.title}](${site.url}${p.path}): ${p.meta.description}`;

export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.seo.description}`,
    "",
    `${site.name} est une marque de ${site.footer.parent.name} (${site.footer.parent.url}). C'est d'abord un logiciel de prospection téléphonique pour les agences de prospection et de prise de RDV et pour les équipes de téléprospection internes des PME et ETI : file d'appels avec le résultat en une touche, téléphonie Allo et OnOff, enregistrement de chaque appel, fiche de RDV rédigée par l'IA puis relue par le téléprospecteur, portail client, marque blanche, tableau de bord manager. Chaque client a sa propre instance et sa propre base de données. En second, ${site.name} propose la prospection téléphonique B2B externalisée (nos téléprospecteurs prennent les RDV du client) et un programme partenaires pour les directeurs commerciaux externalisés. Prix publics, hors taxes, sur ${site.url}/tarifs.`,
    "",
    "## Logiciel",
    ...softwarePages.map(line),
    line(fonctionnalitesPage),
    line(securitePage),
    "",
    "## Solutions",
    line(solutionsHub),
    line(crmAgencePage),
    line(equipesPage),
    line(partenairesPage),
    line(prospectionPage),
    "",
    "## Tarifs",
    line(tarifsPage),
    line(pourquoiPage),
    "",
    "## Secteurs",
    ...sectors.map(line),
    "",
    "## Entreprise",
    line(casClientsPage),
    line(aPropos),
    line(contactPage),
    "",
  ].join("\n");
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
