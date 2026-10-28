import { ExperienceCard } from "@/components/shared/experience-card";
import { SectionHeader } from "@/components/shared/section-header";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-card/30"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20">

        <div className="mb-12">
          <SectionHeader
            label="Experience"
            title="My development journey."
          />
        </div>


        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              role={experience.role}
              company={experience.company}
              period={experience.period}
              type={experience.type}
              description={experience.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}