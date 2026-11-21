import { logicielPage as page } from "@/content/pages/logiciel";
import { LandingPage } from "@/components/landing/Landing";
import { VideoSlot } from "@/components/ui/VideoSlot";
import { pageMetadata } from "@/lib/page-meta";
import { softwareSchema } from "@/lib/schema";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <LandingPage page={page} extra={[softwareSchema({ description: page.meta.description })]}>
      <VideoSlot />
    </LandingPage>
  );
}
