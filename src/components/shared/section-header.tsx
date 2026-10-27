interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div>
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
        {label}
      </p>

      <h2 className="text-3xl font-bold md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}