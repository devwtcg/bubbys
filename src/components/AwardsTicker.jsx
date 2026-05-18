import React from "react";

export function AwardsTicker() {
  const items = [
    "Best Bagel — NOW Magazine",
    "Top Choice — 2018",
    "Toronto Life — top 10",
    "BlogTO — best in the city",
    "10× Award Winner",
    "Reader's Choice — North York",
    "Featured on CBC",
    "Bathurst's pride since 2011",
  ];
  return (
    <section style={{
      background: "var(--ink)", color: "var(--paper)",
      padding: "26px 0",
      borderTop: "2.5px solid var(--ink)",
      borderBottom: "2.5px solid var(--ink)",
      overflow: "hidden",
    }}>
      <div className="scroll-marquee" style={{ alignItems: "center" }}>
        {Array.from({ length: 2 }).map((_, k) => (
          <React.Fragment key={k}>
            {items.map((it, i) => (
              <React.Fragment key={i}>
                <span style={{
                  fontFamily: "var(--display)",
                  fontSize: 36,
                  whiteSpace: "nowrap",
                }}>{it}</span>
                <span style={{ color: "var(--mustard)", fontSize: 28 }}>✦</span>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
