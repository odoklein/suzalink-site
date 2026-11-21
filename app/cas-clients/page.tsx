import { site } from "@/content/site";
import { publishedCases } from "@/content/cases";
import { casClientsPage as page } from "@/content/pages/ressources";
import { LandingPage } from "@/components/landing/Landing";
import { CaseStudyList } from "@/components/cases/CaseStudyList";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(page);

const list = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: page.meta.title,
  itemListElement: publishedCases.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.title, url: `${site.url}${c.href}` })),
};

export default function Page() {
  return (
    <LandingPage page={page} extra={[list]}>
      <CaseStudyList />
    </LandingPage>
  );
}
