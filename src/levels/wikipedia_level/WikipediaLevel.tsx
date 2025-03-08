import React, { useState } from "react";
import ClickableImage from "../../Components/ClickableImage.tsx";

const WikipediaLevel: React.FC = ({}) => {
  const [lampOn, setLampOn] = useState(false);
  const [stackHover, setStackHover] = useState(false);
  return (
    <div>
      <img
        className={"relative h-[768px] w-[1024px]"}
        src={"/wikipedia_level/Desk-background.png"}
      />
      <ClickableImage
        path="/wikipedia_level/Desk-painting.png"
        size={{ w: 300, h: 250 }}
        location={{ x: 230, y: 267 }}
      />

      <ClickableImage
        visible={lampOn}
        path="/wikipedia_level/Desk-lampON.png"
        size={{ w: 400, h: 230 }}
        location={{ x: 258, y: 256 }}
      />
      <ClickableImage
        visible={!lampOn}
        path="/wikipedia_level/Desk-lampOFF.png"
        size={{ w: 152, h: 196 }}
        location={{ x: 505, y: 255 }}
      />
      <ClickableImage
        path="/wikipedia_level/Desk-lampToggle.png"
        size={{ w: 80, h: 65 }}
        clickable={true}
        onClick={() => setLampOn(!lampOn)}
        location={{ x: 609, y: 444 }}
      />

      <ClickableImage
        visible={stackHover}
        path="/wikipedia_level/Desk-papers.gif"
        onMouseLeave={() => setStackHover(false)}
        size={{ w: 230, h: 300 }}
        location={{ x: 120, y: 360 }}
      />
      <ClickableImage
        visible={!stackHover}
        path="/wikipedia_level/Desk-papers.png"
        onMouseEnter={() => setStackHover(true)}
        size={{ w: 230, h: 120 }}
        location={{ x: 120, y: 550 }}
      />

      <ClickableImage
        path="/wikipedia_level/Desk-PC.png"
        size={{ w: 330, h: 300 }}
        location={{ x: 660, y: 290 }}
      />
    </div>
  );
};

export default WikipediaLevel;
