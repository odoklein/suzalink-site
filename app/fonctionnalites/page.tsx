import { fonctionnalitesPage as page } from "@/content/pages/fonctionnalites";
import { LandingPage } from "@/components/landing/Landing";
import { FeaturesCatalog, HeroKeys } from "@/components/features/FeaturesCatalog";
import { pageMetadata } from "@/lib/page-meta";
import { softwareSchema } from "@/lib/schema";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <LandingPage page={page} heroAside={<HeroKeys />} extra={[softwareSchema({ description: page.meta.description })]}>
      <FeaturesCatalog />
    </LandingPage>
  );
}
