import { permanentRedirect } from "next/navigation";

// The guides were removed on 2026-11-23: each old guide URL points to the closest page.
// TODO équipe tech : à remplacer par des redirections 301 dans next.config.ts si vous le validez.
const targets: Record<string, string> = {
  "externaliser-prospection-commerciale": "/prospection-externalisee",
  "prix-rdv-qualifie": "/tarifs",
  "barrage-secretaire": "/logiciel/file-appels",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(targets).map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  permanentRedirect(targets[slug] ?? "/pourquoi-suzalink");
}
