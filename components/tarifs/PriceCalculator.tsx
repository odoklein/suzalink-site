"use client";

import { useId, useState } from "react";
import { pricing } from "@/content/home";
import { formatEuro, plans } from "@/content/pricing";

/** "How many of you make calls?": a slider that gives the monthly total of each plan (prices × users). */
export function PriceCalculator() {
  const [users, setUsers] = useState(3);
  const id = useId();
  const c = pricing.calculator;
  return (
    <div className="mx-auto mt-10 max-w-[960px] rounded-[24px] border border-line bg-paper p-6 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <label htmlFor={id} className="font-display-tight text-[22px] leading-tight font-normal text-ink">
          {c.title}
        </label>
        <span className="flex items-center gap-3">
          <input
            id={id}
            type="range"
            min={1}
            max={30}
            value={users}
            onChange={(e) => setUsers(Number(e.target.value))}
            aria-valuetext={`${users} ${users === 1 ? "utilisateur" : "utilisateurs"}`}
            className="h-2 w-48 cursor-pointer accent-navy sm:w-64"
          />
          <output htmlFor={id} className="grid min-w-12 place-items-center rounded-full bg-navy px-3 py-1.5 font-mono text-[15px] text-white tabular-nums">
            {users}
          </output>
        </span>
      </div>
      <dl className="mt-6 grid gap-3 sm:grid-cols-2" aria-live="polite">
        {plans.map((p) => (
          <div key={p.id} className="flex items-baseline justify-between gap-4 rounded-[16px] bg-white px-5 py-4">
            <dt className="font-medium text-ink">{p.name}</dt>
            <dd className="text-right">
              <span className="font-display-tight text-[28px] leading-none font-light text-navy tabular-nums">{formatEuro(p.pricePerUser * users)}</span>
              <span className="ml-2 text-[13px] text-muted">HT {c.total(users)}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
