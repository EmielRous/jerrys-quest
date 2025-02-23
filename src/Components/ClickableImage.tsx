import * as React from "react";

interface ClickableImageProps {
  path: string;
  clickable?: boolean;
  onClick?: (e: any) => void;
  onMouseEnter?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
  visible?: boolean;
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
}) => {
  return (
    <img
      src={path}
      className={`absolute  top-100 left-40 size-20 ${visible ? "" : "hidden"} ${clickable ? "hover:scale-105" : ""}`}
      onClick={onClick}
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
