import React from "react";

export default function Logo() {
  return (
    <div>
      <a href="https://flowbite.com/" className="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          AfroTour
        </span>
      </a>
    </div>
  );
}
