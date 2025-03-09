import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClickableImage from "../../components/ClickableImage.tsx";
import { BureauLevelPaths, DeurLevelPaths } from "../../utils.tsx";

const BureauLevel: React.FC = ({}) => {
  const [lampOn, setLampOn] = useState(false);
  const [stackHover, setStackHover] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <img
        className={"relative h-[768px] w-[1024px]"}
        src={"/deur_level/DeurView.png"}
      />

      <ClickableImage
        path="/deur_level/TapijtBefore.png"
        size={{ w: 200, h: 100 }}
        location={{ x: 660, y: 290 }}
        clickable
        redirect={DeurLevelPaths.TapijtLevel}
      />
      <ClickableImage
        path="/deur_level/BankAfter.png"
        size={{ w: 466, h: 250 }}
        location={{ x: 14, y: 600 }}
      />
      <ClickableImage
        path="/deur_level/BankBefore.png"
        size={{ w: 466, h: 250 }}
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
        path="/deur_level/Lamp.png"
        size={{ w: 100, h: 100 }}
        location={{ x: 110, y: 434 }}
      />
      <ClickableImage
        path="/deur_level/Poef.png"
        size={{ w: 200, h: 190 }}
        location={{ x: 431, y: 676 }}
      />
      <ClickableImage
        path="/deur_level/Projector.png"
        size={{ w: 154, h: 54 }}
        location={{ x: 310, y: 183 }}
      />
      <ClickableImage
        path="/deur_level/Boeken.png"
        size={{ w: 131, h: 73 }}
        location={{ x: 476, y: 691 }}
      />
      <ClickableImage
        path="/deur_level/Plank.png"
        size={{ w: 724, h: 147 }}
        location={{ x: 152, y: 210 }}
      />
    </div>
  );
};

export default BureauLevel;
