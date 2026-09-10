import { cn } from "@/lib/utils";

export type BadgeTone = "video" | "lesson" | "popular";

const toneClasses: Record<BadgeTone, string> = {
  video: "bg-primary-100 text-primary-500",
  lesson: "bg-lesson-soft text-lesson",
  popular: "bg-primary-100 font-semibold text-primary-500",
};

type BadgeProps = React.ComponentProps<"span"> & {
  tone?: BadgeTone;
};

/** Small uppercase pill, e.g. VIDEO / LESSON / POPULAR. */
export function Badge({ tone = "video", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "text-small inline-flex h-6 items-center rounded-xs px-2 font-semibold uppercase tracking-widest",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
