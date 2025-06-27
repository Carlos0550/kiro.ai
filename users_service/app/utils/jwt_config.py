#app/utils/jwt_config.py
from datetime import timedelta, datetime
from fastapi.security import OAuth2PasswordBearer
from jose import jwt
from passlib.context import CryptContext

import os
import sys
from dotenv import load_dotenv

load_dotenv()

SECRET_KEY = os.getenv("JWT_KEY")
if not SECRET_KEY:
        sys.exit("JWT_KEY no está definida en el archivo .env")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 1440 #24 horas

pwd_context = CryptContext(
    schemes=["bcrypt"], deprecated="auto"
)

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="login"
)

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()

    expire = datetime.utcnow() + (
        expires_delta or timedelta(
            minutes = ACCESS_TOKEN_EXPIRE_MINUTES
        )
    )

    to_encode.update({"exp": expire})

    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)