import React from "react";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { BRAND, BRAND_ASSETS } from "../brand.js";

const NAV = [
  ["Bagels", "#menu"],
  ["Sandwiches", "#sandwiches"],
  ["Catering", "#catering"],
  ["Our Story", "#story"],
  ["Find Us", "#locations"],
];

export function TopBar({ cartCount, onCartClick }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const isCompact = useIsMobile(1280);

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close drawer on resize back to desktop
  React.useEffect(() => { if (!isCompact) setMenuOpen(false); }, [isCompact]);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "var(--paper)",
      borderBottom: scrolled ? "2.5px solid var(--ink)" : "2.5px solid transparent",
      transition: "border-color .2s",
    }}>
      <div className="wrap" style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
        gap: isCompact ? 12 : 24,
        padding: isCompact ? "12px 18px" : "18px 36px",
      }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: isCompact ? 10 : 14, textDecoration: "none" }}>
          <img
            className="brand-logo brand-logo--nav"
            src={BRAND_ASSETS.horizontalColor}
            alt={BRAND.name}
          />
        </a>

        {/* Desktop nav */}
        {!isCompact && (
          <nav style={{
            display: "flex", justifyContent: "center", gap: 36,
            fontFamily: "var(--body)", fontWeight: 700, fontSize: 14,
            letterSpacing: ".14em", textTransform: "uppercase",
          }}>
            {NAV.map(([label, href]) => (
              <a key={label} href={href} style={{ textDecoration: "none", color: "var(--ink)", position: "relative" }}
                 onMouseEnter={(e) => e.currentTarget.style.color = "var(--lox-deep)"}
                 onMouseLeave={(e) => e.currentTarget.style.color = "var(--ink)"}>
                {label}
              </a>
            ))}
          </nav>
        )}
        {isCompact && <div />}

        <div style={{ display: "flex", gap: isCompact ? 8 : 12, alignItems: "center" }}>
          {!isCompact && (
            <a href="tel:4168622435" style={{
              fontFamily: "var(--mono)", fontSize: 14, letterSpacing: ".06em",
              textDecoration: "none", color: "var(--ink)",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "var(--pickle)", boxShadow: "0 0 0 3px rgba(93,122,60,.25)" }} />
              (416) 862-2435
            </a>
          )}
          <button
            onClick={onCartClick}
            aria-label="View order"
            style={{
              border: "2.5px solid var(--ink)",
              background: "var(--mustard)",
              color: "var(--ink)",
              padding: isCompact ? "8px 12px" : "10px 18px",
              borderRadius: 999,
              fontFamily: "var(--body)",
              fontWeight: 800,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              fontSize: 14,
              cursor: "pointer",
              boxShadow: "0 4px 0 var(--ink)",
              display: "flex",
              alignItems: "center",
              gap: isCompact ? 6 : 10,
            }}
          >
            <span>Order</span>
            <span style={{
              background: "var(--ink)", color: "var(--paper)",
              borderRadius: 999, minWidth: 22, padding: "2px 7px",
              fontSize: 14, textAlign: "center",
              fontFeatureSettings: '"tnum"',
            }}>{cartCount}</span>
          </button>
          {isCompact && (
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              style={{
                appearance: "none",
                border: "2.5px solid var(--ink)",
                background: "var(--paper)",
                width: 40, height: 40, borderRadius: 10,
                display: "grid", placeItems: "center",
                cursor: "pointer",
                boxShadow: "0 4px 0 var(--ink)",
                padding: 0,
              }}
            >
              <span style={{
                width: 18, height: 14, position: "relative", display: "inline-block",
              }}>
                <span style={{ position: "absolute", left: 0, right: 0, top: menuOpen ? 6 : 0, height: 2.5, background: "var(--ink)", borderRadius: 2, transform: menuOpen ? "rotate(45deg)" : "none", transition: "all .15s" }} />
                <span style={{ position: "absolute", left: 0, right: 0, top: 6, height: 2.5, background: "var(--ink)", borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: "opacity .1s" }} />
                <span style={{ position: "absolute", left: 0, right: 0, bottom: menuOpen ? 6 : 0, height: 2.5, background: "var(--ink)", borderRadius: 2, transform: menuOpen ? "rotate(-45deg)" : "none", transition: "all .15s" }} />
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile nav drawer */}
      {isCompact && menuOpen && (
        <nav style={{
          background: "var(--paper)",
          borderTop: "2.5px solid var(--ink)",
          borderBottom: "2.5px solid var(--ink)",
          padding: "12px 18px 18px",
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          {NAV.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none", color: "var(--ink)",
                fontFamily: "var(--body)", fontWeight: 800, fontSize: 18,
                letterSpacing: ".1em", textTransform: "uppercase",
                padding: "12px 4px",
                borderBottom: "1.5px dashed rgba(26,22,18,.3)",
              }}
            >
              {label}
            </a>
          ))}
          <a href="tel:4168622435" style={{
            marginTop: 12,
            display: "inline-flex", alignItems: "center", gap: 10,
            textDecoration: "none", color: "var(--ink)",
            fontFamily: "var(--mono)", fontSize: 14, letterSpacing: ".06em",
          }}>
            <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "var(--pickle)", boxShadow: "0 0 0 3px rgba(93,122,60,.25)" }} />
            (416) 862-2435
          </a>
        </nav>
      )}
    </header>
  );
}
