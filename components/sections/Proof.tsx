import { proof } from "@/content/home";
import { prospectionPage } from "@/content/pages/prospection-externalisee";
import { CountUp } from "@/components/landing/interactive";
import { Reveal } from "@/components/ui/motion";
import { Container, SectionHeader, cascade } from "@/components/ui/primitives";

/**
 * Une vraie mission, en chiffres. Source unique : le bloc « proof » de la page prospection.
 * Mouvement : un filet traverse la page, puis les quatre chiffres montent l'un après l'autre en
 * comptant, et le récit de la mission arrive en dernier.
 */
export function Proof() {
  const block = prospectionPage.blocks.find((b) => b.kind === "proof");
  if (!block || block.kind !== "proof") return null;
  return (
    <section id="cas-clients" aria-labelledby="proof-title" className="py-24 sm:py-32">
      <Container>
        <Reveal stagger>
          <SectionHeader
            id="proof-title"
            eyebrow={proof.eyebrow}
            title={proof.title}
            subtitle={proof.subtitle}
            action={proof.action}
            actionVariant="ghost"
          />
          <div aria-hidden className="r-line mt-14 h-px bg-line" style={cascade(3)} />
          <dl className="grid gap-y-10 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
            {block.stats.map((s, n) => (
              <div key={s.label} className="r-item flex flex-col-reverse" style={cascade(n + 4)}>
                <dt className="mt-3 max-w-[24ch] text-[15px] leading-snug text-muted">{s.label}</dt>
                <dd className="font-display-tight text-[clamp(2.75rem,5vw,4rem)] leading-none font-light text-navy tabular-nums">
                  <CountUp value={s.value} />
                </dd>
              </div>
            ))}
          </dl>
          {block.story ? (
            <p className="r-item mt-12 max-w-[68ch] text-[17px] leading-relaxed text-ink/85" style={cascade(block.stats.length + 5)}>
              {block.story}
            </p>
          ) : null}
          <p className="r-item mt-4 text-[13px] text-muted" style={cascade(block.stats.length + 6)}>
            {block.note}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
