export function Stars({
  rating = 5,
  size = "md",
  className = "",
}: {
  rating?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = { sm: "text-sm", md: "text-base", lg: "text-xl" };
  const full = Math.round(rating);
  return (
    <span
      className={`inline-flex gap-0.5 text-brand-gold ${sizes[size]} ${className}`}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden>
          {i < full ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
}
