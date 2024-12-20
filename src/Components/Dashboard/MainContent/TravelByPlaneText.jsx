import React from "react";
import { Typography } from "@material-tailwind/react";

export default function TravelByPlaneText({ title }) {
  return (
    <div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mt-1">
          {title}
        </Typography>
      </div>
    </div>
  );
}
