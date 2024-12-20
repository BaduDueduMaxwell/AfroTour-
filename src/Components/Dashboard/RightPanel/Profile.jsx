import React from "react";
import ProfileImage from "./AvartarWithText";
import SarahPhoto from "../../../assets/Sarah.png";
import { ChevronDown } from "lucide-react";
import ProfileText from "./ProfileText";

export default function Profile() {
  return (
    <div>
      <div className="flex items-center justify-center px-4 py-2">
        <ProfileImage
          name="Sarah Delores"
          location="Durham, Ontario"
          variantHeader="h6"
          src={SarahPhoto}
          alt="Sarah Delores"
          withBackground={false}
        />
        <ChevronDown size="18" className="ml-8 shrink-0" />
      </div>
      <ProfileText text="Please, Finish your profile!" textblue="Edit Now" />
      <div className="border-b border-gray-200 rounded-lg pt-1"></div>
    </div>
  );
}
