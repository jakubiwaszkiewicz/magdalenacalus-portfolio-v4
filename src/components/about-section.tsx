import { about, site } from "@/data/content"
import { assetUrl } from "@/lib/assets"
import { RichText } from "@/lib/rich-text"

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 border-t border-border/70">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs tracking-[0.28em] text-primary uppercase">
            {about.eyebrow}
          </p>
          <h2 className="font-heading text-4xl text-balance sm:text-6xl">
            {about.title}
          </h2>
          <div className="mt-4 h-px bg-foreground" />
          <div className="mt-6 space-y-4 text-muted-foreground">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                <RichText html={paragraph} />
              </p>
            ))}
          </div>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm">
                  <RichText html={fact.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <img
            src={assetUrl(about.portrait)}
            alt={`Portrait of ${site.name}`}
            className="aspect-4/5 w-full object-cover object-[center_20%]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
