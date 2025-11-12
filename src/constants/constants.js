// ========================================
// WEDDING WEBSITE CONSTANTS
// ========================================

// Couple Information

export function formatWeddingDate(dateInput) {
  const date = new Date(dateInput);

  // Helper to get ordinal suffix
  function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  }

  // Day name (e.g. Friday)
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  // Month name (e.g. December)
  const monthName = date.toLocaleDateString("en-US", { month: "long" });
  // Day of month with suffix
  const day = date.getDate();
  const dayWithSuffix = day + getOrdinal(day);
  // Year
  const year = date.getFullYear();

  return {
    weddingDate: `${dayName}, ${monthName} ${dayWithSuffix}, ${year}`,
    weddingDateShort: `${String(date.getMonth() + 1).padStart(2, "0")}.${String(
      day
    ).padStart(2, "0")}.${year}`,
    weddingDateFormatted: `${monthName} ${dayWithSuffix}, ${year}`,
  };
}

export const DEFAULT_PREVIEW_DATA = {
  brideName: "Parul",
  groomName: "Rahul",
  eventDate: "2026-07-24",
  imageSrc: "/images/hero.jpg",
  css_variables: [
    // { name: "--color-p1", value: "#955654" },
    // { name: "--color-p2", value: "#efe5dc" },
    { name: "--color-p1", value: "#985856" },
    { name: "--color-p2", value: "#c99593" },
    { name: "--color-p3", value: "#edd8d9" },
    { name: "--color-p4", value: "#efe5dc" },
    { name: "--color-p5", value: "#f8f3f4" },
    { name: "--color-s1", value: "#ff8c42" },
    { name: "--color-s2", value: "#eddddc" },
    { name: "--color-text-dark", value: "#2c1810" },
    { name: "--color-text-light", value: "#f5f5dc" },
  ],
};
