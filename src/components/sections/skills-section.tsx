import { SkillCard } from "@/components/shared/skill-card";
import { SectionHeader } from "@/components/shared/section-header";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-card/30"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20">

        <div className="mb-12">
          <SectionHeader
            label="Technical Skills"
            title="Technologies I work with."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <SkillCard
              key={group.title}
              title={group.title}
              skills={group.skills}
            />
          ))}
        </div>

      </div>
    </section>
  );
}