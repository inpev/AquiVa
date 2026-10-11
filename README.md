# AquiVa

AquiVa es un simulador web de una aplicación móvil de pedidos, desarrollado con **HTML5, CSS3 y JavaScript puro**.

El proyecto tiene un propósito educativo: permitir que los estudiantes analicen una aplicación funcional, identifiquen oportunidades de mejora y propongan nuevas funcionalidades aplicando principios de desarrollo web, experiencia de usuario, diseño de producto y control de versiones con Git y GitHub.

---

## Objetivo educativo

AquiVa ha sido diseñado como una aplicación funcional pero deliberadamente incompleta.

El objetivo es que los estudiantes puedan:

- Analizar la interfaz y experiencia de usuario.
- Identificar funcionalidades faltantes.
- Detectar procesos que pueden simplificarse.
- Proponer mejoras que aporten valor al usuario.
- Implementar nuevas funciones.
- Practicar HTML, CSS y JavaScript.
- Utilizar Git como sistema de control de versiones.
- Trabajar colaborativamente mediante GitHub.
- Aprender a utilizar ramas, commits y Pull Requests.
- Comprender un flujo básico de desarrollo utilizado en proyectos reales.

La aplicación puede evolucionar progresivamente durante las clases.

---

## Tecnologías utilizadas

El proyecto utiliza tecnologías web fundamentales:

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Vercel para despliegue web

No requiere frameworks ni dependencias externas para ejecutarse.

---

## Estructura del proyecto

```text
AquiVa/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── app.js
│
├── README.md
│
└── vercel.json
```

### `index.html`

Contiene la estructura principal de la aplicación.

### `css/styles.css`

Contiene los estilos visuales, diseño responsive y presentación de la interfaz.

### `js/app.js`

Contiene la lógica e interacciones de la aplicación.

### `README.md`

Contiene la documentación general del proyecto.

### `vercel.json`

Contiene la configuración utilizada para publicar la aplicación en Vercel.

---

# Ejecutar AquiVa en una computadora

## Opción 1 — Descargar el proyecto

Desde GitHub puedes seleccionar:

```text
Code → Download ZIP
```

Después:

1. Descomprime el archivo.
2. Ingresa a la carpeta del proyecto.
3. Abre el archivo:

```text
index.html
```

en tu navegador.

---

## Opción 2 — Clonar el repositorio con Git

Si tienes Git instalado:

```bash
git clone https://github.com/inpev/AquiVa.git
```

Ingresa a la carpeta:

```bash
cd AquiVa
```

Luego abre el proyecto utilizando Visual Studio Code:

```bash
code .
```

Puedes ejecutar `index.html` directamente en el navegador.

También puedes utilizar la extensión **Live Server** de Visual Studio Code.

---

# Trabajar en el proyecto

Antes de comenzar a realizar cambios es recomendable actualizar el proyecto.

```bash
git pull origin main
```

La rama `main` representa la versión principal del proyecto.

No es recomendable desarrollar nuevas funcionalidades directamente sobre `main`.

---

# Crear una rama para trabajar

Para cada funcionalidad o mejora crea una nueva rama.

Ejemplo:

```bash
git checkout -b feature/mejorar-carrito
```

Otros ejemplos:

```bash
git checkout -b feature/agregar-favoritos
```

```bash
git checkout -b feature/historial-pedidos
```

```bash
git checkout -b fix/corregir-menu
```

Esto permite desarrollar cambios sin afectar inmediatamente la versión principal.

---

# Guardar los cambios con Git

Después de modificar el proyecto puedes verificar los archivos cambiados:

```bash
git status
```

Agregar los cambios:

```bash
git add .
```

Crear un commit:

```bash
git commit -m "feat: agregar nueva funcionalidad"
```

Ejemplo:

```bash
git commit -m "feat: agregar productos favoritos"
```

---

# Convención recomendada para los commits

Puedes utilizar los siguientes prefijos:

```text
feat: nueva funcionalidad

fix: corrección de un error

style: cambios visuales o CSS

refactor: reorganización del código sin modificar su comportamiento

docs: cambios en documentación

test: implementación o modificación de pruebas

chore: mantenimiento o configuración
```

Ejemplos:

```bash
git commit -m "feat: agregar historial de pedidos"
```

```bash
git commit -m "fix: corregir navegación móvil"
```

```bash
git commit -m "style: mejorar diseño del menú inferior"
```

---

# Subir una rama a GitHub

Después de realizar el commit:

```bash
git push -u origin nombre-de-la-rama
```

Ejemplo:

```bash
git push -u origin feature/agregar-favoritos
```

La rama aparecerá en GitHub.

---

# Colaboradores con acceso al repositorio

Si tienes autorización para modificar directamente el repositorio, puedes:

1. Clonar el proyecto.
2. Crear una rama.
3. Realizar tus modificaciones.
4. Crear uno o varios commits.
5. Subir la rama.
6. Crear un Pull Request.

Ejemplo:

```bash
git clone https://github.com/inpev/AquiVa.git
```

```bash
cd AquiVa
```

```bash
git checkout -b feature/nueva-funcion
```

Después de desarrollar:

```bash
git add .
```

```bash
git commit -m "feat: implementar nueva funcion"
```

```bash
git push -u origin feature/nueva-funcion
```

Después debes ingresar a GitHub y crear un **Pull Request** hacia la rama:

```text
main
```

---

# Colaborar sin tener acceso al repositorio

Si no tienes permisos directos sobre el repositorio puedes utilizar un **Fork**.

## Paso 1 — Crear el Fork

Ingresa al repositorio:

```text
https://github.com/inpev/AquiVa
```

Selecciona:

```text
Fork
```

GitHub creará una copia del proyecto en tu cuenta.

---

## Paso 2 — Clonar tu Fork

Ejemplo:

```bash
git clone https://github.com/TU-USUARIO/AquiVa.git
```

Después:

```bash
cd AquiVa
```

---

## Paso 3 — Crear una rama

```bash
git checkout -b feature/mi-propuesta
```

---

## Paso 4 — Realizar las modificaciones

Modifica los archivos necesarios utilizando tu editor de código.

---

## Paso 5 — Guardar los cambios

```bash
git add .
```

```bash
git commit -m "feat: implementar propuesta de mejora"
```

---

## Paso 6 — Subir los cambios

```bash
git push -u origin feature/mi-propuesta
```

---

## Paso 7 — Crear un Pull Request

Desde GitHub podrás crear un:

```text
Pull Request
```

desde tu Fork hacia:

```text
inpev/AquiVa
```

El cambio podrá ser revisado antes de integrarse al proyecto principal.

---

# Flujo recomendado de colaboración

El flujo recomendado es:

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

Esto evita modificar directamente la versión estable.

---

# Antes de comenzar una nueva modificación

Siempre actualiza primero tu repositorio local:

```bash
git checkout main
```

```bash
git pull origin main
```

Después crea la nueva rama:

```bash
git checkout -b feature/nueva-funcionalidad
```

---

# Compartir el proyecto

El repositorio puede compartirse utilizando:

```text
https://github.com/inpev/AquiVa
```

Desde allí otras personas podrán:

- Revisar el código.
- Descargarlo.
- Clonarlo.
- Crear un Fork.
- Crear nuevas funcionalidades.
- Enviar propuestas mediante Pull Requests.

---

# Publicación web

AquiVa también puede publicarse en Internet utilizando **Vercel**.

El proyecto ya contiene:

```text
vercel.json
```

por lo que puede desplegarse como un sitio web estático.

El flujo puede quedar de la siguiente manera:

```text
Desarrollador
     │
     ▼
   GitHub
     │
     ▼
   Vercel
     │
     ▼
Aplicación publicada
```

Cuando Vercel está conectado al repositorio, cada actualización aprobada en `main` puede generar automáticamente una nueva versión de la aplicación.

---

# Ideas de funcionalidades que pueden implementarse

El proyecto está diseñado para evolucionar.

Algunas posibles mejoras son:

- Persistencia utilizando `localStorage`.
- Sistema de favoritos.
- Historial de pedidos.
- Seguimiento de pedidos.
- Autenticación de usuarios.
- Perfil de usuario.
- Carrito persistente.
- Sistema de búsqueda.
- Filtros.
- Categorías.
- Notificaciones.
- Direcciones favoritas.
- Métodos de pago simulados.
- Historial de actividad.
- Mejoras de accesibilidad.
- Mejoras de UX/UI.
- Optimización responsive.
- Nuevas funcionalidades propuestas por los estudiantes.

Estas son únicamente posibilidades.

El objetivo principal es analizar qué funcionalidad realmente genera valor antes de implementarla.

---

# Buenas prácticas

Durante el desarrollo:

- No trabajar directamente sobre `main`.
- Crear una rama para cada cambio importante.
- Utilizar nombres descriptivos para las ramas.
- Crear commits pequeños y comprensibles.
- Probar los cambios antes de subirlos.
- Evitar modificar archivos que no sean necesarios.
- Mantener el código organizado.
- Mantener separación entre HTML, CSS y JavaScript.
- Comentar únicamente las partes que requieran explicar intención o decisiones importantes.
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
Información personal
```

Si en futuras versiones el proyecto utiliza credenciales, estas deberán manejarse mediante variables de entorno y mecanismos seguros.

---

# Propósito del proyecto

AquiVa no busca únicamente enseñar programación.

Busca desarrollar competencias relacionadas con:

- Pensamiento crítico.
- Pensamiento de producto.
- Resolución de problemas.
- Diseño UX/UI.
- Desarrollo frontend.
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

## Proyecto

**AquiVa**

Aplicación educativa para practicar desarrollo web, UX/UI, pensamiento de producto y colaboración utilizando Git y GitHub.