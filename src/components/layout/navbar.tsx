export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        <a
          href="#"
          className="text-xl font-bold"
        >
          L.H<span className="text-primary"></span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a
            href="#about"
            className="transition hover:text-foreground"
          >
            About
          </a>

          <a
            href="#skills"
            className="transition hover:text-foreground"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="transition hover:text-foreground"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="transition hover:text-foreground"
          >
            Experience
          </a>

          <a
            href="#education"
            className="transition hover:text-foreground"
          >
            Education
          </a>

          <a
            href="#contact"
            className="transition hover:text-foreground"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Let&apos;s Talk
        </a>

      </div>
    </header>
  );
}