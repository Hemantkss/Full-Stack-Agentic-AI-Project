# 🚀 Full-Stack Agentic AI Project
**LangGraph · LangChain · FastAPI · React · OpenAI · LangSmith**

> A full-stack **Agentic AI system** designed to demonstrate multi-step reasoning, tool usage, explicit state management, and observability using modern AI engineering practices.

This project focuses on **how agentic AI systems are architected and executed**, rather than treating the LLM as a black box.

---

## 🧠 Overview

Most AI applications follow a simple interaction model:

```
User → Prompt → LLM → Response
```

This project implements a **true agent-driven workflow**:

```
User → Agent Reasoning → Tool Execution → State Update → Final Response
```

The emphasis is on:
- Structured reasoning
- Tool-based decision making
- Clear state transitions
- Production-oriented system design

---

## ✨ Core Capabilities

- 🧠 Agentic architecture built with LangGraph
- 🔁 Multi-step reasoning
- 🛠️ Tool integration (calculator example)
- 🧩 Explicit agent state schema
- 📄 Centralized logging
- ⚠️ Custom exception handling
- 🔍 Execution tracing with LangSmith
- 🚀 FastAPI backend
- ⚛️ React frontend
- ⚡ Fast Python environment management using `uv`

---

## 🗂️ Project Structure

```
project/
├── agent/
├── backend/
├── frontend/
├── logs/
├── .env
└── README.md
```

---

## ⚙️ Tech Stack

**Backend:** Python, FastAPI, LangChain, LangGraph, OpenAI, LangSmith  
**Frontend:** React, Vite  

---

## 🎨 Frontend UI (Current & Planned)

The current frontend is a minimal React chat interface.
Planned enhancements include Three.js, React Three Fiber (R3F), and GSAP for richer visualization.

---

## 🚀 How to Run (Using uv)

```bash
git clone https://github.com/YOUR_USERNAME/Full-Stack-Agentic-AI-Project.git
cd Full-Stack-Agentic-AI-Project
uv venv
.venv\Scripts\activate  # Windows
uv pip install -r requirements.txt
uvicorn backend.main:app --reload
```

Frontend:
```bash
cd frontend
npm install
npm run dev
```

---

## 👤 Author

**Hemant**  
Aspiring Agentic AI / Full-Stack AI Engineer
