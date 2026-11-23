import { Fragment } from "react";
import { formatEuro, planComparison, plans } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink, Container, SectionHeader } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/motion";

/** Feature-by-feature table of the two software plans, grouped by job (content/pricing.ts). */
export function PlanCompare() {
  return (
    <section id="comparer" aria-labelledby="comparer-title" className="scroll-mt-24 bg-white pb-24 sm:pb-32">
      <Container>
        <SectionHeader id="comparer-title" eyebrow={planComparison.eyebrow} title={planComparison.title} subtitle={planComparison.subtitle} align="center" />
        <Reveal className="relative mx-auto mt-12 max-w-[960px] overflow-x-auto rounded-[24px] border border-line">
          <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
            <caption className="sr-only">{planComparison.title}</caption>
            <thead>
              <tr className="bg-paper">
                <th scope="col" className="p-5 align-bottom font-medium text-muted">
                  Fonction
                </th>
                {plans.map((p) => (
                  <th key={p.id} scope="col" className="w-[24%] p-5 align-bottom">
                    <span className="block text-[17px] font-semibold text-ink">{p.name}</span>
                    <span className="mt-1 block text-[14px] font-normal text-muted">
                      {formatEuro(p.pricePerUser)} HT / utilisateur / mois
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planComparison.groups.map((g) => (
                <Fragment key={g.title}>
                  <tr className="border-t border-line bg-white">
                    <th scope="colgroup" colSpan={plans.length + 1} className="px-5 pt-6 pb-2 text-left">
                      <span className="eyebrow text-navy">{g.title}</span>
                    </th>
                  </tr>
                  {g.rows.map((r) => (
                    <tr key={r.label} className="border-t border-line/70 transition-colors hover:bg-paper/70">
                      <th scope="row" className="px-5 py-3.5 align-top font-normal text-ink">
                        {r.label}
                      </th>
                      {r.cells.map((c, n) => (
                        <td key={n} className="px-5 py-3.5 align-top text-ink">
                          {c === true ? (
                            <>
                              <span aria-hidden className="grid size-6 place-items-center rounded-full bg-navy text-white">
                                <Icon name="check" className="size-3.5" />
                              </span>
                              <span className="sr-only">Inclus</span>
                            </>
                          ) : c === false ? (
                            <>
                              <span aria-hidden className="text-muted">
                                –
                              </span>
                              <span className="sr-only">Non inclus</span>
                            </>
                          ) : (
                            <span className="font-medium">{c}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
              <tr className="border-t border-line bg-paper">
                <td className="p-5 text-[14px] text-muted">{planComparison.note}</td>
                {plans.map((p) => (
                  <td key={p.id} className="p-5">
                    <ButtonLink href={`/demo?offre=${p.id}`} size="sm" variant={p.highlight ? "primary" : "ghost"}>
                      {p.cta}
                    </ButtonLink>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  );
}
