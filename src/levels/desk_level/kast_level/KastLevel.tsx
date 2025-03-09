import React, { useState } from "react";
import ClickableImage from "../../../components/ClickableImage.tsx";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../components/BackButton.tsx";

const KastLevel: React.FC = ({}) => {
  const navigate = useNavigate();
  return (
    <div>
      <BackButton />
        <ClickableImage
            path="/desk_level/kast_level/KastView.png"
            size={{ w: 1024, h: 768 }}
            location={{ x: 0, y: 0 }}
        />
        <ClickableImage
            path="/desk_level/kast_level/Augurk1.png"
            size={{ w: 100, h: 100 }}
            location={{ x: 305, y: 187 }}
            isInventoriable={true}
        />
        <ClickableImage
            path="/desk_level/kast_level/Augurk2.png"
            size={{ w: 100, h: 100 }}
            location={{ x: 507, y: 189 }}
            isInventoriable={true}
        />
      <ClickableImage
        path="/desk_level/kast_level/Kast.png"
        size={{ w: 1024, h: 543 }}
        location={{ x: 0, y: 224 }}
      />
    </div>
  );
};

export default KastLevel;
