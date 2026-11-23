import { pricing } from "@/content/home";
import { formatEuro, plans } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink, Container, SectionHeader, cascade, cx } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/motion";
import { PriceCalculator } from "@/components/tarifs/PriceCalculator";

/**
 * Software pricing: two plans, one price per user and per month, shown monthly.
 * What a plan does not include is listed too, so nobody discovers it after signing.
 * Prices come from content/pricing.ts.
 */
export function Pricing() {
  return (
    <section id="tarifs" aria-labelledby="pricing-title" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeader id="pricing-title" eyebrow={pricing.eyebrow} title={pricing.title} subtitle={pricing.subtitle} align="center" />

        <Reveal stagger>
          <ul className="mx-auto mt-12 grid max-w-[960px] gap-5 md:grid-cols-2">
            {plans.map((plan, n) => {
              const featured = Boolean(plan.highlight);
              return (
                <li
                  key={plan.id}
                  id={plan.id}
                  className={cx(
                    "r-item relative flex scroll-mt-28 flex-col rounded-[28px] border p-7 sm:p-9",
                    featured ? "on-dark border-navy bg-navy text-white shadow-[0_40px_80px_-40px_rgba(7,21,24,.55)]" : "border-line bg-paper",
                  )}
                  style={cascade(n + 1)}
                >
                  {featured ? (
                    <p className="absolute -top-3 left-9 rounded-full border border-rose bg-white px-3 py-1 text-[12px] font-medium text-navy">{plan.highlight}</p>
                  ) : null}
                  <h3 className="font-display-tight text-[28px] font-normal">{plan.name}</h3>
                  <p className={cx("mt-2 min-h-[3em] text-[15px] leading-relaxed", featured ? "text-white/75" : "text-muted")}>{plan.audience}</p>

                  <p className="mt-7 flex flex-wrap items-baseline gap-x-2">
                    <span className="font-display-tight text-[clamp(3.5rem,7vw,4.75rem)] leading-none font-light tabular-nums">{formatEuro(plan.pricePerUser)}</span>
                    <span className={featured ? "text-white/80" : "text-muted"}>{pricing.perUser}</span>
                  </p>
                  <p className={cx("mt-2 text-[14px]", featured ? "text-mint" : "text-navy")}>{pricing.monthlyNote}</p>

                  <ButtonLink href={`/demo?offre=${plan.id}`} variant={featured ? "light" : "primary"} arrow className="mt-7 w-full justify-between">
                    {plan.cta}
                  </ButtonLink>

                  <div className={cx("mt-8 border-t pt-6", featured ? "border-white/15" : "border-line")}>
                    {plan.includes ? <p className="mb-3 text-[15px] font-semibold">{plan.includes}</p> : null}
                    <ul className="flex flex-col gap-3 text-[15px]">
                      {plan.features.map((f) => (
                        <li key={f} className="flex gap-3">
                          <span aria-hidden className={cx("mt-0.5 grid size-5 shrink-0 place-items-center rounded-full", featured ? "bg-mint text-navy" : "bg-navy text-white")}>
                            <Icon name="check" className="size-3" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    {plan.notIncluded ? (
                      <>
                        <p className={cx("mt-6 mb-3 text-[13px] font-medium", featured ? "text-white/70" : "text-muted")}>{pricing.notIncludedLabel}</p>
                        <ul className={cx("flex flex-col gap-2.5 text-[14px]", featured ? "text-white/70" : "text-muted")}>
                          {plan.notIncluded.map((f) => (
                            <li key={f} className="flex gap-3">
                              <span aria-hidden className="grid size-5 shrink-0 place-items-center rounded-full border border-current text-[12px] leading-none">
                                –
                              </span>
                              <span>
                                <span className="sr-only">Non inclus : </span>
                                {f}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <PriceCalculator />

        <p className="mx-auto mt-8 max-w-[70ch] text-center text-[14px] text-muted">{pricing.footnote}</p>
      </Container>
    </section>
  );
}
