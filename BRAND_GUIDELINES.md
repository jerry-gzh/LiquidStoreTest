# COMMED — Guía de identidad de marca

Fecha: 2026-08-28 · Versión: 1.0 · Proyecto de origen: `E-commer-Astro`

## 1. Contexto y uso

Esta guía permite construir otro proyecto de COMMED sin redescubrir su identidad visual. Incluye identidad verbal, colores, tipografía, recursos gráficos, patrones de interfaz y una base CSS independiente del framework.

**Origen de las reglas:** los valores marcados como **existentes** se extrajeron del código y los recursos locales. Las **recomendaciones** completan lo necesario para reutilizarlos; no equivalen a un manual corporativo aprobado. No se modificó la interfaz al preparar este documento.

**Para empezar:** copiar esta guía, los recursos indicados en la sección 3 y los tokens CSS de la sección 9. Cargar Montserrat explícitamente. Aplicar primero el contenedor, encabezados, botones y tarjetas; después adaptar el contenido al nuevo producto.

Las rutas de origen de este documento son relativas a la raíz de `E-commer-Astro`. El Markdown es autónomo como especificación; no contiene las imágenes ni los archivos de fuente.

## 2. Identidad y voz

| Elemento | Referencia existente |
|---|---|
| Nombre | **COMMED**, siempre en mayúsculas |
| Descriptor | Material de curación e insumos médicos |
| Actividad | Distribución de material de curación, consumibles, diagnóstico y soluciones quirúrgicas |
| Público | Clínicas, consultorios y profesionales de la salud |
| Ubicación comunicada | Morelia, Michoacán, México |
| Propósito | Facilitar el acceso a insumos esenciales |
| Valores publicados | Selección especializada, atención directa y abasto responsable |
| Mensaje principal del sitio | «Insumos que cuidan cada detalle.» |
| Mensaje complementario | «Servicio claro, humano y especializado.» |
| Idioma y moneda del storefront | Español de México (`es-MX`) y MXN |

**Dirección de diseño inferida:** confianza, claridad, orden y atención humana. El azul marino da estructura; los fondos claros dejan respirar el contenido; el rojo identifica la marca y concentra los acentos.

### Recomendaciones de redacción

- Hablar de forma directa, profesional y cercana, con frases cortas y verbos concretos.
- Usar «Explorar catálogo», «Ver categorías», «Solicitar cotización» o «Consultar disponibilidad» según la función real.
- Explicar qué ocurre después de una acción. El formulario actual dice «Preparar correo» porque abre el cliente de correo; no afirmar «Solicitud enviada» sin un envío confirmado.
- Mantener nombres, presentaciones, unidades y cantidades precisos. Evitar textos vagos como «la mejor solución».
- No inventar certificaciones, beneficios clínicos, disponibilidad, tiempos de entrega ni garantías comerciales.
- Revalidar ubicación, teléfonos, correos, cobertura y condiciones comerciales antes de copiarlos. No son tokens de identidad.
- Conservar el formato local con `Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' })` cuando el nuevo producto opere en MXN.

## 3. Logotipo y archivos para exportar

El logotipo observado combina un corazón rojo, un trazo de pulso azul marino y el nombre COMMED debajo. La composición disponible es casi cuadrada, no un logotipo horizontal.

| Recurso en el origen | Características verificadas | Uso |
|---|---|---|
| `public/brand/commed-logo.png` | PNG, **277 × 265 px** | Logotipo completo; navegación y pie de página |
| `public/brand/commed-mark.png` | PNG, **277 × 235 px** | **No usar directamente:** el archivo muestra parte de la palabra COMMED recortada; no es un isotipo limpio |
| `public/favicon.svg` | SVG, `viewBox="0 0 64 64"` | Símbolo simplificado para favicon, con fondo blanco redondeado; no sustituye al logotipo completo |
| `public/brand/commed-social-card.png` | PNG, **1200 × 630 px** | Imagen social existente; revisar contenido y encuadre para el nuevo proyecto |
| `public/brand/commed-hero.webp` | Composición de insumos médicos | Imagen de portada, si el nuevo producto mantiene ese contexto |
| `public/brand/category-{curacion,quirurgico,diagnostico,consumibles}.webp` | Cuatro imágenes de categoría | Opcionales; solo para categorías equivalentes |
| `public/favicon.ico`, `public/favicon-16x16.png`, `public/favicon-32x32.png` | Variantes de favicon | Identificación de pestaña |
| `public/apple-touch-icon.png`, `public/android-chrome-192x192.png`, `public/android-chrome-512x512.png` | Iconos de aplicación | Accesos e instalación web |
| `public/site.webmanifest` | Nombre, idioma, iconos y colores | Adaptar nombre del producto, rutas y `start_url` al destino |

### Reglas de uso

- Mantener proporciones: `height: auto` o `width: auto`; usar `object-fit: contain`.
- Presentar el archivo completo sobre blanco. En el footer existente se coloca dentro de una placa blanca redondeada.
- No reconstruir el nombre con una fuente aproximada, recolorear el símbolo, deformarlo, girarlo ni aplicar sombras al propio logotipo.
- No tratar el PNG pequeño como original para impresión o grandes ampliaciones. Solicitar un vector maestro si hace falta.
- **Recomendación:** reservar alrededor un espacio libre mínimo equivalente al 15 % de la altura visible del logo; no se encontró una zona de protección corporativa definida.
- **Referencia existente, no mínimo oficial:** altura de 56 px en navegación y de 64–72 px en el footer. Validar legibilidad en cada soporte.
- Usar texto alternativo `COMMED` y, si es enlace al inicio, un nombre accesible como `COMMED, inicio`.

**Detalle para la migración:** el navbar declara `width="390" height="290"`, pero el PNG mide 277 × 265. Usar las dimensiones reales en el nuevo proyecto para reservar la proporción correcta.

## 4. Paleta de color

### Colores existentes de marca y superficies

| Rol | Token del proyecto | HEX | Aplicación |
|---|---|---|---|
| Azul marino principal | `--color-primary`, `--commed-navy` | `#06275F` | Títulos, navegación, CTA principal, footer |
| Rojo de marca | `--color-secondary`, `--commed-red` | `#ED1C24` | Énfasis, detalles gráficos, indicadores y CTA comerciales existentes |
| Azul complementario | `--color-accent`, `--commed-blue` | `#2C417B` | Acento de apoyo; no sustituye al marino |
| Blanco | `--color-base-100` | `#FFFFFF` | Tarjetas, superficies y texto sobre fondos oscuros |
| Hielo | `--color-base-200`, `--commed-ice` | `#F2F6FA` | Fondo general y secciones alternas |
| Borde / superficie secundaria | `--color-base-300` | `#E1E9F1` | Separadores y superficies de apoyo |
| Tinta / neutral | `--color-base-content`, `--color-neutral` | `#081A33` | Texto principal y barra de anuncios |

### Colores semánticos existentes

| Estado | Token | HEX |
|---|---|---|
| Información | `--color-info` | `#2D74B9` |
| Éxito | `--color-success` | `#18794E` |
| Advertencia | `--color-warning` | `#A15C00` |
| Error | `--color-error` | `#C8102E` |

El tema declara blanco como color de contenido para primary, secondary, accent, neutral y los cuatro estados. Esa declaración no garantiza que todas las combinaciones sean adecuadas para texto pequeño.

### Distribución recomendada

- Hacer dominar las superficies blancas y hielo; reservar el marino para estructura, encabezados y acciones.
- Usar rojo en áreas pequeñas: una frase destacada, un icono o una acción comercial. Evitar grandes bloques de texto rojo.
- No introducir otros colores de marca por página. Los colores de estado comunican una condición, no una nueva identidad.
- Conservar bordes discretos: el sitio utiliza marino al 10–15 % y fondos de apoyo al 5–10 %.
- No exportar las opacidades de texto sin revisar contraste: existen textos con marino al 40–70 % y blanco al 50–85 %.

### Contraste: observaciones para el nuevo proyecto

Relaciones calculadas con los HEX sólidos, sin transparencias:

| Combinación | Relación aproximada |
|---|---|
| Marino `#06275F` y blanco | 14.35:1 |
| Rojo `#ED1C24` y blanco | 4.38:1 |
| Rojo `#ED1C24` y hielo | 4.04:1 |
| Rojo oscuro `#C8102E` y blanco | 5.88:1 |

**Recomendación del proyecto:** buscar al menos 4.5:1 para texto normal. El rojo de marca con blanco queda por debajo de ese objetivo; preferir botones marino con texto blanco y enlaces marino subrayados. Si se requiere un botón rojo con texto pequeño, validar una variante más oscura; `#C8102E` es una candidata existente en la paleta, pero su uso como CTA sería una adaptación y no una regla original. Mantener el rojo del logotipo intacto.

## 5. Tipografía

**Familia declarada:** `Montserrat, "Segoe UI", Arial, sans-serif`.

**Limitación verificada:** no se encontró `@font-face`, importación de Montserrat, archivos locales de fuente ni enlace a un proveedor de fuentes. La familia declarada puede resolverse a Segoe UI o Arial. Para una reproducción consistente entre Windows y macOS, distribuir y cargar Montserrat explícitamente, verificando su licencia y los pesos incluidos.

| Uso existente | Tamaño | Peso y composición |
|---|---|---|
| H1 de portada | 48 px móvil, 60 px desde `sm`, 72 px desde `lg` | 900; interlineado `0.96`; tracking `-0.045em` |
| Título de sección | 36 px, 48 px desde `sm` o `md` según sección | Clase `.brand-title`: 900, `0.96`, `-0.045em` |
| Título de tarjeta | 18–20 px | 700–900; línea compacta |
| Introducción de portada | 18 px, 20 px desde `sm` | 500; interlineado relajado |
| Cuerpo | 14–16 px | Normal o 500; interlineado amplio |
| Etiqueta superior `.brand-kicker` | 12 px | 800; mayúsculas; tracking `0.22em`; rojo |
| Metadatos y badges | 10–12 px | 700–900; mayúsculas y tracking amplio |

Los tamaños en px equivalen a los rem y utilidades del proyecto con una raíz de 16 px. No fijar una raíz que impida ampliar texto.

### Recomendaciones de aplicación

- Cargar pesos reales 400, 500, 600, 700, 800 y 900, o una fuente variable que los cubra. No depender de negrita simulada.
- Reservar el interlineado `0.96` para títulos breves; subirlo a `1.05–1.15` si el texto largo o los acentos se amontonan.
- Usar 16 px y `line-height: 1.6` como punto de partida del cuerpo del nuevo proyecto.
- Evitar convertir párrafos completos en mayúsculas. La cursiva aparece en títulos operativos del carrito, pero no define el estilo general.
- No usar 10 px para información esencial del nuevo producto; ampliar metadatos cuando la legibilidad lo requiera.
- No reutilizar `src/layouts/Base.astro` como referencia tipográfica: no activa `data-theme="commed"` y aplica `font-sans`. La referencia de marca es `src/layouts/Layout.astro`.

## 6. Composición, espaciado y formas

| Patrón existente | Valor / referencia |
|---|---|
| Contenedor principal | Centrado, `max-w-7xl`: 80 rem / 1280 px |
| Márgenes laterales habituales | 16 px móvil, 24 px desde `sm`, 32 px desde `lg` |
| Breakpoints usados | `sm`: 640 px; `md`: 768 px; `lg`: 1024 px, con raíz de 16 px |
| Secciones | Separación vertical frecuente de 64–80 px |
| Separación entre bloques | 24–48 px según densidad |
| Grid de productos | 1 columna móvil, 2 desde `sm`, 4 desde `lg`; gap 28 px |
| Hero | Una columna en móvil; texto e imagen en dos columnas desde `lg` |
| Radio de selectores | 8 px (`--radius-selector`) |
| Radio de campos | 12 px (`--radius-field`) |
| Radio base de cajas | 16 px (`--radius-box`) |
| Tarjetas de producto y categoría | 24 px; sobrescriben el radio base |
| Contenedores destacados | 32 px |
| Botones comerciales | Forma de píldora; controles de icono circulares |
| Borde base | 1 px |
| Sombra de imagen principal | `0 30px 80px rgba(6,39,95,0.14)` |
| Sombra de navegación | `0 10px 30px rgba(6,39,95,0.08)` |

**Recomendación:** usar una escala de espaciado basada en 4 px: 4, 8, 12, 16, 24, 32, 48, 64 y 80. Adaptar la densidad para herramientas internas sin perder tipografía, colores y jerarquía.

### Recursos gráficos

- **Existente:** cuadrícula tenue de 32 × 32 px, con líneas de marino al 4.5 %.
- **Existente:** bloques geométricos a 45°, parcialmente fuera del encuadre, en marino y rojo.
- **Existente:** superficies luminosas, curvas amplias y sombras suaves con matiz marino.
- **Recomendación:** limitar estos recursos a portada o separadores. No poner decoraciones detrás de textos densos ni áreas de operación.
- **Recomendación:** mantener tema claro. No hay una identidad oscura COMMED definida; diseñarla y validarla por separado si se necesita.

## 7. Componentes que conviene reutilizar

| Componente | Patrón visual y comportamiento de referencia |
|---|---|
| Encabezado | Superficie blanca al 95 %, desenfoque suave, logo a la izquierda y acciones a la derecha; altura mínima 80 px |
| Navegación secundaria | Franja marino, texto blanco, categorías compactas y menú adaptado a móvil |
| Hero | Etiqueta superior, título grande, descripción breve, CTA principal marino y secundario con borde; imagen en caja de 32 px |
| Botón principal | Marino y blanco, forma píldora; una acción principal clara por bloque |
| Botón secundario | Borde y texto marino; fondo marino y texto blanco al pasar el puntero |
| CTA comercial existente | Rojo y blanco; aplicar la revisión de contraste de la sección 4 |
| Tarjeta de producto | Fondo blanco, radio 24 px, borde marino al 10 %, imagen 4:3 con `object-fit: contain`, título/precio marino y acción circular |
| Tarjeta de categoría | Imagen 4:3 con `object-fit: cover`, título fuerte y flecha dentro de círculo |
| Formulario | Caja blanca, campos hielo, etiquetas marino en negrita, espacios amplios; etiquetas visibles, no solo placeholders |
| Mensaje de estado | Caja blanca con texto marino, borde lateral de estado, texto que explique el resultado |
| Footer | Fondo marino, franja superior roja de 8 px, logo sobre blanco y contenido en columnas que se apilan |

`src/components/ui/button.astro` está vacío: no es un componente de botón listo para copiar. Los patrones existentes se implementan con clases en cada componente.

**Estados recomendados para cualquier componente nuevo:** reposo, hover, foco de teclado, activo, carga, deshabilitado y error. Los estados no deben depender exclusivamente del color; acompañar con texto, icono o atributo semántico.

**Diferencia existente que no conviene propagar:** los toasts usan éxito `#059669`, error `#ED1C24` e información `#06275F`, en lugar de los tokens semánticos del tema. En el nuevo proyecto, usar los tokens de la sección 4 como fuente única.

## 8. Fotografía, iconos y movimiento

### Imagen

- Usar productos médicos reconocibles sobre fondos claros, composiciones ordenadas y espacio libre suficiente.
- Mantener el producto completo en fichas (`contain`); reservar recortes (`cover`) para imágenes editoriales o categorías.
- La portada actual es un montaje de productos con formas geométricas. Su uso depende de que represente el catálogo del nuevo proyecto.
- No cambiar etiquetas, envases o marcas de terceros para hacerlos parecer productos COMMED.
- Confirmar derechos de uso y correspondencia con productos reales. El documento no acredita licencias de los recursos.
- Usar dimensiones explícitas, texto alternativo descriptivo y carga diferida fuera de la primera pantalla.

### Iconografía

La interfaz de marca usa principalmente **Lucide**, a través de `astro-icon`. Referencias: `heart`, `shopping-bag`, `arrow-up-right`, `badge-check`, `headset`, `package-check`, `phone`, `mail` y `map-pin`.

- Mantener iconos de trazo lineal y apariencia consistente; 16–20 px en acciones habituales, hasta 24 px en controles destacados.
- Usar marino como color base y rojo como acento. El favorito activo puede rellenarse.
- Preferir Lucide para componentes nuevos. La dependencia MDI existe, pero no debe introducir otra familia visual sin necesidad.
- Dar nombre accesible a botones que solo tienen icono; ocultar iconos puramente decorativos a tecnologías de asistencia.

### Movimiento y accesibilidad

- **Existente:** transiciones de interfaz de 300 ms; tarjetas que suben 4 px; imágenes con escala `1.05` en 500–700 ms; toasts de 180 ms.
- **Existente:** `prefers-reduced-motion: reduce` reduce animaciones/transiciones y desactiva scroll suave.
- **Existente:** foco global de 3 px con rojo al 70 % mezclado con blanco y separación de 3 px.
- **Recomendación:** conservar foco visible en todos los controles; algunos campos actuales lo eliminan con `focus:outline-none`. No copiar esa eliminación sin una alternativa perceptible.
- **Recomendación:** dar a las acciones táctiles una zona de interacción de al menos 44 × 44 px, aunque el icono sea menor.
- **Recomendación:** probar navegación por teclado, zoom y mensajes de estado. No depender de hover para descubrir acciones.

## 9. Base CSS portable para construir rápido

Este bloque propone una capa mínima sin Astro, Tailwind ni daisyUI. Los HEX, la familia, los radios y las sombras de marca vienen del proyecto; los nombres de tokens adicionales y las clases de componentes son una **adaptación recomendada**. No replica todos los estados del storefront.

```css
/* Cargar Montserrat antes de usar estos estilos.
   No se incluye @font-face porque debe apuntar a archivos reales del destino. */
:root {
  color-scheme: light;
  --commed-navy: #06275f;
  --commed-red: #ed1c24;
  --commed-blue: #2c417b;
  --commed-white: #ffffff;
  --commed-ice: #f2f6fa;
  --commed-border: #e1e9f1;
  --commed-ink: #081a33;
  --commed-info: #2d74b9;
  --commed-success: #18794e;
  --commed-warning: #a15c00;
  --commed-error: #c8102e;
  --commed-font: Montserrat, "Segoe UI", Arial, sans-serif;
  --commed-radius-field: 0.75rem;
  --commed-radius-box: 1rem;
  --commed-radius-card: 1.5rem;
  --commed-radius-hero: 2rem;
  --commed-shadow-hero: 0 30px 80px rgba(6, 39, 95, 0.14);
  --commed-shadow-nav: 0 10px 30px rgba(6, 39, 95, 0.08);
}

* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: var(--commed-font);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--commed-ink);
  background: var(--commed-ice);
  text-rendering: optimizeLegibility;
}
button, input, select, textarea { font: inherit; }
img { max-width: 100%; height: auto; }
a { color: var(--commed-navy); }
:focus-visible {
  outline: 3px solid var(--commed-navy);
  outline-offset: 3px;
}
/* Adaptación de foco para superficies oscuras. */
.commed-dark :focus-visible { outline-color: var(--commed-white); }

.commed-container {
  width: 100%;
  max-width: 80rem;
  margin-inline: auto;
  padding-inline: 1rem;
}
.commed-section { padding-block: 4rem; }
.brand-kicker {
  color: var(--commed-red);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}
.brand-title {
  color: var(--commed-navy);
  font-weight: 900;
  letter-spacing: -0.045em;
  line-height: 0.96;
}
.commed-h1 { font-size: 3rem; }
.commed-h2 { font-size: 2.25rem; }
.brand-grid {
  background-image:
    linear-gradient(rgba(6, 39, 95, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 39, 95, 0.045) 1px, transparent 1px);
  background-size: 32px 32px;
}
.commed-card {
  overflow: hidden;
  padding: 1.5rem;
  border: 1px solid rgba(6, 39, 95, 0.10);
  border-radius: var(--commed-radius-card);
  background: var(--commed-white);
}
.commed-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--commed-navy);
  border-radius: 9999px;
  background: var(--commed-navy);
  color: var(--commed-white);
  font-weight: 700;
  line-height: 1.25;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 180ms ease, color 180ms ease;
}
.commed-button:hover:not(:disabled) { background: var(--commed-blue); }
.commed-button--outline {
  background: transparent;
  color: var(--commed-navy);
}
.commed-button--outline:hover:not(:disabled) {
  background: var(--commed-navy);
  color: var(--commed-white);
}
.commed-button:disabled { opacity: 0.5; cursor: not-allowed; }
.commed-field {
  width: 100%;
  min-height: 2.75rem;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(6, 39, 95, 0.15);
  border-radius: var(--commed-radius-field);
  background: var(--commed-ice);
  color: var(--commed-ink);
}
.commed-field[aria-invalid="true"] { border-color: var(--commed-error); }
@media (min-width: 40rem) {
  .commed-container { padding-inline: 1.5rem; }
  .commed-h1 { font-size: 3.75rem; }
  .commed-h2 { font-size: 3rem; }
}
@media (min-width: 64rem) {
  .commed-container { padding-inline: 2rem; }
  .commed-section { padding-block: 5rem; }
  .commed-h1 { font-size: 4.5rem; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

**Notas de adaptación:** el foco del bloque es marino sólido para superficies claras, no la mezcla roja original. `.brand-kicker` conserva el rojo original y necesita la revisión de contraste descrita antes. En enlaces no existe `disabled` nativo: implementar su comportamiento por separado. Los campos inválidos necesitan además un mensaje asociado.

### Si el destino conserva Tailwind y daisyUI

Copiar el bloque `[data-theme="commed"]` de `src/styles/global.css` y activar `data-theme="commed"` en `<html>`. Copiar también las reglas globales de marca y cargar Montserrat. Esto conserva los nombres de colores que consumen `btn-primary`, `bg-base-200`, `text-primary` y otras utilidades existentes. No basta con copiar las cuatro variables de `:root`.

Mantener `<html lang="es-MX">`, `theme-color: #06275F`, favicons y metadatos con el nombre COMMED. Actualizar título, descripción e imagen social según el producto; no copiar rutas de comercio si no existen en el destino.

## 10. Brief reutilizable para otro proyecto

> Construye una interfaz para COMMED usando esta guía. Conserva el logotipo completo sin deformarlo; usa azul marino #06275F, rojo #ED1C24, hielo #F2F6FA, blanco y tinta #081A33. Carga Montserrat de forma explícita. Usa títulos de peso 900, contenedores centrados de hasta 1280 px, tarjetas de 24 px de radio, botones tipo píldora y sombras suaves. Prioriza superficies claras e iconos Lucide. El tono es profesional, cercano y preciso, en español de México. Adapta navegación y contenido al objetivo del nuevo producto. Revisa contraste, foco de teclado y tamaños táctiles. No inventes certificaciones ni condiciones comerciales. No copies precios, inventario ni datos de demostración. Distingue las reglas existentes de las adaptaciones propuestas en esta guía.

## 11. Validación y pendientes de exportación

### Validación de esta guía

- Se contrastaron colores, tipografía declarada, radios, cuadrícula y reducción de movimiento con `src/styles/global.css`.
- Se revisaron `src/layouts/Layout.astro` y componentes de inicio, navegación, productos, contacto, nosotros, footer y toasts.
- Se inspeccionaron visualmente el logo, `commed-mark.png` y la portada; se leyeron dimensiones de los PNG de marca y el SVG del favicon.
- Se verificó la ausencia de una carga explícita de Montserrat en las fuentes del proyecto.
- Se calcularon relaciones de contraste para las combinaciones sólidas de la sección 4.
- Se revisaron codificación, enlaces locales y diferencias de documentación. No se ejecutó una auditoría visual del sitio en navegador ni una certificación de accesibilidad; el cambio es documental.

### Checklist para el proyecto receptor

- [ ] Copiar guía y recursos necesarios; confirmar que sus rutas resuelven en el destino.
- [ ] Cargar Montserrat y comprobar la fuente efectiva en navegador, también en Windows y macOS.
- [ ] Conservar las proporciones reales del logo; no usar `commed-mark.png` como isotipo limpio.
- [ ] Aplicar tokens de marca y estados semánticos desde una sola fuente.
- [ ] Validar contraste de botones rojos, etiquetas, opacidades de texto, bordes funcionales y foco.
- [ ] Probar móvil, escritorio, zoom, teclado y reducción de movimiento.
- [ ] Verificar licencias y calidad de imágenes; solicitar un logotipo vectorial si se necesita.
- [ ] Confirmar textos y datos comerciales con la empresa; retirar información de demostración.
- [ ] Revisar imagen social, título, descripción, favicons y manifest.

**Alcance del cambio:** incorporación de esta guía y enlace desde el índice del README. La aprobación corporativa, los originales vectoriales, la carga de fuentes y las correcciones de interfaz quedan fuera de este cambio documental.
