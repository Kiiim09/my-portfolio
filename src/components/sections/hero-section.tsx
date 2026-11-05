import Image from "next/image";

export function HeroSection() {
  return (
    <section className="flex items-center">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pt-12 pb-8 sm:pt-16 sm:pb-12 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:py-16">
        {/* Introduction */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Mobile Application Developer
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m
            <span className="block text-primary">Luqman Hakim.</span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-muted-foreground">
            I build cross-platform mobile applications using Flutter and Dart,
            with a focus on clean architecture, BLoC state management, REST API
            integration, and maintainable user experiences.
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

        {/* Profile Image Card */}
        <div className="mx-auto w-full max-w-[480px]">
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50">
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5" />

            <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/20 blur-[90px]" />

            <div className="relative flex h-[420px] items-end justify-center px-4 pt-6 sm:h-[500px] sm:pt-8">
              <Image
                src="/images/luqman-portfolio.png"
                alt="Luqman Hakim"
                width={850}
                height={1050}
                priority
                className="relative z-10 h-[98%] w-auto max-w-full object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Bottom Information */}
            <div className="relative z-20 border-t border-border bg-card/90 px-6 py-5 text-center backdrop-blur-md">
              <h3 className="text-xl font-semibold">Luqman Hakim</h3>
              <p className="mt-1 text-sm text-primary">
                Flutter Mobile Application Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
