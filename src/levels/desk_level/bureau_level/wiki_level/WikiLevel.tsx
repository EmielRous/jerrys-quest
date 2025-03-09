import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClickableImage from "../../../../components/ClickableImage.tsx";
import BackButton from "../../../../components/BackButton.tsx";
import {BureauLevelPaths} from "../../../../utils.tsx";

const WikiLevel: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BackButton />
        <img
            className={"relative h-[768px] w-[1024px]"}
            src={"/desk_level/bureau_level/wiki_level/Wiki-background.png"}
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
