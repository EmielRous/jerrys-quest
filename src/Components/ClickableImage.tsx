import * as React from "react";

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
      className={`absolute top-100 left-40 size-20 top-${location.y} left-${location.x} w-${size.w} h-${size.h} `}
    />
  );
};

export default ClickableImage;
