import uuid
from fastapi.responses import JSONResponse
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from app.schemas.user_schema import UserPayload
from app.models.users import Users
from app.utils.logger_config import get_logger

logger = get_logger("user_service")

def create_user(
    data: UserPayload,
    db: Session
) -> bool | JSONResponse:
    try:
        logger.info(f"Creando usuario: {data.user_email}")
        
        new_user = Users(
            user_id=uuid.uuid4(),  
            user_name=data.user_name,
            user_email=data.user_email,
            user_password=data.user_password
        )

        db.add(new_user)
        db.commit()
        
        logger.info(f"Usuario creado exitosamente: {data.user_email}")

        return True

    except SQLAlchemyError as e:
        db.rollback()
        logger.error(f"Error al crear usuario {data.user_email}: {str(e)}")
        return JSONResponse(
            status_code=500,
            content={
                "details": "Error interno del servidor al guardar el nuevo usuario.",
                "error": str(e)  
            }
        )
