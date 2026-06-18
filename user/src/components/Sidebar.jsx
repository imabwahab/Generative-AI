import { FaPlus, FaSearch, FaRegTrashAlt } from "react-icons/fa";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import panda from "../assets/panda.png";
import Logo from "./Logo";
import { useAppContext } from "../context/context";
import { useMemo, useState } from "react";

const Sidebar = ({ extended, setExtended, isMobile, setMobileOpen }) => {

  // width classes: w-56 (expanded) or w-16 (collapsed)
  const className = `h-screen text-slate-200 flex flex-col transition-all duration-300 border-r border-white/10 ${extended ? "w-56 bg-[#11141b]" : "w-16 bg-[#0e1017]"}`;

  const { chats, activeChatId, newChat, selectChat, deleteChat } = useAppContext();
  const [search, setSearch] = useState('');

  const closeOnMobile = () => {
    if (isMobile && setMobileOpen) setMobileOpen(false);
  };

  const HandleNewChat = () => {
    newChat();
    closeOnMobile();
  };

  const HandleSelectChat = (id) => {
    selectChat(id);
    closeOnMobile();
  };

  // Most recently updated chats first, filtered by the search box
  const filteredChats = useMemo(() => {
    const term = search.toLowerCase();
    return [...chats]
      .sort((a, b) => b.updatedAt - a.updatedAt)
      .filter((chat) => chat.title.toLowerCase().includes(term));
  }, [chats, search]);

  return (
    <aside className={`${className} border-r-gray-700`}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 pt-3 pb-[11px] border-b border-white/10">
        {extended && (
          <div className="flex items-center gap-2">
            <Logo className="w-6 h-6" />
            <span className="font-semibold tracking-wide bg-gradient-to-r from-indigo-300 to-violet-400 bg-clip-text text-transparent">Sage</span>
          </div>
        )}

        {/* Mobile close (when sidebar is overlay) */}
        {isMobile ? (
          <button onClick={() => setMobileOpen && setMobileOpen(false)} className="p-2 rounded-md hover:bg-white/10 transition">
            <GoSidebarExpand className="w-5 h-5" />
          </button>
        ) : (
          <button onClick={() => setExtended(!setExtended ? false : !extended)} className="p-2 rounded-md hover:bg-white/10 transition" aria-label="Toggle sidebar">
            {extended ? <GoSidebarExpand className="w-5 h-5" /> : <GoSidebarCollapse className="w-5 h-5" />}
          </button>
        )}

      </div>

      {/* Top actions */}
      <div className="px-2 pt-4 flex flex-col gap-3">
        <button
          onClick={() => HandleNewChat()}
          className="flex items-center gap-2 py-2 px-3 cursor-pointer rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition">
          <FaPlus className="shrink-0" />
          {extended && <span className="text-sm font-medium">New Chat</span>}
        </button>

        <div onClick={() => setExtended(true)} className="flex items-center gap-2 py-2 px-3 rounded-xl bg-white/[0.05] border border-white/10 hover:border-white/20 transition">
          <FaSearch className="text-slate-400 shrink-0" />
          {extended && <>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search chats"
              className="bg-transparent focus:outline-none text-slate-100 placeholder-slate-500 text-sm w-full"
            />
          </>
          }
        </div>

      </div>

      {/* Recent list */}
      <div className="flex-1 overflow-y-auto mt-4 px-2">
        {extended && (
          <>
            <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">Recent</p>
            <div className="flex flex-col gap-0.5">
              {filteredChats.length > 0 ?
                filteredChats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => HandleSelectChat(chat.id)}
                    className={`group flex items-center justify-between gap-2 px-3 py-2 cursor-pointer rounded-lg transition ${chat.id === activeChatId ? "bg-indigo-500/15 text-indigo-100" : "text-slate-300 hover:bg-white/5"}`}
                  >
                    <p className="truncate text-sm flex-1">{chat.title}</p>
                    <button
                      onClick={(e) => { e.stopPropagation(); deleteChat(chat.id); }}
                      className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-400 transition shrink-0"
                      aria-label="Delete chat"
                    >
                      <FaRegTrashAlt className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
                :
                (<p className="text-slate-500 text-center py-5 text-sm">
                  {chats.length === 0 ? "No chats yet" : "No chat found"}
                </p>)
              }
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="px-3 py-3 ">
        <div className="flex items-center gap-3">
          <img src={panda} className="h-10 w-10 rounded-full border border-gray-400" alt="User Avatar" />
          {extended && <p className="font-bold text-sm">Panda</p>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
