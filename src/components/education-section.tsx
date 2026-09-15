import { Badge } from "@/components/ui/badge"
import { education, educationTypeLabels } from "@/data/content"

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

        <ol className="mt-14 space-y-0">
          {education.entries.map((entry) => (
            <li
              key={entry.slug}
              className="grid gap-4 border-t border-border/70 py-10 sm:grid-cols-[11rem_1fr] sm:gap-10"
            >
              <div>
                <p className="text-sm text-muted-foreground">{entry.period}</p>
                <Badge variant="outline" className="mt-3">
                  {educationTypeLabels[entry.type]}
                </Badge>
              </div>
              <div>
                <h3 className="font-heading text-2xl tracking-[0.04em]">
                  {entry.degree}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {entry.school} · {entry.location}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
