import { Stars } from "@/components/reviews/Stars";

export function ReviewCard({
  author,
  text,
  rating = 5,
  relativeTime,
  source,
}: {
  author: string;
  text: string;
  rating?: number;
  relativeTime?: string;
  source?: string;
}) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <Stars rating={rating} size="sm" />
        {source && (
          <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
            {source}
          </span>
        )}
      </div>
      <blockquote className="mt-4 flex-1 text-slate-700 leading-relaxed">
        “{text}”
      </blockquote>
      <figcaption className="mt-5 border-t border-slate-100 pt-4">
        <p className="font-semibold text-slate-900">{author}</p>
        {relativeTime && (
          <p className="text-sm text-slate-500">{relativeTime}</p>
        )}
      </figcaption>
    </figure>
  );
}
