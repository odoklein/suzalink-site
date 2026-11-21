import { equipesPage as page } from "@/content/pages/solutions";
import { LandingPage } from "@/components/landing/Landing";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(page);

export default function Page() {
  return <LandingPage page={page} />;
}
