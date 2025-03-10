import ClickableImage from "../../../components/ClickableImage.tsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "antd";
import LingoGame from "./LingoGame.tsx";
import BackButton from "../../../components/BackButton.tsx";
import { useGlobalState } from "../../../components/GlobalStateContext.tsx";


const RaamLevel: React.FC = () => {
  const navigate = useNavigate();
  const [raadselActive, setRaadselActive] = useState(false);
  const [raadselGoedGeraaie, setRaadselGoedGeraaie] = useState(false);
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const lingoAnswer = "zevenenveertig";
  const putInGuess = (guess: string) => {
    setGuess("");
    setGuesses((prevState) => [...prevState, guess]);
  };
    const { addRuby, markPuzzleAsSolved, puzzlesSolved } = useGlobalState(); // ✅ Get addRuby from GlobalState

    const correctGuess = () => {
        if (!raadselGoedGeraaie) { // ✅ Only give Ruby if it hasn’t been solved yet
            setRaadselActive(false);
            setRaadselGoedGeraaie(true);
            markPuzzleAsSolved("Sphinx");
            addRuby();
            alert("Good job! You deserve a ruby.");
        }
    };


    return (
    <div>
      <BackButton />
        <ClickableImage
            path="/desk_level/raam_level/RaamView.png"
            size={{ w: 1024, h: 768 }}
            location={{ x: 0, y: 0 }}
            onClick={() => setRaadselActive(false)}
        />
      <ClickableImage
        path="/desk_level/raam_level/65.png"
        size={{ w: 26, h: 27 }}
        location={{ x: 913, y: 408 }}
      />
      <ClickableImage
        path="/desk_level/raam_level/Sphinx.png"
        size={{ w: 480, h: 290 }}
        location={{ x: 28, y: 229 }}
        clickable={!puzzlesSolved["Sphinx"]}
        onClick={() => setRaadselActive(true)}
      />
      <ClickableImage
        visible={raadselActive && !puzzlesSolved["Sphinx"]}
        onClick={(e) => e.stopPropagation()}
        path="/desk_level/raam_level/Raadsel.png"
        size={{ w: 791, h: 681 }}
        location={{ x: 126, y: 28 }}
      />
        <div
            className={`absolute flex gap-2 justify-center ${(!raadselActive || puzzlesSolved["Sphinx"]) && "hidden"}`}
            style={{ top: 530, left: 220, width: 600 }}
        >

        <Input.OTP
          length={lingoAnswer.length}
          rootClassName={"w-full h-full"}
          value={guess}
          onChange={(e) => setGuess(e)}
        />
        <Button onClick={() => putInGuess(guess)}>Guess!</Button>
      </div>
        <div
            className={`absolute ${!raadselActive && "hidden"}`}
            style={{
                top: 500, // ✅ Align with input squares
                left: 220, // ✅ Start closer to the left
                width: 600,
                position: "relative", // ✅ Allow absolute positioning inside
            }}
        >
            {guesses.map((g, index) => (
                <div
                    key={index}
                    style={{
                        position: "absolute", // ✅ Forces guesses to overwrite each other
                        top: 0, // ✅ All rows are positioned at the same top position
                        left: 0, // ✅ Aligns all guesses to the left
                        width: "100%", // ✅ Ensures the squares take up the full width
                        display: "flex",
                        justifyContent: "flex-start",
                        gap: "5px",
                    }}
                >
                    <LingoGame guessedWord={g} wordLength={lingoAnswer.length} answer={lingoAnswer} onCorrect={() => correctGuess()} />
                </div>
            ))}
        </div>
    </div>
  );
};

export default RaamLevel;
