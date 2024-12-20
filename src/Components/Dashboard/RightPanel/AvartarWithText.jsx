import { Avatar, Typography } from "@material-tailwind/react";

export default function AvatarWithText({
  src,
  alt,
  variant,
  name,
  location,
  date,
  variantHeader,
  withBackground = false,
  TravelPackage = false,
  TravelPackagesImage = false,
  TravelPackageDiv = false,
  textOnSky = "Special Offer!", // Text on sky-blue background
}) {
  return (
    <div
      className={`relative flex items-center gap-4 ${
        withBackground
          ? "border border-gray-200 py-4 px-3 my-2 gray font-medium rounded-lg "
          : ""
      } ${TravelPackage ? "border border-red-500 flex-col w-64 mx-14 " : ""}
      ${
        TravelPackageDiv
          ? "pt-2 pb-6 w-40 rounded-lg bg-slate-50 after:content-[''] after:block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 "
          : ""
      }`}
    >
      {/* Conditionally render Avatar only if src is provided */}
      {src && (
        <Avatar
          src={src}
          alt={alt}
          variant={variant}
          className={`${TravelPackagesImage ? "w-48 h-28" : ""}`}
        />
      )}

      <div>
        <Typography variant={variantHeader}>{name}</Typography>
        <Typography variant="small" color="gray" className="font-medium">
          {location}
          {date}
        </Typography>
      </div>

      {/* Add text on the same line as the sky-blue background */}
      {TravelPackageDiv && (
        <div className="absolute bottom-0 left-0 w-full flex justify-center items-center">
          <div className="bg-sky-500 text-white px-10 py-3 rounded-b-lg">
            <Typography variant="small">{textOnSky}</Typography>
          </div>
        </div>
      )}
    </div>
  );
}
