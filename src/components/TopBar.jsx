import React from "react";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { BRAND, BRAND_ASSETS } from "../brand.js";
import { DELIVERY_URL, ORDER_URL } from "../order.js";

const SITE_NAV = [
  {
    label: "Home",
    href: "/",
    children: [
      ["Featured Menu", "/#featured-menu"],
      ["Catering", "/#catering-preview"],
      ["Visit", "/#visit"],
      ["FAQ", "/#faq"],
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      ["Our Story", "/about#our-story"],
      ["NYC Difference", "/about#nyc-bagel-difference"],
      ["FAQ", "/about#faq"],
    ],
  },
  {
    label: "Menu",
    href: "/menu",
    children: [
      ["Bagels & Spreads", "/menu#menu-bagels"],
      ["Breakfast & Lunch", "/menu#menu-sandwiches"],
      ["Drinks", "/menu#menu-drinks"],
      ["Pastries", "/menu#menu-pastries"],
      ["Gallery", "/menu#gallery"],
    ],
  },
  {
    label: "Catering",
    href: "/catering",
    children: [
      ["Popular Platters", "/catering#popular-platters"],
      ["Corporate", "/catering#corporate-catering"],
      ["Events", "/catering#event-catering"],
      ["Inquiry", "/catering#catering-form"],
      ["FAQ", "/catering#faq"],
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    children: [
      ["Hours & Location", "/contact#hours-location"],
      ["Contact Form", "/contact#contact-form"],
    ],
  },
];

const LANDING_NAV = [
  { label: "Bagels", href: "#menu" },
  { label: "Sandwiches", href: "#sandwiches" },
  { label: "Catering", href: "#catering" },
  { label: "Our Story", href: "#story" },
  { label: "Find Us", href: "#locations" },
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
            {nav.map((item) => (
              <div className="site-header__nav-item" key={item.label}>
                <a href={item.href} aria-haspopup={item.children?.length ? "true" : undefined}>
                  {item.label}
                </a>
                {item.children?.length > 0 && (
                  <div className="site-header__dropdown" aria-label={`${item.label} sections`}>
                    {item.children.map(([label, href]) => (
                      <a key={label} href={href}>{label}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}

        <div className="site-header__actions">
          {!isCompact && <HeaderCta href={ORDER_URL} primary>Order Online</HeaderCta>}
          {!isCompact && <HeaderCta href={DELIVERY_URL}>Order Delivery</HeaderCta>}
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
          {nav.map((item) => (
            <div className="site-header__mobile-group" key={item.label}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
              {item.children?.length > 0 && (
                <div className="site-header__mobile-subnav">
                  {item.children.map(([label, href]) => (
                    <a key={label} href={href} onClick={() => setMenuOpen(false)}>
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
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
