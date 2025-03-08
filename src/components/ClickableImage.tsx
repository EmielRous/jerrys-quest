import * as React from "react";
import {
  addItemToStorage,
  getArrayFromStorage,
  STORAGE_KEY,
} from "../utils.tsx";
import { useEffect } from "react";

interface ClickableImageProps {
  path: string;
  clickable?: boolean;
  onClick?: (e: any) => void;
  onMouseEnter?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
  visible?: boolean;
  isInventoriable: boolean;
  size: {
    w: number;
    h: number;
  };
  location: {
    x: number;
    y: number;
  };
}
const ClickableImage: React.FC<ClickableImageProps> = ({
  path,
  location,
  size,
  onClick,
  onMouseEnter,
  onMouseLeave,
  clickable = false,
  visible = true,
  isInventoriable = false,
}) => {
  const _onClick = () => {
    if (isInventoriable) {
      addItemToStorage(STORAGE_KEY.Inventory, path);
    }
  };

  return (
    <img
      src={path}
      className={`absolute ${visible ? "" : "hidden"} ${clickable ? "hover:scale-105" : ""}`}
      onClick={_onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        top: location.y + "px",
        left: location.x + "px",
        height: size.h + "px",
        width: size.w + "px",
      }}
    />
  );
};

export default ClickableImage;
