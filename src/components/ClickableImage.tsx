import * as React from "react";
import {useNavigate} from "react-router-dom";
import {useGlobalState} from "../components/GlobalStateContext.tsx";

interface ClickableImageProps {
    path: string,
    clickable?: boolean,
    onClick?: (e: any) => void,
    isInventoriable?: boolean,
    redirect?: string,
    visible?: boolean,
    size: { w: number; h: number; },
    location: { x: number; y: number; },
    style?: {},
    onMouseLeave?: () => void,
    onMouseEnter?: () => void
}

const ClickableImage: React.FC<ClickableImageProps> = ({
                                                           path,
                                                           location,
                                                           size,
                                                           onClick,
                                                           clickable = false,
                                                           isInventoriable = false,
                                                           redirect = "",
                                                           visible = true,
                                                           style = {},
                                                           onMouseLeave,
                                                           onMouseEnter
                                                       }) => {
    const navigate = useNavigate();
    const {addToInventory, markPuzzleAsSolved} = useGlobalState(); // ✅ Use global inventory

    const _onClick = (e) => {
        if (redirect.length > 0) {
            navigate(redirect);
        }
        if (isInventoriable) {
            addToInventory(path);
            markPuzzleAsSolved(path); // ✅ Mark the item as picked up
        }
        onClick?.(e);
    };

    return (
        <img
            src={path}
            className={`absolute ${visible ? "" : "hidden"} ${clickable ? "hover:scale-105 hover:cursor-pointer" : ""}`}
            onClick={_onClick}
            onMouseEnter={onMouseEnter} // ✅ Fix: Attach MouseEnter
            onMouseLeave={onMouseLeave} // ✅ Fix: Attach MouseLeave
            style={{
                top: location.y + "px",
                left: location.x + "px",
                height: size.h + "px",
                width: size.w + "px",
                transformOrigin: "50% 50%",
                ...style,
            }}
        />

    );
};

export default ClickableImage;
