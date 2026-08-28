# Identidad COMMED sobre Dawn

Fecha: 2026-08-28. Solicitud: integrar la marca en encabezado, pie y portada del tema de desarrollo, preservando las funciones de comercio de Shopify.

## Cambios y decisiones

- Identidad: marino `#06275F`, rojo `#ED1C24`, hielo `#F2F6FA`, botones redondeados y tarjetas de 24 px. Las etiquetas pequeñas usan rojo oscuro `#C8102E` como adaptación de contraste; el logo y los títulos grandes conservan el rojo de marca.
- Tipografía: Montserrat mediante la biblioteca de fuentes de Shopify, con selectores nativos; cuerpo 400, énfasis 700 y títulos 900. No se añaden peticiones a Google Fonts ni archivos de fuente ficticios. Referencia: [fuentes de Shopify](https://shopify.dev/docs/storefronts/themes/best-practices/performance/self-host-web-fonts).
- Encabezado: se conserva el comportamiento de búsqueda, cuenta, carrito y menú móvil de Dawn. El logo COMMED es un respaldo; la imagen seleccionada en el tema tiene prioridad.
- Inicio: secciones propias de portada, categorías y nosotros. Cada sección tiene ajustes de contenido; imágenes y enlaces se pueden sustituir desde el editor.
- Pie: sección COMMED configurable, enlaces de navegación, contacto y políticas existentes. No se inventan teléfonos, correos, certificaciones o condiciones comerciales.
- Productos destacados: bloque conservado pero deshabilitado en el inicio. La tienda mostraba `Short MTB`, un producto de prueba ajeno al catálogo médico; no se eliminó ni alteró ese producto.
- Assets: siete copias planas con hashes idénticos a los originales. Las fotos de `assets/catalog/` no crean productos ni se presentan con precios inventados.
- Menú móvil: `commed.js` cierra el panel de Dawn en enlaces internos y mueve el foco a la sección de destino. No altera clics modificados ni navegación hacia otras páginas.
- Metadatos: título y descripción de inicio, nombre de marca, color del navegador, favicon y tarjeta social de respaldo. No se cambió el nombre administrativo de la tienda.

## Archivos principales

| Área | Archivos |
|---|---|
| Identidad visual | `assets/commed.css`, `assets/commed.js`, `assets/commed-*` |
| Secciones editables | `sections/commed-hero.liquid`, `sections/commed-categories.liquid`, `sections/commed-about.liquid`, `sections/commed-footer.liquid` |
| Composición | `templates/index.json`, `sections/header-group.json`, `sections/footer-group.json` |
| Configuración | `config/settings_schema.json`, `config/settings_data.json` |
| Integración con Dawn | `layout/theme.liquid`, `sections/header.liquid`, `snippets/header-dropdown-menu.liquid`, `snippets/header-drawer.liquid`, `snippets/meta-tags.liquid` |
| Reutilización | `snippets/commed-logo.liquid`, `snippets/commed-navigation.liquid` |
| Validación | `tests/commed.test.mjs`, comando `npm test` |

## Edición por el comerciante

- Configuración del tema → COMMED: nombre, descripción y navegación inicial. Desactivar «Usar navegación inicial COMMED» para volver al menú seleccionado en el encabezado de Dawn.
- Configuración del tema → Logo y tipografía: sustituir el logo/favicons o elegir otras fuentes sin modificar Liquid.
- Portada COMMED: editar textos, imagen y acciones. La imagen incluida tiene espacio libre a la izquierda; conservar esa composición al reemplazarla para que el texto sea legible.
- Categorías COMMED: asignar una colección a cada tarjeta, sustituir imagen, título y descripción o indicar otro enlace. Prioridad del enlace: URL explícita, colección seleccionada, búsqueda por nombre. Prioridad de imagen: selección propia, imagen de colección, respaldo COMMED.
- Nosotros y pie: editar textos y contacto. Si no se indica URL, se usa la página existente con identificador `contact`; si no existe, no se muestra ese botón.
- Productos destacados: reactivar solo después de seleccionar una colección médica válida.

## Validación realizada

- `npm test`: cinco pruebas aprobadas (integridad de imágenes, composición/schemas, configuración de marca y casos de navegación móvil).
- `node --check assets/commed.js`: sin errores de sintaxis.
- Theme Check: salida 0, cero errores y 51 advertencias. Se mantienen las reglas heredadas de Dawn; no se deshabilitó ninguna adicional.
- Cuarenta y nueve advertencias ya existían en la base. Los dos avisos nuevos `OrphanedSnippet` corresponden a `commed-logo` y `commed-navigation`, aunque están llamados explícitamente desde encabezado, menús y pie y se renderizan en navegador. Se registran como aparentes falsos positivos del analizador en este entorno, no como errores ocultados.
- Vista previa real en `http://127.0.0.1:9292`: portada y pie renderizados, imágenes cargadas, estilos Montserrat aplicados (400 en cuerpo y 900 en título), un H1 en el inicio.
- Revisión visual en escritorio y móvil; sin desbordamiento horizontal en pruebas a 390 y 320 px. Menú móvil abre y cierra al seleccionar «Categorías»; `aria-expanded` vuelve a `false`.
- Búsqueda nativa abre su diálogo; carrito abre su estado vacío. La categoría «Material de curación» abre una búsqueda sin resultados, coherente con el catálogo actual.

## Pendientes y límites

- La tienda sigue configurada en inglés: búsqueda, carrito, cuenta y nombres de políticas nativas conservan ese idioma. Configurar español en Shopify Admin; no sustituir a la fuerza los archivos de traducción ingleses ni declarar `es-MX` en HTML mientras el contenido nativo siga en inglés.
- El componente nativo de cuenta registra en consola que no existe `customer-account-main-menu` en la tienda y utiliza su menú de respaldo. Se observó también antes de la personalización; configurar ese menú en Shopify o revisar su selección antes de la entrega comercial.
- Crear/cargar catálogo médico real y colecciones; asignarlas a las tarjetas. No inferir inventario o disponibilidad a partir de las fotos recibidas.
- Confirmar textos de contacto, datos del negocio, derechos de uso de recursos y políticas antes de producción.
- No se probaron variantes, creación de pedidos, pagos ni checkout; tampoco se realizó una auditoría completa de accesibilidad o rendimiento.
- Los cambios se sincronizan únicamente mediante la sesión de desarrollo existente. No se ejecutó `theme publish`, no se usó `--allow-live` y no se alteraron ajustes administrativos.
