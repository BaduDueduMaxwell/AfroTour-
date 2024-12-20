import React from "react";
import LocationCard from "./AvartarWithText";

export default function Card() {
  return (
    <div>
      <LocationCard
        name="Desert Uetune"
        date="08-14 September 2024"
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avartar"
        variant="rounded"
        withBackground={true}
        // TravelPackagesImage={false}
      />
      <LocationCard
        name="Mount Bromo"
        date="08-14 June 2024"
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avartar"
        variant="rounded"
        withBackground={true}
        // TravelPackagesImage={false}
      />
      <LocationCard
        name="Palm Madigasca"
        date="08-14 December 2024"
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avartar"
        variant="rounded"
        withBackground={true}
        // TravelPackagesImage={false}
      />
    </div>
  );
}
