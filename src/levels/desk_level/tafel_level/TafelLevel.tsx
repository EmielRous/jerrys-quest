import React, { useState } from "react";
import ClickableImage from "../../../components/ClickableImage.tsx";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../components/BackButton.tsx";

const TafelLevel: React.FC = ({}) => {
  const navigate = useNavigate();
  const [damsetOpen, setDamsetOpen] = useState(false);
  const [blik1Visible, setBlik1Visible] = useState(true);
  const [blik2Visible, setBlik2Visible] = useState(false);
  const [blik3Visible, setBlik3Visible] = useState(false);
  const [blik4Visible, setBlik4Visible] = useState(false);
  const [pipeHover, setPipeHover] = useState(false);

  return (
    <div>
      <BackButton />
      <img
        className="relative h-[768px] w-[1024px]"
        src="/desk_level/tafel_level/TroepTafelView.png"
      />
        <ClickableImage
            path="/desk_level/tafel_level/Envelop.png"
            size={{ w: 339, h: 265 }}
            location={{ x: 433, y: 262 }}
        />
      <ClickableImage
          visible={blik1Visible}
        path="/desk_level/tafel_level/Blikje1.png"
        size={{ w: 142, h: 150 }}
        location={{ x: 594, y: 166 }}
          clickable={true}
          onClick={() => setBlik1Visible(false)}
          onClick={() => setBlik2Visible(true)}
          onClick={() => setBlik3Visible(false)}
          onClick={() => setBlik4Visible(false)}
      />
      <ClickableImage
          visible={blik2Visible}
        path="/desk_level/tafel_level/Blikje2.png"
        size={{ w: 142, h: 150 }}
        location={{ x: 594, y: 166 }}
          clickable={true}
          onClick={() => setBlik1Visible(false)}
          onClick={() => setBlik2Visible(false)}
          onClick={() => setBlik3Visible(true)}
          onClick={() => setBlik4Visible(false)}
      />
      <ClickableImage
          visible={blik3Visible}
        path="/desk_level/tafel_level/Blikje3.png"
        size={{ w: 142, h: 150 }}
        location={{ x: 594, y: 166 }}
          clickable={true}
          onClick={() => setBlik1Visible(false)}
          onClick={() => setBlik2Visible(false)}
          onClick={() => setBlik3Visible(false)}
          onClick={() => setBlik4Visible(true)}
      />
        <ClickableImage
            visible={blik4Visible}
            path="/desk_level/tafel_level/Blikje4.png"
            size={{ w: 142, h: 150 }}
            location={{ x: 594, y: 166 }}
            clickable={true}
            onClick={() => setBlik1Visible(true)}
            onClick={() => setBlik2Visible(false)}
            onClick={() => setBlik3Visible(false)}
            onClick={() => setBlik4Visible(false)}
        />
        <ClickableImage
            path="/desk_level/tafel_level/Pillen.png"
            size={{ w: 166, h: 183 }}
            location={{ x: 480, y: 165 }}
        />
        <ClickableImage
            path="/desk_level/tafel_level/Vredespijp.png"
            onMouseEnter={() => setPipeHover(true)}
            onMouseLeave={() => setPipeHover(false)}
            size={{ w: 162, h: 148 }}
            location={{ x: 401, y: 273 }}
        />
        <ClickableImage
        visible={pipeHover}
        path="/desk_level/tafel_level/Puff.gif"
        size={{ w: 230, h: 120 }}
        location={{ x: 551, y: 220 }}
    />
      <ClickableImage
        visible={!damsetOpen}
        path="/desk_level/tafel_level/DamsetDicht.png"
        size={{ w: 417, h: 210 }}
        location={{ x: 265, y: 420 }}
        clickable={true}
        onClick={() => setDamsetOpen(!damsetOpen)}
      />
      <ClickableImage
        visible={damsetOpen}
        path="/desk_level/tafel_level/DamsetOpen.png"
        size={{ w: 465, h: 360 }}
        location={{ x: 228, y: 270 }}
        clickable={true}
        onClick={() => setDamsetOpen(!damsetOpen)}
      />
    </div>
  );
};

export default TafelLevel;
