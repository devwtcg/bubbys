import React from "react";
import { Eyebrow, StarBurst } from "./atoms.jsx";
import { Tape } from "./fun.jsx";
import { PHOTOS } from "../data/photos.js";
import { useIsMobile } from "../hooks/useIsMobile.js";

export function Story() {
  const isMobile = useIsMobile();
  return (
    <section id="story" style={{ padding: "140px 0 100px", position: "relative" }}>
      <div className="wrap" style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1.1fr",
        gap: isMobile ? 40 : 80,
        alignItems: "center",
      }}>
        <div style={{ position: "relative", aspectRatio: "1 / 1.1" }}>
          <div style={{
            position: "absolute", top: 0, left: 0, width: "62%", height: "62%",
            border: "3px solid var(--ink)",
            background: "var(--paper-2)",
            boxShadow: "8px 8px 0 var(--ink)",
            transform: "rotate(-3deg)",
            overflow: "hidden",
          }}>
            <img src={PHOTOS.ovenShot} alt="Fresh bagels out of the oven" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <Tape color="rgba(236,107,44,.7)" w={90} tilt={-15} style={{ position: "absolute", top: -8, left: "30%" }} />
          </div>
          <div style={{
            position: "absolute", bottom: 0, right: 0, width: "55%", height: "55%",
            border: "3px solid var(--ink)",
            background: "var(--paper-2)",
            boxShadow: "8px 8px 0 var(--ink)",
            transform: "rotate(4deg)",
            overflow: "hidden",
          }}>
            <img src={PHOTOS.bagelClose} alt="The crew at work" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <Tape color="rgba(226,168,41,.7)" w={70} tilt={18} style={{ position: "absolute", top: -6, right: "20%" }} />
          </div>
          <div style={{ position: "absolute", top: "44%", right: "8%", transform: "rotate(-12deg)" }}>
            <StarBurst size={120} color="var(--mustard)" />
            <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", textAlign: "center", fontFamily: "var(--display)", fontSize: 18, lineHeight: 1, transform: "rotate(6deg)" }}>
              SINCE<br/>2011
            </div>
          </div>
        </div>

        <div>
          <Eyebrow num="N° 06">A note from Bubby</Eyebrow>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 28 }}>
            Fifteen years.<br/>One stone oven.
          </h2>
          <div style={{
            background: "var(--schmear)",
            border: "2.5px solid var(--ink)",
            borderRadius: 18,
            padding: 36,
            boxShadow: "10px 10px 0 var(--ink)",
            fontFamily: "var(--serif)",
            fontSize: 18,
            lineHeight: 1.5,
            position: "relative",
          }}>
            <div style={{ position: "absolute", top: -22, left: 24, padding: "4px 10px", background: "var(--paper)", border: "2.5px solid var(--ink)", borderRadius: 6, fontFamily: "var(--mono)", fontSize: 14, letterSpacing: ".18em", textTransform: "uppercase" }}>
              FROM THE KITCHEN
            </div>
            <p style={{ margin: 0 }}>
              When we opened the doors on Bathurst in 2011, the plan was small: make the bagel I grew up eating in Brooklyn — properly, every time, every day. Fifteen years later, we're still rolling each one by hand.
            </p>
            <p style={{ marginTop: 18, marginBottom: 0 }}>
              No tricks. No frozen anything. No store-bought lox. Just dough that takes its time, water that bubbles, an oven that's <em>hot</em>, and a team that shows up at five in the morning because that's what it takes to have bagels out by six.
            </p>
            <p style={{ marginTop: 18, marginBottom: 0, fontFamily: "var(--hand)", fontSize: 36, lineHeight: 1, transform: "rotate(-1deg)" }}>
              Thanks for eating with us.
            </p>
            <div style={{ marginTop: 12, fontFamily: "var(--mono)", fontSize: 14, letterSpacing: ".14em", textTransform: "uppercase" }}>
              — The Bubby's family · Toronto, ON
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 36 }}>
            {[
              ["2M+", "bagels baked"],
              ["40+", "wholesale partners"],
              ["7-day", "fresh promise"],
            ].map(([n, l]) => (
              <div key={n} style={{ borderTop: "2.5px solid var(--ink)", paddingTop: 14 }}>
                <div style={{ fontFamily: "var(--display)", fontSize: 44, lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 14, letterSpacing: ".14em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
