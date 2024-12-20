import Greet from "../RightPanel/AvartarWithText";
import { BellDot } from "lucide-react";

export default function Greeting() {
  return (
    <div className="flex items-center justify-between py-3">
      <Greet
        name="Hello, Sarah!"
        location="Welcome back and explore the world."
        variantHeader="h3"
        className="font-medium"
      />
      <BellDot />
    </div>
  );
}
