import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div className="absolute top-[768px] left-0">
            <div className="flex gap-4
                        bg-gradient-to-br from-blue-900/80 to-red-900/80

                        backdrop-blur-xl p-4 border border-gray-700 rounded-xl shadow-xl">

                {/* Desk Level */}
                <Link to="/desk-level">
                    <img
                        src="/NavDesk.png"
                        alt="Desk Level"
                        className="h-24 w-24 hover:scale-110 hover:brightness-110 transition-all
                                  border border-purple-500 rounded-lg shadow-md"
                    />
                </Link>

                {/* Deur Level */}
                <Link to="/deur-level">
                    <img
                        src="/NavDeur.png"
                        alt="Tapijt Level"
                        className="h-24 w-24 hover:scale-110 hover:brightness-110 transition-all
                                  border border-purple-500 rounded-lg shadow-md"
                    />
                </Link>

            </div>
        </div>
    );
};

export default NavigationBar;
