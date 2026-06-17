import React from "react";
import { Bagel, SectionHeader } from "./atoms.jsx";
import { BubbySays } from "./fun.jsx";
import { useIsMobile } from "../hooks/useIsMobile.js";

function MethodCard({ num, title, time, body, accent, illustration }) {
  return (
    <div style={{
      position: "relative",
      background: "var(--schmear)",
      border: "2.5px solid var(--ink)",
      borderRadius: 24,
      padding: "36px 30px 30px",
      boxShadow: "8px 8px 0 var(--ink)",
      display: "flex", flexDirection: "column", gap: 20,
    }}>
      <div style={{
        position: "absolute", top: -28, left: -22,
        width: 64, height: 64, borderRadius: "50%",
        background: accent, border: "2.5px solid var(--ink)",
        display: "grid", placeItems: "center",
        fontFamily: "var(--display)", fontSize: 32,
        color: "var(--ink)",
        boxShadow: "4px 4px 0 var(--ink)",
      }}>{num}</div>

      {illustration}

      <div style={{
        fontFamily: "var(--mono)", fontSize: 16,
        letterSpacing: ".18em", textTransform: "uppercase",
        color: "var(--lox-deep)",
      }}>{time}</div>

      <h3 style={{
        fontFamily: "var(--display)", fontSize: 44, lineHeight: .92,
        margin: 0, letterSpacing: "-.01em",
      }}>{title}</h3>

      <p style={{ margin: 0, fontSize: 17, lineHeight: 1.45, fontFamily: "var(--body)" }}>
        {body}
      </p>
    </div>
  );
}

export function Method() {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: "120px 0 80px", position: "relative" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: isMobile ? 48 : 70, gap: 32, flexWrap: "wrap" }}>
          <SectionHeader
            num="N° 02"
            kicker="The Old-School Way"
            title={<>Three steps,<br/>zero shortcuts.</>}
          />
          <BubbySays color="var(--lox)" tilt={3} tail="bl" style={{ maxWidth: 320 }}>
            "If it doesn't take all day, it isn't a real bagel."<br/>
            <span style={{ fontFamily: "var(--mono)", fontSize: 16, letterSpacing: ".14em", textTransform: "uppercase", display: "inline-block", marginTop: 8 }}>— a thing Bubby probably said</span>
          </BubbySays>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: isMobile ? 28 : 36,
        }}>
          <MethodCard
            num="1"
            time="36 hours · slow ferment"
            title="Cold Proof"
            accent="var(--mustard)"
            body="Flour, water, malt, a whisper of salt — and then we wait. A day and a half in the cold lets the dough develop its chew and that unmistakable tang you can't fake."
            illustration={
              <div style={{ height: 160, position: "relative", display: "grid", placeItems: "center" }}>
                <div style={{
                  width: 130, height: 150, borderRadius: 12,
                  background: "var(--paper-2)", border: "2.5px solid var(--ink)",
                  boxShadow: "5px 5px 0 var(--ink)", position: "relative",
                }}>
                  <div style={{ position: "absolute", top: 10, left: 10, right: 10, height: 50, border: "2.5px solid var(--ink)", borderRadius: 6, background: "var(--schmear)", display: "grid", placeItems: "center" }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 16, letterSpacing: ".1em" }}>4°C</span>
                  </div>
                  <div style={{ position: "absolute", bottom: 10, left: 10, right: 10, top: 70, border: "2.5px solid var(--ink)", borderRadius: 6, background: "var(--schmear)", display:"grid", placeItems:"center" }}>
                    <div style={{ display:"flex", gap:6 }}>
                      {[0,1,2].map(i => (
                        <div key={i} style={{ width: 18, height: 18, borderRadius: "50%", background: "#e9d6a8", border: "2px solid var(--ink)" }} />
                      ))}
                    </div>
                  </div>
                  <div style={{ position:"absolute", top: 36, right: 5, width: 4, height: 14, background: "var(--ink)" }} />
                </div>
              </div>
            }
          />

          <MethodCard
            num="2"
            time="60 seconds · rolling boil"
            title="Kettle Boil"
            accent="var(--lox)"
            body="Honey-sweetened water, big bubbles. A short, sharp dunk locks in the chew and gives every bagel that glossy, golden crust. No steam injection. No shortcuts."
            illustration={
              <div style={{ height: 160, position: "relative", display: "grid", placeItems: "center" }}>
                <div style={{
                  width: 170, height: 110, borderRadius: "12px 12px 80px 80px / 12px 12px 50px 50px",
                  background: "var(--paper-2)", border: "2.5px solid var(--ink)",
                  boxShadow: "5px 5px 0 var(--ink)", position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", left: 8, right: 8, top: 26, bottom: 8, borderRadius: "8px 8px 70px 70px", background: "linear-gradient(to bottom, #e88a8a 0%, #c95f63 100%)" }} />
                  {[[30,30,8],[60,40,6],[100,32,7],[130,42,5],[80,55,9],[45,68,5]].map(([x,y,r],i) => (
                    <div key={i} style={{
                      position: "absolute", left: x, top: y,
                      width: r*2, height: r*2, borderRadius: "50%",
                      background: "rgba(255,255,255,.7)", border: "1.5px solid var(--ink)",
                    }} />
                  ))}
                  <div style={{ position: "absolute", left: 60, top: 18 }}>
                    <Bagel variant="plain" size={50} color="#d4a55a" color2="#a06c2c" />
                  </div>
                </div>
              </div>
            }
          />

          <MethodCard
            num="3"
            time="14 minutes · 500°F"
            title="Stone-Deck Bake"
            accent="var(--pickle)"
            body="Onto wooden burlap boards, into a stone-deck oven the way they've been doing it for a hundred years. Bottoms crisp, tops blister, the whole shop smells like Saturday morning."
            illustration={
              <div style={{ height: 160, position: "relative", display: "grid", placeItems: "center" }}>
                <div style={{
                  width: 200, height: 130, borderRadius: 12,
                  background: "var(--ink)", border: "2.5px solid var(--ink)",
                  boxShadow: "5px 5px 0 var(--ink)", position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute", inset: 14,
                    borderRadius: "70% 70% 8px 8px / 50% 50% 8px 8px",
                    background: "radial-gradient(ellipse at 50% 100%, #ffb347 0 30%, #d97732 60%, #6b2a1c 100%)",
                    display: "flex", justifyContent: "center", alignItems: "flex-end", paddingBottom: 8, gap: 6,
                  }}>
                    {[0,1,2,3].map(i => (
                      <div key={i} style={{
                        width: 22, height: 22, borderRadius: "50%",
                        background: "#c08245", border: "2px solid var(--ink)",
                        position: "relative",
                      }}>
                        <div style={{ position: "absolute", inset: "30%", borderRadius: "50%", background: "var(--ink)" }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }
          />
        </div>

        <div style={{
          marginTop: isMobile ? 40 : 64,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
          gap: 0,
          border: "2.5px solid var(--ink)",
          borderRadius: 16,
          overflow: "hidden",
          background: "var(--schmear)",
        }}>
          {[
            ["INGREDIENTS", "Flour. Water. Malt. Salt. Yeast. Honey. That's it."],
            ["NO PRESERVATIVES", "Best within 24 hrs. Toast on day two. Bag for the freezer day three."],
            ["DAILY BAKE", "First batch out at 6:00 AM. Last batch when they're gone."],
            ["WHOLESALE", "We supply 40+ cafés and restaurants across the GTA."],
          ].map(([k, v], i) => (
            <div key={k} style={{
              padding: "22px 24px",
              borderRight: !isMobile && i < 3 ? "2.5px dashed var(--ink)" : "none",
              borderBottom: isMobile && i < 3 ? "2.5px dashed var(--ink)" : "none",
            }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 16, letterSpacing: ".18em", color: "var(--lox-deep)" }}>{k}</div>
              <div style={{ marginTop: 8, fontSize: 16, lineHeight: 1.35 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
