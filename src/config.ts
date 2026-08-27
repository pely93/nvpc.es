export type SeoData = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  noindex?: boolean;
};

export const siteName = "NVPC · Networking Virtual PC";
export const siteUrl = "https://nvpc.es";
export const defaultOgImage = "/og-image.svg";

export function resolveSeo(data: SeoData) {
  const canonical = data.canonical
    ? new URL(data.canonical, siteUrl).toString()
    : undefined;
  const image = data.image
    ? new URL(data.image, siteUrl).toString()
    : new URL(defaultOgImage, siteUrl).toString();

  return {
    title: data.title.includes("NVPC") ? data.title : `${data.title} | NVPC`,
    description: data.description,
    canonical,
    image,
    noindex: data.noindex ?? false,
  };
}
