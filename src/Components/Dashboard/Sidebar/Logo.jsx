import React from "react";

export default function Logo() {
  return (
    <div className="text-2xl font-bold text-blue-500 mb-8">
      <a href="/" className="flex items-center">
        <img
          src="src/assets/afrotour.webp"
          className="h-8 mr-3"
          alt="AfroTour Logo"
        />
        <span className="self-center font-semibold whitespace-nowrap text-sky-500">
          AfroTour
        </span>
      </a>
    </div>
  );
}
