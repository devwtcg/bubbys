import React from "react";

function LaurelIcon() {
  return (
    <svg
      className="award-laurel"
      viewBox="0 0 24 48"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M18 39C9 34 6 24 10 13" />
      <path d="M12 31c-4 0-7-2-8-5 4-1 7 0 9 3" />
      <path d="M10 23c-3-1-5-4-5-7 4 0 7 2 8 5" />
      <path d="M12 16c-2-3-2-6 0-9 3 2 4 5 3 8" />
    </svg>
  );
}

export function AwardsTicker() {
  const items = [
    { label: "Best Bagel \u2014 NOW Magazine", awarded: true },
    { label: "Top Choice \u2014 2018", awarded: true },
    { label: "Toronto Life \u2014 top 10", awarded: false },
    { label: "BlogTO \u2014 best in the city", awarded: true },
    { label: "10\u00D7 Award Winner", awarded: true },
    { label: "Reader's Choice \u2014 North York", awarded: true },
    { label: "Featured on CBC", awarded: false },
    { label: "Bathurst's pride since 2011", awarded: false },
  ];

  return (
    <section aria-label="Awards and recognition" style={{
      background: "var(--ink)", color: "var(--paper)",
      padding: "26px 0",
      borderTop: "2.5px solid var(--ink)",
      borderBottom: "2.5px solid var(--ink)",
      overflow: "hidden",
    }}>
      <div className="scroll-marquee" style={{ alignItems: "center" }}>
        {Array.from({ length: 2 }).map((_, k) => (
          <React.Fragment key={k}>
            {items.map((item, i) => (
              <React.Fragment key={i}>
                <span className={item.awarded ? "award-mention" : undefined} style={{
                  fontFamily: "var(--display)",
                  fontSize: 36,
                  whiteSpace: "nowrap",
                }}>
                  {item.awarded && <LaurelIcon />}
                  {item.label}
                  {item.awarded && <LaurelIcon />}
                </span>
                <span aria-hidden="true" style={{ color: "var(--mustard)", fontSize: 28 }}>{"\u2726"}</span>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
