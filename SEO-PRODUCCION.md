# Preparación para nvpc.es

La versión OVH se genera con `npm run build:ovh`, en `../production-ovh`.
La versión GitHub Pages mantiene sus rutas de revisión independientes.

## Incluido

- `/sitemap.xml`: índice generado automáticamente; 35 URLs públicas, sin redirecciones ni casos en borrador.
- `/robots.txt`: permite el rastreo y anuncia el sitemap del dominio correspondiente, también accesible a rastreadores de búsqueda de IA.
- Canonical, descripción, Open Graph, idioma y vista previa de imágenes.
- Identidad compartida LocalBusiness, WebSite y WebPage; ContactPage y AboutPage donde corresponde.
- Service, Article y migas de pan enlazados a esa identidad.
- FAQ visibles y JSON-LD generados a partir de las mismas respuestas, sin reseñas ni resultados inventados.
- Autoría visible del blog enlazada a Sobre NVPC.

## Validación

`python3 scripts/verify-seo.py ../production-ovh https://nvpc.es`
Comprueba canonical, H1, descripción, JSON-LD válido, referencias internas y cobertura exacta del sitemap.
Se han validado ambas versiones y ejecutado las comprobaciones de Astro, lint y pruebas.
La comprobación visual sigue limitada por el bloqueo del navegador. No se ha completado una validación externa de rich results ni una comprobación de indexación.

## Pendiente al acceder a OVH

- Conservar copia del sitio actual y revisar su configuración antes de sustituirlo.
- Inventariar URLs antiguas y configurar redirecciones 301 hacia páginas equivalentes; revisar reglas de WordPress que puedan interferir con la nueva web estática.
- Servir la web por HTTPS con un único dominio canónico y comprobar www, códigos HTTP, recursos y robots en el servidor real.
- Enviar `https://nvpc.es/sitemap.xml` a Google Search Console y Bing Webmaster Tools si se dispone de acceso.
- Evitar que la copia de revisión compita con producción una vez realizado el cambio.

No existe marcado especial que garantice aparecer en respuestas de IA. Estas mejoras facilitan acceso, comprensión y atribución del contenido.
Referencias: https://developers.google.com/search/docs/appearance/ai-features y https://developers.openai.com/api/docs/bots

## Analytics y consentimiento
GA4 G-FD38J4BHZ5 recuperado del código público actual (ExactMetrics). No se detectaron GTM ni Meta Pixel en inicio, servicios, tarifas y contacto. La nueva implementación carga gtag únicamente después de aceptar analíticas y solo en nvpc.es/www.nvpc.es. Aviso disponible también en revisión, sin envío a Google. Cinco pruebas de consentimiento verifican bloqueo inicial, rechazo, aceptación, caducidad y retirada. Pendiente validación de recepción en GA4 tras la publicación real.
