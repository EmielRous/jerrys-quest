import React, { useState } from "react";
import ClickableImage from "../../../components/ClickableImage.tsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BackButton from "../../../components/BackButton.tsx";

const TafelLevel: React.FC = ({}) => {
  const navigate = useNavigate();
  const [damsetOpen, setDamsetOpen] = useState(false);

  return (
    <div>
      <BackButton />
      <img
        className="relative h-[768px] w-[1024px]"
        src="/desk_level/tafel_level/TroepTafelView.png"
      />
      <ClickableImage
        path="/desk_level/tafel_level/Blikje1.png"
        size={{ w: 50, h: 50 }}
        location={{ x: 100, y: 200 }}
      />
      <ClickableImage
        path="/desk_level/tafel_level/Blikje2.png"
        size={{ w: 50, h: 50 }}
        location={{ x: 150, y: 200 }}
      />
      <ClickableImage
        path="/desk_level/tafel_level/Blikje3.png"
        size={{ w: 50, h: 50 }}
        location={{ x: 200, y: 200 }}
      />
      <ClickableImage
        visible={!damsetOpen}
        path="/desk_level/tafel_level/DamsetDicht.png"
        size={{ w: 152, h: 196 }}
        location={{ x: 505, y: 255 }}
        clickable={true}
        onClick={() => setDamsetOpen(!damsetOpen)}
      />
      <ClickableImage
        visible={damsetOpen}
        path="/desk_level/tafel_level/DamsetOpen.png"
        // size={{ w: 80, h: 65 }}
        size={{ w: 120, h: 120 }}
        // location={{ x: 609, y: 444 }}
        location={{ x: 505, y: 255 }}
        clickable={true}
        onClick={() => setDamsetOpen(!damsetOpen)}
      />
    </div>
  );
};

export default TafelLevel;
