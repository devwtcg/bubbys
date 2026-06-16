import React from "react";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { BRAND, BRAND_ASSETS } from "../brand.js";
import { DELIVERY_URL, ORDER_URL } from "../order.js";

const SITE_NAV = [
  ["Home", "/"],
  ["About", "/about"],
  ["Menu", "/menu"],
  ["Catering", "/catering"],
  ["Contact", "/contact"],
];

const LANDING_NAV = [
  ["Bagels", "#menu"],
  ["Sandwiches", "#sandwiches"],
  ["Catering", "#catering"],
  ["Our Story", "#story"],
  ["Find Us", "#locations"],
];

function HeaderCta({ href, children, primary = false }) {
  return (
    <a
      className={primary ? "header-cta header-cta--primary" : "header-cta"}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener" : undefined}
    >
      {children}
    </a>
  );
}

export function TopBar({ cartCount = 0, onCartClick, landing = false }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const isCompact = useIsMobile(1180);
  const nav = landing ? LANDING_NAV : SITE_NAV;
  const logoHref = landing ? "#top" : "/";

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  React.useEffect(() => { if (!isCompact) setMenuOpen(false); }, [isCompact]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="wrap site-header__inner">
        <a href={logoHref} className="site-header__brand">
          <img
            className="brand-logo brand-logo--nav"
            src={BRAND_ASSETS.horizontalColor}
            alt={BRAND.name}
          />
        </a>

        {!isCompact && (
          <nav className="site-header__nav" aria-label="Main navigation">
            {nav.map(([label, href]) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </nav>
        )}

        <div className="site-header__actions">
          {!isCompact && <HeaderCta href={DELIVERY_URL}>Order Delivery</HeaderCta>}
          {!isCompact && <HeaderCta href={ORDER_URL} primary>Order Online</HeaderCta>}
          {landing && (
            <button className="header-cart" onClick={onCartClick} aria-label="View order">
              <span>Ticket</span>
              <span>{cartCount}</span>
            </button>
          )}
          {isCompact && (
            <button
              className="site-header__toggle"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          )}
        </div>
      </div>

      {isCompact && menuOpen && (
        <nav className="site-header__mobile" aria-label="Mobile navigation">
          {nav.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <div className="site-header__mobile-ctas">
            <HeaderCta href={ORDER_URL} primary>Order Online</HeaderCta>
            <HeaderCta href={DELIVERY_URL}>Order Delivery</HeaderCta>
          </div>
          <a className="site-header__phone" href="tel:4168622435">(416) 862-2435</a>
        </nav>
      )}
    </header>
  );
}
