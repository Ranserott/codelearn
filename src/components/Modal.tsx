'use client';

import { useAppStore } from '@/store/useAppStore';
import { Highlight, themes } from 'prism-react-renderer';
import { Language } from '@/types';
import { useState, useEffect } from 'react';

const tabs: { id: Language; label: string; color: string }[] = [
  { id: 'html', label: 'HTML', color: 'text-orange-500' },
  { id: 'css', label: 'CSS', color: 'text-blue-500' },
  { id: 'javascript', label: 'JS', color: 'text-yellow-500' },
  { id: 'git', label: 'Git', color: 'text-red-500' },
  { id: 'nodejs', label: 'Node.js', color: 'text-cyan-500' },
  { id: 'express', label: 'Express', color: 'text-green-500' },
];

function colorizeGitCode(code: string): string {
  const lines = code.split('\n');
  return lines.map(line => {
    // Comments (green)
    if (line.trim().startsWith('#')) {
      return `<span style="color:#7ee787">${escapeHtml(line)}</span>`;
    }
    // Git commands (red)
    const gitCommandMatch = line.match(/^(git\s+\w+)/);
    if (gitCommandMatch) {
      const prefix = line.substring(0, gitCommandMatch[0].length);
      const rest = line.substring(gitCommandMatch[0].length);
      return `<span style="color:#ff7b72">${escapeHtml(prefix)}</span>${escapeHtml(rest)}`;
    }
    // URLs (blue)
    if (line.includes('http://') || line.includes('https://')) {
      return line.replace(
        /(https?:\/\/[^\s]+)/g,
        '<span style="color:#79c0ff">$1</span>'
      );
    }
    // Branch names (purple)
    line = line.replace(
      /\b(main|master|HEAD|origin)\b/g,
      '<span style="color:#d2a8ff">$1</span>'
    );
    return escapeHtml(line);
  }).join('<br>');
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Build flow diagram preview for Node.js and Express lessons
function buildFlowPreview(language: Language, jsCode: string, lessonId: string): string {
  if (language === 'nodejs') {
    return buildNodejsFlowPreview(jsCode, lessonId);
  }
  return buildExpressFlowPreview(jsCode, lessonId);
}

// Custom flows per lesson ID
const nodejsFlows: Record<string, { title: string; steps: { title: string; desc: string }[] }> = {
  'nodejs-3': {
    title: 'Event Loop',
    steps: [
      { title: '1. Call Stack', desc: 'Código síncrono se ejecuta primero. Solo un hilo (V8).' },
      { title: '2. Node APIs', desc: 'setTimeout, fs.readFile, HTTP requests... operaciones asíncronas.' },
      { title: '3. Callback Queue', desc: 'Cuando las APIs terminan, los callbacks esperan su turno.' },
      { title: '4. Event Loop', desc: 'El loop verifica si el Call Stack está vacío para ejecutar callbacks.' },
    ]
  },
  'nodejs-4': {
    title: 'Callbacks',
    steps: [
      { title: '1. Función como argumento', desc: 'Pasamos una función (callback) a otra función.' },
      { title: '2. Operación async', desc: 'La función inicia una operación que toma tiempo.' },
      { title: '3. Espera', desc: 'El callback se queda esperando en la Callback Queue.' },
      { title: '4. Callback ejecutado', desc: 'Cuando termina, el Event Loop lo pasa al Call Stack.' },
    ]
  },
  'nodejs-5': {
    title: 'Promesas',
    steps: [
      { title: '1. Promise creada', desc: 'new Promise((resolve, reject) => {...})' },
      { title: '2. Estado pending', desc: 'La promesa queda en espera mientras opera.' },
      { title: '3. resolve() o reject()', desc: 'Termina exitosamente o con error.' },
      { title: '4. .then() o .catch()', desc: 'Se ejecutan los handlers según el resultado.' },
    ]
  },
  'nodejs-6': {
    title: 'Async/Await',
    steps: [
      { title: '1. async function', desc: 'Función que devuelve una Promesa implícitamente.' },
      { title: '2. await', desc: 'Pausa la ejecución hasta que la Promesa se resuelva.' },
      { title: '3. Ejecución suspendida', desc: 'Mientras espera, otras cosas pueden ejecutarse.' },
      { title: '4. Resultado disponible', desc: 'El valor se asigna a la variable cuando está listo.' },
    ]
  },
  'nodejs-7': {
    title: 'CommonJS Modules',
    steps: [
      { title: '1. module.exports', desc: 'Se exporta lo que el módulo quiere exponer.' },
      { title: '2. require()', desc: 'Se importa el módulo en otro archivo.' },
      { title: '3. Caché del módulo', desc: 'Node.js cachea el módulo (se ejecuta una vez).' },
      { title: '4. Objeto exportado', desc: 'Lo que se exportó está disponible en la variable.' },
    ]
  },
  'nodejs-9': {
    title: 'fs.readFile (async)',
    steps: [
      { title: '1. fs.readFile()', desc: 'Llamamos a la función con callback.' },
      { title: '2. Node APIs', desc: 'Node inicia la lectura del archivo.' },
      { title: '3. I/O no bloqueante', desc: 'Mientras lee, el servidor puede hacer otras cosas.' },
      { title: '4. Callback', desc: 'Cuando termina, el callback recibe contenido o error.' },
    ]
  },
  'nodejs-13': {
    title: 'Streams',
    steps: [
      { title: '1. Readable Stream', desc: 'Creamos un stream de lectura del archivo.' },
      { title: '2. chunks', desc: 'Los datos llegan en pedaços (buffers) pequeños.' },
      { title: '3. Event: data', desc: 'Por cada chunk, se emite el evento data.' },
      { title: '4. Event: end', desc: 'Cuando termina, se emite end.' },
    ]
  },
  'nodejs-14': {
    title: 'Event Emitter',
    steps: [
      { title: '1. new EventEmitter()', desc: 'Creamos una instancia del emisor.' },
      { title: '2. .on("evento")', desc: 'Registramos un handler para un evento.' },
      { title: '3. .emit("evento")', desc: 'Emitimos el evento, todos los handlers se ejecutan.' },
      { title: '4. .once()', desc: 'Handler que se ejecuta solo una vez.' },
    ]
  },
  'nodejs-15': {
    title: 'Error Handling',
    steps: [
      { title: '1. Error en callback', desc: 'Error-first callback: (err, data) => {...}' },
      { title: '2. Verificar error', desc: 'Si err existe, algo salió mal.' },
      { title: '3. try/catch', desc: 'Para async/await, envolvemos en try/catch.' },
      { title: '4. Manejo centralizado', desc: 'process.on("uncaughtException") para errores no capturados.' },
    ]
  },
  'nodejs-1': {
    title: '¿Qué es Node.js?',
    steps: [
      { title: '1. Motor V8', desc: 'El mismo motor de Chrome ejecuta tu JavaScript.' },
      { title: '2. No navegador', desc: 'No tienes DOM, window, ni las APIs del navegador.' },
      { title: '3. Módulos nativos', desc: 'Accedes al filesystem, network, OS via módulos.' },
      { title: '4. Event-driven I/O', desc: 'Ideal para operaciones I/O asíncronas.' },
    ]
  },
  'nodejs-2': {
    title: 'Servidor HTTP',
    steps: [
      { title: '1. http.createServer()', desc: 'Crea un servidor HTTP.' },
      { title: '2. Callback (req, res)', desc: 'Se llama cuando llega un request.' },
      { title: '3. res.writeHead()', desc: 'Configuramos el código de estado y headers.' },
      { title: '4. res.end()', desc: 'Enviamos la respuesta y terminamos.' },
    ]
  },
  'nodejs-8': {
    title: 'npm y package.json',
    steps: [
      { title: '1. npm init', desc: 'Crea el archivo package.json interactivo.' },
      { title: '2. Dependencias', desc: 'Lista de paquetes que tu proyecto necesita.' },
      { title: '3. npm install', desc: 'Instala todas las dependencias de package.json.' },
      { title: '4. node_modules/', desc: 'Carpeta donde se descargan los paquetes.' },
    ]
  },
  'nodejs-10': {
    title: 'fs.writeFile',
    steps: [
      { title: '1. fs.writeFile()', desc: 'Llamamos para escribir en un archivo.' },
      { title: '2. Nombre + contenido', desc: 'Pasamos el path y los datos a escribir.' },
      { title: '3. Operación async', desc: 'Node inicia la escritura sin bloquear.' },
      { title: '4. Promesa resuelta', desc: 'Cuando termina, la promesa se resuelve.' },
    ]
  },
  'nodejs-11': {
    title: 'Módulo path',
    steps: [
      { title: '1. path.join()', desc: 'Une segmentos de ruta correctamente.' },
      { title: '2. path.resolve()', desc: 'Convierte a ruta absoluta.' },
      { title: '3. path.basename()', desc: 'Extrae el nombre del archivo.' },
      { title: '4. path.extname()', desc: 'Obtiene la extensión del archivo.' },
    ]
  },
  'nodejs-12': {
    title: 'Console y Process',
    steps: [
      { title: '1. console.log()', desc: 'Imprime a stdout (igual que en navegador).' },
      { title: '2. process.version', desc: 'Versión de Node.js instalada.' },
      { title: '3. process.env', desc: 'Variables de entorno del sistema.' },
      { title: '4. process.argv', desc: 'Argumentos pasados desde la terminal.' },
    ]
  },
  'nodejs-16': {
    title: 'Buffers',
    steps: [
      { title: '1. Buffer.from()', desc: 'Crea un buffer desde una cadena o array.' },
      { title: '2. Datos binarios', desc: 'Representación cruda de bytes en memoria.' },
      { title: '3. .toString()', desc: 'Convierte el buffer de vuelta a texto.' },
      { title: '4. .length', desc: 'Cantidad de bytes en el buffer.' },
    ]
  },
  'nodejs-17': {
    title: 'Exports múltiples',
    steps: [
      { title: '1. module.exports', desc: 'Objeto que se exporta del módulo.' },
      { title: '2. exports.nombre', desc: 'Shortcut para agregar propiedades.' },
      { title: '3. destructuring', desc: 'En require podemos usar: const { a, b } = require()' },
      { title: '4. Re-exportar', desc: 'module.exports = require("./otro") para re-exportar.' },
    ]
  },
  'nodejs-18': {
    title: 'Buenas prácticas',
    steps: [
      { title: '1. Estructura', desc: 'Organiza en /src con rutas, controllers, models.' },
      { title: '2. async/await', desc: 'Prefiere sobre .then() para código legible.' },
      { title: '3. Variables de entorno', desc: 'Usa process.env para configuración.' },
      { title: '4. Manejo de errores', desc: 'Siempre envuelve código async en try/catch.' },
    ]
  },
};

const expressFlows: Record<string, { title: string; steps: { title: string; desc: string }[] }> = {
  'express-1': {
    title: 'Servidor Express',
    steps: [
      { title: '1. express()', desc: 'Crea la aplicación Express (app).' },
      { title: '2. app.listen()', desc: 'El servidor comienza a escuchar en un puerto.' },
      { title: '3. Request llega', desc: 'Cuando un cliente hace una petición.' },
      { title: '4. Response', desc: 'La app devuelve una respuesta al cliente.' },
    ]
  },
  'express-3': {
    title: 'Routing',
    steps: [
      { title: '1. app.get()', desc: 'Definimos una ruta GET.' },
      { title: '2. app.post()', desc: 'Definimos una ruta POST.' },
      { title: '3. Route matching', desc: 'Express busca qué ruta coincide con el request.' },
      { title: '4. Handler', desc: 'Se ejecuta el handler de la ruta que matcheó.' },
    ]
  },
  'express-4': {
    title: 'Route Parameters',
    steps: [
      { title: '1. /usuarios/:id', desc: 'Definimos parámetro con :nombre.' },
      { title: '2. Request llega', desc: 'El cliente pide /usuarios/123.' },
      { title: '3. Express extrae', desc: 'El valor 123 se guarda en req.params.id.' },
      { title: '4. Handler usa params', desc: 'Podemos acceder a req.params.id en el handler.' },
    ]
  },
  'express-5': {
    title: 'Query Parameters',
    steps: [
      { title: '1. URL con query', desc: '/buscar?q=js&orden=asc' },
      { title: '2. Express parsea', desc: 'Automáticamente parsea los query parameters.' },
      { title: '3. req.query', desc: 'Disponible en el objeto req.query.' },
      { title: '4. Usar valores', desc: 'Podemos acceder a req.query.q, req.query.orden.' },
    ]
  },
  'express-7': {
    title: 'Middleware Pipeline',
    steps: [
      { title: '1. Request entra', desc: 'Llega un HTTP request al servidor.' },
      { title: '2. Middleware A', desc: 'Se ejecuta el primer middleware (ej: CORS). Llama next().' },
      { title: '3. Middleware B', desc: 'Se ejecuta el segundo (ej: body parser). Llama next().' },
      { title: '4. Ruta final', desc: 'Se ejecuta el handler de la ruta. Devuelve response.' },
    ]
  },
  'express-8': {
    title: 'Built-in Middleware',
    steps: [
      { title: '1. express.json()', desc: 'Parsea application/json del body.' },
      { title: '2. express.urlencoded()', desc: 'Parsea application/x-www-form-urlencoded.' },
      { title: '3. express.static()', desc: 'Sirve archivos estáticos (CSS, JS, imágenes).' },
      { title: '4. Orden importa', desc: 'El orden de los app.use() afecta el flujo.' },
    ]
  },
  'express-9': {
    title: 'Third-party Middleware',
    steps: [
      { title: '1. npm install', desc: 'Instalamos el paquete (cors, morgan, etc).' },
      { title: '2. require()', desc: 'Lo importamos en el código.' },
      { title: '3. app.use()', desc: 'Lo registramos como middleware.' },
      { title: '4. Automático', desc: 'Se ejecuta en cada request automáticamente.' },
    ]
  },
  'express-10': {
    title: 'Custom Middleware',
    steps: [
      { title: '1. Función', desc: 'Creamos function(req, res, next) {...}' },
      { title: '2. Lógica', desc: 'Validamos, transformamos, logueamos, etc.' },
      { title: '3. next()', desc: 'Si todo está bien, llamamos next().' },
      { title: '4. Encadenar', desc: 'Podemos encadenar múltiples middleware.' },
    ]
  },
  'express-11': {
    title: 'Error Handling',
    steps: [
      { title: '1. 404', desc: 'Si ninguna ruta matchea, se ejecuta el 404.' },
      { title: '2. Error thrown', desc: 'Una ruta lanza un error con next(err).' },
      { title: '3. Error middleware', desc: 'app.use((err, req, res, next) => {...})' },
      { title: '4. Manejo centralizado', desc: 'Un solo lugar para manejar todos los errores.' },
    ]
  },
  'express-12': {
    title: 'Body Parsing',
    steps: [
      { title: '1. Request con body', desc: 'POST/PUT envía datos en el body.' },
      { title: '2. Middleware parsea', desc: 'express.json() parsea el JSON.' },
      { title: '3. req.body', desc: 'Los datos quedan disponibles en req.body.' },
      { title: '4. En el handler', desc: 'Accedemos a req.body.nombre, req.body.email, etc.' },
    ]
  },
  'express-13': {
    title: 'CORS',
    steps: [
      { title: '1. Same-origin', desc: 'Por defecto, el navegador bloquea requests cross-origin.' },
      { title: '2. CORS middleware', desc: 'app.use(cors()) habilita todos los orígenes.' },
      { title: '3. Preflight', desc: 'OPTIONS se envía antes para verificar permisos.' },
      { title: '4. Access-Control', desc: 'Se envían headers para permitir el request.' },
    ]
  },
  'express-14': {
    title: 'Environment Variables',
    steps: [
      { title: '1. .env file', desc: 'Archivo con variables: PORT=3000, DB_URL=...' },
      { title: '2. require("dotenv")', desc: 'Importamos dotenv al inicio.' },
      { title: '3. .config()', desc: 'Carga las variables a process.env.' },
      { title: '4. process.env', desc: 'Accedemos donde necesitamos: process.env.PORT' },
    ]
  },
  'express-16': {
    title: 'express.Router()',
    steps: [
      { title: '1. Router separado', desc: 'Creamos router = express.Router().' },
      { title: '2. Rutas del router', desc: 'router.get(), router.post() para este módulo.' },
      { title: '3. app.use()', desc: 'Conectamos: app.use("/api/usuarios", router).' },
      { title: '4. Prefijo automático', desc: 'Todas las rutas del router tienen /api/usuarios.' },
    ]
  },
  'express-17': {
    title: '3-Tier Architecture',
    steps: [
      { title: '1. Routes', desc: 'Definen endpoints y reciben requests.' },
      { title: '2. Controller', desc: 'Contiene la lógica de negocio. Llama al service.' },
      { title: '3. Service', desc: 'Lógica de negocio. Transforma datos.' },
      { title: '4. Model/Data Access', desc: 'Se comunica con la base de datos.' },
    ]
  },
};

function buildNodejsFlowPreview(jsCode: string, lessonId: string): string {
  const flow = nodejsFlows[lessonId] || {
    title: 'Node.js Flow',
    steps: [
      { title: '1. Código', desc: 'Tu código JavaScript se ejecuta.' },
      { title: '2. Node APIs', desc: 'Operaciones asíncronas del runtime.' },
      { title: '3. Callbacks', desc: 'Las operaciones completan y disparan callbacks.' },
      { title: '4. Resultado', desc: 'El resultado está disponible.' },
    ]
  };

  const steps = flow.steps.map((step, i) => `
      <div class="step" id="step${i + 1}" style="animation-delay: ${0.2 + i * 0.4}s; border-color: ${['#0f0', '#ff0', '#0ff', '#f0f'][i]}">
        <div class="step-title">${step.title}</div>
        <div class="step-desc">${step.desc}</div>
      </div>
    `).join('');

  return `<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #1a1a2e;
      color: #eee;
      font-family: 'Segoe UI', system-ui, sans-serif;
      padding: 20px;
      min-height: 100vh;
    }
    .container { display: flex; gap: 20px; height: 100vh; }
    .code-panel {
      flex: 1;
      background: #16213e;
      border-radius: 12px;
      padding: 20px;
      overflow: auto;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      line-height: 1.6;
    }
    .code-panel pre { margin: 0; color: #0f0; }
    .flow-panel {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
      overflow: auto;
    }
    .flow-title {
      color: #0f0;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    .step {
      background: #16213e;
      border-radius: 10px;
      padding: 15px 20px;
      border-left: 4px solid #0f0;
      animation: slideIn 0.5s ease-out forwards;
      opacity: 0;
    }
    .step-title { font-weight: 600; margin-bottom: 5px; }
    .step-desc { font-size: 12px; opacity: 0.8; }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(20px); }
      to { opacity: 1; transform: translateX(0); }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="code-panel">
      <h3>Node.js: ${flow.title}</h3>
      <pre>${escapeHtml(jsCode)}</pre>
    </div>
    <div class="flow-panel">
      <div class="flow-title">${flow.title}</div>
      ${steps}
    </div>
  </div>
</body>
</html>`;
}

function buildExpressFlowPreview(jsCode: string, lessonId: string): string {
  const flow = expressFlows[lessonId] || {
    title: 'Express Flow',
    steps: [
      { title: '1. Request', desc: 'HTTP request llega al servidor.' },
      { title: '2. Middleware', desc: 'Los middleware procesan la solicitud.' },
      { title: '3. Router', desc: 'Se busca la ruta que coincide.' },
      { title: '4. Response', desc: 'Se devuelve la respuesta.' },
    ]
  };

  const stages = flow.steps.map((step, i) => `
      <div class="stage" style="animation-delay: ${0.3 + i * 0.5}s; border-color: ${['#f0f', '#0ff', '#ff0', '#0f0'][i]}">
        <div class="stage-title">${step.title}</div>
        <div class="stage-desc">${step.desc}</div>
      </div>
    `).join('');

  return `<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #1a1a2e;
      color: #eee;
      font-family: 'Segoe UI', system-ui, sans-serif;
      padding: 20px;
      min-height: 100vh;
    }
    .container { display: flex; gap: 20px; height: 100vh; }
    .code-panel {
      flex: 1;
      background: #16213e;
      border-radius: 12px;
      padding: 20px;
      overflow: auto;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      line-height: 1.6;
    }
    .code-panel pre { margin: 0; color: #0f0; }
    .flow-panel {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: auto;
    }
    .flow-title {
      color: #0f0;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    .pipeline {
      display: flex;
      flex-direction: column;
      gap: 0;
      background: #16213e;
      border-radius: 12px;
      padding: 20px;
      position: relative;
    }
    .pipeline::before {
      content: '';
      position: absolute;
      left: 30px;
      top: 50px;
      bottom: 50px;
      width: 3px;
      background: linear-gradient(to bottom, #f0f, #0ff, #ff0, #0f0);
      animation: flowDown 2s ease-in-out infinite;
    }
    @keyframes flowDown {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }
    .stage {
      background: #0f3460;
      border-radius: 10px;
      padding: 12px 20px;
      border: 2px solid #0f0;
      position: relative;
      z-index: 1;
      animation: stageIn 0.5s ease-out forwards;
      opacity: 0;
    }
    .stage-title { font-weight: 600; margin-bottom: 3px; }
    .stage-desc { font-size: 11px; opacity: 0.8; }
    @keyframes stageIn {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="code-panel">
      <h3>Express.js: ${flow.title}</h3>
      <pre>${escapeHtml(jsCode)}</pre>
    </div>
    <div class="flow-panel">
      <div class="flow-title">${flow.title}</div>
      <div class="pipeline">
        ${stages}
      </div>
    </div>
  </div>
</body>
</html>`;
}

export default function Modal() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const {
    darkMode,
    selectedLesson,
    setSelectedLesson,
    isEditorOpen,
    setIsEditorOpen,
    editedCode,
    setEditedCodeField,
    setEditedCode,
    activeTab,
    setActiveTab,
  } = useAppStore();

  if (!selectedLesson) return null;

  const handleClose = () => {
    setSelectedLesson(null);
    setIsEditorOpen(false);
    setEditedCode({ html: '', css: '', javascript: '', git: undefined });
  };

  const handleOpenEdit = () => {
    setEditedCode(selectedLesson.code);
    setActiveTab(selectedLesson.language);
    setIsEditorOpen(true);
  };

  const buildPreview = (code: typeof editedCode) => {
    const primaryLanguage = selectedLesson.language;

    if (primaryLanguage === 'git') {
      const gitCode = code.git || selectedLesson.code.git || '';
      const colorized = colorizeGitCode(gitCode);

      return `<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #0d1117;
      color: #c9d1d9;
      font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', monospace;
      padding: 20px;
      font-size: 13px;
      line-height: 1.6;
      overflow-x: hidden;
    }
    .terminal-header {
      background: #161b22;
      padding: 10px 15px;
      border-radius: 8px 8px 0 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .terminal-title {
      color: #8b949e;
      font-size: 12px;
      margin-left: 8px;
    }
    .terminal-dot {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    .dot-red { background: #ff5f56; }
    .dot-yellow { background: #ffbd2e; }
    .dot-green { background: #27c93f; }
    .terminal-body {
      background: #0d1117;
      padding: 20px;
      border-radius: 0 0 8px 8px;
      min-height: 200px;
    }
  </style>
</head>
<body>
  <div class="terminal-header">
    <span class="terminal-dot dot-red"></span>
    <span class="terminal-dot dot-yellow"></span>
    <span class="terminal-dot dot-green"></span>
    <span class="terminal-title">terminal</span>
  </div>
  <div class="terminal-body">${colorized}</div>
</body>
</html>`;
    }

    // Node.js and Express: Code + Animated Flow Diagram
    if (primaryLanguage === 'nodejs' || primaryLanguage === 'express') {
      const jsCode = code.javascript || selectedLesson.code.javascript || '';
      return buildFlowPreview(primaryLanguage, jsCode, selectedLesson.id);
    }

    const { html, css, javascript } = code;
    const shouldIncludeCSS = primaryLanguage !== 'html';
    const shouldIncludeJS = primaryLanguage === 'javascript';

    const cssToInclude = shouldIncludeCSS ? css : '';
    const jsToInclude = shouldIncludeJS ? javascript : '';

    const isCompleteDocument = html.includes('<html') || html.includes('<!DOCTYPE');

    if (isCompleteDocument) {
      let fullHtml = html;

      if (cssToInclude && !html.includes('<style>')) {
        fullHtml = fullHtml.replace('</head>', `<style>\n${cssToInclude}\n</style></head>`);
      }
      if (jsToInclude && !html.includes('<script>')) {
        fullHtml = fullHtml.replace('</body>', `<script>\n${jsToInclude}\n</script></body>`);
      }
      return fullHtml;
    }

    const cssBlock = cssToInclude ? `\n<style>\n${cssToInclude}\n</style>` : '';
    const jsBlock = jsToInclude ? `\n<script>\n${jsToInclude}\n</script>` : '';

    return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">${cssBlock}
</head>
<body>
  ${html}${jsBlock}
</body>
</html>`;
  };

  const currentCode = editedCode.html || editedCode.css || editedCode.javascript || editedCode.git
    ? editedCode
    : selectedLesson.code;

  const primaryLanguage = selectedLesson.language;

  const tabsOrder: Record<Language, Language[]> = {
    html: ['html'],
    css: ['html', 'css'],
    javascript: ['html', 'css', 'javascript'],
    git: ['git'],
    nodejs: ['javascript'],
    express: ['javascript'],
  };

  const getGitDemoCommand = (lessonId: string | undefined): string => {
    const demos: Record<string, string> = {
      'git-1': 'git init',
      'git-2': 'git clone https://github.com/user/repo.git',
      'git-3': 'git status',
      'git-4': 'git add .',
      'git-5': 'git commit -m "Initial commit"',
      'git-6': 'git config --global user.name "User"',
      'git-7': 'git log --oneline',
      'git-8': 'git diff',
      'git-9': 'git pull origin main',
      'git-10': 'git push -u origin main',
      'git-11': 'git remote add origin https://github.com/user/repo.git',
      'git-12': 'git branch feature/login',
      'git-13': 'git checkout feature/login',
      'git-14': 'git merge feature/login',
      'git-15': 'git branch -d feature/login',
      'git-16': 'git restore --staged file.txt',
      'git-17': 'git restore file.txt',
      'git-18': 'git reset --hard HEAD~1',
      'git-19': 'git revert abc1234',
      'git-20': 'git push -u origin main',
      'git-21': 'git pull origin feature/login',
      'git-22': 'git fetch origin',
      'git-23': 'git config --global alias.lg log --oneline',
      'git-24': 'git stash',
    };
    return demos[lessonId || ''] || 'git command';
  };

  const getGitDemoOutput = (lessonId: string | undefined): string => {
    const outputs: Record<string, string> = {
      'git-1': 'Initialized empty Git repository in /path/.git/',
      'git-2': 'Cloning into "repo"...\nremote: Enumerating objects: 100\nReceiving objects: 100%',
      'git-3': 'On branch main\nYour branch is up to date with "origin/main".',
      'git-4': 'Changes to be committed:\n  modified:   src/app.tsx',
      'git-5': '[main abc1234] Initial commit\n 1 file changed, 50 insertions(+)',
      'git-6': 'Username configured successfully',
      'git-7': 'abc1234 (HEAD -> main) Initial commit',
      'git-8': 'diff --git a/src/app.tsx b/src/app.tsx\n--- a/src/app.tsx\n+++ b/src/app.tsx',
      'git-9': 'Updating abc1234..def5678\nFast-forward',
      'git-10': 'Enumerating objects: 5, done.\nCounting objects: 100%',
      'git-11': 'Repository URL associated with "origin"',
      'git-12': 'Created branch feature/login',
      'git-13': 'Switched to branch "feature/login"',
      'git-14': 'Merge made by the "ort" strategy.',
      'git-15': 'Deleted branch feature/login (was abc1234).',
      'git-16': '',
      'git-17': '',
      'git-18': 'HEAD is now at abc1234 Previous commit',
      'git-19': '[main def5678] Revert "Add feature"',
      'git-20': 'Branch "main" set up to track "origin/main"',
      'git-21': 'Updating abc1234..def5678',
      'git-22': 'Fetching origin',
      'git-23': '',
      'git-24': 'Saved working directory and index state WIP on main',
    };
    return outputs[lessonId || ''] || '';
  };

  const previewHtml = buildPreview(currentCode);

  const availableTabs = tabs.filter(tab => tabsOrder[primaryLanguage].includes(tab.id));
  const defaultTab = availableTabs.find(tab => tab.id === primaryLanguage) || availableTabs[0];

  useEffect(() => {
    if (defaultTab && !isEditorOpen) {
      setActiveTab(defaultTab.id);
    }
  }, [defaultTab, isEditorOpen, setActiveTab]);

  useEffect(() => {
    setEditedCode({ html: '', css: '', javascript: '', git: undefined });
    setIsFullscreen(false);
  }, [selectedLesson?.id, setEditedCode]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div
        className={`relative w-full rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 ${
          isFullscreen
            ? 'w-[95vw] h-[95vh]'
            : 'max-w-6xl max-h-[92vh]'
        } ${
          darkMode ? 'bg-[#0c0c0e]' : 'bg-white'
        }`}
        style={isFullscreen ? { width: '95vw', height: '95vh' } : {}}
      >
        {!isEditorOpen ? (
          <div className={`flex flex-col ${isFullscreen ? 'h-full' : 'h-full max-h-[92vh]'}`}>
            <header
              className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${
                darkMode ? 'border-[#1a1a20]' : 'border-gray-100'
              }`}
            >
              <div>
                <span
                  className={`text-xs font-medium uppercase tracking-wider ${
                    darkMode ? 'text-[#666]' : 'text-gray-400'
                  }`}
                >
                  {selectedLesson.category}
                </span>
                <h2
                  className={`text-xl font-bold tracking-tight ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {selectedLesson.title}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleOpenEdit}
                  className="flex items-center gap-2 px-4 py-2 bg-[#f59e0b] hover:bg-[#fbbf24] text-black font-semibold text-sm rounded-xl transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Editar
                </button>
                <button
                  onClick={handleClose}
                  className={`p-2 rounded-xl transition-colors ${
                    darkMode ? 'hover:bg-[#1a1a20] text-[#666] hover:text-white' : 'hover:bg-gray-100 text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </header>

            <div className={`flex flex-1 overflow-hidden ${isFullscreen ? 'flex-col' : ''}`}>
              {isFullscreen ? (
                <div className="flex-1 flex flex-col relative">
                  <div
                    className={`px-4 py-3 border-b shrink-0 flex items-center justify-between ${
                      darkMode ? 'border-[#1a1a20] bg-[#0c0c0e]' : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <svg className={`w-4 h-4 ${darkMode ? 'text-[#555]' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className={`text-xs font-medium ${darkMode ? 'text-[#666]' : 'text-gray-500'}`}>
                        Vista previa
                      </span>
                    </div>
                    <button
                      onClick={() => setIsFullscreen(false)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        darkMode ? 'hover:bg-[#1a1a20] text-[#888]' : 'hover:bg-gray-100 text-gray-600'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Cerrar
                    </button>
                  </div>
                  <div className="flex-1 p-4">
                    <iframe
                      key={selectedLesson.id + '-preview-' + activeTab}
                      srcDoc={previewHtml}
                      className="w-full h-full rounded-xl border bg-white"
                      sandbox="allow-scripts"
                      title="Preview"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div
                    className={`w-1/2 border-r shrink-0 flex flex-col ${
                      darkMode ? 'border-[#1a1a20] bg-[#08080a]' : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div
                      className={`px-4 py-3 border-b shrink-0 flex items-center justify-between ${
                        darkMode ? 'border-[#1a1a20] bg-[#0c0c0e]' : 'border-gray-200 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <svg className={`w-4 h-4 ${darkMode ? 'text-[#555]' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className={`text-xs font-medium ${darkMode ? 'text-[#666]' : 'text-gray-500'}`}>
                          Vista previa
                        </span>
                      </div>
                      <button
                        onClick={() => setIsFullscreen(true)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          darkMode ? 'hover:bg-[#1a1a20] text-[#666] hover:text-white' : 'hover:bg-gray-100 text-gray-400 hover:text-gray-600'
                        }`}
                        title="Pantalla completa"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex-1 overflow-hidden p-3">
                      <iframe
                        srcDoc={previewHtml}
                        className="w-full h-full rounded-xl border bg-white"
                        sandbox="allow-scripts"
                        title="Preview"
                      />
                    </div>
                  </div>
                </>
              )}

              {!isFullscreen && primaryLanguage === 'git' && (
                <div className="flex-1 flex flex-col overflow-hidden">
                  <div
                    className={`px-4 py-3 border-b shrink-0 flex items-center justify-between ${
                      darkMode ? 'border-[#1a1a20] bg-[#0c0c0e]' : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className={`text-xs font-medium ${darkMode ? 'text-[#666]' : 'text-gray-500'}`}>
                        Demo animado
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden p-3 bg-[#0d1117]">
                    <div className="h-full rounded-xl overflow-hidden bg-[#161b22] border border-[#30363d]">
                      <div className="bg-[#1c2128] px-4 py-2 flex items-center gap-2 border-b border-[#30363d]">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        <span className="ml-2 text-xs text-[#8b949e]">bash</span>
                      </div>
                      <div className="p-4 font-mono text-sm">
                        <div className="text-[#7ee787] animate-pulse">$ {getGitDemoCommand(selectedLesson.id)}</div>
                        <div className="mt-2 text-[#8b949e] text-xs">{getGitDemoOutput(selectedLesson.id)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {!isFullscreen && primaryLanguage !== 'git' && (
                <div className="flex-1 flex flex-col overflow-hidden">
                  <div
                    className={`flex border-b shrink-0 ${
                      darkMode ? 'border-[#1a1a20] bg-[#0c0c0e]' : 'border-gray-200 bg-white'
                    }`}
                  >
                    {availableTabs.map((tab) => {
                      const isActive = activeTab === tab.id;

                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors relative ${
                            isActive
                              ? darkMode ? 'text-white bg-[#111115]' : 'text-gray-900 bg-white'
                              : darkMode
                              ? 'text-[#666] hover:text-[#aaa]'
                              : 'text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          <span className={tab.color}>{tab.label}</span>
                          {isActive && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f59e0b]" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex-1 overflow-auto p-4">
                    <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-[#777]' : 'text-gray-600'}`}>
                      {selectedLesson.description}
                    </p>

                    {currentCode[activeTab] && (
                      <div
                        className={`rounded-xl overflow-hidden border ${
                          darkMode ? 'border-[#1a1a20]' : 'border-gray-200'
                        }`}
                      >
                        <Highlight
                          theme={darkMode ? themes.nightOwl : themes.github}
                          code={currentCode[activeTab].trim()}
                          language={activeTab === 'javascript' ? 'javascript' : activeTab === 'css' ? 'css' : 'markup'}
                        >
                          {({ style, tokens, getLineProps, getTokenProps }) => (
                            <pre
                              className="p-4 overflow-x-auto text-sm max-h-80"
                              style={{ ...style, background: darkMode ? '#111115' : '#f6f8fa' }}
                            >
                              {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })}>
                                  <span
                                    className={`inline-block w-8 text-right mr-4 select-none text-xs ${
                                      darkMode ? 'text-[#3a3a45]' : 'text-gray-300'
                                    }`}
                                  >
                                    {i + 1}
                                  </span>
                                  {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                  ))}
                                </div>
                              ))}
                            </pre>
                          )}
                        </Highlight>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full max-h-[92vh]">
            <header
              className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${
                darkMode ? 'border-[#1a1a20]' : 'border-gray-100'
              }`}
            >
              <div>
                <h2 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Editando: {selectedLesson.title}
                </h2>
                <p className={`text-xs ${darkMode ? 'text-[#666]' : 'text-gray-500'}`}>
                  Modifica y ve los cambios en tiempo real
                </p>
              </div>

              <button
                onClick={handleClose}
                className={`p-2 rounded-xl transition-colors ${
                  darkMode ? 'hover:bg-[#1a1a20] text-[#666] hover:text-white' : 'hover:bg-gray-100 text-gray-400 hover:text-gray-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </header>

            <div className="flex flex-1 overflow-hidden">
              <div className={`flex-1 flex flex-col ${darkMode ? 'bg-[#0a0a0e]' : 'bg-gray-50'}`}>
                <div className={`flex border-b ${darkMode ? 'border-[#1a1a20] bg-[#0c0c0e]' : 'border-gray-200 bg-white'}`}>
                  {availableTabs.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 px-4 py-2.5 text-sm font-medium transition-colors relative ${
                          isActive
                            ? darkMode ? 'text-white bg-[#111115]' : 'text-gray-900 bg-white'
                            : darkMode
                            ? 'text-[#666] hover:text-[#aaa]'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        <span className={tab.color}>{tab.label}</span>
                        {isActive && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f59e0b]" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="flex-1 p-4 overflow-auto">
                  <textarea
                    value={currentCode[activeTab] || ''}
                    onChange={(e) => setEditedCodeField(activeTab, e.target.value)}
                    className={`w-full h-full min-h-[300px] p-4 rounded-xl font-mono text-sm resize-none focus:outline-none ${
                      darkMode
                        ? 'bg-[#111115] text-[#e0e0e0] border border-[#2a2a32]'
                        : 'bg-white text-gray-900 border border-gray-200'
                    }`}
                    spellCheck={false}
                    style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Monaco', monospace" }}
                    placeholder={`Escribe tu código ${activeTab.toUpperCase()} aquí...`}
                  />
                </div>
              </div>

              <div
                className={`w-1/2 flex flex-col border-l ${
                  darkMode ? 'border-[#1a1a20] bg-[#08080a]' : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div
                  className={`px-4 py-3 border-b shrink-0 ${
                    darkMode ? 'border-[#1a1a20] bg-[#0c0c0e]' : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <svg className={`w-4 h-4 ${darkMode ? 'text-[#555]' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className={`text-xs font-medium ${darkMode ? 'text-[#666]' : 'text-gray-500'}`}>
                      Vista previa en vivo
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-3 overflow-hidden">
                  <iframe
                    srcDoc={previewHtml}
                    className="w-full h-full rounded-xl border bg-white"
                    sandbox="allow-scripts"
                    title="Preview"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
