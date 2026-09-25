export type SeoData = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  noindex?: boolean;
};

export const siteName = "NVPC · Networking Virtual PC";

// Astro supplies the deployment origin and base to SEO and structured data.
export const siteUrl = `${import.meta.env.SITE ?? "https://pely93.github.io"}${(import.meta.env.BASE_URL ?? "/nvpc.es/").replace(/\/$/, "")}`;
export const defaultOgImage = "/logos/nvpc.jpg";

function toAbsoluteUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

export function resolveSeo(data: SeoData) {
  const canonical = data.canonical ? toAbsoluteUrl(data.canonical) : undefined;
  const image = toAbsoluteUrl(data.image ?? defaultOgImage);

  return {
    title: data.title.includes("NVPC") ? data.title : `${data.title} | NVPC`,
    description: data.description,
    canonical,
    image,
    noindex: data.noindex ?? false,
  };
}

// GitHub Pages sirve el sitio bajo /nvpc.es/, así que cualquier enlace o
// asset interno escrito como ruta absoluta ("/servicios/") debe pasar por
// aquí antes de usarse en un href/src, o apuntará a la raíz del dominio
// (pely93.github.io) en lugar de a /nvpc.es/.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
