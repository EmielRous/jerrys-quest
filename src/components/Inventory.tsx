import React, { useEffect, useState } from "react";
import {
  addRuby,
  getArrayFromStorage,
  getRubys,
  resetRubyes,
  saveArrayToStorage,
  STORAGE_KEY,
} from "../utils.tsx";
import { DiRuby } from "react-icons/di";

const Inventory: React.FC = () => {
  const [items, setItems] = useState([]);
  const [rubys, setRubys] = useState(0);
  useEffect(() => {
    function handleChangeStorage() {
      setItems(getArrayFromStorage(STORAGE_KEY.Inventory));
      setRubys(getRubys());
    }

    // Listen for the custom event
    window.addEventListener("storageChange", handleChangeStorage);

    // Initialize items on component mount
    handleChangeStorage();

    return () =>
      window.removeEventListener("storageChange", handleChangeStorage);
  }, []);

  return (
    <div className="fixed bottom-24 left-0 flex space-x-2 p-2 bg-green-600 rounded-lg flex flex-col">
      <div>
        Inventory{" "}
        <a
          onClick={() => {
            saveArrayToStorage(STORAGE_KEY.Inventory, []);
            resetRubyes();
          }}
        >
          clear
        </a>
      </div>
      <div className={"flex flex-row "}>
        <div className="relative size-12 border-2 border-red-950 bg-gray-600 mr-4">
          <p className={"absolute -top-1"}>{rubys}/10</p>

          <DiRuby className={"size-11 text-red-600"} />
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="size-12 border-2 border-white flex items-center justify-center bg-gray-600"
          >
            {items[index] && (
              <img
                src={items[index]}
                className="w-full h-full"
                alt="Inventory item"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
