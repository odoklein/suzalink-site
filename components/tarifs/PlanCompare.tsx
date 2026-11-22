import { planComparison, plans } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";
import { Container, SectionHeader } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/motion";

/** Feature-by-feature table of the three software plans (content/pricing.ts). */
export function PlanCompare() {
  return (
    <section id="comparer" aria-labelledby="comparer-title" className="scroll-mt-24 bg-white pb-24 sm:pb-32">
      <Container>
        <SectionHeader id="comparer-title" eyebrow={planComparison.eyebrow} title={planComparison.title} subtitle={planComparison.subtitle} align="center" />
        <Reveal className="relative mt-12 overflow-x-auto rounded-[20px] border border-line">
          <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
            <caption className="sr-only">{planComparison.title}</caption>
            <thead>
              <tr className="bg-paper">
                <th scope="col" className="p-4 font-medium text-muted">
                  Fonction
                </th>
                {plans.map((p) => (
                  <th key={p.id} scope="col" className="p-4 font-semibold text-ink">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planComparison.rows.map((r) => (
                <tr key={r.label} className="border-t border-line">
                  <th scope="row" className="p-4 align-top font-medium text-ink">
                    {r.label}
                  </th>
                  {r.cells.map((c, n) => (
                    <td key={n} className="p-4 align-top text-ink/80">
                      {c === true ? (
                        <>
                          <Icon name="check" className="size-4 text-navy" />
                          <span className="sr-only">Inclus</span>
                        </>
                      ) : c === false ? (
                        <>
                          <span aria-hidden className="text-muted">
                            —
                          </span>
                          <span className="sr-only">Non inclus</span>
                        </>
                      ) : (
                        c
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="mt-4 text-center text-[13px] text-muted">{planComparison.note}</p>
      </Container>
    </section>
  );
}
