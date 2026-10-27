import { ProjectCard } from "@/components/shared/project-card";
import { SectionHeader } from "@/components/shared/section-header";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">

        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <SectionHeader
            label="Selected Projects"
            title="Applications I've worked on."
          />

          <p className="max-w-md text-muted-foreground">
            Mobile applications involving e-commerce,
            enterprise workflows and community services.
          </p>

        </div>


        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              number={String(index + 1).padStart(2, "0")}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>

      </div>
    </section>
  );
}