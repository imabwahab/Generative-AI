import profile from '../assets/panda.png'

const Navbar = () => {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left - Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
              GeminiAI
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
