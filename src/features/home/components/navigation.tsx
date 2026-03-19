import { useEffect, useState } from "react";
import { useI18n } from "../../../shared/i18n";
import { getHomeContent } from "../data";
import { HomeIcons } from "./icons";

type LocaleSwitcherProps = {
  locale: ReturnType<typeof useI18n>["locale"];
  localeOptions: ReturnType<typeof useI18n>["localeOptions"];
  setLocale: ReturnType<typeof useI18n>["setLocale"];
  className: string;
  buttonClassName: string;
  textClassName: string;
};

function LocaleSwitcher({
  locale,
  localeOptions,
  setLocale,
  className,
  buttonClassName,
  textClassName,
}: LocaleSwitcherProps) {
  const activeLocaleIndex = Math.max(
    localeOptions.findIndex((option) => option.code === locale),
    0,
  );

  return (
    <div
      className={className}
      style={{
        borderColor: "var(--border)",
        background: "rgba(255,255,255,0.03)",
        gridTemplateColumns: `repeat(${localeOptions.length}, minmax(0, 1fr))`,
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-1 left-1 rounded-full"
        style={{
          width: `calc((100% - 0.5rem) / ${localeOptions.length})`,
          transform: `translateX(${activeLocaleIndex * 100}%)`,
          background: "var(--red)",
          boxShadow: "0 10px 24px rgba(232, 25, 44, 0.28)",
          transition:
            "transform 320ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 320ms ease",
          willChange: "transform",
        }}
      />

      {localeOptions.map((option) => {
        const isActive = locale === option.code;

        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLocale(option.code)}
            className={buttonClassName}
            style={{
              color: isActive ? "var(--white)" : "var(--gray-3)",
              textShadow: isActive ? "0 0 14px rgba(255,255,255,0.18)" : "none",
            }}
            aria-label={option.nativeLabel}
            aria-pressed={isActive}
          >
            <span className={textClassName}>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}

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
          <LocaleSwitcher
            locale={locale}
            localeOptions={localeOptions}
            setLocale={setLocale}
            className="relative hidden overflow-hidden rounded-full border p-1 md:inline-grid"
            buttonClassName="relative z-10 rounded-full px-2.5 py-1 text-[0.58rem] font-mono uppercase tracking-[0.16em] transition-[color,text-shadow,transform] duration-300 hover:scale-[0.98]"
            textClassName="block transition-transform duration-300"
          />

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
        <LocaleSwitcher
          locale={locale}
          localeOptions={localeOptions}
          setLocale={setLocale}
          className="relative inline-grid shrink-0 overflow-hidden rounded-full border px-1 py-1"
          buttonClassName="relative z-10 rounded-full px-2 py-1 text-[0.52rem] font-mono uppercase tracking-[0.14em] transition-[color,text-shadow,transform] duration-300 active:scale-95"
          textClassName="block transition-transform duration-300"
        />
      </div>
    </>
  );
}
