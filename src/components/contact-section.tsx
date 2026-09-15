import { useState, type FormEvent } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { InstagramIcon, LinkedinIcon } from "@/components/social-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { contact, site } from "@/data/content"

export function ContactSection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    const subject = encodeURIComponent(`${contact.mailSubject} ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-28 border-t border-border/70">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs tracking-[0.28em] text-primary uppercase">
            {contact.eyebrow}
          </p>
          <h2 className="font-heading text-4xl sm:text-6xl">{contact.title}</h2>
          <div className="mt-4 h-px max-w-md bg-foreground" />
          <p className="mt-5 max-w-md text-muted-foreground">{contact.intro}</p>

          <ul className="mt-2 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="size-4" />
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 " />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:underline">{site.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4" />
              {site.location}
            </li>
            <li className="flex items-center gap-3">
              <LinkedinIcon />
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {contact.linkedinLabel}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <InstagramIcon />
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {contact.instagramLabel}
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">{contact.form.name}</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder={contact.form.namePlaceholder}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{contact.form.email}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder={contact.form.emailPlaceholder}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{contact.form.message}</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder={contact.form.messagePlaceholder}
              className="min-h-32"
            />
          </div>
          <Button type="submit" size="lg">
            {sent ? contact.form.submitAgain : contact.form.submit}
          </Button>
          {sent ? (
            <p className="text-sm text-muted-foreground">
              {contact.form.thanks} {site.email}.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
