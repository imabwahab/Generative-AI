import { useEffect, useState, useRef } from "react";
import { IoMicOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { useAppContext } from "../context/context.jsx";


const AISearchBar = ({ extended, mobileOpen }) => {

  const { generateContent, loading } = useAppContext();
  const promptRef = useRef(null);

  const HandlePrompt = () => {
    const value = promptRef.current.value;
    generateContent(value);
    promptRef.current.value = '';
  }

  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 640 : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const listener = (e) => setIsDesktop(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", listener);
    else mq.addListener(listener);
    setIsDesktop(mq.matches);
    return () =>
      mq.removeEventListener
        ? mq.removeEventListener("change", listener)
        : mq.removeListener(listener);
  }, []);

  const leftPx = isDesktop && !mobileOpen ? (extended ? 224 : 64) : 0;
  const style = { left: `${leftPx}px`, right: 0 };

  return (
    <div
      style={style}
      className="fixed bottom-0 z-40 flex flex-col items-center pb-4 pt-3 px-4 bg-gradient-to-t from-[#0b0d12] via-[#0b0d12] to-transparent"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();   // prevent page refresh
          HandlePrompt();
        }}
        className="flex items-center w-full max-w-2xl bg-white/[0.05] rounded-2xl shadow-lg border border-white/10 focus-within:border-indigo-500/50 focus-within:ring-1 focus-within:ring-indigo-500/40 transition px-3 py-2 gap-2"
      >
        <input
          type="text"
          ref={promptRef}
          placeholder="Ask Sage anything..."
          className="flex-1 bg-transparent focus:outline-none text-slate-100 placeholder-slate-500 text-sm px-2"
        />
        <button
          type="button"
          className="p-2 rounded-lg text-slate-400 hover:text-indigo-300 hover:bg-white/5 transition"
          aria-label="Voice"
        >
          <IoMicOutline className="w-5 h-5" />
        </button>
        <button
          type="submit"
          disabled={loading}
          className="p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed transition"
          aria-label="Send"
        >
          <FiSend className="w-5 h-5" />
        </button>
      </form>
      <p className="mt-2 text-[11px] text-slate-500">Sage can make mistakes. Double-check important info.</p>
    </div>
  );

};

export default AISearchBar;
