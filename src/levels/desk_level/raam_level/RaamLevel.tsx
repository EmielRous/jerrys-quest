import ClickableImage from "../../../components/ClickableImage.tsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "antd";
import LingoGame from "./LingoGame.tsx";
import BackButton from "../../../components/BackButton.tsx";
import { useGlobalState } from "../../../components/GlobalStateContext.tsx";
import {DiRuby} from "react-icons/di";


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
            alert("Aaah! Je bent de eerste in duizend jaar die mijn raadsel weet te beantwoorden. Hier, je verdient hem.");
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
            className={`absolute flex gap-4 justify-center ${(!raadselActive || puzzlesSolved["Sphinx"]) && "hidden"}`}
            style={{ top: 530, left: 240, width: 550 }}
        >

            <Input.OTP
                length={lingoAnswer.length}
                rootClassName={"w-full h-full flex gap-2"} // ✅ Add gap between boxes
                value={guess}
                onChange={(e) => setGuess(e)}
                style={{ display: "flex", justifyContent: "center", gap: "2px" }} // ✅ Ensures consistent spacing
            />
            <button
                onClick={() => putInGuess(guess)}
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
        <div
            className={`absolute ${!raadselActive && "hidden"}`}
            style={{
                top: 570, // ✅ Align with input squares
                left: 240, // ✅ Start closer to the left
                width: 510,
                position: "absolute", // ✅ Allow absolute positioning inside
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
                        gap: "2px",
                    }}
                >
                    <LingoGame guessedWord={g} wordLength={lingoAnswer.length} answer={lingoAnswer} onCorrect={() => correctGuess()} />
                </div>
            ))}
        </div>
        <ClickableImage
            path="/JerrysQuest.png"
            size={{ w: 469, h: 73 }}
            location={{ x: 267, y: 0 }}
        />
    </div>
  );
};

export default RaamLevel;
