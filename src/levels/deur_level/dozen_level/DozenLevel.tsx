import React from "react";
import ClickableImage from "../../../components/ClickableImage.tsx";
import BackButton from "../../../components/BackButton.tsx";

const DozenLevel: React.FC = () => {
  return (
    <div>
      <img
        className={"relative h-[768px] w-[1024px]"}
        src={"/deur_level/dozen_level/DozenView.png"}
      />
      <BackButton />

      <ClickableImage
        path="/deur_level/dozen_level/Doos1.png"
        size={{ w: 400, h: 500 }}
        location={{ x: 8, y: 100 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Doos2.png"
        size={{ w: 500, h: 400 }}
        location={{ x: 301, y: 211 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Doos3.png"
        size={{ w: 500, h: 450 }}
        location={{ x: 93, y: 150 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Doos4.png"
        size={{ w: 700, h: 600 }}
        location={{ x: 319, y: 20 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Koning.png"
        size={{ w: 200, h: 400 }}
        location={{ x: 33, y: 202 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Lidl.png"
        size={{ w: 377, h: 466 }}
        location={{ x: 415, y: 157 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Paddos.png"
        size={{ w: 152, h: 143 }}
        location={{ x: 821, y: 455 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Shelf.png"
        size={{ w: 1024, h: 199 }}
        location={{ x: 0, y: 547 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Slaapzak.png"
        size={{ w: 643, h: 435 }}
        location={{ x: 200, y: 173 }}
      />
      <ClickableImage
        path="/deur_level/dozen_level/Vraag.png"
        size={{ w: 320, h: 268 }}
        location={{ x: 158, y: 35 }}
      />
    </div>
  );
};

export default DozenLevel;
