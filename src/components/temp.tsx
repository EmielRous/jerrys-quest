import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { DiRuby } from "react-icons/di"; // 🔥 Import Ruby Icon
import { useGlobalState } from "../components/GlobalStateContext.tsx";

interface GuessWordProps {
    correctWord: string;
    visible?: boolean;
    onCorrect: () => void;
}

const RaadWoordComponent: React.FC<GuessWordProps> = ({
                                                          correctWord,
                                                          onCorrect,
                                                          visible = false,
                                                      }) => {
    const [inputValue, setInputValue] = useState("");
    const { addRuby, getNextNegativeMessage, getNextPositiveMessage } = useGlobalState(); // ✅ Use global state

    // ✅ Reset input when visibility changes
    useEffect(() => {
        if (visible) setInputValue("");
    }, [visible]);

    const handleGuess = () => {
        if (inputValue.trim().toLowerCase() === correctWord.toLowerCase()) {
            addRuby();
            alert(getNextPositiveMessage()); // ✅ Cycle through positive messages
            onCorrect();
        } else {
            alert(getNextNegativeMessage()); // ✅ Cycle through negative messages
        }
    };

    return (
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
            {/* ✅ Vibrant Ruby Icon Button with Spacing */}
            <button
                onClick={handleGuess}
                className="px-3 py-2 rounded-lg transition-all flex items-center justify-center"
            >
                <DiRuby className="size-6 text-[#ff1a1a] drop-shadow-[0_0_15px_rgba(255,50,50,0.9)] brightness-150 contrast-200 saturate-200" />
            </button>
        </div>
    );
};

export default RaadWoordComponent;
