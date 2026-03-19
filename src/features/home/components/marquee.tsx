import { marqueeItems } from "../data";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className="py-6 overflow-hidden layer border-y"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="flex items-center gap-12 marquee-track">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center flex-shrink-0 gap-3 font-mono text-sm"
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
