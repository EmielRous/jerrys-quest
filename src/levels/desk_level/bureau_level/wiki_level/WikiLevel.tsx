import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClickableImage from "../../../../components/ClickableImage.tsx";
import BackButton from "../../../../components/BackButton.tsx";

const WikiLevel: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BackButton />
      <img
        className={`relative h-[768px] w-[1024px]`}
        src="/desk_level/bureau_level/wiki_level/Wiki-background.png"
      />
      <video
        width="320"
        height="240"
        controls
        className={"absolute"}
        style={{
          top: 96 + "px",
          left: 376 + "px",
          height: 376 + "px",
          width: 552 + "px",
        }}
      >
        <source
          src="/desk_level/bureau_level/wiki_level/Wiki-video.mp4.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default WikiLevel;
