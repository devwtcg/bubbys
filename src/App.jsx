import React from "react";
import { TopBar } from "./components/TopBar.jsx";
import { Hero } from "./components/Hero.jsx";
import { AwardsTicker } from "./components/AwardsTicker.jsx";
import { Method } from "./components/Method.jsx";
import { BannerStrip } from "./components/fun.jsx";
import { BuildABagel } from "./components/BuildABagel.jsx";
import { Sandwiches } from "./components/Sandwiches.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { Catering } from "./components/Catering.jsx";
import { Story } from "./components/Story.jsx";
import { Locations, Footer } from "./components/Locations.jsx";
import { CartDrawer } from "./components/CartDrawer.jsx";
import { BAGELS } from "./data/menu.js";

export default function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);

  const addItem = (item) => {
    setItems((prev) => {
      const i = prev.findIndex((p) => p.key === item.key);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + 1 };
        return next;
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setCartOpen(true);
  };

  const onAddCombo = (bagel, schmear) => {
    const key = schmear ? `${bagel.id}-${schmear.id}` : bagel.id;
    const name = schmear ? `${bagel.name} + ${schmear.name}` : bagel.name;
    const sub = schmear ? "made-to-order" : "by the each";
    const price = bagel.price + (schmear?.price ?? 0);
    addItem({
      key, name, sub, price,
      icon: { variant: bagel.variant, color: bagel.color, color2: bagel.color2 },
    });
  };

  const onAddSandwich = (s) => {
    const bagel = BAGELS.find((b) => b.id === s.bagel) || BAGELS[0];
    addItem({
      key: `sw-${s.id}`,
      name: s.name,
      sub: s.tag,
      price: s.price,
      icon: { variant: bagel.variant, color: bagel.color, color2: bagel.color2 },
    });
  };

  const onInc = (k) => setItems((prev) => prev.map((p) => (p.key === k ? { ...p, qty: p.qty + 1 } : p)));
  const onDec = (k) => setItems((prev) => prev.flatMap((p) => {
    if (p.key !== k) return [p];
    if (p.qty > 1) return [{ ...p, qty: p.qty - 1 }];
    return [];
  }));

  const cartCount = items.reduce((s, it) => s + it.qty, 0);

  return (
    <div className="page">
      <TopBar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <Hero />
      <AwardsTicker />
      <Method />
      <div style={{ background: "var(--paper)", padding: "0 0 30px", overflow: "hidden" }}>
        <BannerStrip
          items={["YUM YUM YUM", "★ NOSH NOSH NOSH ★", "EAT EAT EAT", "★ MMMMM ★", "SCHMEAR ME UP", "★ EVERYTHING EVERYTHING ★"]}
          color="var(--orange)" textColor="var(--paper)" tilt={-2}
        />
      </div>
      <BuildABagel onAddCombo={onAddCombo} />
      <div style={{ background: "var(--paper)", padding: "30px 0", overflow: "hidden" }}>
        <BannerStrip
          items={["SANDWICH O'CLOCK", "★ TIME TO EAT ★", "PILE IT ON!", "★ BIG BITE ENERGY ★", "GIVE ME EVERYTHING", "★ SCHMEAR DELUXE ★"]}
          color="var(--pickle)" textColor="var(--paper)" tilt={2} speed={32}
        />
      </div>
      <Sandwiches onAddSandwich={onAddSandwich} />
      <Gallery />
      <Catering />
      <Story />
      <Locations />
      <Footer />

      <CartDrawer
        open={cartOpen}
        items={items}
        onClose={() => setCartOpen(false)}
        onIncrement={onInc}
        onDecrement={onDec}
      />
    </div>
  );
}
