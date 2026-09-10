import {
  Accessibility,
  BarChart3,
  Bookmark,
  CheckCircle2,
  Clock,
  ExternalLink,
  Eye,
  FileText,
  Folder,
  Grid3x3,
  Lock,
  Play,
  Search,
  Sparkles,
  Target,
  User,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { CourseCard } from "@/components/cards/course-card";
import { LessonCard } from "@/components/cards/lesson-card";
import { LessonVideoCard } from "@/components/cards/lesson-video-card";
import { ResourceCard } from "@/components/cards/resource-card";
import { Breadcrumbs } from "@/components/nav/breadcrumbs";
import { Navbar } from "@/components/nav/navbar";
import { Pagination } from "@/components/nav/pagination";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SearchInput } from "@/components/ui/search-input";
import { Select } from "@/components/ui/select";
import { StatusIndicator } from "@/components/ui/status-indicator";

const colors = [
  { name: "Primary 500", hex: "#F97316", cls: "bg-primary-500" },
  { name: "Primary 400", hex: "#FB923C", cls: "bg-primary-400" },
  { name: "Primary 300", hex: "#FDBA74", cls: "bg-primary-300" },
  { name: "Primary 200", hex: "#FED7AA", cls: "bg-primary-200" },
  { name: "Primary 100", hex: "#FFEEE5", cls: "bg-primary-100" },
  { name: "Neutral 900", hex: "#0F172A", cls: "bg-neutral-900" },
  { name: "Neutral 700", hex: "#334155", cls: "bg-neutral-700" },
  { name: "Neutral 500", hex: "#64748B", cls: "bg-neutral-500" },
  { name: "Neutral 300", hex: "#CBD5E1", cls: "bg-neutral-300" },
  { name: "Neutral 200", hex: "#E2E8F0", cls: "bg-neutral-200" },
  { name: "Neutral 100", hex: "#F1F5F9", cls: "bg-neutral-100" },
  { name: "Neutral 50", hex: "#FAFAFC", cls: "bg-neutral-50 border border-neutral-200" },
];

const typeScale = [
  { name: "Display 1", spec: "Playfair Display · 48/56 · Bold", use: "Page hero titles", cls: "text-display-1" },
  { name: "Display 2", spec: "Playfair Display · 36/44 · Bold", use: "Section heroes", cls: "text-display-2" },
  { name: "Heading 1", spec: "Inter · 28/36 · Semibold", use: "Page titles", cls: "text-heading-1" },
  { name: "Heading 2", spec: "Inter · 22/30 · Semibold", use: "Section titles", cls: "text-heading-2" },
  { name: "Heading 3", spec: "Inter · 18/26 · Medium", use: "Card titles", cls: "text-heading-3" },
  { name: "Body Large", spec: "Inter · 16/24 · Regular", use: "Intro copy", cls: "text-body-large" },
  { name: "Body", spec: "Inter · 14/20 · Regular", use: "Default copy", cls: "text-body" },
  { name: "Small", spec: "Inter · 12/16 · Regular", use: "Meta, captions", cls: "text-small" },
];

const spacings = [4, 8, 12, 16, 24, 32, 40, 48, 64];

const radii = [
  { name: "xs", value: "4px", cls: "rounded-xs" },
  { name: "sm", value: "8px", cls: "rounded-sm" },
  { name: "md", value: "12px", cls: "rounded-md" },
  { name: "lg", value: "16px", cls: "rounded-lg" },
  { name: "xl", value: "24px", cls: "rounded-xl" },
  { name: "full", value: "9999px", cls: "rounded-full" },
];

const shadows = [
  { name: "sm", value: "0 1px 2px 0 rgba(15,23,42,0.05)", cls: "shadow-sm" },
  { name: "md", value: "0 4px 12px -2px rgba(15,23,42,0.08)", cls: "shadow-md" },
  { name: "lg", value: "0 12px 24px -4px rgba(15,23,42,0.10)", cls: "shadow-lg" },
  { name: "xl", value: "0 20px 40px -8px rgba(15,23,42,0.12)", cls: "shadow-xl" },
];

const iconSet = [
  { name: "Search", Icon: Search },
  { name: "Play", Icon: Play },
  { name: "Bookmark", Icon: Bookmark },
  { name: "BarChart", Icon: BarChart3 },
  { name: "Clock", Icon: Clock },
  { name: "User", Icon: User },
  { name: "Folder", Icon: Folder },
  { name: "ExternalLink", Icon: ExternalLink },
  { name: "CheckCircle", Icon: CheckCircle2 },
  { name: "Lock", Icon: Lock },
  { name: "Target", Icon: Target },
  { name: "Eye", Icon: Eye },
  { name: "Grid", Icon: Grid3x3 },
  { name: "Accessibility", Icon: Accessibility },
  { name: "Sparkles", Icon: Sparkles },
  { name: "FileText", Icon: FileText },
];

const principles = [  {
    Icon: Sparkles,
    title: "Content is grounded",
    description:
      "Every result links to real course content. Never invent a course, lesson, price, duration, or timestamp.",
  },
  {
    Icon: Target,
    title: "Precision over browsing",
    description:
      "Learners land at the exact second a topic is taught, not at the top of a video.",
  },
  {
    Icon: Eye,
    title: "Clarity first",
    description:
      "Generous whitespace, a restrained palette, and one accent color keep attention on the content.",
  },
  {
    Icon: Accessibility,
    title: "Accessible by default",
    description:
      "Real buttons and links, visible focus states, labeled inputs, and ARIA on every control.",
  },
];

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-baseline gap-3">
        <span className="text-small text-primary-500 font-semibold tracking-widest">
          {number}
        </span>
        <h2 className="text-heading-2 text-neutral-900">{title}</h2>
      </div>
      {children}
    </section>
  );
}

const label = "text-small text-neutral-500 uppercase tracking-widest";

export default function DesignSystemPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar
        links={[
          { label: "Courses", href: "#", active: true },
          { label: "My Learning", href: "#" },
        ]}
      />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-8">
        <header className="mb-12 flex flex-col gap-3">
          <p className={label}>Design System</p>
          <h1 className="text-display-1 text-neutral-900">Vertex</h1>
          <p className="text-body-large max-w-2xl text-neutral-500">
            The foundation for the Vertex learning platform — tokens, type, and the
            components every page is built from.
          </p>
        </header>

        <div className="flex flex-col gap-16">
          <Section number="01" title="Colors">
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {colors.map((c) => (
                <li key={c.name} className="flex flex-col gap-2">
                  <div className={`h-16 rounded-md border border-neutral-200 ${c.cls}`} />
                  <p className="text-body text-neutral-900">{c.name}</p>
                  <p className="text-small text-neutral-500">{c.hex}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section number="02" title="Typography">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className={label}>Playfair Display — Display</p>
                <p className="text-display-2 text-neutral-900">Learn something new every day</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className={label}>Inter — Everything else</p>
                <p className="text-heading-1 text-neutral-900">The quick brown fox jumps</p>
                <p className="text-body-large text-neutral-500">
                  Vertex ranks every lesson and video moment that matches your query.
                </p>
              </div>
            </div>
          </Section>

          <Section number="03" title="Type scale">
            <ul className="flex flex-col divide-y divide-neutral-100 border-y border-neutral-100">
              {typeScale.map((t) => (
                <li key={t.name} className="grid gap-2 py-4 sm:grid-cols-[180px_1fr_auto] sm:items-baseline">
                  <span className="text-body text-neutral-900 font-medium">{t.name}</span>
                  <span className={`${t.cls} text-neutral-900`}>Search your courses</span>
                  <span className="text-small text-neutral-500">{t.spec}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section number="04" title="Spacing">
            <ul className="flex flex-wrap items-end gap-4">
              {spacings.map((px) => (
                <li key={px} className="flex flex-col items-center gap-2">
                  <div
                    className="bg-primary-100 rounded-xs"
                    style={{ width: px, height: px }}
                  />
                  <span className="text-small text-neutral-500">
                    {px}px · {px / 4}rem
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section number="05" title="Radius & shadows">
            <div className="grid gap-8 sm:grid-cols-2">
              <ul className="flex flex-wrap items-end gap-4">
                {radii.map((r) => (
                  <li key={r.name} className="flex flex-col items-center gap-2">
                    <div className={`size-16 border-2 border-primary-500 bg-primary-100 ${r.cls}`} />
                    <span className="text-small text-neutral-500">
                      {r.name} · {r.value}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="grid grid-cols-2 gap-4">
                {shadows.map((s) => (
                  <li key={s.name} className="flex flex-col gap-2">
                    <div className={`flex h-16 items-center justify-center rounded-md bg-white text-body text-neutral-500 ${s.cls}`}>
                      {s.name}
                    </div>
                    <span className="text-small text-neutral-500">{s.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section number="06" title="Icons">
            <ul className="grid grid-cols-4 gap-4 sm:grid-cols-8">
              {iconSet.map(({ name, Icon }) => (
                <li key={name} className="flex flex-col items-center gap-2">
                  <div className="flex size-12 items-center justify-center rounded-md border border-neutral-200 text-neutral-900">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <span className="text-small text-neutral-500">{name}</span>
                </li>
              ))}
            </ul>
            <ul className="grid grid-cols-4 gap-4 sm:grid-cols-8">
              {iconSet.slice(0, 4).map(({ name, Icon }) => (
                <li key={`filled-${name}`} className="flex flex-col items-center gap-2">
                  <div className="flex size-12 items-center justify-center rounded-md border border-neutral-200 text-primary-500">
                    <Icon className="size-6 fill-current" aria-hidden="true" />
                  </div>
                  <span className="text-small text-neutral-500">{name} (filled)</span>
                </li>
              ))}
            </ul>
            <p className="text-small text-neutral-500">
              lucide-react · 24×24 grid · 2px stroke · rounded caps
            </p>
          </Section>

          <Section number="07" title="Buttons">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {(["primary", "secondary", "tertiary", "text"] as const).map((variant) => (
                <div key={variant} className="flex flex-col gap-3">
                  <p className={label}>{variant}</p>
                  <div className="flex flex-col items-start gap-3">
                    <Button variant={variant}>Get started</Button>
                    <Button variant={variant} className="hover:bg-neutral-50">
                      Hover
                    </Button>
                    <Button variant={variant} disabled>
                      Disabled
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg">Large · 0 16px</Button>
              <Button size="md">Medium · 0 12px</Button>
            </div>
          </Section>

          <Section number="08" title="Inputs">
            <div className="grid gap-4 sm:grid-cols-2">
              <SearchInput placeholder="Search courses, lessons…" />
              <Select label="Sort by" defaultValue="relevant">
                <option value="relevant">Most relevant</option>
                <option value="newest">Newest</option>
                <option value="popular">Most popular</option>
              </Select>
            </div>
          </Section>

          <Section number="09" title="Badges">
            <div className="flex flex-wrap items-center gap-3">
              <Badge tone="video">Video</Badge>
              <Badge tone="lesson">Lesson</Badge>
              <Badge tone="popular">Popular</Badge>
            </div>
          </Section>

          <Section number="10" title="Status">
            <div className="flex flex-wrap gap-8">
              <StatusIndicator kind="in-progress" />
              <StatusIndicator kind="completed" />
              <StatusIndicator kind="now-playing" />
              <StatusIndicator kind="locked" />
            </div>
          </Section>

          <Section number="11" title="Progress bar">
            <div className="flex max-w-md flex-col gap-4">
              <ProgressBar value={64} showLabel aria-label="Course progress" />
              <ProgressBar value={100} showLabel aria-label="Course progress" />
            </div>
          </Section>

          <Section number="12" title="Cards">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <CourseCard
                logoInitials="Nx"
                title="Next.js Foundations"
                description="Build and deploy a full-stack app with the App Router."
                level="Beginner"
                duration="4h 20m"
                modules={6}
                instructor="Ada Lovelace"
              />
              <LessonVideoCard
                title="Fetching in Server Components"
                description="Async components, cache behavior, and streaming."
                lessonLabel="Lesson 5.1"
                duration="12:45"
                startSeconds={765}
              />
              <LessonCard
                title="Data Fetching and Caching"
                description="How React Server Components cache and revalidate."
                moduleLabel="Module 5"
              />
              <ResourceCard
                title="Course slides"
                description="Slides for every module, in one deck."
                fileType="PDF"
                fileSize="1.2 MB"
              />
            </div>
          </Section>

          <Section number="13" title="Navigation">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <p className={label}>Navbar</p>
                <div className="rounded-lg border border-neutral-200">
                  <Navbar
                    links={[
                      { label: "Courses", href: "#", active: true },
                      { label: "My Learning", href: "#" },
                    ]}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className={label}>Breadcrumbs</p>
                <Breadcrumbs
                  items={[
                    { label: "Courses", href: "#" },
                    { label: "Next.js Foundations", href: "#" },
                    { label: "Module 5" },
                  ]}
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className={label}>Pagination</p>
                <Pagination current={5} total={12} />
              </div>
            </div>
          </Section>

          <Section number="14" title="Principles">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map(({ Icon, title, description }) => (
                <div key={title} className="flex flex-col gap-3">
                  <div className="bg-primary-100 inline-flex size-10 items-center justify-center rounded-md">
                    <Icon className="text-primary-500 size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-heading-3 text-neutral-900">{title}</h3>
                  <p className="text-body text-neutral-500">{description}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </main>

      <footer className="border-t border-neutral-200 py-8">
        <div className="text-body text-neutral-500 mx-auto flex max-w-6xl items-center gap-2 px-4 sm:px-8">
          <Logo size={20} />
          Vertex Design System · v1.0
        </div>
      </footer>
    </div>
  );
}
