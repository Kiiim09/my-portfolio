
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

          <div className="rounded-2xl border border-border bg-card p-8 transition hover:border-primary/50">
            <p className="mb-4 text-sm font-medium text-primary">
              Oct 2022 – Oct 2026
            </p>

            <h3 className="mb-2 text-xl font-semibold">
              Bachelor of Computer Science (Mobile Computing)
            </h3>

            <p className="mb-4 font-medium">
              Universiti Malaysia Terengganu (UMT)
            </p>

            <ul className="mb-4 list-inside list-disc space-y-1 text-justify text-sm leading-7 text-muted-foreground">
              <li>
                Relevant coursework: Mobile Application Development, Database
                Systems, Software Engineering, and Data Structures
              </li>
              <li>
                Academic projects using Flutter, Dart, Java, HTML, SQL, and
                Python
              </li>
            </ul>

            <p className="text-sm font-medium text-muted-foreground">
              Graduated October 2026 · CGPA: 3.19
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 transition hover:border-primary/50">
            <p className="mb-4 text-sm font-medium text-primary">
              Graduated August 2022
            </p>

            <h3 className="mb-2 text-xl font-semibold">
              Diploma of Information Technology (Digital Technology)
            </h3>

            <p className="mb-4 font-medium">
              Politeknik Ungku Omar (PUO)
            </p>

            <ul className="mb-4 list-inside list-disc space-y-1 text-justify text-sm leading-7 text-muted-foreground">
              <li>
                Strong foundation in programming, web development, and database
                management
              </li>
              <li>Completed projects using Java, PHP, HTML, and SQL</li>
            </ul>

            <p className="text-sm font-medium text-muted-foreground">
              CGPA: 3.80
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
