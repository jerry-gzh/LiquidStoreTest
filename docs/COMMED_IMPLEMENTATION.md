# Identidad COMMED sobre Dawn

Fecha: 2026-08-28. Solicitud: integrar la marca en encabezado, pie y portada del tema de desarrollo, preservando las funciones de comercio de Shopify.

## Cambios y decisiones

- Identidad: marino `#06275F`, rojo `#ED1C24`, hielo `#F2F6FA`, botones redondeados y tarjetas de 24 px. Las etiquetas pequeñas usan rojo oscuro `#C8102E` como adaptación de contraste; el logo y los títulos grandes conservan el rojo de marca.
- Tipografía: Montserrat mediante la biblioteca de fuentes de Shopify, con selectores nativos; cuerpo 400, énfasis 700 y títulos 900. No se añaden peticiones a Google Fonts ni archivos de fuente ficticios. Referencia: [fuentes de Shopify](https://shopify.dev/docs/storefronts/themes/best-practices/performance/self-host-web-fonts).
- Encabezado: se conserva el comportamiento de búsqueda, cuenta, carrito y menú móvil de Dawn. El logo COMMED es un respaldo; la imagen seleccionada en el tema tiene prioridad.
- Inicio: secciones propias de portada, categorías, misión y visión, y nosotros. Cada sección tiene ajustes de contenido; imágenes, textos y enlaces se pueden sustituir desde el editor.
- Pie: sección COMMED configurable, enlaces de navegación, contacto y políticas existentes. El WhatsApp principal usa el número confirmado por el usuario; no se inventan correos, certificaciones o condiciones comerciales.
- Productos destacados: bloque conservado pero deshabilitado en el inicio. La tienda mostraba `Short MTB`, un producto de prueba ajeno al catálogo médico; no se eliminó ni alteró ese producto.
- Assets: siete copias planas con hashes idénticos a los originales. Las fotos de `assets/catalog/` no crean productos ni se presentan con precios inventados.
- Menú móvil: `commed.js` cierra el panel de Dawn en enlaces internos y mueve el foco a la sección de destino. No altera clics modificados ni navegación hacia otras páginas.
- Metadatos: título y descripción de inicio, nombre de marca, color del navegador, favicon y tarjeta social de respaldo. No se cambió el nombre administrativo de la tienda.

## Archivos principales

| Área | Archivos |
|---|---|
| Identidad visual | `assets/commed.css`, `assets/commed.js`, `assets/commed-*` |
| Secciones editables | `sections/commed-hero.liquid`, `sections/commed-categories.liquid`, `sections/commed-mission-vision.liquid`, `sections/commed-about.liquid`, `sections/commed-footer.liquid` |
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
- WhatsApp: el enlace `https://wa.me/5214431600867` se muestra en Nosotros, en la página de contacto, en el pie y como botón flotante global. El número visible es `+52 1 443 160 0867`; ambos valores y la visibilidad se administran en Configuración del tema → COMMED.
- Redes sociales: LinkedIn, Instagram y Facebook usan los campos globales de Configuración del tema → Redes sociales. Para completar la demo apuntan provisionalmente al inicio oficial de cada plataforma; deben sustituirse por los perfiles de COMMED cuando estén disponibles.
- Misión y visión: la nueva sección de portada incluye texto inicial editable para una demo. Confirmar su redacción corporativa antes de producción.
- Productos destacados: reactivar solo después de seleccionar una colección médica válida.

## Contacto principal por WhatsApp: cambio del 2026-08-29

- Solicitud: convertir `+52 1 443 160 0867` en el principal canal de contacto visible.
- Decisión: un único snippet normaliza el número para `wa.me` y genera los enlaces; así se evita mantener URLs distintas entre secciones.
- Alcance: sección Nosotros/contacto del inicio, formulario de contacto, pie y botón flotante en todas las páginas que usan `layout/theme.liquid`.
- Accesibilidad: cada enlace incluye nombre descriptivo, aviso de nueva ventana, foco visible y un icono SVG decorativo. El botón flotante respeta el área segura móvil y la preferencia de movimiento reducido.
- Configuración: la visibilidad, el número del enlace y el formato visible quedan editables en la sección COMMED del editor del tema.

## Redes sociales, misión y visión: cambio del 2026-08-29

- Solicitud: agregar LinkedIn, Instagram y Facebook a contacto con iconografía consistente, y crear una sección de misión y visión.
- Decisión: cuatro iconos SVG de línea comparten el mismo componente y lenguaje visual; WhatsApp conserva prioridad como botón principal. Los perfiles sociales se ocultan mientras su URL esté vacía.
- Estado de demo: `https://www.linkedin.com/`, `https://www.instagram.com/` y `https://www.facebook.com/` se configuraron como destinos temporales para mantener visibles los cuatro botones.
- Alcance: Nosotros/contacto del inicio, página de contacto y nueva sección `commed-mission-vision` antes de Nosotros.
- Contenido: misión y visión se incluyen como texto provisional editable, coherente con el alcance de la demo y sin afirmaciones verificables adicionales.

## Validación realizada

- `npm test`: ocho pruebas aprobadas (integridad de imágenes, composición/schemas, configuración de marca, WhatsApp, redes sociales y casos de navegación móvil).
- `node --check assets/commed.js`: sin errores de sintaxis.
- Theme Check: salida 0, cero errores y 54 advertencias. Se mantienen las reglas heredadas de Dawn; no se deshabilitó ninguna adicional.
- Cuarenta y nueve advertencias ya existían en la base. Los cinco avisos nuevos `OrphanedSnippet` corresponden a los snippets COMMED reutilizables, aunque están llamados explícitamente desde el tema. Se registran como aparentes falsos positivos del analizador en este entorno, no como errores ocultados.
- Vista previa real en `http://127.0.0.1:9292`: portada y pie renderizados, imágenes cargadas, estilos Montserrat aplicados (400 en cuerpo y 900 en título), un H1 en el inicio.
- Revisión visual en escritorio y móvil; sin desbordamiento horizontal en pruebas a 390 y 320 px. Menú móvil abre y cierra al seleccionar «Categorías»; `aria-expanded` vuelve a `false`.
- Búsqueda nativa abre su diálogo; carrito abre su estado vacío. La categoría «Material de curación» abre una búsqueda sin resultados, coherente con el catálogo actual.

## Idioma español: validación del 2026-08-28

- El usuario configuró español como publicado y predeterminado en Shopify Admin, según la captura compartida. También informó haber activado la redirección automática por idioma.
- Se verificó en navegador `http://127.0.0.1:9292/`: HTML con `lang="es"`, controles de búsqueda y cuenta, enlace de carrito y nombre de la política de privacidad en español. El diálogo de búsqueda abre y cierra con etiquetas en español.
- Se abrió `/cart`: estado vacío, enlace «Seguir comprando» y acceso a cuenta en español. No se agregaron productos ni se inició checkout; no se verificó el contenido completo de políticas o cuentas.
- Se conservan los archivos de traducción nativos de Dawn y el idioma dinámico de Liquid. Esta validación solo modifica documentación, no código ni configuración administrativa.
- La captura muestra «Dominios: Ninguno» y «Agrega Español para tus clientes en el mercado México». Queda pendiente revisar la asignación en ese mercado; la vista local en español no acredita esa configuración ni prueba la redirección automática.

## Pendientes y límites

- Revisar la asignación de español al mercado México y verificar idioma en checkout cuando se pruebe una compra.
- El componente nativo de cuenta registra en consola que no existe `customer-account-main-menu` en la tienda y utiliza su menú de respaldo. Se observó también antes de la personalización; configurar ese menú en Shopify o revisar su selección antes de la entrega comercial.
- Crear/cargar catálogo médico real y colecciones; asignarlas a las tarjetas. No inferir inventario o disponibilidad a partir de las fotos recibidas.
- Confirmar textos de contacto, datos del negocio, derechos de uso de recursos y políticas antes de producción.
- No se probaron variantes, creación de pedidos, pagos ni checkout; tampoco se realizó una auditoría completa de accesibilidad o rendimiento.
- La revisión visual del cambio de WhatsApp queda pendiente: el servidor local no estaba activo y Shopify CLI solicitó nuevamente la contraseña de la tienda porque la almacenada fue rechazada. No se ingresaron ni expusieron credenciales durante la validación.
- Sustituir los inicios provisionales de LinkedIn, Instagram y Facebook por las URLs oficiales de COMMED antes de producción.
- Confirmar con la empresa el texto definitivo de misión y visión antes de una publicación comercial.
- Los cambios del tema se sincronizan únicamente mediante la sesión de desarrollo existente. No se ejecutó `theme publish` ni se usó `--allow-live`. El cambio administrativo de idioma fue realizado por el usuario.
