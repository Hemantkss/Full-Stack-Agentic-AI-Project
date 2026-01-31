from langchain.messages import HumanMessage
from agent.graph.builder import build_graph
from agent.logger.logger import get_logger
from agent.exceptions.custom_exception import CustomException


logger = get_logger(__name__)
graph = build_graph()

def run_agent(prompt: str):
    try:
        logger.info("Agent invoked with prompt: %s", prompt)
        
        result = graph.invoke({
            "messages": [HumanMessage(content=prompt)]
        })
        
        return result["messages"][-1].content
        
    except Exception as e:
        logger.error("Agent execution failed", exc_info=True)
        raise CustomException(e)
