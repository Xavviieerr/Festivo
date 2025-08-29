import React, { createContext, useState, useContext } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import Logo from "../../assets/logo2.png";

const SidebarContext = createContext();
export const useSidebar = () => useContext(SidebarContext);

const DashboardSideBar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <SidebarContext.Provider value={{ expanded }}>
      <aside
        className={`shadow-[4px_0_4px_-2px_rgba(0,0,0,0.3)] transition-all ${
          expanded ? "w-[250px]" : "w-[60px]"
        }`}
      >
        <nav className="h-full bg-gray-50 flex flex-col  shadow-sm">
          {/* top section logo and button */}
          <div className="p-4 pb-2 flex justify-between items-center">
            <a href="http://localhost:5173/">
              <img
                src={Logo}
                alt=""
                className={`h-16 rounded overflow-hidden transition-all ${
                  expanded ? "w-16" : "w-0"
                }`}
              />
            </a>
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 bg-gray-50 rounded-full hover:bg-gray-200"
            >
              {expanded ? <LuArrowLeft /> : <LuArrowRight />}
            </button>
          </div>

          {/* sidebar links passed as "children" */}
          <ul className="flex-1 mt-4 px-3">{children}</ul>

          {/* botton section */}
          <div
            className={`shadow-[0_-4px_4px_-2px_rgba(0,0,0,0.3)] flex justify-between items-center p-3 overflow-hidden transition-all ${
              expanded ? "w-[250px] " : "w-0 hidden"
            }`}
          >
            <a
              className="text-xs text-gray-400 font-bold"
              href="https://github.com/Xavviieerr"
            >
              © 2025 Chidera Paul Ogbu
            </a>
          </div>
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
};

export default DashboardSideBar;
