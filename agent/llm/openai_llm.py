# from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
from langchain_ollama import ChatOllama
from agent.logger.logger import get_logger
from agent.exceptions.custom_exception import CustomException

load_dotenv()


logger = get_logger(__name__)

def get_llm():
    try:
        logger.info("llama llm invoked")
        
        model = ChatOllama(
            model="llama3.2:3b",
            temperature=0
        )
        
        return model
    except Exception as e:
        logger.error("llama llm failed", exc_info=True)
        raise CustomException(e)

        
    
    

