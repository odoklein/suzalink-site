import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Everything public is open to search engines and to AI answer engines: being cited by
 * ChatGPT, Perplexity, Claude or Google's AI answers is part of how prospects find us.
 * The AI crawlers are listed by name so the choice is explicit (remove a line to opt out).
 */
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
