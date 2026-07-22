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
    <section id={id} className={`py-16 sm:py-20 ${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`mb-10 max-w-3xl sm:mb-12 ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p
          className={`eyebrow mb-3 ${
            light ? "text-brand-green-light" : "text-brand-green"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`heading-section text-3xl sm:text-4xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-pretty text-base leading-relaxed sm:text-lg sm:leading-relaxed ${
            light ? "text-blue-50/90" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/** Small label above a content block (e.g. “The problem”) */
export function ContentLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`eyebrow mb-2 text-brand-green ${className}`}
    >
      {children}
    </p>
  );
}
