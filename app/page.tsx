import { site } from "@/content/site";
import { plans } from "@/content/pricing";
import { prospectionOffers } from "@/content/offers";
import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Audience } from "@/components/sections/Audience";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { StackCost } from "@/components/sections/StackCost";
import { Proof } from "@/components/sections/Proof";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonial } from "@/components/sections/Testimonial";
import { Guarantees } from "@/components/sections/Guarantees";
import { OffersHome } from "@/components/sections/OffersHome";
import { Security } from "@/components/sections/Security";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

/** schema.org SoftwareApplication, offers built from content/pricing.ts. */
function StructuredData() {
  const prices = plans.flatMap((p) => [p.price.monthly, p.price.annual]);
  const json = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "CRM",
    operatingSystem: "Web",
    inLanguage: "fr-FR",
    url: site.url,
    description: site.seo.description,
    image: `${site.url}/opengraph-image.png`,
    publisher: { "@id": `${site.url}/#organisation` },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      offerCount: plans.length,
      offers: plans.map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.price.monthly,
        priceCurrency: "EUR",
        url: `${site.url}/tarifs#crm`,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: p.price.monthly,
          priceCurrency: "EUR",
          unitText: "MONTH",
          valueAddedTaxIncluded: false,
        },
      })),
    },
  };
  // The other door: B2B appointment setting done by our callers (content/offers.ts).
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Prise de rendez-vous B2B",
    serviceType: "Prospection téléphonique B2B externalisée",
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
  };
  return (
    <>
      {[json, service].map((data) => (
        <script
          key={data["@type"]}
          type="application/ld+json"
          // JSON.stringify output is safe here: all values come from our own config files.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <AnnouncementBar />
      <SiteHeader />
      <main id="contenu" tabIndex={-1} className="outline-none">
        <Hero />
        <Audience />
        <LogoStrip />
        <HowItWorks />
        <Features />
        <StackCost />
        <Proof />
        {/* Shown only once real content exists (see content/home.ts). */}
        <CaseStudies />
        <Testimonial />
        <Guarantees />
        <OffersHome />
        <Security />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
