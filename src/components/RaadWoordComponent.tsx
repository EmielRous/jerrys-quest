import React, { useState } from "react";
import { Input, Button } from "antd";
import { addRuby } from "../utils.tsx";

interface GuessWordProps {
  correctWord: string;
}

const RaadWoordComponent: React.FC<GuessWordProps> = ({
  correctWord,
  onCorrect,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleGuess = () => {
    if (inputValue.trim().toLowerCase() === correctWord.toLowerCase()) {
      addRuby();
      alert("Good job! You deserve a ruby.");
      onCorrect();
    } else {
      alert("Try again!");
    }
  };

  return (
    <div
      className={
        "absolute top-[750px] left-[1024px] transform -translate-x-full -translate-y-full p-5 rounded-xl bg-green-400"
      }
      style={{ display: "flex", alignItems: "center" }}
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
