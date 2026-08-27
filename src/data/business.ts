// Datos únicos de la empresa. Cambia aquí y se propaga a toda la web
// (cabecera, pie, JSON-LD, botones de contacto, página de opinión, etc.).

export const business = {
  name: "NVPC · Networking Virtual PC",
  shortName: "NVPC",
  phone: "667200016",
  phoneDisplay: "667 200 016",
  phoneHref: "tel:+34667200016",
  email: "info@nvpc.es",
  whatsappNumber: "34667200016",
  whatsappDefaultMessage: "Hola, quiero información sobre los servicios informáticos de NVPC.",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappDefaultMessage)}`;
  },
  schedule: "Lunes a viernes, de 9:30 a 17:30",
  scheduleShort: "L-V 9:30-17:30",
  areaPrimary: "Sevilla y provincia",
  areaSecondary: "Servicio remoto en toda España",
  addressLocality: "Sevilla",
  addressRegion: "Andalucía",
  addressCountry: "ES",
  // Sin dirección física pública confirmada: no se declara en JSON-LD hasta validarla.
  streetAddress: "[PENDIENTE DE CONFIRMAR]",
  postalCode: "[PENDIENTE DE CONFIRMAR]",
  googleReviewUrl: "[GOOGLE_REVIEW_URL_PENDIENTE]",
  googleReviewQrUrl: "[GOOGLE_REVIEW_QR_PENDIENTE]",
  googleBusinessProfileUrl: "[GOOGLE_BUSINESS_PROFILE_URL_PENDIENTE]",
  foundingYear: "[PENDIENTE DE CONFIRMAR]",
} as const;
