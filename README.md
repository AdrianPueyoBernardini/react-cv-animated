# Curriculum Vitae

Mi CV online, hecho con **React** y **Vite**. Presenta mi perfil, habilidades, proyectos, experiencia, educación y certificados sobre un fondo de cielo estrellado animado.

## Vista previa

Diseño en dos columnas dentro de una tarjeta central:

- **Izquierda:** Sobre mí, Habilidades y Proyectos.
- **Derecha:** Experiencia, Educación y Certificados.
- **Fondo:** estrellas en tres capas con efecto parallax (animación 100 % CSS).

## Tecnologías

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS puro (sin librerías de estilos)
- ESLint

## Estructura del proyecto

```
CurriculumVitae/
├── node_modules/          # Dependencias (se genera con npm install)
├── public/
│   └── favicon.png        # Icono de la pestaña
├── src/
│   ├── assets/
│   │   └── profile-img.jpg  # Foto de perfil
│   ├── App.css            # Estilos del CV y animación de estrellas
│   ├── App.jsx            # Componente principal con todo el contenido
│   ├── index.css          # Estilos globales
│   └── main.jsx           # Punto de entrada de React
├── .gitignore
├── eslint.config.js       # Configuración de ESLint
├── index.html             # HTML base de Vite
├── package-lock.json
├── package.json           # Dependencias y scripts
├── README.md
└── vite.config.js         # Configuración de Vite
```

## Instalación y uso

Requisitos: [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Clonar el repositorio
git clone <url-del-repo>
cd CurriculumVitae

# 2. Instalar dependencias
npm install

# 3. Arrancar en modo desarrollo
npm run dev
```

Después abre en el navegador la URL que muestra la terminal (normalmente `http://localhost:5173`).

### Otros comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve en local la versión generada con `build` |
| `npm run lint` | Revisa el código con ESLint |

## Personalizar el contenido

Todo el contenido (textos, habilidades, proyectos, experiencia, educación y certificados) está en `src/App.jsx`. Los estilos están en `src/App.css`. Para cambiar la foto, sustituye el archivo de `src/assets/` o cambia la URL de la imagen en `App.jsx`.

## Créditos

- Animación de estrellas y efecto parallax: [codepen.io/sarazond/pen/LYGbwj](https://codepen.io/sarazond/pen/LYGbwj)

## Autor

**Adrián Pueyo Bernardini**
GitHub: [@AdrianPueyoBernardini](https://github.com/AdrianPueyoBernardini)