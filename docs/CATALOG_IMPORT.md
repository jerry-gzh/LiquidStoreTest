# Catálogo ficticio para Shopify

Fecha: 2026-08-28. Solicitud: preparar productos de prueba para importar por CSV en `km5nsx-rj.myshopify.com`.

## Archivo y alcance

[CSV de productos](catalog/commed-productos-prueba.csv): 16 productos, 27 variantes y 20 columnas. UTF-8 sin BOM, comas y saltos LF. El usuario confirmó la importación y el conteo esperado después de revisar las dos variantes de Gasas en la vista previa; no se hizo una auditoría directa de todo el catálogo remoto.

- Títulos con `PRUEBA`, identificadores `commed-prueba-*`, proveedor ficticio `COMMED DEMO`, SKUs `TEST-COMMED-*` y etiqueta `commed-prueba`.
- Cuatro grupos mediante `Type` y etiquetas `categoria-curacion`, `categoria-quirurgico`, `categoria-diagnostico` y `categoria-consumibles`. El CSV no crea colecciones ni modifica las tarjetas del inicio.
- Nombres, variantes, precios y pesos son simulados, no especificaciones clínicas, recomendaciones de uso ni ofertas reales. No se atribuyen certificaciones o marcas a estos productos.
- Precios numéricos sin símbolo: se interpretan en la moneda de la tienda. Suposición de trabajo: MXN; comprobarla antes de importar. El CSV no cambia la moneda.
- `Status=draft` y `Published on online store=false`: no publicar automáticamente. En borrador no aparecerán en el catálogo de la vista local.
- `Inventory tracker=shopify`, `Continue selling when out of stock=deny`, `Fulfillment service=manual`: seguimiento de stock sin permitir sobreventa. Se omite `Inventory quantity`; las cantidades propuestas se asignarán después a una sucursal confirmada.
- `Charge tax=false` solo para este conjunto ficticio, sin modificar ajustes fiscales de la tienda. No representa el tratamiento fiscal de insumos médicos reales. `Requires shipping=true` y pesos ficticios permiten futuras pruebas de envío, no cotizaciones reales.
- Dos productos con precio de comparación simulado: cinta médica y baumanómetro. No son descuentos comerciales reales.

## Importación inicial

1. Confirmar que se está dentro de la tienda de pruebas `km5nsx-rj.myshopify.com` y revisar su moneda.
2. Abrir **Productos → Importar → Agregar archivo** y seleccionar `docs/catalog/commed-productos-prueba.csv`.
3. Dejar desactivada cualquier opción de sobrescribir productos existentes con identificadores coincidentes y cualquier opción de publicación en canales.
4. Revisar la vista previa: títulos con PRUEBA, estado borrador, precios, agrupación de variantes y caracteres españoles. Si Shopify no reconoce columnas, detenerse y revisar el mapeo; no aceptar un mapeo incierto.
5. Confirmar la importación tras revisar la vista previa. Filtrar por la etiqueta `commed-prueba` y comprobar 16 productos, con 27 variantes en total.
6. Revisar un producto simple (cinta), uno con variantes (guantes), los precios de comparación y el estado borrador. Verificar que no se hayan modificado productos previos como `Short MTB`.

No repetir la importación activando sobrescritura para resolver un error sin revisarlo: las columnas incluidas pueden reemplazar datos y los cambios en opciones pueden recrear variantes. Mantener los identificadores estables y revisar primero el informe de Shopify.

## Imágenes e inventario, después de importar

El CSV no incluye imágenes: las rutas locales no sirven como URLs públicas. Se pueden añadir directamente en cada producto desde los archivos originales, o subir a **Contenido → Archivos**, copiar sus URLs públicas y preparar una actualización del CSV. No se han subido ni alterado imágenes.

Revisión visual del 2026-08-28: se inspeccionaron los 15 archivos distintos propuestos. Sirven como referencias de los tipos de producto indicados, no como evidencia de marcas, medidas, contenido de paquetes o especificaciones de las variantes ficticias. Varias fotos muestran marcas y tienen baja nitidez; reservarlas para estas pruebas en borrador. Los archivos están en `assets/catalog/`; no se requieren nuevas copias dentro del tema.

Se retiró la propuesta de `material-curacion.webp` para Vendas: la foto muestra paquetes de gasas. Vendas queda pendiente de una imagen adecuada. Antes de añadir cualquier imagen, comprobar los medios existentes para evitar duplicados; la captura del usuario ya mostraba una miniatura en Bolsa para alimentación.

Estado de carga: **ninguna imagen subida por el agente**. El usuario completó la autenticación y se verificaron directamente los 16 productos de prueba en borrador, sin canales, en `km5nsx-rj.myshopify.com`. Bolsa para alimentación ya tiene una imagen; los otros 15 productos no muestran miniatura. La biblioteca del selector contiene dos archivos, ninguno de los 14 candidatos faltantes. No se modificaron productos.

Bloqueo operativo del 2026-08-28: el botón de carga no expuso un selector de archivos de Windows accesible para la automatización. Se prepararon 14 copias idénticas, verificadas por SHA-256, en la carpeta temporal `C:/Users/GUHG15~1/AppData/Local/Temp/commed-imagenes-b9ee26fe`, excluyendo Bolsa para alimentación y sin sustituir la foto pendiente de Vendas. Los originales permanecen intactos. Pendiente que el usuario cargue esas 14 imágenes juntas en Contenido → Archivos; después, asociarlas a sus productos desde la biblioteca y verificar la persistencia.

Conservar el estado borrador. No cambiar precios, inventario, variantes ni canales. Usar textos alternativos descriptivos con la aclaración de imagen de referencia para producto de prueba, sin inferir especificaciones.

El stock de la tabla es ficticio y **no está incluido en el CSV de productos**. El usuario indicó `Felix Ireta` como sucursal de destino; las cantidades están preparadas en el CSV de inventario descrito más abajo. No aplicar cantidades a inventario real.

| Producto de prueba | SKU base (TEST-COMMED-) | Variantes y stock propuesto | Imagen candidata |
|---|---|---|---|
| Gasas | 001 | 01: Paquete 10 → 30; 02: Paquete 50 → 12 | `material-curacion.webp` |
| Vendas | 002 | 01: 5 cm → 40; 02: 10 cm → 20 | Pendiente: falta una foto de vendas |
| Cinta médica | 003 | 01: Única → 25 | `cintas-medicas.webp` |
| Antiséptico | 004 | 01: Única → 0 | `antisepticos.webp` |
| Guantes | 005 | 01: CH → 15; 02: M → 2; 03: G → 0 | `guantes-esteriles.webp` |
| Suturas | 006 | 01: Unidad → 20; 02: Caja 12 → 8 | `suturas-atramat.webp` |
| Bata | 007 | 01: CH → 10; 02: M → 10; 03: G → 10 | `ropa-quirurgica.webp` |
| Sistema de drenaje | 008 | 01: Única → 5 | `drenovac.webp` |
| Baumanómetro | 009 | 01: Única → 8 | `baumanometro-digital.webp` |
| Gel para ultrasonido | 010 | 01: 250 ml → 20; 02: 1 L → 6 | `gel-ultrasonido.webp` |
| Rollo ECG | 011 | 01: Única → 3 | `rollo-electrocardiograma.webp` |
| Recipiente para muestra | 012 | 01: Única → 50 | `recipientes-muestra.webp` |
| Abatelenguas | 013 | 01: Única → 30 | `abatelenguas.webp` |
| Jeringas | 014 | 01: 3 ml → 60; 02: 5 ml → 40; 03: 10 ml → 20 | `jeringas-nipro.webp` |
| Tubos | 015 | 01: 1 m → 15; 02: 2 m → 5 | `tubos-latex.webp` |
| Bolsa para alimentación | 016 | 01: Única → 0 | `bolsa-alimentacion.webp` |

Ejemplo de SKU completo: `TEST-COMMED-005-02` identifica guantes M con dos unidades propuestas. Los casos de stock bajo y agotado solo se podrán probar después de asignar estas cantidades y habilitar los productos de prueba para el canal correspondiente.

Activar productos y habilitar el canal Tienda online es un paso posterior: afecta los datos compartidos por la tienda, no solo el tema de desarrollo. Hacerlo únicamente en esta tienda de pruebas y tras revisar imágenes, inventario y pagos de prueba. No publicar el tema como parte de esta importación.

## Inventario inicial: Felix Ireta

**Histórico: no reutilizar este archivo para otra carga.** La exportación posterior identifica estas variantes en `Shop location`, no en `Felix Ireta`. Consultar la versión basada en la exportación en la sección siguiente.

[CSV de inventario](catalog/commed-inventario-felix-ireta.csv), preparado el 2026-08-28: 27 variantes, 464 unidades ficticias totales y tres variantes con cero unidades (antiséptico, guantes G y bolsa para alimentación). Las cantidades se tomaron de la tabla anterior; los identificadores, opciones y SKUs, del CSV de productos. Solo contiene la sucursal `Felix Ireta`, con la grafía indicada por el usuario.

**Condición para usarlo:** todos los saldos iniciales de estas variantes en esa sucursal deben ser cero. `On hand (current)=0` es una expectativa para una primera carga, no un saldo consultado en Shopify. Si existe otro saldo o aparece «no almacenado», exportar el inventario con todos los estados y adaptar el archivo a esa evidencia antes de importar. No vaciar la columna de control para forzar la carga.

1. En **Productos → Inventario**, seleccionar `Felix Ireta` y localizar las variantes de prueba.
2. Comprobar la condición de saldo inicial; conservar una exportación de todos los estados como respaldo.
3. Usar **Importar** dentro de Inventario, no el importador de productos. Seleccionar `commed-inventario-felix-ireta.csv`.
4. Revisar el resumen antes de confirmar: únicamente variantes `TEST-COMMED-*` y sucursal `Felix Ireta`. Detenerse si no reconoce columnas o nombres.
5. Tras importar, revisar el informe de Shopify y las 27 variantes. Los valores nuevos son saldos finales, no incrementos. No volver a cargar el archivo para reponer stock: exportar los saldos actuales primero.

El archivo no incluye precio, estado de publicación, imágenes ni otras sucursales. No se ha importado ni se ha publicado ningún producto mediante esta preparación.

Validación local: coincidencia de las 27 variantes con el catálogo, SKUs únicos, 464 unidades, cantidades enteras no negativas y control de saldo cero. Lectura de ida y vuelta, revisión visual completa y validación independiente con `Import-Csv`; UTF-8 sin BOM y LF. El generador terminó con código 1 aun después de guardar y completar sus comprobaciones sin error visible adicional; la validación independiente del archivo terminó con código 0. Queda pendiente la aceptación del importador y la comprobación de saldos reales.

## Conciliación con la exportación de Shopify (2026-08-28)

Archivo preparado: [CSV basado en la exportación](catalog/commed-inventario-shop-location.csv). **No importado; confirmar con el usuario que `Shop location` es la sucursal deseada antes de cargarlo.** No se renombraron ni crearon sucursales.

- Fuente: `C:/Users/guhg1559082/Downloads/inventory_export.csv`, conservada sin cambios. SHA-256: `83bab0186c9079d01ac49b841a50ddec3ee760fcc172772b053e62e4035b018c`.
- Evidencia: 28 filas, todas en `Shop location`: 27 variantes de prueba con saldo actual/disponible cero, y `short-mtb` con dos unidades. La exportación no contiene filas para `Felix Ireta`; no demuestra que esa sucursal no exista en otra configuración.
- Hallazgo: el nombre `Location` del archivo rechazado no coincide con el de la exportación. Es una causa probable del fallo posterior a la vista previa; sin informe detallado del importador no se atribuye todo el fallo de forma concluyente a ese único punto.
- Corrección: conservar los 19 encabezados exportados y todos los valores de las filas de prueba, rellenando únicamente `On hand (new)` con las cantidades previstas. Se excluyó `short-mtb` por estar fuera del alcance. La nueva versión incluye 27 variantes y 464 unidades; tres variantes permanecen en cero.
- Protección: `On hand (current)` ahora proviene de la exportación, no de una suposición. No vaciarlo para forzar una carga. Si los saldos cambian antes de importar, usar una nueva exportación.
- Validación: coincidencia exacta de SKU, identificador y opciones; comparación independiente de las 19 columnas con `Import-Csv`, sin diferencias excepto el saldo nuevo; suma 464; exportación original intacta por hash; lectura de ida y vuelta y revisión visual antes/después. El proceso de hojas de cálculo conserva el código de salida 1 señalado antes; la comprobación independiente termina con código 0.
- Siguiente acción: confirmar sucursal, seleccionar el nuevo CSV en Productos → Inventario → Importar, revisar 27 variantes/una sucursal y verificar el resultado del proceso. No volver a seleccionar `commed-inventario-felix-ireta.csv`.

## Validación del catálogo y límites

### Corrección del CSV de inventario (2026-08-28)

El importador rechazó la primera versión por ausencia de `Option2 Value` y `Option3 Value`, según la captura del usuario. Se añadieron ambos encabezados con valores vacíos en las 27 filas; el archivo ahora tiene diez columnas. La comprobación local previa no cubría ese requisito del importador. Se verificaron los encabezados obligatorios y la conservación de las ocho columnas originales, incluidos SKUs, opciones, sucursal, saldo inicial esperado y cantidades (464 unidades). Pendiente volver a seleccionar el archivo actualizado y comprobar la aceptación real en Shopify; no se ha realizado la importación desde el agente.

- Comprobación de 16 identificadores de producto y 27 SKUs únicos; variantes agrupadas y columnas constantes.
- Verificación de estado borrador/no publicado, precios positivos y precios de comparación superiores al precio de venta ficticio.
- Lectura de ida y vuelta del CSV con la biblioteca de hojas de cálculo, sin pérdida de valores; inspección visual de campos de texto y variantes.
- Lectura independiente mediante `Import-Csv` de PowerShell; validación de codificación y `git diff --check`.
- Existencia local y revisión visual de las 15 imágenes candidatas comprobadas; se descartó reutilizar la foto de gasas para Vendas. No se verificaron especificaciones médicas ni coincidencias entre fotos y variantes simuladas.
- La captura del importador confirmó el estado borrador y las variantes de Gasas; el usuario confirmó después el resultado esperado. El nombre de sucursal fue proporcionado por el usuario, no consultado en Shopify. El agente no ha importado productos, existencias, imágenes o pedidos.
- La descarga directa de la plantilla oficial no estuvo disponible por verificación de conexión; se usó la tabla oficial de columnas vigente, no un archivo de plantilla descargado.

## Referencias

- [Formato CSV de Shopify](https://help.shopify.com/en/manual/products/import-export/using-csv): encabezados, estado, opciones, imágenes y límites de inventario.
- [Importación de productos](https://help.shopify.com/en/manual/products/import-export/import-products): revisión y carga desde el administrador.
- [CSV de inventario](https://help.shopify.com/en/manual/products/inventory/setup/inventory-csv): inventario por sucursal y protección de saldos actuales.
