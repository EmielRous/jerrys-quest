import React, { useState } from "react";
import { Input, Button } from "antd";
import { useGlobalState } from "../components/GlobalStateContext.tsx"; // ✅ Import global state

interface GuessWordProps {
  correctWord: string;
  visible?: boolean;
  onCorrect: () => void; // ✅ Ensure `onCorrect` is passed
}

const RaadWoordComponent: React.FC<GuessWordProps> = ({
                                                        correctWord,
                                                        onCorrect,
                                                        visible = false,
                                                      }) => {
  const [inputValue, setInputValue] = useState("");
  const { addRuby } = useGlobalState(); // ✅ Use global function

  const handleGuess = () => {
    if (inputValue.trim().toLowerCase() === correctWord.toLowerCase()) {
      addRuby(); // ✅ Use global function instead of `addRuby()` from `utils.tsx`
      alert("Good job! You deserve a ruby.");
      onCorrect();
    } else {
      alert("Try again!");
    }
  };

  return (
      <div
          className="absolute top-[750px] left-[1024px] transform -translate-x-full -translate-y-full p-5 rounded-xl bg-green-400"
          style={{ display: "flex", alignItems: "center", visibility: visible ? "visible" : "hidden" }}
      >
        <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your guess"
            style={{ marginRight: "8px" }}
        />
        <Button type="primary" onClick={handleGuess}>
          Guess
        </Button>
      </div>
  );
};

export default RaadWoordComponent;
