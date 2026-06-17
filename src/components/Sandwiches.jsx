import React from "react";
import { Bagel, SectionHeader, StarBurst, Sticker } from "./atoms.jsx";
import { SeedScatter } from "./fun.jsx";
import { BAGELS, SANDWICHES } from "../data/menu.js";
import { useIsMobile } from "../hooks/useIsMobile.js";

function SpiceMeter({ level }) {
  return (
    <div style={{ display: "inline-flex", gap: 4, alignItems: "center" }}>
      {[0,1,2].map(i => (
        <div key={i} style={{
          width: 10, height: 10, borderRadius: 2,
          background: i < level ? "var(--lox-deep)" : "transparent",
          border: "2px solid var(--ink)",
        }} />
      ))}
    </div>
  );
}

function SandwichCard({ s, onAdd, idx }) {
  const bagel = BAGELS.find(b => b.id === s.bagel) || BAGELS[0];
  const rotation = idx % 2 === 0 ? -2 : 2;
  return (
    <article style={{
      position: "relative",
      background: s.accent,
      border: "2.5px solid var(--ink)",
      borderRadius: 20,
      padding: "32px 28px",
      boxShadow: "8px 8px 0 var(--ink)",
      transform: `rotate(${rotation}deg)`,
      transition: "transform .25s var(--ease)",
      display: "flex", flexDirection: "column",
      gap: 16,
      minHeight: 380,
      overflow: "hidden",
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = "rotate(0) translateY(-6px) scale(1.02)"}
    onMouseLeave={(e) => e.currentTarget.style.transform = `rotate(${rotation}deg)`}
    >
      {idx === 0 && (
        <div style={{ position: "absolute", top: 16, right: -34, transform: "rotate(12deg)" }}>
          <Sticker color="var(--paper)" tilt={0}>BUBBY'S PICK</Sticker>
        </div>
      )}

      <SeedScatter count={14} color="var(--ink)" />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 1 }}>
        <div style={{
          width: 42, height: 42, borderRadius: "50%",
          border: "2.5px solid var(--ink)", background: "var(--paper)",
          display: "grid", placeItems: "center",
          fontFamily: "var(--display)", fontSize: 18,
          boxShadow: "2.5px 2.5px 0 var(--ink)",
        }}>{String(idx + 1).padStart(2, "0")}</div>
        <div style={{ position: "relative", width: 88, height: 64 }}>
          <div style={{ position: "absolute", left: 5, top: 0 }}>
            <Bagel variant={bagel.variant} size={78} color={bagel.color} color2={bagel.color2} />
          </div>
          <div style={{
            position: "absolute", left: 14, top: 26, right: 14, height: 12,
            background: "var(--paper)", border: "2.5px solid var(--ink)", borderRadius: 4,
          }} />
          <div style={{
            position: "absolute", left: 10, top: 34, right: 10, height: 6,
            background: "var(--schmear)", border: "2px solid var(--ink)", borderRadius: 4,
          }} />
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: 16, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ink)", opacity: .75 }}>
            {s.tag}
          </span>
          <span style={{
            fontFamily: "var(--mono)", fontSize: 16, letterSpacing: ".14em",
            textTransform: "uppercase",
            padding: "3px 8px",
            background: "var(--ink)", color: "var(--paper)",
            borderRadius: 4,
          }}>{s.kind === "fish" ? "FISH" : s.kind === "dairy" ? "DAIRY" : "PAREVE"}</span>
        </div>
        <h3 style={{
          fontFamily: "var(--display)", fontSize: 46, lineHeight: .92,
          margin: "10px 0 0", letterSpacing: "-.01em", color: "var(--ink)",
        }}>{s.name}</h3>
      </div>

      <p style={{ margin: 0, fontSize: 16, lineHeight: 1.45, flex: 1, textWrap: "pretty", position: "relative", zIndex: 1, color: "var(--ink)" }}>{s.desc}</p>

      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginTop: "auto",
        paddingTop: 16,
        borderTop: "2.5px dashed var(--ink)",
        position: "relative", zIndex: 1,
      }}>
        <div>
          <div style={{ fontFamily: "var(--display)", fontSize: 34, lineHeight: 1, color: "var(--ink)" }}>
            ${s.price.toFixed(2)}
          </div>
          {s.spice > 0 && (
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 6 }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 16, letterSpacing: ".1em", textTransform: "uppercase" }}>HEAT</span>
              <SpiceMeter level={s.spice} />
            </div>
          )}
        </div>
        <button
          onClick={() => onAdd(s)}
          style={{
            all: "unset",
            cursor: "pointer",
            padding: "10px 16px",
            background: "var(--ink)",
            color: "var(--paper)",
            borderRadius: 999,
            fontFamily: "var(--body)", fontWeight: 800,
            fontSize: 16, letterSpacing: ".1em", textTransform: "uppercase",
            border: "2.5px solid var(--ink)",
            boxShadow: "3px 3px 0 var(--ink)",
            display: "inline-flex", gap: 8, alignItems: "center",
          }}
        >
          Add <span style={{ background: "var(--paper)", color: "var(--ink)", width: 18, height: 18, borderRadius: "50%", display: "grid", placeItems: "center", fontSize: 16 }}>+</span>
        </button>
      </div>
    </article>
  );
}

export function Sandwiches({ onAddSandwich }) {
  const isMobile = useIsMobile();
  return (
    <section id="sandwiches" style={{ padding: "120px 0 80px", position: "relative" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap", marginBottom: isMobile ? 40 : 70 }}>
          <SectionHeader
            num="N° 04"
            kicker="Signature Classics — strictly dairy & fish"
            title={<>Six legends.<br/>One stone oven.</>}
            lede="The store-menu favourites: breakfast classics, wraps, tuna, and lox. Strictly dairy and fish — COR certified, always."
          />
          <div style={{
            position: "relative",
            display: "flex", alignItems: "center",
            transform: "rotate(6deg)",
          }}>
            <StarBurst size={isMobile ? 165 : 200} color="var(--mustard)" />
            <div style={{
              position: "absolute", inset: 0, display: "grid", placeItems: "center",
              textAlign: "center", fontFamily: "var(--display)", fontSize: isMobile ? 25 : 30, lineHeight: 1,
              padding: 32, transform: "rotate(-3deg)",
            }}>
              ALL DAY<br/>BREKKIE!
            </div>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: isMobile ? 24 : 32,
        }}>
          {SANDWICHES.map((s, i) => (
            <SandwichCard key={s.id} s={s} idx={i} onAdd={onAddSandwich} />
          ))}
        </div>
      </div>
    </section>
  );
}
