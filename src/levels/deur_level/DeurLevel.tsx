import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClickableImage from "../../components/ClickableImage.tsx";
import { BureauLevelPaths, DeurLevelPaths } from "../../utils.tsx";

const BureauLevel: React.FC = ({}) => {
  const [lampOn, setLampOn] = useState(false);
  const [stackHover, setStackHover] = useState(false);
  const [bankSteal, setBankSteal] = useState(false);
  const [kaartVis, setKaartVis] = useState(false);
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);

    const handleRotate = () => {
        setRotation(prev => prev + 10); // Rotate by 10 degrees on each click
    };
  return (
    <div>
      <img
        className={"relative h-[768px] w-[1024px]"}
        src={"/deur_level/DeurView.png"}
      />

      <ClickableImage
        path="/deur_level/BankBefore.png"
        size={{ w: 400, h: 200 }}
        location={{ x: 14, y: 600 }}
        clickable={true}
        onClick={() => {
            setBankSteal(true);
            setKaartVis(true);
        }}
      />
        <ClickableImage
            visible={bankSteal}
            path="/deur_level/BankAfter.png"
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
      />
      <ClickableImage
        path="/deur_level/Poef.png"
        size={{ w: 152, h: 165 }}
        location={{ x: 376, y: 647 }}
      />
      <ClickableImage
        path="/deur_level/Projector.png"
        size={{ w: 154, h: 54 }}
        location={{ x: 310, y: 183 }}
      />
      <ClickableImage
        path="/deur_level/Boeken.png"
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
            clickable
            redirect={DeurLevelPaths.TapijtLevel}
        />
        <ClickableImage
            path="/deur_level/Lamp.png"
            size={{ w: 100, h: 100 }}
            location={{ x: 110, y: 434 }}
            clickable={true}
            onClick={handleRotate} // Rotate on click
            style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.3s ease" }}
        />
        <ClickableImage
            visible={kaartVis}
            path="/deur_level/popups/KaartKussen.gif"
            size={{ w: 850, h: 600 }}
            location={{ x: 100, y: 50 }}
            clickable={true}
            onClick={() => setKaartVis(false)}
        />
    </div>
  );
};

export default BureauLevel;
