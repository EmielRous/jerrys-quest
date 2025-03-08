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
        path="/deur_level/BankAfter.png"
        size={{ w: 300, h: 250 }}
        location={{ x: 230, y: 267 }}
      />

      <ClickableImage
        path="/deur_level/BankBefore.png"
        size={{ w: 400, h: 230 }}
        location={{ x: 258, y: 256 }}
      />
      <ClickableImage
        path="/deur_level/Boeken.png"
        size={{ w: 152, h: 196 }}
        location={{ x: 505, y: 255 }}
      />
      <ClickableImage
        path="/deur_level/Dozen.png"
        size={{ w: 80, h: 65 }}
        clickable={true}
        location={{ x: 609, y: 444 }}
        redirect={DeurLevelPaths.DozenLevel}
      />

      <ClickableImage
        path="/deur_level/Gordijn.png"
        size={{ w: 230, h: 300 }}
        location={{ x: 120, y: 360 }}
      />
      <ClickableImage
        path="/deur_level/Kleren.png"
        size={{ w: 230, h: 120 }}
        location={{ x: 120, y: 550 }}
      />

      <ClickableImage
        path="/deur_level/Lamp.png"
        size={{ w: 330, h: 300 }}
        location={{ x: 660, y: 290 }}
      />

      <ClickableImage
        path="/deur_level/Plank.png"
        size={{ w: 200, h: 100 }}
        location={{ x: 660, y: 290 }}
      />

      <ClickableImage
        path="/deur_level/Poef.png"
        size={{ w: 200, h: 100 }}
        location={{ x: 660, y: 290 }}
      />

      <ClickableImage
        path="/deur_level/Projector.png"
        size={{ w: 200, h: 100 }}
        location={{ x: 660, y: 290 }}
      />

      <ClickableImage
        path="/deur_level/TapijtBefore.png"
        size={{ w: 200, h: 100 }}
        location={{ x: 660, y: 290 }}
        clickable
        redirect={DeurLevelPaths.TapijtLevel}
      />
    </div>
  );
};

export default BureauLevel;
