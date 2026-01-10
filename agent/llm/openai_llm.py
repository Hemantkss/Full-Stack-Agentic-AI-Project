from langchain_openai import ChatOpenAI
from dotenv import load_dotenv

load_dotenv()

def get_llm():
    return ChatOpenAI(
        model="gpt-4o-mini",
        temperature=0
    )
    
    

