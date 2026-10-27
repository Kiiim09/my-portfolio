interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
}

export function ExperienceCard({
  role,
  company,
  period,
  type,
  description,
}: ExperienceCardProps) {
  return (
    <div className="grid gap-6 rounded-2xl border border-border bg-card p-7 md:grid-cols-[220px_1fr]">
      <div>
        <p className="font-medium text-primary">
          {period}
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          {type}
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">
          {role}
        </h3>

        <p className="mt-1 text-muted-foreground">
          {company}
        </p>

        <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}