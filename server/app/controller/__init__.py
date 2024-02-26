from fastapi import FastAPI
def regiter_router(app: FastAPI, root: str="/api"):
    from app.controller.user_controller import router as user_router

    app.include_router(user_router, prefix=f"{root}")