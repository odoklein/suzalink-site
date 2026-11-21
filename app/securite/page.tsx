import { securitePage as page } from "@/content/pages/ressources";
import { LandingPage } from "@/components/landing/Landing";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(page);

export default function Page() {
  return <LandingPage page={page} />;
}
