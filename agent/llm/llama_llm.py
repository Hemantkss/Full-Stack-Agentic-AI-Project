from langchain_ollama import ChatOllama
from agent.logger.logger import get_logger
from agent.exceptions.custom_exception import CustomException

# Logger
logger = get_logger(__name__)


# Function to get Llama LLM
def get_llama_llm():
    try:
        logger.info("llama3.2:3b LLM invoked")
        
        model = ChatOllama(
            model="llama3.2:3b",
            temperature=0
        )
        
        return model
    except Exception as e:
        logger.error("llama3.2:3b LLM failed", exc_info=True)
        raise CustomException(e)

        
    
    

