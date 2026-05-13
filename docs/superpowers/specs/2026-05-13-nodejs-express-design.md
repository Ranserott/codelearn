# CodeLearn: Módulos Node.js y Express.js

## Resumen del Cambio

Agregar dos nuevos módulos de lecciones: **Node.js** y **Express.js**, siguiendo el mismo patrón visual y arquitectónico de los módulos existentes (HTML, CSS, JS, Git).

---

## Decisiones de Diseño

### Preview para Backend (Node.js/Express)

Dado que Node.js y Express **no se pueden ejecutar en el navegador**, el preview mostrará:

1. **Código fuente** con syntax highlighting (izquierda)
2. **Diagrama de flujo animado** (derecha) que muestra cómo viaja una solicitud por el pipeline

Para Node.js: flujo del event loop, async operations
Para Express.js: pipeline de middleware → ruta → response

### Estructura de Datos

```typescript
// Extensión del tipo Language
type Language = 'html' | 'css' | 'javascript' | 'git' | 'nodejs' | 'express';
```

Cada lección tendrá:
- `id`: string único
- `title`: título de la lección
- `description`: descripción
- `language`: 'nodejs' | 'express'
- `category`: categoría para colores
- `code`: { html, css, javascript, git }
- `flowData`: (opcional) datos para el diagrama animado

### Categorías y Colores (Card)

**Node.js:**
| Categoría | Color (dark) | Color (light) |
|-----------|--------------|--------------|
| fundamentos | cyan | blue |
| async | green | emerald |
| modulos | violet | purple |
| archivos | yellow | amber |
| servidor | orange | red |
| flujos | pink | rose |
| eventos | teal | cyan |
| buenas-practicas | gray | gray |

**Express.js:**
| Categoría | Color (dark) | Color (light) |
|-----------|--------------|--------------|
| fundamentos | cyan | blue |
| routing | green | emerald |
| middleware | violet | purple |
| datos | yellow | amber |
| cors | orange | red |
| archivos | pink | rose |
| arquitectura | teal | cyan |
| buenas-practicas | gray | gray |

---

## Lecciones: Node.js (18)

### Fundamentos
1. **¿Qué es Node.js?** — Runtime, V8, event-driven, non-blocking I/O
2. **Instalación y verificación** — node -v, npm -v, primer script
3. **Mi primer servidor HTTP** — http.createServer, listen

### Modelo de Asincronía
4. **El Event Loop** — diagrama del ciclo de eventos
5. **Callbacks** — función que recibe función
6. **Promesas (Promises)** — .then().catch(), Promise.all
7. **Async/Await** — sintaxis moderna para async

### Módulos
8. **CommonJS: require/module.exports** — modularización
9. **npm y package.json** — dependencias, scripts
10. **Módulos nativos: fs** — leer/escribir archivos
11. **Módulos nativos: path** — rutas de archivos

### Conceptos Avanzados
12. **Console y Utils** — console.log, util.inspect
13. **Process** — process.argv, process.env
14. **Buffers** — datos binarios
15. **Streams** — streams de lectura/escritura
16. **Event Emitter** — patrón pub/sub
17. **Manejo de errores** — try/catch, error first callbacks
18. **Buenas prácticas** — tips para código limpio

---

## Lecciones: Express.js (18)

### Fundamentos
1. **¿Qué es Express.js?** — framework minimalista
2. **Instalación y primer servidor** — express(), listen
3. **Estructura de un proyecto Express** — app, routes, server

### Routing
4. **Routing básico** — app.get, app.post, etc.
5. **Route parameters** — /users/:id
6. **Query parameters** — ?name=value
7. **HTTP Methods** — GET, POST, PUT, DELETE

### Middleware
8. **¿Qué es middleware?** — concepto de pipeline
9. **Built-in middleware** — express.json(), express.urlencoded()
10. **Third-party middleware** — cors, morgan
11. **Custom middleware** — funciones propias
12. **Error handling middleware** — 404 y errores

### Datos y Seguridad
13. **Body parsing** — leer req.body
14. **CORS** — habilitar cross-origin
15. **Environment variables** — dotenv

### Arquitectura
16. **Modularización con routers** — express.Router()
17. **Modelo de 3 capas** — routes, controllers, data access
18. **Buenas prácticas** — tips para producción

---

## Componentes a Modificar

### `src/types/index.ts`
- Agregar `'nodejs' | 'express'` al tipo `Language`

### `src/components/Card.tsx`
- Agregar colors para las nuevas categorías de nodejs y express
- Agregar colors para language de nodejs y express

### `src/components/Modal.tsx`
- Agregar handling para `language === 'nodejs'` y `language === 'express'`
- Renderizar preview con:
  - Código fuente (syntax highlighted)
  - Diagrama de flujo animado (animación CSS + JS)

### `src/data/lessons.ts`
- Agregar array `nodejsLessons` (18 lecciones)
- Agregar array `expressLessons` (18 lecciones)
- Integrar en el array principal `lessons`

### `src/store/useAppStore.ts`
- No necesita cambios (maneja Language dinámicamente)

---

## Preview: Diagrama de Flujo Animado

Para Node.js (Event Loop):
```
┌─────────────────────────────────────┐
│           CALL STACK                │
│  ┌──────────────────────────────┐   │
│  │ function foo() { ... }      │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│         NODE APIS / WEB APIS         │
│  ┌─────────┐  ┌─────────────┐       │
│  │ setTimeout│  │ fs.readFile │       │
│  └─────────┘  └─────────────┘       │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│          CALLBACK QUEUE             │
│  ┌──────────────────────────────┐   │
│  │ () => console.log('done')   │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
                  ↓
         [Animación paso a paso]
```

Para Express (Middleware Pipeline):
```
Request ──→ cors() ──→ bodyParser ──→ logger ──→ [ROUTE] ──→ Response
                  ↓           ↓           ↓
              (next)      (next)       (next)
```

---

## Dependencias

No se requieren nuevas dependencias. Todo el preview se maneja con:
- HTML/CSS/JS inline (para el iframe srcdoc)
- CSS animations para el flujo animado
- Prism React Renderer (ya instalado) para syntax highlighting

---

## Puerto

El servidor de desarrollo correrá en **localhost:3003** como solicitó el usuario.