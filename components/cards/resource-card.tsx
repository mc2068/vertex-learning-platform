import { ExternalLink, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ResourceCardProps = React.ComponentProps<"div"> & {
  title: string;
  description: string;
  /** e.g. "PDF" */
  fileType: string;
  /** e.g. "1.2 MB" */
  fileSize: string;
  href?: string;
};

/** Downloadable resource: file icon, copy, footer with type/size and open action. */
export function ResourceCard({
  title,
  description,
  fileType,
  fileSize,
  href = "#",
  className,
  ...props
}: ResourceCardProps) {
  return (
    <Card className={cn("flex flex-col gap-3 p-6", className)} {...props}>
      <div className="bg-primary-100 inline-flex size-10 items-center justify-center rounded-md">
        <FileText className="text-primary-500 size-5" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-heading-3 text-neutral-900">{title}</h3>
        <p className="text-body text-neutral-500">{description}</p>
      </div>
      <div className="text-body mt-auto flex items-center justify-between border-t border-neutral-100 pt-4">
        <span className="text-neutral-500">
          {fileType} · {fileSize}
        </span>
        <a
          href={href}
          className="text-body text-primary-500 inline-flex items-center gap-1.5 font-medium hover:text-primary-600"
        >
          Open
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      </div>
    </Card>
  );
}
