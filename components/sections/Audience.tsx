import Image from "next/image";
import { audience } from "@/content/home";
import { resolveImage } from "@/lib/resolve-image";
import { Reveal } from "@/components/ui/motion";
import { ArrowLink, Container, SectionHeader, cascade } from "@/components/ui/primitives";

/**
 * « Pour qui » : une image humaine à gauche, les trois profils à droite.
 * Mouvement : l'image se pose depuis un léger zoom pendant que le titre arrive, puis chaque
 * profil entre à son tour, son filet se dessinant de gauche à droite.
 */
export function Audience() {
  const image = resolveImage("audience");
  return (
    <section id="pour-qui" aria-labelledby="audience-title" className="pb-24 sm:pb-32">
      <Container>
        <Reveal stagger className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          {image ? (
            <div className="r-media relative aspect-[16/11] overflow-hidden rounded-[28px] bg-sand lg:aspect-auto lg:min-h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
                style={image.position ? { objectPosition: image.position } : undefined}
              />
            </div>
          ) : null}
          <div>
            <SectionHeader id="audience-title" eyebrow={audience.eyebrow} title={audience.title} subtitle={audience.subtitle} />
            <ul className="relative mt-10">
              {audience.items.map((item, n) => (
                <li key={item.eyebrow} className="group relative py-7" style={cascade(n + 3)}>
                  <span aria-hidden className="r-line absolute inset-x-0 top-0 h-px bg-line" />
                  <div className="r-item">
                    <p className="eyebrow text-muted transition-colors duration-300 group-hover:text-navy">{item.eyebrow}</p>
                    <h3 className="font-display-tight mt-3 text-[clamp(1.5rem,2.4vw,1.9rem)] leading-[1.15] font-normal text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[56ch] text-[16px] leading-relaxed text-muted">{item.body}</p>
                    <ArrowLink href={item.action.href} className="mt-4">
                      {item.action.label}
                    </ArrowLink>
                  </div>
                </li>
              ))}
            </ul>
            <div aria-hidden className="r-line h-px bg-line" style={cascade(audience.items.length + 3)} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
