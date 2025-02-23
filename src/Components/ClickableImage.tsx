import * as React from "react";
import { Button, Tooltip } from "antd";
import { useState } from "react";

interface ClickableImageProps {
  path: string;
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
}) => {
  return (
    <img
      src={path}
      className={`absolute hover:scale-110 top-100 left-40 size-20 `}
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
