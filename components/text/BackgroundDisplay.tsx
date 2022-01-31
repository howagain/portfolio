import { ReactChild } from "react";
import SideParallax from "../utility/SideParallax";

type Props = {
  children: ReactChild;
};

const BackgroundDisplay = ({ children: text }: Props) => {
  return (
    <SideParallax>
      <h2 className="text-gray-400 text-6xl whitespace-nowrap font-bold my-0 text-center">
        {text}
      </h2>
    </SideParallax>
  );
};

export default BackgroundDisplay;
