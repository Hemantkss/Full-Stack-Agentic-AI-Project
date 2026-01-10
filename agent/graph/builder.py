from langgraph.graph import StateGraph, END
from agent.state.agent_state import AgentState
from agent.graph.nodes import llm_node

def build_graph():
    graph = StateGraph(AgentState)

    graph.add_node("llm", llm_node)
    graph.set_entry_point("llm")
    graph.add_edge("llm", END)

    return graph.compile()
