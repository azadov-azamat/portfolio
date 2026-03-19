import { useI18n } from "../../../shared/i18n";
import { useReveal } from "../../../shared/hooks/use-reveal";
import { getHomeContent, type ExperienceItem } from "../data";
import SectionHeading from "./section-heading";

export default function Experience() {
  const titleReveal = useReveal<HTMLDivElement>();
  const { locale } = useI18n();
  const { experienceItems, sections } = getHomeContent(locale);

  return (
    <section
      id="experience"
      className="content-section px-5 py-24 layer md:px-16 md:py-32 lg:px-24"
      style={{ background: "var(--ink-2)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div
          ref={titleReveal.ref}
          className={`reveal reveal-up ${titleReveal.isVisible ? "is-visible" : ""}`}
        >
          <SectionHeading {...sections.experience} />
        </div>

        <div className="relative">
          <div
            className="absolute bottom-0 left-[88px] top-0 hidden w-px md:block"
            style={{ background: "var(--border)" }}
          />

          {experienceItems.map((item, index) => (
            <ExperienceEntry
              key={`${item.year}-${item.company}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceEntry({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const itemReveal = useReveal<HTMLDivElement>({ threshold: 0.12 });

  return (
    <div
      ref={itemReveal.ref}
      className={`group relative mb-5 flex gap-0 reveal reveal-left md:mb-10 md:gap-12 ${
        itemReveal.isVisible ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div
        className="hidden flex-shrink-0 flex-col items-end md:flex"
        style={{ width: 80 }}
      >
        <span
          className="text-2xl font-headline"
          style={{ color: "var(--red-text)" }}
        >
          {item.year}
        </span>
      </div>

      <div
        className="hidden flex-shrink-0 flex-col items-center md:flex"
        style={{ width: 24 }}
      >
        <div
          className="dot-pulse mt-1 h-3 w-3 flex-shrink-0 rounded-full"
          style={{
            background: "var(--red)",
            border: "2px solid var(--ink-2)",
          }}
        />
      </div>

      <div
        className="mobile-panel flex-1 border p-4 transition-all duration-300 group-hover:border-red-600 md:rounded-none md:border md:bg-[var(--ink)] md:p-5"
        style={{
          borderColor: "var(--border)",
          background: "var(--ink)",
        }}
      >
        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3
              className="mb-1 text-[1.7rem] leading-none font-headline md:text-2xl"
              style={{ color: "var(--white)" }}
            >
              {item.company}
            </h3>
            <span className="tag-red">{item.role}</span>
          </div>

          <span
            className="rounded-full border px-3 py-1 text-sm font-headline md:hidden"
            style={{
              color: "var(--white)",
              borderColor: "rgba(255,123,134,0.34)",
              background: "rgba(232,25,44,0.18)",
            }}
          >
            {item.year}
          </span>
        </div>

        <p
          className="mb-4 font-mono"
          style={{
            fontSize: "0.74rem",
            color: "var(--gray-3)",
            lineHeight: 1.8,
          }}
        >
          {item.desc}
        </p>

        <div className="mobile-scroll-row flex gap-2 md:flex-wrap md:overflow-visible md:pb-0">
          {item.tech.split(" · ").map((tech) => (
            <span
              key={tech}
              className="shrink-0"
              style={{
                fontFamily: "'IBM Plex Mono',monospace",
                fontSize: "0.58rem",
                color: "var(--gray-3)",
                letterSpacing: "0.06em",
                padding: "3px 8px",
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
