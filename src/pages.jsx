import React from "react";
import { AwardsTicker } from "./components/AwardsTicker.jsx";
import { Bagel, Btn, Eyebrow, SectionHeader, Sticker } from "./components/atoms.jsx";
import { Footer as LandingFooter } from "./components/Locations.jsx";
import { TopBar } from "./components/TopBar.jsx";
import { BRAND, BRAND_ASSETS } from "./brand.js";
import { BAGELS, SANDWICHES } from "./data/menu.js";
import { HOURS_DISPLAY } from "./data/hours.js";
import { PHOTOS } from "./data/photos.js";
import { DELIVERY_URL, ORDER_URL } from "./order.js";

const PHONE = "(416) 862-2435";
const TEL = "tel:4168622435";
const EMAIL = "info@bubbysbagels.com";
const MAP_URL = "https://maps.google.com/?q=3035+Bathurst+St,+Toronto,+ON";
const MENU_PDF = "https://www.bubbysbagels.com/_files/ugd/88e84c_8f1815e77fdf4394bf7baa8a914976e7.pdf";
const CATERING_PDF = "/assets/bubbys-catering-menu.pdf";
const CATERING_SVG = "/assets/bubbys-catering-menu.svg";

export const META = {
  "/": {
    title: "Bubby's Bagels Toronto | Authentic NYC Bagels",
    description: "Authentic New York bagels in Toronto, baked fresh daily on Bathurst. View the menu, order online, or plan catering for your next event.",
  },
  "/landing": {
    title: "Bubby's New York Bagels - Toronto",
    description: "A playful landing page for Bubby's New York Bagels in Toronto.",
  },
  "/about": {
    title: "About Bubby's Bagels | Toronto NYC Bagel Shop",
    description: "Learn the story behind Bubby's Bagels, Toronto's authentic New York bagel shop serving fresh bagels, breakfast, lunch, and catering.",
  },
  "/menu": {
    title: "Bubby's Bagels Menu | Toronto Bagels, Breakfast & Lunch",
    description: "View the Bubby's Bagels menu for fresh bagels, spreads, sandwiches, breakfast, lunch, pastries, drinks, and more in Toronto.",
  },
  "/catering": {
    title: "Bagel Catering Toronto | Bubby's Bagels Platters",
    description: "Order fresh bagel platters, sandwich trays, pastries, salads, coffee, and more for corporate meetings, events, and gatherings in Toronto.",
  },
  "/contact": {
    title: "Contact Bubby's Bagels | Hours & Location Toronto",
    description: "Contact Bubby's Bagels in Toronto, get directions to 3035 Bathurst St, check hours, call the shop, or send a message.",
  },
  "/blog": {
    title: "Bubby's Bagels Blog | Bagel Tips, Catering & Updates",
    description: "Read bagel tips, catering ideas, menu updates, and Bubby's Bagels news from Toronto.",
  },
  "/blog/category/recipes": {
    title: "Bagel Recipes and Serving Ideas | Bubby's Bagels",
    description: "Bagel serving ideas, schmear pairings, brunch boards, and ways to serve Bubby's bagels at home or events.",
  },
  "/blog/category/news": {
    title: "Bubby's Bagels News and Updates",
    description: "Latest specials, hours, menu news, and community updates from Bubby's Bagels in Toronto.",
  },
};

const FAQS = [
  ["Where is Bubby's Bagels?", "We are at 3035 Bathurst Street in Toronto, near Lawrence."],
  ["Are the bagels baked fresh?", "Yes. Bagels are made fresh daily using an old-school New York process."],
  ["Can I order online?", "Yes. Use Order Online for Clover pickup ordering or Order Delivery for Uber Eats."],
  ["Do you offer catering?", "Yes. We offer bagel platters, sandwich trays, pastries, salads, coffee, and more."],
];

const cateringItems = [
  {
    name: "Scoops & Bagels",
    serves: "Serves 6-8",
    price: "$100 flat",
    details: "10 bagels or 14 mini bagels with tuna, egg, cream cheese scoops, and assorted vegetables.",
  },
  {
    name: "Smoked Salmon & Cream Cheese",
    serves: "Serves 6-8",
    price: "$115 flat",
    details: "10 bagels or 14 mini bagels with lox florettes, assorted cream cheese, vegetables, capers, and lemon.",
  },
  {
    name: "Bagel Sandwich Halves",
    serves: "20 halves",
    price: "$100 flat",
    details: "Assorted bagel sandwiches cut in half with tuna, egg salad, cream cheese, lox, and sliced cheese.",
  },
  {
    name: "Office Coffee & Add-ons",
    serves: "For groups",
    price: "See menu",
    details: "Coffee, pastries, salads, fruit, dips, and extras for meetings, brunches, and gatherings.",
  },
];

function ExternalLink({ href, children, className = "text-link" }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener" : undefined} className={className}>
      {children}
    </a>
  );
}

function PageHero({ eyebrow, title, lede, image, alt, actions, children }) {
  return (
    <section className="page-hero">
      <div className="wrap page-hero__grid">
        <div className="page-hero__copy">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="h-display">{title}</h1>
          {lede && <p className="page-hero__lede">{lede}</p>}
          {actions && <div className="button-row">{actions}</div>}
        </div>
        <div className="page-hero__media">
          {image ? <img src={image} alt={alt} /> : children}
        </div>
      </div>
    </section>
  );
}

function VisualBagelCluster() {
  return (
    <div className="visual-bagel-cluster" aria-hidden="true">
      {BAGELS.slice(0, 7).map((bagel, index) => (
        <Bagel
          key={bagel.id}
          variant={bagel.variant}
          size={index === 0 ? 210 : 118}
          color={bagel.color}
          color2={bagel.color2}
          style={{ "--i": index }}
        />
      ))}
    </div>
  );
}

function PreviewSection({ eyebrow, title, body, href, cta, image, alt, reverse = false, children }) {
  return (
    <section className={`preview-section ${reverse ? "preview-section--reverse" : ""}`}>
      <div className="wrap preview-section__grid">
        <div className="preview-section__copy">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="h-section">{title}</h2>
          <p>{body}</p>
          <Btn variant="yellow" href={href}>{cta}</Btn>
        </div>
        <div className="preview-section__visual">
          {image ? <img src={image} alt={alt} /> : children}
        </div>
      </div>
    </section>
  );
}

function MenuPreviewGrid({ limit = 6 }) {
  return (
    <div className="menu-preview-grid">
      {SANDWICHES.slice(0, limit).map((item) => (
        <article key={item.id} className="menu-preview-card">
          <div>
            <span>{item.tag}</span>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
          <strong>${item.price.toFixed(2)}</strong>
        </article>
      ))}
    </div>
  );
}

function NewsletterBlock() {
  return (
    <section className="newsletter-band">
      <div className="wrap newsletter-band__grid">
        <div>
          <Eyebrow>Fresh from the oven</Eyebrow>
          <h2 className="h-sub">News, specials, and schmear.</h2>
        </div>
        <SiteForm
          endpoint="/api/newsletter"
          button="Join"
          fields={[
            { name: "name", label: "Name", type: "text", required: true },
            { name: "email", label: "Email", type: "email", required: true },
          ]}
        />
      </div>
    </section>
  );
}

function SiteForm({ endpoint, fields, button, subject }) {
  const [status, setStatus] = React.useState("idle");
  const [message, setMessage] = React.useState("");

  const submit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.website) {
      setStatus("success");
      setMessage("Thanks.");
      return;
    }
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, subject }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Form submission failed");
      form.reset();
      setStatus("success");
      setMessage("Thanks. We received it.");
    } catch {
      setStatus("error");
      setMessage(`Something went wrong. You can email ${EMAIL} directly.`);
    }
  };

  return (
    <form className="site-form" onSubmit={submit}>
      <label className="hidden-field">Website <input name="website" tabIndex="-1" autoComplete="off" /></label>
      {fields.map((field) => (
        <label key={field.name} className={field.full ? "site-form__full" : ""}>
          <span>{field.label}</span>
          {field.type === "textarea" ? (
            <textarea name={field.name} rows={field.rows || 5} required={field.required} />
          ) : (
            <input name={field.name} type={field.type} required={field.required} autoComplete={field.autoComplete} />
          )}
        </label>
      ))}
      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : button}
      </button>
      {message && <p className={`form-status form-status--${status}`} role={status === "error" ? "alert" : "status"}>{message}</p>}
    </form>
  );
}

function SiteFooter() {
  return (
    <>
      <NewsletterBlock />
      <footer className="site-footer">
        <div className="wrap site-footer__grid">
          <div>
            <img src={BRAND_ASSETS.horizontalWhite} alt={BRAND.name} className="brand-logo brand-logo--footer" />
            <p>Real New York bagels, baked fresh on Bathurst in Toronto.</p>
          </div>
          {[
            ["Visit", [["Contact", "/contact"], ["Hours", "/contact#hours-location"], ["Directions", MAP_URL]]],
            ["Order", [["Order Online", ORDER_URL], ["Order Delivery", DELIVERY_URL], ["Menu", "/menu"]]],
            ["Explore", [["About", "/about"], ["Catering", "/catering"], ["Blog", "/blog"]]],
          ].map(([title, links]) => (
            <div key={title}>
              <h2>{title}</h2>
              <ul>
                {links.map(([label, href]) => (
                  <li key={label}><ExternalLink href={href} className="footer-link">{label}</ExternalLink></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="wrap site-footer__bottom">
          <span>© 2026 Bubby's Bagels · 3035 Bathurst Street, Toronto</span>
          <span>Website by <ExternalLink href="https://talkerstein.com" className="footer-link">Talkerstein Consulting Group</ExternalLink></span>
        </div>
      </footer>
    </>
  );
}

export function SiteLayout({ children }) {
  return (
    <>
      <TopBar />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}

export function HomePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Authentic NYC bagels in Toronto"
        title={<>Fresh New York bagels on Bathurst.</>}
        lede="Cold-proofed, kettle-boiled, and baked fresh daily for breakfast, lunch, delivery, pickup, and catering."
        actions={<><Btn variant="yellow" href={ORDER_URL}>Order Online</Btn><Btn variant="ghost" href={DELIVERY_URL}>Order Delivery</Btn></>}
      >
        <VisualBagelCluster />
      </PageHero>
      <AwardsTicker />
      <PreviewSection
        eyebrow="Our story"
        title={<>Toronto needed real New York bagels.</>}
        body="Bubby's was built around the old-school process: patient dough, boiling water, a hot oven, and a shop that feels like family."
        href="/about"
        cta="About Us"
        image={PHOTOS.ovenShot}
        alt="Fresh bagels coming out of the oven at Bubby's Bagels"
      />
      <PreviewSection
        eyebrow="Menu"
        title={<>Bagels, sandwiches, wraps, pastries and coffee.</>}
        body="Browse the bagel lineup, breakfast favourites, lox classics, wraps, salads, pastries, and drinks before you order."
        href="/menu"
        cta="View Full Menu"
        reverse
      >
        <VisualBagelCluster />
      </PreviewSection>
      <PreviewSection
        eyebrow="Catering"
        title={<>Fresh platters for meetings, events and gatherings.</>}
        body="Bagel platters, sandwich trays, cream cheese, smoked salmon, pastries, salads, fruit, coffee, and more."
        href="/catering"
        cta="Plan Catering"
        image={PHOTOS.loxSpread}
        alt="Catering-ready bagels and smoked salmon from Bubby's Bagels"
      />
      <section className="simple-section surface-tan">
        <div className="wrap split-grid">
          <div>
            <Eyebrow>Visit us</Eyebrow>
            <h2 className="h-section">Find us on Bathurst.</h2>
            <p>3035 Bathurst Street, Toronto. Check current hours, call the shop, or get directions before you visit.</p>
            <div className="button-row"><Btn href="/contact" variant="yellow">Hours & Location</Btn><Btn href={TEL} variant="ghost">Call Bubby's</Btn></div>
          </div>
          <div className="info-card">
            <h3>3035 Bathurst St</h3>
            {HOURS_DISPLAY.map(([day, hours]) => <p key={day}><strong>{day}</strong><span>{hours}</span></p>)}
          </div>
        </div>
      </section>
      <FaqSection />
    </SiteLayout>
  );
}

export function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Bubby's"
        title="About Bubby's Bagels"
        lede="An authentic New York bagel shop in Toronto, serving fresh bagels, breakfast, lunch, and catering from Bathurst Street."
        image={PHOTOS.shop2}
        alt="Bubby's Bagels shop in Toronto"
      />
      <PreviewSection
        eyebrow="Our story"
        title={<>Built to bring real NYC bagels to Toronto.</>}
        body="The promise is simple: fresh daily bagels made with the texture, chew, and comfort people expect from a real New York bagel shop."
        href="/menu"
        cta="Read Our Menu"
        image={PHOTOS.bagelHand}
        alt="Hand-rolled bagels at Bubby's Bagels"
      />
      <section id="nyc-bagel-difference" className="simple-section surface-cream">
        <div className="wrap">
          <SectionHeader
            kicker="The NYC bagel difference"
            title={<>Cold-proofed. Kettle-boiled. Stone-deck baked.</>}
            lede="A proper bagel is not just bread with a hole. The process builds the shiny crust, dense chew, and fresh-baked finish."
          />
          <div className="feature-grid">
            {["Cold-proofed dough", "Kettle-boiled texture", "Stone-deck baking", "Fresh daily"].map((item) => (
              <article className="feature-card" key={item}>
                <Bagel variant="everything" size={98} />
                <h3>{item}</h3>
                <p>Old-school process, made practical for breakfast, lunch, and catering in Toronto.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FaqSection />
    </SiteLayout>
  );
}

export function MenuPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Menu"
        title="Bubby's Bagels Menu"
        lede="Fresh bagels, spreads, sandwiches, wraps, breakfast, lunch, pastries, drinks, and more."
        actions={<><Btn variant="yellow" href={ORDER_URL}>Order Online</Btn><Btn variant="ghost" href={MENU_PDF}>Download Menu PDF</Btn></>}
      >
        <VisualBagelCluster />
      </PageHero>
      <section className="simple-section surface-tan">
        <div className="wrap">
          <SectionHeader kicker="Bagels & schmears" title={<>The whole bagel lineup.</>} />
          <div className="bagel-display-grid">
            {BAGELS.map((bagel) => (
              <article key={bagel.id}>
                <Bagel variant={bagel.variant} size={150} color={bagel.color} color2={bagel.color2} />
                <h3>{bagel.name}</h3>
                <p>${bagel.price.toFixed(2)} each</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="simple-section">
        <div className="wrap">
          <SectionHeader kicker="Breakfast & lunch" title={<>Six legends. One stone oven.</>} lede="Signature classics from the store menu, ready for pickup or delivery through our ordering partners." />
          <MenuPreviewGrid />
          <div className="center-actions"><Btn href={ORDER_URL} variant="yellow">Order Online</Btn><Btn href={DELIVERY_URL} variant="ghost">Order Delivery</Btn></div>
        </div>
      </section>
      <section id="gallery" className="simple-section surface-cream">
        <div className="wrap">
          <SectionHeader kicker="Gallery" title={<>Fresh bagel photos, sandwiches and catering platters.</>} />
          <div className="photo-grid">
            {[PHOTOS.bagelTray, PHOTOS.bagelClose, PHOTOS.bagelBoard, PHOTOS.loxSpread, PHOTOS.display, PHOTOS.sandwich1].map((src, i) => (
              <img key={src} src={src} alt={`Bubby's Bagels menu and bakery photo ${i + 1}`} loading="lazy" />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export function CateringPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Catering"
        title="Bagel Catering in Toronto"
        lede="Fresh platters for corporate meetings, family events, brunches, parties, and community gatherings."
        actions={<><Btn variant="yellow" href="#catering-form">Start a Catering Order</Btn><Btn variant="ghost" href={CATERING_PDF}>Download Catering Menu</Btn></>}
        image={PHOTOS.loxSpread}
        alt="Bubby's Bagels catering platter in Toronto"
      />
      <section className="simple-section surface-tan">
        <div className="wrap">
          <SectionHeader kicker="Popular platters" title={<>Bagels for everyone.</>} />
          <div className="catering-grid">
            {cateringItems.map((item) => (
              <article key={item.name} className="catering-card">
                <span>{item.serves}</span>
                <h3>{item.name}</h3>
                <strong>{item.price}</strong>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="corporate-catering" className="preview-section">
        <div className="wrap preview-section__grid">
          <div className="preview-section__copy">
            <Eyebrow>Corporate catering</Eyebrow>
            <h2 className="h-section">Breakfast and lunch platters for the office.</h2>
            <p>Reliable bagel platters, sandwich trays, coffee, pastries, and easy pickup or delivery for meetings, team lunches, and client presentations.</p>
            <Btn variant="yellow" href="#catering-form">Order Corporate Catering</Btn>
          </div>
          <div className="preview-section__visual">
            <img src={PHOTOS.display} alt="Bubby's Bagels counter and catering options" />
          </div>
        </div>
      </section>
      <section id="event-catering" className="preview-section preview-section--reverse surface-cream">
        <div className="wrap preview-section__grid">
          <div className="preview-section__copy">
            <Eyebrow>Event catering</Eyebrow>
            <h2 className="h-section">Bagel platters, sandwiches and fresh sides for gatherings.</h2>
            <p>Build a generous spread for brunches, family events, birthdays, community gatherings, and weekend celebrations.</p>
            <Btn variant="yellow" href="#catering-form">Plan Event Catering</Btn>
          </div>
          <div className="preview-section__visual">
            <img src={CATERING_SVG} alt="Bubby's Bagels catering menu preview" />
          </div>
        </div>
      </section>
      <section id="catering-form" className="simple-section">
        <div className="wrap split-grid">
          <div>
            <Eyebrow>Catering inquiry</Eyebrow>
            <h2 className="h-section">Tell us what you're planning.</h2>
            <p>Send the basics and the catering team can follow up. For rush orders, call the shop directly.</p>
            <p><a className="text-link" href={TEL}>{PHONE}</a> · <a className="text-link" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          </div>
          <SiteForm
            endpoint="/api/catering"
            subject="Bubby's catering inquiry"
            button="Send Catering Inquiry"
            fields={[
              { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
              { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
              { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
              { name: "eventDate", label: "Event date", type: "text" },
              { name: "message", label: "What are you planning?", type: "textarea", full: true, required: true },
            ]}
          />
        </div>
      </section>
      <FaqSection catering />
    </SiteLayout>
  );
}

export function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Contact Bubby's Bagels"
        lede="Call the shop, get directions to 3035 Bathurst Street, check hours, or send a message."
        actions={<><Btn variant="yellow" href={TEL}>Call Now</Btn><Btn variant="ghost" href={MAP_URL}>Get Directions</Btn></>}
        image={PHOTOS.shop1}
        alt="Bubby's Bagels storefront on Bathurst Street in Toronto"
      />
      <section id="hours-location" className="simple-section surface-tan">
        <div className="wrap split-grid">
          <div className="info-card">
            <h2>Hours & location</h2>
            <p><strong>Address</strong><span>3035 Bathurst St, Toronto, ON M6A 2A4</span></p>
            {HOURS_DISPLAY.map(([day, hours]) => <p key={day}><strong>{day}</strong><span>{hours}</span></p>)}
            <p><strong>Phone</strong><span>{PHONE}</span></p>
            <p><strong>Email</strong><span>{EMAIL}</span></p>
          </div>
          <div className="map-frame">
            <iframe title="Map to Bubby's Bagels" src="https://maps.google.com/maps?q=3035+Bathurst+St,+Toronto,+ON&t=&z=16&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
      <section className="simple-section">
        <div className="wrap split-grid">
          <div>
            <Eyebrow>Send a message</Eyebrow>
            <h2 className="h-section">Questions, catering, or a quick hello.</h2>
            <p>Use the form for general questions. For current orders or urgent pickup questions, call the shop.</p>
          </div>
          <SiteForm
            endpoint="/api/contact"
            subject="Bubby's website contact"
            button="Send Message"
            fields={[
              { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
              { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
              { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
              { name: "message", label: "Message", type: "textarea", full: true, required: true },
            ]}
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function FaqSection({ catering = false }) {
  const items = catering ? [
    ["How far ahead should I order catering?", "Order as early as possible. Rush requests should call the shop so the team can confirm availability."],
    ["Can I customize platters?", "Yes. Send the details through the catering form and the team can follow up."],
    ["Is pickup or delivery available?", "Pickup is available, and delivery can be discussed for catering orders."],
    ["Where can I see the full catering menu?", "Download the catering PDF or use the catering inquiry form for help choosing."],
  ] : FAQS;
  return (
    <section id="faq" className="simple-section">
      <div className="wrap">
        <SectionHeader kicker="FAQ" title={<>Questions before you order?</>} />
        <div className="faq-grid">
          {items.map(([q, a]) => (
            <article key={q}>
              <h3>{q}</h3>
              <p>{a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogStubPage({ kind = "blog" }) {
  const data = {
    blog: ["Bubby's Bagels Blog", "Bagel tips, catering ideas, menu updates, and shop news will live here soon."],
    recipes: ["Bagel Recipes and Serving Ideas", "Future posts will focus on serving Bubby's bagels at home, at brunch, and at events."],
    news: ["News and Updates", "Holiday hours, specials, menu news, and community announcements will live here soon."],
  }[kind];
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Coming soon"
        title={data[0]}
        lede={data[1]}
        actions={<><Btn variant="yellow" href="/menu">View Menu</Btn><Btn variant="ghost" href="/catering">Order Catering</Btn></>}
        image={PHOTOS.bagelTray}
        alt="Fresh bagels at Bubby's Bagels"
      />
    </SiteLayout>
  );
}

export function LandingPageShell({ children }) {
  return (
    <>
      {children}
      <LandingFooter />
    </>
  );
}

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: BRAND.name,
    image: [BRAND_ASSETS.badge, PHOTOS.bagelHero],
    servesCuisine: ["Bagels", "Breakfast", "Lunch", "Catering"],
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "3035 Bathurst St",
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "M6A 2A4",
      addressCountry: "CA",
    },
    url: "https://bubbys-mauve.vercel.app/",
    menu: "https://bubbys-mauve.vercel.app/menu",
    acceptsReservations: false,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
