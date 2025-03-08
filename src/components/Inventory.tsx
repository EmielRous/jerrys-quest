import React, { useEffect, useState } from "react";
import {
  getArrayFromStorage,
  saveArrayToStorage,
  STORAGE_KEY,
} from "../utils.tsx";

const Inventory: React.FC = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    function handleChangeStorage() {
      setItems(getArrayFromStorage(STORAGE_KEY.Inventory));
      console.log("actual change");
    }

    // Listen for the custom event
    window.addEventListener("storageChange", handleChangeStorage);
    console.log("adding listener");

    // Initialize items on component mount
    handleChangeStorage();

    return () =>
      window.removeEventListener("storageChange", handleChangeStorage);
  }, []);

  return (
    <div className="fixed bottom-24 left-34 transform -translate-x-1/2 flex space-x-2 p-2 bg-green-600 rounded-lg flex flex-col">
      <div>
        Inventory{" "}
        <a onClick={() => saveArrayToStorage(STORAGE_KEY.Inventory, [])}>
          clear
        </a>
      </div>
      <div className={"flex flex-row "}>
        {Array.from({ length: Math.min(5, items.length) }).map((_, index) => (
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
