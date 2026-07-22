import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "outlineLight"
  | "ghost"
  | "green";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue-dark shadow-sm shadow-brand-blue/15",
  secondary: "bg-slate-900 text-white hover:bg-slate-800",
  outline:
    "border-2 border-brand-blue bg-white text-brand-blue hover:bg-blue-50",
  outlineLight:
    "border-2 border-white/90 bg-transparent text-white hover:bg-white/12",
  ghost: "bg-transparent text-brand-blue hover:bg-brand-blue/5",
  green:
    "bg-brand-green text-white hover:bg-brand-green-dark shadow-sm shadow-brand-green/15",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-[0.9375rem]",
  lg: "px-6 py-3 text-base sm:text-lg",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue disabled:opacity-50";

type Common = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = Common &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = Common & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const className = props.className ?? "";
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, children, target, rel, onClick } = props;
    const external =
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("sms:") ||
      href.startsWith("mailto:");
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          target={target}
          rel={rel}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const {
    children,
    variant: _v,
    size: _s,
    className: _c,
    type = "button",
    ...rest
  } = props as ButtonAsButton;

  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}
