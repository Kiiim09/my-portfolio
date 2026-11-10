interface SkillCardProps {
  title: string;
  skills: string[];
}

export function SkillCard({
  title,
  skills,
}: SkillCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground transition hover:border-primary/40">
      <h3 className="mb-5 text-lg font-semibold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}