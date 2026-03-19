import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { officeData } from "../../../shared/data/offices";
import {
  aboutCodeSnippet,
  aboutDetails,
  aboutSummary,
  skills,
} from "../data";
import SectionHeading from "./section-heading";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const codeCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 80%" },
        },
      );

      gsap.fromTo(
        textRef.current,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: { trigger: textRef.current, start: "top 80%" },
        },
      );

      gsap.fromTo(
        codeCardRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: codeCardRef.current, start: "top 80%" },
        },
      );

      if (!skillsRef.current) {
        return;
      }

      const bars =
        skillsRef.current.querySelectorAll<HTMLElement>(".skill-bar-fill");

      bars.forEach((bar, index) => {
        gsap.to(bar, {
          scaleX: Number(bar.dataset.pct ?? 0) / 100,
          duration: 1.2,
          ease: "power3.out",
          delay: index * 0.08,
          scrollTrigger: { trigger: skillsRef.current, start: "top 75%" },
        });
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="px-5 py-24 layer md:px-16 md:py-32 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div ref={titleRef}>
          <SectionHeading label="02 — About" title="MEN" accent="HAQIMDA" />
        </div>

        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-16">
          <div
            ref={textRef}
            className="mobile-panel px-5 py-6 md:rounded-none md:border-0 md:bg-transparent md:p-0"
          >
            <p
              className="mb-8 font-mono leading-relaxed"
              style={{
                fontSize: "0.82rem",
                color: "var(--gray-4)",
                letterSpacing: "0.02em",
              }}
            >
              {aboutSummary}
              <br />
              <br />
              {aboutDetails}
            </p>

            <div className="mobile-scroll-row mb-12 flex gap-3 md:flex-wrap md:overflow-visible md:pb-0">
              {officeData.map((office) => (
                <div
                  key={office.id}
                  className="flex shrink-0 items-center gap-2 border px-3 py-2"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--ink-2)",
                  }}
                >
                  <img
                    src={office.src}
                    alt={office.title}
                    className="h-5 w-5 object-contain grayscale opacity-60"
                  />
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono',monospace",
                      fontSize: "0.6rem",
                      color: "var(--gray-3)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {office.title}
                  </span>
                </div>
              ))}
            </div>

            <div ref={skillsRef} className="space-y-4 md:space-y-5">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-2xl border px-4 py-4 md:rounded-none md:border-0 md:bg-transparent md:p-0"
                  style={{
                    borderColor: "rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <div className="mb-2 flex justify-between">
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: "0.68rem",
                        color: "var(--gray-4)",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: "0.62rem",
                        color: "var(--red)",
                      }}
                    >
                      {skill.pct}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" data-pct={skill.pct} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={codeCardRef} className="relative">
            <div
              className="border p-4 font-mono text-xs leading-relaxed sm:p-5 md:p-6"
              style={{
                borderColor: "var(--border)",
                background: "var(--ink-2)",
                color: "var(--gray-3)",
              }}
            >
              <div
                className="mb-4 flex items-center gap-2 border-b pb-3"
                style={{ borderColor: "var(--border)" }}
              >
                {["#ff5f57", "#ffbd2e", "#28ca41"].map((color) => (
                  <span
                    key={color}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: color,
                      display: "inline-block",
                    }}
                  />
                ))}
                <span
                  className="ml-2"
                  style={{ fontSize: "0.6rem", color: "var(--gray-2)" }}
                >
                  azamat.config.ts
                </span>
              </div>

              <div className="code-editor" aria-label="Azamat config preview">
                {aboutCodeSnippet.map((line, lineIndex) => (
                  <div key={lineIndex} className="code-editor-line">
                    <span className="code-editor-number">
                      {String(lineIndex + 1).padStart(2, "0")}
                    </span>
                    <code className="code-editor-content">
                      {line.length === 0 ? (
                        <span>&nbsp;</span>
                      ) : (
                        line.map((token, tokenIndex) => (
                          <span
                            key={`${lineIndex}-${tokenIndex}-${token.value}`}
                            className={
                              token.type
                                ? `code-token code-token-${token.type}`
                                : "code-token"
                            }
                          >
                            {token.value}
                          </span>
                        ))
                      )}
                    </code>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="hidden md:block"
              style={{
                position: "absolute",
                top: -8,
                right: -8,
                width: 32,
                height: 32,
                background: "var(--red)",
              }}
            />
            <div
              className="hidden md:block"
              style={{
                position: "absolute",
                bottom: -8,
                left: -8,
                width: 16,
                height: 16,
                border: "2px solid var(--red)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
