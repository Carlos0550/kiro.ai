import uuid
from fastapi.responses import JSONResponse
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from app.schemas.user_schema import CreateUserPayload, ErrorResponseSchema, LoginUserPayload, LoginUserResponseSchema, UserResponseSchema
from app.models.users import Users
from app.utils.logger_config import get_logger


from app.utils.jwt_config import create_access_token, get_password_hash, verify_password
from app.constants.error_contants import invalid_password, jwt_not_successfull, user_not_exists

logger = get_logger("user_service")

def create_user(
    data: CreateUserPayload,
    db: Session
) -> bool | JSONResponse:
    try:
        logger.info(f"Creando usuario: {data.user_email}")
        
        hashed_password = get_password_hash(data.user_password)
        new_user = Users(
            user_id=uuid.uuid4(),  
            user_name=data.user_name.title(),
            user_email=data.user_email,
            user_password=hashed_password
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
            content=ErrorResponseSchema(
                details= "Error interno del servidor al guardar el nuevo usuario.",
                error = str(e)  
            )
        )

def login_user(
    data: LoginUserPayload,
    db: Session
):

    user_data = db.query(Users).filter(Users.user_email == data.user_email).first()

    if not user_data:
        return JSONResponse(
            status_code=500,
            content=ErrorResponseSchema(
                details="El usuario ingresado no existe.",
                error=user_not_exists
            )
        )
    
    if not verify_password(data.user_password, str(user_data.user_password)):
        return JSONResponse(
            status_code=401,
            content=ErrorResponseSchema(
                details="La contraseña ingresada no es válida.",
                error=invalid_password
            ).model_dump()
        )

    access_token = create_access_token(user_data)

    if not access_token:
        return JSONResponse(
            status_code=500,
            content=ErrorResponseSchema(
                details="Error al iniciar sesión.",
                error=jwt_not_successfull
            )
        )
    
    data_response = LoginUserResponseSchema(
        detail=f"Bienvenido nuevamente, {str(user_data.user_name)}",
        user_id=str(user_data.user_id),
        user_name=str(user_data.user_name),
        user_email=str(user_data.user_emai),
        access_token=access_token
    )

    return JSONResponse(
        status_code=200,
        content=data_response.model_dump()
    )