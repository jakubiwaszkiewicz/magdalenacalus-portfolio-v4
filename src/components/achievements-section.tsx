import { Badge } from "@/components/ui/badge"
import {
  achievementTypeLabels,
  achievements,
  involvement,
  involvementTypeLabels,
} from "@/data/content"
import { RichText } from "@/lib/rich-text"

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="scroll-mt-28 border-t border-border/70"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-3 text-xs tracking-[0.28em] text-primary uppercase">
          {achievements.eyebrow}
        </p>
        <h2 className="font-heading max-w-2xl text-4xl text-balance sm:text-6xl">
          {achievements.title}
        </h2>
        <div className="mt-4 h-px max-w-2xl bg-foreground" />
        <p className="mt-5 max-w-2xl text-muted-foreground">
          <RichText html={achievements.intro} />
        </p>

        <div className="mt-10 grid gap-px sm:grid-cols-2">
          {achievements.entries.map((entry) => (
            <article
              key={entry.slug}
              className="flex flex-col gap-4 bg-background p-8 transition-colors duration-300 hover:bg-muted/40"
            >
              <div className="flex items-center justify-between gap-3">
                {entry.year ? (
                  <p className="text-sm text-muted-foreground">{entry.year}</p>
                ) : null}
                <Badge variant="outline" className="ml-auto">
                  {achievementTypeLabels[entry.type]}
                </Badge>
              </div>
              <h3 className="font-heading text-2xl tracking-[0.04em]">
                {entry.title}
              </h3>
              {entry.organization ? (
                <p className="text-sm text-muted-foreground">
                  {entry.organization}
                </p>
              ) : null}
              {entry.description ? (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <RichText html={entry.description} />
                </p>
              ) : null}
              {entry.links?.length ? (
                <ul className="space-y-1 text-sm">
                  {entry.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        <div id="involvement" className="scroll-mt-28 mt-20 border-t border-border/70 pt-20">
          <p className="mb-3 text-xs tracking-[0.28em] text-primary uppercase">
            {involvement.eyebrow}
          </p>
          <h2 className="font-heading max-w-2xl text-4xl text-balance sm:text-6xl">
            {involvement.title}
          </h2>
          <div className="mt-4 h-px max-w-2xl bg-foreground" />
          <p className="mt-5 max-w-2xl text-muted-foreground">
            <RichText html={involvement.intro} />
          </p>

          <div className="mt-14 grid grid-cols-1 gap-px bg-border/70">
            {involvement.entries.map((entry) => (
              <article
                key={entry.slug}
                className="flex flex-col gap-4 bg-background p-8 transition-colors duration-300 hover:bg-muted/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-muted-foreground">{entry.period}</p>
                  <Badge variant="outline">
                    {involvementTypeLabels[entry.type]}
                  </Badge>
                </div>
                <h3 className="font-heading text-2xl tracking-[0.04em]">
                  {entry.title}
                </h3>
                {entry.organization ? (
                  <p className="text-sm text-muted-foreground">
                    {entry.organization}
                  </p>
                ) : null}
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 bg-primary" />
                      <span>
                        <RichText html={highlight} />
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
