from agent.llm.openai_llm import get_openai_llm
from agent.llm.llama_llm import get_llama_llm
from agent.logger.logger import get_logger
from agent.exceptions.custom_exception import CustomException


logger = get_logger(__name__)
llm = get_llama_llm()


def llm_node(state):
    try:
        logger.info("LLM node invoked")

        # ✅ MUST use invoke
        response = llm.invoke(state["messages"])

        return {
            "messages": state["messages"] + [response]
        }

    except Exception as e:
        logger.error("LLM node failed", exc_info=True)
        raise CustomException(e)