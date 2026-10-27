export function HeroSection() {
  return (
    <section className="flex min-h-[90vh] items-center">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Mobile Application Developer
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Hi, I&apos;m

            <span className="block text-primary">
              Luqman Hakim.
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-muted-foreground">
            I build cross-platform mobile applications using Flutter and Dart,
            with a focus on clean architecture, BLoC state management,
            REST API integration and maintainable user experiences.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-lg bg-primary px-6 py-3 text-center font-medium text-primary-foreground transition hover:opacity-90"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-border bg-background px-6 py-3 text-center font-medium transition hover:bg-accent hover:text-accent-foreground"
            >
              Contact Me
            </a>
          </div>
        </div>


        <div className="rounded-2xl border border-border bg-card p-8 text-card-foreground shadow-lg">

          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Current Focus
              </p>

              <h2 className="mt-1 text-2xl font-semibold">
                Flutter Development
              </h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              &lt;/&gt;
            </div>
          </div>


          <div className="space-y-4">

            <div className="rounded-xl border border-border bg-background p-4">
              <p className="mb-1 text-sm text-muted-foreground">
                Framework
              </p>

              <p className="font-medium">
                Flutter & Dart
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-4">
              <p className="mb-1 text-sm text-muted-foreground">
                Architecture
              </p>

              <p className="font-medium">
                Clean Architecture + BLoC
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-4">
              <p className="mb-1 text-sm text-muted-foreground">
                Backend Integration
              </p>

              <p className="font-medium">
                REST API · Laravel · MySQL
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}