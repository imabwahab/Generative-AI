import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [prompt, setPrompt] = useState();
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(prompt);

  }, [prompt]);

  const value = { prompt, setPrompt, showResult, setShowResult, loading, setLoading };
  return (
    <AppContext.Provider value={value} >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext);
}