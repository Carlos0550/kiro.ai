import time
from fastapi import FastAPI, Request
from dotenv import load_dotenv

from contextlib import asynccontextmanager

from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse

from app.connections.pg_conn import engine
from app.models.base import Base
from app.routes.users import user_router
from .handlers.ValidationError import ValidationErrorHandler
from .utils.logger_config import setup_logger, get_logger

load_dotenv()

# Configurar logging
logger = setup_logger()

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Iniciando Users Service...")
    Base.metadata.create_all(bind=engine)
    logger.info("Base de datos inicializada")
    yield
    logger.info("Cerrando Users Service...")

app = FastAPI(lifespan=lifespan)

# Middleware para logging de requests
@app.middleware("http")
async def log_requests(request: Request, call_next):
    start_time = time.time()
    
    # Log del request
    client_host = request.client.host if request.client else "unknown"
    logger.info(f"REQUEST: {request.method} {request.url.path} - IP: {client_host}")
    
    response = await call_next(request)
    
    # Log del response
    process_time = time.time() - start_time
    logger.info(f"RESPONSE: {request.method} {request.url.path} - Status: {response.status_code} - Tiempo: {process_time:.3f}s")
    
    return response

app.include_router(user_router)
app.add_exception_handler(
    RequestValidationError, ValidationErrorHandler)

logger.info("Users Service configurado y listo")




