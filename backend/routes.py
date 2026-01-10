from fastapi import APIRouter
from backend.schemas import ChatRequest, ChatResponse
from agent.runner import run_agent

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
    response = run_agent(req.prompt)
    return {"response": response}
