import React from "react";
import { Btn, SectionHeader, Sticker } from "./atoms.jsx";
import { HOURS_DISPLAY } from "../data/hours.js";
import { useIsMobile } from "../hooks/useIsMobile.js";

export function Locations() {
  const isMobile = useIsMobile();
  const spots = [
    {
      name: "Bubby's Bagels",
      addr: "3035 Bathurst St",
      city: "Toronto, ON M6A 2A4",
      hours: HOURS_DISPLAY,
      phone: "(416) 862-2435",
      tag: "the original",
      accent: "var(--mustard)",
      mapQ: "3035+Bathurst+St,+Toronto,+ON",
      dirHref: "https://maps.google.com/?q=3035+Bathurst+St,+Toronto,+ON",
    },
  ];

  return (
    <section id="locations" style={{ padding: "120px 0 80px", background: "var(--paper-2)", borderTop: "2.5px solid var(--ink)", borderBottom: "2.5px solid var(--ink)" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 24 }}>
          <SectionHeader
            num="N° 07"
            kicker="Two spots, one street · COR certified"
            title={<>Come visit<br/>the family.</>}
          />
          <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", maxWidth: 320, textAlign: "right" }}>
            We've been on Bathurst since 2011. Park, walk in, smell the oven. That's the whole experience.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: spots.length > 1 ? "1fr 1fr" : "minmax(0, 700px)", justifyContent: "center", gap: 28 }}>
          {spots.map((s, i) => (
            <div key={s.name} style={{
              background: "var(--schmear)",
              border: "2.5px solid var(--ink)",
              borderRadius: 22,
              padding: 36,
              boxShadow: "8px 8px 0 var(--ink)",
              position: "relative",
            }}>
              <div style={{ position: "absolute", top: -16, right: 22 }}>
                <Sticker color={s.accent} tilt={i % 2 === 0 ? -4 : 4}>{s.tag}</Sticker>
              </div>

              <div style={{
                height: 220,
                borderRadius: 12,
                border: "2.5px solid var(--ink)",
                marginBottom: 24,
                position: "relative",
                overflow: "hidden",
                boxShadow: "4px 4px 0 var(--ink)",
              }}>
                <iframe
                  title={`Map of ${s.name}`}
                  src={`https://maps.google.com/maps?q=${s.mapQ}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{
                    width: "100%", height: "100%", border: 0,
                    display: "block",
                    filter: "contrast(.96) saturate(.85) sepia(.18)",
                  }}
                ></iframe>
                <div style={{
                  position: "absolute", top: 10, left: 10,
                  background: s.accent, border: "2px solid var(--ink)",
                  padding: "4px 10px", borderRadius: 4,
                  fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase",
                  boxShadow: "2px 2px 0 var(--ink)",
                }}>
                  YOU ARE HERE
                </div>
              </div>

              <h3 style={{ fontFamily: "var(--display)", fontSize: 44, lineHeight: .92, margin: 0 }}>{s.name}</h3>
              <div style={{ marginTop: 8, fontFamily: "var(--serif)", fontSize: 22, lineHeight: 1.2 }}>
                {s.addr}<br/>
                <span style={{ opacity: .7 }}>{s.city}</span>
              </div>

              <div style={{
                marginTop: 24,
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: 20,
              }}>
                <div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--lox-deep)" }}>HOURS</div>
                  <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--mono)", fontSize: 13, lineHeight: 1 }}>
                    {s.hours.map(([d, h]) => (
                      <div key={d} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1.5px dotted rgba(26,22,18,.4)", paddingBottom: 5 }}>
                        <span>{d}</span><span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--lox-deep)" }}>CALL</div>
                  <a href={`tel:${s.phone.replace(/\D/g, "")}`} style={{
                    display: "block", marginTop: 8,
                    fontFamily: "var(--display)", fontSize: 28, lineHeight: 1,
                    textDecoration: "none", color: "var(--ink)",
                  }}>{s.phone}</a>
                  <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 8 }}>
                    <Btn variant="yellow" href={s.dirHref} icon="↗">Get directions</Btn>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const isMobile = useIsMobile();
  return (
    <footer style={{ background: "var(--ink)", color: "var(--paper)", paddingTop: isMobile ? 56 : 80, paddingBottom: 40, position: "relative", overflow: "hidden" }}>
      <div className="wrap">
        <div style={{
          fontFamily: "var(--display)",
          fontSize: isMobile ? "clamp(64px, 22vw, 120px)" : "clamp(80px, 17vw, 280px)",
          lineHeight: .85,
          letterSpacing: "-.04em",
          color: "var(--paper)",
          marginBottom: isMobile ? 36 : 60,
          textAlign: "center",
        }}>
          BUBBY<span style={{ color: "var(--mustard)" }}>'</span>S
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr 1fr",
          gap: isMobile ? 32 : 48,
          paddingTop: isMobile ? 28 : 40,
          borderTop: "2.5px solid var(--paper)",
        }}>
          <div>
            <p style={{ fontFamily: "var(--serif)", fontSize: 22, lineHeight: 1.2, margin: 0, maxWidth: 380 }}>
              Real New York bagels, baked in Toronto. On Bathurst. Since 2011.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["UberEats", "DoorDash", "SkipTheDishes"].map(p => (
                <span key={p} style={{
                  fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".18em",
                  textTransform: "uppercase", padding: "8px 14px",
                  border: "2px solid var(--paper)", borderRadius: 999,
                }}>{p}</span>
              ))}
            </div>

            <div style={{
              marginTop: 30,
              display: "flex", alignItems: "center", gap: 18,
              padding: "16px 18px",
              background: "var(--paper)",
              color: "var(--ink)",
              border: "2.5px solid var(--paper)",
              borderRadius: 14,
              maxWidth: 420,
            }}>
              <a href="http://www.cor.ca/view/750/new_cor_restaurant_bubbys_bagels.html" target="_blank" rel="noopener" style={{ flex: "0 0 auto" }}>
                <img
                  src="https://static.wixstatic.com/media/88e84c_75f01374b9ec4275a91228cea4133711~mv2.jpg/v1/fill/w_240,h_204,q_90,enc_avif,quality_auto/88e84c_75f01374b9ec4275a91228cea4133711~mv2.jpg"
                  alt="COR certified kosher"
                  style={{ width: 70, height: 60, objectFit: "contain", display: "block" }}
                />
              </a>
              <div>
                <div style={{ fontFamily: "var(--display)", fontSize: 22, lineHeight: 1, color: "var(--orange-deep)" }}>
                  Strictly Kosher
                </div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", marginTop: 4 }}>
                  Dairy & fish · COR certified
                </div>
              </div>
            </div>
          </div>

          {[
            ["MENU", [
              ["Bagels", "#menu"],
              ["Sandwiches", "#sandwiches"],
              ["Catering", "#catering"],
              ["Full menu (PDF)", "https://www.bubbysbagels.com/_files/ugd/88e84c_8f1815e77fdf4394bf7baa8a914976e7.pdf"],
            ]],
            ["VISIT", [
              ["3035 Bathurst", "#locations"],
              ["Hours", "#locations"],
              ["Directions", "https://maps.google.com/?q=3035+Bathurst+St,+Toronto,+ON"],
              ["Order online", "https://taliupexpress.com/restaurants/162/standalone-menus"],
            ]],
            ["FOLLOW", [
              ["Instagram", "https://www.instagram.com/bubbysnybagels/"],
              ["Facebook", "https://www.facebook.com/bubbysbagels"],
              ["Wholesale", "mailto:info@bubbysbagels.com?subject=Wholesale%20inquiry"],
              ["Newsletter", "mailto:info@bubbysbagels.com?subject=Newsletter"],
            ]],
          ].map(([t, items]) => (
            <div key={t}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--mustard)" }}>{t}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
                {items.map(([label, href]) => (
                  <li key={label}>
                    <a href={href}
                       target={href.startsWith("http") ? "_blank" : undefined}
                       rel={href.startsWith("http") ? "noopener" : undefined}
                       style={{ textDecoration: "none", color: "var(--paper)", fontFamily: "var(--serif)", fontSize: 18 }}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 64,
          paddingTop: 24,
          borderTop: "2px dashed rgba(244,234,213,.3)",
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16,
          fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(244,234,213,.7)",
        }}>
          <div>© 2026 Bubby's Bagels · Bathurst Street, Toronto</div>
          <div>
            Website baked with <span style={{ color: "var(--orange)" }}>♥</span> by{" "}
            <a
              href="https://talkerstein.com"
              target="_blank"
              rel="noopener"
              style={{ color: "var(--mustard)", textDecoration: "none", borderBottom: "1.5px solid var(--mustard)" }}
            >Talkerstein Consulting Group</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
