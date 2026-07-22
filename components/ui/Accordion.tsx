"use client";

import { useState } from "react";

export function Accordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200/80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className={isOpen ? "bg-slate-50/60" : ""}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="heading-card text-[0.975rem] text-slate-900 sm:text-base">
                {item.question}
              </span>
              <span
                className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-medium transition-all ${
                  isOpen
                    ? "rotate-45 bg-brand-blue text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-pretty text-[0.975rem] leading-relaxed text-slate-600 sm:px-6 sm:pb-6 sm:text-base">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
