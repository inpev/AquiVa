# AGENTS.md

## 1. Identidad del proyecto

**Nombre:** AquiVa

**Repositorio principal:**
`https://github.com/inpev/AquiVa`

**Tipo de proyecto:**
Simulador web educativo de una aplicación móvil de pedidos.

**Tecnologías actuales:**

- HTML5
- CSS3
- JavaScript puro
- Git
- GitHub
- GitHub Pages
- Vercel como alternativa de despliegue

El proyecto no utiliza actualmente frameworks frontend, gestores de estado, bibliotecas de componentes ni dependencias externas obligatorias.

---

# 2. Propósito del proyecto

AquiVa es una aplicación funcional pero deliberadamente incompleta.

No debe entenderse solamente como una aplicación de pedidos.

Su finalidad principal es educativa.

El proyecto permite que los estudiantes:

- analicen una aplicación existente;
- identifiquen problemas reales de UX/UI;
- detecten funciones faltantes;
- propongan mejoras;
- evalúen qué funcionalidades aportan valor;
- implementen nuevas funciones;
- practiquen HTML, CSS y JavaScript;
- utilicen Git y GitHub;
- creen ramas;
- realicen commits;
- trabajen con Pull Requests;
- entiendan un flujo real de desarrollo de software;
- practiquen pensamiento de producto;
- desarrollen pensamiento crítico y creativo.

Los agentes deben preservar este propósito pedagógico.

---

# 3. Principio pedagógico fundamental

AquiVa debe mantenerse:

**funcional + realista + incompleta estratégicamente.**

No se debe convertir automáticamente en una aplicación totalmente terminada.

Las funciones faltantes son parte del diseño pedagógico.

Antes de implementar una nueva funcionalidad, el agente debe distinguir entre:

1. funcionalidad necesaria para corregir un defecto;
2. mejora solicitada expresamente;
3. funcionalidad que debe mantenerse pendiente como oportunidad educativa.

Ejemplos de funciones que pueden quedar deliberadamente pendientes:

- autenticación;
- persistencia con localStorage;
- historial de pedidos;
- carrito persistente;
- seguimiento de pedidos;
- perfil completo;
- métodos de pago;
- favoritos persistentes;
- notificaciones;
- almacenamiento remoto.

No implementar estas funciones automáticamente salvo solicitud explícita.

---

# 4. Fuente de verdad

Antes de realizar modificaciones:

1. inspeccionar los archivos reales del repositorio;
2. comprobar el estado vigente del código;
3. no reconstruir el proyecto desde memoria;
4. no asumir que una versión anterior sigue siendo válida;
5. modificar únicamente lo necesario.

El código del repositorio es la fuente de verdad técnica.

Este archivo `AGENTS.md` define las convenciones, principios y restricciones operativas.

---

# 5. Estructura actual del proyecto

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
├── AGENTS.md
│
└── vercel.json