interface SkillCardProps {
  title: string;
  skills: string[];
}

export function SkillCard({
  title,
  skills,
}: SkillCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground transition hover:border-primary/50">
      <h3 className="mb-5 text-lg font-semibold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}