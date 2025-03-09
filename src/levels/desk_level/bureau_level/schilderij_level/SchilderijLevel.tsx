import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClickableImage from "../../../../components/ClickableImage.tsx";
import BackButton from "../../../../components/BackButton.tsx";

const SchilderijLevel: React.FC = () => {
  const navigate = useNavigate();
  const [vis, setVis] = useState(false);
  return (
    <div>
      <BackButton />
      <img
        onClick={() => setVis(!vis)}
        className={`relative h-[768px] w-[1024px] ${vis ? "hidden" : ""}`}
        src="/desk_level/bureau_level/schilderij_level/Schilderij1.png"
      />
      <img
        onClick={() => setVis(!vis)}
        className={`relative h-[768px] w-[1024px] ${!vis ? "hidden" : ""}`}
        src="/desk_level/bureau_level/schilderij_level/Schilderij3.png"
      />
    </div>
  );
};

export default SchilderijLevel;
