import ClickableImage from "../../../components/ClickableImage.tsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "antd";
import LingoGame from "./LingoGame.tsx";
import BackButton from "../../../components/BackButton.tsx";
import { useGlobalState } from "../../../components/GlobalStateContext.tsx";
import {DiRuby} from "react-icons/di";
import BackgroundImage from "../../../components/Background.tsx";


const RaamLevel: React.FC = () => {
  const navigate = useNavigate();
  const [raadselActive, setRaadselActive] = useState(false);
  const [raadselGoedGeraaie, setRaadselGoedGeraaie] = useState(false);

  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [glep, setGlep] = useState(false);
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
            alert("Duizend jaren wachtte ik op een sterveling die mijn katachtige raadsel wist te temmen... en eindelijk is die dag aangebroken. Wijsheid en moed hebben je geleid naar het juiste antwoord. De robijn straalt nu in jouw hand! 47 fluistert zijn geheimen enkel aan de meest waardige, en de uitverkorene ben jij, o Onbetwiste Denker, ik buig voor u... Ohja, en: VO!");
        }
    };


    return (
    <div>
        <BackgroundImage />
      <BackButton />
        <ClickableImage
            path="/desk_level/raam_level/RaamBackground.png"
            size={{ w: 1024, h: 768 }}
            location={{ x: 0, y: 0 }}
            onClick={() => setRaadselActive(false)}
        />
        <ClickableImage
            path="/desk_level/raam_level/Zaadhuis1.png"
            size={{ w: 543, h: 717 }}
            location={{ x: 504, y: -62 }}
        />
      <ClickableImage
        path="/desk_level/raam_level/65.png"
        size={{ w: 26, h: 27 }}
        location={{ x: 913, y: 408 }}
      />
        <ClickableImage
            path="/desk_level/raam_level/Glep1.png"
            visible={glep}
            clickable={true}
            onClick={() => setGlep(false)}
            size={{ w: 159, h: 174 }}
            location={{ x: 635, y: 182 }}
        />
        <ClickableImage
            path="/desk_level/raam_level/Glep2.png"
            visible={!glep}
            clickable={true}
            onClick={() => setGlep(true)}
            size={{ w: 159, h: 174 }}
            location={{ x: 635, y: 182 }}
        />
        <ClickableImage
            path="/desk_level/raam_level/Zaadhuis2.png"
            size={{ w: 543, h: 717 }}
            location={{ x: 504, y: -62 }}
            style={{ pointerEvents: "none" }}
        />
        <ClickableImage
            path="/desk_level/raam_level/65.png"
            size={{ w: 26, h: 27 }}
            location={{ x: 913, y: 408 }}
        />
        <ClickableImage
            path="/desk_level/raam_level/spit.gif"
            size={{ w: 273, h: 287 }}
            location={{ x: 465, y: 114 }}
            visible={!glep}
        />
        <ClickableImage
            path="/desk_level/raam_level/Glep1.gif"
            size={{ w: 314, h: 142 }}
            location={{ x: 765, y: 153 }}
            visible={glep}
        />
        {glep && (
            <p style={{ position: "absolute", top: "180px", left: "808px", color: "green" }}>
                BHAABBA-GHA
            </p>
        )}
        {glep && (
            <p style={{ position: "absolute", top: "220px", left: "808px", color: "green" }}>
                NAB-BHBSHUH
            </p>
        )}
        {glep && (
            <p style={{ position: "absolute", top: "200px", left: "808px", color: "green" }}>
                DIDIBAJA
            </p>
        )}
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
