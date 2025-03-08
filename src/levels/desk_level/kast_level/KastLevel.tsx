import React, { useState } from "react";
import ClickableImage from "../../../components/ClickableImage.tsx";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../components/BackButton.tsx";

const KastLevel: React.FC = ({}) => {
    const navigate = useNavigate();
    return (
        <div>
            <BackButton />
            <img
                className={"relative h-[768px] w-[1024px]"}
                src={"/desk_level/kast_level/KastView.png"}
            />

            <ClickableImage
                path="/desk_level/kast_level/Augurken.png"
                size={{ w: 400, h: 230 }}
                location={{ x: 258, y: 256 }}
            />
            <ClickableImage
                path="/desk_level/kast_level/Kast.png"
                size={{ w: 300, h: 250 }}
                location={{ x: 230, y: 267 }}
            />
        </div>
    );
};

export default KastLevel;
