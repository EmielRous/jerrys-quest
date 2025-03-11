import React, { useEffect } from "react";
import ClickableImage from "../../../../components/ClickableImage.tsx";
import { useGlobalState } from "../../../../components/GlobalStateContext.tsx";
import BackButton from "../../../../components/BackButton.tsx";

const SchilderijLevel: React.FC = () => {
  const { puzzlesSolved, markPuzzleAsSolved, inventory, removeFromInventory, addRuby } = useGlobalState();

  const getSchilderijPath = () => {
    if (puzzlesSolved["Schilderij3"]) return "/desk_level/bureau_level/schilderij_level/Schilderij3.png";
    if (puzzlesSolved["Schilderij2"]) return "/desk_level/bureau_level/schilderij_level/Schilderij2.png";
    return "/desk_level/bureau_level/schilderij_level/Schilderij1.png";
  };

  const handleClick = () => {
    if (!puzzlesSolved["Schilderij2"] && inventory.includes("/desk_level/kast_level/Augurk1.png")) {
      markPuzzleAsSolved("Schilderij2");
      removeFromInventory("/desk_level/kast_level/Augurk1.png");
    } else if (!puzzlesSolved["Schilderij3"] && inventory.includes("/desk_level/kast_level/Augurk2.png")) {
      markPuzzleAsSolved("Schilderij3");
      removeFromInventory("/desk_level/kast_level/Augurk2.png");
      addRuby();
      alert("Good job! You deserve a ruby.");
    }
  };

  return (
      <div>
        <BackButton />
        <ClickableImage
            path={getSchilderijPath()}
            size={{ w: 1024, h: 768 }}
            location={{ x: 0, y: 0 }}
            onClick={handleClick}
        />
          <ClickableImage
              path="/JerrysQuest.png"
              size={{ w: 469, h: 73 }}
              location={{ x: 267, y: 0 }}
          />
      </div>
  );
};

export default SchilderijLevel;
