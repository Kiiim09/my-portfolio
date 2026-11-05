interface ProjectCardProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
}

export function ProjectCard({
  number,
  title,
  subtitle,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 text-card-foreground transition hover:-translate-y-1 hover:border-primary/50">
      <div className="mb-8 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{number}</span>
      </div>

      <h3 className="mb-1 text-2xl font-semibold">{title}</h3>

      <p className="mb-5 text-sm text-primary">{subtitle}</p>

      <p className="mb-8 flex-1 leading-7 text-muted-foreground">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-xl bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}
