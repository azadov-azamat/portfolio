import { useEffect, useState } from "react";
import { useI18n } from "../../../shared/i18n";
import { usePrefersReducedMotion } from "../../../shared/hooks/use-prefers-reduced-motion";
import { getHomeContent } from "../data";
import { HomeIcons } from "./icons";

export default function Hero() {
  const [isReady, setIsReady] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isRoleVisible, setIsRoleVisible] = useState(false);
  const { locale } = useI18n();
  const prefersReducedMotion = usePrefersReducedMotion();
  const { hero, heroDescription, heroRoles, heroStats } = getHomeContent(locale);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setIsReady(true);
      setIsRoleVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    setRoleIndex(0);
    setIsRoleVisible(true);
  }, [locale]);

  useEffect(() => {
    if (prefersReducedMotion || heroRoles.length < 2) {
      setIsRoleVisible(true);
      return;
    }

    let swapTimeout = 0;
    const intervalId = window.setInterval(() => {
      setIsRoleVisible(false);
      swapTimeout = window.setTimeout(() => {
        setRoleIndex((currentIndex) => (currentIndex + 1) % heroRoles.length);
        setIsRoleVisible(true);
      }, 180);
    }, 2600);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(swapTimeout);
    };
  }, [heroRoles.length, locale, prefersReducedMotion]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-28 pt-24 layer sm:px-7 md:min-h-screen md:px-16 md:pb-16 md:pt-20 lg:px-24"
    >
      <div
        className={`pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none transition-opacity duration-1000 md:block ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
        style={{
          fontSize: "clamp(180px,25vw,380px)",
          fontFamily: "'Bebas Neue',sans-serif",
          color: "rgba(255,255,255,0.02)",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        {hero.backgroundLabel}
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <div className="hero-content-shell">
          <div
            className={`mb-8 origin-left transition-transform duration-[900ms] md:mb-10 ${
              isReady ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ height: 2, background: "var(--red)", width: "5rem" }}
          />

          <div
            className={`mb-4 flex flex-wrap items-center gap-3 transition-all duration-700 ${
              isReady ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            <p className="section-label mb-0">{hero.eyebrow}</p>
            <span className="mobile-hero-chip">{hero.chip}</span>
          </div>

          <h1
            className={`mb-4 max-w-full font-headline transition-all duration-1000 ${
              isReady ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{
              fontSize: "clamp(2.95rem, 19vw, 9rem)",
              lineHeight: 0.9,
              color: "var(--white)",
              letterSpacing: "0.01em",
              transitionDelay: "180ms",
            }}
          >
            AZAMAT
            <br />
            <span style={{ color: "var(--red)" }}>AZADOV</span>
          </h1>

          <div
            className={`mb-5 min-h-[1.75rem] font-mono transition-all duration-500 md:mb-6 ${
              isReady ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{
              fontSize: "clamp(0.86rem,4vw,1rem)",
              color: "var(--gray-4)",
              letterSpacing: "0.08em",
              transitionDelay: "260ms",
            }}
            aria-live="polite"
          >
            <span
              className={`inline-block transition-all duration-200 ${
                isRoleVisible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
              }`}
            >
              {heroRoles[roleIndex]}
            </span>
          </div>

          <p
            className={`mb-8 max-w-lg font-mono leading-relaxed transition-all duration-700 md:mb-10 ${
              isReady ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{
              fontSize: "clamp(0.78rem,3.4vw,0.82rem)",
              color: "var(--gray-3)",
              letterSpacing: "0.03em",
              transitionDelay: "340ms",
            }}
          >
            {heroDescription}
          </p>

          <div
            className={`flex flex-col gap-3 transition-all duration-700 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 ${
              isReady ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "420ms" }}
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
              {hero.primaryCta} <HomeIcons.arrow />
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
              {hero.secondaryCta}
            </a>
          </div>

          <div
            className={`mt-10 grid grid-cols-2 gap-3 transition-all duration-700 md:mt-16 md:flex md:flex-wrap md:gap-10 ${
              isReady ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "520ms" }}
          >
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
          {hero.scrollLabel}
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
