import { notFound } from "next/navigation";
import { softwarePages } from "@/content/pages/logiciel";
import { LandingPage } from "@/components/landing/Landing";
import { pageMetadata } from "@/lib/page-meta";

// /logiciel/file-appels, /telephonie, /ia, /portail-client, /marque-blanche (content/pages/logiciel.ts).
const features = softwarePages.filter((p) => p.path !== "/logiciel");
const find = (slug: string) => features.find((p) => p.path === `/logiciel/${slug}`);

export const dynamicParams = false;

export function generateStaticParams() {
  return features.map((p) => ({ fonction: p.path.replace("/logiciel/", "") }));
}

export async function generateMetadata({ params }: { params: Promise<{ fonction: string }> }) {
  const page = find((await params).fonction);
  return page ? pageMetadata(page) : {};
}

export default async function Page({ params }: { params: Promise<{ fonction: string }> }) {
  const page = find((await params).fonction);
  if (!page) notFound();
  return <LandingPage page={page} />;
}
