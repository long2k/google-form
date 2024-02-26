from pydantic import BaseModel

class UserSchema(BaseModel):
    email: str
    name: str
    image: str