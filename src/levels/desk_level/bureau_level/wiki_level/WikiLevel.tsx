import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClickableImage from "../../../../components/ClickableImage.tsx";
import BackButton from "../../../../components/BackButton.tsx";
import RaadWoordComponent from "../../../../components/RaadWoordComponent.tsx";
import { useGlobalState } from "../../../../components/GlobalStateContext.tsx";
import BackgroundImage from "../../../../components/Background.tsx";

const WikiLevel: React.FC = () => {
  const navigate = useNavigate();
  const {
    puzzlesSolved,
    markPuzzleAsSolved,
    wikiIndex,
    updateWikiIndex,
    isWikiOpen,
    setWikiOpen,
  } = useGlobalState(); // ✅ Add isWikiOpen, setWikiOpen

  useEffect(() => {
    function handleMessage(event) {
      if (event.data && event.data.allLinksVisited) {
        alert(
          "Dat was ZO interessant! Wacht, hoe laat is het? Shit ik moet echt verder met die robijnen...",
        );
        setWikiOpen(false);
      }
    }
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  //
  const wikiPages = [
    "campusgeheimen.html",
    "koffieparadox.html",
    "procrastinatiesyndroom.html",
    "tabbladenuniversum.html",
    "wetvanuitstelgedrag.html",
    "brasoorlog.html",
  ];
  useEffect(() => {
    setWikiOpen(false);
  }, []);

  const loadNextWiki = () => {
    setWikiOpen(true);
    markPuzzleAsSolved("WikiOpen");
    updateWikiIndex((wikiIndex + 1) % wikiPages.length); // ✅ Ensures proper update
  };

  return (
    <div>
      <BackgroundImage />
      {!isWikiOpen && <BackButton />}
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
        visible={!isWikiOpen}
        clickable
        onClick={loadNextWiki} // ✅ Open wiki on first click, cycle on next clicks
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
      {isWikiOpen && (
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
      <ClickableImage
        path="/JerrysQuest.png"
        size={{ w: 469, h: 73 }}
        location={{ x: 267, y: 0 }}
      />
    </div>
  );
};

export default WikiLevel;
