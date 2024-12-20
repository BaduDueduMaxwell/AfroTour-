import React from "react";

export default function Title({ name, handle }) {
  return (
    <div>
      <p className="font-medium text-neutral-900">{name}</p>
      <p className="text-xs text-neutral-600">{handle}</p>
    </div>
  );
}
