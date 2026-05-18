// Bubby's 3035 Bathurst hours (America/Toronto). Saturday closed for Shabbat.
// Friday closes 4:00 PM to clear before sundown — covers winter Shabbat onset.
// TODO: chagim (Jewish holiday) closures — needs a Hebcal-style calendar.
export const BAGEL_SHOP_HOURS = {
  0: [{ open: "07:00", close: "16:00" }],  // Sun
  1: [{ open: "06:30", close: "18:30" }],  // Mon
  2: [{ open: "06:30", close: "18:30" }],  // Tue
  3: [{ open: "06:30", close: "18:30" }],  // Wed
  4: [{ open: "06:30", close: "18:30" }],  // Thu
  5: [{ open: "06:30", close: "16:00" }],  // Fri (early close for Shabbat)
  6: null,                                  // Sat — Shabbat
};

export const HOURS_DISPLAY = [
  ["Sunday",       "7:00 AM – 4:00 PM"],
  ["Mon – Thu",    "6:30 AM – 6:30 PM"],
  ["Friday",       "6:30 AM – 4:00 PM"],
  ["Saturday",     "Closed · Shabbat"],
];

// Catering: orders for this week's pickups close Thursday 12:00 PM Toronto time.
export const CATERING_CUTOFF = { weekday: 4, hour: 12, minute: 0 };
