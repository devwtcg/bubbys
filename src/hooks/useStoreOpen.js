import { useEffect, useState } from "react";
import { BAGEL_SHOP_HOURS, CATERING_CUTOFF } from "../data/hours.js";

function torontoParts() {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Toronto",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  const out = {};
  for (const p of fmt.formatToParts(new Date())) out[p.type] = p.value;
  const wmap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return {
    day: wmap[out.weekday] ?? 0,
    minutes: Number(out.hour) * 60 + Number(out.minute),
  };
}

const parseHM = (s) => {
  const [h, m] = s.split(":").map(Number);
  return h * 60 + m;
};

function fmt12(hm) {
  const [h, m] = hm.split(":").map(Number);
  const period = h < 12 ? "AM" : "PM";
  const h12 = ((h + 11) % 12) + 1;
  return `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

function computeOpen() {
  const { day, minutes } = torontoParts();
  const today = BAGEL_SHOP_HOURS[day];
  if (!today) return { open: false, label: "CLOSED · SHABBAT", reason: "shabbat" };
  for (const slot of today) {
    if (minutes >= parseHM(slot.open) && minutes < parseHM(slot.close)) {
      return { open: true, label: "OPEN NOW", until: fmt12(slot.close) };
    }
  }
  if (minutes < parseHM(today[0].open)) {
    return { open: false, label: `OPENS ${fmt12(today[0].open)}`, reason: "before-open" };
  }
  return { open: false, label: "CLOSED FOR THE DAY", reason: "after-close" };
}

function computeCatering() {
  const { day, minutes } = torontoParts();
  const cutoffMin = CATERING_CUTOFF.hour * 60 + CATERING_CUTOFF.minute;
  // Accepting if today's weekday is before cutoff weekday, or it's cutoff day before the time.
  const accepting =
    day < CATERING_CUTOFF.weekday ||
    (day === CATERING_CUTOFF.weekday && minutes < cutoffMin);
  return {
    accepting,
    cutoffLabel: "Thursday 12:00 PM",
  };
}

export function useStoreOpen() {
  const [state, setState] = useState(() => ({
    store: computeOpen(),
    catering: computeCatering(),
  }));
  useEffect(() => {
    const tick = () => setState({ store: computeOpen(), catering: computeCatering() });
    const i = setInterval(tick, 60_000);
    return () => clearInterval(i);
  }, []);
  return state;
}
