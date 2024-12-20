import React from "react";

export default function NavItem({ label, Icon, isActive }) {
  return (
    <>
      <button
        className={`flex items-center rounded-lg px-5 py-3 space-x-2
        ${isActive ? "bg-sky-500 text-slate-50" : "bg-slate text-gray-700"}
       hover:bg-sky-600 hover:text-slate-50 `}
      >
        {Icon && <Icon size="18" className="shrink-0" />}
        <span className="text-sm font-medium">{label}</span>
      </button>
    </>
  );
}
