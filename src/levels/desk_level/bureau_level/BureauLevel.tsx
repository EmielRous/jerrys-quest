import React, { useState, useRef } from "react";
import ClickableImage from "../../../components/ClickableImage.tsx";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../components/BackButton.tsx";
import { addRuby, BureauLevelPaths } from "../../../utils.tsx";
import {useGlobalState} from "../../../components/GlobalStateContext.tsx";
import BackgroundImage from "../../../components/Background.tsx";

const BureauLevel: React.FC = ({}) => {
  const [lampOn, setLampOn] = useState(false);
  const [stackHover, setStackHover] = useState(false);
  const [snuif, setSnuif] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
    const { isVisible, toggleVisibility, puzzlesSolved, markPuzzleAsSolved } = useGlobalState();

  // Function to play sound
  const playSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/desk_level/bureau_level/Snuif.mp3"); // Adjust the path to your MP3
    }
    audioRef.current.currentTime = 0; // Restart audio if already playing
    audioRef.current.play();
    audioRef.current.onended = () => {
        setSnuif(false);
    };
  };
  const getSchilderijPath = () => {
      if (puzzlesSolved["Schilderij3"]) return "/desk_level/bureau_level/Schilderij3.png";
      if (puzzlesSolved["Schilderij2"]) return "/desk_level/bureau_level/Schilderij2.png";
      return "/desk_level/bureau_level/Schilderij1.png";
  };

  return (
    <div>
        <BackgroundImage />
      <BackButton />
        <ClickableImage
            path="/desk_level/bureau_level/Desk-background.png"
            size={{ w: 1024, h: 768 }}
            location={{ x: 0, y: 0 }}
        />
      <ClickableImage
          path={getSchilderijPath()}
        size={{ w: 429, h: 356 }}
        location={{ x: 119, y: 242 }}
        clickable={true}
        redirect={BureauLevelPaths.SchilderijLevel}
      />

      <ClickableImage
        visible={lampOn}
        path="/desk_level/bureau_level/Desk-lampON.png"
        size={{ w: 400, h: 230 }}
        location={{ x: 141, y: 341 }}
      />
      <ClickableImage
        visible={!lampOn}
        path="/desk_level/bureau_level/Desk-lampOFF.png"
        size={{ w: 152, h: 196 }}
        location={{ x: 387, y: 339 }}
      />
      <ClickableImage
        path="/desk_level/bureau_level/Desk-lampToggle.png"
        size={{ w: 80, h: 65 }}
        location={{ x: 495, y: 528 }}
        clickable={true}
        onClick={() => setLampOn(!lampOn)}
      />

      <ClickableImage
        visible={stackHover}
        path="/desk_level/bureau_level/Desk-papers.gif"
        onMouseLeave={() => setStackHover(false)}
        size={{ w: 230, h: 300 }}
        location={{ x: 100, y: 390 }}
      />
      <ClickableImage
        visible={!stackHover}
        path="/desk_level/bureau_level/Desk-papers.png"
        onMouseEnter={() => setStackHover(true)}
        size={{ w: 230, h: 120 }}
        location={{ x: 100, y: 580 }}
      />

      <ClickableImage
        path="/desk_level/bureau_level/Desk-PC.png"
        size={{ w: 387, h: 344 }}
        location={{ x: 568, y: 287 }}
        clickable
        redirect={BureauLevelPaths.WikiLevel}
      />

      <ClickableImage
        path="/desk_level/bureau_level/KaartMasonFoto.png"
        size={{ w: 119, h: 152 }}
        location={{ x: 949, y: 243 }}
        clickable
        redirect={BureauLevelPaths.KaartLevel}
      />
        <ClickableImage
            path="/desk_level/bureau_level/Snuif.png"
            size={{ w: 106, h: 71 }}
            location={{ x: 321, y: 570 }}
            clickable={true}
            onClick={() => {
                playSound();
            setSnuif(true);}}
        />
        <ClickableImage
            path="/desk_level/bureau_level/Koffie.png"
            size={{ w: 134, h: 106 }}
            location={{ x: 422, y: 584 }}
        />
        <ClickableImage
            path="/desk_level/bureau_level/Snuif.gif"
            visible={snuif}
            size={{ w: 1024, h: 768 }}
            location={{ x: 0, y: 0 }}
            style={{ opacity: 0.5 }}
        />
        <ClickableImage
            path="/JerrysQuest.png"
            size={{ w: 469, h: 73 }}
            location={{ x: 267, y: 0 }}
        />
    </div>
  );
};

export default BureauLevel;
