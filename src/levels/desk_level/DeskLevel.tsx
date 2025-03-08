import React, { useState } from "react";
import ClickableImage from "../../components/ClickableImage.tsx";
import { useNavigate } from "react-router-dom";
import { DeskLevelPaths } from "../../utils.tsx";

const DeskLevel: React.FC = () => {
  const [lampOn, setLampOn] = useState(false);
  const [stackHover, setStackHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <img
        className="relative h-[768px] w-[1024px]"
        src="/desk_level/DeskView.png"
      />

      <ClickableImage
        path="/desk_level/Augurken.png"
        size={{ w: 94, h: 100 }}
        location={{ x: 125, y: 161 }}
      />
      <ClickableImage
        path="/desk_level/Bril.png"
        size={{ w: 80, h: 50 }}
        location={{ x: 317, y: 709 }}
      />
      <ClickableImage
        path="/desk_level/Desk.png"
        size={{ w: 351, h: 133 }}
        location={{ x: 509, y: 415 }}
        clickable={true}
        redirect={DeskLevelPaths.BureauLevel}
      />
      <ClickableImage
        path="/desk_level/Kast.png"
        size={{ w: 157, h: 513 }}
        location={{ x: 100, y: 211 }}
      />
      <ClickableImage
        path="/desk_level/MontBlanche.png"
        size={{ w: 94, h: 124 }}
        location={{ x: 234, y: 525 }}
      />
      <ClickableImage
        path="/desk_level/Prop.png"
        size={{ w: 31, h: 34 }}
        location={{ x: 438, y: 670 }}
      />
      <ClickableImage
        path="/desk_level/Sphinx.png"
        size={{ w: 120, h: 154 }}
        location={{ x: 913, y: 401 }}
        redirect={DeskLevelPaths.RaamLevel}
      />
      <ClickableImage
        path="/desk_level/Stoel.png"
        size={{ w: 167, h: 224 }}
        location={{ x: 582, y: 564 }}
      />
      <ClickableImage
        path="/desk_level/TroepTafel.png"
        size={{ w: 164, h: 163 }}
        location={{ x: 40, y: 465 }}
        redirect={DeskLevelPaths.TafelLevel}
      />
    </div>
  );
};

export default DeskLevel;
