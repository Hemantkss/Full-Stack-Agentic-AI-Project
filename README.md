<div align="center">

# 🚀 Full-Stack Agentic AI System

### **LangGraph · LangChain · FastAPI · React · Three.js · OpenAI · LangSmith**

A **production-style Agentic AI system** showcasing structured reasoning, tool orchestration, explicit state management, and observability — built with real-world engineering discipline.

🔹 *Not a chatbot demo*  
🔹 *Not prompt-engineering*  
🔹 *A real agent system*

</div>

---

## 🧠 What Makes This Project Different?

Most AI applications follow a **linear interaction model**:

```
User → Prompt → LLM → Response
```

This approach quickly breaks down when you need:
- Multi-step reasoning
- Tool usage
- State tracking
- Debuggability
- Production reliability

This project implements a **true agent-driven workflow**:

```
User
 ↓
Agent (LangGraph)
 ↓
Reasoning → Tool Execution → State Updates
 ↓
Final Response
```

The focus is **how agentic AI systems are architected and executed**, not just how they answer questions.

---

## ✨ Core Capabilities

- 🧠 **Agentic architecture powered by LangGraph**
- 🔁 **Multi-step reasoning with explicit transitions**
- 🛠️ **Tool integration** (calculator example)
- 🧩 **Explicit agent state schema** (not hidden in prompts)
- 🪵 **Centralized logging layer**
- ⚠️ **Custom exception handling**
- 🔍 **Execution tracing with LangSmith**
- 🚀 **FastAPI backend**
- 🎨 **Interactive frontend (React + Three.js)**
- ⚡ **Fast Python environment management using `uv`**

---

## 🏗️ Architecture Overview

```
agent/     → Core agent logic (graph, state, tools, prompts)
backend/  → API layer (request handling & validation)
frontend/ → Interactive UI (React + Three.js)
```

### Architectural Principles
- Clear separation of concerns
- Agent logic isolated from transport layers (API / UI)
- State-first design for future memory expansion
- Tool contracts enforced for safe reasoning
- Observability hooks built in from day one

---

## 🧠 Agent Design Highlights

- **Graph-based execution** using LangGraph
- **Explicit agent state** instead of prompt-only memory
- **Tool abstraction** for extensibility and safety
- **Event-driven logging** for debugging and tracing
- Designed to evolve into:
  - Multi-agent systems
  - Persistent memory (STM / LTM)
  - Retrieval-Augmented Generation (RAG)

---

## 🎨 Frontend Experience

This is **not just a chat UI** — it’s an **interactive visualization layer**.

### Current
- React + Vite
- Chat interface connected to the agent backend

### Included / In Progress
- Three.js / React Three Fiber (R3F)
- Custom shaders & materials
- 3D scene-based interaction
- Rich visual feedback for agent execution

This bridges **AI systems + advanced UI**, a rare and valuable combination.

---

## ⚙️ Tech Stack

### Backend / AI
- Python
- LangGraph
- LangChain
- OpenAI (pluggable)
- LangSmith
- FastAPI

### Frontend
- React
- Vite
- Three.js / React Three Fiber
- GLSL Shaders

---

## 🚀 Getting Started (Using `uv`)

### Backend
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

uv venv
.venv\Scripts\activate  # Windows
uv pip install -r requirements.txt

uvicorn backend.main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## 📈 Scalability & Future Roadmap

This project is intentionally designed to support:

- 🧠 Multi-agent orchestration
- 🧠 Long-term memory & summarization
- 📚 Vector databases (RAG)
- 🌊 Streaming responses
- 📊 Advanced observability & tracing

---

## 🧪 Project Status

🟢 Actively evolving  
🟡 Optimized for solo developers
🔵 Portfolio-grade **production system demo**

---

## 👤 Author

**Hemant**  
Aspiring **Agentic AI / Full-Stack AI Engineer**

---

<div align="center">

⭐ If you find this project useful or interesting, consider starring the repo ⭐  
Fork it, explore it, and build on it 🚀

</div>
