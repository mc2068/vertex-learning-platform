import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type LessonVideoCardProps = React.ComponentProps<"div"> & {
  title: string;
  description: string;
  /** e.g. "Lesson 5.1" */
  lessonLabel: string;
  /** e.g. "12:45" */
  duration: string;
  /** Second the clip starts at — echoed in the action label. */
  startSeconds?: number;
  href?: string;
};

/** A video moment: badge, copy, footer with a "watch from mm:ss" action. */
export function LessonVideoCard({
  title,
  description,
  lessonLabel,
  duration,
  startSeconds,
  href = "#",
  className,
  ...props
}: LessonVideoCardProps) {
  const from = startSeconds != null ? formatSeconds(startSeconds) : duration;
  return (
    <Card className={cn("flex flex-col gap-3 p-6", className)} {...props}>
      <Badge tone="video">Video</Badge>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-heading-3 text-neutral-900">{title}</h3>
        <p className="text-body text-neutral-500">{description}</p>
      </div>
      <div className="text-body mt-auto flex items-center justify-between border-t border-neutral-100 pt-4">
        <span className="text-neutral-500">
          {lessonLabel} · {duration}
        </span>
        <a
          href={`${href}${href.includes("?") ? "&" : "?"}t=${from}`}
          className="text-body text-primary-500 font-medium hover:text-primary-600"
        >
          Watch from {from}
        </a>
      </div>
    </Card>
  );
}

function formatSeconds(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}
