import profile from '../assets/panda.png';
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
const Navbar = ({ mobileOpen, setMobileOpen }) => {
  return (
    <nav className="fixed top-0 left-16 right-0 z-40 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 h-15 flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Mobile button */}
        <button
          className="block sm:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <GoSidebarExpand className="w-6 h-6" />
          ) : (
            <GoSidebarCollapse className="w-6 h-6" />
          )}
        </button>

        {/* Logo */}
        <span className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
          GAP AI
        </span>

        {/* Profile */}
        <img
          className="h-8 w-8 rounded-full border border-gray-300 dark:border-gray-600"
          src={profile}
          alt="User avatar"
        />
      </div>
    </nav>
  );
};

export default Navbar