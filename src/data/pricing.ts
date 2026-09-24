export type PricingFeature = { label: string; included: boolean | string };
export type PricingPlan = { id: "esencial" | "empresa" | "integral"; name: string; audience: string; priceNote: string; description: string; includes: string[]; excludes: string[]; features: PricingFeature[]; ctaLabel: string; highlighted?: boolean };
export const pricingPlans: PricingPlan[] = [
  {
    "id": "esencial",
    "name": "Plan Esencial",
    "audience": "Autónomos y pequeños negocios",
    "priceNote": "Desde 91,75 € IVA incluido/mes",
    "description": "La cuota final se calcula según el parque informático y el alcance del servicio.",
    "includes": [
      "Mantenimiento preventivo",
      "Soporte remoto en horario comercial",
      "Revisión periódica de equipos",
      "Atención de incidencias según las condiciones contratadas"
    ],
    "excludes": [
      "Visitas presenciales: se presupuestan aparte",
      "Servidores e infraestructura de red avanzada",
      "Proyectos y servicios específicos fuera del alcance"
    ],
    "features": [],
    "ctaLabel": "Solicitar propuesta"
  },
  {
    "id": "empresa",
    "name": "Plan Empresa",
    "audience": "Empresas con puestos, servidores y red",
    "priceNote": "Presupuesto personalizado",
    "description": "Definimos una cuota mensual según los equipos, la infraestructura y el soporte que necesita tu empresa.",
    "includes": [
      "Mantenimiento preventivo y correctivo según propuesta",
      "Soporte remoto y visitas concertadas según contratación",
      "Equipos, servidores y red definidos en la propuesta",
      "Copias de seguridad cuando estén contratadas"
    ],
    "excludes": [
      "Proyectos nuevos y ampliaciones fuera de contrato",
      "Equipos, licencias y trabajos no incluidos en la propuesta"
    ],
    "features": [],
    "ctaLabel": "Solicitar propuesta"
  },
  {
    "id": "integral",
    "name": "Plan Integral",
    "audience": "Empresas que coordinan su infraestructura IT",
    "priceNote": "Presupuesto personalizado",
    "description": "Una propuesta que reúne los servicios tecnológicos que necesita tu negocio, con el alcance definido antes de contratar.",
    "includes": [
      "Mantenimiento de infraestructura según propuesta",
      "Soporte de redes, equipos y servidores acordados",
      "Seguridad, copias y servicios cloud según contratación",
      "Microsoft 365 y asesoramiento cuando se incluyan"
    ],
    "excludes": [
      "Servicios no incluidos en el alcance acordado",
      "Proyectos y ampliaciones presupuestados por separado"
    ],
    "features": [],
    "ctaLabel": "Definir mi propuesta"
  }
];
export const pricingFaq = [
  {
    "question": "¿Cómo se calcula la cuota mensual?",
    "answer": "Según el número de equipos, los servidores, la infraestructura y las necesidades de soporte. La propuesta detalla los servicios incluidos y las condiciones aplicables."
  },
  {
    "question": "¿Hay permanencia?",
    "answer": "La duración del servicio y las condiciones de renovación y baja se detallan en la propuesta comercial antes de contratar."
  },
  {
    "question": "¿Qué ocurre si necesito una visita?",
    "answer": "Las visitas se conciertan previamente. Las condiciones de desplazamiento y los trabajos no incluidos en la cuota se comunican antes de la intervención."
  },
  {
    "question": "¿En qué horario se atienden las incidencias?",
    "answer": "De lunes a viernes, de 9:30 a 17:30. Los compromisos de atención se establecen en cada propuesta."
  },
  {
    "question": "¿Se pueden añadir equipos?",
    "answer": "Revisamos el alcance y la cuota cuando cambia tu infraestructura."
  },
  {
    "question": "¿Qué ocurre fuera del alcance del plan?",
    "answer": "Los proyectos, ampliaciones y trabajos adicionales se presupuestan por separado cuando no estén incluidos en el contrato."
  }
];
