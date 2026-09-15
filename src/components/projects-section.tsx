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
  projects,
  viewLabels,
  type Project,
  type ProjectView,
} from "@/data/content"
import { assetUrl } from "@/lib/assets"

const views: ProjectView[] = [
  "featured",
  "all",
  "academic",
  "contests",
  "work",
  "drawing",
  "sculpture",
  "digital",
  "painting",
]

const moreProjects = projects.filter((project) => !project.featured)

function matchesView(project: Project, view: ProjectView) {
  if (view === "all") {
    return true
  }

  if (view === "featured") {
    return project.featured
  }

  return project.categories.includes(view)
}

export function ProjectsSection() {
  const [view, setView] = useState<ProjectView>("featured")
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState<Project | null>(null)
  const [activeImage, setActiveImage] = useState(0)

  const visible = useMemo(() => {
    if (view === "featured" && expanded) {
      return projects
    }

    return projects.filter((project) => matchesView(project, view))
  }, [view, expanded])

  const showMore = view === "featured" && !expanded && moreProjects.length > 0

  function openProject(project: Project) {
    setActive(project)
    setActiveImage(0)
  }

  function selectView(next: ProjectView) {
    setView(next)
    setExpanded(next === "all")
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
          <div className="flex flex-wrap gap-2">
            {views.map((item) => (
              <Button
                key={item}
                size="sm"
                variant={view === item ? "default" : "outline"}
                onClick={() => selectView(item)}
                className="cursor-pointer"
              >
                {viewLabels[item]}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {visible.map((project) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => openProject(project)}
              className="group cursor-pointer text-left"
            >
              <div className="overflow-hidden bg-muted">
                <img
                  src={assetUrl(project.cover)}
                  alt={project.title}
                  className="aspect-4/3 w-full object-cover object-top transition duration-500 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-heading text-2xl tracking-[0.04em] transition-colors group-hover:text-foreground/70">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.location} · {project.year}
                  </p>
                </div>
                <div className="flex flex-wrap justify-end gap-1">
                  {project.featured ? (
                    <Badge variant="outline">Featured</Badge>
                  ) : null}
                  {project.categories.map((category) => (
                    <Badge key={category} variant="secondary">
                      {viewLabels[category]}
                    </Badge>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {showMore ? (
          <div className="mt-12 flex justify-center">
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer"
              onClick={() => {
                setExpanded(true)
                setView("all")
              }}
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
                  {active.type} · {active.location} · {active.year}
                </DialogDescription>
              </DialogHeader>

              <a
                href={assetUrl(active.gallery[activeImage])}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <img
                  src={assetUrl(active.gallery[activeImage])}
                  alt={`${active.title} photo ${activeImage + 1}`}
                  className="aspect-16/11 w-full bg-background object-contain"
                  decoding="async"
                />
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
                          ? "ring-2 ring-foreground transition"
                          : "cursor-pointer opacity-70 transition hover:opacity-100"
                      }
                    >
                      <img
                        src={assetUrl(image)}
                        alt=""
                        className="aspect-16/11 w-full object-contain"
                        decoding="async"
                      />
                    </button>
                  ))}
                </div>
              ) : null}

              <div className="grid gap-6 sm:grid-cols-[1.4fr_0.8fr]">
                <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {active.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                      Role
                    </dt>
                    <dd>{active.role}</dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                      Tools
                    </dt>
                    <dd>{active.tools.join(", ")}</dd>
                  </div>
                </dl>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  )
}
