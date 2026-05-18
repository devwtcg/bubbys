import React from "react";
import { Bagel, Btn, Eyebrow, Sticker } from "./atoms.jsx";
import { BubbySays, Squiggle } from "./fun.jsx";
import { PHOTOS } from "../data/photos.js";
import { useStoreOpen } from "../hooks/useStoreOpen.js";

export function Hero() {
  const { store } = useStoreOpen();
  const openColor = store.open ? "var(--pickle)" : "var(--lox-deep)";
  return (
    <section id="top" style={{
      position: "relative",
      paddingTop: 40,
      paddingBottom: 60,
      overflow: "hidden",
    }}>
      <div className="wrap" style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 12, right: 24, animation: "wiggle 6s ease-in-out infinite", zIndex: 2 }}>
          <img src="/assets/bubbys-logo.png" alt="" style={{ width: 170, height: 170, display: "block", filter: "drop-shadow(6px 6px 0 var(--ink))" }} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 24, gap: 24, flexWrap: "wrap", paddingRight: 200 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Eyebrow num="N° 01">A bagel shop on Bathurst</Eyebrow>
            <span
              title={store.open ? `Open until ${store.until} ET` : undefined}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 12px", background: openColor, color: "var(--paper)",
                fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase",
                border: "2px solid var(--ink)", borderRadius: 4,
                boxShadow: "3px 3px 0 var(--ink)",
              }}
            >
              <span style={{
                width: 8, height: 8, borderRadius: "50%", background: "var(--paper)",
                boxShadow: "0 0 0 2px var(--paper)",
                animation: store.open ? "pulse 1.6s ease-in-out infinite" : "none",
                opacity: store.open ? 1 : 0.7,
              }} />
              {store.label}
              {store.open && store.until && (
                <span style={{ opacity: .8, marginLeft: 4 }}>· til {store.until}</span>
              )}
            </span>
          </div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase" }}>
            EST. 2011 · TORONTO · ONT
          </div>
        </div>

        <h1
          className="h-display"
          style={{
            marginTop: 32,
            fontSize: "clamp(96px, 17.5vw, 280px)",
            lineHeight: .82,
            color: "var(--ink)",
            letterSpacing: "-.035em",
            position: "relative",
          }}
        >
          BUBB
          <span style={{ position: "relative", display: "inline-block" }}>Y</span>
          <span style={{ color: "var(--orange)" }}>'</span>
          S
          <br />
          BA
          <span style={{ display: "inline-block", position: "relative", width: "1em" }}>
            <span style={{
              position: "absolute",
              left: "50%", top: "52%",
              transform: "translate(-50%, -50%)",
              width: "1em", height: "1em",
            }}>
              <Bagel variant="everything" size="100%" style={{ width: "100%", height: "100%" }} />
            </span>
            <span style={{ visibility: "hidden" }}>O</span>
          </span>
          EL
          <span style={{ color: "var(--orange)" }}>S.</span>
        </h1>
        <div style={{ marginTop: 12, marginLeft: 4 }}>
          <Squiggle width={420} height={18} color="var(--orange)" />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 64,
          marginTop: 48,
          alignItems: "end",
          position: "relative",
        }}>
          <div style={{ position: "absolute", top: -80, right: "42%", zIndex: 4 }}>
            <BubbySays color="var(--mustard)" tilt={-4} tail="br">
              "Eat! You're<br/>skin and bones!"
            </BubbySays>
          </div>
          <div>
            <p style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(22px, 2.4vw, 36px)",
              lineHeight: 1.15,
              margin: 0,
              maxWidth: 720,
              textWrap: "pretty",
            }}>
              Cold-proofed for 36 hours. Kettle-boiled in honey water. Baked on wooden burlap boards in a stone-deck oven — because that's how Bubby would've wanted it.
            </p>
            <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
              <Btn variant="yellow" href="#menu">Order a Dozen</Btn>
              <Btn variant="ghost" href="#story" icon="↓">Read the story</Btn>
            </div>
          </div>

          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <div style={{
              position: "relative",
              width: 220, height: 220,
              flex: "0 0 220px",
            }}>
              <div style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                border: "3px solid var(--ink)",
                overflow: "hidden",
                boxShadow: "8px 8px 0 var(--ink)",
                background: "var(--paper-2)",
              }}>
                <img src={PHOTOS.bagelHero} alt="A fresh Bubby's bagel" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", top: -22, right: -22 }}>
                <Sticker color="var(--lox)" tilt={12}>HAND-ROLLED</Sticker>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                ["10×", "Best Bagel\nin the GTA"],
                ["36h", "Cold proof,\nno shortcuts"],
                ["7", "Days a week,\nfresh from 6am"],
              ].map(([n, l]) => (
                <div key={n} style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <div style={{
                    fontFamily: "var(--display)",
                    fontSize: 56,
                    lineHeight: .8,
                    color: "var(--orange)",
                    minWidth: 90,
                  }}>{n}</div>
                  <div style={{
                    fontFamily: "var(--mono)", fontSize: 12,
                    letterSpacing: ".14em", textTransform: "uppercase",
                    whiteSpace: "pre-line", lineHeight: 1.2,
                  }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-6deg) translateY(0); }
          50%      { transform: rotate(6deg) translateY(-6px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: .4; transform: scale(.7); }
        }
      `}</style>
    </section>
  );
}
