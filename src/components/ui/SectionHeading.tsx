interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`mb-11 sm:mb-14 ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`eyebrow mb-4 ${centered ? "justify-center" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
