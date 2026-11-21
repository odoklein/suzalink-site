import { z } from "zod";
import { demo } from "@/content/demo";
import { interests } from "@/content/offers";

const e = demo.form.errors;
const needs = demo.form.needs.map((n) => n.value) as [string, ...string[]];
const teamSizes = demo.form.teamSizes.map((t) => t.value) as [string, ...string[]];
const planIds = interests.map((i) => i.id) as [string, ...string[]];

/** Shared by the browser (instant feedback) and the server action (source of truth). */
export const demoSchema = z.object({
  need: z.enum(needs, e.needRequired),
  name: z.string().trim().min(1, e.nameRequired).max(120, e.nameTooLong),
  email: z.string().trim().min(1, e.emailRequired).pipe(z.email(e.emailInvalid)),
  company: z.string().trim().min(1, e.companyRequired).max(160, e.companyTooLong),
  teamSize: z.enum(teamSizes, e.teamSizeRequired),
  plan: z.enum(planIds).optional().catch(undefined),
});

export type DemoRequest = z.infer<typeof demoSchema>;
export type DemoField = "need" | "name" | "email" | "company" | "teamSize";
export const demoFields: DemoField[] = ["need", "name", "email", "company", "teamSize"];
export type DemoErrors = Partial<Record<DemoField, string>>;

export function validateDemo(input: Record<string, unknown>): { data?: DemoRequest; errors: DemoErrors } {
  const result = demoSchema.safeParse(input);
  if (result.success) return { data: result.data, errors: {} };
  const errors: DemoErrors = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as DemoField;
    if (demoFields.includes(field) && !errors[field]) errors[field] = issue.message;
  }
  return { errors };
}

/** Traduit la valeur de ?offre=… en choix du formulaire (et en offre précise à transmettre). */
export function resolveOffre(offre?: string): { need?: string; plan?: string } {
  if (!offre) return {};
  const need = demo.form.needs.find((n) => (n.from as readonly string[]).includes(offre));
  const isGeneric = ["logiciel", "prospection", "partenaire"].includes(offre);
  return { need: need?.value, plan: need && !isGeneric ? offre : undefined };
}
