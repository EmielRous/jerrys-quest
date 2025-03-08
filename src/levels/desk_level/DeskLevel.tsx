import React, { useState } from "react";
import ClickableImage from "../../Components/ClickableImage.tsx";

const DeskLevel: React.FC = () => {
  const [lampOn, setLampOn] = useState(false);
  const [stackHover, setStackHover] = useState(false);

  return (
    <div>
      <img
        className="relative h-[768px] w-[1024px]"
        src="/desk_level/DeskView.png"
      />

      <ClickableImage
        path="/desk_level/Augurken.png"
        size={{ w: 100, h: 100 }}
        location={{ x: 200, y: 300 }}
      />
      <ClickableImage
        path="/desk_level/Bril.png"
        size={{ w: 80, h: 50 }}
        location={{ x: 350, y: 400 }}
      />
      <ClickableImage
        path="/desk_level/Desk.png"
        size={{ w: 500, h: 250 }}
        location={{ x: 250, y: 500 }}
      />
      <ClickableImage
        path="/desk_level/Kast.png"
        size={{ w: 250, h: 400 }}
        location={{ x: 700, y: 200 }}
      />
      <ClickableImage
        path="/desk_level/MontBlanche.png"
        size={{ w: 150, h: 100 }}
        location={{ x: 500, y: 550 }}
      />
      <ClickableImage
        path="/desk_level/Prop.png"
        size={{ w: 100, h: 100 }}
        location={{ x: 600, y: 600 }}
      />
      <ClickableImage
        path="/desk_level/Sphinx.png"
        size={{ w: 120, h: 120 }}
        location={{ x: 450, y: 450 }}
      />
      <ClickableImage
        path="/desk_level/Stoel.png"
        size={{ w: 200, h: 300 }}
        location={{ x: 300, y: 550 }}
      />
      <ClickableImage
        path="/desk_level/TroepTafel.png"
        size={{ w: 400, h: 200 }}
        location={{ x: 250, y: 650 }}
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

export default DeskLevel;
