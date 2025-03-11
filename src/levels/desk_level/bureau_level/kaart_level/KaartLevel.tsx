import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ClickableImage from "../../../../components/ClickableImage.tsx";
import BackButton from "../../../../components/BackButton.tsx";

const KaartLevel: React.FC = () => {
  const navigate = useNavigate();
    const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div>
      <BackButton />
      <video
          ref={videoRef}
        width="320"
        height="240"
        controls={false}
        autoPlay={true}
        className={"absolute"}
          style={{
              top: 0 + "px",
              left: 0 + "px",
              height: 768 + "px",
              width: 1024 + "px",
          }}
      >
        <source
          src="/desk_level/bureau_level/kaart_level/KaartMason.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
        <ClickableImage
            path="/JerrysQuest.png"
            size={{ w: 469, h: 73 }}
            location={{ x: 267, y: 0 }}
        />
    </div>
  );
};

export default KaartLevel;
