import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className={"w-full flex justify-center"}>
      <div
        className={
          "flex justify-center gap-20 bg-blue-100 p-4 border border-2 border-red-100 rounded-2xl w-fit"
        }
      >
        <Link to="/desk-level">
          <img
            src="/desk_level/Desk-background.png"
            alt="Desk Level"
            className={
              "h-16 w-16 hover:scale-105 hover:cursor-pointer border border-purple-600 rounded-lg"
            }
          />
        </Link>

        <Link to="/deur-level">
          <img
            src="/deur_level/DeurView.png"
            alt="Tapijt Level"
            className={
              "h-16 w-16 hover:scale-105 hover:cursor-pointer border border-purple-600 rounded-lg"
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
