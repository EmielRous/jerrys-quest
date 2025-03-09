import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClickableImage from "../../../../components/ClickableImage.tsx";
import BackButton from "../../../../components/BackButton.tsx";
import {BureauLevelPaths} from "../../../../utils.tsx";
import { addRuby, DeskLevelPaths } from "../../utils.tsx";
import RaadWoordComponent from "../../../../components/RaadWoordComponent.tsx";

const WikiLevel: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BackButton />
        <ClickableImage
            path="/desk_level/bureau_level/wiki_level/Wiki-background.png"
            size={{ w: 1024, h: 768 }}
            location={{ x: 0, y: 0 }}
        />
        <RaadWoordComponent
            correctWord={"wikiroute"}
            onCorrect={() => console.log("doe hier dingen")}
            visible={true}
        />
      <video
        width="320"
        height="240"
        autoPlay={true}
        controls={false}
        className={"absolute"}
        style={{
          top: 0 + "px",
          left: 0 + "px",
          height: 768 + "px",
          width: 1024 + "px",
        }}
      >
        <source
          src="/desk_level/bureau_level/wiki_level/Wiki-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default WikiLevel;
