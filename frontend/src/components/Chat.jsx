import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendMessage } from "../utils/api";

export default function Chat() {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend() {
    if (!input.trim()) return;

    const userMsg = input;
    setInput("");

    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);

    try {
      const data = await sendMessage(userMsg);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-20 flex bg-black">

      {/* ================= LEFT SIDEBAR (CHAT HISTORY – FUTURE) ================= */}
      <aside className="hidden md:flex w-72 flex-col border-r border-white/10 bg-black/40">
        <div className="h-16 flex items-center px-4 text-white/80 text-sm font-medium border-b border-white/10">
          💬 Conversations
        </div>

        <div className="flex-1 overflow-y-auto p-4 text-white/50 text-sm">
          {/* Future: chat list */}
          No conversations yet
        </div>
      </aside>

      {/* ================= MAIN CHAT ================= */}
      <div className="flex flex-col flex-1 max-w-3xl mx-auto">

        {/* Header */}
        <header className="h-16 flex items-center justify-between px-6 text-white text-sm font-medium border-b border-white/10">
          <span>🤖 Agentic AI Assistant</span>

          {/* Back to Hero */}
          <button
            onClick={() => navigate("/")}
            className="text-white/60 hover:text-white transition"
          >
            ✕
          </button>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`
                  max-w-[70%] px-4 py-3 rounded-2xl text-sm leading-relaxed
                  ${
                    m.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white/90 text-gray-900 rounded-bl-none"
                  }
                `}
              >
                {m.content}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white/80 text-gray-800 px-4 py-2 rounded-2xl text-sm animate-pulse">
                Agent is thinking…
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <footer className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 bg-white/90 rounded-2xl px-4 py-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask something intelligent…"
              className="flex-1 bg-transparent outline-none text-sm text-gray-900"
            />

            <button
              onClick={handleSend}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:opacity-90 transition"
            >
              Send
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
