from fastapi import APIRouter, Body, Request,  Depends, Response, HTTPException
from database.db import Session, get_db
from app.service.schema.user_schema import UserSchema
from app.service.impl.user_service import UserService

router = APIRouter()
db = Depends(get_db)


@router.post("/user/")
async  def create_user(request: Request, session:Session = db, user: UserSchema = Body(...) ):
    try:
        if not user.name or not user.email:
            raise HTTPException(status_code=422, detail="Invalid Data")
        user_service = UserService()
        return user_service.create_user(session, user)
    except Exception as e: 
        print(e)
        raise HTTPException(status_code=500, detail="Something goes wrong")

@router.get("/user/{email}")
async  def create_user(request: Request, session:Session = db, email: str = None):
    try:
        if not email:
            raise HTTPException(status_code=422, detail="Invalid Data")
        user_service = UserService()
        return user_service.get_user(session, email)
    except Exception as e: 
        print(e)
        raise HTTPException(status_code=500, detail="Something goes wrong")