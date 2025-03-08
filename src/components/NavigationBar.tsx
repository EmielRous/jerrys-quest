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
          alt="Level Two"
          className="h-16 w-16"
        />
      </Link>
      <Link to="/level-three">
        <img
          src="wikipedia_level/Wiki-background.png"
          alt="Level Three"
          className="h-16 w-16"
        />
      </Link>
    </div>
  );
};

export default NavigationBar;
