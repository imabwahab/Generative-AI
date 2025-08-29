import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import AISearchBar from "./components/AISearchBar";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [extended, setExtended] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Toaster />

      <div className="flex h-screen transition-all duration-200 overflow-hidden">
        {/* Desktop Sidebar (takes layout space) */}
        <div className="hidden sm:flex">
          <Sidebar
            extended={extended}
            setExtended={setExtended}
            isMobile={false}
          />
        </div>

        {/* Mobile Sidebar Overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 sm:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileOpen(false)}
            />
            {/* Sidebar panel (left) */}
            <div className="absolute left-0 top-0 bottom-0 z-50">
              <Sidebar
                extended={true}
                setExtended={setExtended}
                isMobile={true}
                setMobileOpen={setMobileOpen}
              />
            </div>
          </div>
        )}

        {/* Main area */}
        <div className="flex-1 flex flex-col bg-gray-800 text-white">
          {/* Navbar (fixed top) */}
          <Navbar
            extended={extended}
            setExtended={setExtended}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />

          {/* Scrollable content area (space reserved for navbar & searchbar) */}
          <div className="flex-1 overflow-auto pt-12 pb-20">
            <MainContent />
          </div>

          {/* Search bar (fixed bottom) */}
          <AISearchBar extended={extended} mobileOpen={mobileOpen} />
        </div>
      </div>

    </>
  );
};

export default App;
