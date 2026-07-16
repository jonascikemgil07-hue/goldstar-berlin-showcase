// Platzhalterdaten – vom Kunden zu bestätigen / zu ersetzen.
export const shop = {
  name: "Juwelier Gold & Star",
  strasse: "Musterstraße 12",
  plz: "13407",
  ort: "Berlin-Reinickendorf",
  telefon: "+49 30 000 000",
  telefonHref: "tel:+493000000000",
  email: "kontakt@goldundstar.example",
  mapsQuery: "Juwelier+Gold+Star+Berlin+Reinickendorf",
  oeffnungszeiten: [
    { tag: "Montag – Freitag", zeit: "10:00 – 18:30 Uhr" },
    { tag: "Samstag", zeit: "10:00 – 14:00 Uhr" },
    { tag: "Sonntag", zeit: "Geschlossen" },
  ],
};

export const mapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${shop.strasse}, ${shop.plz} ${shop.ort}`,
)}`;
