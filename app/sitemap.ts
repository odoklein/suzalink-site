import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { sectors } from "@/content/pages/secteurs";
import { guides } from "@/content/pages/guides";
import { softwarePages } from "@/content/pages/logiciel";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });
  return [
    page("/", 1, "weekly"),
    ...softwarePages.map((p) => page(p.path, p.path === "/logiciel" ? 0.95 : 0.8, "weekly")),
    page("/solutions/agences-prospection", 0.9, "weekly"),
    page("/solutions/equipes-commerciales", 0.9, "weekly"),
    page("/tarifs", 0.9),
    page("/securite", 0.7),
    page("/prospection-externalisee", 0.8, "weekly"),
    page("/partenaires", 0.7),
    page("/cas-clients", 0.7),
    page("/secteurs", 0.6),
    ...sectors.map((s) => page(s.path, 0.7)),
    page("/guides", 0.6, "weekly"),
    ...guides.map((g) => page(g.path, 0.7)),
    page("/a-propos", 0.5),
    page("/contact", 0.4),
    page("/demo", 0.6),
    page("/mentions-legales", 0.2),
    page("/confidentialite", 0.2),
    page("/cgv", 0.2),
    page("/cookies", 0.2),
  ];
}
