import { site } from "@/content/site";
import { prospectionPage } from "@/content/pages/prospection-externalisee";
import { crmAgencePage } from "@/content/pages/crm-agence-prospection";
import { tarifsPage } from "@/content/pages/tarifs";
import { partenairesPage } from "@/content/pages/partenaires";
import { guides } from "@/content/pages/guides";
import { sectors } from "@/content/pages/secteurs";
import { aPropos } from "@/content/pages/hubs";

// llms.txt (https://llmstxt.org): a plain summary of the site for AI assistants and answer engines.
export const dynamic = "force-static";

const line = (p: { path: string; meta: { title: string; description: string } }) => `- [${p.meta.title}](${site.url}${p.path}): ${p.meta.description}`;

export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.seo.description}`,
    "",
    `${site.name} est une marque de ${site.footer.parent.name} (${site.footer.parent.url}). Deux offres : la prospection téléphonique B2B externalisée (nos téléprospecteurs prennent les rendez-vous du client) et un CRM de prospection pour les agences et les équipes commerciales. Les directeurs commerciaux externalisés peuvent nous confier les appels de leurs clients (programme partenaires). Prix publics, hors taxes, sur ${site.url}/tarifs.`,
    "",
    "## Offres",
    line(prospectionPage),
    line(crmAgencePage),
    line(tarifsPage),
    line(partenairesPage),
    "",
    "## Secteurs",
    ...sectors.map(line),
    "",
    "## Guides",
    ...guides.map(line),
    "",
    "## Entreprise",
    line(aPropos),
    "",
  ].join("\n");
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
