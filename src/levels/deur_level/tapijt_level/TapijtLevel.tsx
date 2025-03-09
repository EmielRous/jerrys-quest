import ClickableImage from "../../../components/ClickableImage.tsx";
import BackButton from "../../../components/BackButton.tsx";
import React from "react";

const TapijtLevel: React.FC = () => {
  return (
    <div>
      <BackButton />
        <ClickableImage
            path="/deur_level/tapijt_level/TapijtView.png"
            size={{ w: 1024, h: 768 }}
            location={{ x: 0, y: 0 }}
        />
      <ClickableImage
        path="/deur_level/tapijt_level/TapijtSolved.png"
        size={{ w: 300, h: 420 }}
        location={{ x: 420, y: 200 }}
      />
      <ClickableImage
        path="/deur_level/tapijt_level/TapijtQR.png"
        size={{ w: 300, h: 420 }}
        location={{ x: 420, y: 200 }}
      />
      <ClickableImage
        path="/deur_level/tapijt_level/Lamp.png"
        size={{ w: 130, h: 130 }}
        location={{ x: 374, y: 594 }}
      />
    </div>
  );
};

export default TapijtLevel;
