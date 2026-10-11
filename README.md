# Evaluación Final Transversal (EFT) - Desarrollo Frontend I (PFY2201)

Sitio web responsivo y aplicación modular desarrollada para una tienda de venta de videojuegos online, cumpliendo con los estándares de calidad de la industria y los requerimientos académicos de Duoc UC.

---

## 🚀 Características Principales

- **Arquitectura Modular en React:** La aplicación está dividida en componentes reutilizables (`Navbar`, `Catalog`, `ContactForm`, `Footer`) para facilitar su mantenimiento y escalabilidad.
- **Gestión de Estado y Props:** Uso de `useState` para el manejo interactivo de categorías y filtros en tiempo real, pasando información entre componentes mediante `props`.
- **Carga Asíncrona de Datos (`useEffect`):** Los productos del catálogo se cargan dinámicamente desde un archivo de datos externo en formato JSON (`public/games.json`).
- **Diseño Responsivo con Bootstrap 5:** Maquetación adaptativa utilizando grillas, Flexbox y componentes visuales coherentes (tarjetas, barras de navegación y alertas).
- **Sistema de Puntuación:** Tarjetas con calificación dinámica basada en estrellas mediante Bootstrap Icons.
- **Validación de Formularios:** Control de campos obligatorios y verificación del formato de correo electrónico antes del envío de mensajes al administrador.

---

## 🛠️ Tecnologías Utilizadas

- **React 19** (con Vite)
- **Bootstrap 5.3.3** & **Bootstrap Icons**
- **JavaScript (ES6+)**
- **HTML5 Semántico** & **CSS3**

---

## 📂 Estructura del Proyecto

```text
tienda-videojuegos/
├── public/
│   └── games.json
├── src/
│   ├── components/
│   │   ├── Catalog.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md

⚙️ Instrucciones de Instalación y Ejecución Local
Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

Clonar el repositorio:

Bash
git clone [https://github.com/tu-usuario/nombre-repositorio.git](https://github.com/tu-usuario/nombre-repositorio.git)
Entrar a la carpeta del proyecto:

Bash
cd tienda-videojuegos
Instalar las dependencias (React y Bootstrap):

Bash
npm install
Ejecutar el servidor de desarrollo:

Bash
npm run dev
Abre tu navegador e ingresa a http://localhost:5173/ para visualizar la aplicación en funcionamiento.