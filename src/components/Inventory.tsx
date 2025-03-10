import React, { useEffect, useState } from "react";
import {
  addRuby,
  getArrayFromStorage,
  getRubys,
  resetAugurken,
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

    window.addEventListener("storageChange", handleChangeStorage);
    handleChangeStorage();

    return () =>
        window.removeEventListener("storageChange", handleChangeStorage);
  }, []);

  return (
      <div className="absolute top-[768px] left-[265px] flex justify-end">
        <div className="flex flex-row space-x-4 bg-green-600 p-4 border-2 border-red-200 rounded-2xl shadow-lg">

          <div className="relative size-24 border-4 border-red-950 bg-gray-600 flex flex-col items-center justify-center text-white font-bold">
            <p className="absolute -top-2 text-lg">{rubys}/10</p>
            <DiRuby className="size-22 text-red-600" />
          </div>

          {/* Inventory slots */}
          <div className="flex flex-row space-x-2">
            {Array.from({ length: 5 }).map((_, index) => (
                <div
                    key={index}
                    className="size-24 border-4 border-white flex items-center justify-center bg-gray-600"
                >
                  {items[index] && (
                      <img
                          src={items[index]}
                          className="w-full h-full object-contain"
                          alt="Inventory item"
                      />
                  )}
                </div>
            ))}
          </div>

          <div className="font-bold text-lg text-center">
            <a
                onClick={() => {
                  saveArrayToStorage(STORAGE_KEY.Inventory, []);
                  resetRubyes();
                  resetAugurken();
                }}
                className="text-red-600 cursor-pointer hover:underline"
            >
              [C L E A R]
            </a>
          </div>
        </div>
      </div>
  );
};

export default Inventory;
