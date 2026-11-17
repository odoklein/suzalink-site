import { security } from "@/content/home";
import { Icon } from "@/components/ui/Icon";
import { Container, SectionHeader, cascade } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/motion";

/**
 * Sécurité, sur une bande teal unie : quatre engagements en clair, sans jargon technique.
 * Mouvement : lent et posé, comme un coffre qu'on referme : les filets se dessinent, puis
 * chaque engagement arrive à son tour.
 */
export function Security() {
  return (
    <section id="securite" aria-labelledby="security-title" className="on-dark bg-navy py-24 text-white sm:py-32">
      <Container>
        <Reveal stagger className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-20">
          <SectionHeader
            id="security-title"
            eyebrow={security.eyebrow}
            title={security.title}
            subtitle={security.subtitle}
            action={security.action}
            tone="dark"
          />
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {security.badges.map((b, n) => (
              <li key={b.title} className="relative py-7" style={cascade(n + 2)}>
                <span aria-hidden className="r-line absolute inset-x-0 top-0 h-px bg-white/15" />
                <div className="r-item flex gap-4">
                  <span aria-hidden className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-mint">
                    <Icon name={b.icon} className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-[18px] font-semibold">{b.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-white/75">{b.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
