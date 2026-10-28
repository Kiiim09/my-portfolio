
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="flex min-h-[90vh] items-center">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

        {/* Introduction */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Mobile Application Developer
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Hi, I&apos;m
            <span className="block text-primary">
              Luqman Hakim.
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-muted-foreground">
            I build cross-platform mobile applications using
            Flutter and Dart, with a focus on clean architecture,
            BLoC state management, REST API integration, and
            maintainable user experiences.
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

        {/* Graduation Photo */}
        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <Image
              src="/images/luqman-graduation.jpg"
              alt="Luqman Hakim at his graduation ceremony at Universiti Malaysia Terengganu"
              width={960}
              height={1280}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
