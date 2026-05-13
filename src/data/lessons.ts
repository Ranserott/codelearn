import { Lesson } from '@/types';

// Frontend lessons (HTML/CSS/JS/Git)
const frontendLessons: Lesson[] = [
  // HTML - 17 lecciones incrementales
  {
    id: 'html-1',
    title: '1. Introducción a HTML',
    description: 'HTML (HyperText Markup Language) es el lenguaje base para crear páginas web. Aprende qué es y cómo funciona.',
    language: 'html',
    category: 'introduccion',
    code: {
      html: `<h1>¡Hola, Mundo!</h1>
<p>Esta es mi primera página web creada con HTML.</p>
<p>HTML usa etiquetas para definir elementos.</p>`,
      css: '',
      javascript: ''
    }
  },
  {
    id: 'html-2',
    title: '2. Estructura básica de un documento HTML',
    description: 'Todo documento HTML necesita una estructura básica con DOCTYPE, html, head y body.',
    language: 'html',
    category: 'estructura',
    code: {
      html: `<!DOCTYPE html>
<html>
<head>
  <title>Mi primera página</title>
</head>
<body>
  <h1>Bienvenido</h1>
  <p>Este es el contenido de mi página.</p>
</body>
</html>`,
      css: '',
      javascript: ''
    }
  },
  {
    id: 'html-3',
    title: '3. Títulos',
    description: 'Los títulos van de h1 (más importante) a h6 (menos importante). Solo debe haber un h1 por página.',
    language: 'html',
    category: 'titulos',
    code: {
      html: `<h1>Título principal (h1)</h1>
<h2>Subtítulo (h2)</h2>
<h3>Sub-subtítulo (h3)</h3>
<h4>Más pequeño (h4)</h4>
<h5>Aún más pequeño (h5)</h5>
<h6>El más pequeño (h6)</h6>`,
      css: '',
      javascript: ''
    }
  },
  {
    id: 'html-4',
    title: '4. Párrafos',
    description: 'El elemento p define un párrafo de texto. El navegador añade automáticamente espacio antes y después.',
    language: 'html',
    category: 'parrafos',
    code: {
      html: `<p>Este es el primer párrafo. Los navegadores automáticamente añaden saltos de línea antes y después de cada párrafo.</p>

<p>Este es el segundo párrafo. Cada párrafo es un bloque separado de texto.</p>

<p>Tercer párrafo: observa el espacio entre ellos.</p>`,
      css: '',
      javascript: ''
    }
  },
  {
    id: 'html-5',
    title: '5. Saltos de línea y separadores',
    description: 'Usa br para saltos de línea y hr para líneas separadoras horizontales.',
    language: 'html',
    category: 'saltos',
    code: {
      html: `<p>Primera línea<br>Segunda línea (saltos con br)</p>

<hr>

<p>Texto antes del separador</p>
<hr>
<p>Texto después del separador</p>

<p>Dirección:<br>
Calle Principal 123<br>
Ciudad, País</p>`,
      css: '',
      javascript: ''
    }
  },
  {
    id: 'html-6',
    title: '6. Formato de texto',
    description: 'Aprende a enfatizar texto con negrita, cursiva, subíndice, superíndice y más.',
    language: 'html',
    category: 'formato',
    code: {
      html: `<p><b>Texto en negrita</b> usando b</p>
<p><strong>Texto importante</strong> usando strong</p>

<p><i>Texto en cursiva</i> usando i</p>
<p><em>Texto enfatizado</em> usando em</p>

<p><u>Texto subrayado</u> usando u</p>
<p><s>Texto tachado</s> usando s</p>

<p>Superíndice: x<sup>2</sup> + y<sup>2</sup></p>
<p>Subíndice: H<sub>2</sub>O</p>

<p><mark>Texto marcado</mark> con mark</p>
<p><small>Texto pequeño</small> con small</p>`,
      css: '',
      javascript: ''
    }
  },
  {
    id: 'html-7',
    title: '7. Contenedores',
    description: 'Los div son contenedores genéricos que agrupan elementos. Los span agrupan elementos en línea.',
    language: 'html',
    category: 'contenedores',
    code: {
      html: `<div>
  <h2>Título dentro de un div</h2>
  <p>Todo este contenido está dentro de un div contenedor.</p>
</div>

<div>
  <p>Este es otro div separado.</p>
  <p>Los div son bloques que ocupan todo el ancho.</p>
</div>

<p>Texto normal con <span>span dentro</span> para <span>formatear partes</span> específicas.</p>`,
      css: '',
      javascript: ''
    }
  },
  {
    id: 'html-8',
    title: '8. Listas',
    description: 'Crea listas ordenadas (numeradas) y desordenadas (con viñetas).',
    language: 'html',
    category: 'listas',
    code: {
      html: `<h3>Lista desordenada (ul)</h3>
<ul>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
  <li>Tercer elemento</li>
</ul>

<h3>Lista ordenada (ol)</h3>
<ol>
  <li>Primer paso</li>
  <li>Segundo paso</li>
  <li>Tercer paso</li>
</ol>

<h3>Lista anidada</h3>
<ul>
  <li>Frutas
    <ul>
      <li>Manzana</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Verduras
    <ul>
      <li>Lechuga</li>
      <li>Tomate</li>
    </ul>
  </li>
</ul>`,
      css: '',
      javascript: ''
    }
  },
  {
    id: 'html-9',
    title: '9. Imágenes',
    description: 'El elemento img muestra imágenes. Aprende a usar src, alt, width y height.',
    language: 'html',
    category: 'imagenes',
    code: {
      html: `<h3>Imagen básica</h3>
<img src="https://picsum.photos/300/200" alt="Imagen de ejemplo">

<h3>Imagen con dimensiones</h3>
<img src="https://picsum.photos/200/200" alt="Imagen cuadrada" width="150" height="150">

<h3>Imagen con título</h3>
<figure>
  <img src="https://picsum.photos/250/150" alt="Paisaje">
  <figcaption>Este es el pie de foto</figcaption>
</figure>`,
      css: '',
      javascript: ''
    }
  },
  {
    id: 'html-10',
    title: '10. Videos',
    description: 'El elemento video permite insertar videos directamente en la página web.',
    language: 'html',
    category: 'videos',
    code: {
      html: `<h3>Video con controls</h3>
<video width="400" controls>
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Tu navegador no soporta el elemento video.
</video>

<h3>Video con autoplay y muted</h3>
<video width="400" autoplay muted loop>
  <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4">
</video>

<p>Usa muted para que autoplay funcione en algunos navegadores.</p>`,
      css: '',
      javascript: ''
    }
  },
  {
    id: 'html-11',
    title: '11. Enlaces (links)',
    description: 'Los enlaces (a) permiten navegar a otras páginas o secciones.',
    language: 'html',
    category: 'enlaces',
    code: {
      html: `<h3>Enlaces básicos</h3>
<p><a href="https://www.ejemplo.com">Enlace a website externo</a></p>
<p><a href="#seccion2">Enlace a otra sección</a></p>

<h3>Enlace con target _blank</h3>
<p><a href="https://www.google.com" target="_blank" rel="noopener">Abre en nueva pestaña</a></p>

<h3>Enlace a email y teléfono</h3>
<p><a href="mailto:correo@ejemplo.com">Enviar email</a></p>
<p><a href="tel:+34912345678">Llamar</a></p>

<h3>Enlace como botón</h3>
<a href="#">Botón enlace</a>

<h3 id="seccion2">Sección 2</h3>
<p>Este es el destino del enlace interno.</p>`,
      css: '',
      javascript: ''
    }
  },
  {
    id: 'html-12',
    title: '12. Navegación entre páginas',
    description: 'Crea un menú de navegación con enlaces usando nav y ul.',
    language: 'html',
    category: 'navegacion',
    code: {
      html: `<nav>
  <ul>
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Acerca de</a></li>
    <li><a href="#">Servicios</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>

<h1>Página Principal</h1>
<p>Esta es una página con menú de navegación.</p>

<article>
  <h2>Artículo 1</h2>
  <p>Contenido del primer artículo.</p>
</article>

<article>
  <h2>Artículo 2</h2>
  <p>Contenido del segundo artículo.</p>
</article>

<footer>
  <p>Pie de página</p>
</footer>`,
      css: '',
      javascript: ''
    }
  },
  {
    id: 'html-13',
    title: '13. Formularios',
    description: 'Los formularios permiten收集 información del usuario. Usa form, label e input.',
    language: 'html',
    category: 'formularios',
    code: {
      html: `<h2>Formulario de contacto</h2>
<form>
  <label for="nombre">Nombre:</label><br>
  <input type="text" id="nombre" name="nombre"><br><br>

  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email"><br><br>

  <label for="mensaje">Mensaje:</label><br>
  <textarea id="mensaje" name="mensaje" rows="4"></textarea><br><br>

  <button type="submit">Enviar</button>
</form>

<h2>Otro formulario</h2>
<form>
  <label for="buscar">Buscar:</label>
  <input type="search" id="buscar" name="buscar">
  <button type="submit">Ir</button>
</form>`,
      css: '',
      javascript: ''
    }
  },
  {
    id: 'html-14',
    title: '14. Tipos de inputs',
    description: 'HTML5 ofrece muchos tipos de inputs: texto, email, contraseña, número, fecha, y más.',
    language: 'html',
    category: 'inputs',
    code: {
      html: `<form>
  <fieldset>
    <legend>Tipos de Input</legend>

    <label for="texto">Texto:</label>
    <input type="text" id="texto" name="texto"><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>

    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password"><br><br>

    <label for="numero">Número:</label>
    <input type="number" id="numero" name="numero" min="1" max="10"><br><br>

    <label for="fecha">Fecha:</label>
    <input type="date" id="fecha" name="fecha"><br><br>

    <label for="color">Color:</label>
    <input type="color" id="color" name="color" value="#ff0000"><br><br>

    <label for="rango">Rango (1-100):</label>
    <input type="range" id="rango" name="rango" min="1" max="100"><br><br>

    <label for="tel">Teléfono:</label>
    <input type="tel" id="tel" name="tel"><br><br>

    <label for="url">URL:</label>
    <input type="url" id="url" name="url"><br><br>

    <input type="checkbox" id="acepto" name="acepto">
    <label for="acepto">Acepto los términos</label><br><br>

    <input type="radio" id="opcion1" name="opcion" value="1">
    <label for="opcion1">Opción 1</label>
    <input type="radio" id="opcion2" name="opcion" value="2">
    <label for="opcion2">Opción 2</label><br><br>

    <button type="submit">Enviar</button>
  </fieldset>
</form>`,
      css: '',
      javascript: ''
    }
  },
  {
    id: 'html-15',
    title: '15. HTML semántico',
    description: 'Usa etiquetas semánticas como header, nav, main, article, section, aside y footer.',
    language: 'html',
    category: 'semantico',
    code: {
      html: `<header>
  <h1>Mi Blog Personal</h1>
  <nav>
    <a href="#">Inicio</a> |
    <a href="#">Artículos</a> |
    <a href="#">Contacto</a>
  </nav>
</header>

<main>
  <article>
    <header>
      <h2>Título del Artículo</h2>
      <p>Por: Autor | Fecha: 15 Enero 2025</p>
    </header>
    <section>
      <p>Este es el contenido principal del artículo...</p>
    </section>
    <footer>
      <p>Etiquetas: HTML, CSS, JavaScript</p>
    </footer>
  </article>

  <aside>
    <h3>Enlaces populares</h3>
    <ul>
      <li><a href="#">Artículo relacionado 1</a></li>
      <li><a href="#">Artículo relacionado 2</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2025 Mi Blog. Todos los derechos reservados.</p>
</footer>`,
      css: '',
      javascript: ''
    }
  },
  {
    id: 'html-16',
    title: '16. Estructura completa de una página web',
    description: 'Una página web completa con todos los elementos semánticos juntos.',
    language: 'html',
    category: 'estructura-completa',
    code: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Descripción de la página">
  <title>Título de la página</title>
</head>
<body>
  <header>
    <h1>Nombre del Sitio</h1>
    <nav>
      <a href="#inicio">Inicio</a>
      <a href="#servicios">Servicios</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>

  <main>
    <section id="inicio">
      <h2>Bienvenido</h2>
      <p>Contenido principal de la sección de inicio.</p>
    </section>

    <section id="servicios">
      <h2>Nuestros Servicios</h2>
      <article>
        <h3>Servicio 1</h3>
        <p>Descripción del servicio 1.</p>
      </article>
      <article>
        <h3>Servicio 2</h3>
        <p>Descripción del servicio 2.</p>
      </article>
    </section>

    <section id="portfolio">
      <h2>Portfolio</h2>
      <figure>
        <img src="https://picsum.photos/300/200" alt="Proyecto 1">
        <figcaption>Proyecto 1</figcaption>
      </figure>
    </section>

    <section id="contacto">
      <h2>Contacto</h2>
      <form>
        <input type="text" placeholder="Tu nombre">
        <input type="email" placeholder="Tu email">
        <textarea placeholder="Tu mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 Nombre del Sitio. Todos los derechos reservados.</p>
  </footer>
</body>
</html>`,
      css: '',
      javascript: ''
    }
  },
  {
    id: 'html-17',
    title: '17. Buenas prácticas en HTML',
    description: 'Aprende conventions y mejores prácticas para escribir HTML limpio y mantenible.',
    language: 'html',
    category: 'buenas-practicas',
    code: {
      html: `<!-- DOCTYPE y idioma -->
<!DOCTYPE html>
<html lang="es">

<head>
  <!-- Codificación UTF-8 para caracteres especiales -->
  <meta charset="UTF-8">

  <!-- Viewport para diseño responsive -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Descripción para SEO -->
  <meta name="description" content="Breve descripción de la página">

  <!-- Título descriptivo -->
  <title>Nombre de la Página | Nombre del Sitio</title>

  <!-- Enlaces a recursos -->
  <link rel="stylesheet" href="estilos.css">
  <link rel="icon" href="favicon.ico">
</head>

<body>
  <!-- Encabezado con navegación -->
  <header>
    <nav>
      <a href="/">Inicio</a>
      <a href="/acerca">Acerca de</a>
    </nav>
  </header>

  <!-- Contenido principal -->
  <main>
    <!-- Usar headings en orden correcto -->
    <h1>Título principal</h1>
    <h2>Subtítulo</h2>
    <h3>Sub-subtítulo</h3>

    <!-- Usar alt en imágenes -->
    <img src="imagen.jpg" alt="Descripción de la imagen">

    <!-- Usar label con for en formularios -->
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">

    <!-- Cerrar etiquetas -->
    <p>Párrafo correctamente cerrado.</p>

    <!-- Usar elementos semánticos -->
    <article>
      <header>
        <h2>Título del artículo</h2>
        <time datetime="2025-01-15">15 Enero 2025</time>
      </header>
      <p>Contenido del artículo.</p>
      <footer>
        <p>Autor: Nombre</p>
      </footer>
    </article>
  </main>

  <!-- Pie de página -->
  <footer>
    <p>&copy; 2025. Todos los derechos reservados.</p>
  </footer>

  <!-- Scripts al final -->
  <script src="script.js"></script>
</body>
</html>`,
      css: '',
      javascript: ''
    }
  },

  // CSS - 24 lecciones incrementales
  {
    id: 'css-1',
    title: '1. Introducción a CSS',
    description: 'CSS (Cascading Style Sheets) es el lenguaje para dar estilo y diseño a las páginas web.',
    language: 'css',
    category: 'introduccion',
    code: {
      html: `<h1>Título principal</h1>
<p>Este es un párrafo de texto.</p>
<p>Otro párrafo más.</p>`,
      css: `h1 {
  color: blue;
}

p {
  color: gray;
}`,
      javascript: ''
    }
  },
  {
    id: 'css-2',
    title: '2. Formas de aplicar CSS',
    description: 'Aprende las tres formas de aplicar estilos: inline, interno y externo.',
    language: 'css',
    category: 'formass-aplicar',
    code: {
      html: `<!-- Inline: estilo directo en el elemento -->
<h1 style="color: red;">Título rojo inline</h1>

<!-- Interno: estilos en la misma página -->
<h2>Este h2 usa CSS interno</h2>

<!-- El externo se vincula con link (lo verás en siguientes lecciones) -->`,
      css: `/* CSS interno: se coloca dentro de <style> en el <head> */
h2 {
  color: green;
  font-size: 24px;
}

/* El style inline usa el atributo style directamente */`,
      javascript: ''
    }
  },
  {
    id: 'css-3',
    title: '3. Selectores básicos',
    description: 'Los selectores permiten apuntar a elementos HTML. Aprende a usar etiquetas, clases e IDs.',
    language: 'css',
    category: 'selectores',
    code: {
      html: `<h1>Título h1</h1>
<h2>Subtítulo h2</h2>
<h2>Otro h2</h2>

<p class="destacado">Párrafo con clase "destacado"</p>
<p>Párrafo normal</p>

<div id="caja">Caja con ID único</div>`,
      css: `/* Selector de etiqueta */
h1 {
  color: navy;
}

/* Selector de clase: punto antes del nombre */
.destacado {
  color: orange;
  font-weight: bold;
}

/* Selector de ID: # antes del nombre */
#caja {
  background: lightblue;
  padding: 20px;
  border-radius: 8px;
}`,
      javascript: ''
    }
  },
  {
    id: 'css-4',
    title: '4. Colores',
    description: 'Define colores usando nombres, hexadecimales, RGB, RGBA y HSL.',
    language: 'css',
    category: 'colores',
    code: {
      html: `<div class="colores">
  <p class="nombre">Color por nombre</p>
  <p class="hex">Color hexadecimal</p>
  <p class="rgb">Color RGB</p>
  <p class="rgba">Color RGBA (con transparencia)</p>
  <p class="hsl">Color HSL</p>
</div>`,
      css: `.colores p {
  padding: 15px;
  margin: 10px 0;
}

.nombre { background: crimson; color: white; }
.hex { background: #2ecc71; color: white; }
.rgb { background: rgb(52, 152, 219); color: white; }
.rgba { background: rgba(155, 89, 182, 0.7); color: white; }
.hsl { background: hsl(280, 60%, 50%); color: white; }`,
      javascript: ''
    }
  },
  {
    id: 'css-5',
    title: '5. Fondos',
    description: 'Personaliza fondos con colores sólidos, gradientes e imágenes.',
    language: 'css',
    category: 'fondos',
    code: {
      html: `<div class="caja solido">Fondo sólido</div>
<div class="caja gradiente">Fondo con gradiente</div>
<div class="caja imagen">Fondo con imagen</div>`,
      css: `.caja {
  height: 100px;
  margin: 15px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.solido {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.gradiente {
  background: linear-gradient(to right, #f093fb, #f5576c);
}

.imagen {
  background-image: url('https://picsum.photos/400/100');
  background-size: cover;
  background-position: center;
}`,
      javascript: ''
    }
  },
  {
    id: 'css-6',
    title: '6. Tipografía',
    description: 'Controla fuentes, tamaños, pesos, espaciado y alineación del texto.',
    language: 'css',
    category: 'tipografia',
    code: {
      html: `<h1 class="titulo">Título Principal</h1>
<p class="normal">Texto normal - Lorem ipsum dolor sit amet.</p>
<p class="elegante">Texto elegante con serif y itálica.</p>
<p class="comprimido">Texto con interlineado ajustado y tracking amplio.</p>`,
      css: `.titulo {
  font-family: Georgia, serif;
  font-size: 2.5rem;
  text-align: center;
  color: #333;
}

.normal {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

.elegante {
  font-family: 'Times New Roman', serif;
  font-style: italic;
  font-size: 18px;
  letter-spacing: 2px;
  color: #555;
}

.comprimido {
  font-family: Verdana, sans-serif;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #777;
}`,
      javascript: ''
    }
  },
  {
    id: 'css-7',
    title: '7. Tamaños y unidades',
    description: 'Aprende las unidades px, em, rem, %, vw, vh y cuándo usar cada una.',
    language: 'css',
    category: 'tamanos',
    code: {
      html: `<div class="caja px">200px de ancho</div>
<div class="caja em">10em de ancho</div>
<div class="caja porciento">50% del contenedor</div>
<div class="caja vw">20vw (20% del viewport)</div>`,
      css: `.caja {
  background: #3498db;
  color: white;
  padding: 20px;
  margin: 10px 0;
  font-weight: bold;
  text-align: center;
}

.px { width: 200px; }
.em { width: 10em; } /* 10 * tamaño de fuente */
.porciento { width: 50%; }
.vw { width: 20vw; } /* 20% del ancho de ventana */`,
      javascript: ''
    }
  },
  {
    id: 'css-8',
    title: '8. Modelo de caja (Box Model)',
    description: 'Todo elemento es una caja con content, padding, border y margin.',
    language: 'css',
    category: 'box-model',
    code: {
      html: `<div class="caja">Contenido de la caja</div>`,
      css: `.caja {
  background: #e74c3c;
  color: white;
  width: 200px;

  /* Content */
  padding: 30px;

  /* Border */
  border: 5px solid #c0392b;

  /* Margin */
  margin: 40px;

  /* Importante para cálculos exactos */
  box-sizing: border-box;
}`,
      javascript: ''
    }
  },
  {
    id: 'css-9',
    title: '9. Bordes',
    description: 'Estiliza bordes con diferentes grosores, estilos y colores. Crea formas con border-radius.',
    language: 'css',
    category: 'bordes',
    code: {
      html: `<div class="caja solido">Borde sólido</div>
<div class="caja punteado">Borde punteado</div>
<div class="caja doble">Borde doble</div>
<div class="caja redondas">Bordes redondeados</div>
<div class="caja circulo">Círculo perfecto</div>`,
      css: `.caja {
  background: #ecf0f1;
  padding: 20px;
  margin: 15px 0;
  text-align: center;
  font-weight: bold;
}

.solido { border: 3px solid #e74c3c; }
.punteado { border: 3px dotted #3498db; }
.doble { border: 5px double #2ecc71; }

.redondas {
  border: 3px solid #9b59b6;
  border-radius: 15px;
}

.circulo {
  width: 100px;
  height: 100px;
  background: #f39c12;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  line-height: 100px;
}`,
      javascript: ''
    }
  },
  {
    id: 'css-10',
    title: '10. Márgenes',
    description: 'Los márgenes separan elementos. Aprende margin, auto y la colapsación de márgenes.',
    language: 'css',
    category: 'margenes',
    code: {
      html: `<div class="caja arriba">Caja con margen arriba</div>
<div class="caja centro">Centrada con margin: auto</div>
<div class="caja lateral">Gran margen lateral</div>`,
      css: `.caja {
  background: #3498db;
  color: white;
  padding: 20px;
  font-weight: bold;
}

.arriba {
  margin-bottom: 30px;
}

.centro {
  width: 200px;
  margin: 0 auto;
  background: #2ecc71;
}

.lateral {
  margin-left: 50px;
  margin-right: 50px;
  background: #e74c3c;
}`,
      javascript: ''
    }
  },
  {
    id: 'css-11',
    title: '11. Padding',
    description: 'El padding añade espacio interno dentro del elemento, entre el contenido y el borde.',
    language: 'css',
    category: 'padding',
    code: {
      html: `<div class="caja chico">Poco padding</div>
<div class="caja medio">Padding medio</div>
<div class="caja grande">Mucho padding</div>`,
      css: `.caja {
  background: #9b59b6;
  color: white;
  border: 2px solid #8e44ad;
}

.chico { padding: 5px; }
.medio { padding: 20px; }
.grande { padding: 40px; }`,
      javascript: ''
    }
  },
  {
    id: 'css-12',
    title: '12. Display',
    description: 'Controla cómo se muestra un elemento: block, inline, inline-block o none.',
    language: 'css',
    category: 'display',
    code: {
      html: `<div class="block">Block 1 - Ocupa toda la línea</div>
<div class="block">Block 2 - Ocupa toda la línea</div>

<span class="inline">Inline 1</span>
<span class="inline">Inline 2</span>
<span class="inline">Inline 3</span>

<div class="cajas-inline-block">
  <div class="ib">Inline-block 1</div>
  <div class="ib">Inline-block 2</div>
  <div class="ib">Inline-block 3</div>
</div>`,
      css: `.block {
  background: #e74c3c;
  color: white;
  padding: 10px;
  margin: 5px;
}

.inline {
  background: #3498db;
  color: white;
  padding: 10px 20px;
  margin: 5px;
}

.cajas-inline-block {
  margin-top: 20px;
}

.ib {
  display: inline-block;
  background: #2ecc71;
  color: white;
  padding: 10px 20px;
  margin: 5px;
  width: 120px;
  text-align: center;
}`,
      javascript: ''
    }
  },
  {
    id: 'css-13',
    title: '13. Position',
    description: 'Posiciona elementos con static, relative, absolute, fixed y sticky.',
    language: 'css',
    category: 'position',
    code: {
      html: `<div class="contenedor">
  <div class="relativo">Relativo - se mueve respecto a su posición</div>
  <div class="absoluto">Absoluto - sale del flujo</div>
  <div class="estatico">Estático - el normal</div>
</div>
<div class="fixed">Fixed - siempre visible</div>`,
      css: `.contenedor {
  position: relative;
  background: #ecf0f1;
  height: 200px;
  padding: 10px;
}

.relativo {
  position: relative;
  top: 10px;
  left: 20px;
  background: #3498db;
  color: white;
  padding: 10px;
}

.absoluto {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #e74c3c;
  color: white;
  padding: 10px;
}

.estatico {
  background: #95a5a6;
  color: white;
  padding: 10px;
  margin-top: 10px;
}

.fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #f39c12;
  color: white;
  padding: 15px 25px;
  border-radius: 30px;
}`,
      javascript: ''
    }
  },
  {
    id: 'css-14',
    title: '14. Flexbox',
    description: 'Flexbox organiza elementos en una dirección. Domina display: flex y sus propiedades.',
    language: 'css',
    category: 'flexbox',
    code: {
      html: `<div class="nav">
  <div class="logo">Logo</div>
  <div class="enlaces">
    <a href="#">Inicio</a>
    <a href="#">Servicios</a>
    <a href="#">Contacto</a>
  </div>
</div>

<div class="cards">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>`,
      css: `.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2c3e50;
  padding: 15px 30px;
  color: white;
}

.logo { font-weight: bold; font-size: 1.2rem; }

.enlaces { display: flex; gap: 20px; }
.enlaces a { color: #bdc3c7; text-decoration: none; }
.enlaces a:hover { color: white; }

.cards {
  display: flex;
  gap: 20px;
  padding: 40px;
  background: #ecf0f1;
}

.card {
  flex: 1;
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}`,
      javascript: ''
    }
  },
  {
    id: 'css-15',
    title: '15. Grid',
    description: 'CSS Grid permite crear layouts bidimensionales con filas y columnas.',
    language: 'css',
    category: 'grid',
    code: {
      html: `<div class="grid-layout">
  <header class="header">Header</header>
  <aside class="sidebar">Sidebar</aside>
  <main class="main">Main Content</main>
  <footer class="footer">Footer</footer>
</div>`,
      css: `.grid-layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
  min-height: 300px;
}

.header {
  grid-column: 1 / -1;
  background: #2c3e50;
  color: white;
  padding: 20px;
}

.sidebar {
  background: #3498db;
  color: white;
  padding: 20px;
}

.main {
  background: #ecf0f1;
  padding: 20px;
}

.footer {
  grid-column: 1 / -1;
  background: #34495e;
  color: white;
  padding: 15px;
  text-align: center;
}`,
      javascript: ''
    }
  },
  {
    id: 'css-16',
    title: '16. Alineación y espaciado',
    description: 'Aprende justify-content, align-items, gap y otras herramientas de alineación.',
    language: 'css',
    category: 'alineacion',
    code: {
      html: `<h3>center</h3>
<div class="caja centro">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<h3>space-between</h3>
<div class="caja between">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<h3>align-items: center</h3>
<div class="caja vertical">
  <div class="item">Alto</div>
  <div class="item">Medio</div>
  <div class="item">Alto</div>
</div>`,
      css: `.caja {
  display: flex;
  background: #ecf0f1;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
}

.centro { justify-content: center; gap: 10px; }
.between { justify-content: space-between; }
.vertical { align-items: center; height: 120px; gap: 10px; }

.item {
  background: #3498db;
  color: white;
  padding: 15px 25px;
  border-radius: 5px;
  text-align: center;
}

h3 { color: #333; margin: 20px 0 5px; }`,
      javascript: ''
    }
  },
  {
    id: 'css-17',
    title: '17. Responsive design',
    description: 'Diseña para cualquier dispositivo con Mobile First y media queries básicos.',
    language: 'css',
    category: 'responsive',
    code: {
      html: `<div class="container">
  <div class="box">Caja 1</div>
  <div class="box">Caja 2</div>
  <div class="box">Caja 3</div>
</div>
<p class="mensaje">Cambia el ancho del navegador</p>`,
      css: `.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  background: #f5f5f5;
}

.box {
  flex: 1 1 200px;
  background: #3498db;
  color: white;
  padding: 30px;
  text-align: center;
  border-radius: 8px;
}

.mensaje {
  text-align: center;
  color: #666;
  font-style: italic;
  margin-top: 20px;
}`,
      javascript: ''
    }
  },
  {
    id: 'css-18',
    title: '18. Media queries',
    description: 'Las media queries aplican estilos según el tamaño de la pantalla.',
    language: 'css',
    category: 'media-queries',
    code: {
      html: `<div class="layout">
  <div class="sidebar">Sidebar</div>
  <div class="content">Contenido principal</div>
</div>`,
      css: `.layout {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #f5f5f5;
}

.sidebar {
  width: 250px;
  background: #2c3e50;
  color: white;
  padding: 30px;
  border-radius: 8px;
}

.content {
  flex: 1;
  background: white;
  padding: 30px;
  border-radius: 8px;
}

/* Tablet */
@media (max-width: 768px) {
  .layout { flex-direction: column; }
  .sidebar { width: 100%; }
}

/* Móvil */
@media (max-width: 480px) {
  .sidebar { background: #e74c3c; }
  .content { background: #ecf0f1; }
}`,
      javascript: ''
    }
  },
  {
    id: 'css-19',
    title: '19. Transiciones',
    description: 'Las transiciones animan cambios de propiedades de forma suave.',
    language: 'css',
    category: 'transiciones',
    code: {
      html: `<div class="boton">Hover me</div>
<div class="caja">Pasa el mouse</div>`,
      css: `.boton {
  background: #3498db;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.boton:hover {
  background: #2980b9;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
}

.caja {
  width: 150px;
  height: 150px;
  background: #e74c3c;
  margin-top: 30px;
  transition: background 0.5s, border-radius 0.5s;
}

.caja:hover {
  background: #f39c12;
  border-radius: 50%;
}`,
      javascript: ''
    }
  },
  {
    id: 'css-20',
    title: '20. Animaciones',
    description: 'Las animaciones @keyframes permiten secuencias más complejas que las transiciones.',
    language: 'css',
    category: 'animaciones',
    code: {
      html: `<div class="spinner"></div>
<div class="pulso">Pulso</div>
<div class="rebote">Rebote</div>`,
      css: `@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #ecf0f1;
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 30px auto;
}

.pulso {
  width: 100px;
  height: 100px;
  background: #e74c3c;
  border-radius: 50%;
  margin: 30px auto;
  animation: pulse 1.5s ease-in-out infinite;
}

.rebote {
  width: 60px;
  height: 60px;
  background: #2ecc71;
  border-radius: 8px;
  margin: 30px auto;
  animation: bounce 0.8s ease-in-out infinite;
}`,
      javascript: ''
    }
  },
  {
    id: 'css-21',
    title: '21. Pseudo-clases',
    description: 'Las pseudo-clases (:hover, :focus, :nth-child) estilizan elementos en estados específicos.',
    language: 'css',
    category: 'pseudo-clases',
    code: {
      html: `<a href="#">Enlace normal</a>
<a href="#">Enlace visitado</a>

<input type="text" placeholder="Focus me">

<ul class="lista">
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
  <li>Tercer elemento</li>
  <li>Cuarto elemento</li>
</ul>`,
      css: `a { color: #3498db; text-decoration: none; }
a:hover { color: #e74c3c; text-decoration: underline; }
a:visited { color: #9b59b6; }

input {
  padding: 12px;
  border: 2px solid #bdc3c7;
  border-radius: 6px;
  margin: 20px 0;
  display: block;
  width: 200px;
}
input:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
}

.lista { list-style: none; padding: 0; }
.lista li {
  padding: 12px 20px;
  background: #ecf0f1;
  margin: 5px 0;
  border-radius: 5px;
}
.lista li:first-child { background: #d5f5e3; }
.lista li:last-child { background: #fdedec; }
.lista li:nth-child(odd) { background: #ebf5fb; }`,
      javascript: ''
    }
  },
  {
    id: 'css-22',
    title: '22. Pseudo-elementos',
    description: 'Los pseudo-elementos (::before, ::after, ::placeholder) crean elementos virtuales.',
    language: 'css',
    category: 'pseudo-elementos',
    code: {
      html: `<p class="cita">El conocimiento es poder.</p>

<div class="caja">Caja con flecha</div>

<input type="text" class="input" placeholder="Escribe algo...">`,
      css: `.cita::before {
  content: '"';
  font-size: 3rem;
  color: #3498db;
  vertical-align: top;
  line-height: 1;
}

.cita::after {
  content: '"';
  font-size: 3rem;
  color: #3498db;
  vertical-align: top;
  line-height: 1;
}

.caja {
  background: #2c3e50;
  color: white;
  padding: 20px 30px;
  position: relative;
  margin: 30px 0;
}

.caja::before {
  content: '';
  position: absolute;
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
  border: 10px solid transparent;
  border-right-color: #2c3e50;
}

.input {
  padding: 12px;
  border: 2px solid #bdc3c7;
  border-radius: 6px;
  width: 250px;
}
.input::placeholder {
  color: #95a5a6;
  font-style: italic;
}`,
      javascript: ''
    }
  },
  {
    id: 'css-23',
    title: '23. Organización del CSS',
    description: 'Mantén tu CSS mantenible con metodología BEM, ITCSS o SMACSS.',
    language: 'css',
    category: 'organizacion',
    code: {
      html: `<div class="card card--featured">
  <div class="card__header">
    <h2 class="card__title">Título de la tarjeta</h2>
  </div>
  <div class="card__body">
    <p class="card__text">Contenido de la tarjeta</p>
    <p class="card__text card__text--muted">Texto secundario</p>
  </div>
  <div class="card__footer">
    <button class="btn btn--primary">Acción</button>
    <button class="btn btn--secondary">Cancelar</button>
  </div>
</div>`,
      css: `/* BEM: Bloque__Elemento--Modificador */

/* Bloque */
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  overflow: hidden;
}

.card--featured {
  border: 2px solid #3498db;
}

/* Elementos */
.card__header { padding: 20px; border-bottom: 1px solid #eee; }
.card__body { padding: 20px; }
.card__footer { padding: 15px 20px; background: #f9f9f9; }

/* Modificador de elemento */
.card__text--muted { color: #888; font-size: 0.9rem; }

/* Botones */
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.btn--primary {
  background: #3498db;
  color: white;
}

.btn--secondary {
  background: #ecf0f1;
  color: #333;
  margin-left: 10px;
}`,
      javascript: ''
    }
  },
  {
    id: 'css-24',
    title: '24. Buenas prácticas en CSS',
    description: 'Convenciones, rendimiento y patrones para escribir CSS profesional.',
    language: 'css',
    category: 'buenas-practicas',
    code: {
      html: `<div class="componente">
  <header class="componente__encabezado">
    <h1 class="componente__titulo">Componente Reutilizable</h1>
  </header>
  <div class="componente__contenido">
    <p class="componente__texto">Usa variables CSS para temas consistentes.</p>
  </div>
  <div class="componente__acciones">
    <button class="boton boton--primario">Guardar</button>
    <button class="boton boton--secundario">Cancelar</button>
  </div>
</div>`,
      css: `/* 1. Usa variables para valores repetidos */
:root {
  --color-primario: #3498db;
  --color-secundario: #2c3e50;
  --espaciado: 20px;
  --radio: 8px;
}

/* 2. box-sizing: border-box siempre */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 3. Evita !important */

/* 4. Ordena propiedades lógicamente */
.componente {
  background: white;
  border-radius: var(--radio);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
}

.componente__encabezado {
  padding: var(--espaciado);
  border-bottom: 1px solid #eee;
}

.componente__titulo {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-secundario);
}

.componente__contenido { padding: var(--espaciado); }
.componente__texto { color: #666; line-height: 1.6; }
.componente__acciones {
  padding: var(--espaciado);
  background: #f9f9f9;
  display: flex;
  gap: 10px;
}

/* 5. Clases utilitarias mínimo */
.boton {
  padding: 10px 20px;
  border: none;
  border-radius: var(--radio);
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.boton--primario {
  background: var(--color-primario);
  color: white;
}

.boton--secundario {
  background: #e0e0e0;
  color: #333;
}`,
      javascript: ''
    }
  },

  // JavaScript - 20 lecciones incrementales
  {
    id: 'js-1',
    title: '1. Introducción a JavaScript',
    description: 'JavaScript es el lenguaje de programación de la web. Añade interactividad a las páginas HTML.',
    language: 'javascript',
    category: 'fundamentos',
    code: {
      html: `<h1>Mi primer JavaScript</h1>
<p id="texto">Este texto cambiará al hacer clic</p>
<button onclick="cambiarTexto()">Haz clic</button>`,
      css: `body {
  font-family: Arial, sans-serif;
  padding: 20px;
}
button {
  padding: 10px 20px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}
button:hover {
  background: #2980b9;
}`,
      javascript: `function cambiarTexto() {
  document.getElementById('texto').textContent = '¡Hola desde JavaScript!';
}`
    }
  },
  {
    id: 'js-2',
    title: '2. Cómo conectar JavaScript con HTML',
    description: 'Aprende las tres formas de incluir JavaScript: inline, interno y externo.',
    language: 'javascript',
    category: 'conectar',
    code: {
      html: `<h2>Métodos para conectar JS</h2>
<p>1. Inline: onclick en el elemento</p>
<button onclick="alert('Inline')">Alert Inline</button>

<p>2. Interno: script al final del body</p>
<button id="btn-interno">Alert Interno</button>

<p>3. Externo: archivo .js separado (lo verás más adelante)</p>`,
      css: `body { font-family: Arial; padding: 20px; }
p { margin: 15px 0 5px; }
button {
  padding: 10px 20px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover { background: #2980b9; }`,
      javascript: `// Interno: script al final del body
document.getElementById('btn-interno').addEventListener('click', function() {
  alert('¡JavaScript interno funciona!');
});`
    }
  },
  {
    id: 'js-3',
    title: '3. Variables',
    description: 'Declara variables con var, let y const. Aprende cuándo usar cada una.',
    language: 'javascript',
    category: 'variables',
    code: {
      html: `<h2>Variables en JavaScript</h2>
<div id="resultado"></div>`,
      css: `body { font-family: Arial; padding: 20px; }
#resultado { margin-top: 20px; }`,
      javascript: `// Variables
var nombreViejo = 'Variable antigua';
let edad = 25;
const PI = 3.14159;

// Mostrar resultados
const resultado = document.getElementById('resultado');
resultado.innerHTML = \`
  <p><strong>var:</strong> \${nombreViejo} (puede redeclararse)</p>
  <p><strong>let:</strong> \${edad} (puede reasignarse)</p>
  <p><strong>const:</strong> \${PI} (no puede cambiar)</p>
\`;

// let puede cambiar
edad = 26;
// PI = 3; // Error: no puede asignarse a const

resultado.innerHTML += \`<p>Edad cambiada a: \${edad}</p>\`;`
    }
  },
  {
    id: 'js-4',
    title: '4. Tipos de datos',
    description: 'JavaScript tiene tipos primitivos: string, number, boolean, null, undefined.',
    language: 'javascript',
    category: 'tipos',
    code: {
      html: `<h2>Tipos de Datos</h2>
<pre id="tipos"></pre>`,
      css: `body { font-family: Arial; padding: 20px; }
pre { background: #f5f5f5; padding: 15px; border-radius: 5px; }`,
      javascript: `const texto = 'Hola Mundo';
const numero = 42;
const decimal = 3.14;
const decision = true;
const nada = null;
let indefinido;

const tipos = document.getElementById('tipos');
tipos.textContent = \`
String: "\${texto}" (typeof: \${typeof texto})
Number: \${numero} (typeof: \${typeof numero})
Float: \${decimal} (typeof: \${typeof decimal})
Boolean: \${decision} (typeof: \${typeof decision})
Null: \${nada} (typeof: \${typeof nada})
Undefined: \${indefinido} (typeof: \${typeof indefinido})
\`;`
    }
  },
  {
    id: 'js-5',
    title: '5. Operadores',
    description: 'Operadores aritméticos, de comparación y lógicos para realizar cálculos y decisiones.',
    language: 'javascript',
    category: 'operadores',
    code: {
      html: `<h2>Operadores</h2>
<pre id="operadores"></pre>`,
      css: `body { font-family: Arial; padding: 20px; }
pre { background: #f5f5f5; padding: 15px; border-radius: 5px; }`,
      javascript: `let a = 10, b = 3;
const ops = document.getElementById('operadores');

ops.textContent = \`
// Aritméticos
\${a} + \${b} = \${a + b}
\${a} - \${b} = \${a - b}
\${a} * \${b} = \${a * b}
\${a} / \${b} = \${(a / b).toFixed(2)}
\${a} % \${b} = \${a % b} (módulo)

// Comparación
5 == '5' = \${5 == '5'} (igual, no estricto)
5 === '5' = \${5 === '5'} (estrictamente igual)
5 != '5' = \${5 != '5'}
5 !== '5' = \${5 !== '5'}

// Lógicos
true && false = \${true && false}
true || false = \${true || false}
!true = \${!true}
\`;`
    }
  },
  {
    id: 'js-6',
    title: '6. Consola del navegador',
    description: 'La consola (F12) es tu herramienta para depurar. Aprende console.log y más.',
    language: 'javascript',
    category: 'consola',
    code: {
      html: `<h2>Abre la consola (F12)</h2>
<p>Haz clic en el botón para ver diferentes métodos de consola</p>
<button onclick="mostrarConsola()">Ver en consola</button>`,
      css: `body { font-family: Arial; padding: 20px; }
button { padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; }`,
      javascript: `function mostrarConsola() {
  console.log('console.log - mensaje normal');
  console.warn('console.warn - advertencia');
  console.error('console.error - error');

  const persona = { nombre: 'Ana', edad: 28 };
  console.table([persona]);

  console.group('Grupo de mensajes');
  console.log('Mensaje 1');
  console.log('Mensaje 2');
  console.groupEnd();

  console.log('El valor de persona:', persona);
}`
    }
  },
  {
    id: 'js-7',
    title: '7. Condicionales (if, else)',
    description: 'Toma decisiones en tu código con if, else if y else.',
    language: 'javascript',
    category: 'condicionales',
    code: {
      html: `<h2>Condicionales</h2>
<label>Edad: <input type="number" id="edad" value="18"></label>
<button onclick="verificarEdad()">Verificar</button>
<pre id="resultado"></pre>`,
      css: `body { font-family: Arial; padding: 20px; }
button { padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; margin-left: 10px; }
pre { background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 15px; }`,
      javascript: `function verificarEdad() {
  const edad = parseInt(document.getElementById('edad').value);
  const resultado = document.getElementById('resultado');

  let mensaje;

  if (edad < 0) {
    mensaje = 'La edad no puede ser negativa';
  } else if (edad < 18) {
    mensaje = 'Eres menor de edad';
  } else if (edad < 65) {
    mensaje = 'Eres adulto';
  } else {
    mensaje = 'Eres anciano';
  }

  resultado.textContent = mensaje;
  console.log('Edad ingresada:', edad);
}`
    }
  },
  {
    id: 'js-8',
    title: '8. Funciones',
    description: 'Las funciones encapsulan código reutilizable. Aprende function y arrow functions.',
    language: 'javascript',
    category: 'funciones',
    code: {
      html: `<h2>Funciones</h2>
<pre id="resultado"></pre>`,
      css: `body { font-family: Arial; padding: 20px; }
pre { background: #f5f5f5; padding: 15px; border-radius: 5px; }`,
      javascript: `// Función tradicional
function sumar(a, b) {
  return a + b;
}

// Función flecha
const restar = (a, b) => a - b;

// Función con valor por defecto
const saludar = (nombre = 'Mundo') => \`Hola, \${nombre}!\`;

// Función que retorna función
const crearMultiplicador = (factor) => (num) => num * factor;

const resultado = document.getElementById('resultado');
resultado.textContent = \`
sumar(5, 3) = \${sumar(5, 3)}
restar(10, 4) = \${restar(10, 4)}
saludar() = \${saludar()}
saludar('Ana') = \${saludar('Ana')}

Doble de 7 = \${crearMultiplicador(2)(7)}
Triple de 5 = \${crearMultiplicador(3)(5)}
\`;`
    }
  },
  {
    id: 'js-9',
    title: '9. Eventos',
    description: 'Los eventos responden a acciones del usuario: clicks, mouse, teclado y más.',
    language: 'javascript',
    category: 'eventos',
    code: {
      html: `<h2>Eventos</h2>
<button id="btn1">Click me</button>
<input type="text" id="texto" placeholder="Escribe algo...">
<p id="tecla">Tecla presionada: -</p>
<div id="area" style="width: 200px; height: 100px; background: #3498db; margin-top: 10px; color: white; display: flex; align-items: center; justify-content: center;">Pasa el mouse</div>`,
      css: `body { font-family: Arial; padding: 20px; }
button { padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px; }
input { padding: 10px; border: 1px solid #ccc; border-radius: 5px; }
#area { transition: background 0.3s; }`,
      javascript: `const btn = document.getElementById('btn1');
btn.addEventListener('click', () => {
  alert('¡Hiciste clic!');
});

const input = document.getElementById('texto');
input.addEventListener('input', (e) => {
  console.log('Valor:', e.target.value);
});

const tecla = document.getElementById('tecla');
input.addEventListener('keypress', (e) => {
  tecla.textContent = 'Tecla presionada: ' + e.key;
});

const area = document.getElementById('area');
area.addEventListener('mouseenter', () => area.textContent = '¡Ratón dentro!');
area.addEventListener('mouseleave', () => area.textContent = '¡Ratón fuera!');`
    }
  },
  {
    id: 'js-10',
    title: '10. Selección de elementos del DOM',
    description: 'Selecciona elementos HTML con querySelector y getElementById.',
    language: 'javascript',
    category: 'seleccion',
    code: {
      html: `<h2 id="titulo">Título original</h2>
<p class="parrafo">Primer párrafo</p>
<p class="parrafo">Segundo párrafo</p>
<ul id="lista">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<button onclick="seleccionar()">Seleccionar</button>`,
      css: `body { font-family: Arial; padding: 20px; }
button { padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; }
.parrafo { color: #666; }`,
      javascript: `function seleccionar() {
  // getElementById
  const titulo = document.getElementById('titulo');
  titulo.textContent = '¡Título modificado!';
  titulo.style.color = '#e74c3c';

  // querySelector (primer match)
  const primero = document.querySelector('.parrafo');
  primero.style.fontWeight = 'bold';

  // querySelectorAll (todos los matches)
  const parrafos = document.querySelectorAll('.parrafo');
  parrafos.forEach((p, i) => {
    console.log('Párrafo ' + (i + 1) + ': ' + p.textContent);
  });

  // Selección dentro de otro elemento
  const lista = document.getElementById('lista');
  const items = lista.querySelectorAll('li');
  items.forEach(item => item.style.color = '#3498db');
}`
    }
  },
  {
    id: 'js-11',
    title: '11. Manipulación del DOM',
    description: 'Crea, modifica y elimina elementos HTML con JavaScript.',
    language: 'javascript',
    category: 'manipulacion',
    code: {
      html: `<div id="contenedor">Contenido original</div>
<button onclick="agregar()">Agregar elemento</button>
<button onclick="modificar()">Modificar</button>
<button onclick="eliminar()">Eliminar</button>`,
      css: `body { font-family: Arial; padding: 20px; }
button { padding: 10px 15px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px; }
#contenedor { padding: 20px; background: #f5f5f5; border-radius: 5px; margin: 20px 0; }
.nuevo { background: #e74c3c; color: white; padding: 10px; margin: 5px 0; border-radius: 3px; }`,
      javascript: `let contador = 0;

function agregar() {
  contador++;
  const contenedor = document.getElementById('contenedor');
  const nuevo = document.createElement('div');
  nuevo.className = 'nuevo';
  nuevo.textContent = 'Elemento ' + contador;
  contenedor.appendChild(nuevo);
}

function modificar() {
  const contenedor = document.getElementById('contenedor');
  contenedor.innerHTML = '<strong>¡Contenido modificado!</strong>';
  contenedor.style.background = '#d5f5e3';
  contenedor.style.color = '#27ae60';
}

function eliminar() {
  const contenedor = document.getElementById('contenedor');
  const ultimo = contenedor.lastElementChild;
  if (ultimo) {
    contenedor.removeChild(ultimo);
  } else {
    alert('No hay elementos para eliminar');
  }
}`
    }
  },
  {
    id: 'js-12',
    title: '12. Inputs y formularios',
    description: 'Lee y valida datos de formularios. Aprende a usar value y eventos de formulario.',
    language: 'javascript',
    category: 'formularios',
    code: {
      html: `<h2>Formulario</h2>
<form id="miForm">
  <label>Nombre: <input type="text" id="nombre" required></label><br><br>
  <label>Email: <input type="email" id="email" required></label><br><br>
  <select id="opcion">
    <option value="">Selecciona...</option>
    <option value="1">Opción 1</option>
    <option value="2">Opción 2</option>
  </select><br><br>
  <label><input type="checkbox" id="terminos"> Acepto los términos</label><br><br>
  <button type="submit">Enviar</button>
</form>
<pre id="resultado"></pre>`,
      css: `body { font-family: Arial; padding: 20px; }
input, select { padding: 8px; margin: 5px 0; }
button[type="submit"] { padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; }
pre { background: #f5f5f5; padding: 15px; border-radius: 5px; }`,
      javascript: `const form = document.getElementById('miForm');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const opcion = document.getElementById('opcion').value;
  const terminos = document.getElementById('terminos').checked;

  resultado.textContent = \`
Nombre: \${nombre}
Email: \${email}
Opción: \${opcion}
Términos aceptados: \${terminos}
  \`;
});

document.getElementById('email').addEventListener('input', function(e) {
  console.log('Email actual:', e.target.value);
});`
    }
  },
  {
    id: 'js-13',
    title: '13. Arrays',
    description: 'Los arrays almacenan listas de datos. Aprende a crearlos y acceder a sus elementos.',
    language: 'javascript',
    category: 'arrays',
    code: {
      html: `<h2>Arrays</h2>
<pre id="resultado"></pre>`,
      css: `body { font-family: Arial; padding: 20px; }
pre { background: #f5f5f5; padding: 15px; border-radius: 5px; }`,
      javascript: `// Crear arrays
const frutas = ['manzana', 'banana', 'cereza'];
const numeros = [1, 2, 3, 4, 5];
const mixto = [1, 'dos', true, null];

// Acceder a elementos (índice empieza en 0)
const primera = frutas[0];
const segunda = frutas[1];

// Propiedades y métodos
const largo = frutas.length;
const ultimo = frutas[frutas.length - 1];

// Modificar
frutas.push('uva'); // agregar al final
frutas.unshift('fresa'); // agregar al inicio
const eliminada = frutas.pop(); // quitar del final

const resultado = document.getElementById('resultado');
resultado.textContent = \`
Array original: \${frutas.join(', ')}
Primera fruta: \${primera}
Segunda fruta: \${segunda}
Largo: \${largo}
Última: \${ultimo}
Después de push: \${frutas.join(', ')}
Eliminado: \${eliminada}
\`;`
    }
  },
  {
    id: 'js-14',
    title: '14. Objetos',
    description: 'Los objetos almacenan pares clave-valor. Son fundamentales en JavaScript.',
    language: 'javascript',
    category: 'objetos',
    code: {
      html: `<h2>Objetos</h2>
<pre id="resultado"></pre>`,
      css: `body { font-family: Arial; padding: 20px; }
pre { background: #f5f5f5; padding: 15px; border-radius: 5px; }`,
      javascript: `// Crear objeto
const persona = {
  nombre: 'Carlos',
  edad: 28,
  ciudad: 'Madrid',
  saludar: function() {
    return 'Hola, soy ' + this.nombre;
  }
};

// Acceso a propiedades
const nombre = persona.nombre;
const edad = persona['edad'];

// Modificar
persona.edad = 29;
persona.trabajo = 'Programador';

// Eliminar
delete persona.ciudad;

const resultado = document.getElementById('resultado');
resultado.textContent = \`
Persona:
  Nombre: \${persona.nombre}
  Edad: \${persona.edad}
  Trabajo: \${persona.trabajo}
  Saludar: \${persona.saludar()}
\`;
console.log('Objeto completo:', persona);`
    }
  },
  {
    id: 'js-15',
    title: '15. Bucles (for, while)',
    description: 'Repite código con for, for...of, for...in y while.',
    language: 'javascript',
    category: 'bucles',
    code: {
      html: `<h2>Bucles</h2>
<pre id="resultado"></pre>`,
      css: `body { font-family: Arial; padding: 20px; }
pre { background: #f5f5f5; padding: 15px; border-radius: 5px; }`,
      javascript: `const frutas = ['manzana', 'banana', 'cereza'];
const persona = { nombre: 'Carlos', edad: 28, ciudad: 'Madrid' };
let resultado = '=== for ===\\n';

for (let i = 0; i < frutas.length; i++) {
  resultado += i + ': ' + frutas[i] + '\\n';
}

resultado += '\\n=== for...of ===\\n';
for (const fruta of frutas) {
  resultado += fruta + '\\n';
}

resultado += '\\n=== for...in ===\\n';
for (const clave in persona) {
  resultado += clave + ': ' + persona[clave] + '\\n';
}

resultado += '\\n=== while ===\\n';
let counter = 0;
while (counter < 3) {
  resultado += 'Contador: ' + counter + '\\n';
  counter++;
}

document.getElementById('resultado').textContent = resultado;`
    }
  },
  {
    id: 'js-16',
    title: '16. Métodos básicos de arrays',
    description: 'map, filter, reduce, find y forEach para transformar datos.',
    language: 'javascript',
    category: 'metodos-arrays',
    code: {
      html: `<h2>Métodos de Arrays</h2>
<pre id="resultado"></pre>`,
      css: `body { font-family: Arial; padding: 20px; }
pre { background: #f5f5f5; padding: 15px; border-radius: 5px; }`,
      javascript: `const numeros = [1, 2, 3, 4, 5, 6];
const personas = [
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Carlos', edad: 17 },
  { nombre: 'María', edad: 30 }
];

let resultado = 'Original: ' + numeros.join(', ') + '\\n\\n';

// map - transformar
const doblados = numeros.map(n => n * 2);
resultado += 'map (doblar): ' + doblados.join(', ') + '\\n';

// filter - filtrar
const pares = numeros.filter(n => n % 2 === 0);
resultado += 'filter (pares): ' + pares.join(', ') + '\\n';

// find - encontrar primero
const mayorA20 = personas.find(p => p.edad > 20);
resultado += 'find (primero > 20): ' + mayorA20.nombre + '\\n';

// reduce - acumular
const suma = numeros.reduce((acc, n) => acc + n, 0);
resultado += 'reduce (suma): ' + suma + '\\n';

// forEach - iterar
resultado += 'forEach: ';
numeros.forEach(n => resultado += n + ' ');
resultado += '\\n';

// chaining
const resultado2 = personas
  .filter(p => p.edad >= 18)
  .map(p => p.nombre);
resultado += '\\nMayores de edad: ' + resultado2.join(', ');

document.getElementById('resultado').textContent = resultado;`
    }
  },
  {
    id: 'js-17',
    title: '17. Temporizadores (setTimeout, setInterval)',
    description: 'Ejecuta código después de un tiempo con setTimeout y setInterval.',
    language: 'javascript',
    category: 'temporizadores',
    code: {
      html: `<h2>Temporizadores</h2>
<button onclick="iniciarTimeout()">setTimeout (2s)</button>
<button onclick="iniciarInterval()">setInterval (iniciar)</button>
<button onclick="detenerInterval()">Detener</button>
<pre id="resultado">Estado: esperando...</pre>`,
      css: `body { font-family: Arial; padding: 20px; }
button { padding: 10px 15px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px; }
pre { background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 15px; }`,
      javascript: `let intervalId = null;
let counter = 0;

function iniciarTimeout() {
  document.getElementById('resultado').textContent = 'Esperando 2 segundos...';
  setTimeout(() => {
    document.getElementById('resultado').textContent = '¡Tiempo completado!';
  }, 2000);
}

function iniciarInterval() {
  if (intervalId) return;
  counter = 0;
  document.getElementById('resultado').textContent = 'Intervalo iniciado';
  intervalId = setInterval(() => {
    counter++;
    document.getElementById('resultado').textContent = 'Contador: ' + counter;
  }, 1000);
}

function detenerInterval() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    document.getElementById('resultado').textContent = 'Intervalo detenido. Contador final: ' + counter;
  }
}`
    }
  },
  {
    id: 'js-18',
    title: '18. Introducción a fetch (consumo de APIs)',
    description: 'fetch permite hacer peticiones HTTP a APIs y servicios web.',
    language: 'javascript',
    category: 'fetch',
    code: {
      html: `<h2>Fetch API</h2>
<button onclick="obtenerUsuario()">Obtener Usuario</button>
<button onclick="obtenerPosts()">Obtener Posts</button>
<pre id="resultado">clic para cargar datos...</pre>`,
      css: `body { font-family: Arial; padding: 20px; }
button { padding: 10px 15px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px; }
pre { background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 15px; max-height: 300px; overflow-y: auto; }`,
      javascript: `const resultado = document.getElementById('resultado');

async function obtenerUsuario() {
  resultado.textContent = 'Cargando...';
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    resultado.textContent = \`Usuario:
  ID: \${user.id}
  Nombre: \${user.name}
  Email: \${user.email}
  Ciudad: \${user.address.city}\`;
  } catch (error) {
    resultado.textContent = 'Error: ' + error.message;
  }
}

async function obtenerPosts() {
  resultado.textContent = 'Cargando posts...';
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    const posts = await response.json();
    resultado.textContent = 'Posts:\\n\\n';
    posts.forEach(post => {
      resultado.textContent += 'Título: ' + post.title + '\\n';
    });
  } catch (error) {
    resultado.textContent = 'Error: ' + error.message;
  }
}`
    }
  },
  {
    id: 'js-19',
    title: '19. Manejo de errores básico',
    description: 'Usa try...catch para manejar errores y evitar que tu código se rompa.',
    language: 'javascript',
    category: 'errores',
    code: {
      html: `<h2>Manejo de Errores</h2>
<button onclick="testError()">Probar try...catch</button>
<button onclick="testFetchError()">Probar error de fetch</button>
<pre id="resultado"></pre>`,
      css: `body { font-family: Arial; padding: 20px; }
button { padding: 10px 15px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px; }
pre { background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 15px; }
.error { color: #e74c3c; }
.exito { color: #27ae60; }`,
      javascript: `const resultado = document.getElementById('resultado');

function testError() {
  try {
    const numero = parseInt('no es un número');
    if (isNaN(numero)) {
      throw new Error('No se pudo convertir a número');
    }
    resultado.innerHTML = '<span class="exito">Número válido: ' + numero + '</span>';
  } catch (error) {
    resultado.innerHTML = '<span class="error">Capturado: ' + error.message + '</span>';
  } finally {
    console.log('Esto siempre se ejecuta');
  }
}

async function testFetchError() {
  try {
    resultado.textContent = 'Intentando fetch...';
    const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
    if (!response.ok) {
      throw new Error('Error HTTP: ' + response.status);
    }
    const data = await response.json();
    resultado.textContent = JSON.stringify(data);
  } catch (error) {
    resultado.innerHTML = '<span class="error">Error capturado: ' + error.message + '</span>';
  }
}`
    }
  },
  {
    id: 'js-20',
    title: '20. Buenas prácticas en JavaScript',
    description: 'Convenciones y patrones para escribir código limpio y mantenible.',
    language: 'javascript',
    category: 'buenas-practicas',
    code: {
      html: `<h2>Buenas Prácticas</h2>
<pre id="resultado"></pre>`,
      css: `body { font-family: Arial; padding: 20px; }
pre { background: #f5f5f5; padding: 15px; border-radius: 5px; }`,
      javascript: `// 1. Usa const por defecto, let solo cuando necesites reasignar
const PI = 3.14159;
let contador = 0;

// 2. Nombres descriptivos
const nombreUsuario = 'María';
const esMayorDeEdad = true;

// 3. Funciones con nombres claros
function calcularAreaCirculo(radio) {
  return PI * radio * radio;
}

// 4. Evita el código spaguetti: usa funciones
function procesarFormulario() {
  const datos = obtenerDatos();
  const validados = validarDatos(datos);
  guardarDatos(validados);
}

function obtenerDatos() { return { nombre: 'Ejemplo' }; }
function validarDatos(datos) { return datos; }
function guardarDatos(datos) { console.log('Guardado:', datos); }

// 5. Usa === en vez de ==
if (contador === 0) { console.log('Igualdad estricta'); }

// 6. Prepara tu código para el futuro
// Usa 'es6' module pattern
const app = (function() {
  let privada = 'solo accesible dentro';

  return {
    publica: function() { return privada; }
  };
})();

const resultado = document.getElementById('resultado');
resultado.textContent = \`
Buenas prácticas aplicadas:

1. const/let: PI es const, contador es let
2. Nombres: nombreUsuario, esMayorDeEdad
3. Funciones con nombres claros
4. Código organizado en funciones
5. === en vez de ==
6. Module pattern para encapsulación

app.publica() = \${app.publica()}
calcularAreaCirculo(5) = \${calcularAreaCirculo(5).toFixed(2)}
\`;`
    }
  },

  // Git - Fundamentos
  {
    id: 'git-1',
    title: '1. Crear un repositorio',
    description: 'Aprende a inicializar un nuevo repositorio Git con git init. Este comando crea un nuevo directorio .git que almacena todo el historial del proyecto.',
    language: 'git',
    category: 'fundamentos',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Crear un nuevo repositorio en el directorio actual
git init

# Resultado esperado:
# Initialized empty Git repository in /ruta/del/proyecto/.git/

# El comando crea una carpeta oculta .git que contiene
# toda la información del control de versiones`
    }
  },
  {
    id: 'git-2',
    title: '2. Clonar un repositorio',
    description: 'Copia un repositorio existente desde GitHub o cualquier servidor Git. Incluye todo el historial y las ramas.',
    language: 'git',
    category: 'fundamentos',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Clonar un repositorio completo
git clone https://github.com/usuario/repositorio.git

# Clonar en una carpeta específica
git clone https://github.com/usuario/repositorio.git mi-carpeta

# Clonar solo la última versión (más rápido)
git clone --depth 1 https://github.com/usuario/repositorio.git`
    }
  },
  {
    id: 'git-3',
    title: '3. Ver el estado',
    description: 'El comando git status muestra el estado actual del repositorio: archivos modificados, staged, o sin trackear.',
    language: 'git',
    category: 'fundamentos',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Ver estado del repositorio
git status

# Estados posibles:
# - Changes not staged: archivo modificado pero no en staging
# - Changes to be committed: archivo en staging listo para commit
# - Untracked files: archivos nuevos que Git no está siguiendo
# - Nothing to commit: todo está actualizado`
    }
  },
  {
    id: 'git-4',
    title: '4. Agregar archivos',
    description: ' git add prepara archivos para el commit. Puedes agregar archivos individuales o todos los cambios de una vez.',
    language: 'git',
    category: 'fundamentos',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Agregar un archivo específico
git add archivo.txt

# Agregar todos los archivos modificados y nuevos
git add .

# Agregar todos los archivos con extensión específica
git add *.js

# Agregar todos los cambios incluyendo eliminaciones
git add -A

# Agregar interactivamente (preguntando por cada archivo)
git add -i`
    }
  },
  {
    id: 'git-5',
    title: '5. Guardar cambios (commit)',
    description: 'El commit guarda los cambios staged en el historial del repositorio. Cada commit tiene un hash único que lo identifica.',
    language: 'git',
    category: 'fundamentos',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Crear un commit con mensaje descriptivo
git commit -m "Agregar formulario de contacto"

# Crear commit incluyendo archivos trackeados automáticamente
git commit -am "Fix: corregir bug en login"

# Nota: -am solo funciona con archivos ya trackeados

# Amarrar commit a una fecha específica
GIT_COMMITTER_DATE="2024-01-01" git commit -m "Commit retroactivo" --date="2024-01-01"`
    }
  },
  {
    id: 'git-6',
    title: '6. Configurar usuario',
    description: 'Configura tu identidad de usuario para los commits. Esta configuración es global para todos los repositorios.',
    language: 'git',
    category: 'fundamentos',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Configurar nombre de usuario (global)
git config --global user.name "Tu Nombre"

# Configurar email (global)
git config --global user.email "tu@email.com"

# Ver configuración actual
git config --list

# Configurar solo para el repositorio actual (local)
git config user.name "Tu Nombre"
git config user.email "tu@email.com"

# Configurar editor padrão
git config --global core.editor vim`
    }
  },

  // Git - Trabajo Diario
  {
    id: 'git-7',
    title: '7. Ver historial',
    description: 'git log muestra el historial de commits. Puedes filtrar, formatear y buscar en el historial.',
    language: 'git',
    category: 'trabajo-diario',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Ver historial completo
git log

# Ver en una línea por commit
git log --oneline

# Ver últimos 5 commits
git log -5

# Ver historial con gráficos de ramas
git log --graph --oneline --all

# Buscar commits por mensaje
git log --grep="fix:"

# Ver commits de un archivo específico
git log -- mi-archivo.js`
    }
  },
  {
    id: 'git-8',
    title: '8. Ver cambios',
    description: 'git diff muestra las diferencias entre archivos modificados, commits, ramas o el working directory.',
    language: 'git',
    category: 'trabajo-diario',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Ver cambios no staged (working directory vs staging)
git diff

# Ver cambios staged (staging vs último commit)
git diff --staged

# Ver cambios de un archivo específico
git diff archivo.txt

# Comparar dos ramas
git diff rama1..rama2

# Comparar commit actual con anterior
git diff HEAD~1

# Ver estadísticas de cambios
git diff --stat`
    }
  },
  {
    id: 'git-9',
    title: '9. Descargar cambios (pull)',
    description: 'git pull descarga cambios del remoto y los integra con tu rama actual. Es la combinación de fetch + merge.',
    language: 'git',
    category: 'trabajo-diario',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Descargar y fusionar cambios de la rama actual
git pull

# Descargar de una rama específica
git pull origin nombre-rama

# Rebase en lugar de merge (historial más limpio)
git pull --rebase

# Especificar rama upstream
git pull origin main

# Solo descargar sin fusionar
git fetch`
    }
  },
  {
    id: 'git-10',
    title: '10. Subir cambios (push)',
    description: 'git push sube tus commits locales al repositorio remoto. Necesitas tener permisos de escritura.',
    language: 'git',
    category: 'trabajo-diario',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Subir cambios al remoto
git push

# Especificar remoto y rama
git push origin main

# Primera vez: establecer upstream
git push -u origin nombre-rama

# Forzar push (¡cuidado!, sobrescribe el remoto)
git push --force

# Push todas las ramas
git push --all

# Eliminar rama del remoto
git push origin --delete nombre-rama`
    }
  },
  {
    id: 'git-11',
    title: '11. Conectar a GitHub',
    description: 'Configura el remote para conectar tu repositorio local con GitHub u otro servidor Git.',
    language: 'git',
    category: 'trabajo-diario',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Agregar remoto (origin es el nombre convencional)
git remote add origin https://github.com/usuario/repo.git

# Ver remotos configurados
git remote -v

# Cambiar URL del remoto
git remote set-url origin nueva-url

# Renombrar remoto
git remote rename origin upstream

# Eliminar remoto
git remote remove origin`
    }
  },

  // Git - Ramas
  {
    id: 'git-12',
    title: '12. Crear ramas',
    description: 'Las ramas permiten trabajar en características separadas sin afectar el código principal.',
    language: 'git',
    category: 'ramas',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Crear una nueva rama
git branch nueva-rama

# Listar todas las ramas (local)
git branch

# Listar ramas con información
git branch -v

# Listar ramas remotas
git branch -r

# Crear y cambiar en un solo paso
git checkout -b nueva-rama

# Crear rama desde un commit específico
git branch nueva-rama HEAD~3`
    }
  },
  {
    id: 'git-13',
    title: '13. Cambiar de rama',
    description: 'git checkout y git switch permiten moverse entre ramas. El moderno git switch es más intuitivo.',
    language: 'git',
    category: 'ramas',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Cambiar a rama existente (forma clásica)
git checkout nombre-rama

# Cambiar a rama existente (forma moderna)
git switch nombre-rama

# Crear y cambiar en una sola operación
git checkout -b nueva-rama
git switch -c nueva-rama

# Volver a la rama anterior
git switch -

# Cambiar a commit específico (detached HEAD)
git checkout abc1234`
    }
  },
  {
    id: 'git-14',
    title: '14. Unir ramas (merge)',
    description: 'git merge combina el historial de dos ramas. Puede crear un commit de merge o hacer fast-forward.',
    language: 'git',
    category: 'ramas',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Fusionar rama en la rama actual
git checkout main
git merge nueva-rama

# Fast-forward (sin commit de merge)
git merge nueva-rama

# Merge con mensaje personalizado
git merge nueva-rama -m "Merge feature/login"

# Abortar un merge en progreso
git merge --abort

# Ver ramas que han sido fusionadas
git branch --merged`
    }
  },
  {
    id: 'git-15',
    title: '15. Eliminar ramas',
    description: 'Elimina ramas que ya no necesitas. La rama debe estar fusionada o usar --force.',
    language: 'git',
    category: 'ramas',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Eliminar rama local (si está fusionada)
git branch -d nombre-rama

# Forzar eliminación (aunque no esté fusionada)
git branch -D nombre-rama

# Eliminar rama remota
git push origin --delete nombre-rama

# Ver ramas no fusionadas
git branch --no-merged`
    }
  },

  // Git - Deshacer Errores
  {
    id: 'git-16',
    title: '16. Quitar del staging',
    description: 'Si agregaste archivos por error al staging, puedes quitarlos sin perder los cambios.',
    language: 'git',
    category: 'deshacer',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Quitar un archivo del staging
git restore --staged archivo.txt

# Quitar todos los archivos del staging
git restore --staged .

# Forma antigua ( aún funciona)
git reset HEAD archivo.txt

# Ver estado después de quitar del staging
git status`
    }
  },
  {
    id: 'git-17',
    title: '17. Deshacer cambios',
    description: 'Restaura un archivo a su estado del último commit. CUIDADO: perderás los cambios no guardados.',
    language: 'git',
    category: 'deshacer',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Deshacer cambios en un archivo
git restore archivo.txt

# Deshacer todos los cambios
git restore .

# Forma antigua
git checkout -- archivo.txt

# Deshacer cambios en archivos staged
git restore --staged archivo.txt
git restore archivo.txt

# Ver qué archivos cambiarán
git restore --diff`
    }
  },
  {
    id: 'git-18',
    title: '18. Volver a commit anterior',
    description: 'git reset mueve la cabeza del repositorio hacia un commit anterior. Hay tres modos: soft, mixed, hard.',
    language: 'git',
    category: 'deshacer',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Soft: mantener cambios en staging
git reset --soft HEAD~1

# Mixed (default): mantener cambios en working directory
git reset HEAD~1

# Hard: BORRAR todos los cambios (¡irreversible!)
git reset --hard HEAD~1

# Volver a un commit específico
git reset --hard abc1234

# Ver historial después del reset
git log --oneline`
    }
  },
  {
    id: 'git-19',
    title: '19. Revertir un commit',
    description: 'git revert crea un nuevo commit que deshace los cambios de un commit anterior. Es seguro para trabajo compartido.',
    language: 'git',
    category: 'deshacer',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Revertir el último commit
git revert HEAD

# Revertir un commit específico
git revert abc1234

# Revertir sin crear commit automáticamente
git revert --no-commit abc1234

# Ver qué revertirá antes de hacerlo
git revert --no-commit HEAD~3..HEAD

# Después de preparar todos los revert, commit
git commit -m "Revert commits X, Y, Z"`
    }
  },

  // Git - GitHub
  {
    id: 'git-20',
    title: '20. Primer push a GitHub',
    description: 'Pasos completos para subir tu proyecto local a GitHub por primera vez.',
    language: 'git',
    category: 'github',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# 1. Crear repositorio en GitHub (web)

# 2. Inicializar git en tu proyecto
git init

# 3. Agregar archivos
git add .

# 4. Hacer primer commit
git commit -m "Primer commit"

# 5. Conectar con GitHub
git remote add origin https://github.com/usuario/repo.git

# 6. Subir (establecer upstream)
git push -u origin main`
    }
  },
  {
    id: 'git-21',
    title: '21. Trabajar con ramas remotas',
    description: 'Aprende a descargar, crear y subir ramas que existen en el repositorio remoto.',
    language: 'git',
    category: 'github',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Descargar una rama remota
git fetch origin
git checkout nombre-rama

# Traer cambios de una rama específica
git pull origin nombre-rama

# Crear rama local basada en remota
git checkout -b nueva-rama origin/nueva-rama

# Subir nueva rama al remoto
git push origin nombre-rama

# Ver todas las ramas (local y remota)
git branch -a`
    }
  },
  {
    id: 'git-22',
    title: '22. Git pull vs git fetch',
    description: 'Entiende la diferencia entre estos dos comandos y cuándo usar cada uno.',
    language: 'git',
    category: 'github',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# git fetch: solo descarga referencias, NO fusiona
git fetch origin
# Ahora puedes ver los cambios sin afectartu código

# git pull: descarga Y fusiona automáticamente
git pull origin main
# Equivalente a: git fetch + git merge

# Fetch + merge manual (más control)
git fetch origin
git log --oneline origin/main
git diff main..origin/main
git merge origin/main`
    }
  },
  {
    id: 'git-23',
    title: '23. Alias útiles',
    description: 'Crea atajos para los comandos más usados y optimiza tu flujo de trabajo.',
    language: 'git',
    category: 'github',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Alias para comando corto
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status
git config --global alias.cm "commit -m"

# Alias para ver historial simplificado
git config --global alias.lg "log --oneline --graph --all"

# Usar alias
git co main
git st
git cm "Fix bug"
git lg

# Alias temporales (sin guardar)
git log --oneline -10
git stash list`
    }
  },
  {
    id: 'git-24',
    title: '24. Stash: guardar cambios temporalmente',
    description: 'Guarda cambios no comprometidos temporalmente para cambiar de rama o aplicar otros cambios.',
    language: 'git',
    category: 'github',
    code: {
      html: '',
      css: '',
      javascript: '',
      git: `# Guardar cambios temporalmente
git stash

# Guardar con mensaje descriptivo
git stash push -m "Trabajo en progreso"

# Ver lista de stash
git stash list

# Aplicar último stash (mantener en lista)
git stash apply

# Aplicar último stash (eliminar de lista)
git stash pop

# Aplicar stash específico
git stash apply stash@{2}

# Eliminar stash
git stash drop stash@{0}

# Limpiar todos los stash
git stash clear`
    }
  }
];

// Node.js - 18 lecciones
const nodejsLessons: Lesson[] = [
  // Fundamentos
  {
    id: 'nodejs-1',
    title: '1. ¿Qué es Node.js?',
    description: 'Node.js es un entorno de ejecución de JavaScript construido sobre el motor V8 de Chrome. Es event-driven y non-blocking I/O, ideal para aplicaciones en tiempo real.',
    language: 'nodejs',
    category: 'fundamentos',
    code: {
      html: '',
      css: '',
      javascript: `// Node.js usa el motor V8 igual que el navegador
// Pero NO tiene las mismas APIs del navegador

console.log('JavaScript en Node.js');
console.log(process.version);
console.log('Plataforma:', process.platform);`,
      git: ''
    }
  },
  {
    id: 'nodejs-2',
    title: '2. Mi primer servidor HTTP',
    description: 'Crea un servidor web básico con el módulo http nativo de Node.js. Cada request triggering un callback con request y response.',
    language: 'nodejs',
    category: 'fundamentos',
    code: {
      html: '',
      css: '',
      javascript: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('¡Hola desde Node.js!');
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});`,
      git: ''
    }
  },
  // Modelo de Asincronía
  {
    id: 'nodejs-3',
    title: '3. El Event Loop',
    description: 'El Event Loop es el corazón de Node.js. Permite manejar miles de conexiones concurrentes sin bloquear. JS es single-thread pero las operaciones I/O son asíncronas.',
    language: 'nodejs',
    category: 'flujos',
    code: {
      html: '',
      css: '',
      javascript: `// Node.js procesa operaciones en este orden:
// 1. Call Stack (synchronous code)
// 2. Node APIs (setTimeout, fs, etc.)
// 3. Callback Queue (cuando las APIs terminan)

console.log('1. Synchronous'); // se ejecuta primero

setTimeout(() => {
  console.log('3. setTimeout callback'); // se ejecuta después
}, 0);

console.log('2. Synchronous'); // se ejecuta segundo

// Output:
// 1. Synchronous
// 2. Synchronous
// 3. setTimeout callback`,
      git: ''
    }
  },
  {
    id: 'nodejs-4',
    title: '4. Callbacks',
    description: 'Un callback es una función que se pasa como argumento y se ejecuta después de que una operación asíncrona termina. Es el patrón fundamental de Node.js.',
    language: 'nodejs',
    category: 'async',
    code: {
      html: '',
      css: '',
      javascript: `// Callback: función que se pasa como argumento
function procesar(datos, callback) {
  setTimeout(() => {
    const resultado = datos.toUpperCase();
    callback(null, resultado);
  }, 1000);
}

procesar('hola mundo', (err, resultado) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Resultado:', resultado); // HOLA MUNDO
  }
});

console.log('Esperando callback...');`,
      git: ''
    }
  },
  {
    id: 'nodejs-5',
    title: '5. Promesas (Promises)',
    description: 'Las Promesas son una mejora sobre los callbacks. Permiten encadenar operaciones con .then() y manejar errores con .catch().',
    language: 'nodejs',
    category: 'async',
    code: {
      html: '',
      css: '',
      javascript: `// Promesa: representa un valor futuro
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = true;
    if (exito) {
      resolve('¡Datos cargados!');
    } else {
      reject('Error al cargar');
    }
  }, 1000);
});

// Encadenar .then() y .catch()
promesa
  .then((datos) => {
    console.log('Éxito:', datos);
    return datos.toUpperCase();
  })
  .then((mayusculas) => {
    console.log('Transformado:', mayusculas);
  })
  .catch((error) => {
    console.error('Falló:', error);
  });

console.log('Promesa creada, esperando...');`,
      git: ''
    }
  },
  {
    id: 'nodejs-6',
    title: '6. Async/Await',
    description: 'Async/await es la sintaxis moderna para trabajar con Promesas. Hace el código asíncrono parecer síncrono y es más fácil de leer.',
    language: 'nodejs',
    category: 'async',
    code: {
      html: '',
      css: '',
      javascript: `// Función asíncrona: devuelve una Promesa
async function obtenerDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, nombre: 'Carlos' });
    }, 1000);
  });
}

// await solo funciona dentro de funciones async
async function main() {
  console.log('Cargando...');

  const datos = await obtenerDatos();
  console.log('Datos recibidos:', datos);

  const nombre = datos.nombre.toUpperCase();
  console.log('Nombre:', nombre);
}

main().then(() => {
  console.log('¡Completado!');
});`,
      git: ''
    }
  },
  // Módulos
  {
    id: 'nodejs-7',
    title: '7. CommonJS: require y module.exports',
    description: 'Node.js usa CommonJS para modularizar código. require() importa y module.exports exporta. Cada archivo es un módulo independiente.',
    language: 'nodejs',
    category: 'modulos',
    code: {
      html: '',
      css: '',
      javascript: `// --- math.js ---
// module.exports exporta lo que el módulo expone
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;

module.exports = { sumar, restar };

// --- main.js ---
// require() importa el módulo
const math = require('./math');

console.log('Suma:', math.sumar(5, 3));      // 8
console.log('Resta:', math.restar(10, 4)); // 6

// También puedes desestructurar:
const { sumar } = require('./math');`,
      git: ''
    }
  },
  {
    id: 'nodejs-8',
    title: '8. npm y package.json',
    description: 'npm es el gestor de paquetes de Node.js. package.json define las dependencias y scripts de tu proyecto.',
    language: 'nodejs',
    category: 'modulos',
    code: {
      html: '',
      css: '',
      javascript: `// package.json define el proyecto
// {
//   "name": "mi-proyecto",
//   "version": "1.0.0",
//   "scripts": {
//     "start": "node index.js",
//     "dev": "nodemon index.js"
//   },
//   "dependencies": {
//     "express": "^4.18.0"
//   }
// }

// Comandos comunes:
// npm init -y        → crear package.json
// npm install        → instalar dependencias
// npm install express → instalar un paquete
// npm run start      → ejecutar script "start"

// node_modules/ contiene los paquetes instalados`,
      git: ''
    }
  },
  {
    id: 'nodejs-9',
    title: '9. Módulo fs: leer archivos',
    description: 'El módulo fs (file system) permite leer y escribir archivos. Tiene versiones síncronas y asíncronas (con callbacks o Promises).',
    language: 'nodejs',
    category: 'archivos',
    code: {
      html: '',
      css: '',
      javascript: `const fs = require('fs').promises;

async function leerArchivo() {
  try {
    // Leer archivo de forma asíncrona
    const contenido = await fs.readFile('datos.txt', 'utf8');
    console.log('Contenido:', contenido);

    // Ver información del archivo
    const stats = await fs.stat('datos.txt');
    console.log('Tamaño:', stats.size, 'bytes');
    console.log('Creado:', stats.birthtime);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

leerArchivo();

// Versión síncrona (bloquea):
// const contenido = fs.readFileSync('datos.txt', 'utf8');`,
      git: ''
    }
  },
  {
    id: 'nodejs-10',
    title: '10. Módulo fs: escribir archivos',
    description: 'El módulo fs también permite escribir archivos. Puedes crear, sobreescribir o añadir contenido.',
    language: 'nodejs',
    category: 'archivos',
    code: {
      html: '',
      css: '',
      javascript: `const fs = require('fs').promises;

async function escribirArchivo() {
  const datos = {
    nombre: 'Ana',
    edad: 28,
    ciudad: 'Madrid'
  };

  // Escribir como texto
  await fs.writeFile('usuario.txt', JSON.stringify(datos));
  console.log('Archivo escrito');

  // Leer y parsear JSON
  const contenido = await fs.readFile('usuario.txt', 'utf8');
  const usuario = JSON.parse(contenido);
  console.log('Usuario:', usuario.nombre);

  // Añadir al archivo
  await fs.appendFile('log.txt', 'Nuevo registro\\n');
  console.log('Añadido al log');
}

escribirArchivo().catch(console.error);`,
      git: ''
    }
  },
  {
    id: 'nodejs-11',
    title: '11. Módulo path',
    description: 'El módulo path ayuda a trabajar con rutas de archivos de forma portable. Resuelve problemas de compatibilidad entre sistemas operativos.',
    language: 'nodejs',
    category: 'archivos',
    code: {
      html: '',
      css: '',
      javascript: `const path = require('path');

// Unir segmentos de ruta
const ruta = path.join('carpeta', 'subcarpeta', 'archivo.txt');
console.log('Ruta completa:', ruta);
// Linux/Mac: carpeta/subcarpeta/archivo.txt
// Windows: carpeta\\subcarpeta\\archivo.txt

// Obtener información
console.log('Directorio:', path.dirname(ruta));
console.log('Nombre:', path.basename(ruta));
console.log('Extensión:', path.extname(ruta));

// Resolver a ruta absoluta
const abs = path.resolve('archivo.txt');
console.log('Absoluta:', abs);

// Unir con la raíz del proyecto
const proyecto = path.resolve(__dirname, '..');
console.log('Raíz proyecto:', proyecto);`,
      git: ''
    }
  },
  // Conceptos Avanzados
  {
    id: 'nodejs-12',
    title: '12. Console y process',
    description: 'Console es similar al navegador. process proporciona información sobre el proceso actual: versión de Node, plataforma, variables de entorno.',
    language: 'nodejs',
    category: 'fundamentos',
    code: {
      html: '',
      css: '',
      javascript: `// process: información del proceso actual
console.log('Versión Node:', process.version);
console.log('Plataforma:', process.platform);
console.log('Arquitectura:', process.arch);
console.log('Memoria:', process.memoryUsage());
console.log('Uptime:', process.uptime(), 'segundos');

// Argumentos de línea de comando
// node app.js arg1 arg2
console.log('Argumentos:', process.argv);

// Variables de entorno
// NOMBRE=Juan node app.js
console.log('NOMBRE:', process.env.NOMBRE || 'no definido');

// Exit codes
// process.exit(0); // éxito
// process.exit(1); // error`,
      git: ''
    }
  },
  {
    id: 'nodejs-13',
    title: '13. Streams',
    description: 'Los Streams permiten procesar datos pieza por pieza en lugar de cargar todo en memoria. Ideal para archivos grandes o datos continuos.',
    language: 'nodejs',
    category: 'archivos',
    code: {
      html: '',
      css: '',
      javascript: `const fs = require('fs');
const readable = fs.createReadStream('archivo-grande.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024 // 64KB por chunk
});

let contador = 0;

readable.on('data', (chunk) => {
  console.log('Chunk recibido:', chunk.length, 'bytes');
  contador++;
});

readable.on('end', () => {
  console.log('Total chunks:', contador);
});

readable.on('error', (err) => {
  console.error('Error:', err.message);
});

// Pipes: encadenar streams
// readable.pipe(transform).pipe(writable);`,
      git: ''
    }
  },
  {
    id: 'nodejs-14',
    title: '14. Event Emitter',
    description: 'EventEmitter es el patrón pub/sub de Node.js. Permite emitir y escuchar eventos, desacoplando partes del código.',
    language: 'nodejs',
    category: 'eventos',
    code: {
      html: '',
      css: '',
      javascript: `const EventEmitter = require('events');

// Crear un emisor
const emisor = new EventEmitter();

// Escuchar eventos
emisor.on('saludo', (nombre) => {
  console.log('¡Hola,', nombre, '!');
});

emisor.on('despedida', function(nombre) {
  console.log('Chao,', nombre);
});

// Emitir eventos
emisor.emit('saludo', 'Ana');
emisor.emit('despedida', 'Carlos');

// Una sola vez
emisor.once('una-sola-vez', () => {
  console.log('Esto se ejecuta solo una vez');
});

emisor.emit('una-sola-vez');
emisor.emit('una-sola-vez'); // no hace nada`,
      git: ''
    }
  },
  {
    id: 'nodejs-15',
    title: '15. Manejo de errores',
    description: 'Node.js usa errores de forma diferente. Los callbacks usan "error-first" (err como primer argumento). Las Promesas usan .catch().',
    language: 'nodejs',
    category: 'flujos',
    code: {
      html: '',
      css: '',
      javascript: `// Error-first callbacks (estilo Node.js)
function leerConError(callback) {
  setTimeout(() => {
    const error = null; // o un objeto Error
    const datos = 'contenido';

    if (error) {
      callback(error, null);
    } else {
      callback(null, datos);
    }
  }, 1000);
}

// try/catch para Promesas/async-await
async function main() {
  try {
    const datos = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Falló algo'));
      }, 1000);
    });
    console.log(datos);
  } catch (error) {
    console.error('Capturado:', error.message);
  }
}

main();`,
      git: ''
    }
  },
  {
    id: 'nodejs-16',
    title: '16. Buffers',
    description: 'Los Buffers representan datos binarios crudos. Son útiles para manejar datos que no son texto (imágenes, archivos, protocolos de red).',
    language: 'nodejs',
    category: 'archivos',
    code: {
      html: '',
      css: '',
      javascript: `// Buffer: datos binarios
const buf = Buffer.from('Hola');
console.log('Buffer:', buf);
console.log('Como texto:', buf.toString());
console.log('Longitud:', buf.length);

// Crear buffer de bytes específicos
const buf2 = Buffer.from([72, 111, 108, 97]);
console.log('Como texto:', buf2.toString());

// Buffer para datos binarios (ej: colores RGB)
const color = Buffer.from([255, 128, 0]);
console.log('Rojo:', color[0]);
console.log('Verde:', color[1]);
console.log('Azul:', color[2]);

// Convertir a Base64
const base64 = buf.toString('base64');
console.log('Base64:', base64);`,
      git: ''
    }
  },
  {
    id: 'nodejs-17',
    title: '17. Exports múltiples',
    description: 'Aprende diferentes formas de exportar desde un módulo: exports individual, exports agrupado, y re-exportar.',
    language: 'nodejs',
    category: 'modulos',
    code: {
      html: '',
      css: '',
      javascript: `// --- formas de exportar ---

// 1. module.exports único (más común)
module.exports = class Calculadora {
  sumar(a, b) { return a + b; }
};

// 2. exports.nombre para múltiples
exports.sumar = (a, b) => a + b;
exports.restar = (a, b) => a - b;
// Equivale a: module.exports.sumar = ...

// 3. Re-exportar
// module.exports = require('./otro');

// --- formas de importar ---
const Calc = require('./calculadora');
const { sumar, restar } = require('./operaciones');`,
      git: ''
    }
  },
  {
    id: 'nodejs-18',
    title: '18. Buenas prácticas',
    description: 'Convenciones y patrones para escribir código Node.js limpio: manejo de errores, estructura de proyecto, y configuración.',
    language: 'nodejs',
    category: 'buenas-practicas',
    code: {
      html: '',
      css: '',
      javascript: `// 1. Manejo de errores siempre
process.on('uncaughtException', (err) => {
  console.error('Error no capturado:', err);
  process.exit(1);
});

// 2. Usa async/await sobre then/catch
async function obtenerDatos() {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

// 3. Variables de entorno para config
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DATABASE_URL;

// 4. Estructura de proyecto
// /proyecto
//   /src
//     /routes
//     /controllers
//     /models
//   index.js
//   package.json

// 5. Scripts en package.json
// "dev": "nodemon src/index.js",
// "start": "node src/index.js",
// "test": "jest"`,
      git: ''
    }
  },
];

// Express.js - 18 lecciones
const expressLessons: Lesson[] = [
  // Fundamentos
  {
    id: 'express-1',
    title: '1. ¿Qué es Express.js?',
    description: 'Express.js es un framework web minimalista y flexible para Node.js. Proporciona herramientas para crear APIs y servidores web de forma rápida.',
    language: 'express',
    category: 'fundamentos',
    code: {
      html: '',
      css: '',
      javascript: `// npm install express
const express = require('express');
const app = express();

// Rutas básicas
app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

app.get('/about', (req, res) => {
  res.json({ version: '1.0', status: 'ok' });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});`,
      git: ''
    }
  },
  {
    id: 'express-2',
    title: '2. Estructura de un proyecto Express',
    description: 'Un proyecto Express típico tiene: app.js (o index.js) para la configuración, routes/ para las rutas, y server.js para iniciar el servidor.',
    language: 'express',
    category: 'fundamentos',
    code: {
      html: '',
      css: '',
      javascript: `// --- package.json ---
// { "scripts": { "start": "node server.js" } }

// --- server.js ---
const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(\`Servidor corriendo en puerto \${PORT}\`);
});

// --- app.js ---
const express = require('express');
const routes = require('./routes/usuarios');

const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/usuarios', routes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'No encontrado' });
});

module.exports = app;`,
      git: ''
    }
  },
  // Routing
  {
    id: 'express-3',
    title: '3. Routing básico',
    description: 'Las rutas en Express definen cómo una aplicación responde a solicitudes HTTP. Cada ruta tiene un patrón y un handler.',
    language: 'express',
    category: 'routing',
    code: {
      html: '',
      css: '',
      javascript: `const express = require('express');
const app = express();

// GET: obtener recursos
app.get('/usuarios', (req, res) => {
  res.json([
    { id: 1, nombre: 'Ana' },
    { id: 2, nombre: 'Carlos' }
  ]);
});

// POST: crear recurso
app.post('/usuarios', (req, res) => {
  const nuevo = req.body;
  nuevo.id = Date.now();
  res.status(201).json(nuevo);
});

// PUT: actualizar recurso completo
app.put('/usuarios/:id', (req, res) => {
  res.json({ mensaje: 'Usuario actualizado' });
});

// DELETE: eliminar recurso
app.delete('/usuarios/:id', (req, res) => {
  res.status(204).send();
});

// PATCH: actualización parcial
app.patch('/usuarios/:id', (req, res) => {
  res.json({ mensaje: 'Usuario modificado parcialmente' });
});`,
      git: ''
    }
  },
  {
    id: 'express-4',
    title: '4. Route parameters',
    description: 'Los parámetros de ruta capturan valores de la URL como /usuarios/123. Se acceden con req.params.',
    language: 'express',
    category: 'routing',
    code: {
      html: '',
      css: '',
      javascript: `const express = require('express');
const app = express();

// Parámetro requerido (dos puntos)
app.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  res.json({ id, mensaje: \`Usuario \${id}\` });
});

// Múltiples parámetros
app.get('/usuarios/:userId/libros/:libroId', (req, res) => {
  const { userId, libroId } = req.params;
  res.json({ userId, libroId });
});

// Parámetros con formato (regex)
app.get('/mensajes/:id([0-9]+)', (req, res) => {
  res.json({ id: req.params.id });
});

// Parámetro opcional
app.get('/archivos(*)', (req, res) => {
  const ruta = req.params[0];
  res.json({ ruta: ruta || '/' });
});`,
      git: ''
    }
  },
  {
    id: 'express-5',
    title: '5. Query parameters',
    description: 'Los query parameters van después del ? en la URL: /buscar?q=javascript&orden=asc. Se acceden con req.query.',
    language: 'express',
    category: 'routing',
    code: {
      html: '',
      css: '',
      javascript: `const express = require('express');
const app = express();

app.get('/buscar', (req, res) => {
  const { q, pagina = 1, orden = 'asc' } = req.query;

  res.json({
    busqueda: q,
    pagina: parseInt(pagina),
    orden,
    resultados: [
      { id: 1, titulo: 'JavaScript Guía' },
      { id: 2, titulo: 'Node.js Avanzado' }
    ]
  });
});

// URL: /buscar?q=js&pagina=2&orden=desc
// req.query = { q: 'js', pagina: '2', orden: 'desc' }

app.get('/filtrar', (req, res) => {
  // Verificar si existe un query
  if (req.query.activo === 'true') {
    return res.json({ items: ['item1', 'item2'] });
  }
  res.json({ items: [] });
});`,
      git: ''
    }
  },
  {
    id: 'express-6',
    title: '6. HTTP Methods y Códigos de Estado',
    description: 'Cada método HTTP tiene un propósito. Los códigos de estado indican el resultado: 200=éxito, 404=no existe, 500=error del servidor.',
    language: 'express',
    category: 'routing',
    code: {
      html: '',
      css: '',
      javascript: `const express = require('express');
const app = express();

// Códigos de estado comunes:
// 200 OK - solicitud exitosa
// 201 Created - recurso creado
// 204 No Content - respuesta vacía
// 400 Bad Request - solicitud inválida
// 401 Unauthorized - no autenticado
// 403 Forbidden - sin permisos
// 404 Not Found - recurso no existe
// 500 Internal Server Error

app.get('/recurso', (req, res) => {
  res.status(200).json({ ok: true });
});

app.post('/recurso', (req, res) => {
  // 201: algo fue creado
  res.status(201).json({ creado: true });
});

app.delete('/recurso/:id', (req, res) => {
  const existe = false;
  if (!existe) {
    // 404: no se encontró
    return res.status(404).json({ error: 'No existe' });
  }
  // 204: se borró pero no hay contenido que devolver
  res.status(204).send();
});`,
      git: ''
    }
  },
  // Middleware
  {
    id: 'express-7',
    title: '7. ¿Qué es Middleware?',
    description: 'El middleware es una función que procesa las solicitudes antes de que lleguen a la ruta final. Se ejecutan en orden, de arriba a abajo.',
    language: 'express',
    category: 'middleware',
    code: {
      html: '',
      css: '',
      javascript: `const express = require('express');
const app = express();

// MIDDLEWARE: función que recibe req, res, y next
const logger = (req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next(); // ¡Importante! Pasar al siguiente middleware
};

const autenticar = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === 'Bearer secreto') {
    next(); // Permitir acceso
  } else {
    res.status(401).json({ error: 'No autorizado' });
  }
};

// Usar middleware global (TODAS las rutas)
app.use(logger);

// Usar middleware en ruta específica
app.get('/protegido', autenticar, (req, res) => {
  res.json({ secreto: 'información privada' });
});

// Middleware de errores (4 parámetros)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal' });
});`,
      git: ''
    }
  },
  {
    id: 'express-8',
    title: '8. Built-in middleware',
    description: 'Express tiene middleware incorporado: express.json() para parsear JSON, express.urlencoded() para formularios, y express.static() para archivos estáticos.',
    language: 'express',
    category: 'middleware',
    code: {
      html: '',
      css: '',
      javascript: `const express = require('express');
const path = require('path');
const app = express();

// Parsear JSON en el body
app.use(express.json());

// Parsear datos de formularios (URL-encoded)
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (css, js, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas API (después de los middlewares de parsing)
app.post('/api/usuario', (req, res) => {
  // req.body contiene los datos JSON
  console.log(req.body);
  res.json({ recibido: req.body });
});

// URL: /css/estilos.css sirve desde /public/css/estilos.css`,
      git: ''
    }
  },
  {
    id: 'express-9',
    title: '9. Third-party middleware',
    description: 'Middleware de terceros extiende Express: cors para cross-origin, morgan para logging, helmet para seguridad.',
    language: 'express',
    category: 'middleware',
    code: {
      html: '',
      css: '',
      javascript: `// npm install cors morgan helmet
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

// CORS: permite requests desde otros dominios
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Morgan: logging de requests
app.use(morgan('dev'));
// Formato: GET /ruta 200 3.5ms

// Helmet: headers de seguridad
app.use(helmet());

// Ahora las rutas tienen logging y seguridad automáticos`,
      git: ''
    }
  },
  {
    id: 'express-10',
    title: '10. Custom middleware',
    description: 'Crea tu propio middleware para validar datos, transformar información, o implementar lógica compartida entre rutas.',
    language: 'express',
    category: 'middleware',
    code: {
      html: '',
      css: '',
      javascript: `const express = require('express');
const app = express();

// Middleware de validación
const validarEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email requerido' });
  }

  if (!email.includes('@')) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  next(); // Pasar al siguiente middleware/ruta
};

// Middleware de transformación
const normalizarTexto = (req, res, next) => {
  if (req.body.nombre) {
    req.body.nombre = req.body.nombre.trim().toLowerCase();
  }
  next();
};

// Aplicar múltiples middlewares a una ruta
app.post('/registro',
  validarEmail,
  normalizarTexto,
  (req, res) => {
    res.json({ success: true, datos: req.body });
  }
);

// Middleware condicional
const soloDesarrollo = (req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Request:', req.method, req.url);
  }
  next();
};`,
      git: ''
    }
  },
  {
    id: 'express-11',
    title: '11. Error handling middleware',
    description: 'Los errores en Express se manejan con un middleware especial de 4 parámetros. Si ninguna ruta coincide, llega aquí.',
    language: 'express',
    category: 'middleware',
    code: {
      html: '',
      css: '',
      javascript: `const express = require('express');
const app = express();

// Middleware 404: cuando no hay ruta que coincida
app.use((req, res, next) => {
  res.status(404).json({
    error: 'No encontrado',
    ruta: req.url
  });
});

// Middleware de errores (DEBE tener 4 parámetros)
app.use((err, req, res, next) => {
  console.error('Error:', err.message);

  // Manejar errores específicos
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }

  if (err.code === 'ENOENT') {
    return res.status(404).json({ error: 'Archivo no encontrado' });
  }

  // Error genérico
  res.status(500).json({
    error: 'Error interno',
    mensaje: process.env.NODE_ENV === 'development' ? err.message : 'Oculto'
  });
});

// Para lanzar errores desde rutas:
app.get('/fallar', (req, res, next) => {
  next(new Error('Algo salió mal intencionalmente'));
});`,
      git: ''
    }
  },
  // Datos y Seguridad
  {
    id: 'express-12',
    title: '12. Body parsing',
    description: 'req.body contiene los datos enviados en POST/PUT. express.json() parsea JSON automáticamente. Para formularios usa urlencoded.',
    language: 'express',
    category: 'datos',
    code: {
      html: '',
      css: '',
      javascript: `const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Datos desde un formulario HTML
// <form method="POST" action="/contacto">
app.use(express.urlencoded({ extended: true }));

app.post('/contacto', (req, res) => {
  // Datos del formulario
  const { nombre, email, mensaje } = req.body;
  res.json({ recibido: { nombre, email, mensaje } });
});

app.post('/api/productos', (req, res) => {
  // JSON del body
  const producto = req.body;
  console.log('Producto:', producto);
  res.status(201).json({ id: 1, ...producto });
});

// Para binary data (imágenes, archivos)
// const multer = require('multer');
// app.use(multer().single('archivo'));`,
      git: ''
    }
  },
  {
    id: 'express-13',
    title: '13. CORS',
    description: 'CORS (Cross-Origin Resource Sharing) permite que tu API sea accesible desde otros dominios. Sin CORS, el navegador lo bloquea.',
    language: 'express',
    category: 'cors',
    code: {
      html: '',
      css: '',
      javascript: `// npm install cors
const express = require('express');
const cors = require('cors');
const app = express();

// CORS básico: permite todos los orígenes
app.use(cors());

// CORS configurado: solo ciertos orígenes
app.use(cors({
  origin: ['http://localhost:3000', 'https://midominio.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rutas (después de CORS)
// GET desde localhost:3001 a localhost:3000 ahora funciona

app.get('/datos', (req, res) => {
  res.json({ mensaje: 'Datos accesibles desde otros orígenes' });
});

// Preflight request (OPTIONS) se maneja automáticamente`,
      git: ''
    }
  },
  {
    id: 'express-14',
    title: '14. Environment variables',
    description: 'Las variables de entorno (process.env) almacenan configuración que cambia entre entornos: desarrollo, producción, test.',
    language: 'express',
    category: 'datos',
    code: {
      html: '',
      css: '',
      javascript: `// npm install dotenv
require('dotenv').config();

const express = require('express');
const app = express();

// process.env contiene las variables de entorno
// PORT: puerto del servidor
// NODE_ENV: development | production | test
// DATABASE_URL: conexión a la base de datos
// SECRET_KEY: para JWT, sesiones, etc.

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.get('/info', (req, res) => {
  res.json({
    puerto: PORT,
    entorno: NODE_ENV,
    nodeVersion: process.version
  });
});

app.listen(PORT, () => {
  console.log(\`Servidor en modo \${NODE_ENV}\`);
});

// .env archivo (NUNCA committing al git):
// PORT=3000
// NODE_ENV=development
// DATABASE_URL=postgres://user:pass@localhost:5432/mydb`,
      git: ''
    }
  },
  {
    id: 'express-15',
    title: '15. dotenv',
    description: 'dotenv carga variables desde un archivo .env a process.env. Mantiene secrets fuera del código y facilita cambiar configuración.',
    language: 'express',
    category: 'datos',
    code: {
      html: '',
      css: '',
      javascript: `// .env (en la raíz del proyecto)
PORT=3003
NODE_ENV=development
DATABASE_URL=postgres://localhost/mydb
JWT_SECRET=mi_secreto_super_seguro
API_KEY=1234567890

// --- index.js ---
// Cargar dotenv AL PRINCIPIO de todo
require('dotenv').config();

const express = require('express');
const app = express();

console.log('PORT:', process.env.PORT);       // 3003
console.log('SECRET:', process.env.JWT_SECRET); // mi_secreto...

// El resto del código usa process.env normalmente
app.get('/', (req, res) => {
  res.send('Listo');
});

app.listen(process.env.PORT, () => {
  console.log('Corriendo en puerto', process.env.PORT);
});

// .gitignore debe incluir:
// .env
// node_modules/`,
      git: ''
    }
  },
  // Arquitectura
  {
    id: 'express-16',
    title: '16. express.Router()',
    description: 'express.Router() crea un mini-app para organizar rutas relacionadas. Cada router tiene sus propios middleware y rutas.',
    language: 'express',
    category: 'arquitectura',
    code: {
      html: '',
      css: '',
      javascript: `// --- routes/usuarios.js ---
const express = require('express');
const router = express.Router();

// Middleware específico de este router
router.use((req, res, next) => {
  console.log('Ruta de usuario:', req.url);
  next();
});

// GET /api/usuarios
router.get('/', (req, res) => {
  res.json([{ id: 1, nombre: 'Ana' }]);
});

// GET /api/usuarios/:id
router.get('/:id', (req, res) => {
  res.json({ id: req.params.id });
});

// POST /api/usuarios
router.post('/', (req, res) => {
  res.status(201).json(req.body);
});

module.exports = router;

// --- app.js ---
const usuariosRouter = require('./routes/usuarios');

app.use('/api/usuarios', usuariosRouter);
// Ahora todas las rutas de usuariosRouter tienen prefijo /api/usuarios`,
      git: ''
    }
  },
  {
    id: 'express-17',
    title: '17. Modelo de 3 capas',
    description: 'La arquitectura de 3 capas separa: Presentation (routes), Business Logic (controllers/services), Data Access (models). Cada capa tiene una responsabilidad clara.',
    language: 'express',
    category: 'arquitectura',
    code: {
      html: '',
      css: '',
      javascript: `// --- routes/usuarios.js (PRESENTATION) ---
const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuariosController');

router.get('/', controller.obtenerTodos);
router.get('/:id', controller.obtenerUno);
router.post('/', controller.crear);

module.exports = router;

// --- controllers/usuariosController.js (BUSINESS LOGIC) ---
const service = require('../services/usuariosService');

const obtenerTodos = async (req, res, next) => {
  try {
    const filtros = req.query;
    const usuarios = await service.buscarTodos(filtros);
    res.json(usuarios);
  } catch (error) {
    next(error);
  }
};

module.exports = { obtenerTodos, obtenerUno, crear };

// --- services/usuariosService.js (BUSINESS LOGIC) ---
const model = require('../models/usuariosModel');

const buscarTodos = async (filtros) => {
  const usuarios = await model.findAll(filtros);
  return usuarios.map(u => ({
    ...u,
    nombre: u.nombre.toUpperCase() // transformación
  }));
};

module.exports = { buscarTodos };

// --- models/usuariosModel.js (DATA ACCESS) ---
// Se conecta directamente a la base de datos
const findAll = async (filtros) => {
  // SQL: SELECT * FROM usuarios WHERE ...
  return [{ id: 1, nombre: 'Ana' }];
};`,
      git: ''
    }
  },
  {
    id: 'express-18',
    title: '18. Buenas prácticas',
    description: 'Patrones para Express en producción: organización del código, manejo de errores, seguridad básica, configuración, y testing.',
    language: 'express',
    category: 'buenas-practicas',
    code: {
      html: '',
      css: '',
      javascript: `// 1. Estructura de proyecto organizada
// /src
//   /routes    → app.get(), app.post()
//   /controllers → lógica de cada ruta
//   /services  → lógica de negocio
//   /models    → acceso a datos
//   /middleware → auth, validation, etc.
//   /utils     → helpers
//   app.js
//   server.js

// 2. Middleware de errores SIEMPRE
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production'
      ? 'Error interno'
      : err.message
  });
});

// 3. Security headers
app.use(helmet());

// 4. Rate limiting (npm install express-rate-limit)
// const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
// app.use('/api/', limiter);

// 5. Variables de entorno para config
const config = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET
};

// 6. Logging en producción
app.use(morgan('combined'));

// 7. No exponer detalles de errores en producción`,
      git: ''
    }
  },
];

// Export all lessons combined (HTML/CSS/JS/Git + Node.js + Express)
export const lessons: Lesson[] = [
  ...frontendLessons,
  ...nodejsLessons,
  ...expressLessons,
];

export const categories = [
  // HTML/CSS/JS
  'introduccion', 'estructura', 'titulos', 'parrafos', 'saltos', 'formato',
  'contenedores', 'listas', 'imagenes', 'videos', 'enlaces', 'navegacion',
  'formularios', 'inputs', 'semantico', 'estructura-completa', 'buenas-practicas',
  // Git
  'fundamentos', 'trabajo-diario', 'ramas', 'deshacer', 'github',
  // Node.js
  'flujos', 'async', 'modulos', 'archivos', 'eventos',
  // Express.js
  'routing', 'middleware', 'datos', 'cors', 'arquitectura'
];
