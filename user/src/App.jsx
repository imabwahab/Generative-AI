import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import AISearchBar from "./components/AISearchBar";

const App = () => {
  const [extended, setExtended] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for large screens */}
      <div className="hidden sm:flex">
        <Sidebar
          extended={extended}
          setExtended={setExtended}
          isMobile={false}
        />
      </div>

      {/* Sidebar for mobile (overlay) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          ></div>

          {/* sidebar panel */}
          <div className="relative z-50">
            <Sidebar
              extended={true}
              setExtended={setExtended}
              isMobile={true}
              setMobileOpen={setMobileOpen}
            />
          </div>
        </div>
      )}

      {/* Main Wrapper (content area) */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 text-white">
        {/* Navbar - fixed at top */}
        <Navbar
          extended={extended}
          setExtended={setExtended}
          setMobileOpen={setMobileOpen}
          mobileOpen={mobileOpen}
        />

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto pt-16 pb-16">
          <MainContent />
        </div>

        {/* Search Bar - fixed at bottom */}
        <AISearchBar />
      </div>
    </div>
  );
};

export default App;
