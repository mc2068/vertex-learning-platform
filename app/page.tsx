import { Logo } from "@/components/brand/logo";
import { CourseCard } from "@/components/cards/course-card";
import { LessonCard } from "@/components/cards/lesson-card";
import { LessonVideoCard } from "@/components/cards/lesson-video-card";
import { ResourceCard } from "@/components/cards/resource-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SearchInput } from "@/components/ui/search-input";
import { Select } from "@/components/ui/select";
import { StatusIndicator } from "@/components/ui/status-indicator";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 py-16 sm:px-8">
        {/* Hero */}
        <section className="flex flex-col gap-4">
          <p className="text-small font-semibold uppercase tracking-widest text-primary-500">
            Vertex
          </p>
          <h1 className="text-display-1 text-neutral-900">
            Learn at the exact moment
          </h1>
          <p className="text-body-large max-w-2xl text-neutral-500">
            Vertex is an AI-powered learning platform. Search a course in plain
            language and land on the exact second where the topic is taught.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button>Browse courses</Button>
            <Button variant="secondary">My learning</Button>
          </div>
        </section>

        {/* Search */}
        <section className="flex flex-col gap-4">
          <h2 className="text-heading-2 text-neutral-900">Search</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <SearchInput placeholder="Search lessons, chapters, topics…" />
            <Select label="Sort results by" defaultValue="relevant">
              <option value="relevant">Most relevant</option>
              <option value="newest">Newest</option>
            </Select>
          </div>
        </section>

        {/* Cards preview */}
        <section className="flex flex-col gap-4">
          <h2 className="text-heading-2 text-neutral-900">Results preview</h2>
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
        </section>

        {/* Component sampler */}
        <section className="flex flex-col gap-4">
          <h2 className="text-heading-2 text-neutral-900">Components</h2>
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="video">Video</Badge>
            <Badge tone="lesson">Lesson</Badge>
            <Badge tone="popular">Popular</Badge>
          </div>
          <div className="flex flex-wrap gap-8">
            <StatusIndicator kind="in-progress" />
            <StatusIndicator kind="completed" />
            <StatusIndicator kind="now-playing" />
            <StatusIndicator kind="locked" />
          </div>
          <div className="max-w-md">
            <ProgressBar value={64} showLabel aria-label="Course progress" />
          </div>
          <Card className="max-w-sm p-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <Badge tone="popular">Popular</Badge>
                <span className="text-body font-semibold text-neutral-900">$49</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-heading-3 text-neutral-900">Next.js for Production</h3>
                <p className="text-body text-neutral-500">
                  Routing, caching, and server components in production.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button size="md">View course</Button>
                <Button size="md" variant="tertiary">
                  Preview
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Footer brand */}
        <footer className="flex items-center gap-2 border-t border-neutral-200 pt-8">
          <Logo size={20} />
          <span className="text-small text-neutral-500">Vertex · Learn at the exact moment</span>
        </footer>
      </main>
    </div>
  );
}
