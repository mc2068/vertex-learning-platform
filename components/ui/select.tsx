import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type SelectProps = React.ComponentProps<"select"> & {
  /** Accessible name; visually hidden label is rendered from it. */
  label?: string;
};

/** Native select styled with a chevron — no JS dropdown. */
export function Select({ label = "Sort", className, id, children, ...props }: SelectProps) {
  const selectId = id ?? "select";
  return (
    <div className={cn("relative", className)}>
      <label htmlFor={selectId} className="sr-only">
        {label}
      </label>
      <select
        id={selectId}
        className="text-body text-neutral-900 h-11 w-full cursor-pointer appearance-none rounded-md border border-neutral-200 bg-white pr-10 pl-4 focus:border-primary-400 focus:outline-none"
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        className="text-neutral-500 pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2"
        aria-hidden="true"
      />
    </div>
  );
}
