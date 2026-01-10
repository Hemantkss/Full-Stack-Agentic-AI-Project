import { useEffect, useRef, useState } from "react";
import { sendMessage } from "./api";
import ChatBubble from "./ChatBubble";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend() {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    setLoading(true);

    try {
      const data = await sendMessage(input);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "❌ Something went wrong" },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-gray-100 to-gray-200">
      {/* HEADER */}
      <header className="h-16 flex items-center justify-center bg-white text-gray-800 text-lg font-semibold ">
        🤖 Agentic AI Assistant
      </header>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto px-4 py-6 rounded-xl">
        <div className="max-w-3xl mx-auto">
          {messages.map((m, i) => (
            <ChatBubble key={i} role={m.role} content={m.content} />
          ))}

          {loading && (
            <div className="flex justify-start mb-4">
              <div className="bg-white px-4 py-3 rounded-2xl shadow text-sm animate-pulse">
                Typing…
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* INPUT */}
      <footer className="h-20 bg-white flex items-center px-4">
        <div className="max-w-3xl mx-auto flex w-full gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask something intelligent…"
            className="
              flex-1 px-4 py-3 rounded-xl border 
              text-sm
            "
          />
          <button
            onClick={handleSend}
            className="
              bg-gradient-to-r from-blue-600 to-indigo-600
              text-white px-6 py-3 rounded-xl text-sm font-medium
              hover:opacity-90 transition
            "
          >
            Send
          </button>
        </div>
      </footer>
    </div>
  );
}
