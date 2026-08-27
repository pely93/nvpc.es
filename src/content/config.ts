import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    description: z.string(),
    category: z.enum([
      "soporte-mantenimiento",
      "redes-infraestructura",
      "seguridad-continuidad",
      "presencia-digital",
    ]),
    order: z.number().default(0),
    problem: z.string(),
    audience: z.array(z.string()),
    includes: z.array(z.string()),
    benefits: z.array(z.string()),
    remoteWork: z.string(),
    onSiteWork: z.string(),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })),
    relatedServices: z.array(z.string()).default([]),
  }),
});

const locations = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    service: z.string(),
    description: z.string(),
    intro: z.string(),
    commonProblems: z.array(z.string()),
    includes: z.array(z.string()),
    coverageAreas: z.array(z.string()).optional(),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })),
    relatedService: z.string(),
  }),
});

const cases = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    service: z.string(),
    location: z.string(),
    clientType: z.string(),
    problem: z.string(),
    work: z.string(),
    result: z.string(),
    date: z.date(),
    draft: z.boolean().default(true),
    consent: z.enum(["pendiente", "confirmado"]).default("pendiente"),
  }),
});

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "mantenimiento-informatico",
      "redes-wifi",
      "seguridad-copias",
      "recuperacion-datos",
      "diseno-web",
      "trabajo-remoto",
      "casos-de-trabajo",
    ]),
    date: z.date(),
    updatedDate: z.date().optional(),
  }),
});

export const collections = { services, locations, cases, articles };
