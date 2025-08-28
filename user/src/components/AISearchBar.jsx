import { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMicOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { useAppContext } from "../context/context.jsx";

const AISearchBar = ({ extended, mobileOpen }) => {

  const { setPrompt, setShowResult, setLoading } = useAppContext();
  const promptRef = useRef(null);

  const HandlePrompt = () => {
    setShowResult(true);
    setLoading(true);
    setShowResult(true);
    console.log(promptRef.current.value);
    setPrompt(promptRef.current.value)
    promptRef.current.value = '';
    console.log(promptRef.current.value);
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
      className="fixed bottom-0 z-40 flex justify-center pb-4 pt-2 px-4 border-t border-gray-700 bg-transparent"
    >
      <div className="flex items-center w-full max-w-2xl bg-gray-800 rounded-2xl shadow-md border border-gray-700 px-4 py-2 gap-3">
        <FaSearch className="text-gray-400 w-5 h-5" />
        <input
          type="text"
          ref={promptRef}
          placeholder="Ask AI anything..."
          className="flex-1 bg-transparent focus:outline-none text-white placeholder-gray-400 text-sm"
        />
        <button
          className="text-gray-400 hover:text-indigo-400 transition"
          aria-label="Voice"
        >
          <IoMicOutline className="w-5 h-5" />
        </button>
        <button
          type="submit"
          onClick={() => HandlePrompt()}
          className="text-gray-400 hover:text-indigo-400 transition"
          aria-label="Send"
        >
          <FiSend className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AISearchBar;
