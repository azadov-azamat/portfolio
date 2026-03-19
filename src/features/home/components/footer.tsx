import { useI18n } from "../../../shared/i18n";
import { getHomeContent } from "../data";

export default function Footer() {
  const { locale } = useI18n();
  const { footer } = getHomeContent(locale);

  return (
    <footer
      className="px-5 py-8 border-t layer md:px-16 md:py-10 lg:px-24"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mobile-panel mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-5 md:flex-row md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0">
        <span className="text-2xl tracking-widest font-headline">
          AZ<span style={{ color: "var(--red)" }}>.</span>
        </span>
        <span
          style={{
            fontFamily: "'IBM Plex Mono',monospace",
            fontSize: "0.62rem",
            color: "var(--gray-3)",
            letterSpacing: "0.1em",
          }}
        >
          {footer.signature}
        </span>
        <span
          style={{
            fontFamily: "'IBM Plex Mono',monospace",
            fontSize: "0.62rem",
            color: "var(--gray-3)",
            letterSpacing: "0.06em",
          }}
        >
          {footer.location} 🇺🇿
        </span>
      </div>
    </footer>
  );
}
