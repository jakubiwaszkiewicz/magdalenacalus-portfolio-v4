export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-8 text-sm">
          <p>Made with ❤️ by <a className="mx-auto underline cursor-pointer hover:text-foreground" href="https://github.com/jakubiwaszkiewicz" target="_blank" rel="noopener noreferrer">jakubiwaszkiewicz</a> © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
