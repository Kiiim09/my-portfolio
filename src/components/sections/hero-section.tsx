import Image from "next/image";
import { Smartphone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="flex items-center">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pt-12 pb-8 sm:pt-16 sm:pb-12 lg:grid-cols-[1fr_1.1fr] lg:gap-8 lg:pt-0 lg:pb-0">
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

        {/* Floating Graduation Photo */}
        <div className="relative mx-auto flex w-full items-end justify-center self-end lg:justify-end lg:-translate-y-30">
          {/* Soft Orange Glow */}
          <div className="pointer-events-none absolute bottom-16 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]" />

          {/* Bigger Profile Image */}
          <Image
            src="/images/luqman-graduation.png"
            alt="Luqman Hakim wearing his graduation gown"
            width={850}
            height={1050}
            priority
            className="relative z-10 h-auto w-full max-w-[520px] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.6)] lg:max-w-[650px]"
          />
        </div>
      </div>
    </section>
  );
}
