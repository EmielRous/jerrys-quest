import React, { useState } from "react";
import ClickableImage from "../../../components/ClickableImage.tsx";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../components/BackButton.tsx";

const BureauLevel: React.FC = ({}) => {
  const [lampOn, setLampOn] = useState(false);
  const [stackHover, setStackHover] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <BackButton />
      <img
        className={"relative h-[768px] w-[1024px]"}
        src={"/desk_level/bureau_level/Desk-background.png"}
      />
      <ClickableImage
        path="/desk_level/bureau_level/Desk-painting.png"
        size={{ w: 300, h: 250 }}
        location={{ x: 230, y: 267 }}
        redirect={"test"}
      />

      <ClickableImage
        visible={lampOn}
        path="/desk_level/bureau_level/Desk-lampON.png"
        size={{ w: 400, h: 230 }}
        location={{ x: 258, y: 256 }}
      />
      <ClickableImage
        visible={!lampOn}
        path="/desk_level/bureau_level/Desk-lampOFF.png"
        size={{ w: 152, h: 196 }}
        location={{ x: 505, y: 255 }}
      />
      <ClickableImage
        path="/desk_level/bureau_level/Desk-lampToggle.png"
        size={{ w: 80, h: 65 }}
        clickable={true}
        onClick={() => setLampOn(!lampOn)}
        location={{ x: 609, y: 444 }}
      />

      <ClickableImage
        visible={stackHover}
        path="/desk_level/bureau_level/Desk-papers.gif"
        onMouseLeave={() => setStackHover(false)}
        size={{ w: 230, h: 300 }}
        location={{ x: 120, y: 360 }}
      />
      <ClickableImage
        visible={!stackHover}
        path="/desk_level/bureau_level/Desk-papers.png"
        onMouseEnter={() => setStackHover(true)}
        size={{ w: 230, h: 120 }}
        location={{ x: 120, y: 550 }}
      />

      <ClickableImage
        path="/desk_level/bureau_level/Desk-PC.png"
        size={{ w: 330, h: 300 }}
        location={{ x: 660, y: 290 }}
      />
    </div>
  );
};

export default BureauLevel;
