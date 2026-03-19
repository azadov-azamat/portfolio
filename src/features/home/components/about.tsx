import { useI18n } from "../../../shared/i18n";
import { officeData } from "../../../shared/data/offices";
import { useReveal } from "../../../shared/hooks/use-reveal";
import { getAboutCodeSnippet, getHomeContent } from "../data";
import SectionHeading from "./section-heading";

export default function About() {
  const titleReveal = useReveal<HTMLDivElement>();
  const textReveal = useReveal<HTMLDivElement>();
  const skillsReveal = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const codeReveal = useReveal<HTMLDivElement>();
  const { locale } = useI18n();
  const { about, sections, skills } = getHomeContent(locale);
  const aboutCodeSnippet = getAboutCodeSnippet(locale);

  return (
    <section
      id="about"
      className="content-section px-5 py-24 layer md:px-16 md:py-32 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div
          ref={titleReveal.ref}
          className={`reveal reveal-left ${titleReveal.isVisible ? "is-visible" : ""}`}
        >
          <SectionHeading {...sections.about} />
        </div>

        <div className="grid items-start gap-6 md:grid-cols-2 md:gap-16">
          <div
            ref={textReveal.ref}
            className={`mobile-panel min-w-0 px-5 py-6 reveal reveal-left md:rounded-none md:border-0 md:bg-transparent md:p-0 ${
              textReveal.isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            <p
              className="mb-8 font-mono text-[0.76rem] leading-7 sm:text-[0.82rem] sm:leading-relaxed"
              style={{
                color: "var(--gray-4)",
                letterSpacing: "0.02em",
              }}
            >
              {about.summary}
              <br />
              <br />
              {about.details}
            </p>

            <div className="mb-12 flex flex-wrap gap-3">
              {officeData.map((office) => (
                <div
                  key={office.id}
                  className="flex max-w-full items-center gap-2 border px-3 py-2"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--ink-2)",
                  }}
                >
                  {office.src ? (
                    <img
                      src={office.src}
                      alt={office.title}
                      className="h-5 w-5 object-contain grayscale opacity-60"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-5 w-5 items-center justify-center rounded-sm"
                      style={{
                        background:
                          office.badgeBackground ??
                          "linear-gradient(135deg, #525252 0%, #a3a3a3 100%)",
                        color: office.badgeColor ?? "#ffffff",
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: "0.52rem",
                        lineHeight: 1,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {office.badgeLabel ?? office.title.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                  <span
                    className="break-words leading-4"
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

            <div ref={skillsReveal.ref} className="space-y-4 md:space-y-5">
              {skills.map((skill, index) => (
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
                        color: "var(--red-text)",
                      }}
                    >
                      {skill.pct}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className={`skill-bar-fill ${
                        skillsReveal.isVisible ? "is-filled" : ""
                      }`}
                      style={{
                        ["--skill-pct" as string]: `${skill.pct / 100}`,
                        transitionDelay: `${index * 90}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={codeReveal.ref}
            className={`relative min-w-0 reveal reveal-right ${
              codeReveal.isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "180ms" }}
          >
            <div
              className="overflow-hidden rounded-[28px] border p-4 font-mono text-xs leading-relaxed sm:p-5 md:rounded-none md:p-6"
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
                  style={{ fontSize: "0.6rem", color: "var(--gray-3)" }}
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
