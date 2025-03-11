import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClickableImage from "../../../../components/ClickableImage.tsx";
import BackButton from "../../../../components/BackButton.tsx";
import RaadWoordComponent from "../../../../components/RaadWoordComponent.tsx";
import { useGlobalState } from "../../../../components/GlobalStateContext.tsx";

const WikiLevel: React.FC = () => {
    const navigate = useNavigate();
    const { puzzlesSolved, markPuzzleAsSolved, wikiIndex, setWikiIndex } = useGlobalState();
    const [isWikiOpen, setIsWikiOpen] = useState(false);

    const wikiPages = [
        "campusgeheimen.html",
        "koffieparadox.html",
        "procrastinatiesyndroom.html",
        "studentenhuishouden.html",
        "tabbladenuniversum.html",
        "wetvanuitstelgedrag.html",
        "brasoorlog.html",
    ];

    // ✅ Ensure a random wiki page is assigned before rendering
    useEffect(() => {
        if (wikiIndex === null || wikiIndex === undefined) {
            const randomIndex = Math.floor(Math.random() * wikiPages.length);
            setWikiIndex(randomIndex);
        }
        setIsWikiOpen(false); // Ensure it's closed on entry
    }, []); // ✅ Runs only once on mount

    // ✅ Function to cycle through wiki pages when clicking PC screen
    const loadNextWiki = () => {
        if (!isWikiOpen) {
            setIsWikiOpen(true);
        } else {
            const nextIndex = ((wikiIndex ?? 0) + 1) % wikiPages.length;
            setWikiIndex(nextIndex);
        }
    };

    // 🚨 **Wait until `wikiIndex` is set before rendering**
    if (wikiIndex === null || wikiIndex === undefined) {
        return <div>Loading Wiki...</div>; // ✅ Shows temporary loading message
    }

    return (
        <div>
            <BackButton />

            {/* Background Image */}
            <ClickableImage
                path="/desk_level/bureau_level/wiki_level/Wiki-background.png"
                size={{ w: 1024, h: 768 }}
                location={{ x: 0, y: 0 }}
            />

            {/* Clickable PC Screen */}
            <ClickableImage
                path="/desk_level/bureau_level/wiki_level/Desk-PCscreen.gif"
                size={{ w: 568, h: 395 }}
                location={{ x: 366, y: 78 }}
                clickable
                onClick={loadNextWiki}
            />

            {/* Video - Only Visible if Wiki is NOT solved */}
            {!puzzlesSolved["Wiki"] && (
                <video
                    width="1024"
                    height="768"
                    autoPlay
                    controls={false}
                    className="absolute top-0 left-0"
                >
                    <source
                        src="/desk_level/bureau_level/wiki_level/Wiki-video.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            )}

            {/* Word Puzzle Component */}
            <RaadWoordComponent
                correctWord={"wikiroute"}
                onCorrect={() => markPuzzleAsSolved("Wiki")}
                visible={!puzzlesSolved["Wiki"]}
            />

            {/* Wiki Page Overlay - Only Visible After Click */}
            {isWikiOpen && wikiIndex !== null && (
                <div
                    className="absolute"
                    style={{
                        top: "78px",
                        left: "366px",
                        width: "568px",
                        height: "395px",
                        background: "black",
                        overflow: "hidden",
                    }}
                >
                    {/* Wiki Iframe */}
                    <iframe
                        src={`/desk_level/bureau_level/wiki_level/htmls/${wikiPages[wikiIndex]}`}
                        width="1000px"
                        height="695px"
                        className="border-none"
                        style={{
                            transform: "scale(0.568)",
                            transformOrigin: "0 0",
                        }}
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default WikiLevel;
