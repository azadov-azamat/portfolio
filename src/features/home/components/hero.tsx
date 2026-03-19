import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { heroDescription, heroRoles, heroStats } from "../data";
import { HomeIcons } from "./icons";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const backgroundLabelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ delay: 0.4 });
    const timeouts: number[] = [];
    let isActive = true;

    timeline
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.9, ease: "power4.inOut" },
      )
      .fromTo(
        nameRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.4",
      )
      .fromTo(
        roleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.5",
      )
      .fromTo(
        descRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4",
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3",
      )
      .fromTo(
        backgroundLabelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.3",
      );

    const timeoutId = window.setTimeout(() => {
      let index = 0;

      const animateRole = () => {
        if (!roleRef.current || !isActive) {
          return;
        }

        gsap.to(roleRef.current, {
          duration: 0.6,
          text: { value: heroRoles[index % heroRoles.length], delimiter: "" },
          ease: "none",
          onComplete: () => {
            index += 1;
            const nextTimeout = window.setTimeout(animateRole, 2200);
            timeouts.push(nextTimeout);
          },
        });
      };

      animateRole();
    }, 2400);

    return () => {
      isActive = false;
      window.clearTimeout(timeoutId);
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-28 pt-24 layer sm:px-7 md:min-h-screen md:px-16 md:pb-16 md:pt-20 lg:px-24"
    >
      <div
        ref={backgroundLabelRef}
        className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none md:block"
        style={{
          fontSize: "clamp(180px,25vw,380px)",
          fontFamily: "'Bebas Neue',sans-serif",
          color: "rgba(255,255,255,0.02)",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        DEV
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <div className="hero-content-shell">
          <div
            ref={lineRef}
            className="mb-8 origin-left md:mb-10"
            style={{ height: 2, background: "var(--red)", width: "5rem" }}
          />

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <p className="section-label mb-0">Portfolio · 2025</p>
            <span className="mobile-hero-chip">Mobile · Web · AI</span>
          </div>

          <h1
            ref={nameRef}
            className="mb-4 max-w-full font-headline"
            style={{
              fontSize: "clamp(2.95rem, 19vw, 9rem)",
              lineHeight: 0.9,
              color: "var(--white)",
              letterSpacing: "0.01em",
            }}
          >
            AZAMAT
            <br />
            <span style={{ color: "var(--red)" }}>AZADOV</span>
          </h1>

          <div
            ref={roleRef}
            className="mb-5 min-h-[1.75rem] font-mono md:mb-6"
            style={{
              fontSize: "clamp(0.86rem,4vw,1rem)",
              color: "var(--gray-4)",
              letterSpacing: "0.08em",
            }}
          >
            Full-Stack Developer
          </div>

          <p
            ref={descRef}
            className="mb-8 max-w-lg font-mono leading-relaxed md:mb-10"
            style={{
              fontSize: "clamp(0.78rem,3.4vw,0.82rem)",
              color: "var(--gray-3)",
              letterSpacing: "0.03em",
            }}
          >
            {heroDescription}
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <a
              href="#projects"
              className="flex w-full items-center justify-center gap-2 px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-300 sm:w-auto"
              style={{
                background: "var(--red)",
                color: "var(--white)",
                letterSpacing: "0.14em",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.background = "#c41020";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.background = "var(--red)";
              }}
            >
              Loyihalar <HomeIcons.arrow />
            </a>

            <a
              href="#contact"
              className="flex w-full items-center justify-center gap-2 border px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-300 sm:w-auto"
              style={{
                borderColor: "var(--border)",
                color: "var(--gray-4)",
                letterSpacing: "0.14em",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.borderColor = "rgba(232,25,44,0.5)";
                event.currentTarget.style.color = "var(--white)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.borderColor = "var(--border)";
                event.currentTarget.style.color = "var(--gray-4)";
              }}
            >
              Bog&apos;lanish
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:mt-16 md:flex md:flex-wrap md:gap-10">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="hero-stat-card md:border-0 md:bg-transparent md:p-0"
              >
                <div
                  className="text-3xl font-headline md:text-4xl"
                  style={{ color: "var(--red)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="mt-1 font-mono text-[0.64rem] uppercase md:text-xs"
                  style={{ color: "var(--gray-3)", letterSpacing: "0.1em" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        style={{ opacity: 0.35 }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono',monospace",
            fontSize: "0.55rem",
            letterSpacing: "0.2em",
            color: "var(--gray-3)",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "var(--border)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "var(--red)",
              animation: "scrollDrop 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
