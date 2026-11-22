import Image from "next/image";
import Link from "next/link";
import { isTestimonialReady, publishedCases, type Testimonial } from "@/content/cases";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/motion";

/** Named testimonial: renders only when every field is filled and approved (content/cases.ts). */
export function NamedTestimonial({ testimonial }: { testimonial?: Testimonial }) {
  if (!isTestimonialReady(testimonial)) return null;
  const t = testimonial;
  return (
    <figure className="flex flex-col gap-5 rounded-[20px] border border-line bg-paper p-6">
      <blockquote className="font-display-tight text-[22px] leading-snug font-light text-ink">
        <p>« {t.quote} »</p>
      </blockquote>
      <figcaption className="flex items-center gap-4">
        <Image src={t.photo} alt={`${t.name}, ${t.role} chez ${t.company}`} width={56} height={56} className="size-14 rounded-full object-cover" />
        <span>
          <span className="block font-semibold text-ink">{t.name}</span>
          <span className="block text-[14px] text-muted">
            {t.role}, {t.company}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

const fields = [
  ["context", "Contexte"],
  ["target", "Cible"],
  ["method", "Méthode"],
  ["whatWorked", "Ce qui a marché"],
] as const;

/** /cas-clients: one article per published case (context, target, method, dated figures, what worked). */
export function CaseStudyList() {
  return (
    <section aria-label="Cas clients publiés" className="pb-20 sm:pb-28">
      <Container className="flex flex-col gap-8">
        {publishedCases.map((c) => (
          <Reveal key={c.slug}>
          <article
            aria-labelledby={`cas-${c.slug}`}
            className="grid gap-10 rounded-[28px] border border-line bg-white p-7 sm:p-10 lg:grid-cols-2 lg:gap-16"
          >
            <div className="flex flex-col gap-5">
              <p className="eyebrow text-muted">
                {c.sector} · {c.period}
              </p>
              <h2 id={`cas-${c.slug}`} className="font-display-tight text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-light text-ink">
                {c.title}
              </h2>
              <dl className="flex flex-col gap-4 text-[16px] leading-relaxed">
                {fields.map(([key, label]) => (
                  <div key={key}>
                    <dt className="font-semibold text-ink">{label}</dt>
                    <dd className="text-ink/80">{c[key]}</dd>
                  </div>
                ))}
              </dl>
              <Link href={c.href} className="mt-2 inline-flex w-fit items-center gap-1.5 font-medium text-navy underline-offset-4 hover:underline">
                Lire la mission complète
                <Icon name="arrowRight" className="size-4" />
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-line bg-line">
                {c.stats.map((s) => (
                  <div key={s.label} className="flex flex-col-reverse bg-paper p-5">
                    <dt className="mt-2 text-[14px] leading-snug text-muted">{s.label}</dt>
                    <dd className="font-display-tight text-[clamp(2rem,4vw,2.75rem)] leading-none font-light text-navy tabular-nums">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-[13px] text-muted">
                {c.period} · {c.note}
              </p>
              <NamedTestimonial testimonial={c.testimonial} />
            </div>
          </article>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
