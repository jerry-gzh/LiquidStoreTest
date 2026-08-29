# Identidad COMMED sobre Dawn

Fecha: 2026-08-28. Solicitud: integrar la marca en encabezado, pie y portada del tema de desarrollo, preservando las funciones de comercio de Shopify.

## Cambios y decisiones

- Identidad: marino `#06275F`, rojo `#ED1C24`, hielo `#F2F6FA`, botones redondeados y tarjetas de 24 px. Las etiquetas pequeñas usan rojo oscuro `#C8102E` como adaptación de contraste; el logo y los títulos grandes conservan el rojo de marca.
- Tipografía: Montserrat mediante la biblioteca de fuentes de Shopify, con selectores nativos; cuerpo 400, énfasis 700 y títulos 900. No se añaden peticiones a Google Fonts ni archivos de fuente ficticios. Referencia: [fuentes de Shopify](https://shopify.dev/docs/storefronts/themes/best-practices/performance/self-host-web-fonts).
- Encabezado: se conserva el comportamiento de búsqueda, cuenta, carrito y menú móvil de Dawn. El logo COMMED es un respaldo; la imagen seleccionada en el tema tiene prioridad.
- Inicio: secciones propias de portada, categorías, misión y visión, y nosotros. Cada sección tiene ajustes de contenido; imágenes, textos y enlaces se pueden sustituir desde el editor.
- Pie: sección COMMED configurable, enlaces de navegación, contacto y políticas existentes. El WhatsApp principal usa el número confirmado por el usuario; no se inventan correos, certificaciones o condiciones comerciales.
- Productos destacados: sección COMMED activa que filtra automáticamente `collections.all.products` por proveedor `COMMED DEMO`. Evita mostrar `Short MTB` y no requiere crear una colección administrativa.
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
- Productos destacados: editar proveedor, cantidad y textos desde la sección COMMED · Productos demo. Sustituir el filtro temporal cuando exista una colección médica curada.
- Modo cotización: Configuración del tema → COMMED permite sustituir temporalmente el checkout por una solicitud de cotización en WhatsApp y ocultar el acceso a cuenta. Ambos ajustes son reversibles.

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

## Flujo comercial y presentación de demo: cambio del 2026-08-29

- Solicitud: mejorar la presentación sin administrar productos desde Shopify y sin duplicar el aviso de demo de la plataforma.
- Destacados: la portada muestra hasta ocho productos cuyo proveedor es `COMMED DEMO` y que cuentan con imagen destacada. Los productos sin imagen no consumen el límite; si no existe ninguna coincidencia visualizable, la sección completa se oculta. La sección carga los estilos de tarjeta de Dawn para conservar el tamaño y la visibilidad de las imágenes.
- Altura de destacados: las tarjetas estiran su contenedor al alto de la fila y reservan espacios consistentes para título y precio. Las ofertas y títulos largos conservan todo su contenido sin producir tarjetas de tamaños distintos.
- Cotización: producto y carrito generan mensajes de WhatsApp con contexto. En producto se incluye nombre y URL; en carrito se incluyen cantidades, variantes y total estimado.
- Checkout: mientras `commed_quote_mode` está activo, WhatsApp sustituye la acción real de checkout. El carrito conserva una presentación demostrativa de pago con Visa, Mastercard y American Express, además de un botón «Continuar al pago» deshabilitado y marcado como próximo; no envía pedidos ni datos de pago. Al desactivar el modo se restaura el flujo nativo. El pago dinámico de producto queda desactivado en la plantilla de demo.
- Presentación: `PRUEBA —` se elimina únicamente al renderizar títulos y se agrega la insignia «Producto demostrativo»; los datos del catálogo no cambian. En móvil, la insignia reduce ligeramente su tipografía y puede ocupar dos líneas para mantenerse dentro de la tarjeta.
- Ajustes móviles: por debajo de 360 px, las rejillas de productos no deslizables cambian a una columna para evitar títulos y etiquetas comprimidos; las etiquetas de estado no dividen palabras. El botón flotante de WhatsApp se reduce en esas pantallas y se oculta en producto, carrito y contacto cuando ya existe una acción contextual equivalente.
- Navegación: se agregan Misión y visión, y Contacto. El acceso a cuenta se oculta mediante `commed_hide_account` hasta que las cuentas de cliente estén configuradas.
- Contacto: la página incorpora título e introducción específicos, conservando formulario, WhatsApp y redes sociales.

## Validación realizada

- `npm test`: diez pruebas aprobadas (integridad de imágenes, composición/schemas, configuración de marca, WhatsApp, redes sociales, cotización, presentación y navegación móvil).
- `node --check assets/commed.js`: sin errores de sintaxis.
- Theme Check: salida 0, cero errores y 55 advertencias. Se mantienen las reglas heredadas de Dawn; no se deshabilitó ninguna adicional.
- Cuarenta y nueve advertencias ya existían en la base. Los seis avisos nuevos `OrphanedSnippet` corresponden a los snippets COMMED reutilizables, aunque están llamados explícitamente desde el tema. Se registran como aparentes falsos positivos del analizador en este entorno, no como errores ocultados.
- Vista previa real en `http://127.0.0.1:9292`: portada y pie renderizados, imágenes cargadas, estilos Montserrat aplicados (400 en cuerpo y 900 en título), un H1 en el inicio.
- Revisión visual en escritorio y móvil; sin desbordamiento horizontal en inicio, catálogo, producto, carrito y contacto a 390 y 320 px. A 320 px se verificaron la rejilla de una columna, etiquetas de estado sin cortes y ausencia de superposición del WhatsApp flotante en vistas con acción contextual. Menú, búsqueda y filtros móviles abren dentro del viewport; el menú cierra al seleccionar «Categorías» y `aria-expanded` vuelve a `false`.
- Búsqueda nativa abre su diálogo; carrito abre su estado vacío. La categoría «Material de curación» abre una búsqueda sin resultados, coherente con el catálogo actual.
- Renderizado local del 2026-08-29: inicio responde 200 y contiene destacados, insignias, Misión y visión, y Contacto; no renderiza el componente de cuenta. La primera ficha COMMED muestra cotización, insignia y título sin `PRUEBA —`. `/pages/contact` muestra título e introducción nuevos; `/cart` contiene cotización y omite checkout mientras el modo está activo.

## Idioma español: validación del 2026-08-28

- El usuario configuró español como publicado y predeterminado en Shopify Admin, según la captura compartida. También informó haber activado la redirección automática por idioma.
- Se verificó en navegador `http://127.0.0.1:9292/`: HTML con `lang="es"`, controles de búsqueda y cuenta, enlace de carrito y nombre de la política de privacidad en español. El diálogo de búsqueda abre y cierra con etiquetas en español.
- Se abrió `/cart`: estado vacío, enlace «Seguir comprando» y acceso a cuenta en español. No se agregaron productos ni se inició checkout; no se verificó el contenido completo de políticas o cuentas.
- Se conservan los archivos de traducción nativos de Dawn y el idioma dinámico de Liquid. Esta validación solo modifica documentación, no código ni configuración administrativa.
- La captura muestra «Dominios: Ninguno» y «Agrega Español para tus clientes en el mercado México». Queda pendiente revisar la asignación en ese mercado; la vista local en español no acredita esa configuración ni prueba la redirección automática.

## Pendientes y límites

- Revisar la asignación de español al mercado México y verificar idioma en checkout cuando se pruebe una compra.
- El componente nativo de cuenta registra en consola que no existe `customer-account-main-menu` en la tienda y utiliza su menú de respaldo. Se observó también antes de la personalización; configurar ese menú en Shopify o revisar su selección antes de la entrega comercial.
- Crear/cargar catálogo médico real y colecciones; asignarlas a las tarjetas de categorías. La selección destacada temporal depende del proveedor exacto `COMMED DEMO`.
- Confirmar textos de contacto, datos del negocio, derechos de uso de recursos y políticas antes de producción.
- No se probaron variantes, creación de pedidos, pagos ni checkout; tampoco se realizó una auditoría completa de accesibilidad o rendimiento.
- Queda pendiente una revisión visual interactiva final en escritorio y móvil del conjunto agregado el 2026-08-29; la validación actual confirma el HTML renderizado, no medidas ni capturas de cada breakpoint.
- Sustituir los inicios provisionales de LinkedIn, Instagram y Facebook por las URLs oficiales de COMMED antes de producción.
- Confirmar con la empresa el texto definitivo de misión y visión antes de una publicación comercial.
- Antes de habilitar pedidos reales, desactivar `commed_quote_mode`, revisar el checkout y decidir si se reactiva el pago dinámico en `templates/product.json`.
- Los cambios del tema se sincronizan únicamente mediante la sesión de desarrollo existente. No se ejecutó `theme publish` ni se usó `--allow-live`. El cambio administrativo de idioma fue realizado por el usuario.
