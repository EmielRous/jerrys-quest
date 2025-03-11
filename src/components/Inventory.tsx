import React from "react";
import { DiRuby } from "react-icons/di";
import { useGlobalState } from "../components/GlobalStateContext.tsx";

const Inventory: React.FC = () => {
    const { inventory, resetPuzzles, rubys } = useGlobalState();

    return (
        <div className="absolute top-[768px] left-[245px] flex justify-end">
            <div className="flex flex-row space-x-4

                        bg-gradient-to-br from-red-900/80 via-red-900/50 to-purple-900/80
                        backdrop-blur-xl p-4 border border-gray-700 rounded-xl shadow-2xl">

                {/* Ruby Counter */}
                <div className="relative size-24 border border-red-400 bg-black/30
                          flex flex-col items-center justify-center text-white font-semibold rounded-lg shadow-md">
                    <p className="absolute -top-2 text-md bg-red-500 px-2 py-1 rounded-full">{rubys}/10</p>
                    <DiRuby className="size-16 text-red-400 drop-shadow-lg mt-4" />
                </div>

                {/* Inventory slots */}
                <div className="flex flex-row space-x-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="size-24 border border-gray-500 rounded-lg flex items-center justify-center
                                            bg-black/30 shadow-md">
                            {inventory[index] && (
                                <img src={inventory[index]} className="w-full h-full object-contain" alt="Inventory item" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Restart Button */}
                <button
                    onClick={resetPuzzles}
                    className="text-white font-semibold px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-all shadow-md"
                >
                    RESTART
                </button>

            </div>
        </div>
    );
};

export default Inventory;
