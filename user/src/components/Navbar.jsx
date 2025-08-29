import React, { useEffect, useState } from "react";
import profile from "../assets/panda.png";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";

const Navbar = ({ extended, mobileOpen, setMobileOpen }) => {
  // track desktop breakpoint so we can offset the fixed navbar
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
      mq.removeEventListener ? mq.removeEventListener("change", listener) : mq.removeListener(listener);
  }, []);

  // Tailwind sidebar widths -> w-56 = 14rem = 224px, w-16 = 4rem = 64px
  const leftPx = isDesktop && !mobileOpen ? (extended ? 224 : 64) : 0;
  const style = { left: `${leftPx}px`, right: 0 }; // fixed element: left + right gives correct width

  return (
    <nav
      style={style}
      className="fixed top-0 z-40 h-15  bg-gray-800 shadow-sm border-b border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Mobile toggle */}
          <button
            className="sm:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle sidebar"
          >
            {mobileOpen ? <GoSidebarExpand className="w-6 h-6" /> : <GoSidebarCollapse className="w-6 h-6" />}
          </button>

          <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 tracking-wide">FormAI</span>
        </div>

        <div className="flex items-center gap-4">
          <img
            className="h-9 w-9 rounded-full border-2 border-indigo-500 shadow-sm cursor-pointer hover:scale-105 transition-transform"
            src={profile}
            alt="User avatar"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
