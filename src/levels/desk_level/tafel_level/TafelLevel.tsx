import React, { useState } from "react";
import ClickableImage from "../../../components/ClickableImage.tsx";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../components/BackButton.tsx";

const TafelLevel: React.FC = ({}) => {
  const navigate = useNavigate();
  const [damsetOpen, setDamsetOpen] = useState(false);
  const [pipeHover, setPipeHover] = useState(false);

  return (
    <div>
      <BackButton />
      <img
        className="relative h-[768px] w-[1024px]"
        src="/desk_level/tafel_level/TroepTafelView.png"
      />
      <ClickableImage
        path="/desk_level/tafel_level/Blikje1.png"
        size={{ w: 142, h: 150 }}
        location={{ x: 594, y: 166 }}
      />
      <ClickableImage
        path="/desk_level/tafel_level/Blikje2.png"
        size={{ w: 142, h: 150 }}
        location={{ x: 594, y: 166 }}
      />
      <ClickableImage
        path="/desk_level/tafel_level/Blikje3.png"
        size={{ w: 142, h: 150 }}
        location={{ x: 594, y: 166 }}
      />
        <ClickableImage
            path="/desk_level/tafel_level/Blikje4.png"
            size={{ w: 142, h: 150 }}
            location={{ x: 594, y: 166 }}
        />
        <ClickableImage
            path="/desk_level/tafel_level/Envelop.png"
            size={{ w: 142, h: 150 }}
            location={{ x: 594, y: 166 }}
        />
        <ClickableImage
            path="/desk_level/tafel_level/Pillen.png"
            size={{ w: 142, h: 150 }}
            location={{ x: 594, y: 166 }}
        />
        <ClickableImage
            path="/desk_level/tafel_level/Vredespijp.png"
            onMouseEnter={() => setPipeHover(true)}
            onMouseLeave={() => setPipeHover(false)}
            size={{ w: 142, h: 150 }}
            location={{ x: 594, y: 166 }}
        />
        <ClickableImage
        visible={pipeHover}
        path="/desk_level/tafel_level/Puff.gif"
        size={{ w: 230, h: 120 }}
        location={{ x: 100, y: 600 }}
    />
      <ClickableImage
        visible={!damsetOpen}
        path="/desk_level/tafel_level/DamsetDicht.png"
        size={{ w: 417, h: 210 }}
        location={{ x: 265, y: 420 }}
        clickable={true}
        onClick={() => setDamsetOpen(!damsetOpen)}
      />
      <ClickableImage
        visible={damsetOpen}
        path="/desk_level/tafel_level/DamsetOpen.png"
        size={{ w: 465, h: 360 }}
        location={{ x: 228, y: 270 }}
        clickable={true}
        onClick={() => setDamsetOpen(!damsetOpen)}
      />
    </div>
  );
};

export default TafelLevel;
