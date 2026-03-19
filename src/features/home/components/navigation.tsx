import { useEffect, useState } from "react";
import { useI18n } from "../../../shared/i18n";
import { getHomeContent } from "../data";
import { HomeIcons } from "./icons";

export default function Navigation() {
  const [isReady, setIsReady] = useState(false);
  const { locale, localeOptions, setLocale } = useI18n();
  const { misc, navLinks } = getHomeContent(locale);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setIsReady(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-4 layer transition-all duration-700 md:px-8 md:py-5 ${
          isReady ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(to bottom, rgba(12,12,12,0.92) 0%, rgba(12,12,12,0.58) 55%, transparent 100%)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span
          className="rounded-full border px-3 py-1.5 text-lg tracking-widest font-headline md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-xl"
          style={{
            color: "var(--white)",
            borderColor: "var(--border)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          AZ<span style={{ color: "var(--red)" }}>.</span>
        </span>

        <div className="items-center hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={`#${link.href}`} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div
            className="hidden items-center rounded-full border p-1 md:flex"
            style={{
              borderColor: "var(--border)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            {localeOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => setLocale(option.code)}
                className="rounded-full px-2.5 py-1 text-[0.58rem] font-mono uppercase tracking-[0.16em] transition-colors"
                style={{
                  background:
                    locale === option.code ? "var(--red)" : "transparent",
                  color:
                    locale === option.code ? "var(--white)" : "var(--gray-3)",
                }}
                aria-label={option.nativeLabel}
                aria-pressed={locale === option.code}
              >
                {option.label}
              </button>
            ))}
          </div>

          <a
            href="https://github.com/azadov-azamat"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 hover:border-red-500 md:h-auto md:w-auto md:gap-2 md:rounded-none md:px-4 md:py-2"
            style={{ borderColor: "var(--border)" }}
            aria-label={misc.githubLabel}
          >
            <HomeIcons.github />
            <span className="hidden md:inline">GitHub</span>
          </a>
        </div>
      </nav>

      <div className="mobile-nav-dock md:hidden">
        {navLinks.map((link) => (
          <a key={link.href} href={`#${link.href}`} className="mobile-nav-link">
            {link.label}
          </a>
        ))}
        <div
          className="flex shrink-0 items-center gap-1 rounded-full border px-1 py-1"
          style={{
            borderColor: "var(--border)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          {localeOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              onClick={() => setLocale(option.code)}
              className="rounded-full px-2 py-1 text-[0.52rem] font-mono uppercase tracking-[0.14em]"
              style={{
                background:
                  locale === option.code ? "var(--red)" : "transparent",
                color:
                  locale === option.code ? "var(--white)" : "var(--gray-3)",
              }}
              aria-label={option.nativeLabel}
              aria-pressed={locale === option.code}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
