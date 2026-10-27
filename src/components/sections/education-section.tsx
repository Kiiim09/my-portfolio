export function EducationSection() {
  return (
    <section className="border-t border-border">

      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-24 md:grid-cols-2">

        <div className="rounded-2xl border border-border bg-card p-8">

          <p className="mb-3 text-sm text-muted-foreground">
            Education
          </p>

          <h3 className="mb-2 text-xl font-semibold">
            Bachelor of Computer Science
          </h3>

          <p className="mb-4 text-primary">
            Mobile Computing
          </p>

          <p className="text-muted-foreground">
            Universiti Malaysia Terengganu (UMT)
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            Expected Graduation · October 2026
          </p>

        </div>


        <div className="rounded-2xl border border-border bg-card p-8">

          <p className="mb-3 text-sm text-muted-foreground">
            Certification
          </p>

          <h3 className="mb-2 text-xl font-semibold">
            Android Certified Associate Developer
          </h3>

          <p className="text-primary">
            ACAD
          </p>

          <p className="mt-4 text-muted-foreground">
            Mobile application development certification.
          </p>

        </div>

      </div>

    </section>
  );
}