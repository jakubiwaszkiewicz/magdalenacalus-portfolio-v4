import { Play } from "lucide-react"
import { useMemo, useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  projectFilters,
  projects,
  subcategoryLabels,
  type Project,
  type ProjectSubcategory,
  type ProjectView,
} from "@/data/content"
import { assetUrl } from "@/lib/assets"
import { RichText } from "@/lib/rich-text"

const moreProjects = projects.filter((project) => !project.featured)

function isVideo(src: string) {
  return src.toLowerCase().endsWith(".mp4")
}

function PlayButton({ size = "lg" }: { size?: "lg" | "sm" }) {
  return (
    <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <span
        className={
          size === "lg"
            ? "flex size-16 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg"
            : "flex size-8 items-center justify-center rounded-full bg-background/90 text-foreground"
        }
      >
        <Play
          className={size === "lg" ? "ml-1 size-7 fill-current" : "ml-0.5 size-3.5 fill-current"}
          aria-hidden
        />
      </span>
    </span>
  )
}

function matchesView(
  project: Project,
  view: ProjectView,
  subcategory: ProjectSubcategory | null,
) {
  if (view === "featured") {
    return project.featured
  }

  if (project.category !== view) {
    return false
  }

  if (subcategory) {
    return project.subcategory === subcategory
  }

  return true
}

export function ProjectsSection() {
  const [view, setView] = useState<ProjectView>("featured")
  const [subcategory, setSubcategory] = useState<ProjectSubcategory | null>(
    null,
  )
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState<Project | null>(null)
  const [activeImage, setActiveImage] = useState(0)

  const activeFilter = projectFilters.find((filter) => filter.id === view)
  const subcategories =
    activeFilter && "children" in activeFilter ? activeFilter.children : []

  const visible = useMemo(() => {
    if (view === "featured" && expanded) {
      return projects
    }

    return projects.filter((project) => matchesView(project, view, subcategory))
  }, [view, subcategory, expanded])

  const showMore = view === "featured" && !expanded && moreProjects.length > 0

  function openProject(project: Project) {
    setActive(project)
    setActiveImage(0)
  }

  function selectView(next: ProjectView) {
    setView(next)
    setSubcategory(null)
    setExpanded(false)
  }

  function selectSubcategory(next: ProjectSubcategory) {
    setSubcategory((current) => (current === next ? null : next))
  }

  return (
    <section id="projects" className="scroll-mt-28 border-t border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.28em] text-primary uppercase">
              Selected work
            </p>
            <h2 className="font-heading text-4xl sm:text-6xl">Projects</h2>
            <div className="mt-4 h-px w-full bg-foreground" />
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <div className="flex flex-wrap gap-2">
              {projectFilters.map((item) => (
                <Button
                  key={item.id}
                  size="sm"
                  variant={view === item.id ? "default" : "outline"}
                  onClick={() => selectView(item.id)}
                  className="cursor-pointer"
                >
                  {item.label}
                </Button>
              ))}
            </div>
            {subcategories.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {subcategories.map((item) => (
                  <Button
                    key={item.id}
                    size="sm"
                    variant={subcategory === item.id ? "default" : "outline"}
                    onClick={() => selectSubcategory(item.id)}
                    className="cursor-pointer"
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 text-sm text-muted-foreground">
            No projects in this category yet.
          </p>
        ) : null}

        <div
          className={
            visible.length === 0
              ? "hidden"
              : "mt-12 grid gap-8 sm:grid-cols-2"
          }
        >
          {visible.map((project) => {
            const video = project.gallery.find(isVideo)
            const videoOnly = video !== undefined && project.gallery.every(isVideo)
            const meta = [project.location, project.year].filter(Boolean).join(" · ")
            const cover = (
              <div className="relative overflow-hidden bg-muted">
                <img
                  src={assetUrl(project.cover)}
                  alt={project.title}
                  className="aspect-4/3 w-full object-cover object-top transition duration-500 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
                {videoOnly ? <PlayButton /> : null}
              </div>
            )

            return (
              <div key={project.slug} className="group text-left">
                {videoOnly && video ? (
                  <a
                    href={assetUrl(video)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer"
                    aria-label={`Play ${project.title}`}
                  >
                    {cover}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => openProject(project)}
                    className="block w-full cursor-pointer"
                  >
                    {cover}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => openProject(project)}
                  className="mt-4 flex w-full cursor-pointer items-start justify-between gap-3 text-left"
                >
                  <div>
                    <h3 className="font-heading text-2xl tracking-[0.04em] transition-colors group-hover:text-foreground/70">
                      {project.title}
                    </h3>
                    {meta ? (
                      <p className="mt-1 text-sm text-muted-foreground">{meta}</p>
                    ) : null}
                  </div>
                  <div className="flex flex-wrap justify-end gap-1">
                    {project.featured ? (
                      <Badge variant="outline">Featured</Badge>
                    ) : null}
                    <Badge variant="secondary">
                      {subcategoryLabels[project.subcategory]}
                    </Badge>
                  </div>
                </button>
              </div>
            )
          })}
        </div>

        {showMore ? (
          <div className="mt-12 flex justify-center">
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer"
              onClick={() => setExpanded(true)}
            >
              Show more
            </Button>
          </div>
        ) : null}
      </div>

      <Dialog
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) {
            setActive(null)
          }
        }}
      >
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-4xl">
          {active ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-3xl">
                  {active.title}
                </DialogTitle>
                <DialogDescription>
                  {[active.type, active.location, active.year]
                    .filter(Boolean)
                    .join(" · ")}
                </DialogDescription>
              </DialogHeader>

              <a
                href={assetUrl(active.gallery[activeImage])}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block cursor-pointer"
                aria-label={
                  isVideo(active.gallery[activeImage])
                    ? `Play ${active.title}`
                    : undefined
                }
              >
                <img
                  src={assetUrl(
                    isVideo(active.gallery[activeImage])
                      ? active.cover
                      : active.gallery[activeImage],
                  )}
                  alt={
                    isVideo(active.gallery[activeImage])
                      ? `${active.title} cover`
                      : `${active.title} photo ${activeImage + 1}`
                  }
                  className="aspect-16/11 w-full bg-background object-contain"
                  decoding="async"
                />
                {isVideo(active.gallery[activeImage]) ? <PlayButton /> : null}
              </a>

              {active.gallery.length > 1 ? (
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {active.gallery.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      className={
                        index === activeImage
                          ? "relative ring-2 ring-foreground transition"
                          : "relative cursor-pointer opacity-70 transition hover:opacity-100"
                      }
                    >
                      <img
                        src={assetUrl(isVideo(image) ? active.cover : image)}
                        alt=""
                        className="aspect-16/11 w-full object-contain"
                        decoding="async"
                      />
                      {isVideo(image) ? <PlayButton size="sm" /> : null}
                    </button>
                  ))}
                </div>
              ) : null}

              <div className="grid gap-6 sm:grid-cols-[1.4fr_0.8fr]">
                <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {active.description.map((paragraph) => (
                    <p key={paragraph}>
                      <RichText html={paragraph} />
                    </p>
                  ))}
                </div>
                <dl className="space-y-3 text-sm">
                  {active.role ? (
                    <div>
                      <dt className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                        Role
                      </dt>
                      <dd>{active.role}</dd>
                    </div>
                  ) : null}
                  {active.tools.length > 0 ? (
                    <div>
                      <dt className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                        Tools
                      </dt>
                      <dd>{active.tools.join(", ")}</dd>
                    </div>
                  ) : null}
                </dl>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  )
}
