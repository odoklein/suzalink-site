import { crmAgencePage as page } from "@/content/pages/crm-agence-prospection";
import { LandingPage } from "@/components/landing/Landing";
import { pageMetadata } from "@/lib/page-meta";
import { softwareSchema } from "@/lib/schema";

export const metadata = pageMetadata(page);

export default function Page() {
  return <LandingPage page={page} extra={[softwareSchema({ description: page.meta.description })]} />;
}
