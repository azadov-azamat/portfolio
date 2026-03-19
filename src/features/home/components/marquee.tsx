import { useI18n } from "../../../shared/i18n";
import { getHomeContent } from "../data";

export default function Marquee() {
  const { locale } = useI18n();
  const { marqueeItems } = getHomeContent(locale);
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className="overflow-hidden border-y py-6 layer"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="marquee-track flex items-center gap-12">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex flex-shrink-0 items-center gap-3 font-mono text-sm"
            style={{
              color: index % 3 === 0 ? "var(--red-text)" : "var(--gray-3)",
              letterSpacing: "0.1em",
            }}
          >
            <span style={{ color: "var(--red-text)", opacity: 0.75 }}>◆</span>{" "}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
