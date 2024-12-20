import React from "react";
import TravelCard from "./TravelCard";

export default function TravelPackages() {
  return (
    <div className="flex flex-col gap-8 items-center px-8 py-4 md:flex-row">
      <TravelCard
        imageSrc="https://docs.material-tailwind.com/img/face-2.jpg" // Replace with actual image URL
        altText="Mount Bromo"
        title="Mount Bromo"
        location="Jl. Minato No.2 Ponorogo"
        date="08 DEC 9.10 PM"
        price="248"
        airline="Citilink"
      />
      <TravelCard
        imageSrc="https://docs.material-tailwind.com/img/face-2.jpg" // Replace with actual image URL
        altText="Mount Bromo"
        title="Mount Bromo"
        location="Jl. Minato No.2 Ponorogo"
        date="08 DEC 9.10 PM"
        price="248"
        airline="Citilink"
      />
      <TravelCard
        imageSrc="https://docs.material-tailwind.com/img/face-2.jpg" // Replace with actual image URL
        altText="Mount Bromo"
        title="Mount Bromo"
        location="Jl. Minato No.2 Ponorogo"
        date="08 DEC 9.10 PM"
        price="248"
        airline="Citilink"
      />
    </div>
  );
}
