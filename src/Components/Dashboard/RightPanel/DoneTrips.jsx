import React from "react";
import Title from "./Title";
import Card from "./Card";

export default function DoneTrips() {
  return (
    <div>
      <div className="mt-5">
        <Title name="Done Trips" />
      </div>
      <div className="mt-5">
        <Card />
      </div>
    </div>
  );
}
