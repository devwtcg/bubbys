import React from "react";
import { Btn, Eyebrow, Sticker } from "./atoms.jsx";
import { BubbySays, SeedScatter } from "./fun.jsx";
import { useStoreOpen } from "../hooks/useStoreOpen.js";
import { useIsMobile } from "../hooks/useIsMobile.js";

const CATERING_PDF = "/assets/bubbys-catering-menu.pdf";

export function Catering() {
  const { catering } = useStoreOpen();
  const isMobile = useIsMobile();
  const tiers = [
    {
      name: "Scoops & Bagels",
      serves: "6–8 people",
      price: 100,
      includes: ["10 bagels or 14 mini bagels", "Bishul tuna, egg, and cream cheese scoops", "Assorted sliced vegetables"],
      accent: "var(--mustard)",
      featured: false,
    },
    {
      name: "Smoked Salmon & Cream Cheese",
      serves: "6–8 people",
      price: 115,
      includes: ["10 bagels or 14 mini bagels", "Lox florettes and assorted cream cheese", "Vegetables, capers, and lemon wedges"],
      accent: "var(--lox)",
      featured: true,
    },
    {
      name: "Bagel Sandwich Halves",
      serves: "20 halves",
      price: 100,
      includes: ["Assorted bagel sandwiches cut in half", "Tuna, egg salad, cream cheese, lox, and sliced cheese", "Garnished with vegetables on the side"],
      accent: "var(--pickle)",
      featured: false,
    },
  ];

  return (
    <section id="catering" className="section--dark" style={{ padding: "120px 0 80px", position: "relative", overflow: "hidden" }}>
      <SeedScatter count={80} color="var(--mustard)" style={{ opacity: .35 }} />
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 28 : 60,
          alignItems: isMobile ? "stretch" : "end",
          marginBottom: isMobile ? 40 : 60,
        }}>
          <div>
            <Eyebrow num="N° 05">Feed the whole mishpacha</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 18, color: "var(--paper)" }}>
              Bagels for<br/><span style={{ color: "var(--mustard)" }}>everyone</span>.
            </h2>
          </div>
          <p style={{ fontFamily: "var(--serif)", fontSize: 22, lineHeight: 1.3, margin: 0, color: "var(--paper)", textWrap: "pretty" }}>
            Platters, full-service bris packages, brunch favourites, salads, pastries, and more for gatherings of every size.
          </p>
        </div>

        {/* Order cutoff banner */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: 24, flexWrap: "wrap",
          padding: "16px 22px",
          background: catering.accepting ? "var(--mustard)" : "var(--paper-2)",
          color: "var(--ink)",
          border: "2.5px solid var(--paper)",
          borderRadius: 14,
          marginBottom: 36,
          boxShadow: "5px 5px 0 var(--mustard)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{
              width: 12, height: 12, borderRadius: "50%",
              background: catering.accepting ? "var(--pickle)" : "var(--lox-deep)",
              boxShadow: catering.accepting ? "0 0 0 4px rgba(93,122,60,.25)" : "none",
            }} />
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 14, letterSpacing: ".22em", textTransform: "uppercase" }}>
                {catering.accepting ? "Accepting orders for this week" : "This week is closed"}
              </div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 18, lineHeight: 1.15, marginTop: 4 }}>
                {catering.accepting
                  ? <>Cutoff: <strong>{catering.cutoffLabel} ET</strong>. Pickups Friday & Sunday.</>
                  : <>Next cutoff opens Sunday for the following week. Need a rush order? Give us a call.</>}
              </div>
            </div>
          </div>
          <a href={CATERING_PDF} download="Bubbys-Catering-Menu.pdf" style={{
            fontFamily: "var(--mono)", fontSize: 14, letterSpacing: ".14em",
            textTransform: "uppercase", color: "var(--ink)",
            textDecoration: "none",
            padding: "8px 14px",
            border: "2px solid var(--ink)", borderRadius: 999,
            background: "var(--paper)",
          }}>Full catering menu (PDF) →</a>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 24 }}>
          <BubbySays color="var(--orange)" tilt={4} tail="br" style={{ maxWidth: 300 }}>
            "Did you eat? Did everyone eat?"<br/>
            <span style={{ fontFamily: "var(--mono)", fontSize: 14, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--paper)", display: "inline-block", marginTop: 6 }}>— Bubby, at every gathering</span>
          </BubbySays>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: isMobile ? 28 : 24,
        }}>
          {tiers.map((t) => (
            <div key={t.name} style={{
              position: "relative",
              background: t.featured ? t.accent : "transparent",
              color: t.featured ? "var(--ink)" : "var(--paper)",
              border: "2.5px solid var(--paper)",
              borderRadius: 22,
              padding: 32,
              boxShadow: t.featured ? "8px 8px 0 var(--mustard)" : "none",
              transform: !isMobile && t.featured ? "translateY(-12px)" : "none",
              display: "flex", flexDirection: "column", gap: 16,
            }}>
              {t.featured && (
                <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%) rotate(-3deg)" }}>
                  <Sticker color="var(--paper)" tilt={0}>MOST ORDERED</Sticker>
                </div>
              )}
              <div style={{ fontFamily: "var(--mono)", fontSize: 14, letterSpacing: ".2em", textTransform: "uppercase", opacity: .75 }}>
                {t.serves}
              </div>
              <h3 style={{ fontFamily: "var(--display)", fontSize: 44, lineHeight: .9, margin: 0 }}>{t.name}</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <div style={{ fontFamily: "var(--display)", fontSize: 56, lineHeight: 1 }}>${t.price}</div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 14, letterSpacing: ".14em", textTransform: "uppercase", opacity: .75 }}>
                  {t.perPerson ? "/ person" : "flat"}
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {t.includes.map((x, j) => (
                  <li key={j} style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.3 }}>
                    <span style={{ flex: "0 0 14px", height: 14, borderRadius: "50%", background: t.featured ? "var(--ink)" : "var(--paper)", marginTop: 4 }} />
                    {x}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "auto", paddingTop: 16 }}>
                <Btn variant={t.featured ? "dark" : "yellow"} href="mailto:info@bubbysbagels.com">Book it</Btn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
