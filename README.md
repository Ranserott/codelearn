# CodeLearn

Plataforma interactiva para aprender HTML, CSS y JavaScript de forma práctica.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **State Management:** Zustand
- **Syntax Highlighting:** Prism React Renderer
- **Icons:** Lucide React

## Getting Started

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para Producción

```bash
npm run build
npm run start
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css    # Estilos globales y Tailwind
│   ├── layout.tsx     # Layout principal
│   └── page.tsx       # Página principal
├── components/
│   ├── Sidebar.tsx    # Navegación lateral
│   ├── Card.tsx       # Tarjetas de lecciones
│   └── Modal.tsx      # Modal con editor de código
├── store/
│   └── useAppStore.ts # Estado global con Zustand
├── data/
│   └── lessons.ts     # Contenido de lecciones
└── types/
    └── index.ts       # TypeScript types
```

## Características

- 61 lecciones progresivas en HTML, CSS y JavaScript
- Editor de código con vista previa en tiempo real
- Tema claro/oscuro
- Sintaxis resaltada con Prism
- Diseño responsive

## Deployment

### Dokploy

El proyecto está configurado con un `Dockerfile` para despliegue en Dokploy.

**Nota sobre despliegue:** Si experimentas errores 404 en archivos estáticos (`/_next/static/...`), puede ser necesario:

1. Cambiar el Build Type en Dokploy de "Dockerfile" a "Next.js" (usando el build nativo)
2. O verificar que el Dockerfile incluya correctamente todos los archivos de `.next/static`

### Vercel

```bash
npm install -g vercel
vercel
```

## Problemas Conocidos

### Tailwind CSS v4

Este proyecto usa Tailwind CSS v4 con la nueva sintaxis de PostCSS:

```javascript
// postcss.config.mjs
{
  plugins: {
    "@tailwindcss/postcss": {}
  }
}
```

```css
/* globals.css */
@import "tailwindcss";
```

No uses `tailwind.config.ts` con Tailwind v4 - no es compatible.

### Docker/Dokploy Build Issues

Si el build de producción falla o los estilos no cargan:

1. Asegúrate de que `@tailwindcss/postcss` esté en `devDependencies`
2. Verifica que no haya conflictos con otras configuraciones de PostCSS
3. Para Dokploy, considera usar el build type "Next.js" en lugar de "Dockerfile"

## Licencia

MIT
