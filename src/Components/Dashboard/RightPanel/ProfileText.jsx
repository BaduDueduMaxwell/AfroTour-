import React from "react";

export default function ProfileText({ text, textblue }) {
  return (
    <div className="pl-5">
      <p className="text-xs text-neutral-600">
        {text}
        <span className="px-1 text-sky-600">{textblue}</span>
      </p>
    </div>
  );
}
