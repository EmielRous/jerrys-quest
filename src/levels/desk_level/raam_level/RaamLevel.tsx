import ClickableImage from "../../../components/ClickableImage.tsx";
import React from "react";
import { useNavigate } from "react-router-dom";

const RaamLevel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        className="relative h-[768px] w-[1024px]"
        src="/desk_level/raam_level/RaamView.png"
      />
      <ClickableImage
        path="/raam_level/65.png"
        size={{ w: 100, h: 100 }}
        location={{ x: 200, y: 200 }}
      />
      <ClickableImage
        path="/raam_level/Raadsel.png"
        size={{ w: 150, h: 150 }}
        location={{ x: 300, y: 300 }}
      />
      <ClickableImage
        path="/raam_level/Sphinx.png"
        size={{ w: 200, h: 200 }}
        location={{ x: 400, y: 400 }}
        isInventoriable={true}
      />
    </div>
  );
};

export default RaamLevel;
