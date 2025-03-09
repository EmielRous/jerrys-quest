import ClickableImage from "../../../components/ClickableImage.tsx";
import BackButton from "../../../components/BackButton.tsx";
import React, {useState} from "react";
import { addRuby, DeskLevelPaths } from "../../utils.tsx";
import RaadWoordComponent from "../../../components/RaadWoordComponent.tsx";

const TapijtLevel: React.FC = () => {

    const [rotation, setRotation] = useState(0);

    const handleRotate = () => {
        setRotation(prev => prev + 50); // Rotate by 10 degrees on each click
    };
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
        size={{ w: 300, h: 430 }}
        location={{ x: 420, y: 200 }}
      />
      <ClickableImage
        path="/deur_level/tapijt_level/TapijtQR.png"
        size={{ w: 300, h: 430 }}
        location={{ x: 420, y: 200 }}
      />
        <ClickableImage
            path="/deur_level/tapijt_level/Lamp.png"
            size={{ w: 130, h: 130 }}
            location={{ x: 374, y: 580 }}
            clickable={true}
            onClick={handleRotate}
            style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.3s ease",
            }}
        />
        <RaadWoordComponent
            correctWord={"lezen"}
            onCorrect={() => console.log("hier component hiden")}
            visible={true}
        />
    </div>
  );
};

export default TapijtLevel;
