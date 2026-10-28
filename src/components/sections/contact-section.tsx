export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20">

        <div className="rounded-3xl border border-border bg-card p-8 md:p-14">

          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Contact
          </p>

          <h2 className="mb-6 max-w-2xl text-3xl font-bold md:text-5xl">
            Have a mobile project or opportunity in mind?
          </h2>

          <p className="mb-8 max-w-2xl leading-7 text-muted-foreground">
            I&apos;m interested in opportunities involving Flutter,
            mobile application development and software development.
          </p>


          <div className="flex flex-col gap-4 sm:flex-row">

            <a
              href="mailto:loqmanhakeem999@gmail.com"
              className="rounded-lg bg-primary px-6 py-3 text-center font-medium text-primary-foreground transition hover:opacity-90"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/luqman-hakim-51aa68325"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-6 py-3 text-center font-medium transition hover:bg-accent"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}