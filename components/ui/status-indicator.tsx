import { CircleCheckBig, Lock, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export type StatusKind = "in-progress" | "completed" | "now-playing" | "locked";

const labels: Record<StatusKind, string> = {
  "in-progress": "In Progress",
  completed: "Completed",
  "now-playing": "Now Playing",
  locked: "Locked",
};

function StatusGlyph({ kind }: { kind: StatusKind }) {
  switch (kind) {
    case "in-progress":
      // Partial ring: a full faint track plus a two-quarter arc in orange.
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" stroke="var(--color-primary-200)" strokeWidth="3" />
          <path
            d="M12 3a9 9 0 0 1 9 9h-4.5A4.5 4.5 0 0 0 12 7.5V3Z"
            fill="var(--color-primary-500)"
          />
          <path
            d="M21 12a9 9 0 0 1-9 9v-4.5a4.5 4.5 0 0 0 4.5-4.5H21Z"
            fill="var(--color-primary-400)"
          />
        </svg>
      );
    case "completed":
      return <CircleCheckBig className="size-5 text-success" strokeWidth={2} aria-hidden="true" />;
    case "now-playing":
      return (
        <span className="bg-primary-500 inline-flex size-5 items-center justify-center rounded-full">
          <Play className="size-3 fill-white text-white" aria-hidden="true" />
        </span>
      );
    case "locked":
      return <Lock className="text-neutral-500 size-5" strokeWidth={2} aria-hidden="true" />;
  }
}

type StatusIndicatorProps = React.ComponentProps<"div"> & {
  kind: StatusKind;
  /** Override the default label ("In Progress", "Completed", …). */
  label?: string;
};

/** Status row: glyph + label, used on lessons and course cards. */
export function StatusIndicator({ kind, label, className, ...props }: StatusIndicatorProps) {
  return (
    <div className={cn("text-body text-neutral-700 inline-flex items-center gap-2", className)} {...props}>
      <StatusGlyph kind={kind} />
      <span>{label ?? labels[kind]}</span>
    </div>
  );
}
