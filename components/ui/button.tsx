import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";
export type ButtonSize = "lg" | "md";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 disabled:bg-primary-100 disabled:text-primary-300",
  secondary:
    "border border-primary-500 text-primary-500 hover:bg-primary-100 disabled:border-primary-300 disabled:text-primary-300",
  tertiary:
    "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50 disabled:border-neutral-100 disabled:text-neutral-300",
  text: "text-primary-500 hover:text-primary-600 disabled:text-primary-300",
};

const sizeClasses: Record<ButtonSize, string> = {
  lg: "h-11 rounded-md px-4", // 44px tall, 12px radius, 0 16px padding
  md: "h-11 rounded-md px-3", // 44px tall, 12px radius, 0 12px padding
};

const commonClasses =
  "inline-flex items-center justify-center gap-2 text-body font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:cursor-not-allowed disabled:pointer-events-none";

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "primary",
  size = "lg",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(commonClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    />
  );
}
