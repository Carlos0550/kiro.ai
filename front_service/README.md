# Kiro.ai – Frontend

Este es el frontend oficial de **Kiro.ai**, un asistente personal digital diseñado para personas reales. Ofrece funcionalidades inteligentes para organizar recordatorios, finanzas personales, hábitos y modos de interacción únicos.

---

## 🧠 Tecnologías utilizadas

* **React** + **TypeScript**
* **Vite** como bundler
* **Mantine** para la UI
* **Framer Motion** para animaciones modernas
* **TanStack Query** para manejo de datos
* **Zod**, **Day.js**, **Axios**, **clsx**, y más (ver `package.json`)

---

## 📁 Estructura de carpetas

```bash
src/
├── assets/          # Imágenes, íconos, logos, fuentes
├── components/      # Componentes UI genéricos y reutilizables
├── context/         # Provider global
├── features/        # Organización por funcionalidades principales
│   ├── auth/            # Registro, login, validaciones
│   ├── finance/         # Gastos, ingresos, presupuestos, objetivos
│   ├── reminders/       # Recordatorios personales y financieros
│   ├── insights/        # Análisis automáticos e informes
│   ├── habits/          # Registro de hábitos y motivación
│   └── modes/           # Modo "Te tengo de la mano", etc.
├── hooks/           # Custom hooks compartidos (useDebounce, etc.)
├── services/        # Lógica de conexión a APIs / Axios
├── store/           # Estado global (Zustand, Redux u otro)
├── types/           # Tipados TypeScript compartidos
├── utils/           # Funciones auxiliares (formato fechas, etc.)
├── App.tsx          # Entrada principal
├── main.tsx         # Render del React root
└── vite-env.d.ts    # Tipos de entorno Vite
```

---

## 🧭 Funcionalidades principales

* Cambiar entre modos de uso (modo "Te tengo de la mano", "Solo lo esencial", "Coach financiero").
* Visualizar recordatorios activos, vencidos y nuevos por agregar.
* Cargar gastos, ingresos y metas financieras.
* Recibir insights sobre gastos hormiga o hábitos de consumo.
* Notificaciones internas (y eventualmente por WhatsApp).

---

## ✅ Cosas importantes a recordar

* **Cada carpeta dentro de `features/` es un dominio funcional completo**, y puede tener su `pages/`, `components/`, `hooks/`, etc.
* **El estado global** (ej. usuario logueado, modo seleccionado) debe ir en `store/` o `context/`.
* **Evitá lógica duplicada**: reusá componentes de `components/` y funciones de `utils/`.

