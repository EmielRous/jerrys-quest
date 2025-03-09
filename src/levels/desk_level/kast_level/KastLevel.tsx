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
        path="/desk_level/kast_level/Augurken.png"
        size={{ w: 174, h: 143 }}
        location={{ x: 140, y: 133 }}
        isInventoriable={true}
      />
        <ClickableImage
            path="/desk_level/kast_level/Augurk1.png"
            size={{ w: 174, h: 143 }}
            location={{ x: 140, y: 133 }}
            isInventoriable={true}
        />
        <ClickableImage
            path="/desk_level/kast_level/Augurk2.png"
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
