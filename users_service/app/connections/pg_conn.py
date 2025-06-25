from sqlalchemy import create_engine

from sqlalchemy.orm import sessionmaker

import os
import sys
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("PG_CONN_STRING")

if not DATABASE_URL:
    print("DEBE PROPORCIONAR UN PG_CONN_STRING desde las variables de entorno!")
    sys.exit(1)
engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(bind=engine)