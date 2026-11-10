# Sitio de Recetas
## Cocina y Sabor

Trabajo Práctico Integrador · Diseño y Desarrollo Web · UADE

Sitio desarrollado con HTML5, CSS3 y Flexbox, con JavaScript para la generación dinámica del contenido y las interacciones (ver [Entrega 2](#entrega-2--javascript) más abajo). Presenta recetas caseras variadas, con navegación por anclas y diseño responsive para escritorio y tablet.

**Sitio publicado**: https://lorevelasquez.github.io/ddw-tp-integrador/

---

## Secciones del sitio

- **Inicio** — header con logo y menú de navegación, seguido de un hero con imagen de fondo y presentación del sitio.
- **Nosotros** — texto sobre la propuesta de Cocina y Sabor.
- **Recetas** — generadas dinámicamente desde un array de JavaScript, en cards con link a la receta completa. Cada una se puede marcar como favorita, y hay un filtro para ver solo las marcadas.
- **Galería** — fotos de utensilios e ingredientes, también generadas desde un array de JavaScript.
- **Contacto** — dentro del footer, con datos de contacto y redes sociales.

## Tecnologías utilizadas
- HTML5 semántico
- CSS3 con Flexbox
- JavaScript (sin frameworks ni librerías)
- localStorage para persistir los favoritos
- Google Fonts

## Entrega 2 — JavaScript

Sobre la base de la Entrega 1, se incorporó `js/main.js`:

- **Arrays de datos**: dos arrays de objetos, `arrRecetas` (título, imagen y url de cada receta) y `arrGaleria` (src y alt de cada foto de utensilios/ingredientes).
- **Generación dinámica del DOM**: las cards de recetas y las fotos de la galería ya no están escritas a mano en el HTML — se arman con `createElement`/`appendChild` a partir de los dos arrays. Los contenedores en el HTML (`#recetas-contenedor` y `#galeria-contenedor`) arrancan vacíos.
- **Favoritos**: un botón (★/☆) en la esquina de cada card de receta. Al hacer click, marca o desmarca esa receta como favorita — cambia a dorado y guarda el cambio en `localStorage`. Al recargar la página, las que estaban marcadas siguen marcadas.
- **Filtro "Ver solo favoritas"**: un botón arriba de la grilla de recetas oculta las que no están marcadas, dejando ver solo las favoritas. Otro click vuelve a mostrarlas todas.
- **localStorage**: las recetas marcadas se guardan con `localStorage.setItem()` (convertidas a texto con `JSON.stringify`) y se recuperan al abrir la página con `localStorage.getItem()` + `JSON.parse()`. Así la selección no se pierde al cerrar o recargar.

### Cómo probarlo paso a paso

1. Abrir `index.html` en el navegador (o entrar a la página publicada).
2. Bajar hasta la sección "Recetas del día".
3. Marcar 2 o 3 recetas como favoritas (click en la estrella de la esquina de cada foto). Se ponen doradas.
4. Recargar la página (F5). Confirmar que las mismas recetas siguen marcadas con la estrella dorada.
5. Click en el botón "Ver solo favoritas". Confirmar que solo quedan visibles las que se marcaron antes.
6. Click en "Ver todas" (mismo botón, cambia de texto). Vuelven a verse las 4 recetas.
7. Sacarle la estrella a alguna receta marcada, recargar de nuevo, y confirmar que esa ya no aparece como favorita.
8. Abrir la consola del navegador (F12) y confirmar que no aparece ningún error.

## Integrantes
Ver detalle completo en [`integrantes.txt`](./integrantes.txt).

- Giménez Balestra, Leonardo Gabriel - Comisión: Viernes Noche - leogimenez@uade.edu.ar
- Romano, Lautaro Marcos - Comisión: Viernes Noche - laromano@uade.edu.ar
- Velasquez, Lorena Isabel - Comisión: Viernes Noche - lvelasquez@uade.edu.ar

## Navegadores probados
- Google Chrome
- Microsoft Edge
- Mozilla Firefox

## Horas aproximadas

- **Estructura HTML y contenido**: ~6 horas
- **Diseño y estilos CSS**: ~7 horas
- **Integración de ramas y uso de GitHub**: ~5 horas

**Total aproximado**: ~18 horas (repartidas entre los 3 integrantes)

## Validación W3C
- **HTML**: 0 errores (quedan 4 warnings menores de tipo "article lacks heading", no bloqueantes)
![Validación HTML](./capturas/validacion_html_01.jpg)
![Validación HTML](./capturas/validacion_html_02.jpg)

- **CSS**: 0 errores, CSS3 válido
![Validación CSS](./capturas/validacion_css.jpg)