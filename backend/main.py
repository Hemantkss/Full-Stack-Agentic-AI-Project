from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from backend.routes import router
from agent.exceptions.custom_exception import CustomException

app = FastAPI(title="Agentic AI")

# ✅ CORS (required for React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

# ✅ Proper exception handler
@app.exception_handler(CustomException)
async def custom_exception_handler(
    request: Request,
    exc: CustomException
):
    return JSONResponse(
        status_code=500,
        content={
            "success": False,
            "error": str(exc),
        },
    )
