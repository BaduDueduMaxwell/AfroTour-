import React from "react";
import Greet from "./Greeting";
import Search from "./Search";
import TravelByPlaneText from "./TravelByPlaneText";
import TravelPackages from "./TravelPackages";
import CategorizedOffers from "./CategorizedOffers";

export default function MainContent() {
  return (
    <div className="bg-gray-50 w-full h-full rounded-3xl">
      <div className="mx-10">
        <Greet />
        <Search />
        <TravelByPlaneText title="Travel by Plane" />
      </div>
      <TravelPackages />
      <div className="mx-10">
        <CategorizedOffers />
      </div>
    </div>
  );
}
