import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { site } from "@/content/site";
import { company } from "@/content/pages/legal";
import { MotionProvider } from "@/components/ui/motion";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { JsonLd } from "@/components/ui/JsonLd";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-bricolage",
  display: "swap",
});

const sans = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.seo.title, template: site.seo.titleTemplate },
  description: site.seo.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: {
    index: true,
    follow: true,
    // Let search and AI answers show full snippets and large image previews.
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#F7F5F0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={site.lang} className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a
          href="#contenu"
          className="sr-only-focusable z-[100] rounded-full bg-navy px-5 py-3 text-sm font-medium text-white"
        >
          Aller au contenu
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${site.url}/#organisation`,
            name: site.name,
            url: site.url,
            logo: `${site.url}/brand/logo.png`,
            description: site.seo.description,
            parentOrganization: { "@type": "Organization", name: site.footer.parent.name, url: site.footer.parent.url },
            areaServed: { "@type": "Country", name: "France" },
            knowsLanguage: "fr",
            knowsAbout: ["Prospection téléphonique B2B", "Prise de rendez-vous B2B", "Logiciel de téléprospection", "Externalisation de la prospection commerciale"],
            address: { "@type": "PostalAddress", streetAddress: "10 rue de la Paix", postalCode: "75002", addressLocality: "Paris", addressCountry: "FR" },
            contactPoint: { "@type": "ContactPoint", contactType: "sales", email: company.email, areaServed: "FR", availableLanguage: "French", url: `${site.url}/contact` },
            // TODO : ajouter sameAs (LinkedIn, YouTube…) dès que les comptes ont une URL réelle (content/site.ts).
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${site.url}/#site`,
            name: site.name,
            url: site.url,
            inLanguage: "fr-FR",
            description: site.seo.description,
            publisher: { "@id": `${site.url}/#organisation` },
          }}
        />
        <SmoothScroll />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
