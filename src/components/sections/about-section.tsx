export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20">

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
              I&apos;m a Mobile Application Developer with over a year of
              experience building Android and iOS applications with Flutter,
              Dart, and BLoC. I work on REST API integrations, local storage,
              payment gateways, push notifications, and POS features.
            </p>

            <p className="leading-8 text-muted-foreground">
              I also enjoy debugging issues, improving app performance, and
              seeing features through testing and deployment to the Google Play
              Store and Apple App Store. I hold a Bachelor of Computer Science
              in Mobile Computing from Universiti Malaysia Terengganu.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}