import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { experienceItems } from "../data";
import SectionHeading from "./section-heading";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 82%" },
        },
      );

      if (!listRef.current) {
        return;
      }

      gsap.fromTo(
        Array.from(listRef.current.children),
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: listRef.current, start: "top 78%" },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="px-5 py-24 layer md:px-16 md:py-32 lg:px-24"
      style={{ background: "var(--ink-2)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div ref={titleRef}>
          <SectionHeading
            label="03 — Experience"
            title="ISH"
            accent="TAJRIBAM"
          />
        </div>

        <div ref={listRef} className="relative">
          <div
            className="absolute left-[88px] top-0 bottom-0 hidden w-px md:block"
            style={{ background: "var(--border)" }}
          />

          {experienceItems.map((item) => (
            <div
              key={`${item.year}-${item.company}`}
              className="group relative mb-5 flex gap-0 md:mb-10 md:gap-12"
            >
              <div
                className="hidden flex-shrink-0 flex-col items-end md:flex"
                style={{ width: 80 }}
              >
                <span
                  className="text-2xl font-headline"
                  style={{ color: "var(--red)" }}
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
                      color: "var(--red)",
                      borderColor: "rgba(232,25,44,0.24)",
                      background: "rgba(232,25,44,0.08)",
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
                        color: "var(--gray-2)",
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
          ))}
        </div>
      </div>
    </section>
  );
}
