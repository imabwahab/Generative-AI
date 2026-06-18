import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from 'axios';

const AppContext = createContext();

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

const STORAGE_KEY = 'gap-ai-chats';
const ACTIVE_KEY = 'gap-ai-active-chat';

// Small unique id helper for chat sessions
const createId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export const AppProvider = ({ children }) => {
  // All saved chat sessions, hydrated from localStorage on first load
  const [chats, setChats] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Which chat is open. Persisted so a reload keeps you in the same
  // conversation instead of silently starting a new one on the next message.
  const [activeChatId, setActiveChatId] = useState(() => {
    try {
      return localStorage.getItem(ACTIVE_KEY) || null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(false);

  // Persist chats whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
    } catch {
      // ignore quota / serialization errors
    }
  }, [chats]);

  // Persist the open chat id (null => welcome screen)
  useEffect(() => {
    try {
      if (activeChatId) localStorage.setItem(ACTIVE_KEY, activeChatId);
      else localStorage.removeItem(ACTIVE_KEY);
    } catch {
      // ignore
    }
  }, [activeChatId]);

  const activeChat = chats.find((c) => c.id === activeChatId) || null;
  const messages = activeChat?.messages ?? [];

  // Start a fresh chat: the actual session is created on the first prompt
  const newChat = () => setActiveChatId(null);

  const selectChat = (id) => setActiveChatId(id);

  const deleteChat = (id) => {
    setChats((prev) => prev.filter((c) => c.id !== id));
    setActiveChatId((prev) => (prev === id ? null : prev));
  };

  const appendMessage = (chatId, message) => {
    setChats((prev) =>
      prev.map((c) =>
        c.id === chatId
          ? { ...c, messages: [...c.messages, message], updatedAt: Date.now() }
          : c
      )
    );
  };

  const generateContent = async (rawPrompt) => {
    const value = rawPrompt?.trim();
    if (!value) {
      return toast.error('please enter the prompt');
    }
    if (loading) return;

    // Continue the open chat only if it still exists; otherwise start a new
    // one titled from this prompt. (Guards against a stale/deleted id.)
    let chatId = activeChatId;
    const chatExists = chatId && chats.some((c) => c.id === chatId);
    if (!chatExists) {
      chatId = createId();
      const title = value.length > 40 ? `${value.slice(0, 40)}…` : value;
      const session = {
        id: chatId,
        title,
        messages: [],
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      setChats((prev) => [session, ...prev]);
      setActiveChatId(chatId);
    }

    // Show the user's message immediately
    appendMessage(chatId, { role: 'user', text: value });
    setLoading(true);

    try {
      const { data } = await axios.post('/api/generate', { prompt: value });
      if (data.success) {
        appendMessage(chatId, { role: 'model', text: data.content });
      } else {
        toast.error(data.message || 'Request failed');
        appendMessage(chatId, {
          role: 'model',
          text: 'There was an error while generating the response.',
        });
      }
    } catch (error) {
      toast.error(error.message);
      appendMessage(chatId, {
        role: 'model',
        text: 'Network error. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const value = {
    chats,
    activeChat,
    activeChatId,
    messages,
    loading,
    generateContent,
    newChat,
    selectChat,
    deleteChat,
  };

  return (
    <AppContext.Provider value={value} >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext);
}
