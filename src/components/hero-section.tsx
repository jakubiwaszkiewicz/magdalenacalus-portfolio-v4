import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { featuredProjects, site } from "@/data/content"
import { assetUrl } from "@/lib/assets"

const INTERVAL_MS = 3000

export function HeroSection() {
  const [active, setActive] = useState(0)
  const current = featuredProjects[active]

  useEffect(() => {
    if (featuredProjects.length < 2) {
      return
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (media.matches) {
      return
    }

    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % featuredProjects.length)
    }, INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section
      className="relative min-h-[88vh] overflow-hidden"
    >
      {featuredProjects.map((project, index) => (
        <img
          key={project.slug}
          src={assetUrl(project.cover)}
          alt={project.title}
          className="absolute inset-0 size-full object-cover object-top transition-opacity duration-1500 ease-out"
          style={{ opacity: index === active ? 1 : 0 }}
          fetchPriority={index === 0 ? "high" : "low"}
          decoding="async"
        />
      ))}
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/75 to-background/20" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-6 pt-28 pb-16">
        <p className="animate-enter mb-4 text-xs tracking-[0.28em] text-primary uppercase">
          {site.role} · {site.location}
        </p>
        <h1 className="animate-enter font-heading max-w-3xl text-5xl leading-[0.95] text-balance [animation-delay:120ms] sm:text-7xl">
          {site.name}
        </h1>
        <div className="animate-enter mt-5 h-px max-w-xl bg-foreground [animation-delay:180ms]" />
        <p className="animate-enter mt-6 max-w-xl text-base text-foreground/80 [animation-delay:220ms] sm:text-lg">
          {site.status}
        </p>
        <div className="animate-enter mt-8 flex flex-wrap items-end justify-between gap-6 [animation-delay:320ms]">
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View projects
                <ArrowDown data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact</a>
            </Button>
          </div>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            <p className="font-heading text-lg text-primary">{current.title}</p>
            <div className="flex gap-2">
              {featuredProjects.map((project, index) => (
                <button
                  key={project.slug}
                  type="button"
                  aria-label={`Show ${project.title}`}
                  aria-current={index === active}
                  onClick={() => setActive(index)}
                  className={
                    index === active
                      ? "h-1.5 w-8 bg-primary"
                      : "h-1.5 w-8 bg-foreground/20 transition-colors hover:bg-foreground/40"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
