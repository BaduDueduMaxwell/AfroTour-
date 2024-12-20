import React from "react";
import { Avatar, Typography } from "@material-tailwind/react";

export default function TravelCard({
  imageSrc,
  altText,
  title,
  location,
  date,
  price,
  airline,
}) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden w-64">
      <Avatar
        src={imageSrc}
        alt={altText}
        className="h-32 w-full object-cover p-2" // Reduced image height
        variant="rounded"
      />
      <div className="p-3">
        <Typography variant="h6" className="font-bold mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="flex items-center">
          <span role="img" aria-label="location" className="mr-1">
            📍
          </span>
          {location}
        </Typography>
        <Typography variant="small" color="blue-gray" className="mt-1">
          {date}
        </Typography>
        <Typography
          variant="small"
          color="green"
          className="mt-1 font-semibold"
        >
          {airline}
        </Typography>
      </div>
      <div className="bg-sky-500 text-white text-center py-2">
        <Typography variant="h6">${price}/Day</Typography>
      </div>
    </div>
  );
}
