import React, { useEffect } from "react";
import { DiRuby } from "react-icons/di";
import { useGlobalState } from "../components/GlobalStateContext.tsx";
import { useNavigate } from "react-router-dom";
import { Levels } from "../utils.tsx";

const Inventory: React.FC = () => {
    const { inventory, resetPuzzles, rubys } = useGlobalState();
    const navigate = useNavigate();

    useEffect(() => {
        if (rubys >= 10) {
            navigate(`/${Levels.FinishLevel}`); // ✅ Always go to FinishLevel
        }
    }, [rubys, navigate]);

    return (
        <div className="absolute top-[768px] left-[245px] flex justify-end">
            <div className="p-[4px] rounded-xl"
                 style={{
                     background: "linear-gradient(to right, #ff0000, #38104d, #232d70)",
                     padding: "2px",
                     borderRadius: "12px",
                     opacity: "0.8",
                 }}
            >
                <div className="flex flex-row space-x-4 bg-black/50 backdrop-blur-xl p-4 border border-transparent rounded-xl shadow-2xl">
                    <div className="relative size-24 border border-red-400 bg-black/30
                          flex flex-col items-center justify-center text-white font-semibold rounded-lg shadow-md">
                        <p className="absolute -top-2 text-md bg-red-500 px-2 py-1 rounded-full">{rubys}/10</p>
                        <DiRuby className="size-16 text-[#ff0000] drop-shadow-[0_0_20px_rgba(255,50,50,1)] mt-4 brightness-150 contrast-175 saturate-200 animate-pulse" />

                    </div>

                    <div className="flex flex-row space-x-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="size-24 border border-gray-500 rounded-lg flex items-center justify-center bg-black/30 shadow-md">
                                {inventory[index] && (
                                    <img src={inventory[index]} className="w-full h-full object-contain" alt="Inventory item" />
                                )}
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={resetPuzzles}
                        className="text-red-900 font-semibold px-4 py-2 !bg-red-300 !hover:scale-110 rounded-lg transition-all shadow-md"
                    >
                        RESTART
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
