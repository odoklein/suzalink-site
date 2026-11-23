import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { sectors } from "@/content/pages/secteurs";
import { guides } from "@/content/pages/guides";
import { softwarePages } from "@/content/pages/logiciel";
import { crmAgencePage } from "@/content/pages/crm-agence-prospection";
import { equipesPage, solutionsHub } from "@/content/pages/solutions";
import { tarifsPage } from "@/content/pages/tarifs";
import { prospectionPage } from "@/content/pages/prospection-externalisee";
import { partenairesPage } from "@/content/pages/partenaires";
import { securitePage, casClientsPage, contactPage } from "@/content/pages/ressources";
import { guidesHub, secteursHub, aPropos } from "@/content/pages/hubs";
import { mentionsLegales, confidentialite, cgv, cookies } from "@/content/pages/legal";

/**
 * Every indexable page, with `lastModified` taken from the page's own `updated` date
 * (search engines only trust lastmod when it changes with the content). Google ignores
 * priority and changefreq, so they are left out.
 * Home and /demo have no `updated` field: bump HOME_UPDATED when the home page changes.
 */
const HOME_UPDATED = "2026-11-23";

type Page = { path: string; updated?: string };

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Page[] = [
    { path: "/", updated: HOME_UPDATED },
    ...softwarePages,
    solutionsHub,
    crmAgencePage,
    equipesPage,
    partenairesPage,
    prospectionPage,
    tarifsPage,
    securitePage,
    casClientsPage,
    secteursHub,
    ...sectors,
    guidesHub,
    ...guides,
    aPropos,
    contactPage,
    { path: "/demo", updated: HOME_UPDATED },
    mentionsLegales,
    confidentialite,
    cgv,
    cookies,
  ];
  return pages.map((p) => ({
    url: `${site.url}${p.path === "/" ? "" : p.path}`,
    lastModified: new Date(`${p.updated ?? HOME_UPDATED}T00:00:00Z`),
  }));
}
