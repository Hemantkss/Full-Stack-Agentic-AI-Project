from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
from langchain_ollama import ChatOllama

load_dotenv()

def get_llm():
    return ChatOllama(
        model="llama3.2:3b",
        temperature=0
    )
    
    

