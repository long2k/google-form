from app.model import user
from database.db import engine
def init_db():
    user.Base.metadata.create_all(bind=engine)
