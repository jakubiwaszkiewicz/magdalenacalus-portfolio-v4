import { Menu } from "lucide-react"

import { InstagramIcon, LinkedinIcon } from "@/components/social-icons"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navItems, site } from "@/data/content"

export function SiteHeader() {
  return (
    <header className="animate-enter sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-heading text-xl tracking-[0.12em] text-primary transition-opacity hover:opacity-70"
        >
          {site.shortName}
        </a>

        <nav className="hidden items-center gap-6 text-sm lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-foreground/70 transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 transition-colors hover:text-primary"
          >
            <LinkedinIcon />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 transition-colors hover:text-primary"
          >
            <InstagramIcon />
            <span className="sr-only">Instagram</span>
          </a>
          <Button asChild size="sm">
            <a href="#contact">Get in touch</a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>{site.shortName}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {navItems.map((item) => (
                <SheetClose key={item.href} asChild>
                  <a
                    href={item.href}
                    className="rounded-lg px-2 py-2 text-sm hover:bg-muted"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
              <div className="mt-3 flex gap-3 px-2">
                <SheetClose asChild>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary"
                  >
                    <LinkedinIcon />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary"
                  >
                    <InstagramIcon />
                    <span className="sr-only">Instagram</span>
                  </a>
                </SheetClose>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
