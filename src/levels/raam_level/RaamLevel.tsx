import ClickableImage from "../../components/ClickableImage.tsx";
import React from "react";

const RaamLevel: React.FC = () => {
  return (
    <div>
      <img
        className="relative h-[768px] w-[1024px]"
        src="/raam_level/RaamView.png"
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
      />
    </div>
  );
};

export default RaamLevel;
