import { cn } from "@/lib/utils";

type ProgressBarProps = React.ComponentProps<"div"> & {
  /** Completion percentage, 0–100. */
  value: number;
  /** Show the "64%" label to the right of the bar. */
  showLabel?: boolean;
  /** Accessible name when no visible label is shown. */
  "aria-label"?: string;
};

/** 8px rounded progress bar with optional percent label. */
export function ProgressBar({
  value,
  showLabel = false,
  className,
  ...props
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className={cn("text-body flex items-center gap-2", className)}>
      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        className="bg-neutral-100 h-2 flex-1 overflow-hidden rounded-full"
        {...props}
      >
        <div
          className="bg-primary-500 h-full rounded-full"
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel ? (
        <span className="text-small text-neutral-700 tabular-nums">{clamped}%</span>
      ) : null}
    </div>
  );
}
