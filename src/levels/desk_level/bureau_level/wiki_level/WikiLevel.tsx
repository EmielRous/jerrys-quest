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
      <ClickableImage
        path={"/desk_level/bureau_level/wiki_level/Whoops.gif"}
        size={{ w: 100, h: 100 }}
        location={{ x: 200, y: 200 }}
      />
      <video
        width="320"
        height="240"
        controls
        className={"absolute"}
        style={{
          top: 200 + "px",
          left: 500 + "px",
          height: 480 + "px",
          width: 720 + "px",
        }}
      >
        <source
          src="/desk_level/bureau_level/wiki_level/movie.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default WikiLevel;
