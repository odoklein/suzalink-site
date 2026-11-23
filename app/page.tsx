import { site } from "@/content/site";
import { homeFaq } from "@/content/home";
import { prospectionOffers } from "@/content/offers";
import { plainText } from "@/components/landing/RichText";
import { JsonLd } from "@/components/ui/JsonLd";
import { VideoSlot } from "@/components/ui/VideoSlot";
import { softwareSchema } from "@/lib/schema";
import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { Audience } from "@/components/sections/Audience";
import { Pains } from "@/components/sections/Pains";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { StackCost } from "@/components/sections/StackCost";
import { Proof } from "@/components/sections/Proof";
import { Testimonial } from "@/components/sections/Testimonial";
import { Security } from "@/components/sections/Security";
import { ServiceBand } from "@/components/sections/ServiceBand";
import { HomeFaq } from "@/components/sections/HomeFaq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

// Organization is published once, site-wide, in app/layout.tsx (@id /#organisation).
const schemas = [
  softwareSchema({ url: site.url, description: site.seo.description }),
  {
    // The second door: B2B appointment setting done by our callers (content/offers.ts).
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Prospection téléphonique B2B externalisée",
    serviceType: "Prise de rendez-vous B2B",
    url: `${site.url}/prospection-externalisee`,
    areaServed: { "@type": "Country", name: "France" },
    provider: { "@id": `${site.url}/#organisation` },
    offers: prospectionOffers.map((o) => ({
      "@type": "Offer",
      name: o.name,
      price: o.price.amount,
      priceCurrency: "EUR",
      url: `${site.url}/tarifs#${o.id}`,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaq.items.map((q) => ({ "@type": "Question", name: q.q, acceptedAnswer: { "@type": "Answer", text: plainText(q.a) } })),
  },
];

/** Accueil : le logiciel d'abord, la prospection externalisée en second (voir content/home.ts). */
export default function HomePage() {
  return (
    <>
      {schemas.map((s, i) => (
        <JsonLd key={i} data={s} />
      ))}
      <AnnouncementBar />
      <SiteHeader />
      <main id="contenu" tabIndex={-1} className="outline-none">
        <Hero />
        <LogoStrip />
        <Pains />
        <Audience />
        <HowItWorks />
        <VideoSlot />
        <Features />
        <StackCost />
        <Proof />
        {/* Hidden until a real, approved quote exists (content/home.ts). */}
        <Testimonial />
        <Security />
        <ServiceBand />
        <HomeFaq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
