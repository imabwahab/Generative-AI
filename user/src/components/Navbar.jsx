import profile from '../assets/panda.png';
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";

const Navbar = ({ mobileOpen, setMobileOpen }) => {
  return (
    <nav className="absolute top-0 w-full  bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-500">
      <div className="w-auto mx-auto px-4 sm:px-6  lg:px-8">
        <div className="flex justify-between items-center px-2 h-15">

          {/* Mobile button */}
          <button
            className='block sm:hidden '
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <GoSidebarExpand className='w-6 h-6' /> : <GoSidebarCollapse className='w-6 h-6' />}
          </button>

          {/* Left - Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
              GAP AI
            </span>
          </div>

          {/* Right - Profile */}
          <div className="flex items-center space-x-4">
            <img
              className="h-8 w-8 rounded-full border border-gray-300 dark:border-gray-600"
              src={profile}
              alt="User avatar"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
