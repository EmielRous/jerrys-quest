import ClickableImage from "../../../components/ClickableImage.tsx";
import React from "react";
import { useNavigate } from "react-router-dom";

const KastLevel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        className="relative h-[768px] w-[1024px]"
        path="/desk_level/kast_level/KastView.png"
      />
      <ClickableImage
        path="/desk_level/kast_level/Augurken"
        size={{ w: 100, h: 100 }}
        location={{ x: 200, y: 200 }}
      />
      <ClickableImage
        path="/desk_level/kast_level/Kast"
        size={{ w: 200, h: 200 }}
        location={{ x: 400, y: 400 }}
        isInventoriable={true}
      />
    </div>
  );
};

export default KastLevel;
