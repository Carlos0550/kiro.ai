# Kiro.ai – Tu Asistente Personal para Organizar la Vida y la Plata

**Kiro.ai** es una plataforma inteligente pensada exclusivamente para personas que quieren tener más control y claridad sobre sus recordatorios, finanzas y pequeñas obligaciones cotidianas. Todo con un enfoque cercano, humano y práctico. El sistema se basa en una arquitectura de microservicios, cada uno con una responsabilidad específica.

---

## 🔧 Arquitectura de Microservicios

### `users_service`

Gestiona todo lo relacionado con usuarios.
Se encarga del registro, autenticación, sesiones y configuración de preferencias personales.
Permite elegir el modo de interacción (proactivo, esencial o educativo).

---

### `reminders_service`

Encargado de la lógica de recordatorios.
Permite crear recordatorios personales como "llevar el auto al mecánico" o "pagarle a Ana por las uñas".
Gestiona la recurrencia y los momentos adecuados para activar esos recordatorios.

---

### `notifications_service`

Microservicio Node.js responsable del envío de notificaciones personales.
Envía mensajes por WhatsApp, correo o cualquier otro canal para recordarte lo que importa.
Usa la librería Baileys para hablarte directo al WhatsApp.

---

### `finance_service`

Te ayuda a manejar tu plata de forma más inteligente.
Registrá tus ingresos, tus gastos (diarios o mensuales), deudas y objetivos.
Identifica en qué se te va la plata, detecta gastos hormiga y te ayuda a ahorrar para lo que realmente querés.

---

### `insights_service`

Analiza tus hábitos financieros y te tira la posta.
Genera resúmenes y consejos como "gastaste 30% más en comida afuera este mes" o "si cancelás Disney+ llegás más rápido al viaje".
Se integra con tus modos de interacción para que el asistente se adapte a vos.

---

### `scheduler_service`

Maneja tareas programadas y eventos temporales.
Es el que se encarga de que los recordatorios lleguen justo a tiempo o que los análisis se actualicen automáticamente.
Sin este, nada pasaría cuando tiene que pasar.

---

### `gateway_api`

Puerta de entrada al sistema.
Recibe todas las peticiones desde el frontend y las enruta al microservicio que corresponda.
Controla acceso, valida identidades y registra lo que pasa.

---

## 🌟 Modos de interacción

Kiro.ai te habla como vos quieras:

* **Modo “Te tengo de la mano”**: te recuerda todo, te avisa de cualquier cambio, te da sugerencias y hasta te reta si gastaste de más.
* **Modo “Solo lo esencial”**: te avisa solo lo importante, como vencimientos o cosas urgentes.
* **Modo “Coach financiero”**: te explica con ejemplos cómo mejorar tus finanzas semana a semana, sin vueltas.

---

## 📌 Propósito

Kiro.ai existe para ayudarte a no colgarte más con pagos, para que entiendas mejor en qué se te va la plata y para que puedas alcanzar tus objetivos. Es tu compañero digital, humano, realista y siempre al pie del cañón.

---

## 📂 Organización de carpetas

```
kiro.ai/
├── users_service/             # Servicio de usuarios (Python)
├── reminders_service/         # Lógica de recordatorios (Python)
├── notifications_service/     # Envío de mensajes por WhatsApp (Node.js)
├── finance_service/           # Gestión financiera personal (Python)
├── insights_service/          # Análisis e insights financieros (Python)
├── scheduler_service/         # Tareas programadas (Python)
├── gateway_api/               # API Gateway central (Python)
└── README.md
```

---

Cada servicio tiene su propio entorno, dependencias y despliegue independiente.

La comunicación entre ellos se hace por HTTP interno o colas de mensajes, según convenga.

---

🚀 Este proyecto está en desarrollo. Pronto vas a tener al mejor asistente personal digital hablándote como si fuera un amigo que te quiere ver bien.
