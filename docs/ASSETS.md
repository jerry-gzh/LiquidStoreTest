# Recursos de COMMED

Fecha: 2026-08-28. Objetivo: recibir los recursos disponibles antes de implementar el tema.

## Dónde cargarlos

Copiar los recursos listos para web directamente en `assets/`, sin subcarpetas. No reproducir las rutas `public/brand/` del proyecto Astro: aquí el destino es el directorio de assets del tema Shopify.

Usar nombres en minúsculas, sin espacios ni acentos y con guiones. El prefijo `commed-` distingue los recursos de marca de los archivos del futuro tema base. Los nombres siguientes son sugerencias; no cambies la extensión para simular una conversión de formato.

| Recurso | Nombre sugerido dentro de `assets/` |
|---|---|
| Logotipo completo | `commed-logo.png` o `commed-logo.svg` |
| Imagen principal | `commed-hero.webp` |
| Material de curación | `commed-category-curacion.webp` |
| Material quirúrgico | `commed-category-quirurgico.webp` |
| Diagnóstico | `commed-category-diagnostico.webp` |
| Consumibles | `commed-category-consumibles.webp` |
| Imagen para compartir | `commed-social-card.png` |
| Favicon | `commed-favicon.png` o `commed-favicon.svg` |
| Montserrat variable, si está disponible | `commed-montserrat-variable.woff2` |
| Montserrat por peso, si está disponible | `commed-montserrat-regular.woff2`, `commed-montserrat-bold.woff2` |

No hace falta tener todos los recursos para continuar. Se revisará el inventario real después de la carga; no se crearán imágenes o fuentes ficticias para completar esta lista.

## Qué dejar fuera de `assets/`

- Archivos editables de diseño, ZIP, respaldos y originales pesados: conservarlos aparte hasta decidir qué versiones web se utilizarán.
- Contraseñas, tokens, datos privados de clientes o documentos comerciales internos: no son recursos públicos del tema.
- Archivos Astro, componentes del sitio anterior o su carpeta `public/` completa: se reutiliza la identidad visual, no la estructura del framework.
- El archivo `commed-mark.png` señalado en [BRAND_GUIDELINES](../BRAND_GUIDELINES.md) como recortado: no usarlo como isotipo definitivo sin revisarlo.

## Criterios para la integración posterior

- Conservar proporciones y calidad del logo; no reconstruirlo ni deformarlo.
- Confirmar derechos de uso de imágenes y fuentes. Guardar las licencias que deban acompañar al repositorio en `docs/` cuando se reciban.
- Verificar qué pesos cubren realmente los archivos Montserrat antes de definir la carga tipográfica.
- Revisar dimensiones, peso, transparencia y contenido de cada imagen antes de usarla.
- Separar imágenes de marca de fotografías de catálogo. Estas últimas deberán asociarse a los productos correspondientes en Shopify; copiarlas al repositorio no crea productos.
- Implementar imágenes editoriales configurables por el comerciante cuando corresponda. La recepción local de archivos no obliga a fijarlas permanentemente en Liquid.

## Estado y seguimiento

Recibidos el 2026-08-28: 38 archivos, sin contar `.gitkeep` ni los assets del tema Dawn incorporados después:

- Ocho archivos en `assets/brand/`: logo, marca recortada, imagen social, portada y cuatro categorías.
- Veintidós imágenes en `assets/catalog/`.
- Ocho archivos en la raíz de `assets/`: favicons, iconos de aplicación y `site.webmanifest`.
- No se recibieron archivos de fuente Montserrat.

Se conservaron los 38 archivos y `.gitkeep` byte a byte durante la instalación de Dawn. Las carpetas originales `brand/` y `catalog/` permanecen excluidas mediante `.shopifyignore`.

Para la identidad visual se copiaron siete archivos a la raíz de `assets/`: `commed-logo.png`, `commed-hero.webp`, `commed-social-card.png` y las cuatro imágenes `commed-category-*.webp`. Son copias idénticas verificadas por SHA-256, sin alterar los originales. Logo, portada y categorías se utilizan como respaldo cuando no hay una imagen seleccionada en el editor. La tarjeta social se usa como respaldo del inicio.

Montserrat se configura mediante los selectores de fuente de Shopify (`montserrat_n4` para cuerpo y `montserrat_n9` para títulos); Dawn carga sus variantes y declaraciones `font-face`. No se necesita subir un archivo de fuente para esta implementación.

También se excluye `assets/site.webmanifest`: contiene rutas absolutas heredadas del sitio Astro que requieren adaptación antes de utilizarse en Shopify. `favicon.svg` se usa como respaldo cuando no hay favicon seleccionado en el editor; los demás iconos permanecen disponibles.

Se comprobó visualmente el logo, la portada, las categorías y la tarjeta social. Las imágenes de la portada cargan en la vista previa. Quedan pendientes aprobación comercial, licencias de los recursos proporcionados y asignación del catálogo real. No se crearon productos en Shopify ni se usó `commed-mark.png`.
