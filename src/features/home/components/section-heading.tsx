interface SectionHeadingProps {
  label: string;
  title: string;
  accent: string;
  joiner?: string;
}

export default function SectionHeading({
  label,
  title,
  accent,
  joiner = " ",
}: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col items-start gap-4 md:mb-16 md:flex-row md:items-center md:gap-6">
      <span className="section-label">{label}</span>
      <div
        className="h-px w-full md:flex-1"
        style={{ background: "var(--border)" }}
      />
      <h2
        className="text-[2.6rem] leading-none font-headline sm:text-5xl md:text-6xl"
        style={{ color: "var(--white)" }}
      >
        {title}
        {joiner}
        <span style={{ color: "var(--red)" }}>{accent}</span>
      </h2>
    </div>
  );
}
