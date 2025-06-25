from fastapi import Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from starlette.status import HTTP_422_UNPROCESSABLE_ENTITY
from starlette.responses import Response

async def ValidationErrorHandler(
    request: Request,
    exc: Exception  
) -> Response:

    if isinstance(exc, RequestValidationError):
        errors = exc.errors()
        user_msg  = errors[0]["msg"] if errors else "Datos inválidos."
        technical_code = errors[0].get("type", "VALIDATION_ERROR")
        return JSONResponse(
            status_code=HTTP_422_UNPROCESSABLE_ENTITY,
            content={
                "details": user_msg,
                "error": technical_code
            }
        )

    return JSONResponse(
        status_code=HTTP_422_UNPROCESSABLE_ENTITY,
        content={
            "details": "Error de validación desconocido.",
            "error": exc.__class__.__name__  
        }
    )
