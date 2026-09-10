import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type SearchInputProps = Omit<React.ComponentProps<"input">, "type"> & {
  /** Accessible name; visually hidden label is rendered from it. */
  label?: string;
};

/** Search field with leading icon and ⌘K hint chip. */
export function SearchInput({ label = "Search", className, id, ...props }: SearchInputProps) {
  const inputId = id ?? "search-input";
  return (
    <div className={cn("relative w-full", className)}>
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <Search
        className="text-neutral-500 pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2"
        aria-hidden="true"
      />
      <input
        id={inputId}
        type="search"
        className="text-body text-neutral-900 placeholder:text-neutral-500 h-11 w-full rounded-md border border-neutral-200 bg-white pr-16 pl-11 focus:border-primary-400 focus:outline-none"
        {...props}
      />
      <kbd className="text-small text-neutral-500 bg-neutral-100 absolute top-1/2 right-3 -translate-y-1/2 rounded-xs px-1.5 py-0.5">
        ⌘K
      </kbd>
    </div>
  );
}
