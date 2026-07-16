export const shop = {
  name: "Juwelier Gold & Star",
  strasse: "Residenzstraße 47–48",
  plz: "13409",
  ort: "Berlin",
  bezirk: "Berlin-Reinickendorf",
  telefon: "0179 7973549",
  telefonHref: "tel:+491797973549",
  oeffnungszeiten: [
    { tag: "Montag – Freitag", zeit: "10:30 – 17:00 Uhr" },
    { tag: "Samstag", zeit: "10:00 – 14:00 Uhr" },
    { tag: "Sonntag", zeit: "Geschlossen" },
  ],
};

export const mapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${shop.strasse}, ${shop.plz} ${shop.ort}`,
)}`;

export const mapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Juwelier Gold & Star, ${shop.strasse}, ${shop.plz} ${shop.ort}`,
)}`;
