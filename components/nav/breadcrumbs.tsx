import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = React.ComponentProps<"nav"> & {
  items: BreadcrumbItem[];
};

/** Breadcrumb trail; the last item is the muted current page. */
export function Breadcrumbs({ items, className, ...props }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn(className)} {...props}>
      <ol className="text-body flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {i > 0 ? (
                <ChevronRight className="text-neutral-300 size-4" aria-hidden="true" />
              ) : null}
              {isLast || !item.href ? (
                <span aria-current={isLast ? "page" : undefined} className="text-neutral-500">
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className="text-neutral-700 hover:text-primary-500">
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
