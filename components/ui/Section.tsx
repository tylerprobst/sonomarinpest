import type { ReactNode } from "react";

export type SectionTone =
  | "white"
  | "muted"
  | "soft-blue"
  | "soft-green"
  | "soft-sky"
  | "brand"
  | "dark";

const tones: Record<SectionTone, string> = {
  white: "bg-white text-slate-900",
  muted: "bg-slate-50 text-slate-900",
  "soft-blue": "bg-blue-50 text-slate-900",
  "soft-green": "bg-emerald-50 text-slate-900",
  "soft-sky": "bg-sky-50 text-slate-900",
  brand: "bg-brand-blue text-white",
  dark: "bg-slate-900 text-white",
};

export function Section({
  children,
  className = "",
  id,
  tone = "white",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: SectionTone;
}) {
  return (
    <section id={id} className={`py-14 sm:py-20 ${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`mb-10 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p
          className={`mb-2 text-sm font-semibold uppercase tracking-wider ${
            light ? "text-brand-green-light" : "text-brand-green"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
