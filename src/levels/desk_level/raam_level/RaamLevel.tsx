import ClickableImage from "../../../components/ClickableImage.tsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "antd";
import LingoGame from "./LingoGame.tsx";
import BackButton from "../../../components/BackButton.tsx";
import { addRuby } from "../../../utils.tsx";

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

  const correctGuess = () => {
    setRaadselActive(false);
    setRaadselGoedGeraaie(true);
  };
  return (
    <div>
      <BackButton />
      <img
        className="relative h-[768px] w-[1024px]"
        src="/desk_level/raam_level/RaamView.png"
        onClick={() => setRaadselActive(false)}
      />
      <div
        className={`absolute z-10 flex gap-2  justify-center drop-shadow-2xl ${!raadselGoedGeraaie && "hidden"} text-green-500 text-4xl font-bold`}
        style={{ top: 250, left: 300, width: 400 }}
      >
        YOU HAVE IT GOED GERAAIEN!!
      </div>
      <ClickableImage
        path="/desk_level/raam_level/65.png"
        size={{ w: 26, h: 27 }}
        location={{ x: 913, y: 408 }}
      />
      <ClickableImage
        path="/desk_level/raam_level/Sphinx.png"
        size={{ w: 200, h: 200 }}
        location={{ x: 400, y: 400 }}
        clickable={true}
        isInventoriable={true}
        onClick={() => setRaadselActive(true)}
      />
      {/*Grote versie*/}
      <ClickableImage
        visible={raadselActive}
        onClick={(e) => e.stopPropagation()}
        path="/desk_level/raam_level/Raadsel.png"
        size={{ w: 791, h: 681 }}
        location={{ x: 126, y: 28 }}
      />
      <div
        className={`absolute flex gap-2  justify-center ${!raadselActive && "hidden"}`}
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
        className={`absolute flex flex-col gap-2 ${!raadselActive && "hidden"}`}
        style={{ top: 500, left: 375, width: 400 }}
      >
        {guesses.map((g) => (
          <LingoGame
            guessedWord={g}
            wordLength={lingoAnswer.length}
            answer={lingoAnswer}
            onCorrect={() => correctGuess()}
          />
        ))}
      </div>
    </div>
  );
};

export default RaamLevel;
