import { useState, useContext, useEffect } from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import { ChatContext } from "@/context/ChatContext";

export default function Home() {
  const {
    chatSessions,
    activeSession,
    createNewSession,
    addMessageToActiveSession,
    setTitleForActiveSession,
  } = useContext(ChatContext);

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Create new session automatically if none exists
  useEffect(() => {
    if (!activeSession) {
      createNewSession("New Chat");
    }
  }, [activeSession, createNewSession]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    if (activeSession && activeSession.messages.length === 0) {
      setTitleForActiveSession(message.slice(0, 20));
    }

    addMessageToActiveSession("user", message);
    setMessage("");
    setIsLoading(true);

    try {
      const response = await axios.post("/api/chat", { message });
      addMessageToActiveSession("chatgpt", response.data.response);
    } catch (error) {
      console.error("Error fetching response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!activeSession) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="flex flex-col  items-center w-full min-h-screen bg-gray-50">
        <div className="w-full  bg-white  flex flex-col h-screen">
          <div className="p-4 border-b font-bold text-lg bg-blue-100 w-full text-center">
            {activeSession.title}
          </div>

          <div className="overflow-y-auto flex-1 p-4 space-y-4">
            {activeSession.messages.map((log, index) => (
              <div
                key={index}
                className={`flex ${log.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-4 max-w-[89%] rounded-lg shadow-sm ${
                    log.sender === "user" ? "bg-blue-100 text-blue-800" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  <strong>{log.sender === "user" ? "You" : "ChatGPT"}:</strong>
                  <p className="whitespace-pre-wrap">{log.message}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-blue-500 italic text-center">ChatGPT is typing...</div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center p-4 bg-gray-100 rounded-b-lg">
            <input
              type="text"
              className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ask me anything..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="submit"
              className={`ml-3 px-4 py-3 text-white rounded-lg bg-blue-500 hover:bg-blue-600 ${
                isLoading || !message.trim() ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading || !message.trim()}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
