import React, { useState } from "react";
import ClickableImage from "../../../components/ClickableImage.tsx";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../components/BackButton.tsx";

const KastLevel: React.FC = ({}) => {
  const navigate = useNavigate();
  return (
    <div>
      <BackButton />
      <img
        className={"relative h-[768px] w-[1024px]"}
        src={"/desk_level/kast_level/KastView.png"}
      />

      <ClickableImage
        path="/desk_level/kast_level/Augurken.png"
        size={{ w: 174, h: 143 }}
        location={{ x: 140, y: 133 }}
        isInventoriable={true}
      />
      <ClickableImage
        path="/desk_level/kast_level/Kast.png"
        size={{ w: 1023, h: 543 }}
        location={{ x: 0, y: 234 }}
      />
    </div>
  );
};

export default KastLevel;
