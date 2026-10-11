# AquiVa

AquiVa es un simulador web de una aplicación móvil de pedidos, desarrollado con **HTML5, CSS3 y JavaScript puro**.

El proyecto tiene un propósito educativo: permitir que los estudiantes analicen una aplicación funcional, identifiquen oportunidades de mejora y propongan nuevas funcionalidades aplicando principios de desarrollo web, experiencia de usuario, diseño de producto y control de versiones con Git y GitHub.

La aplicación está diseñada para parecer una app móvil real, pero mantiene deliberadamente determinadas funcionalidades incompletas para que puedan ser analizadas, diseñadas e implementadas durante las clases.

---

## Objetivo educativo

AquiVa ha sido diseñado como una aplicación funcional pero deliberadamente incompleta.

El objetivo es que los estudiantes puedan:

- Analizar la interfaz y la experiencia de usuario.
- Identificar funcionalidades faltantes.
- Detectar procesos que pueden simplificarse.
- Proponer mejoras que aporten valor al usuario.
- Implementar nuevas funciones.
- Practicar HTML, CSS y JavaScript.
- Aplicar diseño responsive y accesibilidad.
- Utilizar Git como sistema de control de versiones.
- Trabajar colaborativamente mediante GitHub.
- Aprender a utilizar ramas, commits y Pull Requests.
- Comprender un flujo básico de desarrollo utilizado en proyectos reales.
- Practicar pensamiento de producto, UX/UI y resolución de problemas.

La aplicación puede evolucionar progresivamente durante las clases sin perder su propósito pedagógico.

---

## Tecnologías utilizadas

El proyecto utiliza tecnologías web fundamentales:

- HTML5
- CSS3
- JavaScript puro
- Git
- GitHub
- GitHub Pages para publicación web

No requiere frameworks, gestores de paquetes ni dependencias externas para ejecutarse.

---

## Estructura del proyecto

```text
AquiVa/
│
├── AGENTS.md
├── README.md
├── index.html
│
├── css/
│   └── styles.css
│
└── js/
    └── app.js
```

### `index.html`

Contiene la estructura semántica principal de la aplicación, los componentes visibles y los elementos interactivos.

### `css/styles.css`

Contiene el sistema visual, design tokens, colores, tipografía, componentes, diseño responsive y adaptación del simulador entre escritorio y dispositivos móviles reales.

### `js/app.js`

Contiene la lógica e interacciones de la aplicación, como búsqueda, categorías, favoritos temporales, navegación simulada y mensajes contextuales.

### `README.md`

Contiene la documentación pública del proyecto, instrucciones de instalación, colaboración, ejecución y publicación.

### `AGENTS.md`

Contiene las instrucciones operativas para agentes de desarrollo como Codex, OpenCode y otros asistentes de programación.

Define, entre otros aspectos:

- Propósito del proyecto.
- Arquitectura actual.
- Responsabilidades de los archivos.
- Sistema visual y semántica de colores.
- Reglas UX/UI.
- Responsive design.
- Accesibilidad.
- Convenciones de HTML, CSS y JavaScript.
- Límites de alcance para modificaciones.
- Funcionalidades que deben mantenerse deliberadamente pendientes.
- Reglas de Git y commits.
- Validaciones y criterios de cierre.

Los agentes de desarrollo deben revisar `AGENTS.md` antes de realizar modificaciones relevantes.

---

# Ejecutar AquiVa en una computadora

## Opción 1 — Descargar el proyecto

Desde GitHub selecciona:

```text
Code → Download ZIP
```

Después:

1. Descomprime el archivo.
2. Ingresa a la carpeta del proyecto.
3. Abre `index.html` en el navegador.

---

## Opción 2 — Clonar el repositorio con Git

```bash
git clone https://github.com/inpev/AquiVa.git
```

Ingresa a la carpeta:

```bash
cd AquiVa
```

Abre el proyecto en Visual Studio Code:

```bash
code .
```

Puedes ejecutar `index.html` directamente en el navegador o utilizar la extensión **Live Server** de Visual Studio Code.

---

# Trabajar en el proyecto

Antes de comenzar una nueva modificación, comprueba el estado del repositorio:

```bash
git status
```

Después actualiza tu copia local cuando sea necesario:

```bash
git pull origin main
```

La rama `main` representa la versión principal del proyecto.

Para nuevas funcionalidades o cambios importantes se recomienda trabajar mediante una rama independiente.

---

# Crear una rama para trabajar

Ejemplo:

```bash
git checkout -b mejorar-carrito
```

Otros ejemplos:

```bash
git checkout -b agregar-favoritos
```

```bash
git checkout -b historial-pedidos
```

```bash
git checkout -b corregir-menu
```

El nombre de la rama debe ser breve, descriptivo y relacionado con la tarea que se realizará.

---

# Guardar los cambios con Git

Verifica primero los archivos modificados:

```bash
git status
```

Agrega los cambios:

```bash
git add .
```

Crea un commit descriptivo:

```bash
git commit -m "Agregar productos favoritos"
```

---

# Convención de commits

Los mensajes de commit del proyecto deben redactarse por defecto:

- En español.
- De forma clara y directa.
- Indicando qué cambió.
- Sin prefijos como `feat:`, `fix:`, `style:` o similares, salvo que se solicite expresamente.

Ejemplos recomendados:

```bash
git commit -m "Agregar historial de pedidos"
```

```bash
git commit -m "Corregir navegación móvil"
```

```bash
git commit -m "Mejorar diseño del menú inferior"
```

```bash
git commit -m "Actualizar documentación para agentes de desarrollo"
```

---

# Subir una rama a GitHub

Después del commit:

```bash
git push -u origin nombre-de-la-rama
```

Ejemplo:

```bash
git push -u origin agregar-favoritos
```

La rama aparecerá en GitHub y podrá utilizarse para crear un Pull Request.

---

# Colaboradores con acceso al repositorio

Si tienes autorización para modificar el repositorio:

1. Clona el proyecto.
2. Actualiza `main`.
3. Crea una rama para la tarea.
4. Realiza las modificaciones.
5. Prueba los cambios.
6. Crea uno o varios commits claros.
7. Sube la rama.
8. Crea un Pull Request hacia `main`.

Ejemplo:

```bash
git clone https://github.com/inpev/AquiVa.git
cd AquiVa
git checkout -b nueva-funcion
```

Después de desarrollar:

```bash
git add .
git commit -m "Implementar nueva función"
git push -u origin nueva-funcion
```

Después crea un **Pull Request** hacia:

```text
main
```

---

# Colaborar sin acceso directo al repositorio

Si no tienes permisos directos puedes utilizar un **Fork**.

## Paso 1 — Crear el Fork

Ingresa a:

```text
https://github.com/inpev/AquiVa
```

Selecciona:

```text
Fork
```

## Paso 2 — Clonar tu Fork

```bash
git clone https://github.com/TU-USUARIO/AquiVa.git
```

Después:

```bash
cd AquiVa
```

## Paso 3 — Crear una rama

```bash
git checkout -b mi-propuesta
```

## Paso 4 — Realizar y probar las modificaciones

Modifica únicamente los archivos necesarios y verifica que la aplicación continúe funcionando correctamente.

## Paso 5 — Guardar los cambios

```bash
git add .
git commit -m "Implementar propuesta de mejora"
```

## Paso 6 — Subir la rama

```bash
git push -u origin mi-propuesta
```

## Paso 7 — Crear un Pull Request

Desde GitHub crea un Pull Request desde tu Fork hacia:

```text
inpev/AquiVa
```

El cambio podrá ser revisado antes de integrarse al proyecto principal.

---

# Flujo recomendado de colaboración

```text
Repositorio AquiVa
        │
        ▼
      main
        │
        ▼
 Crear nueva rama
        │
        ▼
Desarrollar funcionalidad
        │
        ▼
      Probar
        │
        ▼
      Commit
        │
        ▼
      Push
        │
        ▼
  Pull Request
        │
        ▼
 Revisión del código
        │
        ▼
      Merge
        │
        ▼
      main
```

---

# Antes de comenzar una nueva modificación

Actualiza primero la rama principal:

```bash
git checkout main
git pull origin main
```

Después crea una nueva rama cuando corresponda:

```bash
git checkout -b nombre-de-la-tarea
```

Si vas a trabajar con un agente de desarrollo, revisa también:

```text
AGENTS.md
```

Ese archivo contiene las reglas técnicas y visuales que deben preservarse.

---

# Publicación web con GitHub Pages

La publicación oficial del proyecto utiliza **GitHub Pages**.

Configuración esperada:

```text
Branch: main
Folder: /(root)
```

La aplicación publicada puede consultarse en:

```text
https://inpev.github.io/AquiVa/
```

El flujo de publicación es:

```text
Desarrollo local
      │
      ▼
     Git
      │
      ▼
    GitHub
      │
      ▼
 GitHub Pages
      │
      ▼
Aplicación publicada
```

Debido a que el proyecto se publica bajo `/AquiVa/`, los recursos deben utilizar rutas relativas, por ejemplo:

```html
./css/styles.css
./js/app.js
```

Después de una actualización, si el navegador continúa mostrando una versión antigua del CSS o JavaScript, puedes realizar una recarga forzada con:

```text
Ctrl + F5
```

---

# Compartir el proyecto

Repositorio:

```text
https://github.com/inpev/AquiVa
```

Aplicación publicada:

```text
https://inpev.github.io/AquiVa/
```

Desde el repositorio otras personas pueden:

- Revisar el código.
- Descargarlo.
- Clonarlo.
- Crear un Fork.
- Crear ramas.
- Proponer nuevas funcionalidades.
- Enviar Pull Requests.

---

# Ideas de funcionalidades que pueden desarrollarse

AquiVa está diseñado para evolucionar progresivamente.

Posibles ejercicios o mejoras futuras incluyen:

- Persistencia mediante `localStorage`.
- Favoritos persistentes.
- Carrito de compras.
- Historial de pedidos.
- Seguimiento de pedidos.
- Autenticación de usuarios.
- Perfil de usuario.
- Direcciones favoritas.
- Métodos de pago simulados.
- Notificaciones.
- Filtros avanzados.
- Historial de actividad.
- Mejoras de accesibilidad.
- Optimización responsive.
- PWA.
- Nuevas funciones propuestas por los estudiantes.

Estas posibilidades no deben implementarse automáticamente. Parte del ejercicio consiste en analizar cuál aporta verdadero valor antes de desarrollarla.

---

# Buenas prácticas

Durante el desarrollo:

- Revisar `AGENTS.md` antes de cambios relevantes realizados por agentes.
- Inspeccionar el código actual antes de modificarlo.
- Evitar cambios fuera del alcance de la tarea.
- Mantener separación entre HTML, CSS y JavaScript.
- Reutilizar los design tokens existentes.
- Preservar la identidad visual de AquiVa.
- Mantener un diseño mobile-first y responsive.
- Probar los cambios antes de subirlos.
- Mantener el código comprensible para estudiantes.
- Evitar dependencias innecesarias.
- Crear commits pequeños y claros.
- Revisar el código antes de crear un Pull Request.

---

# Seguridad

Nunca deben publicarse en GitHub:

```text
Contraseñas
API Keys
Tokens
Claves privadas
Credenciales de bases de datos
Variables de entorno sensibles
Información personal sensible
```

Si en futuras versiones el proyecto utiliza credenciales, deberán gestionarse mediante mecanismos seguros y nunca exponerse directamente en el frontend.

---

# Propósito final del proyecto

AquiVa no busca únicamente enseñar programación.

Busca desarrollar competencias relacionadas con:

- Pensamiento crítico.
- Pensamiento de producto.
- Resolución de problemas.
- Diseño UX/UI.
- Desarrollo frontend.
- Diseño responsive.
- Accesibilidad.
- Trabajo colaborativo.
- Git y GitHub.
- Evaluación de funcionalidades.
- Innovación.
- Mejora continua.

Cada estudiante puede analizar la aplicación, identificar una necesidad y desarrollar una solución que aporte valor real a la experiencia del usuario.

---

## Repositorio

```text
https://github.com/inpev/AquiVa
```

## Aplicación publicada

```text
https://inpev.github.io/AquiVa/
```

## Proyecto

**AquiVa**

Aplicación educativa para practicar desarrollo web, UX/UI, pensamiento de producto, Git, GitHub y colaboración mediante un simulador realista de aplicación móvil.