import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "./GlobalStateContext";

const NavigationBar = () => {
    const { isWikiOpen } = useGlobalState();

    return (
        <div className={`absolute top-[768px] left-0 ${isWikiOpen ? "pointer-events-none opacity-50" : ""}`}>
            <div
                className="p-[4px] rounded-xl"
                style={{
                    background: "linear-gradient(to right, #232d70, #ff0000)", // 🎨 Gradient border
                    padding: "2px", // Border thickness
                    borderRadius: "12px", // Match inner border-radius
                    opacity: isWikiOpen ? "0.3" : "0.8", // Make it visually less prominent
                }}
            >
                <div className={`flex gap-4 bg-black/50 backdrop-blur-xl p-4 border border-transparent rounded-xl shadow-2xl`}>
                    {/* Desk Level */}
                    <Link to="/desk-level" className={isWikiOpen ? "pointer-events-none opacity-50" : ""}>
                        <img
                            src="/NavDesk.png"
                            alt="Desk Level"
                            className="h-24 w-24 hover:scale-110 hover:brightness-110 transition-all
                                      border border-purple-500 rounded-lg shadow-md"
                        />
                    </Link>

                    {/* Deur Level */}
                    <Link to="/deur-level" className={isWikiOpen ? "pointer-events-none opacity-50" : ""}>
                        <img
                            src="/NavDeur.png"
                            alt="Tapijt Level"
                            className="h-24 w-24 hover:scale-110 hover:brightness-110 transition-all
                                      border border-purple-500 rounded-lg shadow-md"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
