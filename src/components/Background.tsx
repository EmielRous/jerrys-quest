import React from "react";

const BackgroundImage: React.FC = () => {
    return (
        <img
            src="/Background.png"
            alt="Background"
            className="absolute top-0 right-0 h-screen w-auto"
            style={{ maxWidth: "none" }}
        />
    );
};

export default BackgroundImage;
