import React, { useState, useRef, useEffect } from "react";
import ClickableImage from "../../components/ClickableImage.tsx";
import { useNavigate } from "react-router-dom";
import { addRuby, DeskLevelPaths } from "../../utils.tsx";
import RaadWoordComponent from "../../components/RaadWoordComponent.tsx";
import {useGlobalState} from "../../components/GlobalStateContext.tsx";
import BackgroundImage from "../../components/Background.tsx"; // Adjust path as needed


const DeskLevel: React.FC = () => {
  const [popupBril, setPopupBril] = useState(false);
  const [popupProp, setPopupProp] = useState(false);
  const [stoelHover, setStoelHover] = useState(false);
    const [stoelRotation, setStoelRotation] = useState(0);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
    const { popups, setPopup } = useGlobalState();
    const { isVisible, toggleVisibility, puzzlesSolved, markPuzzleAsSolved, resetPuzzles } = useGlobalState();
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        // Get the referrer
        const referrer = document.referrer;
        const currentDomain = window.location.origin;

        // If referrer is empty (direct visit) or from a different site, reset puzzles
        if (!referrer || !referrer.startsWith(currentDomain)) {
            alert("Welcome")
            resetPuzzles();
        }
    }, []);

  // Function to play sound
  const playSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/desk_level/WULR.mp3"); // Adjust the path to your MP3
    }
    audioRef.current.currentTime = 0; // Restart audio if already playing
    audioRef.current.play();
  };
    const startRocking = () => {
        let direction = stoelRotation >= 0 ? 1 : -1;
        const animate = () => {
            setStoelRotation((prev) => {
                if (prev >= 10) direction = -1;
                if (prev <= -10) direction = 1;
                return prev + direction * 0.2; // ✅ Adjusts rotation increment smoothly
            });
            animationRef.current = requestAnimationFrame(animate);
        };
        animationRef.current = requestAnimationFrame(animate);
    };

    // Stops rocking and cancels animation frame
    const stopRocking = () => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }
    };

  return (
    <div>
        <BackgroundImage />
        <ClickableImage
            path="/desk_level/Desk-background.png"
            size={{ w: 1024, h: 768 }}
            location={{ x: 0, y: 0 }}
        />
      <ClickableImage
        path="/desk_level/Augurken.png"
        size={{ w: 87, h: 71 }}
        location={{ x: 88, y: 193 }}
        clickable={true}
        redirect={DeskLevelPaths.KastLevel}
      />
        <ClickableImage
            path="/desk_level/Stoel.png"
            size={{ w: 167, h: 224 }}
            location={{ x: 600, y: 550 }}
            onMouseEnter={() => {
                setStoelHover(true);
                startRocking(); // ✅ Starts smooth rocking animation
            }}
            onMouseLeave={() => {
                setStoelHover(false);
                stopRocking(); // ✅ Stops animation but keeps last rotation
            }}
            style={{
                transform: `rotate(${stoelRotation}deg)`, // ✅ Keeps last rotation when mouse leaves
                transition: "transform 0.1s linear", // ✅ Ensures smooth transition
            }}
            clickable={true}
            onClick={() => {resetPuzzles()}}
        />
        <ClickableImage
            path="/desk_level/Bril.png"
            size={{ w: 80, h: 50 }}
            location={{ x: 343, y: 682 }}
            clickable={!puzzlesSolved["Bril"]}
            onClick={!puzzlesSolved["Bril"] ? () => setPopup("popupBril", true) : undefined}
        />
      <ClickableImage
        path="/desk_level/Desk.png"
        size={{ w: 333, h: 145 }}
        location={{ x: 509, y: 380 }}
        clickable={true}
        redirect={DeskLevelPaths.BureauLevel}
      />
      <ClickableImage
        path="/desk_level/MontBlanche.png"
        size={{ w: 94, h: 124 }}
        location={{ x: 192, y: 524 }}
      />
      <ClickableImage
        path="/desk_level/Kast.png"
        size={{ w: 157, h: 513 }}
        location={{ x: 77, y: 248 }}
      />
      <ClickableImage
        path="/desk_level/Prop.png"
        size={{ w: 31, h: 34 }}
        location={{ x: 438, y: 670 }}
        clickable={!puzzlesSolved["Prop"]}
        onClick={!puzzlesSolved["Prop"] ? () => setPopup("popupProp", true) : undefined}
      />
      <ClickableImage
        path="/desk_level/Sphinx.png"
        size={{ w: 120, h: 154 }}
        location={{ x: 913, y: 401 }}
        clickable={true}
        redirect={DeskLevelPaths.RaamLevel}
      />
      <ClickableImage
        path="/desk_level/Tafeltje.png"
        size={{ w: 203, h: 401 }}
        location={{ x: 8, y: 409 }}
        clickable={true}
        redirect={DeskLevelPaths.TafelLevel}
      />
      <ClickableImage
        path="/desk_level/Dreft.png"
        size={{ w: 39, h: 80 }}
        location={{ x: 380, y: 429 }}
        clickable={true}
        onClick={playSound} // Play sound when clicked
      />
      <ClickableImage
        path="/desk_level/Broek.png"
        size={{ w: 215, h: 150 }}
        location={{ x: 137, y: 669 }}
      />
        <ClickableImage
            path="/desk_level/popups/Leestest.jpg"
            visible={popups["popupBril"]===true && !puzzlesSolved["Bril"]}
            size={{ w: 600, h: 600 }}
            location={{ x: 212, y: 84 }}
            clickable={true}
            onClick={() => setPopup("popupBril", false)}
        />
        <RaadWoordComponent
            correctWord={"lezen"}
            onCorrect={() => markPuzzleAsSolved("Bril")}
            visible={popups["popupBril"]===true && !puzzlesSolved["Bril"]}
        />

        <ClickableImage
            path="/desk_level/popups/PropOpen.png"
            visible={popups["popupProp"]===true && !puzzlesSolved["Prop"]}
            size={{ w: 600, h: 600 }}
            location={{ x: 212, y: 84 }}
            clickable={true}
            onClick={() => setPopup("popupProp", false)}
        />
        <RaadWoordComponent
            correctWord={"BOOM"}
            onCorrect={() => markPuzzleAsSolved("Prop")}
            visible={popups["popupProp"]===true && !puzzlesSolved["Prop"]}
        />
        <ClickableImage
            visible={isVisible}
            path="/desk_level/Projection.gif"
            size={{ w: 629, h: 344 }}
            location={{ x: 202, y: 163 }}
            style={{ opacity: 0.5 }}
        />
        <ClickableImage
            path="/JerrysQuest.png"
            size={{ w: 469, h: 73 }}
            location={{ x: 267, y: 0 }}
        />


        <style>
            {`
          @keyframes stoelRock {
            0% { transform: rotate(-10deg); }
            100% { transform: rotate(10deg); }
          }
        `}
        </style>
    </div>
  );
};

export default DeskLevel;
