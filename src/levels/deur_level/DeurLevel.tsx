import React, {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import ClickableImage from "../../components/ClickableImage.tsx";
import {DeurLevelPaths } from "../../utils.tsx";
import { useVisibility } from "../../components/VisibilityContext";
import { useGlobalState } from "../../components/GlobalStateContext";
import RaadWoordComponent from "../../components/RaadWoordComponent.tsx";
import BackgroundImage from "../../components/Background.tsx";

const audio = new Audio("/deur_level/Projector.mp3");

const DeurLevel: React.FC = ({}) => {
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);
    const { popups, setPopup, puzzlesSolved, markPuzzleAsSolved, toggleVisibility, isVisible, kledingIndex, vouwIndex, cycleKleding, cycleVouw, resetVouwSequence } = useGlobalState();

    const handleRotate = () => {
        setRotation(prev => prev + 50); // Rotate by 10 degrees on each click
    };
    const kledingFolders = ["blouse", "jas", "hose", "band"];
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleSound = () => {
        if (isVisible) {
            stopSound();
        } else {
            playSound();
        }
    }
    const playHarp = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/deur_level/Mondharp.opus"); // Adjust the path to your MP3
        }
        audioRef.current.currentTime = 0; // Restart audio if already playing
        audioRef.current.play();
    };

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
            "/deur_level/band/band-3.png",
            "/deur_level/band/band-4.png",
            "/deur_level/band/band-5.png",
        ]
    };
    const currentKleding = kledingFolders[kledingIndex]; // ✅ Get Current Folder
    const currentVouw = vouwImages[currentKleding][vouwIndex ?? 0];

  return (
    <div>
        <BackgroundImage />
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
            markPuzzleAsSolved("Bank");
            playHarp();
        }}
      />
        <ClickableImage
            path="/deur_level/BankAfter.png"
            visible={puzzlesSolved["Bank"] === true} // ✅ Funziona correttamente!
            size={{ w: 400, h: 200 }}
            location={{ x: 14, y: 600 }}
        />
        <ClickableImage
            path="/deur_level/Mobiel.png"
            clickable={true}
            size={{ w: 66, h: 50 }}
            location={{ x: 136, y: 661 }}
            onClick={() => {setPopup("popupMobiel", true);}}
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
        clickable={!puzzlesSolved["Boek"]}
        size={{ w: 91, h: 51 }}
        location={{ x: 412, y: 662 }}
        onClick={!puzzlesSolved["Boek"] ? () => setPopup("popupBoek", true) : undefined}
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
        <ClickableImage
        path="/deur_level/popups/BoekDuo.gif"
        visible={popups["popupBoek"]===true && !puzzlesSolved["Boek"]}
        size={{ w: 1024, h: 768 }}
        location={{ x: 0, y: 0 }}
        clickable={true}
        onClick={() => setPopup("popupBoek", false)}
    />
        <ClickableImage
            path="/deur_level/popups/Tiktok.gif"
            visible={popups["popupMobiel"]===true}
            size={{ w: 1024, h: 768 }}
            location={{ x: 0, y: 0 }}
            clickable={true}
            onClick={() => setPopup("popupMobiel", false)}
        />
        <RaadWoordComponent
            correctWord={"HOO-HOO"}
            onCorrect={() => markPuzzleAsSolved("Boek")}
            visible={popups["popupBoek"]===true && !puzzlesSolved["Boek"]}
        />
        {vouwIndex !== null && vouwIndex < vouwImages[currentKleding].length && (
            <ClickableImage
                path={vouwImages[currentKleding][vouwIndex]}
                size={{ w: 1024, h: 768 }}
                location={{ x: 0, y: 0 }}
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

        <ClickableImage
            path="/JerrysQuest.png"
            size={{ w: 469, h: 73 }}
            location={{ x: 267, y: 0 }}
        />

    </div>
  );
};

export default DeurLevel;
