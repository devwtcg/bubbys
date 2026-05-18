import React from "react";
import { Bagel, Btn, Eyebrow, SectionHeader, Sticker } from "./atoms.jsx";
import { BubbySays } from "./fun.jsx";
import { BAGELS, SCHMEARS } from "../data/menu.js";

function BagelTile({ b, selected, onClick, onAdd }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        padding: "20px 12px 18px",
        background: selected ? "var(--mustard)" : "transparent",
        border: selected ? "2.5px solid var(--ink)" : "2.5px dashed transparent",
        borderRadius: 18,
        boxShadow: selected ? "5px 5px 0 var(--ink)" : "none",
        transition: "all .2s var(--ease)",
        position: "relative",
      }}
      onMouseEnter={(e) => { if (!selected) e.currentTarget.style.border = "2.5px dashed var(--ink)"; }}
      onMouseLeave={(e) => { if (!selected) e.currentTarget.style.border = "2.5px dashed transparent"; }}
    >
      <Bagel variant={b.variant} size={92} color={b.color} color2={b.color2} />
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "var(--display)", fontSize: 22, lineHeight: 1 }}>{b.name}</div>
        <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".1em", marginTop: 4 }}>
          ${b.price.toFixed(2)}
          {b.note && <span style={{ marginLeft: 8, opacity: .55, textTransform: "uppercase" }}>· {b.note}</span>}
        </div>
      </div>
      {selected && (
        <div style={{ position: "absolute", top: -10, right: -10 }}>
          <Sticker color="var(--paper)" tilt={8}>PICKED</Sticker>
        </div>
      )}
      <button
        onClick={(e) => { e.stopPropagation(); onAdd(); }}
        title="Add to order"
        style={{
          all: "unset",
          position: "absolute",
          bottom: 8, right: 8,
          width: 28, height: 28, borderRadius: "50%",
          background: "var(--ink)", color: "var(--paper)",
          display: "grid", placeItems: "center",
          fontSize: 16, cursor: "pointer",
          border: "2px solid var(--ink)",
        }}
      >+</button>
    </div>
  );
}

function SchmearPot({ s, selected, onClick }) {
  return (
    <button onClick={onClick} style={{
      all: "unset",
      cursor: "pointer",
      display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
      padding: "16px 12px 14px",
      background: selected ? "var(--lox)" : "transparent",
      border: selected ? "2.5px solid var(--ink)" : "2.5px dashed transparent",
      borderRadius: 14,
      transition: "all .2s",
      position: "relative",
      minWidth: 110,
    }}
      onMouseEnter={(e) => { if (!selected) e.currentTarget.style.border = "2.5px dashed var(--ink)"; }}
      onMouseLeave={(e) => { if (!selected) e.currentTarget.style.border = "2.5px dashed transparent"; }}
    >
      <div style={{
        width: 76, height: 60,
        borderRadius: "8px 8px 28px 28px / 8px 8px 12px 12px",
        background: s.color,
        border: "2.5px solid var(--ink)",
        position: "relative",
        boxShadow: "3px 3px 0 var(--ink)",
      }}>
        <div style={{
          position: "absolute", top: -8, left: -4, right: -4,
          height: 14, background: s.color,
          border: "2.5px solid var(--ink)", borderRadius: 6,
        }} />
        <div style={{ position:"absolute", top: -22, left: "50%", transform: "translateX(-50%) rotate(-3deg)", fontFamily: "var(--mono)", fontSize: 9, letterSpacing: ".06em", background: "var(--paper)", padding: "2px 6px", border: "2px solid var(--ink)", whiteSpace: "nowrap" }}>
          BUBBY'S
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "var(--body)", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: ".06em" }}>{s.name}</div>
        <div style={{ fontFamily: "var(--mono)", fontSize: 11, marginTop: 2 }}>${s.price.toFixed(2)}</div>
      </div>
    </button>
  );
}

export function BuildABagel({ onAddCombo }) {
  const [bagelId, setBagelId] = React.useState("everything");
  const [schmearId, setSchmearId] = React.useState("plain");

  const bagel = BAGELS.find(b => b.id === bagelId);
  const schmear = SCHMEARS.find(s => s.id === schmearId);
  const total = bagel.price + schmear.price;

  return (
    <section id="menu" style={{ padding: "100px 0 60px", background: "var(--paper-2)", borderTop: "2.5px solid var(--ink)", borderBottom: "2.5px solid var(--ink)" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap", marginBottom: 60 }}>
          <SectionHeader
            num="N° 03"
            kicker="Pick. Schmear. Eat."
            title={<>Build your<br/>perfect bagel.</>}
          />
          <BubbySays color="var(--orange)" tilt={-3} tail="br" style={{ maxWidth: 280 }}>
            "Take two, they're small!"<br/>
            <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", display: "inline-block", marginTop: 8, color: "var(--paper)" }}>— Bubby, every time</span>
          </BubbySays>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: 40,
          alignItems: "stretch",
        }}>
          <div style={{
            background: "var(--schmear)",
            border: "2.5px solid var(--ink)",
            borderRadius: 28,
            padding: 40,
            boxShadow: "10px 10px 0 var(--ink)",
            position: "relative",
            overflow: "hidden",
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 24,
            minHeight: 460,
          }}>
            <div style={{
              position: "absolute", top: 20, left: 20,
              fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase",
            }}>LIVE PREVIEW</div>
            <Sticker color="var(--mustard)" tilt={5} style={{ position: "absolute", top: 20, right: 20 }}>
              READY IN 6 MIN
            </Sticker>

            <div style={{ position: "relative", width: 280, height: 280 }}>
              <div style={{ position: "absolute", inset: 0 }}>
                <Bagel variant={bagel.variant} size={280} color={bagel.color} color2={bagel.color2} />
              </div>
              <div style={{
                position: "absolute",
                left: "50%", top: "50%",
                transform: "translate(-50%, -50%)",
                width: 100, height: 100,
                borderRadius: "60% 70% 50% 80% / 70% 50% 80% 50%",
                background: schmear.color,
                border: "2.5px solid var(--ink)",
                boxShadow: "inset 0 -6px 8px rgba(0,0,0,.12)",
                transition: "all .25s var(--ease)",
              }} />
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--display)", fontSize: 36, lineHeight: 1 }}>
                {bagel.name} + {schmear.name}
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: ".14em", marginTop: 8, textTransform: "uppercase" }}>
                ${total.toFixed(2)} · made-to-order
              </div>
            </div>

            <Btn variant="dark" icon="+" onClick={() => onAddCombo(bagel, schmear)}>
              Add to ticket
            </Btn>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                <Eyebrow num="01">Pick your bagel</Eyebrow>
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, opacity: .6 }}>20 to choose from</span>
              </div>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 4,
                padding: 14,
                background: "var(--schmear)",
                border: "2.5px solid var(--ink)",
                borderRadius: 18,
              }}>
                {BAGELS.slice(0, 12).map(b => (
                  <button
                    key={b.id}
                    onClick={() => setBagelId(b.id)}
                    title={b.name}
                    style={{
                      all: "unset",
                      cursor: "pointer",
                      display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                      padding: 8,
                      borderRadius: 10,
                      background: bagelId === b.id ? "var(--mustard)" : "transparent",
                      border: bagelId === b.id ? "2px solid var(--ink)" : "2px solid transparent",
                      transition: "background .15s",
                    }}
                  >
                    <Bagel variant={b.variant} size={48} color={b.color} color2={b.color2} />
                    <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".06em" }}>{b.name}</span>
                  </button>
                ))}
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, marginTop: 8, opacity: .6, textTransform: "uppercase", letterSpacing: ".1em" }}>
                + 8 more in the full menu ↓ · Baker's dozen $12
              </div>
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                <Eyebrow num="02">Pick your schmear</Eyebrow>
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, opacity: .6 }}>house made</span>
              </div>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
                gap: 8, padding: 14,
                background: "var(--schmear)",
                border: "2.5px solid var(--ink)",
                borderRadius: 18,
              }}>
                {SCHMEARS.map(s => (
                  <SchmearPot key={s.id} s={s} selected={schmearId === s.id} onClick={() => setSchmearId(s.id)} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 100 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28, gap: 24, flexWrap: "wrap" }}>
            <h3 className="h-sub">The whole<br/>bagel lineup.</h3>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", opacity: .7 }}>
                All baked daily · $1.00 each · Baker's dozen (13) just $12
              </div>
              <a
                href="https://www.bubbysbagels.com/_files/ugd/88e84c_8f1815e77fdf4394bf7baa8a914976e7.pdf"
                target="_blank"
                rel="noopener"
                style={{
                  fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".18em",
                  textTransform: "uppercase", color: "var(--ink)",
                  textDecoration: "none",
                  padding: "6px 12px",
                  border: "2px solid var(--ink)", borderRadius: 999,
                  background: "var(--schmear)",
                }}
              >
                Full bagel menu (PDF) →
              </a>
            </div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 4,
            padding: 8,
            background: "var(--schmear)",
            border: "2.5px solid var(--ink)",
            borderRadius: 22,
          }}>
            {BAGELS.map(b => (
              <BagelTile
                key={b.id}
                b={b}
                selected={false}
                onClick={() => {}}
                onAdd={() => onAddCombo(b, null)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
