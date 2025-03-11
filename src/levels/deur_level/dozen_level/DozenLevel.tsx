import React, { useState, useRef } from "react";
import ClickableImage from "../../../components/ClickableImage.tsx";
import BackButton from "../../../components/BackButton.tsx";
import {useGlobalState} from "../../../components/GlobalStateContext.tsx";
import RaadWoordComponent from "../../../components/RaadWoordComponent.tsx";

const DozenLevel: React.FC = () => {
    const [paddoTrip, setPaddoTrip] = useState(false);
    const [koningClick, setKoningClick] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { isVisible, toggleVisibility, puzzlesSolved, markPuzzleAsSolved } = useGlobalState();

    const handleTripEnd = () => {
        setPaddoTrip(false);
    };

    // Define initial positions and **hardcoded directions**
    const initialObjects = {
        doos1: { x: 8, directionX: -1, width: 400 },     // Start moving RIGHT
        doos2: { x: 301, directionX: 1, width: 500 },  // Start moving LEFT
        doos3: { x: 93, directionX: -1, width: 500 },    // Start moving RIGHT
        doos4: { x: 319, directionX: -1, width: 700 },  // Start moving LEFT
        slaapzak: { x: 200, directionX: 1, width: 643 },// Start moving RIGHT
        lidl: { x: 415, directionX: -1, width: 377 }    // Start moving LEFT
    };

    const [objects, setObjects] = useState(initialObjects);

    const moveObject = (name: string) => {
        setObjects((prev) => {
            const obj = prev[name];
            const speed = 20;

            // Calculate new position
            let newX = obj.x + speed * obj.directionX;

            // If object reaches the left or right edge of the 1024px game view, reverse direction
            if (newX <= 0 || newX + obj.width >= 1024) {
                obj.directionX *= -1; // Flip direction
                newX = obj.x + speed * obj.directionX; // Move in new direction
            }

            return { ...prev, [name]: { ...obj, x: newX } };
        });
    };

    return (
        <div>
            <ClickableImage
                path="/deur_level/dozen_level/DozenView.png"
                size={{ w: 1024, h: 768 }}
                location={{ x: 0, y: 0 }}
            />
            <BackButton />
            <ClickableImage
                path="/deur_level/dozen_level/Koning.png"
                size={{ w: 200, h: 400 }}
                location={{ x: 103, y: 202 }}
                clickable={!puzzlesSolved["Koning"]}
                onClick={() => setKoningClick(true)}
            />
            <ClickableImage
                path="/deur_level/dozen_level/Paddos.png"
                size={{ w: 152, h: 143 }}
                location={{ x: 821, y: 455 }}
                clickable={true}
                onClick={() => setPaddoTrip(true)}
            />

            {/* Clickable moving objects */}
            <ClickableImage
                path="/deur_level/dozen_level/Doos1.png"
                size={{ w: 400, h: 500 }}
                location={{ x: objects.doos1.x, y: 100 }}
                clickable={true}
                onClick={() => moveObject("doos1")}
            />
            <ClickableImage
                path="/deur_level/dozen_level/Doos2.png"
                size={{ w: 500, h: 400 }}
                location={{ x: objects.doos2.x, y: 211 }}
                clickable={true}
                onClick={() => moveObject("doos2")}
            />
            <ClickableImage
                path="/deur_level/dozen_level/Doos3.png"
                size={{ w: 500, h: 450 }}
                location={{ x: objects.doos3.x, y: 150 }}
                clickable={true}
                onClick={() => moveObject("doos3")}
            />
            <ClickableImage
                path="/deur_level/dozen_level/Doos4.png"
                size={{ w: 700, h: 600 }}
                location={{ x: objects.doos4.x, y: 20 }}
                clickable={true}
                onClick={() => moveObject("doos4")}
            />
            <ClickableImage
                path="/deur_level/dozen_level/Slaapzak.png"
                size={{ w: 643, h: 435 }}
                location={{ x: objects.slaapzak.x, y: 173 }}
                clickable={true}
                onClick={() => moveObject("slaapzak")}
            />
            <ClickableImage
                path="/deur_level/dozen_level/Lidl.png"
                size={{ w: 377, h: 466 }}
                location={{ x: objects.lidl.x, y: 157 }}
                clickable={true}
                onClick={() => moveObject("lidl")}
            />

            <ClickableImage
                path="/deur_level/dozen_level/Shelf.png"
                size={{ w: 1024, h: 199 }}
                location={{ x: 0, y: 547 }}
            />
            <ClickableImage
                path="/deur_level/dozen_level/Vraag.png"
                visible={koningClick && !puzzlesSolved["Koning"]}
                size={{ w: 320, h: 268 }}
                location={{ x: 207, y: 35 }}
            />
            <RaadWoordComponent
                correctWord={"dammen"}
                onCorrect={() => markPuzzleAsSolved("Koning")}
                visible={koningClick && !puzzlesSolved["Koning"]} // ✅ Show after clicking Koning
            />

            {paddoTrip && (
                <div>
                    <video
                        ref={videoRef}
                        src="/deur_level/dozen_level/PaddoTrip.mp4"
                        autoPlay={true}
                        onEnded={handleTripEnd}
                        width="320"
                        height="240"
                        controls={false}
                        className={"absolute"}
                        style={{
                            top: "0px",
                            left: "0px",
                            height: "768px",
                            width: "1024px",
                        }}
                    />
                </div>
            )}
            <ClickableImage
                path="/JerrysQuest.png"
                size={{ w: 469, h: 73 }}
                location={{ x: 267, y: 0 }}
            />
        </div>
    );
};

export default DozenLevel;
