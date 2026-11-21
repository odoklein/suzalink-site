"use server";

import { demo } from "@/content/demo";
import { validateDemo, type DemoErrors } from "@/lib/demo-schema";

export type DemoState = {
  status: "idle" | "success" | "error";
  errors: DemoErrors;
  values: Record<string, string>;
};

/**
 * Receives the demo request. Validation runs again here: the browser check is only a convenience.
 * The JSON sent to DEMO_WEBHOOK_URL contains: need (logiciel | prospection | partenaire),
 * plan (specific offer id, optional), name, email, company, teamSize, source, receivedAt.
 */
export async function submitDemo(_prev: DemoState, formData: FormData): Promise<DemoState> {
  const values = {
    need: String(formData.get("need") ?? ""),
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    teamSize: String(formData.get("teamSize") ?? ""),
    plan: String(formData.get("plan") ?? ""),
  };

  // Honeypot: real people never fill this hidden field.
  if (String(formData.get("website") ?? "") !== "") {
    return { status: "success", errors: {}, values: {} };
  }

  const { data, errors } = validateDemo({ ...values, plan: values.plan || undefined });
  if (!data) return { status: "error", errors, values };

  // The specific offer only travels with a matching need (the person may have changed their mind).
  const need = demo.form.needs.find((n) => n.value === data.need);
  const plan = data.plan && (need?.from as readonly string[] | undefined)?.includes(data.plan) ? data.plan : undefined;
  const payload = { ...data, plan };

  const webhook = process.env.DEMO_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...payload, source: "site", receivedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Webhook answered ${res.status}`);
    } catch (err) {
      console.error("[demo] delivery failed", err);
      return { status: "error", errors: {}, values };
    }
  } else {
    console.info("[demo] new request (no DEMO_WEBHOOK_URL set)", { need: data.need, plan, company: data.company, teamSize: data.teamSize });
  }

  return { status: "success", errors: {}, values: {} };
}
