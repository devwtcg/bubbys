import React from "react";

export function BubbySays({ children, tail = "bl", color = "var(--paper)", tilt = -3, style = {} }) {
  // Tail positions: attach past the bubble's 24px border-radius so the seam
  // lands on the flat portion of the bubble edge, not the curve.
  const tailPos = {
    bl: { left: 32,  bottom: -28 },
    br: { right: 32, bottom: -28, transform: "scaleX(-1)" },
    tl: { left: 32,  top: -28, transform: "scaleY(-1)" },
    tr: { right: 32, top: -28, transform: "scale(-1, -1)" },
  }[tail] || { left: 32, bottom: -28 };

  return (
    <div style={{
      position: "relative",
      display: "inline-block",
      background: color,
      border: "2.5px solid var(--ink)",
      borderRadius: 24,
      padding: "16px 22px",
      // drop-shadow (not box-shadow) so the tail inherits the shadow as part of the painted shape.
      filter: "drop-shadow(5px 5px 0 var(--ink))",
      fontFamily: "var(--hand)",
      fontSize: 24,
      lineHeight: 1.15,
      color: "var(--ink)",
      transform: `rotate(${tilt}deg)`,
      maxWidth: 280,
      ...style,
    }}>
      {children}
      <svg width="34" height="28" viewBox="0 0 34 28" style={{
        position: "absolute",
        overflow: "visible",
        ...tailPos,
      }}>
        {/* Fill extends 3px above SVG box to cover the bubble's 2.5px bottom border. */}
        <path d="M 2 -3 L 32 -3 L 6 26 Z" fill={color} />
        {/* Stroke only the two slanting edges so the seam with the bubble border is clean. */}
        <path d="M 2 0 L 6 26 L 32 0" fill="none" stroke="var(--ink)" strokeWidth="2.5"
              strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function Squiggle({ width = 200, height = 18, color = "var(--orange)", style = {} }) {
  const w = width;
  const segments = Math.max(4, Math.floor(w / 24));
  const dx = w / segments;
  let d = "M 0 " + (height / 2);
  for (let i = 0; i < segments; i++) {
    const cx1 = dx * (i + 0.5);
    const cy1 = i % 2 === 0 ? 0 : height;
    const x2 = dx * (i + 1);
    d += ` Q ${cx1} ${cy1}, ${x2} ${height / 2}`;
  }
  return (
    <svg viewBox={`0 0 ${w} ${height}`} width={w} height={height} style={style}>
      <path d={d} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function HandArrow({ width = 120, height = 60, color = "var(--ink)", style = {}, direction = "right" }) {
  return (
    <svg viewBox="0 0 120 60" width={width} height={height} style={{
      transform: direction === "left" ? "scaleX(-1)" : "none",
      ...style,
    }}>
      <path d="M 5 30 Q 30 10, 55 30 T 105 25"
            fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 105 25 L 95 12 M 105 25 L 92 30"
            fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Tape({ color = "rgba(236,107,44,.6)", w = 80, tilt = -15, style = {} }) {
  return (
    <div style={{
      width: w, height: 22,
      background: color,
      transform: `rotate(${tilt}deg)`,
      backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,.18) 0 8px, transparent 8px 16px)",
      ...style,
    }} />
  );
}

export function BannerStrip({ items, color = "var(--orange)", textColor = "var(--paper)", speed = 28, tilt = -2 }) {
  return (
    <div style={{
      position: "relative",
      background: color,
      color: textColor,
      borderTop: "2.5px solid var(--ink)",
      borderBottom: "2.5px solid var(--ink)",
      padding: "20px 0",
      overflow: "hidden",
      transform: `rotate(${tilt}deg)`,
      marginTop: -8,
      marginBottom: -8,
      marginLeft: "-4%",
      marginRight: "-4%",
      width: "108%",
      zIndex: 2,
    }}>
      <div className="scroll-marquee" style={{
        alignItems: "center",
        animationDuration: `${speed}s`,
      }}>
        {Array.from({ length: 2 }).map((_, k) => (
          <React.Fragment key={k}>
            {items.map((it, i) => (
              <React.Fragment key={i}>
                <span style={{
                  fontFamily: "var(--display)",
                  fontSize: 38,
                  whiteSpace: "nowrap",
                }}>{it}</span>
                <span style={{ fontSize: 24, opacity: .7 }}>●</span>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export function OpenSign({ style = {} }) {
  return (
    <div style={{
      display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 0, ...style,
    }}>
      <div style={{ display: "flex", gap: 30 }}>
        <div style={{ width: 2.5, height: 16, background: "var(--ink)" }} />
        <div style={{ width: 2.5, height: 16, background: "var(--ink)" }} />
      </div>
      <div style={{
        background: "var(--orange)",
        border: "2.5px solid var(--ink)",
        borderRadius: 6,
        padding: "10px 22px",
        fontFamily: "var(--display)",
        fontSize: 28,
        lineHeight: .9,
        boxShadow: "4px 4px 0 var(--ink)",
        color: "var(--paper)",
        letterSpacing: ".06em",
      }}>
        OPEN!
      </div>
    </div>
  );
}

export function SeedScatter({ count = 24, color = "var(--ink)", areaWidth = "100%", areaHeight = "100%", style = {} }) {
  const seeds = React.useMemo(() => {
    const out = [];
    for (let i = 0; i < count; i++) {
      out.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: 1.5 + Math.random() * 2,
        a: Math.random() * 360,
        c: color,
      });
    }
    return out;
  }, [count, color]);
  return (
    <div aria-hidden style={{
      position: "absolute", inset: 0,
      width: areaWidth, height: areaHeight,
      pointerEvents: "none",
      ...style,
    }}>
      {seeds.map((s, i) => (
        <span key={i} style={{
          position: "absolute",
          left: `${s.x}%`, top: `${s.y}%`,
          width: s.r * 2, height: s.r * 1,
          borderRadius: "50%",
          background: s.c,
          transform: `rotate(${s.a}deg)`,
          opacity: .55,
        }} />
      ))}
    </div>
  );
}

export function Pickle({ size = 60, style = {} }) {
  return (
    <svg viewBox="0 0 60 60" width={size} height={size} style={style}>
      <circle cx="30" cy="30" r="28" fill="#7fa056" stroke="var(--ink)" strokeWidth="2.5" />
      <circle cx="30" cy="30" r="22" fill="#a7c878" stroke="var(--ink)" strokeWidth="1.5" />
      {[[20,28],[36,22],[28,38],[40,36],[24,42],[18,20]].map(([x,y],i) => (
        <ellipse key={i} cx={x} cy={y} rx="2.5" ry="4" fill="#dceaaf" stroke="var(--ink)" strokeWidth="1" />
      ))}
    </svg>
  );
}
