import { permanentRedirect } from "next/navigation";

// Ancienne adresse de la page agences : redirection permanente (308) vers la nouvelle.
// TODO équipe tech : à remplacer par une redirection 301 dans next.config.ts si vous le validez.
export default function Page() {
  permanentRedirect("/solutions/agences-prospection");
}
