import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="flex justify-around bg-gray-200 p-4">
      <Link to="/wikipedia-level">
        <img
          src="wikipedia_level/Wiki-background.png"
          alt="Wikipedia Level"
          className="h-16 w-16"
        />
      </Link>
      <Link to="/desk-level">
        <img
          src="wikipedia_level/Wiki-background.png"
          alt="Desk Level"
          className="h-16 w-16"
        />
      </Link>
      <Link to="/raam-level">
        <img
          src="raam_level/RaamView.png"
          alt="Raam Level"
          className="h-16 w-16"
        />
      </Link>
      <Link to="/tafel-level">
        <img
          src="tafel_level/TroepTafelView.png"
          alt="Tafel Level"
          className="h-16 w-16"
        />
      </Link>
      <Link to="/tapijt-level">
        <img
          src="tapijt_level/TapijtView.png"
          alt="Tapijt Level"
          className="h-16 w-16"
        />
      </Link>
    </div>
  );
};

export default NavigationBar;
