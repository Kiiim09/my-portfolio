export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              About Me
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Building practical mobile experiences.
            </h2>
          </div>


          <div>
            <p className="mb-6 text-lg leading-8 text-muted-foreground">
              I&apos;m a Mobile Application Developer specializing in Flutter
              and Dart. My work includes developing and maintaining mobile
              applications, integrating REST APIs, implementing BLoC state
              management, debugging API issues and supporting application
              releases.
            </p>

            <p className="leading-8 text-muted-foreground">
              I enjoy turning application requirements into structured,
              maintainable features while keeping the user experience simple
              and consistent.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}