import React, { useContext } from "react";
import { useSidebar } from "./DashboardSideBar";

export default function SideBarItem({ icon, text, active, alert, onClick }) {
  const { expanded } = useSidebar();

  return (
    <li
      onClick={onClick}
      className={`relative flex items-center gap-2 p-2 mt-2 rounded-md cursor-pointer font-medium transition-colors
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 ease-in-out to-indigo-100 text-indigo-800"
            : "text-gray-600 hover:bg-indigo-50"
        }
      `}
    >
      <span>{icon}</span>
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-53 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>

      {alert && (
        <div
          className={`absolute right-2 h-2 w-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}
    </li>
  );
}
