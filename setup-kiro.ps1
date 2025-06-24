# Servicios Python
$pythonServices = @(
    "users_service",
    "reminders_service",
    "finance_service",
    "insights_service",
    "scheduler_service",
    "gateway_api"
)

# Dependencias comunes a servicios Python
$commonDeps = @(
    "fastapi",
    "uvicorn",
    "python-dotenv",
    "psycopg2-binary",
    "sqlalchemy",
    "python-jose[cryptography]",
    "passlib[bcrypt]",
    "PyJWT",
    "redis",
    "pydantic",
    "aiohttp"
)

# Dependencias específicas por servicio
$specialDeps = @{
    "insights_service" = @("pandas", "scikit-learn", "sentence-transformers");
    "scheduler_service" = @("celery");
}

# Crear servicios Python
foreach ($service in $pythonServices) {
    Write-Host "Creando $service (Python)..."

    mkdir $service
    Set-Location $service

    python -m venv venv
    .\venv\Scripts\Activate.ps1

    pip install $commonDeps

    if ($specialDeps.ContainsKey($service)) {
        pip install $specialDeps[$service]
    }

    pip freeze | Out-File -Encoding ascii requirements.txt

    deactivate
    Set-Location ..
}

# Crear notifications_service en Node.js con Baileys
$notificationService = "notifications_service"
Write-Host "Creando $notificationService (Node.js)..."

mkdir $notificationService
Set-Location $notificationService

# Inicializar proyecto Node + TypeScript
npm init -y
npm install express cors dotenv baileys
npm install -D typescript ts-node @types/node @types/express

# Crear tsconfig.json
npx tsc --init

# Crear estructura mínima
mkdir src
New-Item -Path .\src\index.ts -ItemType File | Out-Null

# Esqueleto inicial del index.ts
@'
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import makeBot from "./makeBot";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => res.send("Notifications Service OK"));

makeBot(); // Iniciá el bot de WhatsApp con Baileys

app.listen(process.env.PORT || 3000, () => {
  console.log("Notifications service running...");
});
'@ | Out-File -Encoding utf8 .\src\index.ts

Set-Location ..
Write-Host "Todos los microservicios fueron creados correctamente."
