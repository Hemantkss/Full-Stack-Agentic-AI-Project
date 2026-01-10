from langchain.messages import HumanMessage
from agent.graph.builder import build_graph

graph = build_graph()

def run_agent(prompt: str):
    result = graph.invoke({
        "messages": [HumanMessage(content=prompt)]
    })
    return result["messages"][-1].content
