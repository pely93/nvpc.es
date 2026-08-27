export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Servicios", href: "/servicios/" },
  { label: "Tarifas planas", href: "/tarifas/" },
  { label: "Zonas de servicio", href: "/zonas/" },
  { label: "Casos de éxito", href: "/casos-de-exito/" },
  { label: "Sobre NVPC", href: "/sobre-nvpc/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contacto", href: "/contacto/" },
];

export const footerServiceLinks: NavItem[] = [
  { label: "Mantenimiento informático", href: "/servicios/mantenimiento-informatico/" },
  { label: "Soporte informático", href: "/servicios/soporte-informatico/" },
  { label: "Redes y WiFi", href: "/servicios/redes-wifi/" },
  { label: "Seguridad informática", href: "/servicios/seguridad-informatica/" },
  { label: "Videovigilancia", href: "/servicios/videovigilancia/" },
  { label: "Recuperación de datos", href: "/servicios/recuperacion-datos/" },
  { label: "Diseño web", href: "/servicios/diseno-web/" },
  { label: "Consultoría tecnológica", href: "/servicios/consultoria-tecnologica/" },
];

export const footerLocationLinks: NavItem[] = [
  { label: "Sevilla", href: "/sevilla/" },
  { label: "Mantenimiento informático en Sevilla", href: "/sevilla/mantenimiento-informatico-sevilla/" },
  { label: "Soporte para empresas en Sevilla", href: "/sevilla/soporte-informatico-empresas-sevilla/" },
  { label: "Redes informáticas en Sevilla", href: "/sevilla/redes-informaticas-sevilla/" },
  { label: "WiFi para empresas en Sevilla", href: "/sevilla/wifi-empresas-sevilla/" },
  { label: "Seguridad informática en Sevilla", href: "/sevilla/seguridad-informatica-sevilla/" },
  { label: "Recuperación de datos en Sevilla", href: "/sevilla/recuperacion-datos-sevilla/" },
  { label: "Diseño web en Sevilla", href: "/sevilla/diseno-web-sevilla/" },
];
