import React from "react";

export function TopBar({ cartCount, onCartClick }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "var(--paper)",
      borderBottom: scrolled ? "2.5px solid var(--ink)" : "2.5px solid transparent",
      transition: "border-color .2s",
    }}>
      <div style={{
        background: "var(--ink)", color: "var(--paper)",
        fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".18em",
        textTransform: "uppercase", padding: "8px 0", overflow: "hidden",
      }}>
        <div className="scroll-marquee">
          {Array.from({ length: 2 }).map((_, k) => (
            <React.Fragment key={k}>
              <span>★ Baked fresh on Bathurst since 2011</span>
              <span style={{opacity:.5}}>◯</span>
              <span style={{ color: "var(--mustard)" }}>STRICTLY DAIRY & FISH · COR CERTIFIED</span>
              <span style={{opacity:.5}}>◯</span>
              <span>10× Best Bagel in the GTA</span>
              <span style={{opacity:.5}}>◯</span>
              <span>Kettle-boiled · Stone-oven · Wooden-board baked</span>
              <span style={{opacity:.5}}>◯</span>
              <span>Now slinging schmears 7 days a week</span>
              <span style={{opacity:.5}}>◯</span>
              <span>UberEats · DoorDash · SkipTheDishes</span>
              <span style={{opacity:.5}}>◯</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="wrap" style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
        gap: 24,
        padding: "18px 36px",
      }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
          <img src="/assets/bubbys-logo.png" alt="Bubby's New York Bagels" style={{ width: 56, height: 56, display: "block" }} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontFamily: "var(--display)", fontSize: 28, letterSpacing: "-.02em" }}>Bubby's</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: ".26em", textTransform: "uppercase", marginTop: 4, color: "var(--orange-deep)" }}>New York Bagels</span>
          </div>
        </a>

        <nav style={{
          display: "flex", justifyContent: "center", gap: 36,
          fontFamily: "var(--body)", fontWeight: 700, fontSize: 14,
          letterSpacing: ".14em", textTransform: "uppercase",
        }}>
          {[
            ["Bagels", "#menu"],
            ["Sandwiches", "#sandwiches"],
            ["Catering", "#catering"],
            ["Our Story", "#story"],
            ["Find Us", "#locations"],
          ].map(([label, href]) => (
            <a key={label} href={href} style={{ textDecoration: "none", color: "var(--ink)", position: "relative" }}
               onMouseEnter={(e) => e.currentTarget.style.color = "var(--lox-deep)"}
               onMouseLeave={(e) => e.currentTarget.style.color = "var(--ink)"}>
              {label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href="tel:4168622435" style={{
            fontFamily: "var(--mono)", fontSize: 13, letterSpacing: ".06em",
            textDecoration: "none", color: "var(--ink)",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "var(--pickle)", boxShadow: "0 0 0 3px rgba(93,122,60,.25)" }} />
            (416) 862-2435
          </a>
          <button
            onClick={onCartClick}
            style={{
              border: "2.5px solid var(--ink)",
              background: "var(--mustard)",
              color: "var(--ink)",
              padding: "10px 18px",
              borderRadius: 999,
              fontFamily: "var(--body)",
              fontWeight: 800,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              fontSize: 13,
              cursor: "pointer",
              boxShadow: "0 4px 0 var(--ink)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span>Order</span>
            <span style={{
              background: "var(--ink)", color: "var(--paper)",
              borderRadius: 999, minWidth: 22, padding: "2px 7px",
              fontSize: 12, textAlign: "center",
              fontFeatureSettings: '"tnum"',
            }}>{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
