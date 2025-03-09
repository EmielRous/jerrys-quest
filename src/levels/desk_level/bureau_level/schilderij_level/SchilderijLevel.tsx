import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../../components/BackButton.tsx";
import {
  getArrayFromStorage,
  STORAGE_KEY,
  removeItemFromStorage,
  addAugurkToSchilderij,
  getAugurkenFromSchilderij,
  getRubys,
} from "../../../../utils.tsx";
import ClickableImage from "../../../../components/ClickableImage.tsx";

const SchilderijLevel: React.FC = () => {
  const navigate = useNavigate();
  const [vis, setVis] = useState(false);
  const [augurenInSchilderij, setAugurenInSchilderij] = useState<string[]>([]);

  useEffect(() => {
    // Load augurken from storage on component mount
    const storedAugurken = getAugurkenFromSchilderij();
    setAugurenInSchilderij(storedAugurken);
    if (storedAugurken.length >= 2) {
      setVis(true);
    }
  }, []);

  const voegGurkieToeAanSchildreij = () => {
    const gurkies = getArrayFromStorage(STORAGE_KEY.Inventory)?.filter((i) =>
      i.toLowerCase().includes("augurk"),
    );

    if (gurkies && gurkies.length > 0) {
      const augurkToAdd = gurkies[0];
      setAugurenInSchilderij((prev) => [...prev, augurkToAdd]);
      addAugurkToSchilderij(augurkToAdd);
      removeItemFromStorage(STORAGE_KEY.Inventory, augurkToAdd);

      if (augurenInSchilderij.length + 1 >= 2) {
        setVis(true);
      }
    }
  };

  return (
    <div>
      <BackButton />
      <img
        onClick={() => voegGurkieToeAanSchildreij()}
        className={`relative h-[768px] w-[1024px] ${vis ? "hidden" : ""}`}
        src="/desk_level/bureau_level/schilderij_level/Schilderij1.png"
      />
      {augurenInSchilderij.map((src, index) => (
        <ClickableImage
          path={src}
          size={{ w: 100, h: 100 }} // Adjust positioning as needed
          location={{ x: 300, y: 500 }}
        />
      ))}
      <img
        className={`relative h-[768px] w-[1024px] ${!vis ? "hidden" : ""}`}
        src="/desk_level/bureau_level/schilderij_level/Schilderij3.png"
      />
    </div>
  );
};

export default SchilderijLevel;
