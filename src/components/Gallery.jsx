import React from "react";
import { Btn, SectionHeader, Sticker } from "./atoms.jsx";
import { PHOTOS } from "../data/photos.js";

export function Gallery() {
  const shots = [
    { src: PHOTOS.bagelTray,  cap: "Fresh trays, 6am" },
    { src: PHOTOS.bagelClose, cap: "The crust" },
    { src: PHOTOS.bagelBoard, cap: "Burlap boards" },
    { src: PHOTOS.bagelHand,  cap: "Hand-rolled" },
    { src: PHOTOS.bagelPan,   cap: "Stone-deck oven" },
    { src: PHOTOS.bagelTop,   cap: "Sesame, salt, poppy" },
    { src: PHOTOS.loxSpread,  cap: "House cured lox" },
    { src: PHOTOS.display,    cap: "The Bathurst counter" },
    { src: PHOTOS.smear1,     cap: "Schmears made daily" },
    { src: PHOTOS.shop2,      cap: "The morning rush" },
  ];

  return (
    <section style={{ padding: "120px 0 80px", position: "relative", overflow: "hidden" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, marginBottom: 50, flexWrap: "wrap" }}>
          <SectionHeader
            num="N° 04½"
            kicker="From the bakery"
            title={<>Real food.<br/>No food stylists.</>}
          />
          <p style={{ maxWidth: 380, fontSize: 17, lineHeight: 1.4, margin: 0, fontFamily: "var(--serif)" }}>
            Every photo on this page was shot in our shop on Bathurst. The bagels are exactly what you get when you walk in.
          </p>
        </div>
      </div>

      <div style={{
        display: "flex", overflowX: "auto", gap: 18,
        padding: "10px 36px 30px",
        scrollSnapType: "x mandatory",
        scrollbarWidth: "thin",
      }}>
        {shots.map((s, i) => {
          const tilt = (i % 2 === 0 ? -1 : 1) * (1 + (i % 3));
          return (
            <figure key={i} style={{
              flex: "0 0 auto",
              width: 320, height: 380,
              margin: 0,
              transform: `rotate(${tilt}deg)`,
              scrollSnapAlign: "start",
              transition: "transform .25s var(--ease)",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "rotate(0deg) scale(1.02)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = `rotate(${tilt}deg)`}
            >
              <div style={{
                position: "relative",
                width: "100%", height: "100%",
                background: "var(--schmear)",
                border: "2.5px solid var(--ink)",
                padding: "12px 12px 50px",
                boxShadow: "8px 8px 0 var(--ink)",
                borderRadius: 6,
              }}>
                <img src={s.src} alt={s.cap} loading="lazy" style={{
                  width: "100%", height: "calc(100% - 18px)",
                  objectFit: "cover",
                  display: "block",
                }} />
                <figcaption style={{
                  position: "absolute", left: 16, bottom: 14,
                  fontFamily: "var(--hand)", fontSize: 24, lineHeight: 1,
                }}>{s.cap}</figcaption>
                {i === 0 && (
                  <div style={{ position: "absolute", top: -14, right: -14 }}>
                    <Sticker color="var(--orange)" tilt={8}>JUST IN</Sticker>
                  </div>
                )}
              </div>
            </figure>
          );
        })}

        <div style={{ flex: "0 0 12px" }} />
      </div>

      <div className="wrap" style={{ marginTop: 24 }}>
        <Btn
          variant="yellow"
          href="https://www.instagram.com/bubbysnybagels/"
          target="_blank"
          rel="noopener"
          icon="↗"
        >
          Follow on Instagram
        </Btn>
      </div>
    </section>
  );
}
