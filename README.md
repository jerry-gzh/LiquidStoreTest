# LiquidStoreTest — COMMED

Tienda de pruebas para COMMED sobre Shopify, con un tema personalizado en Liquid, HTML, CSS y JavaScript. Shopify será responsable del catálogo, inventario, pedidos y checkout.

## Estado actual

2026-08-29: identidad COMMED aplicada sobre Dawn 16.0.0, con portada, categorías, productos demo destacados, misión y visión, contacto social y pie configurables. El flujo de presentación usa cotización por WhatsApp y oculta temporalmente checkout y cuenta mediante ajustes reversibles. No se ha publicado el tema.

## Documentación

- [SHOPIFY_PROJECT_GUIDELINES](SHOPIFY_PROJECT_GUIDELINES.md): alcance y decisiones técnicas.
- [BRAND_GUIDELINES](BRAND_GUIDELINES.md): identidad visual de COMMED y referencias del proyecto de origen.
- [ASSETS](docs/ASSETS.md): ubicación, nombres y revisión de los recursos que se cargarán.
- [OPERATIONS](docs/OPERATIONS.md): instalación, validación, arranque y flujo de sincronización entre VS Code, Shopify y Git.
- [COMMED_IMPLEMENTATION](docs/COMMED_IMPLEMENTATION.md): personalización, opciones del editor y pendientes de contenido.
- [CATALOG_IMPORT](docs/CATALOG_IMPORT.md): CSV de 16 productos ficticios, importación en borrador, imágenes e inventario pendiente.

## Estructura

| Carpeta | Responsabilidad |
|---|---|
| `assets/` | Recursos estáticos del tema: imágenes, fuentes, CSS y JavaScript. |
| `blocks/` | Bloques reutilizables y configurables del tema. |
| `config/` | Definiciones y valores de configuración del tema. |
| `layout/` | Estructura general de las páginas, incluido `theme.liquid`. |
| `locales/` | Traducciones de la tienda y del editor del tema. |
| `sections/` | Secciones configurables y grupos de secciones. |
| `snippets/` | Fragmentos Liquid reutilizables. |
| `templates/` | Plantillas de inicio, producto, colección, carrito y demás páginas. |
| `docs/` | Documentación local; no forma parte del tema publicado. |
| `tests/` | Pruebas locales de configuración, assets y navegación móvil. |

Se usa la raíz como directorio del tema, siguiendo la [estructura oficial de Shopify](https://shopify.dev/docs/storefronts/themes/architecture#directory-structure-and-component-types). Los assets que se sincronicen deben ser planos. Las carpetas recibidas `assets/brand/` y `assets/catalog/` se conservan como originales locales y se excluyen temporalmente de Shopify CLI.

Los archivos `.gitkeep` permiten conservar las carpetas vacías en Git. `.shopifyignore` excluye esos marcadores, la documentación y archivos locales de las operaciones de Shopify CLI, conforme a su [documentación de exclusiones](https://shopify.dev/docs/storefronts/themes/tools/cli#excluding-files-from-shopify-cli). `.gitignore` evita añadir al repositorio archivos de entorno, dependencias y temporales habituales; no sustituye una revisión de secretos antes de cada commit.

## Cargar los recursos

Copiar los archivos web directamente en `assets/`, conservando la extensión real. Empezar por el logotipo, portada, imágenes de categorías y fuentes disponibles. Consultar [ASSETS](docs/ASSETS.md) para los nombres sugeridos y las precauciones.

Se recibieron 38 recursos del usuario. Se conservaron sin modificar durante la instalación del tema; consultar el inventario resumido en [ASSETS](docs/ASSETS.md).

## Pruebas locales

Requisitos del proyecto: Node.js 24 o superior, npm y Git. Shopify CLI queda fijado en `package.json` y `package-lock.json`; no hace falta instalarlo globalmente.

Desde la raíz del repositorio:

```sh
npm run shopify -- version
npm test
npm run check
npm run dev -- --store km5nsx-rj.myshopify.com
```

El último comando requiere acceso a la tienda Shopify: sube los archivos a un tema de desarrollo y muestra la URL local, normalmente `http://127.0.0.1:9292`. No es un servidor completamente offline. No usar `--allow-live` ni apuntar al tema publicado. Si ya está ejecutándose en tu terminal, mantener esa sesión abierta en lugar de iniciar otra.

En una copia nueva del repositorio ejecutar primero `npm ci`; consultar [OPERATIONS](docs/OPERATIONS.md) si aparece un error de certificados en la red de trabajo o una restricción de PowerShell.

## Siguientes pasos

1. Revisar la asignación de español al mercado México: ya está publicado y predeterminado, con búsqueda y carrito verificados en español en local; el administrador aún muestra un aviso de asignación.
2. Revisar el catálogo ficticio importado, sus imágenes e inventario siguiendo [CATALOG_IMPORT](docs/CATALOG_IMPORT.md). Crear/asignar las colecciones a las cuatro categorías del inicio; los destacados se seleccionan temporalmente por proveedor `COMMED DEMO`.
3. Confirmar textos comerciales, contacto y políticas antes de producción.
4. Probar variantes, compra de prueba y checkout; revisar advertencias del analizador y accesibilidad completa antes de publicar.

## Validación de esta etapa

`npm test`: diez pruebas aprobadas. Theme Check conserva cero errores; las advertencias de base y snippets se documentan en [COMMED_IMPLEMENTATION](docs/COMMED_IMPLEMENTATION.md). La revisión visual más reciente del flujo de cotización queda pendiente de reiniciar Shopify CLI con la contraseña correcta. No se validó una compra ni se cambió el tema publicado.
