import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div className="absolute top-[768px] left-0">
            <div className="flex gap-4 bg-blue-100 p-4 border-2 border-red-100 rounded-2xl w-fit shadow-md">
                <Link to="/desk-level">
                    <img
                        src="/desk_level/Desk-background.png"
                        alt="Desk Level"
                        className="h-24 w-24 hover:scale-105 hover:cursor-pointer border-2 border-purple-600 rounded-lg"
                    />
                </Link>

                <Link to="/deur-level">
                    <img
                        src="/deur_level/DeurView.png"
                        alt="Tapijt Level"
                        className="h-24 w-24 hover:scale-105 hover:cursor-pointer border-2 border-purple-600 rounded-lg"
                    />
                </Link>
            </div>
        </div>
    );
};

export default NavigationBar;
