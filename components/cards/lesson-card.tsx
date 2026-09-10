import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type LessonCardProps = React.ComponentProps<"div"> & {
  title: string;
  description: string;
  /** e.g. "Module 5" */
  moduleLabel: string;
  href?: string;
};

/** A lesson result: badge, copy, footer with module and "view lesson" action. */
export function LessonCard({
  title,
  description,
  moduleLabel,
  href = "#",
  className,
  ...props
}: LessonCardProps) {
  return (
    <Card className={cn("flex flex-col gap-3 p-6", className)} {...props}>
      <Badge tone="lesson">Lesson</Badge>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-heading-3 text-neutral-900">{title}</h3>
        <p className="text-body text-neutral-500">{description}</p>
      </div>
      <div className="text-body mt-auto flex items-center justify-between border-t border-neutral-100 pt-4">
        <span className="text-neutral-500">{moduleLabel}</span>
        <a
          href={href}
          className="text-body text-primary-500 inline-flex items-center gap-1.5 font-medium hover:text-primary-600"
        >
          View lesson
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      </div>
    </Card>
  );
}
