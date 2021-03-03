function getTimezoneAbbr(tzOffset) {
  switch (tzOffset) {
    case 0:
      return "GMT";
    case 1:
      return "CET";
    case 3:
      return "MSK";
    case 2:
    default:
      return "EET";
  }
}
export default function LocalTime({ start, end, format = "%start%-%end% %timezone%" }) {
  const tzOffset = -new Date().getTimezoneOffset() / 60;
  if (tzOffset >= 0 && tzOffset <= 3) {
    start = start - 2 + tzOffset;
    end = end - 2 + tzOffset;
  }
  const zoneAbbr = getTimezoneAbbr(tzOffset);
  return format
          .replace('%start%', start)
          .replace('%end%', end)
          .replace('%timezone%', zoneAbbr);
}
