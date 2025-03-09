import React, { useState } from "react";
import ClickableImage from "../../../components/ClickableImage.tsx";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../components/BackButton.tsx";

const KastLevel: React.FC = ({}) => {
  const navigate = useNavigate();
    const [gurk1, setGurk1] = useState(true);
    const [gurk2, setGurk2] = useState(true);
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
            visible={gurk1}
            size={{ w: 100, h: 100 }}
            location={{ x: 305, y: 187 }}
            clickable={true}
            isInventoriable={true}
            onClick={() => {setGurk1(false)}}
        />
        <ClickableImage
            path="/desk_level/kast_level/Augurk2.png"
            visible={gurk2}
            size={{ w: 100, h: 100 }}
            location={{ x: 507, y: 189 }}
            clickable={true}
            isInventoriable={true}
            onClick={() => {setGurk2(false)}}
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
