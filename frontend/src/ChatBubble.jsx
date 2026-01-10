export default function ChatBubble({ role, content }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`
          max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow
          ${isUser
            ? "bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-br-none"
            : "bg-white text-gray-800 rounded-bl-none"}
        `}
      >
        {content}
      </div>
    </div>
  );
}
