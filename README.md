# AquiVa

AquiVa es un simulador web de una aplicación móvil de pedidos construido con **HTML5, CSS3 y JavaScript puro**.

El proyecto tiene un enfoque educativo: permite analizar una aplicación funcional pero deliberadamente incompleta para practicar pensamiento de producto, UX/UI, desarrollo frontend y mejora incremental de software.

## Objetivo educativo

AquiVa está diseñado para que los estudiantes puedan:

- Analizar la experiencia de usuario de una aplicación móvil.
- Detectar funciones faltantes o procesos que pueden optimizarse.
- Proponer nuevas funcionalidades que aporten valor.
- Mejorar interfaz, navegación y accesibilidad.
- Practicar HTML, CSS y JavaScript.
- Aprender a trabajar colaborativamente con Git y GitHub.
- Implementar mejoras incrementales sin reconstruir toda la aplicación.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Vercel para despliegue web

## Estructura del proyecto

```text
AquiVa/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── README.md
└── vercel.json
```

## Ejecutar el proyecto localmente

No es necesario instalar dependencias.

### Opción 1: abrir directamente

Abre el archivo:

```text
index.html
```

en cualquier navegador moderno.

### Opción 2: utilizar Live Server

Si utilizas Visual Studio Code, puedes instalar la extensión **Live Server** y ejecutar el proyecto desde `index.html`.

## Clonar el repositorio

Para descargar una copia del proyecto mediante Git:

```bash
git clone https://github.com/inpev/AquiVa.git
```

Luego entra en la carpeta:

```bash
cd AquiVa
```

## Flujo recomendado para realizar cambios

Para evitar modificar directamente la rama principal, cada mejora debe desarrollarse en una rama independiente.

Primero actualiza tu copia local:

```bash
git checkout main
git pull origin main
```

Crea una nueva rama:

```bash
git checkout -b feature/nombre-de-la-mejora
```

Ejemplo:

```bash
git checkout -b feature/favoritos
```

Realiza los cambios necesarios y posteriormente revisa el estado del repositorio:

```bash
git status
```

Agrega los archivos modificados:

```bash
git add .
```

Crea el commit:

```bash
git commit -m "feat: agregar sistema de favoritos"
```

## Subir cambios si eres colaborador autorizado

Los colaboradores con permisos de escritura pueden subir su rama directamente al repositorio:

```bash
git push -u origin feature/nombre-de-la-mejora
```

Después deben abrir un **Pull Request** en GitHub para solicitar que sus cambios sean integrados en `main`.

No se recomienda trabajar directamente sobre `main`.

## Contribuir si no tienes permisos de escritura

Cualquier persona puede colaborar sin necesidad de tener acceso directo al repositorio.

### 1. Crear un Fork

En GitHub, presiona el botón **Fork** para crear una copia de AquiVa en tu propia cuenta.

### 2. Clonar tu Fork

```bash
git clone https://github.com/TU-USUARIO/AquiVa.git
cd AquiVa
```

### 3. Crear una rama

```bash
git checkout -b feature/nombre-de-la-mejora
```

### 4. Realizar los cambios

Modifica el proyecto y comprueba que siga funcionando correctamente.

### 5. Crear el commit

```bash
git add .
git commit -m "feat: descripción breve de la mejora"
```

### 6. Subir la rama a tu Fork

```bash
git push -u origin feature/nombre-de-la-mejora
```

### 7. Crear un Pull Request

Desde GitHub, abre un **Pull Request** desde tu Fork hacia:

```text
inpev/AquiVa -> main
```

Describe claramente:

- Qué problema encontraste.
- Qué cambio realizaste.
- Qué mejora aporta.
- Cómo puede probarse.

El Pull Request podrá ser revisado antes de integrar los cambios al proyecto principal.

## Convención recomendada para commits

Utiliza mensajes claros y descriptivos.

```text
feat: nueva funcionalidad
fix: corrección de error
style: cambios visuales o de CSS
refactor: reorganización interna sin cambiar comportamiento
docs: cambios en documentación
test: incorporación o modificación de pruebas
chore: mantenimiento o configuración
```

Ejemplos:

```bash
git commit -m "feat: agregar historial de pedidos"
git commit -m "fix: corregir navegación del menú inferior"
git commit -m "style: mejorar diseño responsive del formulario"
```

## Publicar AquiVa en Internet

GitHub almacena y versiona el código fuente. Para que la aplicación pueda utilizarse desde un navegador mediante una URL pública, el proyecto puede desplegarse en **Vercel**.

El repositorio ya incluye `vercel.json` y está preparado como aplicación web estática.

### Despliegue con Vercel

1. Ingresa a Vercel.
2. Inicia sesión con tu cuenta de GitHub.
3. Selecciona **Add New Project**.
4. Importa el repositorio `inpev/AquiVa`.
5. Mantén la configuración del proyecto como sitio estático.
6. Presiona **Deploy**.

Después del primer despliegue, Vercel quedará conectado al repositorio.

Cuando se integren nuevos cambios en la rama configurada para producción, Vercel podrá generar automáticamente una nueva versión de la aplicación.

Esto permite trabajar con el flujo:

```text
Código local
   ↓
Git
   ↓
GitHub
   ↓
Pull Request
   ↓
main
   ↓
Vercel
   ↓
Aplicación publicada
```

## Compartir el proyecto

Puedes compartir el repositorio para que otras personas estudien, descarguen o propongan cambios:

```text
https://github.com/inpev/AquiVa
```

Una vez desplegada la aplicación, también podrás compartir la URL pública generada por Vercel para que cualquier persona pueda utilizarla desde su navegador sin descargar el código.

## Buenas prácticas de colaboración

Antes de enviar una contribución:

- Actualiza tu rama desde `main`.
- Evita modificar archivos que no estén relacionados con tu mejora.
- Prueba la aplicación antes de hacer `push`.
- No subas contraseñas, tokens, claves privadas ni archivos `.env`.
- Utiliza nombres de ramas descriptivos.
- Utiliza commits pequeños y comprensibles.
- Explica claramente el propósito de tu Pull Request.

## Ideas de mejoras para estudiantes

La aplicación es deliberadamente incompleta. Algunas mejoras que pueden analizarse o implementarse son:

- Persistencia con `localStorage`.
- Favoritos persistentes.
- Historial de pedidos.
- Seguimiento de pedidos.
- Autenticación.
- Gestión de perfil.
- Búsqueda y filtros.
- Mejoras de accesibilidad.
- Optimización responsive.
- Nuevas funciones orientadas a reducir pasos y mejorar la experiencia del usuario.

El objetivo no es solamente agregar funciones, sino evaluar **qué problema resuelve cada función, cuánto valor aporta y cómo mejora la experiencia del usuario**.

## Autor y propósito

AquiVa forma parte de una experiencia educativa orientada al aprendizaje práctico del desarrollo web, UX/UI, pensamiento de producto y colaboración mediante herramientas profesionales de desarrollo de software.
