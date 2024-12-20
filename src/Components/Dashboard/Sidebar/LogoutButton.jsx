import React from "react";

export default function LogoutButton({ label, Icon, isActive }) {
  return (
    <button
      className={`flex items-center rounded-lg px-5 py-3 space-x-2 mt-64
      ${isActive ? "bg-blue-400 text-slate-50" : "bg-slate text-gray-700"}
     hover:bg-blue-800 hover:text-slate-50 `}
      onClick={() => console.log("Logging out...")}
    >
      {Icon && <Icon size="18" className="shrink-0 text-gray-500" />}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
