import React, { useState } from "react";
import { Input } from "antd";
import { DiRuby } from "react-icons/di";
import { useGlobalState } from "../components/GlobalStateContext.tsx";

interface GuessWordProps {
    correctWord: string;
    visible?: boolean;
    onCorrect: () => void;
}

const RaadWoordComponent: React.FC<GuessWordProps> = ({ correctWord, onCorrect, visible = false }) => {
    const [inputValue, setInputValue] = useState("");
    const { addRuby, getNextNegativeMessage, getNextPositiveMessage } = useGlobalState();



    const handleGuess = () => {
        if (inputValue.trim().toLowerCase() === correctWord.toLowerCase()) {
            addRuby();
            alert(getNextPositiveMessage());
            onCorrect();
        } else {
            alert(getNextNegativeMessage());
        }
        setInputValue(""); // ✅ Clear input after submitting
    };

    return visible ? (
        <div
            className={`absolute top-[750px] left-[1024px] transform -translate-x-full -translate-y-full p-3 rounded-xl transition-all ${
                visible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            } flex items-center`}
            style={{
                background: "rgba(0, 0, 0, 0)", // ✅ Fully Transparent Background
                borderColor: "rgba(0, 0, 0, 0)", // ✅ Fully Transparent Border
                boxShadow: "none", // ✅ Remove outer glow
                gap: "10px", // ✅ Adds space between text box and button
            }}
        >
            <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter your guess"
                className="bg-transparent text-white placeholder-gray-400 border border-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500 rounded-lg p-2 w-[180px]"
            />
            <button
                onClick={handleGuess}
                className="transition-all flex items-center justify-center hover:scale-110"
                style={{
                    background: "transparent", // ✅ Fully transparent background
                    border: "none", // ✅ No border at all
                    outline: "none", // ✅ Prevent any focus outline
                    padding: "0", // ✅ Remove button padding to avoid extra clickable space
                    cursor: "pointer", // ✅ Ensure the ruby icon is still clickable
                }}
            >
                <DiRuby className="size-8 text-[#ff1a1a] drop-shadow-[0_0_15px_rgba(255,50,50,0.9)] brightness-150 contrast-200 saturate-200" />
            </button>
        </div>
    ) : null; // ✅ If `visible` is false, return nothing
};

export default RaadWoordComponent;
