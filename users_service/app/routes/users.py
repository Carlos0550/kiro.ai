from  fastapi import APIRouter, Depends, HTTPException, Request
from fastapi.responses import JSONResponse
from pydantic import InstanceOf
from sqlalchemy.orm import Session
from starlette.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_409_CONFLICT
import json

from app.connections.pg_conn import SessionLocal
from app.constants.error_contants import user_already_exists
from app.models.users import Users
from app.schemas.user_schema import ErrorResponseSchema, UserPayload, UserResponseSchema
from app.services.user_service import create_user
from app.utils.logger_config import get_logger

logger = get_logger("users_router")

user_router = APIRouter(
    prefix="/users",
    tags=["Users"]
)

def get_DB():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@user_router.post("/new-user", 
    response_model=UserResponseSchema,
    responses={
            409: {"model": ErrorResponseSchema},
            422: {"description": "Error de validación de entrada."},
            500: {"model": ErrorResponseSchema},
        }
)
async def create_user_router(
    data: UserPayload,
    db: Session = Depends(get_DB)
):

    already_exists = db.query(Users).filter(Users.user_email == data.user_email).first()

    if already_exists:
        logger.warning(f"Intento de crear usuario duplicado: {data.user_email}")
        return JSONResponse(
            status_code=HTTP_409_CONFLICT,
            content={
                "details": "Ya existe una cuenta con este correo.",
                "error": user_already_exists
            }
        )

    result = create_user(data, db)

    if result is True:
        logger.info(f"Usuario creado exitosamente: {data.user_email}")
        return JSONResponse(
            status_code=HTTP_200_OK,
            content=UserResponseSchema(
                details="Usuario creado éxitosamente."
                ).model_dump()
        )

    logger.error(f"Error en la creacion del usuario: {data.user_email}")
    return result
