from langgraph.graph import StateGraph, END
from agent.state.agent_state import AgentState
from agent.nodes.llm_node import llm_node
from agent.logger.logger import get_logger
from agent.exceptions.custom_exception import CustomException

logger = get_logger(__name__)

def build_graph():
    try:
        logger.info("Graph builder invoked")
        
        graph = StateGraph(AgentState)
        
        graph.add_node("llm", llm_node)
        graph.set_entry_point("llm")
        graph.add_edge("llm", END)
        
        return graph.compile()
    
    except Exception as e:
        logger.error("Graph builder failed", exc_info=True)
        raise CustomException(e)
    
