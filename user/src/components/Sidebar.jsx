import { FaPlus, FaSearch } from "react-icons/fa";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import panda from "../assets/panda.png";
import { chatsTitle } from "../assets/assets";

const Sidebar = ({ extended, setExtended, isMobile, setMobileOpen }) => {
  return (
    <div
      className={`h-screen relative bg-gray-900 text-gray-200 flex flex-col 
      transition-all duration-300 shadow-lg border-r border-gray-800
      ${extended ? "w-56" : "w-16"}`}
    >
      {/* Sidebar Header */}
      <div className="absolute w-full top-0 flex justify-between items-center p-5 cursor-pointer hover:bg-gray-800 border-b border-gray-700">
        {extended && <span className="font-semibold tracking-wide">SideBar</span>}

        {/* Mobile close button */}
        {isMobile && (
          <button onClick={() => setMobileOpen(false)}>
            <GoSidebarExpand className="text-xl" />
          </button>
        )}

        {/* Desktop toggle button */}
        {!isMobile && (
          <button onClick={() => setExtended(!extended)}>
            {extended ? (
              <GoSidebarExpand className="text-xl" />
            ) : (
              <GoSidebarCollapse className="text-xl" />
            )}
          </button>
        )}
      </div>

      {/* Top Section */}
      <div className="pt-18 px-2 flex flex-col gap-3">
        <div className="flex bg-blue-500 items-center gap-2 py-2 px-3 cursor-pointer hover:bg-blue-600 rounded-lg transition">
          <FaPlus />
          {extended && <span className="text-sm font-medium">New Chat</span>}
        </div>

        <div className="flex bg-blue-400 items-center gap-2 py-2 px-3 cursor-pointer hover:bg-blue-500 rounded-lg transition">
          <FaSearch />
          {extended && <span className="text-sm font-medium">Search Chat</span>}
        </div>
      </div>

      {/* Recent Chats Scrollable Section */}
      <div className="flex-1 mt-4 overflow-y-auto pb-15">
        {extended && (
          <>
            <p className="px-4 mb-2 text-xs uppercase text-gray-400">Recent</p>
            <div className="flex flex-col gap-1 px-2">
              {chatsTitle.map((chat) => (
                <div
                  key={chat.id}
                  className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-800 rounded-lg transition"
                >
                  <p className="truncate text-sm w-40">{chat.title}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 w-full bg-gray-900 border-t border-gray-700">
        <div className="px-3 py-3 flex flex-row items-center gap-3 border-t border-gray-700">
          <img
            src={panda}
            className="h-8 w-8 rounded-full border border-gray-400"
            alt="User Avatar"
          />
          {extended && <p className="font-bold text-sm">Panda</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
