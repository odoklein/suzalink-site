// Small, faithful pieces of the Suzalink interface for /fonctionnalites, one per chapter.
// They are illustrations: each root is role="img" with a description (content/pages/fonctionnalites.ts),
// the fake data inside is hidden from assistive tech. Motion is CSS only (app/globals.css, « Features
// page demos ») and freezes in its final state when the visitor asks for reduced motion.
import type { CSSProperties, ReactNode } from "react";
import { CallTimer } from "@/components/mockups/CallTimer";
import { Avatar, MockWindow, Waveform } from "@/components/mockups/parts";
import { Icon } from "@/components/ui/Icon";
import { cx } from "@/components/ui/primitives";
import { BrandPortal } from "./BrandPortal";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

function Demo({ label, children, className }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div role="img" aria-label={label} className={cx("demo relative select-none", className)}>
      <div aria-hidden>{children}</div>
    </div>
  );
}

/** 1. Appeler: the call in progress, the result keys, the next contact. */
export function CallDesk({ label }: { label: string }) {
  const keys = ["RDV pris", "Rappel", "Pas intéressé", "Barrage"];
  return (
    <Demo label={label}>
      <MockWindow title="Suzalink · File d'appels" right={<span className="rounded-full bg-ok/10 px-2 py-0.5 text-[11px] font-medium text-ok-ink">Ligne Allo connectée</span>}>
        <div className="flex flex-col gap-4 p-5">
          <div className="flex items-center gap-3 rounded-[14px] bg-mint/40 p-3.5">
            <Avatar initials="CM" tone="light" size="lg" />
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-semibold text-ink">Claire Martin</p>
              <p className="text-[12px] text-muted">Directrice commerciale, Société Nordfil</p>
            </div>
            <span className="flex items-center gap-2 rounded-full bg-navy px-3 py-1.5 font-mono text-[12px] text-white">
              <span className="demo-live size-2 rounded-full bg-rose" />
              <CallTimer />
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {keys.map((k, n) => (
              <span key={k} className="demo-key relative isolate flex items-center justify-between gap-2 overflow-hidden rounded-[12px] border border-line bg-white px-3.5 py-3 text-[13.5px] font-medium text-ink" style={i(n)}>
                <span className="demo-key-light absolute inset-0 -z-10 bg-mint" />
                {k}
                <kbd className="grid size-7 place-items-center rounded-[8px] border border-line bg-paper font-mono text-[12px] shadow-[0_2px_0_var(--color-line)]">{n + 1}</kbd>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 rounded-[12px] border border-dashed border-line px-3.5 py-2.5 text-[13px]">
            <span className="text-muted">Suivant</span>
            <Avatar initials="PP" tone="sand" size="sm" />
            <span className="font-medium text-ink">Pierre Petit</span>
            <span className="text-muted">Bâtir et Co</span>
            <Icon name="arrowRight" className="ml-auto size-4 text-navy" />
          </div>
        </div>
      </MockWindow>
    </Demo>
  );
}

/** 2. Enregistrer: this morning's calls and the player of one recording. */
export function Recordings({ label }: { label: string }) {
  const calls = [
    { t: "10:24", n: "Claire Martin", r: "RDV pris", d: "4:21", tone: "bg-navy" },
    { t: "10:17", n: "Pierre Petit", r: "Rappel", d: "2:14", tone: "bg-mint" },
    { t: "09:56", n: "Alice Bernard", r: "RDV pris", d: "6:08", tone: "bg-navy" },
  ];
  return (
    <Demo label={label}>
      <div className="grid gap-4 lg:grid-cols-[1.15fr_1fr]">
        <div className="overflow-hidden rounded-[18px] border border-line bg-white">
          <p className="border-b border-line bg-surface px-4 py-2.5 text-[11px] font-medium text-muted">Ce matin</p>
          <ul>
            {calls.map((c, n) => (
              <li key={c.t} className={cx("demo-row flex items-center gap-3 border-b border-line px-4 py-3 text-[13px] last:border-b-0", n === 0 && "bg-mint/25")} style={i(n)}>
                <span className="font-mono text-ink/60">{c.t}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium text-ink">{c.n}</span>
                  <span className="flex items-center gap-1.5 text-[12px] text-muted">
                    <span className={cx("size-2 rounded-full", c.tone)} />
                    {c.r}
                  </span>
                </span>
                <span className="font-mono text-ink/60">{c.d}</span>
                <span className={cx("grid size-8 place-items-center rounded-full", n === 0 ? "bg-navy text-white" : "border border-line text-navy")}>
                  <Icon name="play" className="ml-0.5 size-3.5" />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-4 rounded-[18px] bg-navy p-5 text-white">
          <div>
            <p className="text-[12px] text-white/70">Appel enregistré</p>
            <p className="mt-1 text-[16px] font-semibold">Claire Martin, 10:24</p>
          </div>
          <div className="relative">
            <Waveform bars={36} played={0.42} dark />
            <span className="demo-playhead absolute top-0 bottom-0 w-px bg-rose" style={{ left: "42%" }} />
          </div>
          <div className="flex items-center justify-between font-mono text-[12px] text-white/70">
            <span>1:49</span>
            <span className="flex gap-2 font-sans">
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-white">Partager au client</span>
            </span>
            <span>4:21</span>
          </div>
        </div>
      </div>
    </Demo>
  );
}

/** 3. Préparer: the AI writes the sheet, line by line, then waits for the caller's review. */
export function AiSheet({ label }: { label: string }) {
  const rows = [
    ["Besoin", "Remplacer le prestataire actuel avant le printemps."],
    ["Budget", "Prévu, à valider en comité."],
    ["Décideur", "Claire Martin, avec le directeur général."],
    ["Objections", "Contrat en cours : réponse apportée."],
  ];
  return (
    <Demo label={label}>
      <div className="mx-auto max-w-[460px] rounded-[22px] border border-line bg-white p-6 shadow-[0_30px_60px_-34px_rgba(12,31,35,.4)]">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-[13px] font-medium text-navy">
            <Icon name="sparkle" className="size-4" />
            Fiche de RDV
          </span>
          <span className="rounded-full bg-rose/25 px-2.5 py-1 text-[11px] font-semibold text-amber-ink">Rédigée par l&apos;IA</span>
        </div>
        <p className="font-display-tight mt-3 text-[22px] leading-tight font-normal text-ink">Jeudi 10:00, Société Nordfil</p>
        <dl className="mt-4 flex flex-col gap-2.5">
          {rows.map(([k, v], n) => (
            <div key={k} className="rounded-[12px] bg-paper px-3.5 py-2.5">
              <dt className="font-mono text-[10.5px] tracking-[0.08em] text-muted uppercase">{k}</dt>
              <dd className="demo-type mt-1 text-[13.5px] text-ink" style={i(n)}>
                {v}
              </dd>
            </div>
          ))}
        </dl>
        <div className="demo-actions mt-5 flex items-center gap-2" style={i(4)}>
          <span className="rounded-full bg-navy px-4 py-2 text-[13px] font-medium text-white">Confirmer</span>
          <span className="rounded-full border border-line px-4 py-2 text-[13px] font-medium text-ink">Modifier</span>
          <span className="ml-auto text-[12px] text-muted">Relue par Thomas</span>
        </div>
      </div>
    </Demo>
  );
}

/** 4. Piloter: the manager's live view of the team, with one pace alert. */
export function Dashboard({ label }: { label: string }) {
  const team = [
    { n: "Thomas", i: "TL", calls: 86, rdv: 4 },
    { n: "Inès", i: "IB", calls: 79, rdv: 3 },
    { n: "Karim", i: "KD", calls: 71, rdv: 3 },
    { n: "Léa", i: "LM", calls: 38, rdv: 1, late: true },
  ];
  const max = 90;
  return (
    <Demo label={label}>
      <MockWindow title="Suzalink · Tableau de bord, aujourd'hui" right={<span className="font-mono text-[11px] text-muted">14:05</span>}>
        <div className="p-5">
          <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 border-b border-line pb-2 text-[11px] font-medium text-muted">
            <span>Téléprospecteur</span>
            <span className="w-14 text-right">Appels</span>
            <span className="w-10 text-right">RDV</span>
          </div>
          <ul className="mt-1">
            {team.map((p, n) => (
              <li key={p.n} className={cx("grid grid-cols-[1fr_auto_auto] items-center gap-x-4 rounded-[10px] px-1 py-2.5", p.late && "bg-rose/15")}>
                <span className="flex min-w-0 items-center gap-2.5">
                  <Avatar initials={p.i} tone={p.late ? "rose" : "navy"} size="sm" />
                  <span className="w-12 shrink-0 text-[13px] font-medium text-ink">{p.n}</span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-line">
                    <span className={cx("demo-bar block h-full rounded-full", p.late ? "bg-warn" : "bg-navy")} style={{ ...i(n), width: `${(p.calls / max) * 100}%` }} />
                  </span>
                </span>
                <span className="w-14 text-right font-mono text-[13px] text-ink tabular-nums">{p.calls}</span>
                <span className="w-10 text-right font-mono text-[13px] text-ink tabular-nums">{p.rdv}</span>
              </li>
            ))}
          </ul>
          <p className="demo-alert mt-3 flex items-center gap-2.5 rounded-[12px] border border-warn/25 bg-warn/10 px-3.5 py-2.5 text-[13px] text-warn-ink" style={i(5)}>
            <Icon name="alert" className="size-4 shrink-0" />
            Léa prend du retard sur sa mission du jour.
          </p>
        </div>
      </MockWindow>
    </Demo>
  );
}

/** 5. Montrer: the client portal in white label; the visitor picks the agency colour. */
export function Portal({ label }: { label: string }) {
  return <BrandPortal label={label} />;
}

/** 6. Protéger: one instance, one database, one store of recordings per client, with nothing between them. */
export function Instances({ label }: { label: string }) {
  const clients = ["Client A", "Client B", "Votre entreprise"];
  const layers: Array<{ name: string; icon: "server" | "database" | "lock" }> = [
    { name: "Instance", icon: "server" },
    { name: "Base de données", icon: "database" },
    { name: "Appels enregistrés", icon: "lock" },
  ];
  return (
    <Demo label={label}>
      <div className="grid gap-3 sm:grid-cols-3">
        {clients.map((c, n) => {
          const you = n === 2;
          return (
            <div
              key={c}
              className={cx("demo-stack flex flex-col gap-2 rounded-[20px] p-3", you ? "on-dark bg-navy text-white" : "border border-dashed border-ink/20 bg-white")}
              style={i(n)}
            >
              <p className={cx("px-2 pt-1 pb-1 text-[13px] font-semibold", you ? "text-white" : "text-ink")}>{c}</p>
              {layers.map((l) => (
                <span key={l.name} className={cx("flex items-center gap-2.5 rounded-[12px] px-3 py-2.5 text-[13px]", you ? "bg-white/10 text-white" : "bg-paper text-ink")}>
                  <Icon name={l.icon} className={cx("size-4", you ? "text-mint" : "text-navy")} />
                  {l.name}
                </span>
              ))}
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-center font-mono text-[11px] tracking-[0.08em] text-muted uppercase">Aucun lien entre les espaces</p>
    </Demo>
  );
}

export const demos = {
  appeler: CallDesk,
  enregistrer: Recordings,
  preparer: AiSheet,
  piloter: Dashboard,
  montrer: Portal,
  proteger: Instances,
} as const;
