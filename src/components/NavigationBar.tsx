import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="flex justify-around bg-gray-200 p-4">
      <Link to="/desk-level">
        <img
          src="/desk_level/Desk-background.png"
          alt="Desk Level"
          className="h-16 w-16"
        />
      </Link>

      <Link to="/deur-level">
        <img
          src="/deur_level/DeurView.png"
          alt="Tapijt Level"
          className="h-16 w-16"
        />
      </Link>
    </div>
  );
};

export default NavigationBar;
