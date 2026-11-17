import { proof } from "@/content/home";
import { prospectionPage } from "@/content/pages/prospection-externalisee";
import { CountUp } from "@/components/landing/interactive";
import { Reveal } from "@/components/ui/motion";
import { Container, SectionHeader } from "@/components/ui/primitives";

/** Une vraie mission, en chiffres. Source unique : le bloc « proof » de la page prospection. */
export function Proof() {
  const block = prospectionPage.blocks.find((b) => b.kind === "proof");
  if (!block || block.kind !== "proof") return null;
  return (
    <section id="cas-clients" aria-labelledby="proof-title" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            id="proof-title"
            eyebrow={proof.eyebrow}
            title={proof.title}
            subtitle={proof.subtitle}
            action={proof.action}
            actionVariant="ghost"
          />
        </Reveal>
        <dl className="mt-14 grid gap-y-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          {block.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="mt-3 max-w-[24ch] text-[15px] leading-snug text-muted">{s.label}</dt>
              <dd className="font-display-tight text-[clamp(2.75rem,5vw,4rem)] leading-none font-light text-navy tabular-nums">
                <CountUp value={s.value} />
              </dd>
            </div>
          ))}
        </dl>
        {block.story ? <p className="mt-12 max-w-[68ch] text-[17px] leading-relaxed text-ink/85">{block.story}</p> : null}
        <p className="mt-4 text-[13px] text-muted">{block.note}</p>
      </Container>
    </section>
  );
}
