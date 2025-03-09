import React, { useState, useRef } from "react";
import ClickableImage from "../../../components/ClickableImage.tsx";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../components/BackButton.tsx";
import { addRuby, BureauLevelPaths } from "../../../utils.tsx";

const BureauLevel: React.FC = ({}) => {
  const [lampOn, setLampOn] = useState(false);
  const [stackHover, setStackHover] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Function to play sound
  const playSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/desk_level/bureau_level/Snuif.mp3"); // Adjust the path to your MP3
    }
    audioRef.current.currentTime = 0; // Restart audio if already playing
    audioRef.current.play();
  };

  return (
    <div>
      <BackButton />
      <img
        className={"relative h-[768px] w-[1024px]"}
        src={"/desk_level/bureau_level/Desk-background.png"}
      />
      <ClickableImage
        path="/desk_level/bureau_level/Schilderij1.png"
        size={{ w: 429, h: 356 }}
        location={{ x: 119, y: 278 }}
        clickable={true}
        redirect={BureauLevelPaths.SchilderijLevel}
      />

      <ClickableImage
        visible={lampOn}
        path="/desk_level/bureau_level/Desk-lampON.png"
        size={{ w: 400, h: 230 }}
        location={{ x: 141, y: 383 }}
      />
      <ClickableImage
        visible={!lampOn}
        path="/desk_level/bureau_level/Desk-lampOFF.png"
        size={{ w: 152, h: 196 }}
        location={{ x: 387, y: 381 }}
      />
      <ClickableImage
        path="/desk_level/bureau_level/Desk-lampToggle.png"
        size={{ w: 80, h: 65 }}
        location={{ x: 495, y: 563 }}
        clickable={true}
        onClick={() => setLampOn(!lampOn)}
      />

      <ClickableImage
        visible={stackHover}
        path="/desk_level/bureau_level/Desk-papers.gif"
        onMouseLeave={() => setStackHover(false)}
        size={{ w: 230, h: 300 }}
        location={{ x: 100, y: 410 }}
      />
      <ClickableImage
        visible={!stackHover}
        path="/desk_level/bureau_level/Desk-papers.png"
        onMouseEnter={() => setStackHover(true)}
        size={{ w: 230, h: 120 }}
        location={{ x: 100, y: 600 }}
      />

      <ClickableImage
        path="/desk_level/bureau_level/Desk-PC.png"
        size={{ w: 387, h: 344 }}
        location={{ x: 588, y: 313 }}
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
        path={"/desk_level/bureau_level/Snuif.png"}
        size={{ w: 429, h: 356 }}
        location={{ x: 119, y: 278 }}
        clickable={true}
        onClick={playSound}
      />
    </div>
  );
};

export default BureauLevel;
