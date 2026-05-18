import React from "react";
import { TweaksPanel, TweakSection, TweakRadio, TweakToggle, useTweaks } from "./TweaksPanel.jsx";

const PALETTES = {
  bubby: {
    label: "Bubby Orange (signature)",
    paper: "#f6ecd6", paper2: "#ecdfbe",
    ink: "#1a1612",
    orange: "#ec6b2c", orangeDeep: "#c45418",
    mustard: "#e2a829",
    lox: "#f1a89a",
    pickle: "#5d7a3c",
    schmear: "#fffaf0",
  },
  deli: {
    label: "Late-Night Deli",
    paper: "#1f1b16", paper2: "#2a241d",
    ink: "#f6ecd6",
    orange: "#ff7e3e", orangeDeep: "#e85f1c",
    mustard: "#f0c041",
    lox: "#f1a89a",
    pickle: "#a8c47b",
    schmear: "#2c2620",
  },
  lox: {
    label: "Smoked Lox",
    paper: "#fdf2ea", paper2: "#f4d9c5",
    ink: "#3b1a12",
    orange: "#e85a3a", orangeDeep: "#b53319",
    mustard: "#d99b3a",
    lox: "#e88a8a",
    pickle: "#6d8a52",
    schmear: "#fff7ee",
  },
  pickle: {
    label: "Half-Sour",
    paper: "#eef0d8", paper2: "#dbe0bd",
    ink: "#1f2511",
    orange: "#ec6b2c", orangeDeep: "#aa3f0e",
    mustard: "#e3b423",
    lox: "#f1a89a",
    pickle: "#5d7a3c",
    schmear: "#f6f6e1",
  },
};

function applyPalette(name) {
  const p = PALETTES[name] || PALETTES.bubby;
  const root = document.documentElement.style;
  root.setProperty("--paper", p.paper);
  root.setProperty("--paper-2", p.paper2);
  root.setProperty("--ink", p.ink);
  root.setProperty("--orange", p.orange);
  root.setProperty("--orange-deep", p.orangeDeep);
  root.setProperty("--lox-deep", p.orangeDeep);
  root.setProperty("--mustard", p.mustard);
  root.setProperty("--lox", p.lox);
  root.setProperty("--pickle", p.pickle);
  root.setProperty("--schmear", p.schmear);
}

function applyTypePairing(name) {
  const root = document.documentElement.style;
  if (name === "bagel-fat") {
    root.setProperty("--display", '"Bagel Fat One", "Shrikhand", serif');
    root.setProperty("--serif", '"DM Serif Display", serif');
  } else if (name === "shrikhand") {
    root.setProperty("--display", '"Shrikhand", "Bagel Fat One", serif');
    root.setProperty("--serif", '"Frank Ruhl Libre", serif');
  } else if (name === "stencil") {
    root.setProperty("--display", '"Bowlby One SC", "Bagel Fat One", serif');
    root.setProperty("--serif", '"Domine", serif');
  } else if (name === "old-deli") {
    root.setProperty("--display", '"Frank Ruhl Libre", "DM Serif Display", serif');
    root.setProperty("--serif", '"Domine", serif');
  }
}

export function BubbysTweaks() {
  const [t, setTweak] = useTweaks({
    palette: "bubby",
    typePairing: "bagel-fat",
    showStickers: true,
    showGrain: true,
    spinningLogo: true,
  });

  React.useEffect(() => { applyPalette(t.palette); }, [t.palette]);
  React.useEffect(() => { applyTypePairing(t.typePairing); }, [t.typePairing]);
  React.useEffect(() => {
    document.documentElement.classList.toggle("no-grain", !t.showGrain);
  }, [t.showGrain]);
  React.useEffect(() => {
    document.documentElement.classList.toggle("no-stickers", !t.showStickers);
  }, [t.showStickers]);
  React.useEffect(() => {
    document.documentElement.classList.toggle("no-spin", !t.spinningLogo);
  }, [t.spinningLogo]);

  return (
    <TweaksPanel>
      <TweakSection title="Palette">
        <TweakRadio
          label=""
          value={t.palette}
          onChange={(v) => setTweak("palette", v)}
          options={[
            { value: "bubby",  label: "Bubby Orange" },
            { value: "deli",   label: "Late-Night Deli" },
            { value: "lox",    label: "Smoked Lox" },
            { value: "pickle", label: "Half-Sour" },
          ]}
        />
      </TweakSection>

      <TweakSection title="Type pairing">
        <TweakRadio
          label=""
          value={t.typePairing}
          onChange={(v) => setTweak("typePairing", v)}
          options={[
            { value: "bagel-fat", label: "Bagel Fat One" },
            { value: "shrikhand", label: "Shrikhand" },
            { value: "stencil",   label: "Bowlby SC" },
            { value: "old-deli",  label: "Old Deli" },
          ]}
        />
      </TweakSection>

      <TweakSection title="Flair">
        <TweakToggle label="Show stickers" value={t.showStickers} onChange={(v) => setTweak("showStickers", v)} />
        <TweakToggle label="Paper grain"   value={t.showGrain}    onChange={(v) => setTweak("showGrain", v)} />
        <TweakToggle label="Logo wiggle"   value={t.spinningLogo} onChange={(v) => setTweak("spinningLogo", v)} />
      </TweakSection>
    </TweaksPanel>
  );
}
