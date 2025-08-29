import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { parse } from "marked";
import axios from 'axios';

const AppContext = createContext();

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

export const AppProvider = ({ children }) => {
  const [prompt, setPrompt] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    console.log(prompt);
  }, [prompt]);

  const value = { prompt, setPrompt, showResult, setShowResult, loading, setLoading, response, setResponse };

  return (
    <AppContext.Provider value={value} >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext);
}