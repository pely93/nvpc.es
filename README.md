# NVPC · Networking Virtual PC

Web corporativa de NVPC construida con Astro y TypeScript.

## Stack y por qué

- **Astro**: genera HTML estático por defecto, con hidratación mínima. Ideal para una web de contenido/comercial sin necesidad de SPA.
- **TypeScript**: tipado en datos de negocio, colecciones de contenido y componentes.
- **Tailwind CSS** (`@astrojs/tailwind`): acelera el desarrollo de UI manteniendo consistencia visual mediante `tailwind.config.mjs` + variables CSS en `src/styles/global.css`.
- **@tailwindcss/typography**: da estilos de lectura legibles al contenido largo (servicios, artículos) sin escribir CSS a mano para cada elemento tipográfico.
- **Astro Content Collections**: valida con Zod el frontmatter de servicios, zonas, casos y artículos, evitando contenido mal formado.
- **@astrojs/sitemap**: genera el sitemap XML automáticamente a partir de las páginas construidas.
- **@astrojs/check**: valida tipos de Astro/TS en el build (`npm run build` lo ejecuta antes de compilar).
- **Vitest**: pruebas ligeras solo para funciones de datos puras (`src/config.ts`), no para páginas ni componentes.
- **ESLint + Prettier** (con `prettier-plugin-astro`): formato y calidad de código consistentes.

No se usa React, ni base de datos, ni `localStorage`/`sessionStorage`, tal y como exige el briefing del proyecto.

## Comandos

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # comprobación de tipos + build estático
npm run preview   # previsualización del build
npm run lint       # ESLint
npm run format     # Prettier
npm run test       # Vitest
```

## Estructura de contenido

- `src/content/services/` — páginas de servicio (`/servicios/[slug]/`).
- `src/content/locations/` — landings locales de Sevilla (`/sevilla/[slug]/`).
- `src/content/cases/` — casos de éxito (`/casos-de-exito/[slug]/`). Los marcados con `draft: true` no deben publicarse como reales hasta confirmar los datos con el cliente.
- `src/content/articles/` — artículos del blog (`/blog/[slug]/`).

## Datos editables

- `src/data/business.ts` — teléfono, email, WhatsApp, horario y enlaces de reseñas de Google. Los valores marcados `[PENDIENTE DE CONFIRMAR]` deben sustituirse antes de publicar en producción.
- `src/data/pricing.ts` — planes y FAQ de `/tarifas/`. Los precios están pendientes de confirmar; no se han inventado cifras.
- `src/data/navigation.ts` — enlaces del menú principal y del pie de página.

## Ampliar con nuevas zonas

`/zonas/` lista las localidades previstas (Dos Hermanas, Alcalá de Guadaíra, etc.) sin publicar todavía páginas propias. Para añadir una localidad real, crea una entrada en `src/content/locations/` con contenido específico (no dupliques el de otra localidad) y enlázala desde `/sevilla/` y `/zonas/`.

## Despliegue en GitHub Pages

El sitio se publica como GitHub Pages de proyecto en `https://pely93.github.io/nvpc.es/` mediante el workflow `.github/workflows/deploy.yml` (build con Astro + `actions/deploy-pages`). Para que este workflow sea el que despliegue, el repositorio debe tener **Settings → Pages → Build and deployment → Source: "GitHub Actions"** (si está en "Deploy from a branch", GitHub intenta procesar el repo con Jekyll y falla, porque interpreta el frontmatter `---` de los componentes `.astro` como YAML).

GitHub Pages de proyecto sirve siempre en `/<nombre-del-repo>/` — esa subruta no es configurable, tiene que coincidir con el nombre real del repositorio (`nvpc.es` en este caso). Esto implica dos ajustes que hay que mantener sincronizados si el repositorio cambia de nombre o de owner:

- `astro.config.mjs`: `site` (origen, sin subruta) y `base` (`/nvpc.es`, el nombre del repo).
- `src/config.ts`: `siteUrl`, usado para construir canonicals, Open Graph y JSON-LD absolutos.

Como GitHub Pages sirve el sitio bajo esa subruta, ningún enlace interno puede escribirse como ruta absoluta pelada (`href="/tarifas/"`); hay que pasarlo por `withBase()` (`src/config.ts`) o por un componente que ya lo haga internamente (`PrimaryButton`, `ServiceCard`, `CaseStudyCard`, `Breadcrumbs`). Los enlaces `[texto](/ruta/)` escritos en Markdown se reescriben automáticamente en build mediante un plugin remark definido en `astro.config.mjs`.

Si en el futuro el sitio pasa a servirse en la raíz de un dominio propio (p. ej. `nvpc.es` como dominio, con un `CNAME`), hay que: quitar `base` de `astro.config.mjs`, cambiar `site` a la URL raíz y actualizar `siteUrl` en `src/config.ts` a la misma URL sin subruta.
