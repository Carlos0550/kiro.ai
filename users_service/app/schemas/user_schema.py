from pydantic import BaseModel, field_validator, EmailStr, Field

class UserPayload(BaseModel):
    user_name: str = Field(..., description="Nombre real del usuario.")
    user_password: str = Field(..., description="Contraseña del usuario.")
    user_email: EmailStr = Field(..., description="Email del usuario.")

    @field_validator("user_password")
    @classmethod
    def validate_password(cls, v):
        
        if v is None:
            raise ValueError("La contraseña no puede ser None")
        
        if not isinstance(v, str):
            raise ValueError(f"La contraseña debe ser string, recibido: {type(v)}")
        
        if len(v.strip()) == 0:
            raise ValueError("La contraseña no puede estar vacía")
            
        if len(v) < 6:
            raise ValueError("La contraseña no puede ser de menos de 6 caracteres")
        if len(v) > 30:
            raise ValueError("La contraseña no puede ser de más de 30 carácteres")
        
        return v

class UserResponseSchema(BaseModel):
    details: str = Field(..., description="Mensaje de respuesta del servidor.")

class ErrorResponseSchema(BaseModel):
    details: str = Field(..., description="Mensaje de error legible para el usuario.")
    error: str = Field(..., description="Código o valor técnico del error.")
