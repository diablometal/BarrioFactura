# BarrioShare

BarrioShare es un proyecto web de préstamo gratuito de objetos entre vecinos. La idea es que una persona pueda encontrar un objeto que necesita, como un taladro o una escalera, y pedirlo prestado a alguien de su barrio.

## Estado del proyecto

El proyecto cuenta con un diseño de interfaz en Figma y una estructura inicial en HTML, CSS y JavaScript. El catálogo, las categorías, la ficha de objeto y la solicitud de préstamo forman parte del diseño previsto.

## Estructura inicial

| Archivo | Función |
| --- | --- |
| `public/index.html` | Página principal |
| `public/style/style.css` | Estilos de la página |
| `public/js/script.js` | Archivo para la lógica del navegador |

## Cómo probarlo en local

Abre `public/index.html` en el navegador para ver la página inicial.

Si tu copia ya incluye el servidor Express (`server.js`, `package.json` y `package-lock.json`), instala Node.js y ejecuta estos comandos desde la raíz del proyecto:

```bash
npm ci
node server.js
```

Después, abre [http://localhost:3000](http://localhost:3000).

## Próximos pasos

- Implementar el catálogo con búsqueda y filtros por categoría.
- Crear la ficha de cada objeto.
- Incorporar el inicio de sesión y el flujo de solicitud de préstamo.
