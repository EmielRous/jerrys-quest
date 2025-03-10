import React, { createContext, useContext, useState, useEffect } from "react";

// Define global state type
interface GlobalStateType {
    isVisible: boolean;
    puzzlesSolved: { [key: string]: boolean };
    inventory: string[];
    popups: { [key: string]: boolean };
    wikiIndex: number;
    rubys: number;
    kledingIndex: number;
    vouwIndex: number | null;
    toggleVisibility: () => void;
    markPuzzleAsSolved: (puzzleId: string) => void;
    resetPuzzles: () => void;
    addToInventory: (item: string) => void;
    removeFromInventory: (item: string) => void;
    addRuby: () => void;
    resetRubies: () => void;
    setPopup: (popupName: string, value: boolean) => void;
    resetPopups: () => void;
    updateWikiIndex: (index: number) => void;
    cycleKleding: () => void;
    cycleVouw: () => void;
    resetVouwSequence: () => void;
}

// Create context
const GlobalStateContext = createContext<GlobalStateType | undefined>(undefined);

// Provider Component
export const GlobalStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(() => JSON.parse(localStorage.getItem("isVisible") || "false"));
    const [puzzlesSolved, setPuzzlesSolved] = useState<{ [key: string]: boolean }>(() => JSON.parse(localStorage.getItem("puzzlesSolved") || "{}"));
    const [inventory, setInventory] = useState<string[]>(() => JSON.parse(localStorage.getItem("inventory") || "[]"));
    const [rubys, setRubys] = useState(() => JSON.parse(localStorage.getItem("rubys") || "0"));
    const [popups, setPopups] = useState<{ [key: string]: boolean }>(JSON.parse(localStorage.getItem("popups") || "{}"));
    const [wikiIndex, setWikiIndex] = useState(() => parseInt(localStorage.getItem("wikiIndex") || "0", 10));
    const [kledingIndex, setKledingIndex] = useState(0);
    const [vouwIndex, setVouwIndex] = useState<number | null>(null);

    useEffect(() => {
        localStorage.setItem("wikiIndex", wikiIndex.toString());
    }, [wikiIndex]);

    // ✅ Function to cycle through clothing folders
    const cycleKleding = () => {
        setKledingIndex((prev) => (prev + 1) % 4); // ✅ Cycle through 4 folders
        setVouwIndex(0); // ✅ Start new folder from first image
    };

    // ✅ Function to cycle through images in a folder
    const cycleVouw = () => {
        setVouwIndex((prev) => (prev === null ? 0 : prev + 1));
    };


    // ✅ Function to reset image sequence
    const resetVouwSequence = () => {
        setVouwIndex(null);
    };


    // ✅ Function to toggle popups
    const setPopup = (popupName: string, value: boolean) => {
        setPopups((prev) => {
            const newPopups = { ...prev, [popupName]: value };
            localStorage.setItem("popups", JSON.stringify(newPopups));
            return newPopups;
        });
    };

    // ✅ Function to reset all popups
    const resetPopups = () => {
        setPopups({});
        localStorage.setItem("popups", JSON.stringify({}));
    };

    // ✅ Function to reset puzzles, inventory, rubies, and popups together
    const resetPuzzles = () => {
        setPuzzlesSolved({});
        setInventory([]);
        setRubys(0);
        resetPopups();
        localStorage.setItem("puzzlesSolved", JSON.stringify({}));
        localStorage.setItem("inventory", JSON.stringify([]));
        localStorage.setItem("rubys", JSON.stringify(0));
    };

    // ✅ Function to mark a puzzle as solved
    const markPuzzleAsSolved = (puzzleId: string) => {
        setPuzzlesSolved((prev) => {
            const newState = { ...prev, [puzzleId]: true };
            localStorage.setItem("puzzlesSolved", JSON.stringify(newState));
            return newState;
        });
    };

    // ✅ Function to add an item to inventory
    const addToInventory = (item: string) => {
        setInventory((prev) => {
            const newInventory = [...prev, item];
            localStorage.setItem("inventory", JSON.stringify(newInventory));
            return newInventory;
        });
    };

    // ✅ Function to remove an item from inventory
    const removeFromInventory = (item: string) => {
        setInventory((prev) => {
            const newInventory = prev.filter((i) => i !== item);
            localStorage.setItem("inventory", JSON.stringify(newInventory));
            return newInventory;
        });
    };

    // ✅ Function to add a Ruby
    const addRuby = () => {
        setRubys((prev) => {
            const newCount = prev + 1;
            localStorage.setItem("rubys", JSON.stringify(newCount));
            return newCount;
        });
    };

    // ✅ Function to reset rubies
    const resetRubies = () => {
        setRubys(0);
        localStorage.setItem("rubys", JSON.stringify(0));
    };

    // ✅ Function to update wiki index
    const updateWikiIndex = (index: number) => {
        setWikiIndex(index);
        localStorage.setItem("wikiIndex", index.toString());
    };

    return (
        <GlobalStateContext.Provider value={{
            isVisible, puzzlesSolved, inventory, popups, wikiIndex, rubys, kledingIndex, vouwIndex,
            toggleVisibility: () => setIsVisible((prev) => !prev),
            markPuzzleAsSolved, resetPuzzles, addToInventory, removeFromInventory,
            addRuby, resetRubies, setPopup, resetPopups, updateWikiIndex,
            cycleKleding, cycleVouw, resetVouwSequence
        }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

// Custom Hook
export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error("useGlobalState must be used within a GlobalStateProvider");
    }
    return context;
};
