import React, { useState } from "react";
import ClickableImage from "../../components/ClickableImage.tsx";
import { useNavigate } from "react-router-dom";
import { DeskLevelPaths } from "../../utils.tsx";
import "./DeskLevel.css"; // Import CSS

const DeskLevel: React.FC = () => {
    const [lampOn, setLampOn] = useState(false);
    const [stackHover, setStackHover] = useState(false);
    const [popupBril, setPopupBril] = useState(false);
    const [popupProp, setPopupProp] = useState(false);
    const [hoveringStoel, setHoveringStoel] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <img className="relative t-[0px] l-[0px] h-[768px] w-[1024px]" src="/desk_level/Desk-background.png" />

            <ClickableImage
                path="/desk_level/Augurken.png"
                size={{ w: 87, h: 71 }}
                location={{ x: 88, y: 193 }}
                clickable={true}
                redirect={DeskLevelPaths.KastLevel}
            />

            {/* Wrap ClickableImage in a div for animation */}
            <div
                className={hoveringStoel ? "stoel-hovered" : "stoel-final"}
                onMouseEnter={() => setHoveringStoel(true)}
                onMouseLeave={() => setHoveringStoel(false)}
                style={{
                    position: "absolute",
                    left: "582px",
                    top: "564px",
                    width: "167px",
                    height: "224px",
                }}
            >
                <ClickableImage
                    path="/desk_level/Stoel.png"
                    size={{ w: 167, h: 224 }}
                    location={{ x: 0, y: 0 }} // Keep it at (0,0) since the parent div is already positioned
                />
            </div>

            <ClickableImage
                path="/desk_level/Bril.png"
                size={{ w: 80, h: 50 }}
                location={{ x: 343, y: 682 }}
                clickable={true}
                onClick={() => setPopupBril(true)}
            />
            <ClickableImage
                path="/desk_level/Desk.png"
                size={{ w: 301, h: 133 }}
                location={{ x: 509, y: 395 }}
                clickable={true}
                redirect={DeskLevelPaths.BureauLevel}
            />
            <ClickableImage
                path="/desk_level/MontBlanche.png"
                size={{ w: 94, h: 124 }}
                location={{ x: 192, y: 524 }}
            />
            <ClickableImage
                path="/desk_level/Kast.png"
                size={{ w: 157, h: 513 }}
                location={{ x: 77, y: 248 }}
            />
            <ClickableImage
                path="/desk_level/Prop.png"
                size={{ w: 31, h: 34 }}
                location={{ x: 438, y: 670 }}
                clickable={true}
                onClick={() => setPopupProp(true)}
            />
            <ClickableImage
                path="/desk_level/Sphinx.png"
                size={{ w: 120, h: 154 }}
                location={{ x: 913, y: 401 }}
                clickable={true}
                redirect={DeskLevelPaths.RaamLevel}
            />
            <ClickableImage
                path="/desk_level/Tafeltje.png"
                size={{ w: 203, h: 401 }}
                location={{ x: 8, y: 409 }}
                clickable={true}
                redirect={DeskLevelPaths.TafelLevel}
            />
            <ClickableImage
                path="/desk_level/Dreft.png"
                size={{ w: 50, h: 100 }}
                location={{ x: 300, y: 400 }}
                clickable={true}
            />
            <ClickableImage
                path="/desk_level/Broek.png"
                size={{ w: 215, h: 150 }}
                location={{ x: 137, y: 669 }}
            />
            <ClickableImage
                path="/desk_level/popups/Leestest.jpg"
                visible={popupBril}
                size={{ w: 600, h: 600 }}
                location={{ x: 212, y: 84 }}
                clickable={true}
                onClick={() => setPopupBril(false)}
            />
            <ClickableImage
                path="/desk_level/popups/Leestest.jpg"
                visible={popupProp}
                size={{ w: 600, h: 600 }}
                location={{ x: 212, y: 84 }}
                clickable={true}
                onClick={() => setPopupProp(false)}
            />
        </div>
    );
};

export default DeskLevel;
