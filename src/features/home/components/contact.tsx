import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { socialLinks } from "../data";
import { HomeIcons } from "./icons";
import SectionHeading from "./section-heading";

const socialIcons = {
  github: <HomeIcons.github />,
  telegram: <HomeIcons.telegram />,
  linkedin: <HomeIcons.linkedin />,
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const footerRowRef = useRef<HTMLDivElement>(null);

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

      if (cardsRef.current) {
        gsap.fromTo(
          Array.from(cardsRef.current.children),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
          },
        );
      }

      gsap.fromTo(
        footerRowRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: footerRowRef.current, start: "top 88%" },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="px-5 py-24 layer md:px-16 md:py-32 lg:px-24"
      style={{ background: "var(--ink-2)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div ref={titleRef}>
          <SectionHeading
            label="05 — Contact"
            title="BOG'LA"
            accent="NISH"
            joiner=""
          />
        </div>

        <p
          className="mb-10 max-w-xl font-mono md:mb-14"
          style={{
            fontSize: "0.78rem",
            color: "var(--gray-3)",
            lineHeight: 1.9,
            letterSpacing: "0.02em",
          }}
        >
          Yangi loyiha, hamkorlik yoki shunchaki tanishish uchun — quyidagi
          platformalar orqali bog&apos;laning.
        </p>

        <div
          ref={cardsRef}
          className="mb-12 grid grid-cols-1 gap-4 md:mb-16 md:grid-cols-3 md:gap-5"
        >
          {socialLinks.map((link) => (
            <a
              key={link.key}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-panel group relative block overflow-hidden border p-5 transition-all duration-400 md:rounded-none md:bg-[var(--ink)] md:p-7"
              style={{
                borderColor: "var(--border)",
                background: "var(--ink)",
                textDecoration: "none",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.borderColor = link.hover;
                event.currentTarget.style.transform = "translateY(-6px)";
                event.currentTarget.style.boxShadow = `0 24px 48px rgba(0,0,0,0.5), 0 0 32px ${link.hover}22`;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.borderColor = "var(--border)";
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="mb-5 flex items-center justify-between md:mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center border"
                    style={{
                      borderColor: "var(--border)",
                      color: link.accent,
                      background: "var(--ink-2)",
                    }}
                  >
                    {socialIcons[link.icon]}
                  </div>
                  <span
                    className="text-[1.8rem] tracking-wide font-headline md:text-2xl"
                    style={{ color: "var(--white)" }}
                  >
                    {link.label}
                  </span>
                </div>
                <span
                  style={{
                    color: "var(--gray-2)",
                    transition: "color 0.2s",
                    display: "flex",
                  }}
                  className="group-hover:text-white"
                >
                  <HomeIcons.arrowUpRight />
                </span>
              </div>

              <div
                className="mb-3 font-mono"
                style={{
                  fontSize: "0.82rem",
                  color: link.accent,
                  letterSpacing: "0.04em",
                }}
              >
                {link.handle}
              </div>

              <div
                className="font-mono"
                style={{
                  fontSize: "0.65rem",
                  color: "var(--gray-2)",
                  letterSpacing: "0.05em",
                  lineHeight: 1.7,
                }}
              >
                {link.desc}
              </div>

              <div
                className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: link.hover }}
              />
            </a>
          ))}
        </div>

        <div
          ref={footerRowRef}
          className="mobile-panel flex flex-col items-start justify-between gap-5 border-t p-5 pt-8 sm:flex-row sm:items-center md:rounded-none md:border-x-0 md:border-b-0 md:bg-transparent md:p-0 md:pt-10"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-4">
            <span style={{ color: "var(--red)", display: "flex" }}>
              <HomeIcons.map />
            </span>
            <div>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: "0.58rem",
                  color: "var(--gray-2)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 2,
                }}
              >
                Manzil
              </div>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: "0.75rem",
                  color: "var(--gray-4)",
                }}
              >
                Toshkent, O&apos;zbekiston 🇺🇿
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4ade80",
                display: "inline-block",
                boxShadow: "0 0 8px #4ade8088",
              }}
            />
            <span
              style={{
                fontFamily: "'IBM Plex Mono',monospace",
                fontSize: "0.68rem",
                color: "#4ade80",
                letterSpacing: "0.08em",
              }}
            >
              Yangi loyihalarga ochiq
            </span>
          </div>

          <div
            style={{
              fontFamily: "'IBM Plex Mono',monospace",
              fontSize: "0.62rem",
              color: "var(--gray-2)",
              letterSpacing: "0.08em",
            }}
          >
            Javob vaqti: &lt; 24 soat
          </div>
        </div>
      </div>
    </section>
  );
}
