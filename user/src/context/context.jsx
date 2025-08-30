import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from 'axios';

const AppContext = createContext();

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

export const AppProvider = ({ children }) => {
  const [prompt, setPrompt] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const generateContent = async (prompt) => {
    const value = prompt;
    if (!value) {
      return toast.error('please enter the prompt');
    }

    try {
      setPrompt(value);
      setLoading(true);
      setShowResult(true);

      const { data } = await axios.post('/api/generate', { prompt: value });
      if (data.success) {
        setResponse(data.content);
      } else {
        setResponse('There is error while sending the request');
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const value = { prompt, setPrompt, showResult, setShowResult, loading, setLoading, response, setResponse, generateContent };

  return (
    <AppContext.Provider value={value} >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext);
}