import { Bell } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { cn } from "@/lib/utils";

export type NavLink = {
  label: string;
  href: string;
  active?: boolean;
};

type NavbarProps = React.ComponentProps<"header"> & {
  links: NavLink[];
};

/** Site header: logo left, center links, notification bell right. */
export function Navbar({ links, className, ...props }: NavbarProps) {
  return (
    <header
      className={cn(
        "border-b border-neutral-200 bg-white px-4 py-3 sm:px-8",
        className,
      )}
      {...props}
    >
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center gap-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo size={28} />
          <span className="text-heading-3 text-neutral-900">Vertex</span>
        </Link>
        <ul className="text-body flex flex-1 items-center gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                className={cn(
                  "hover:text-primary-500",
                  link.active ? "text-primary-500 font-medium" : "text-neutral-900",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label="Notifications"
          className="text-neutral-700 hover:text-primary-500 focus-visible:outline-primary-500 relative rounded-full p-1 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <Bell className="size-5" aria-hidden="true" />
          <span className="bg-primary-500 absolute top-0.5 right-0.5 size-2 rounded-full" />
        </button>
      </nav>
    </header>
  );
}
