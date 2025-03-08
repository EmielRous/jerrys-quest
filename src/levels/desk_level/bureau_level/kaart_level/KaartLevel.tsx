import React from "react";
import { useNavigate } from "react-router-dom";
import ClickableImage from "../../../../components/ClickableImage.tsx";
import BackButton from "../../../../components/BackButton.tsx";

const KaartLevel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <BackButton />
      <video
        width="320"
        height="240"
        controls
        className={" h-[768px] w-[1024px]"}
      >
        <source
          src="/desk_level/bureau_level/kaart_level/KaartMason.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default KaartLevel;
