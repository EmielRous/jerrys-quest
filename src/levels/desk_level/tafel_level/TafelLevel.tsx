import React, { useState } from "react";
import ClickableImage from "../../../components/ClickableImage.tsx";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../components/BackButton.tsx";
import { addRuby, DeskLevelPaths } from "../../utils.tsx";
import RaadWoordComponent from "../../components/RaadWoordComponent.tsx";


const TafelLevel: React.FC = () => {
    const navigate = useNavigate();
    const [damsetOpen, setDamsetOpen] = useState(false);
    const [pipeHover, setPipeHover] = useState(false);
    const [blikjeIndex, setBlikjeIndex] = useState(1); // 1 to 4

    const cycleBlikje = () => {
        setBlikjeIndex((prevIndex) => (prevIndex % 4) + 1); // Cycles from 1 → 2 → 3 → 4 → 1
    };

    return (
        <div>
            <BackButton />
            <img className="relative h-[768px] w-[1024px]" src="/desk_level/tafel_level/TroepTafelView.png" />
            <RaadWoordComponent correctWord={"1989 TDDSZ/ART"} />

            <ClickableImage
                path="/desk_level/tafel_level/Envelop.png"
                size={{ w: 339, h: 265 }}
                location={{ x: 433, y: 262 }}
            />

            {/* Blikje Images - Only One Visible at a Time */}
            {[1, 2, 3, 4].map((num) => (
                <ClickableImage
                    key={num}
                    visible={blikjeIndex === num}
                    path={`/desk_level/tafel_level/Blikje${num}.png`}
                    size={{ w: 142, h: 150 }}
                    location={{ x: 594, y: 166 }}
                    clickable={true}
                    onClick={cycleBlikje} // Handles cycling through the images
                />
            ))}

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
