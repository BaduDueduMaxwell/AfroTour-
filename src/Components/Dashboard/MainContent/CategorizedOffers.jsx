import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import CategorizedPackages from "../RightPanel/AvartarWithText";

export default function CategorizedOffers() {
  const [activeCategory, setActiveCategory] = useState("mostPopular");

  // Buttun Categories
  const btns = [
    { key: "mostPopular", label: "Most Popular" },
    { key: "specialOffers", label: "Special Offers" },
    { key: "nearMe", label: "Near Me" },
  ];

  // Travel package data
  const packages = {
    mostPopular: [
      {
        image: "https://docs.material-tailwind.com/img/face-2.jpg",
        title: "Mount Bromo",
        location: "Indonesia",
        price: "$248 / day",
      },
      {
        image: "https://docs.material-tailwind.com/img/face-2.jpg",
        title: "Lake Toba",
        location: "Indonesia",
        price: "$290 / day",
      },
      {
        image: "https://docs.material-tailwind.com/img/face-2.jpg",
        title: "Desert Uetune",
        location: "Thailand",
        price: "$308 / day",
      },
      {
        image: "https://docs.material-tailwind.com/img/face-2.jpg",
        title: "Palm Madagascar",
        location: "East Africa",
        price: "$314 / day",
      },
    ],
    specialOffers: [
      {
        image: "https://docs.material-tailwind.com/img/face-2.jpg",
        title: "Safari Kenya",
        location: "Kenya",
        price: "$220 / day",
      },
      {
        image: "https://docs.material-tailwind.com/img/face-2.jpg",
        title: "Great Barrier Reef",
        location: "Australia",
        price: "$340 / day",
      },
      {
        image: "https://docs.material-tailwind.com/img/face-2.jpg",
        title: "Aurora Borealis",
        location: "Norway",
        price: "$500 / day",
      },
      {
        image: "https://docs.material-tailwind.com/img/face-2.jpg",
        title: "Santorini",
        location: "Greece",
        price: "$410 / day",
      },
    ],
    nearMe: [
      {
        image: "https://docs.material-tailwind.com/img/face-2.jpg",
        title: "London Bridge",
        location: "UK",
        price: "$150 / day",
      },
      {
        image: "https://docs.material-tailwind.com/img/face-2.jpg",
        title: "Stonehenge",
        location: "UK",
        price: "$180 / day",
      },
      {
        image: "https://docs.material-tailwind.com/img/face-2.jpg",
        title: "The Highlands",
        location: "Scotland",
        price: "$200 / day",
      },
      {
        image: "https://docs.material-tailwind.com/img/face-2.jpg",
        title: "Big Ben",
        location: "UK",
        price: "$140 / day",
      },
    ],
  };

  return (
    <div>
      <div className="my-10 space-x-4 flex flex-row">
        {btns.map(({ key, label }) => (
          <Button
            key={key}
            variant="text"
            size="sm"
            onClick={() => setActiveCategory(key)}
            className={
              activeCategory === key ? "bg-sky-500 text-white" : "bg-gray-200"
            }
          >
            {label}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {packages[activeCategory].map((pkg, index) => (
          <CategorizedPackages
            key={index}
            name={pkg.title}
            date="08-14 September 2024"
            src={pkg.image}
            alt="avartar"
            variant="rounded"
            withBackground={true}
          />
        ))}
      </div>
    </div>
  );
}
