import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClickableImage from "../../components/ClickableImage.tsx";
import {DeurLevelPaths } from "../../utils.tsx";
import { useVisibility } from "../../components/VisibilityContext";
import { useGlobalState } from "../../components/GlobalStateContext";

const DeurLevel: React.FC = ({}) => {
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);
    const { popups, setPopup } = useGlobalState();
    const { isVisible, toggleVisibility, puzzlesSolved, markPuzzleAsSolved } = useGlobalState();

    const handleRotate = () => {
        setRotation(prev => prev + 50); // Rotate by 10 degrees on each click
    };
  return (
    <div>
        <ClickableImage
            path="/deur_level/DeurView.png"
            size={{ w: 1024, h: 768 }}
            location={{ x: 0, y: 0 }}
        />

      <ClickableImage
        path="/deur_level/BankBefore.png"
        size={{ w: 400, h: 200 }}
        location={{ x: 14, y: 600 }}
        clickable={true}
        onClick={() => {
            setPopup("popupKaart", true);
            markPuzzleAsSolved("Bank")
        }}
      />
        <ClickableImage
            path="/deur_level/BankAfter.png"
            visible={puzzlesSolved["Bank"] === true} // ✅ Funziona correttamente!
            size={{ w: 400, h: 200 }}
            location={{ x: 14, y: 600 }}
        />
      <ClickableImage
        path="/deur_level/Dozen.png"
        size={{ w: 314, h: 131 }}
        location={{ x: 542, y: 104 }}
        clickable={true}
        redirect={DeurLevelPaths.DozenLevel}
      />
      <ClickableImage
        path="/deur_level/Gordijn.png"
        size={{ w: 230, h: 583 }}
        location={{ x: -24, y: 52 }}
      />
      <ClickableImage
        path="/deur_level/Kleren.png"
        size={{ w: 230, h: 120 }}
        location={{ x: 349, y: 475 }}
        clickable={true}
      />
      <ClickableImage
        path="/deur_level/Poef.png"
        size={{ w: 152, h: 165 }}
        location={{ x: 376, y: 647 }}
      />
      <ClickableImage
        path="/deur_level/Projector.png"
        clickable={true}
        size={{ w: 154, h: 54 }}
        location={{ x: 310, y: 183 }}
        onClick={toggleVisibility}
      />
      <ClickableImage
        path="/deur_level/Boeken.png"
        clickable={true}
        size={{ w: 91, h: 51 }}
        location={{ x: 412, y: 662 }}
      />
      <ClickableImage
        path="/deur_level/Plank.png"
        size={{ w: 724, h: 147 }}
        location={{ x: 152, y: 210 }}
      />
        <ClickableImage
            path="/deur_level/TapijtBefore.png"
            size={{ w: 93, h: 245 }}
            location={{ x: 126, y: 239 }}
            visible={!puzzlesSolved["Tapijt"]}
            clickable={true}
            redirect={DeurLevelPaths.TapijtLevel}
        />
        <ClickableImage
            path="/deur_level/TapijtAfter.png"
            size={{ w: 93, h: 245 }}
            location={{ x: 126, y: 239 }}
            clickable={true}
            visible={puzzlesSolved["Tapijt"]}
            redirect={DeurLevelPaths.TapijtLevel}
        />
        <ClickableImage
            path="/deur_level/Lamp.png"
            size={{ w: 100, h: 100 }}
            location={{ x: 110, y: 434 }}
            clickable={true}
            onClick={handleRotate}
            style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.3s ease",
            }}
        />
        <ClickableImage
            path="/deur_level/popups/KaartKussen.gif"
            visible={popups["popupKaart"]===true}
            size={{ w: 850, h: 600 }}
            location={{ x: 100, y: 50 }}
            clickable={true}
            onClick={() => setPopup("popupKaart", false)}
        />
    </div>
  );
};

export default DeurLevel;
