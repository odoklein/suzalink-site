import { site } from "@/content/site";
import { partenairesPage as page } from "@/content/pages/partenaires";
import { LandingPage } from "@/components/landing/Landing";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(page);

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Programme partenaires Suzalink",
  serviceType: "Prospection téléphonique B2B pour les clients des directeurs commerciaux externalisés",
  description: page.meta.description,
  url: `${site.url}${page.path}`,
  areaServed: { "@type": "Country", name: "France" },
  provider: { "@id": `${site.url}/#organisation` },
  audience: { "@type": "BusinessAudience", audienceType: "Directeurs commerciaux externalisés" },
};

export default function Page() {
  return <LandingPage page={page} extra={[service]} />;
}
