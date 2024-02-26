from fastapi import HTTPException

from app.service.schema.user_schema import UserSchema
from app.model.user import User
from datetime import datetime


class  UserService: 
    def create_user(self, db , user: UserSchema ):
        existed_item = db.query(User).filter(User.email == user.email).first()
        if existed_item:
            raise HTTPException(status_code=403, detail="Email is Existed")
        new_user = User(
            email=user.email,
            name=user.name,
            image=user.image,
            created = datetime.now(),
            updated = datetime.now()
        )
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return new_user
    
    def get_user(self, db , email: str ):
        existed_item = db.query(User).filter(User.email == email).first()
        if existed_item:
            return {"isExisted": True}
        return {"isExisted": False}