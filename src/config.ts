export type SeoData = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  noindex?: boolean;
};

export const siteName = "NVPC · Networking Virtual PC";

// Despliegue en GitHub Pages bajo una subruta de proyecto: el sitio no vive en
// la raíz del dominio, sino en /nvpc-web/. siteUrl incluye esa subruta para
// que canonicals, Open Graph y JSON-LD generen URLs absolutas correctas.
export const siteUrl = "https://pely93.github.io/nvpc-web";
export const defaultOgImage = "/og-image.svg";

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

// GitHub Pages sirve el sitio bajo /nvpc-web/, así que cualquier enlace o
// asset interno escrito como ruta absoluta ("/servicios/") debe pasar por
// aquí antes de usarse en un href/src, o apuntará a la raíz del dominio
// (pely93.github.io) en lugar de a /nvpc-web/.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
