export type PricingFeature = {
  label: string;
  included: boolean | string;
};

export type PricingPlan = {
  id: "esencial" | "empresa" | "integral";
  name: string;
  audience: string;
  priceNote: string;
  description: string;
  includes: string[];
  excludes: string[];
  features: PricingFeature[];
  ctaLabel: string;
  highlighted?: boolean;
};

// Precios no publicados: no hay cifras confirmadas. Cada plan enlaza a /contacto/
// para una propuesta a medida, tal y como exige el briefing comercial.
export const pricingPlans: PricingPlan[] = [
  {
    id: "esencial",
    name: "Plan Esencial",
    audience: "Autónomos y negocios pequeños",
    priceNote: "Desde [PRECIO PENDIENTE DE CONFIRMAR] €/mes",
    description:
      "Mantenimiento básico para quien depende de pocos equipos y necesita que sigan funcionando sin sorpresas.",
    includes: [
      "Número de equipos: [PENDIENTE DE CONFIRMAR]",
      "Soporte remoto en horario comercial",
      "Revisiones preventivas periódicas",
      "Gestión de incidencias de software",
      "Copias de seguridad básicas, si aplica",
    ],
    excludes: [
      "Visitas presenciales recurrentes (se presupuestan aparte)",
      "Gestión de servidores",
      "Infraestructura de red avanzada",
    ],
    features: [
      { label: "Equipos incluidos", included: "[PENDIENTE DE CONFIRMAR]" },
      { label: "Soporte remoto", included: true },
      { label: "Soporte presencial", included: "Bajo presupuesto" },
      { label: "Revisiones preventivas", included: true },
      { label: "Copias de seguridad", included: "Según necesidad" },
      { label: "Gestión de red", included: false },
      { label: "Consultoría tecnológica", included: false },
    ],
    ctaLabel: "Solicitar propuesta",
  },
  {
    id: "empresa",
    name: "Plan Empresa",
    audience: "Pequeñas y medianas empresas",
    priceNote: "Desde [PRECIO PENDIENTE DE CONFIRMAR] €/mes",
    description:
      "Para empresas con varios puestos de trabajo que necesitan soporte remoto y presencial combinado y una red estable.",
    includes: [
      "Número de puestos: [PENDIENTE DE CONFIRMAR]",
      "Servidores o dispositivos incluidos: [PENDIENTE DE CONFIRMAR]",
      "Soporte remoto y presencial",
      "Revisión periódica de equipos y red",
      "Gestión de red LAN/WiFi",
      "Copias de seguridad gestionadas",
    ],
    excludes: [
      "Proyectos de infraestructura nueva (cableado, ampliaciones)",
      "Consultoría estratégica extensa",
    ],
    features: [
      { label: "Puestos incluidos", included: "[PENDIENTE DE CONFIRMAR]" },
      { label: "Soporte remoto", included: true },
      { label: "Soporte presencial", included: true },
      { label: "Revisiones preventivas", included: true },
      { label: "Copias de seguridad", included: true },
      { label: "Gestión de red", included: true },
      { label: "Consultoría tecnológica", included: "Puntual" },
    ],
    ctaLabel: "Solicitar propuesta",
    highlighted: true,
  },
  {
    id: "integral",
    name: "Plan Integral",
    audience: "Empresas que externalizan su IT",
    priceNote: "Solicitar propuesta personalizada",
    description:
      "Cobertura amplia de puestos, infraestructura, redes y seguridad para empresas que quieren un único interlocutor tecnológico.",
    includes: [
      "Puestos incluidos: [PENDIENTE DE CONFIRMAR]",
      "Infraestructura y servidores: [PENDIENTE DE CONFIRMAR]",
      "Gestión de redes",
      "Seguridad informática y copias de seguridad",
      "Consultoría tecnológica continua",
      "Soporte prioritario, solo si se confirma",
    ],
    excludes: [
      "Desarrollo de software a medida de gran escala",
      "Servicios no incluidos en el alcance acordado por contrato",
    ],
    features: [
      { label: "Puestos incluidos", included: "[PENDIENTE DE CONFIRMAR]" },
      { label: "Soporte remoto", included: true },
      { label: "Soporte presencial", included: true },
      { label: "Revisiones preventivas", included: true },
      { label: "Copias de seguridad", included: true },
      { label: "Gestión de red", included: true },
      { label: "Consultoría tecnológica", included: true },
    ],
    ctaLabel: "Solicitar propuesta",
  },
];

export const pricingFaq = [
  {
    question: "¿Hay permanencia?",
    answer: "[PENDIENTE DE CONFIRMAR]. Las condiciones de permanencia se detallan en la propuesta comercial antes de firmar.",
  },
  {
    question: "¿Qué ocurre si necesito una visita?",
    answer:
      "Las visitas presenciales se acuerdan según el plan contratado. Si tu plan no las incluye o superan lo previsto, se presupuestan de forma independiente antes de realizarse.",
  },
  {
    question: "¿El soporte remoto está incluido?",
    answer: "El soporte remoto está incluido en los tres planes, dentro del horario comercial de NVPC.",
  },
  {
    question: "¿Se pueden añadir equipos?",
    answer:
      "Sí. Cada tarifa se recalcula cuando cambia el número de equipos o puestos de trabajo. Contacta con nosotros para actualizar tu plan.",
  },
  {
    question: "¿Qué ocurre fuera del alcance del plan?",
    answer:
      "Cualquier trabajo fuera del alcance contratado (proyectos nuevos, ampliaciones, incidencias excepcionales) se presupuesta de forma independiente antes de ejecutarse.",
  },
  {
    question: "¿Cómo se calcula la cuota mensual?",
    answer:
      "La cuota se calcula según el número de equipos, la complejidad de la infraestructura, las necesidades de soporte y si se requiere cobertura presencial habitual.",
  },
];
