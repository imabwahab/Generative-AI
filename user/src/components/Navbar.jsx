import { useEffect, useState } from "react";
import profile from "../assets/panda.png";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import Logo from "./Logo";

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
      className="fixed top-0 z-40 h-15 bg-[#0b0d12]/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Mobile toggle */}
          <button
            className="sm:hidden p-2 rounded-md text-slate-300 hover:bg-white/10 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle sidebar"
          >
            {mobileOpen ? <GoSidebarExpand className="w-6 h-6" /> : <GoSidebarCollapse className="w-6 h-6" />}
          </button>

          <div className="flex items-center gap-2">
            <Logo className="w-7 h-7" />
            <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-indigo-300 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Sage
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img
            className="h-9 w-9 rounded-full border border-white/15 shadow-sm cursor-pointer hover:ring-2 hover:ring-indigo-500/50 transition"
            src={profile}
            alt="User avatar"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
