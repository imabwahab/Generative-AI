import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  const [extended, setExtended] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // 👈 for mobile only

  return (
    <div className='flex flex-row'>
      
      {/* Sidebar for large screens */}
      <div className='hidden sm:flex'>
        <Sidebar 
          extended={extended} 
          setExtended={setExtended} 
          isMobile={false} 
        />
      </div>

      {/* Sidebar for mobile */}
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
              setMobileOpen={setMobileOpen}   // 👈 pass down
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className='w-full flex-1 pt-20 bg-gray-700/90 text-white h-[100vh] relative'>
        <Navbar
          extended={extended}
          setExtended={setExtended}
          setMobileOpen={setMobileOpen} // 👈 pass down
          mobileOpen={mobileOpen}
        />
        hello
      </div>
    </div>
  )
}

export default App
