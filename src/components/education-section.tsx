import { Badge } from "@/components/ui/badge"
import { education, educationTypeLabels } from "@/data/content"
import { assetUrl } from "@/lib/assets"

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-28 border-t border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-xs tracking-[0.28em] text-primary uppercase">
          {education.eyebrow}
        </p>
        <h2 className="font-heading max-w-2xl text-4xl text-balance sm:text-6xl">
          {education.title}
        </h2>
        <div className="mt-4 h-px max-w-2xl bg-foreground" />
        <p className="mt-5 max-w-2xl text-muted-foreground">{education.intro}</p>

        <ol className="mt-14 grid gap-px bg-border/70 sm:grid-cols-2">
          {education.entries.map((entry) => (
            <li
              key={entry.slug}
              className="flex flex-col bg-background p-8 sm:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <img
                  src={assetUrl(entry.logo)}
                  alt=""
                  className="size-32 object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <div className="text-right">
                  <h3 className="font-heading text-2xl leading-tight tracking-[0.04em] sm:text-3xl">
                    {entry.school}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                      {entry.degree} · {entry.period}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {entry.location}
                  </p>
                  <Badge variant="outline" className="mt-3">
                    {educationTypeLabels[entry.type]}
                  </Badge>
                </div>
              </div>

              

              {entry.highlights?.length ? (
                <ul className="mt-6 flex-1 space-y-2 text-sm text-muted-foreground">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
