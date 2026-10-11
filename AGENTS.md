# AGENTS.md

# AquiVa — Manual operativo para agentes de desarrollo

> Este archivo define el contexto técnico, visual, funcional, pedagógico y operativo que deben seguir Codex, OpenCode y otros agentes al trabajar sobre AquiVa.

---

## 1. Identidad del proyecto

**Nombre:** AquiVa

**Repositorio principal:**  
`https://github.com/inpev/AquiVa`

**Aplicación publicada:**  
`https://inpev.github.io/AquiVa/`

**Tipo de producto:**  
Simulador web educativo de una aplicación móvil de pedidos.

**Stack actual:**

- HTML5
- CSS3
- JavaScript puro
- Git
- GitHub
- GitHub Pages
- Vercel como alternativa de despliegue

El proyecto no requiere frameworks, gestores de estado ni dependencias externas obligatorias.

---

## 2. Propósito del producto

AquiVa representa una aplicación móvil de pedidos y servicios bajo demanda.

Debe permitir que una persona entienda rápidamente:

- dónde se encuentra;
- qué puede buscar;
- qué categorías existen;
- qué promoción está disponible;
- qué comercios tiene cerca;
- cómo navegar entre las secciones principales.

La experiencia debe sentirse como una aplicación móvil comercial moderna, no como una página web tradicional.

---

## 3. Propósito educativo

AquiVa también es un laboratorio didáctico.

Su objetivo es que estudiantes puedan:

- analizar una interfaz existente;
- identificar funciones faltantes;
- detectar fricción UX;
- proponer nuevas funciones;
- practicar HTML, CSS y JavaScript;
- comprender responsive design;
- utilizar Git y GitHub;
- crear ramas;
- realizar commits;
- utilizar Pull Requests;
- aprender despliegue web;
- practicar pensamiento de producto;
- justificar mejoras según valor para el usuario.

AquiVa debe mantenerse:

**funcional + realista + deliberadamente incompleta.**

---

## 4. Regla pedagógica principal

No completar automáticamente todas las funciones posibles.

Antes de implementar una función, clasificarla como:

1. defecto que debe corregirse;
2. mejora solicitada explícitamente;
3. función intencionalmente pendiente;
4. oportunidad pedagógica futura.

No implementar sin petición explícita:

- autenticación;
- registro;
- localStorage;
- favoritos persistentes;
- carrito persistente;
- historial;
- tracking real;
- pagos;
- backend;
- API real;
- base de datos;
- geolocalización real;
- notificaciones push.

---

## 5. Fuente de verdad

La fuente de verdad técnica es el repositorio actual.

Antes de modificar código:

1. leer este `AGENTS.md`;
2. inspeccionar el archivo real relacionado con la tarea;
3. revisar dependencias directas;
4. identificar el alcance;
5. modificar únicamente lo necesario.

No reconstruir archivos desde memoria si existe una versión actual en GitHub.

No asumir que una versión anterior sigue vigente.

---

## 6. Estructura del repositorio

```text
AquiVa/
├── AGENTS.md
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── vercel.json
```

Mantener esta estructura sencilla mientras el tamaño del proyecto lo permita.

---

## 7. Responsabilidad de los archivos

### `index.html`

Responsable de:

- estructura semántica;
- contenido;
- controles;
- atributos `data-*`;
- accesibilidad estructural;
- referencias a CSS y JavaScript.

No duplicar lógica JavaScript dentro del HTML.

No introducir grandes bloques de estilos inline.

### `css/styles.css`

Responsable de:

- design tokens;
- colores;
- tipografía;
- layout;
- componentes visuales;
- estados;
- responsive;
- smartphone simulado;
- adaptación móvil;
- accesibilidad visual.

Es la fuente de verdad visual.

### `js/app.js`

Responsable de:

- búsqueda;
- categorías;
- filtros;
- favoritos temporales;
- navegación simulada;
- toasts;
- eventos;
- comportamiento interactivo.

No debe convertirse en un archivo de estilos.

### `README.md`

Está dirigido a personas.

Debe explicar uso, instalación, colaboración, Git, GitHub y despliegue.

### `AGENTS.md`

Está dirigido a agentes.

Define contexto, arquitectura, identidad visual, restricciones y reglas operativas.

---

## 8. Arquitectura actual

La arquitectura es deliberadamente simple:

```text
HTML
└── estructura y semántica

CSS
└── presentación y responsive

JavaScript
└── interacción y estado temporal
```

Regla básica:

- cambio estructural → HTML;
- cambio visual → CSS;
- cambio de comportamiento → JavaScript.

No mezclar responsabilidades innecesariamente.

---

## 9. Filosofía técnica

AquiVa debe ser:

- fácil de estudiar;
- fácil de ejecutar;
- fácil de modificar;
- ligera;
- comprensible;
- mantenible;
- suficientemente profesional.

Evitar sobrearquitectura.

Si una solución correcta puede resolverse con HTML/CSS/JavaScript puro, no introducir una dependencia solo por conveniencia.

---

## 10. Tecnologías que no deben añadirse sin autorización

No introducir automáticamente:

- React;
- Next.js;
- Vue;
- Angular;
- Svelte;
- TypeScript;
- Tailwind;
- Bootstrap;
- Material UI;
- Supabase;
- Firebase;
- Node backend;
- Express;
- NestJS.

Cualquier migración tecnológica requiere una solicitud explícita.

---

# SISTEMA VISUAL

## 11. Personalidad de AquiVa

La interfaz debe sentirse:

- moderna;
- rápida;
- amigable;
- clara;
- cercana;
- ligera;
- energética;
- móvil;
- intuitiva.

Debe evitar parecer:

- ERP;
- dashboard administrativo;
- sistema bancario;
- sistema corporativo pesado;
- interfaz gubernamental;
- plantilla genérica.

---

## 12. Semántica visual

AquiVa comunica principalmente:

**movimiento + rapidez + conveniencia + tecnología + cercanía.**

La interfaz debe transmitir:

> “Encuentro lo que necesito y puedo actuar rápidamente.”

---

## 13. Design tokens de color

La paleta principal actual es:

```css
:root {
  --bg: #f4f6fb;
  --surface: #ffffff;
  --surface-soft: #f8f9fd;

  --text: #101828;
  --muted: #667085;
  --border: #e7eaf0;

  --purple: #6f24e8;
  --purple-2: #8c46ff;
  --purple-soft: #f1e8ff;

  --orange: #ff8a00;
  --green: #1da66a;
}
```

Reutilizar estos tokens antes de introducir nuevos colores.

---

## 14. Morado primario

```css
--purple: #6f24e8;
```

Semántica:

- identidad;
- innovación;
- tecnología;
- creatividad;
- acción principal.

Uso recomendado:

- marca;
- enlaces;
- navegación activa;
- estados seleccionados;
- focus;
- iconos activos;
- elementos interactivos importantes.

No convertir toda la aplicación en una superficie morada.

---

## 15. Morado secundario

```css
--purple-2: #8c46ff;
```

Uso:

- gradientes;
- variaciones;
- promociones;
- profundidad visual.

Debe complementar, no competir, con `--purple`.

---

## 16. Morado suave

```css
--purple-soft: #f1e8ff;
```

Uso:

- fondos seleccionados;
- navegación activa;
- hover;
- estados suaves;
- áreas secundarias.

No usarlo como texto principal.

---

## 17. Naranja

```css
--orange: #ff8a00;
```

Semántica:

- movimiento;
- energía;
- rapidez;
- acción.

Uso principal:

- acento de marca;
- detalles pequeños;
- contraste con morado.

En la marca:

```text
Aqui → morado
Va   → naranja
```

No convertir el naranja en color dominante.

---

## 18. Verde

```css
--green: #1da66a;
```

Semántica:

- disponible;
- activo;
- online;
- positivo.

El estado `Online` utiliza una familia verde propia, con fondos suaves y contraste suficiente.

---

## 19. Fondo general

```css
--bg: #f4f6fb;
```

Representa el espacio exterior del simulador en escritorio.

Debe sentirse:

- neutral;
- limpio;
- moderno;
- suave.

Puede utilizar gradientes radiales sutiles morados y naranjas.

---

## 20. Superficies

```css
--surface: #ffffff;
--surface-soft: #f8f9fd;
```

`--surface`:

- pantalla;
- tarjetas;
- navegación;
- bloques principales.

`--surface-soft`:

- estados vacíos;
- agrupaciones suaves;
- backgrounds secundarios.

---

## 21. Texto

```css
--text: #101828;
--muted: #667085;
```

`--text`:

- títulos;
- nombres;
- información principal.

`--muted`:

- metadata;
- labels;
- tiempos;
- descripciones secundarias.

Nunca usar texto demasiado claro sobre fondo blanco.

---

## 22. Bordes

```css
--border: #e7eaf0;
```

Uso:

- tarjetas;
- buscador;
- ubicación;
- separadores;
- contenedores.

Los bordes deben acompañar la interfaz, no dominarla.

---

## 23. Regla para nuevos colores

Antes de añadir un color:

1. comprobar si existe token equivalente;
2. identificar su significado semántico;
3. evitar duplicación;
4. crear token nuevo solo si representa un concepto nuevo y reutilizable.

Preferir:

```css
color: var(--purple);
```

en lugar de repetir:

```css
color: #6f24e8;
```

---

## 24. Tipografía

Stack actual:

```css
font-family:
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

Objetivos:

- legibilidad;
- compatibilidad;
- rapidez;
- apariencia moderna.

No añadir fuentes remotas sin justificación.

---

## 25. Jerarquía tipográfica de referencia

```text
Marca AquiVa          ≈ 30px
Título promocional    ≈ 23–24px
Título de sección     ≈ 18px
Texto principal       ≈ 13–14px
Texto secundario      ≈ 11–12px
Metadata              ≈ 10–11px
```

Estos tamaños son referencias, no valores inmutables.

---

## 26. Pesos tipográficos

Uso recomendado:

```text
400 → cuerpo
500 → descripción
700 → información importante
800 → controles
900 → marca y títulos destacados
```

No utilizar `900` en todo el contenido.

---

## 27. Radios

La geometría de AquiVa es redondeada.

Referencia:

```text
Smartphone           48px
Pantalla interna     40px
Promo                22px
Ubicación            20px
Tarjetas             18px
Buscador             18px
Botones              12–16px
Pills                999px
```

La estética debe sentirse touch-friendly y amigable.

---

## 28. Sombras

Sombra principal de referencia:

```css
--shadow: 0 24px 65px rgba(16, 24, 40, 0.18);
```

Las sombras internas deben ser:

- suaves;
- discretas;
- de baja opacidad.

Evitar:

- glow excesivo;
- sombras negras fuertes;
- neumorfismo pesado.

---

## 29. Espaciado

Escala visual recomendada:

```text
4px
6px
8px
10px
12px
14px
16px
18px
20px
24px
```

No introducir valores arbitrarios constantemente.

---

# SMARTPHONE Y RESPONSIVE

## 30. Dimensiones base

Tokens actuales:

```css
--phone-width: 390px;
--phone-height: 844px;
--phone-radius: 48px;
--screen-radius: 40px;
--phone-zoom: 0.88;
```

`390 × 844` es la referencia visual del simulador.

---

## 31. Comportamiento en escritorio

En desktop debe verse:

```text
Fondo externo
└── Smartphone
    └── Pantalla AquiVa
```

El teléfono debe:

- permanecer centrado;
- conservar proporción;
- mostrar marco;
- mostrar sombra;
- mostrar Dynamic Island;
- escalar según altura disponible.

---

## 32. Dynamic Island

La Dynamic Island es decorativa.

Se genera desde:

```css
.phone::before
```

Debe mostrarse solo en el smartphone simulado.

No representa una función interactiva.

---

## 33. Comportamiento en móvil real

Breakpoint principal actual:

```css
@media (max-width: 520px)
```

En móvil real:

- eliminar marco externo;
- eliminar sombra;
- eliminar Dynamic Island simulada;
- eliminar fondo exterior;
- ocupar todo el viewport;
- usar `100dvh`;
- respetar safe areas.

No mostrar un teléfono dentro de otro teléfono.

---

## 34. Safe areas

Cuando corresponda, conservar:

```css
env(safe-area-inset-top)
env(safe-area-inset-bottom)
```

Especialmente en:

- status bar;
- navegación inferior.

---

## 35. Escalado

Actualmente el simulador utiliza `zoom` para escalar el smartphone completo.

No reemplazarlo sin analizar primero:

- desktop;
- laptop;
- GitHub Pages;
- overflow;
- centrado;
- compatibilidad de navegador.

Una sustitución debe resolver todo el sistema de escala, no solo una captura.

---

## 36. Viewports de validación

Validar aproximadamente:

```text
320 × 568
360 × 800
375 × 812
390 × 844
430 × 932
768 × 1024
1024 × 768
1366 × 768
1440 × 900
1920 × 1080
```

No declarar un cambio responsive terminado después de probar una sola resolución.

---

# MAPA VISUAL DE COMPONENTES

## 37. Árbol principal

```text
.phone
└── .screen
    ├── .statusbar
    ├── .appbar
    │   ├── .brand
    │   └── .online
    ├── .scroll
    │   ├── .location
    │   ├── .search
    │   ├── .section-head
    │   ├── .categories
    │   │   └── .category
    │   ├── .promo
    │   │   ├── h3
    │   │   ├── p
    │   │   ├── button
    │   │   └── .scooter
    │   └── .restaurant-grid
    │       └── .restaurant
    │           ├── .food
    │           ├── .heart
    │           └── .restaurant-copy
    ├── .bottom-nav
    │   └── .nav-btn
    └── .toast
```

Usar este mapa antes de explorar todo el CSS.

---

## 38. `.phone`

Responsabilidad:

- marco físico;
- dimensiones;
- radios;
- sombra;
- escala.

No colocar comportamiento funcional aquí.

---

## 39. `.screen`

Responsabilidad:

- contener la app;
- recortar contenido;
- gestionar la estructura vertical;
- mantener radios internos.

---

## 40. `.statusbar`

Simula información del sistema:

- hora;
- señal;
- conectividad;
- batería.

Es decorativa.

---

## 41. `.appbar`

Contiene:

- marca AquiVa;
- indicador Online.

Debe permanecer limpia y ligera.

No saturar con acciones adicionales sin necesidad.

---

## 42. `.brand`

Semántica visual:

```text
Aqui → morado
Va   → naranja
```

No cambiar esta relación sin autorización.

---

## 43. `.online`

Representa estado positivo.

Debe utilizar semántica verde.

No utilizar morado para representar disponibilidad.

---

## 44. `.scroll`

Es el contenido central desplazable.

Debe tener suficiente padding inferior para evitar que `.bottom-nav` cubra el contenido.

No eliminar ese espacio sin revisar scroll y navegación.

---

## 45. `.location`

Representa dirección de entrega.

Debe comunicar:

```text
icono + label + dirección + acción
```

Debe parecer interactiva.

---

## 46. `.search`

Representa la intención principal de descubrimiento.

Placeholder de referencia:

```text
¿Qué quieres hoy?
```

Debe tener foco visible y ser fácil de identificar.

---

## 47. `.section-head`

Patrón:

```text
Título                         Acción
```

Ejemplo:

```text
Categorías                 Ver todas
```

La acción secundaria no debe competir con el título.

---

## 48. `.categories`

Layout actual:

```css
grid-template-columns: repeat(3, minmax(0, 1fr));
```

Categorías de referencia:

- 🍔 Comida
- 🛒 Supermercado
- 💊 Farmacia
- 🥤 Bebidas
- 🍰 Postres
- ◼ Más

---

## 49. `.category`

Cada categoría debe tener:

- icono o emoji;
- etiqueta;
- estado hover;
- estado seleccionado;
- área táctil razonable.

Estado activo:

- fondo violeta suave;
- borde suave;
- ligera elevación.

---

## 50. `.promo`

La tarjeta promocional destaca ofertas.

Contenido actual de referencia:

```text
Envío gratis
En pedidos desde B/. 25.00
[Pedir ahora]
🛵
```

Debe ser llamativa sin romper el resto de la identidad.

---

## 51. Arquitectura de `.promo`

La estructura HTML real no debe asumirse incorrectamente.

Modelo actual:

```html
<section class="promo">
  <h3>...</h3>
  <p>...</p>
  <button>...</button>
  <div class="scooter">🛵</div>
</section>
```

El CSS utiliza Grid para separar contenido e ilustración.

La moto nunca debe:

- cubrir el botón;
- cubrir el título;
- cubrir el texto;
- generar overflow;
- comprimir excesivamente el contenido.

---

## 52. `.restaurant-grid`

Actualmente presenta comercios en dos columnas.

Debe conservar buena legibilidad dentro del ancho del smartphone.

---

## 53. `.restaurant`

Una tarjeta debe comunicar:

- producto visual;
- favorito;
- nombre;
- rating;
- metadata;
- tiempo.

Debe parecer una tarjeta real de app de delivery.

---

## 54. `.food`

Representa visualmente el producto.

Actualmente puede usar emojis.

No reemplazar automáticamente emojis con imágenes o bibliotecas.

---

## 55. `.heart`

Estados:

```text
♡ no favorito
♥ favorito
```

Los favoritos son temporales por defecto.

No añadir persistencia sin instrucción.

---

## 56. `.bottom-nav`

Opciones actuales:

- Inicio
- Categorías
- Pedidos
- Cuenta

Cada opción debe mantener:

- icono;
- texto;
- estado activo claro;
- área touch adecuada.

No convertirla en navegación desktop.

---

## 57. `.toast`

Sirve para feedback temporal.

Ejemplos:

- categoría seleccionada;
- favorito agregado;
- promoción activada;
- vista seleccionada.

No usar toast para información crítica persistente.

---

# UX Y ACCESIBILIDAD

## 58. Jerarquía de experiencia

Jerarquía actual:

```text
Marca y estado
↓
Ubicación
↓
Búsqueda
↓
Categorías
↓
Promoción
↓
Comercios populares
↓
Navegación inferior
```

No alterar esta jerarquía sin una razón de producto clara.

---

## 59. Principio de claridad

El usuario debe comprender:

1. dónde está;
2. qué puede hacer;
3. qué ocurrió después de una acción.

Toda interacción relevante debe ofrecer feedback.

---

## 60. Principio de fricción

Evitar:

- pasos innecesarios;
- exceso de texto;
- controles redundantes;
- navegación confusa;
- CTA competidores.

---

## 61. Estados interactivos

Cuando corresponda considerar:

- default;
- hover;
- focus;
- active;
- selected;
- disabled;
- empty;
- error.

No comunicar un estado importante únicamente mediante color.

---

## 62. Accesibilidad

Preservar:

- HTML semántico;
- `aria-label`;
- `aria-current`;
- `aria-pressed`;
- foco visible;
- contraste;
- navegación por teclado;
- `prefers-reduced-motion`.

No eliminar accesibilidad para simplificar CSS.

---

## 63. Focus

Debe ser visible.

Referencia:

```css
outline: 3px solid rgba(111, 36, 232, 0.22);
outline-offset: 2px;
```

No usar `outline: none` sin sustitución accesible.

---

## 64. Movimiento

Las animaciones deben ser:

- breves;
- suaves;
- funcionales;
- discretas.

Referencia general:

```text
150ms–250ms
```

Respetar:

```css
@media (prefers-reduced-motion: reduce)
```

---

## 65. Área táctil

Siempre que sea razonable, controles importantes deben aproximarse a áreas táctiles de `44 × 44px`.

La prioridad es usabilidad móvil.

---

# REGLAS DE CÓDIGO

## 66. HTML

Debe ser:

- semántico;
- limpio;
- fácil de estudiar;
- accesible.

Preferir:

```html
<main>
<header>
<nav>
<section>
<article>
<button>
```

No usar `<div>` para una acción que debe ser un `<button>`.

---

## 67. Rutas de archivos

GitHub Pages publica AquiVa bajo:

```text
/AquiVa/
```

Usar rutas relativas:

```html
./css/styles.css
./js/app.js
```

Evitar:

```html
/css/styles.css
/js/app.js
```

porque apuntan a la raíz del dominio.

---

## 68. JavaScript

Debe permanecer:

- Vanilla JS;
- legible;
- directo;
- modular dentro de lo razonable;
- educativo.

Preferir nombres descriptivos:

```javascript
searchInput
restaurants
categories
showToast
```

Evitar:

```javascript
x
tmp
obj1
fn2
```

---

## 69. Eventos

Usar preferentemente:

```javascript
addEventListener()
```

Evitar handlers inline como:

```html
onclick="..."
```

---

## 70. Estado

El estado actual es temporal.

Recargar la página puede reiniciar:

- favoritos;
- búsqueda;
- categoría activa;
- navegación simulada.

Esto es intencional.

---

## 71. CSS

Debe mantenerse:

- organizado por secciones;
- comentado;
- basado en variables;
- sin duplicación;
- responsive;
- coherente.

Formato recomendado:

```css
/* =========================================================
   COMPONENTE
   ========================================================= */
```

---

## 72. Una sola fuente de verdad visual

Centralizar cuando sea razonable:

- colores;
- dimensiones principales;
- radios;
- sombras;
- escala del teléfono.

No crear tres variables diferentes para el mismo color.

---

## 73. Grid/Flex antes que parches

Para layout estructural preferir:

- CSS Grid;
- Flexbox.

No acumular ajustes como:

```css
right: 8px;
right: 12px;
margin-left: 3px;
transform: translateX(-4px);
```

si la causa real es un layout incorrecto.

---

## 74. Position absolute

Reservarlo principalmente para:

- decoración;
- overlays;
- elementos intencionalmente superpuestos.

No usarlo como sustituto de una estructura correcta.

---

## 75. Overflow

No introducir scroll horizontal accidental.

Revisar especialmente:

- `.promo`;
- `.categories`;
- `.restaurant-grid`;
- `.bottom-nav`;
- textos largos.

---

## 76. Comentarios

Cada archivo importante debe comenzar con una descripción de:

- propósito;
- responsabilidad;
- contexto.

Los comentarios internos deben explicar intención o decisiones importantes.

Buen comentario:

```css
/*
 * En móvil real eliminamos el marco porque
 * la pantalla física ya representa el dispositivo.
 */
```

Comentario innecesario:

```css
/* color morado */
color: purple;
```

---

# SEGURIDAD Y RENDIMIENTO

## 77. Seguridad

Nunca publicar:

- contraseñas;
- tokens;
- API keys;
- claves privadas;
- credenciales;
- datos personales sensibles.

Si en el futuro existen secretos, usar variables de entorno y `.gitignore`.

---

## 78. Dependencias

Antes de instalar una dependencia:

1. comprobar si realmente es necesaria;
2. evaluar si Vanilla JS resuelve el problema;
3. evaluar peso;
4. evaluar impacto educativo.

Preferir cero dependencias cuando sea razonable.

---

## 79. Rendimiento

Mantener:

- carga rápida;
- JavaScript ligero;
- CSS razonable;
- cero recursos innecesariamente pesados.

No instalar una librería completa por un solo icono.

---

# GIT Y COLABORACIÓN

## 80. Antes de modificar

Ejecutar o comprobar:

```bash
git status
```

Si hace falta actualizar:

```bash
git pull origin main
```

No sobrescribir cambios locales accidentalmente.

---

## 81. Commits

Los commits deben redactarse por defecto:

- en español;
- de manera clara;
- sin prefijos.

Correcto:

```bash
git commit -m "Mejorar el diseño responsive del simulador"
```

Correcto:

```bash
git commit -m "Agregar interacción a las categorías"
```

Evitar por defecto:

```text
feat:
fix:
style:
chore:
refactor:
```

Usarlos solo si el usuario lo solicita expresamente.

---

## 82. Flujo normal

```bash
git add .
git commit -m "Descripción clara del cambio"
git push
```

No hacer `git push --force` sin autorización explícita.

---

## 83. Ramas y Pull Requests

Para contribuciones relevantes:

```text
main
↓
nueva rama
↓
cambios
↓
commit
↓
push
↓
Pull Request
↓
revisión
↓
merge
```

`main` representa la versión principal publicada.

---

## 84. Conflictos Git

Ante un conflicto:

1. ejecutar `git status`;
2. identificar archivos;
3. revisar ambas versiones;
4. resolver conscientemente;
5. marcar como resuelto;
6. continuar operación.

No descartar cambios automáticamente.

---

# GITHUB PAGES Y DESPLIEGUE

## 85. GitHub Pages

Configuración esperada:

```text
Source: Deploy from a branch
Branch: main
Folder: /(root)
```

URL:

```text
https://inpev.github.io/AquiVa/
```

---

## 86. Caché

Después de un despliegue visual, si parece que no cambió:

1. confirmar que el commit llegó a GitHub;
2. comprobar que el archivo remoto contiene el cambio;
3. esperar el despliegue;
4. hacer hard refresh con `Ctrl + F5`.

No asumir inmediatamente que GitHub Pages falló.

---

# VALIDACIÓN

## 87. Validación HTML

Después de modificar estructura:

- comprobar que abre;
- revisar semántica;
- revisar controles;
- revisar referencias CSS/JS;
- revisar accesibilidad básica.

---

## 88. Validación CSS

Después de modificar estilos:

- desktop;
- laptop;
- móvil;
- overflow;
- alineación;
- legibilidad;
- promo;
- navegación inferior;
- scroll.

---

## 89. Validación JavaScript

Después de modificar lógica:

- consola sin errores nuevos;
- búsqueda;
- categorías;
- favoritos;
- navegación;
- toast;
- botones relacionados.

---

## 90. Checklist visual mínimo

```text
[ ] smartphone centrado en desktop
[ ] smartphone completo
[ ] sin overflow horizontal
[ ] tipografía legible
[ ] colores coherentes
[ ] categorías alineadas
[ ] promo sin superposiciones
[ ] moto no tapa contenido
[ ] tarjetas correctas
[ ] bottom-nav visible
[ ] scroll funciona
[ ] móvil ocupa viewport completo
```

---

## 91. Riesgo de cambios

### Bajo

Ejemplos:

- copy;
- documentación;
- pequeños ajustes visuales.

Validar sintaxis y resultado.

### Medio

Ejemplos:

- layout;
- responsive;
- interacción JavaScript.

Validar funcionalidad y varios viewports.

### Alto

Ejemplos futuros:

- autenticación;
- backend;
- persistencia;
- APIs.

Requerir pruebas más profundas.

---

# REGLAS PARA AGENTES

## 92. Cambios mínimos

Modificar únicamente archivos relacionados con la tarea.

Ejemplo:

Solicitud:

```text
Corregir la tarjeta promocional
```

Archivos probables:

```text
css/styles.css
```

y `index.html` solo si la estructura realmente necesita cambiar.

No tocar `app.js`, README u otros componentes sin necesidad.

---

## 93. No refactorizar fuera de alcance

Si se descubre deuda técnica no relacionada:

- no corregirla automáticamente;
- reportarla;
- continuar con el objetivo actual.

---

## 94. Diagnóstico antes de parchear

Ante un problema visual:

1. revisar HTML real;
2. revisar selector;
3. revisar padre;
4. revisar Grid/Flex;
5. revisar overflow;
6. revisar media queries;
7. corregir causa raíz.

No acumular offsets arbitrarios.

---

## 95. No hacer

Los agentes NO deben:

- migrar el proyecto a un framework sin solicitud;
- añadir backend sin solicitud;
- añadir base de datos sin solicitud;
- añadir auth sin solicitud;
- añadir persistencia sin solicitud;
- instalar dependencias innecesarias;
- modificar archivos fuera de alcance;
- duplicar lógica;
- duplicar design tokens;
- romper rutas de GitHub Pages;
- eliminar accesibilidad;
- cambiar identidad visual arbitrariamente;
- hacer force push;
- usar commits en inglés por defecto;
- usar prefijos de commit por defecto.

---

## 96. Principio de preservación

Antes de diseñar algo nuevo, identificar:

- color;
- tipografía;
- radios;
- sombra;
- spacing;
- interacción;
- jerarquía.

El nuevo componente debe parecer parte natural de AquiVa.

---

## 97. Pensamiento de producto

Antes de agregar una función, responder conceptualmente:

- ¿qué problema resuelve?;
- ¿quién la necesita?;
- ¿reduce pasos?;
- ¿reduce fricción?;
- ¿mejora claridad?;
- ¿mejora engagement?;
- ¿debe implementarse ahora o reservarse para una actividad?

Más funcionalidades no significan automáticamente mejor producto.

---

## 98. Criterio de cierre

Una tarea está terminada cuando:

- cumple el objetivo;
- no rompe funciones existentes;
- conserva identidad visual;
- funciona responsive;
- no introduce errores nuevos;
- no amplía el alcance;
- está documentada cuando corresponde.

---

## 99. Reporte esperado del agente

Al finalizar:

```text
Implementado:
- ...

Archivos modificados:
- ...

Validaciones:
- ...

Errores nuevos:
- ninguno / indicar cuáles

Pendiente:
- ...
```

No afirmar que algo fue validado si no se comprobó realmente.

---

## 100. Principio maestro

AquiVa debe mantenerse:

**simple técnicamente + convincente visualmente + útil pedagógicamente.**

Toda modificación debe equilibrar:

```text
calidad técnica
+
UX/UI
+
mantenibilidad
+
rendimiento
+
aprendizaje
```

Cuando existan varias soluciones correctas, priorizar:

1. corrección;
2. simplicidad;
3. claridad;
4. responsive;
5. accesibilidad;
6. mantenibilidad;
7. coherencia visual;
8. rendimiento.

---

## 101. Resumen rápido para un agente nuevo

Si acabas de entrar al proyecto, recuerda:

- es un simulador educativo de una app móvil;
- usa HTML, CSS y JavaScript puro;
- el repositorio real es la fuente de verdad;
- `390 × 844` es la referencia del smartphone;
- `#6f24e8` es el morado principal;
- `#ff8a00` es el acento naranja;
- `#1da66a` representa estados positivos;
- la UI debe ser clara, móvil, redondeada y moderna;
- no introducir frameworks, backend o persistencia sin solicitud;
- usar rutas relativas compatibles con `/AquiVa/`;
- mantener mobile-first;
- validar varios viewports;
- preservar accesibilidad;
- commits en español y sin prefijos por defecto;
- modificar solo lo necesario;
- corregir causas raíz, no acumular parches.
