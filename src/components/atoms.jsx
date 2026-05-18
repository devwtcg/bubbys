import React from "react";

export function Bagel({ variant = "everything", size = 80, color = "#d4a55a", color2 = "#a06c2c", style = {}, className = "" }) {
  return (
    <span
      className={`bagel ${variant} ${className}`}
      style={{
        width: size,
        height: size,
        "--bagel-c": color,
        "--bagel-c2": color2,
        ...style,
      }}
    />
  );
}

export function Sticker({ children, color = "var(--mustard)", tilt = -3, style = {}, ink = "var(--ink)" }) {
  return (
    <span
      className="sticker"
      style={{ background: color, color: ink, "--tilt": `${tilt}deg`, ...style }}
    >
      {children}
    </span>
  );
}

export function Btn({ children, variant = "dark", href = "#", icon = "→", as = "a", onClick, style = {} }) {
  const cls = variant === "yellow" ? "btn btn-yellow"
            : variant === "pink"   ? "btn btn-pink"
            : variant === "ghost"  ? "btn btn-ghost"
            : "btn";
  const Tag = as;
  return (
    <Tag className={cls} href={href} onClick={onClick} style={style}>
      <span>{children}</span>
      {icon && <span className="arrow">{icon}</span>}
    </Tag>
  );
}

export function Eyebrow({ num, children }) {
  return (
    <div className="eyebrow">
      {num && <span style={{ fontFeatureSettings: '"tnum"' }}>{num}</span>}
      <span>{children}</span>
    </div>
  );
}

export function StarBurst({ size = 120, points = 16, color = "var(--mustard)", className = "", style = {} }) {
  const cx = 50, cy = 50, rOut = 50, rIn = 38;
  const step = (Math.PI * 2) / (points * 2);
  let d = "";
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? rOut : rIn;
    const a = i * step - Math.PI / 2;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    d += (i === 0 ? "M" : "L") + x.toFixed(2) + "," + y.toFixed(2) + " ";
  }
  d += "Z";
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      style={style}
    >
      <path d={d} fill={color} stroke="var(--ink)" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

export function CurvedText({ text, size = 200, radius = 80, color = "var(--ink)", fontSize = 14, className = "" }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className}>
      <defs>
        <path id="curve-path" d={`M 100,100 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`} />
      </defs>
      <text
        fill={color}
        style={{
          fontFamily: "var(--body)",
          fontWeight: 800,
          fontSize,
          letterSpacing: ".18em",
          textTransform: "uppercase",
        }}
      >
        <textPath href="#curve-path" startOffset="0">{text}</textPath>
      </text>
    </svg>
  );
}

export function SectionHeader({ num, kicker, title, lede, align = "left" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18, textAlign: align }}>
      {kicker && <Eyebrow num={num}>{kicker}</Eyebrow>}
      <h2 className="h-section" style={{ alignSelf: align === "center" ? "center" : "flex-start", maxWidth: 1100 }}>{title}</h2>
      {lede && <p style={{ maxWidth: 640, alignSelf: align === "center" ? "center" : "flex-start", fontSize: 19, lineHeight: 1.45, margin: 0 }}>{lede}</p>}
    </div>
  );
}
