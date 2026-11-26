/** Türkiye (Europe/Istanbul) yerel saatine göre gökyüzü fazı */

export type SkyPhase = "day" | "night";

const TZ = "Europe/Istanbul";

/** Gündüz kabaca 06:30–19:00; gece dışı saatler */
export function getTurkeySkyPhase(date = new Date()): SkyPhase {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "12");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  const mins = hour * 60 + minute;

  const dayStart = 6 * 60 + 30; // 06:30
  const dayEnd = 19 * 60; // 19:00

  return mins >= dayStart && mins < dayEnd ? "day" : "night";
}

/** Bir sonraki faz değişimine kalan ms (yenileme için) */
export function msUntilNextSkyChange(date = new Date()): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((p) => p.type === type)?.value ?? "0");

  const y = get("year");
  const m = get("month");
  const d = get("day");
  const h = get("hour");
  const min = get("minute");
  const s = get("second");
  const mins = h * 60 + min;

  const dayStart = 6 * 60 + 30;
  const dayEnd = 19 * 60;

  let targetMins: number;
  let dayOffset = 0;
  if (mins < dayStart) {
    targetMins = dayStart;
  } else if (mins < dayEnd) {
    targetMins = dayEnd;
  } else {
    targetMins = dayStart;
    dayOffset = 1;
  }

  // Istanbul anını UTC ms’e kabaca: Date ile timezone farkını Intl üzerinden hesaplamak yerine
  // “şimdiki TR saati” ile hedef TR saatini farkla ölç.
  const nowMins = mins + s / 60;
  let deltaMins = targetMins - nowMins + dayOffset * 24 * 60;
  if (deltaMins <= 0) deltaMins += 24 * 60;
  return Math.max(5_000, Math.floor(deltaMins * 60_000));
}
