import React, {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import ClickableImage from "../../components/ClickableImage.tsx";
import {DeurLevelPaths } from "../../utils.tsx";
import { useVisibility } from "../../components/VisibilityContext";
import { useGlobalState } from "../../components/GlobalStateContext";

const audio = new Audio("/deur_level/Projector.mp3");

const DeurLevel: React.FC = ({}) => {
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);
    const { popups, setPopup, puzzlesSolved, markPuzzleAsSolved, toggleVisibility, isVisible, kledingIndex, vouwIndex, cycleKleding, cycleVouw, resetVouwSequence } = useGlobalState();

    const handleRotate = () => {
        setRotation(prev => prev + 50); // Rotate by 10 degrees on each click
    };
    const kledingFolders = ["blouse", "jas", "hose", "band"];

    const toggleSound = () => {
        if (isVisible) {
            stopSound();
        } else {
            playSound();
        }
    }

    const playSound = () => {
        audio.currentTime = 0; // Restart audio if already playing
        audio.play();
    };

    const stopSound = () => {
        audio.pause();
    };

    const vouwImages: { [key: string]: string[] } = {
        blouse: [
            "/deur_level/blouse/blouse-1.png",
            "/deur_level/blouse/blouse-2.png",
            "/deur_level/blouse/blouse-3.png",
            "/deur_level/blouse/blouse-4.png",
            "/deur_level/blouse/blouse-5.png",
        ],
        jas: [
            "/deur_level/jas/jas-1.png",
            "/deur_level/jas/jas-2.png",
            "/deur_level/jas/jas-3.png",
            "/deur_level/jas/jas-4.png",
            "/deur_level/jas/jas-5.png",
        ],
        hose: [
            "/deur_level/hose/lederhose-01.png",
            "/deur_level/hose/lederhose-02.png",
            "/deur_level/hose/lederhose-03.png",
            "/deur_level/hose/lederhose-04.png",
            "/deur_level/hose/lederhose-05.png",
        ],
        band: [
            "/deur_level/band/band-1.png",
            "/deur_level/band/band-2.png",
        ]
    };
    const currentKleding = kledingFolders[kledingIndex]; // ✅ Get Current Folder
    const currentVouw = vouwImages[currentKleding][vouwIndex ?? 0];

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
            location={{ x: 309, y: 475 }}
            clickable={true}
            onClick={() => {
                const maxVouwIndex = vouwImages[currentKleding].length - 1; // ✅ Dynamically get the last index

                if (vouwIndex === null) {
                    cycleVouw(); // ✅ Start sequence
                } else if (vouwIndex < maxVouwIndex) {
                    cycleVouw(); // ✅ Next image
                } else {
                    cycleKleding(); // ✅ Cycle to next folder when done
                    resetVouwSequence(); // ✅ Reset image sequence
                }
            }}
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
        onClick={() => {
            toggleSound();
            toggleVisibility();
        }}
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
            size={{ w: 80, h: 239 }}
            location={{ x: 130, y: 234 }}
            clickable={true}
            visible={puzzlesSolved["Tapijt"]===true}
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
        {vouwIndex !== null && vouwIndex < vouwImages[currentKleding].length && (
            <ClickableImage
                path={vouwImages[currentKleding][vouwIndex]}
                size={{ w: 400, h: 400 }}
                location={{ x: 312, y: 184 }}
                clickable={true}
                onClick={() => {
                    const maxVouwIndex = vouwImages[currentKleding].length - 1;
                    if (vouwIndex < maxVouwIndex) {
                        cycleVouw();
                    } else {
                        cycleKleding();
                        resetVouwSequence();
                    }
                }}
            />
        )}


    </div>
  );
};

export default DeurLevel;
