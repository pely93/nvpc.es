import { siteUrl } from "@/config";
import { business } from "@/data/business";

export const businessId = `${siteUrl}/#business`;
export const websiteId = `${siteUrl}/#website`;

export function siteGraph(path: string, title: string, description: string) {
  const url = `${siteUrl}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness", "@id": businessId,
        name: business.name, alternateName: "Networking Virtual PC", url: `${siteUrl}/`,
        logo: `${siteUrl}/logos/nvpc.jpg`, image: `${siteUrl}/logos/nvpc.jpg`,
        telephone: "+34667200016", email: business.email,
        address: { "@type": "PostalAddress", addressLocality: business.addressLocality,
          addressRegion: business.addressRegion, postalCode: "41015", addressCountry: "ES" },
        areaServed: { "@type": "Country", name: "España" },
        description: business.coverage,
        openingHoursSpecification: [{ "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:30", closes: "17:30" }],
      },
      { "@type": "WebSite", "@id": websiteId, url: `${siteUrl}/`, name: business.name,
        inLanguage: "es-ES", publisher: { "@id": businessId } },
      { "@type": path === "/contacto/" ? "ContactPage" : path === "/sobre-nvpc/" ? "AboutPage" : "WebPage",
        "@id": `${url}#webpage`, url, name: title, description, inLanguage: "es-ES",
        isPartOf: { "@id": websiteId }, about: { "@id": businessId } },
    ],
  };
}
