import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PaginationProps = React.ComponentProps<"nav"> & {
  /** 1-based active page. */
  current: number;
  /** Total number of pages. */
  total: number;
  /** Href builder; receives the 1-based page number. */
  hrefFor?: (page: number) => string;
};

const pageButton =
  "text-body inline-flex size-9 items-center justify-center rounded-sm border transition-colors focus-visible:outline-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2";

/** Numbered pagination with ellipsis and prev/next chevrons. */
export function Pagination({
  current,
  total,
  hrefFor = (page) => `?page=${page}`,
  className,
  ...props
}: PaginationProps) {
  const items = buildPages(current, total);
  const prev = current > 1 ? current - 1 : null;
  const next = current < total ? current + 1 : null;

  return (
    <nav aria-label="Pagination" className={cn("flex items-center gap-2", className)} {...props}>
      <a
        href={prev ? hrefFor(prev) : undefined}
        aria-disabled={prev == null ? true : undefined}
        aria-label="Previous page"
        className={cn(
          pageButton,
          "border-transparent text-neutral-700 hover:border-neutral-200",
          prev == null && "text-neutral-300 hover:border-transparent",
        )}
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
      </a>

      {items.map((item, i) =>
        item === "…" ? (
          <span key={`ellipsis-${i}`} className="text-body text-neutral-500 px-1">
            …
          </span>
        ) : item === current ? (
          <span
            key={item}
            aria-current="page"
            className={cn(pageButton, "border-primary-500 text-primary-500 font-medium")}
          >
            {item}
          </span>
        ) : (
          <a
            key={item}
            href={hrefFor(item)}
            aria-label={`Page ${item}`}
            className={cn(pageButton, "border-transparent text-neutral-700 hover:border-neutral-200")}
          >
            {item}
          </a>
        ),
      )}

      <a
        href={next ? hrefFor(next) : undefined}
        aria-disabled={next == null ? true : undefined}
        aria-label="Next page"
        className={cn(
          pageButton,
          "border-transparent text-neutral-700 hover:border-neutral-200",
          next == null && "text-neutral-300 hover:border-transparent",
        )}
      >
        <ChevronRight className="size-4" aria-hidden="true" />
      </a>
    </nav>
  );
}

/** Page numbers with ellipses, e.g. [1, "…", 4, 5, 6, "…", 12]. */
function buildPages(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set<number>([1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);

  const out: (number | "…")[] = [];
  let last = 0;
  for (const p of sorted) {
    if (p - last > 1) out.push("…");
    out.push(p);
    last = p;
  }
  return out;
}
