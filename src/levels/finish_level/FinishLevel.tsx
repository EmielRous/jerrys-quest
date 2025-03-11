import React, { useEffect } from "react";
import ClickableImage from "../../components/ClickableImage.tsx";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../components/GlobalStateContext.tsx";
import { Levels } from "../../utils.tsx";

const FinishLevel: React.FC = () => {
    const navigate = useNavigate();
    const { resetPuzzles, resetRubies, resetPopups, rubys } = useGlobalState();

    // ✅ Auto-navigate to DeskLevel only if rubys < 10
    useEffect(() => {
        if (rubys < 10) {
            navigate(`/${Levels.DeskLevel}`);
        }
    }, [rubys, navigate]);

    return (
        <div>
            {/* ✅ Background Image */}
            <ClickableImage
                path="/finish_level/Eindscherm.png"
                size={{ w: 1024, h: 768 }}
                location={{ x: 0, y: 0 }}
            />
        </div>
    );
};

export default FinishLevel;
