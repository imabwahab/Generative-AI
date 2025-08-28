import { FaPlus, FaSearch } from "react-icons/fa";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import panda from "../assets/panda.png";
import { chatsTitle } from "../assets/assets";

const Sidebar = ({ extended, setExtended, isMobile, setMobileOpen }) => {
  // width classes: w-56 (expanded) or w-16 (collapsed)
  const className = `h-screen bg-gray-900 text-gray-200 flex flex-col transition-all duration-300 shadow-lg border-r border-gray-800 ${
    extended ? "w-56" : "w-16"
  }`;

  return (
    <aside className={className}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        {extended && <span className="font-semibold tracking-wide">SideBar</span>}

        {/* Mobile close (when sidebar is overlay) */}
        {isMobile ? (
          <button onClick={() => setMobileOpen && setMobileOpen(false)} className="p-2 rounded-md hover:bg-gray-800">
            <GoSidebarExpand className="w-5 h-5" />
          </button>
        ) : (
          <button onClick={() => setExtended(!setExtended ? false : !extended)} className="p-2 rounded-md hover:bg-gray-800" aria-label="Toggle sidebar">
            {extended ? <GoSidebarExpand className="w-5 h-5" /> : <GoSidebarCollapse className="w-5 h-5" />}
          </button>
        )}
      </div>

      {/* Top actions */}
      <div className="px-2 pt-4 flex flex-col gap-3">
        <div className="flex bg-blue-500 items-center gap-2 py-2 px-3 cursor-pointer hover:bg-blue-600 rounded-lg transition">
          <FaPlus />
          {extended && <span className="text-sm font-medium">New Chat</span>}
        </div>

        <div className="flex bg-blue-400 items-center gap-2 py-2 px-3 cursor-pointer hover:bg-blue-500 rounded-lg transition">
          <FaSearch />
          {extended && <span className="text-sm font-medium">Search Chat</span>}
        </div>
      </div>

      {/* Recent list */}
      <div className="flex-1 overflow-y-auto mt-4 px-2">
        {extended && (
          <>
            <p className="mb-2 text-xs uppercase text-gray-400">Recent</p>
            <div className="flex flex-col gap-1">
              {chatsTitle.map((chat) => (
                <div key={chat.id} className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-800 rounded-lg transition">
                  <p className="truncate text-sm w-40">{chat.title}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="px-3 py-3 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <img src={panda} className="h-10 w-10 rounded-full border border-gray-400" alt="User Avatar" />
          {extended && <p className="font-bold text-sm">Panda</p>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
