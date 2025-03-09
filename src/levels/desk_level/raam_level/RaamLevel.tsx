import ClickableImage from "../../../components/ClickableImage.tsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "antd";
import LingoGame from "./LingoGame.tsx";
import BackButton from "../../../components/BackButton.tsx";

const RaamLevel: React.FC = () => {
  const navigate = useNavigate();
  const [raadselActive, setRaadselActive] = useState(false);
  const [raadselGoedGeraaie, setRaadselGoedGeraaie] = useState(false);
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const lingoAnswer = "apple";
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
        size={{ w: 100, h: 100 }}
        location={{ x: 200, y: 200 }}
      />
      <ClickableImage
        visible={!raadselActive}
        path="/desk_level/raam_level/Raadsel.png"
        size={{ w: 150, h: 150 }}
        location={{ x: 300, y: 300 }}
        clickable={true}
        onClick={() => setRaadselActive(!raadselActive)}
      />
      {/*Grote versie*/}
      <ClickableImage
        visible={raadselActive}
        onClick={(e) => e.stopPropagation()}
        path="/desk_level/raam_level/Raadsel.png"
        size={{ w: 700, h: 550 }}
        location={{ x: 150, y: 20 }}
      />
      <div
        className={`absolute flex gap-2  justify-center ${!raadselActive && "hidden"}`}
        style={{ top: 440, left: 300, width: 400 }}
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
      <ClickableImage
        visible={raadselGoedGeraaie}
        path="/desk_level/raam_level/Sphinx.png"
        size={{ w: 200, h: 200 }}
        location={{ x: 400, y: 400 }}
        clickable={true}
        isInventoriable={true}
      />
    </div>
  );
};

export default RaamLevel;
