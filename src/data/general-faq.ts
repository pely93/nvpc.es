import { business } from "@/data/business";

export const generalFaq = [
  { question: "¿Qué servicios ofrece Networking Virtual PC?", answer: "Ofrecemos soporte y mantenimiento informático, redes y wifi, seguridad y recuperación de datos, además de diseño web y soluciones tecnológicas para empresas y profesionales." },
  { question: "¿En qué zonas ofrece NVPC servicio presencial y remoto?", answer: business.coverage },
  { question: "¿Cómo puedo solicitar asistencia informática?", answer: `Puedes llamar al ${business.phoneDisplay}, escribir a ${business.email} o contactar por WhatsApp en el mismo número. Nuestro horario es ${business.schedule.toLowerCase()}.` },
  { question: "¿Es necesario pedir cita para una visita?", answer: business.appointment },
  { question: "¿Cómo se determina el presupuesto?", answer: "Revisamos tus necesidades y el estado de los equipos o sistemas. Después definimos el alcance y el presupuesto antes de empezar. También ofrecemos tarifas planas de mantenimiento según el número de equipos y las necesidades de soporte." },
];
