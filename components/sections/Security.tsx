import { security } from "@/content/home";
import { Icon } from "@/components/ui/Icon";
import { Container, SectionHeader } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/motion";

/** Sécurité, sur une bande teal unie : quatre engagements en clair, sans jargon technique. */
export function Security() {
  return (
    <section id="securite" aria-labelledby="security-title" className="on-dark bg-navy py-24 text-white sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeader
              id="security-title"
              eyebrow={security.eyebrow}
              title={security.title}
              subtitle={security.subtitle}
              action={security.action}
              tone="dark"
            />
          </Reveal>
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {security.badges.map((b) => (
              <li key={b.title} className="flex gap-4 border-t border-white/15 py-7">
                <span aria-hidden className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-mint">
                  <Icon name={b.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="text-[18px] font-semibold">{b.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-white/75">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
