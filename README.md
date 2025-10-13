# Reto Técnico Frontend - RIMAC Seguros

Este proyecto es una aplicación web de cotización de seguros desarrollada como parte del reto técnico para la posición de Frontend Developer en RIMAC Seguros. La aplicación permite a los usuarios ingresar sus datos, seleccionar un tipo de cobertura y ver los planes de seguro disponibles, todo gestionado a través de un robusto sistema de estado con Redux.

###  [Ver Demo en Vivo](URL_DEL_PROYECTO_DESPLEGADO)

*(Reemplazá `URL_DEL_PROYECTO_DESPLEGADO` con el enlace a tu proyecto una vez que lo hayas subido a un servicio como Netlify o Vercel.)*

---

## Características Principales

* **Flujo de Cotización Completo:** Desde el ingreso de datos del usuario hasta la selección de un plan específico.
* **Manejo de Estado Centralizado:** Uso de Redux Toolkit para una gestión de estado predecible y escalable, incluyendo los datos del usuario y los planes disponibles.
* **Validación de Formularios:** Validación en el lado del cliente para asegurar que los datos ingresados sean correctos antes de continuar.
* **Diseño Fiel al Prototipo:** Maquetación precisa basada en el diseño de Figma, respetando el sistema de grid y los componentes visuales propuestos.
* **Filtrado Dinámico de Planes:** Los planes se muestran condicionalmente según la edad del usuario, consumiendo la información de la API.
* **Cálculo de Precios Dinámico:** Aplicación de un descuento del 5% al seleccionar la opción "Para alguien más".
* **Experiencia de Usuario Mejorada:** Implementación de *skeleton loaders* para una carga de datos fluida.
* **Código Robusto y Probado:** Cobertura de pruebas unitarias y de integración para componentes, hooks y lógica de Redux, garantizando la fiabilidad del código.

---

## Tecnologías Utilizadas

* **Framework:** React 18+
* **Lenguaje:** TypeScript
* **Manejo de Estado:** Redux Toolkit
* **Librería de UI:** Material-UI (MUI)
* **Enrutamiento:** React Router
* **Estilos:** Sass (SCSS) con metodología BEM.
* **Consumo de APIs:** Axios
* **Bundler:** Vite
* **Testing:** Vitest, React Testing Library
* **Componentes Adicionales:** Swiper.js para carruseles.

---

## Estructura del Proyecto

El proyecto sigue una arquitectura **Feature-Sliced Design**, promoviendo la modularidad y escalabilidad. La lógica está organizada por funcionalidades (`features`), separando claramente el estado (Redux), la lógica de la API (`thunks`), los componentes y las páginas.
Markdown

# Reto Técnico Frontend - RIMAC Seguros

Este proyecto es una aplicación web de cotización de seguros desarrollada como parte del reto técnico para la posición de Frontend Developer en RIMAC Seguros. La aplicación permite a los usuarios ingresar sus datos, seleccionar un tipo de cobertura y ver los planes de seguro disponibles, todo gestionado a través de un robusto sistema de estado con Redux.

### ✨ [Ver Demo en Vivo](URL_DEL_PROYECTO_DESPLEGADO) ✨

*(Reemplazá `URL_DEL_PROYECTO_DESPLEGADO` con el enlace a tu proyecto una vez que lo hayas subido a un servicio como Netlify o Vercel.)*

---

## 🚀 Características Principales

* **Flujo de Cotización Completo:** Desde el ingreso de datos del usuario hasta la selección de un plan específico.
* **Manejo de Estado Centralizado:** Uso de Redux Toolkit para una gestión de estado predecible y escalable, incluyendo los datos del usuario y los planes disponibles.
* **Validación de Formularios:** Validación en el lado del cliente para asegurar que los datos ingresados sean correctos antes de continuar.
* **Diseño Fiel al Prototipo:** Maquetación precisa basada en el diseño de Figma, respetando el sistema de grid y los componentes visuales propuestos.
* **Filtrado Dinámico de Planes:** Los planes se muestran condicionalmente según la edad del usuario, consumiendo la información de la API.
* **Cálculo de Precios Dinámico:** Aplicación de un descuento del 5% al seleccionar la opción "Para alguien más".
* **Experiencia de Usuario Mejorada:** Implementación de *skeleton loaders* para una carga de datos fluida.
* **Código Robusto y Probado:** Cobertura de pruebas unitarias y de integración para componentes, hooks y lógica de Redux, garantizando la fiabilidad del código.

---

## 🛠️ Tecnologías Utilizadas

* **Framework:** React 18+
* **Lenguaje:** TypeScript
* **Manejo de Estado:** Redux Toolkit
* **Librería de UI:** Material-UI (MUI)
* **Enrutamiento:** React Router
* **Estilos:** Sass (SCSS) con metodología BEM.
* **Consumo de APIs:** Axios
* **Bundler:** Vite
* **Testing:** Vitest, React Testing Library
* **Componentes Adicionales:** Swiper.js para carruseles.

---

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura **Feature-Sliced Design**, promoviendo la modularidad y escalabilidad. La lógica está organizada por funcionalidades (`features`), separando claramente el estado (Redux), la lógica de la API (`thunks`), los componentes y las páginas.

/src
├── core/         # Interfaces globales
├── features/     # Módulos principales de la aplicación
│   ├── layout/   # Componentes de layout (Header, Footer)
│   ├── modules/  # Páginas y componentes de cada funcionalidad (Planes, Resumen)
│   └── ...
├── hooks/        # Custom hooks reutilizables (ej: useForm)
├── store/        # Configuración central de Redux
│   └── features/ # Slices y thunks de cada módulo
├── scss/         # Archivos SCSS globales
└── ...


---

## 🏁 Cómo Empezar

Para correr este proyecto en tu máquina local, seguí estos pasos:

### **1. Clonar el Repositorio**

```bash
git clone https://github.com/SOFTTEK-POSTULACION/softtek.frontend/tree/BESTRADAS
cd nombre-del-directorio
```

## **2. Instalar Dependencias**
```bash
npm install
```

## **3. Ejecutar el Proyecto en Modo Desarrollo**
```bash
npm run dev
```

## **4. Correr las Pruebas**
```bash
npm test
```

Esto iniciará Vitest en modo "watch", volviendo a correr las pruebas automáticamente cada vez que se detecte un cambio en los archivos.