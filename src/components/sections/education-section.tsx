
export function EducationSection() {
  return (
    <section
      id="education"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20">

        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Education
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            My academic background.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Bachelor's Degree */}
          <div className="rounded-2xl border border-border bg-card p-8 transition hover:border-primary/50">
            <p className="mb-4 text-sm font-medium text-primary">
              Oct 2022 – Oct 2026
            </p>

            <h3 className="mb-2 text-xl font-semibold">
              Bachelor's Degree in Information Technology
            </h3>

            <p className="mb-4 font-medium">
              Universiti Malaysia Terengganu (UMT)
            </p>

            <p className="text-sm leading-7 text-muted-foreground">
              Specialized in Mobile Application Development,
              with a focus on mobile technologies and
              software development.
            </p>
          </div>

          {/* Diploma */}
          <div className="rounded-2xl border border-border bg-card p-8 transition hover:border-primary/50">
            <p className="mb-4 text-sm font-medium text-primary">
              Jun 2019 – Feb 2021
            </p>

            <h3 className="mb-2 text-xl font-semibold">
              Diploma in Information Technology
            </h3>

            <p className="mb-4 font-medium">
              Politeknik Ungku Omar (PUO)
            </p>

            <p className="text-sm leading-7 text-muted-foreground">
              Completed a diploma in Information Technology,
              developing foundational knowledge in computing,
              information systems, and IT-related practices.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
