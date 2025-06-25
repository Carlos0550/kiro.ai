from sqlalchemy import Column, String
from sqlalchemy.dialects.postgresql import UUID
import uuid

from sqlalchemy import DateTime, func

from app.models.base import Base


from .base import Base

class Users(Base):
    __tablename__ = "users"

    user_id = Column(UUID(as_uuid=True), 
        primary_key=True, 
        unique=True, 
        nullable=False,
        default=uuid.uuid4
    )
    user_name = Column(String(30), nullable=False)
    user_email = Column(String(50), nullable=False, unique=True)
    user_password = Column(String(80), nullable=False)

    user_phone = Column(String(20), nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())