import { aPropos as page } from "@/content/pages/hubs";
import { LandingPage } from "@/components/landing/Landing";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(page);

// The AboutPage entity (about: the organisation) is built by LandingPage for this path.
export default function Page() {
  return <LandingPage page={page} />;
}
