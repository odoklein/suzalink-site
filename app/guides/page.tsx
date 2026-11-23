import { permanentRedirect } from "next/navigation";

// The guides were removed on 2026-11-23: the old address points to the closest page.
// TODO équipe tech : à remplacer par des redirections 301 dans next.config.ts si vous le validez.
export default function Page() {
  permanentRedirect("/pourquoi-suzalink");
}
