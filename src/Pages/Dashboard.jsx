import React from "react";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import MainContent from "../components/Dashboard/MainContent/MainContext";
import RightPanel from "../components/Dashboard/RightPanel/RightPanel";

export default function NewHome() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <Sidebar className="w-full md:w-1/6" />
      <div className="flex-grow py-5">
        <MainContent />
      </div>
      <RightPanel className="w-full md:w-1/6" />
    </div>

  );
}
