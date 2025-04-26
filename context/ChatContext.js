// context/ChatProvider.js

import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // npm install uuid

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [chatSessions, setChatSessions] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("chatSessions");
    if (saved) {
      const parsed = JSON.parse(saved);
      setChatSessions(parsed.sessions);
      setActiveSessionId(parsed.activeSessionId);
    }
  }, []);

  useEffect(() => {
    if (chatSessions.length) {
      localStorage.setItem(
        "chatSessions",
        JSON.stringify({ sessions: chatSessions, activeSessionId })
      );
    }
  }, [chatSessions, activeSessionId]);

  const createNewSession = (title) => {
    const activeSession = chatSessions.find((s) => s.id === activeSessionId);

    if (activeSession && activeSession.messages.length === 0) {
      return;
    }

    const newSession = {
      id: uuidv4(),
      title: title || "New Chat",
      courseTitle: "", // New field
      messages: [],
    };

    setChatSessions((prev) => [newSession, ...prev]);
    setActiveSessionId(newSession.id);
  };

  const deleteSession = (sessionId) => {
    setChatSessions((prevSessions) => {
      const updatedSessions = prevSessions.filter((session) => session.id !== sessionId);

      if (sessionId === activeSessionId) {
        if (updatedSessions.length > 0) {
          setActiveSessionId(updatedSessions[0].id);
        } else {
          setActiveSessionId(null);
        }
      }

      return updatedSessions;
    });
  };

  const addMessageToActiveSession = (sender, message) => {
    if (!activeSessionId) return;

    setChatSessions((prevSessions) =>
      prevSessions.map((session) =>
        session.id === activeSessionId
          ? { ...session, messages: [...session.messages, { sender, message }] }
          : session
      )
    );
  };

  const setTitleForActiveSession = (title) => {
    setChatSessions((prevSessions) =>
      prevSessions.map((session) =>
        session.id === activeSessionId
          ? { ...session, title }
          : session
      )
    );
  };

  const setCourseTitleForActiveSession = (courseTitle) => {
    setChatSessions((prevSessions) =>
      prevSessions.map((session) =>
        session.id === activeSessionId
          ? { ...session, courseTitle }
          : session
      )
    );
  };

  const switchSession = (sessionId) => {
    setActiveSessionId(sessionId);
  };

  return (
    <ChatContext.Provider
      value={{
        chatSessions,
        activeSessionId,
        createNewSession,
        addMessageToActiveSession,
        setTitleForActiveSession,
        setCourseTitleForActiveSession,
        switchSession,
        deleteSession,
        activeSession: chatSessions.find((s) => s.id === activeSessionId),
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
