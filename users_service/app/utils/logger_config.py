import logging
import logging.handlers
import os
import sys
from datetime import datetime

def setup_logger():
    """
    Configura el sistema de logging para el Users Service
    """
    # Crear directorio de logs si no existe
    log_dir = "logs"
    if not os.path.exists(log_dir):
        os.makedirs(log_dir)
    
    # Configurar el logger principal
    logger = logging.getLogger()
    logger.setLevel(logging.INFO)
    
    # Limpiar handlers existentes
    for handler in logger.handlers[:]:
        logger.removeHandler(handler)
    
    # Formato para los logs
    formatter = logging.Formatter(
        '%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S'
    )
    
    # Handler para consola con encoding UTF-8
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setLevel(logging.INFO)
    console_handler.setFormatter(formatter)
    logger.addHandler(console_handler)
    
    # Handler para archivo de logs general
    file_handler = logging.handlers.RotatingFileHandler(
        f"{log_dir}/users_service.log",
        maxBytes=10*1024*1024,  # 10MB
        backupCount=5,
        encoding='utf-8'  # Forzar UTF-8
    )
    file_handler.setLevel(logging.INFO)
    file_handler.setFormatter(formatter)
    logger.addHandler(file_handler)
    
    # Handler para errores
    error_handler = logging.handlers.RotatingFileHandler(
        f"{log_dir}/users_service_errors.log",
        maxBytes=10*1024*1024,  # 10MB
        backupCount=5,
        encoding='utf-8'  # Forzar UTF-8
    )
    error_handler.setLevel(logging.ERROR)
    error_handler.setFormatter(formatter)
    logger.addHandler(error_handler)
    
    # Logger específico para el servicio
    service_logger = logging.getLogger("users_service")
    service_logger.info("🔧 Sistema de logging configurado")
    
    return service_logger

def get_logger(name: str = ""):
    """
    Obtiene un logger configurado
    """
    if name:
        return logging.getLogger(f"users_service.{name}")
    return logging.getLogger("users_service") 