import uvicorn
from fastapi import FastAPI,  Request
from fastapi.middleware.cors import CORSMiddleware

from app.controller import regiter_router

app = FastAPI(debug=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

regiter_router(app)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0", port=8001, reload=True)