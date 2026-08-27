# Design — NVPC

Sistema de diseño bloqueado para la web de NVPC. Cualquier página o
componente nuevo debe leer este archivo antes de introducir color,
tipografía o espaciado nuevos — se amplía este documento, no se
reinventa por página.

## Género
editorial

Encaja con el encargo: empresa de soporte informático B2B en Sevilla,
público profesional y no especialmente joven, que busca confianza y
seriedad, no la estética "SaaS/startup" de Linear o Stripe.

## Familia de macroestructura
Una sola familia para todo el sitio (no es una landing única, es un
sitio de contenido/negocio con ~30 páginas). Se conserva la
arquitectura de información existente (home → servicios → tarifas →
zonas → casos → blog); lo que cambia es la capa visual:

- Home / páginas comerciales: composición asimétrica ya existente
  (bloque de servicio destacado a doble columna + bloques menores),
  con jerarquía por peso y tamaño en vez de tarjetas idénticas.
- Páginas de servicio / localidad / artículo: columna de lectura
  (prose) a la izquierda + panel lateral de contacto — mismo patrón
  en las tres, varía solo el contenido.
- Tarifas: tabla comparativa / tarjetas apiladas — sin cambios de
  estructura, se retoca la voz visual (hairlines, no bordes gruesos).

## Tema

Paleta OKLCH ancla en azul petróleo (tono ~230), con un acento cobre
muy dosificado (tono ~50). No hay blanco ni negro puros en ningún
token.

- `--color-paper`     oklch(97% 0.006 230)
- `--color-surface`   oklch(94% 0.010 230)
- `--color-ink`       oklch(22% 0.020 235)
- `--color-ink-soft`  oklch(42% 0.016 233)
- `--color-rule`      oklch(84% 0.012 230)
- `--color-brand`     oklch(30% 0.058 233)
- `--color-brand-2`   oklch(22% 0.050 235)
- `--color-accent`    oklch(63% 0.14 55)
- `--color-focus`     oklch(63% 0.14 55)

## Tipografía

- Display: **Source Serif 4**, peso 600 (titulares, H1–H3) — serif de
  transición, con autoridad impresa sin caer en lo clásico/lujo.
- Cuerpo: **IBM Plex Sans**, peso 400 (texto, UI, navegación) — sans
  de ingeniería, sobria, encaja con una empresa técnica.
- Sin tercera familia (outlier). Dos familias es la elección correcta
  para un sitio de contenido, no de marca-espectáculo.
- Escala: ratio 1.25 (tercera mayor), ancla `--text-display:
  clamp(2.5rem, 4vw + 1rem, 3.75rem)` — deliberadamente contenida:
  esto es una empresa de soporte técnico, no un manifiesto.
- Tracking negativo en titulares grandes (-0.01em a -0.02em);
  tracking positivo + versalitas en etiquetas y navegación
  (`letter-spacing: 0.06em`, uppercase).

## Espaciado

Escala de 4pt ya existente en `--space-section`; se añade una escala
nombrada completa en `global.css`. Los componentes deben usar los
tokens, nunca valores sueltos.

## Voz de componentes

- **Bordes**: hairline (1px, `--color-rule`), no bordes gruesos ni
  sombras. Radio de esquina mínimo (4px) o cero en tarjetas — nada de
  `rounded-lg`/`rounded-xl` generalizado.
- **Botones**: relleno sólido en `--color-brand` para la acción
  primaria, sin degradado, esquinas casi rectas, etiqueta en
  versalitas trackeadas. El acento cobre se reserva para detalles
  (foco, subrayado on-hover, número de proceso), nunca para rellenar
  botones o secciones grandes.
- **Cabecera**: doble filete (hairline) en vez de sombra; enlaces de
  navegación en versalitas trackeadas; el estado activo se marca con
  un subrayado en el acento, no con un color de fondo.
- **Pie**: fondo en `--color-brand-2`, columnas separadas por
  hairlines verticales en vez de solo espacio en blanco.
- **Numeración de proceso** ("Cómo trabajamos"): cifras en display
  serif y color acento — es el único sitio, junto al foco de
  formularios, donde el acento aparece con más peso.

## Motion

Mínimo: transiciones de color/borde en hover (150–200ms), sin
animaciones de entrada por scroll. El público no necesita
espectáculo, necesita que la página cargue rápido y se lea bien.

## Qué deben compartir todas las páginas
- Los tokens de color y tipografía de arriba.
- La voz de botones (relleno sólido petróleo, versalitas trackeadas).
- El patrón de cabecera de sección (título serif + regla fina, sin
  numeración de sección tipo "01 · Servicios").

## Qué pueden variar
- La composición interna de cada plantilla (ServiceLayout,
  LocationLayout, CaseStudyLayout, ArticleLayout) dentro de su propio
  patrón columna+panel.
- El uso del acento cobre, siempre por debajo del 5% de cualquier
  vista.
