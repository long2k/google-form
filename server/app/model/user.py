from sqlalchemy import Column, Integer, String, DateTime
from database.db import Base
from sqlalchemy.orm import relationship


class User(Base):
    __tablename__ = "user"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email= Column(String, nullable=False)
    image = Column(String, nullable=False)
    created = Column(DateTime, nullable=False)
    updated = Column(DateTime, nullable=False)

    class Config: 
        orm_mode = True