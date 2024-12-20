import React from "react";
import Profile from "./Profile";
import Calendar from "./Calendar";
import DoneTrips from "./DoneTrips";

export default function RightPanel() {
  return (
    <div className="px-5">
      <div className="hidden lg:block">
        <Profile />
      </div>
      <div className="hidden lg:block">
        <Calendar />
      </div>
      <DoneTrips />
    </div>
  );
}
