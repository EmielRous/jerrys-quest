import React from "react";
import ClickableImage from "../../../components/ClickableImage.tsx";

const DozenLevel: React.FC = () => {
  return (
    <div>
      <img
        className={"relative h-[768px] w-[1024px]"}
        src={"/deur_level/dozen_level/DozenView.png"}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Doos1.png"
        size={{ w: 100, h: 100 }}
        location={{ x: 50, y: 50 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Doos2.png"
        size={{ w: 100, h: 100 }}
        location={{ x: 200, y: 50 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Doos3.png"
        size={{ w: 100, h: 100 }}
        location={{ x: 350, y: 50 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Doos4.png"
        size={{ w: 100, h: 100 }}
        location={{ x: 500, y: 50 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Koning.png"
        size={{ w: 100, h: 100 }}
        location={{ x: 650, y: 50 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Lidl.png"
        size={{ w: 100, h: 100 }}
        location={{ x: 800, y: 50 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Paddos.png"
        size={{ w: 100, h: 100 }}
        location={{ x: 950, y: 50 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Shelf.png"
        size={{ w: 100, h: 100 }}
        location={{ x: 50, y: 200 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Slaapzak.png"
        size={{ w: 100, h: 100 }}
        location={{ x: 200, y: 200 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Vraag.png"
        size={{ w: 100, h: 100 }}
        location={{ x: 350, y: 200 }}
      />
    </div>
  );
};

export default DozenLevel;
