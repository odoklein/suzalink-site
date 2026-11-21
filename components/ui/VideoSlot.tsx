import { demoVideo } from "@/content/pages/logiciel";
import { Container, cx } from "@/components/ui/primitives";

/**
 * 90-second demo video, self-hosted (no third-party player). Renders nothing until
 * `demoVideo.src` is filled in (content/pages/logiciel.ts).
 */
export function VideoSlot({ className }: { className?: string }) {
  if (!demoVideo.src) return null;
  return (
    <section aria-label={demoVideo.title} className={cx("pb-20 sm:pb-28", className)}>
      <Container>
        <video
          controls
          preload="none"
          poster={demoVideo.poster ?? undefined}
          className="aspect-video w-full rounded-[28px] border border-line bg-navy"
          title={demoVideo.title}
        >
          <source src={demoVideo.src} type="video/mp4" />
          {demoVideo.captions ? <track kind="captions" srcLang="fr" label="Français" src={demoVideo.captions} default /> : null}
        </video>
      </Container>
    </section>
  );
}
