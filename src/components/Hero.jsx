import React from "react";
import { Btn, Eyebrow, Sticker } from "./atoms.jsx";
import { BubbySays, Squiggle } from "./fun.jsx";
import { PHOTOS } from "../data/photos.js";
import { useStoreOpen } from "../hooks/useStoreOpen.js";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { BRAND, BRAND_ASSETS } from "../brand.js";

export function Hero() {
  const { store } = useStoreOpen();
  const isMobile = useIsMobile();
  const openColor = store.open ? "var(--pickle)" : "var(--lox-deep)";
  // Shorten label on mobile so the badge doesn't wrap word-by-word.
  const badgeLabel = isMobile
    ? (store.open ? "OPEN NOW" : store.label)
    : store.label;

  return (
    <section id="top" style={{
      position: "relative",
      paddingTop: isMobile ? 24 : 40,
      paddingBottom: isMobile ? 40 : 60,
      overflow: "hidden",
    }}>
      <div className="wrap" style={{ position: "relative" }}>
        {/* Floating logo, hidden on mobile to save space */}
        {!isMobile && (
          <div style={{ position: "absolute", top: 12, right: 24, animation: "wiggle 6s ease-in-out infinite", zIndex: 2 }}>
            <img
              className="brand-logo brand-logo--badge"
              src={BRAND_ASSETS.badge}
              alt={BRAND.name}
              style={{ filter: "drop-shadow(6px 6px 0 var(--ink))" }}
            />
          </div>
        )}

        {/* Eyebrow row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          flexDirection: isMobile ? "column" : "row",
          marginTop: isMobile ? 8 : 24,
          gap: isMobile ? 12 : 24,
          flexWrap: "wrap",
          paddingRight: isMobile ? 0 : 200,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 16, flexWrap: "wrap" }}>
            <Eyebrow num="No. 01">A bagel shop on Bathurst</Eyebrow>
            <span
              title={store.open ? `Open until ${store.until} ET` : undefined}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 12px", background: openColor, color: "var(--paper)",
                fontFamily: "var(--mono)", fontSize: 14, letterSpacing: ".18em", textTransform: "uppercase",
                border: "2px solid var(--ink)", borderRadius: 4,
                boxShadow: "3px 3px 0 var(--ink)",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{
                width: 8, height: 8, borderRadius: "50%", background: "var(--paper)",
                boxShadow: "0 0 0 2px var(--paper)",
                animation: store.open ? "pulse 1.6s ease-in-out infinite" : "none",
                opacity: store.open ? 1 : 0.7,
              }} />
              {badgeLabel}
              {!isMobile && store.open && store.until && (
                <span style={{ opacity: .8, marginLeft: 4 }}>· til {store.until}</span>
              )}
            </span>
          </div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 14, letterSpacing: ".18em", textTransform: "uppercase" }}>
            EST. 2011 · TORONTO · ONT
          </div>
        </div>

        {/* MEGA WORDMARK */}
        <h1
          className="h-display"
          aria-label="Bubby's New York Bagels"
          style={{
            marginTop: isMobile ? 20 : 32,
            fontSize: isMobile
              ? "clamp(46px, 14vw, 78px)"
              : "clamp(80px, 13vw, 205px)",
            lineHeight: .84,
            color: "var(--ink)",
            letterSpacing: 0,
            position: "relative",
            wordBreak: "keep-all",
          }}
        >
          BUBBY'S
          <br />
          NEW YORK
          <br />
          BAGELS
        </h1>
        <div style={{ marginTop: 12, marginLeft: 4 }}>
          <Squiggle width={isMobile ? 240 : 420} height={isMobile ? 14 : 18} color="var(--orange)" />
        </div>

        {/* Tagline + stats grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr",
          gap: isMobile ? 36 : 64,
          marginTop: isMobile ? 28 : 48,
          alignItems: isMobile ? "stretch" : "end",
          position: "relative",
        }}>
          {/* Speech bubble: absolute on desktop, inline on mobile */}
          {isMobile ? (
            <div style={{ marginBottom: 4 }}>
              <BubbySays color="var(--mustard)" tilt={-3} tail="bl">
                "Eat! You're skin and bones!"
              </BubbySays>
            </div>
          ) : (
            <div style={{ position: "absolute", top: -80, right: "42%", zIndex: 4 }}>
              <BubbySays color="var(--mustard)" tilt={-4} tail="br">
                "Eat! You're<br/>skin and bones!"
              </BubbySays>
            </div>
          )}

          <div>
            <p style={{
              fontFamily: "var(--serif)",
              fontSize: isMobile ? "clamp(18px, 5vw, 24px)" : "clamp(22px, 2.4vw, 36px)",
              lineHeight: 1.2,
              margin: 0,
              maxWidth: 720,
              textWrap: "pretty",
            }}>
              Cold-proofed for 36 hours. Kettle-boiled in honey water. Baked on wooden burlap boards in a stone-deck oven — because that's how Bubby would've wanted it.
            </p>
            <div style={{ display: "flex", gap: isMobile ? 12 : 16, marginTop: isMobile ? 20 : 32, flexWrap: "wrap" }}>
              <Btn variant="yellow" href="#menu">Order a Dozen</Btn>
              <Btn variant="ghost" href="#story" icon="↓">Read the story</Btn>
            </div>
          </div>

          <div style={{
            display: "flex",
            gap: isMobile ? 16 : 18,
            alignItems: "center",
            flexDirection: isMobile ? "column" : "row",
          }}>
            <div style={{
              position: "relative",
              width: isMobile ? 180 : 220,
              height: isMobile ? 180 : 220,
              flex: `0 0 ${isMobile ? 180 : 220}px`,
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

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : "1fr",
              gap: isMobile ? 12 : 18,
              width: isMobile ? "100%" : "auto",
            }}>
              {[
                ["10×", "Best Bagel\nin the GTA"],
                ["36h", "Cold proof,\nno shortcuts"],
                ["7", "Days a week,\nfresh from 6am"],
              ].map(([n, l]) => (
                <div key={n} style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  gap: isMobile ? 4 : 14,
                  alignItems: isMobile ? "flex-start" : "center",
                }}>
                  <div style={{
                    fontFamily: "var(--display)",
                    fontSize: isMobile ? 36 : 56,
                    lineHeight: .8,
                    color: "var(--orange)",
                    minWidth: isMobile ? "auto" : 90,
                  }}>{n}</div>
                  <div style={{
                    fontFamily: "var(--mono)", fontSize: 14,
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
