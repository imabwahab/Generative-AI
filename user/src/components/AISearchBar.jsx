import { FaSearch } from "react-icons/fa";
import { IoMicOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

const AISearchBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center bg-gray-900 py-2 px-4 border-t border-gray-700">
      <div className="flex items-center w-full max-w-2xl bg-gray-800 rounded-2xl shadow-md border border-gray-700 px-4 py-2 gap-3">
        <FaSearch className="text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Ask AI anything..."
          className="flex-1 bg-transparent focus:outline-none text-white placeholder-gray-400 text-sm"
        />
        <button className="text-gray-400 hover:text-indigo-400 transition">
          <IoMicOutline className="w-5 h-5" />
        </button>
        <button className="text-gray-400 hover:text-indigo-400 transition">
          <FiSend className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};


export default AISearchBar;
