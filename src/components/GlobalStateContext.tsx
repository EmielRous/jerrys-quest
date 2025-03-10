import React, { createContext, useContext, useState, useEffect } from "react";

// Define global state type
interface GlobalStateType {
    isVisible: boolean;
    puzzlesSolved: { [key: string]: boolean };
    inventory: string[];
    popups: { [key: string]: boolean };
    wikiIndex: number;
    rubys: number; // ✅ Track ruby count
    toggleVisibility: () => void;
    markPuzzleAsSolved: (puzzleId: string) => void;
    resetPuzzles: () => void;
    addToInventory: (item: string) => void;
    removeFromInventory: (item: string) => void;
    addRuby: () => void;  // ✅ Add rubies function
    resetRubies: () => void; // ✅ Reset rubies function
    setPopup: (popupName: string, value: boolean) => void;
    resetPopups: () => void;
    setWikiIndex: (index: number) => void;
}

// Create context
const GlobalStateContext = createContext<GlobalStateType | undefined>(undefined);

// Provider Component
export const GlobalStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(() => JSON.parse(localStorage.getItem("isVisible") || "false"));
    const [puzzlesSolved, setPuzzlesSolved] = useState<{ [key: string]: boolean }>(() => JSON.parse(localStorage.getItem("puzzlesSolved") || "{}"));
    const [inventory, setInventory] = useState<string[]>(() => JSON.parse(localStorage.getItem("inventory") || "[]"));
    const [rubys, setRubys] = useState(() => JSON.parse(localStorage.getItem("rubys") || "0")); // ✅ Load rubies
    const [popups, setPopups] = useState<{ [key: string]: boolean }>({
        popupBril: false,
        popupProp: false,
        popupKaart: false
    });
    const [wikiIndex, setWikiIndex] = useState(() => {
        return parseInt(localStorage.getItem("wikiIndex") || "0", 10); // ✅ Load from localStorage
    });

    useEffect(() => {
        localStorage.setItem("wikiIndex", wikiIndex.toString()); // ✅ Save to localStorage
    }, [wikiIndex]);

    // ✅ Function to toggle popups
    const setPopup = (popupName: string, value: boolean) => {
        setPopups((prev) => ({ ...prev, [popupName]: value }));
    };

    // ✅ Reset all popups
    const resetPopups = () => {
        setPopups({ popupBril: false, popupProp: false, popupKaart: false });
    };

    // ✅ Reset puzzles, inventory, rubies, and popups together
    const resetPuzzles = () => {
        setPuzzlesSolved({});
        setInventory([]);
        setRubys(0); // ✅ Reset rubies too
        resetPopups();
        localStorage.setItem("puzzlesSolved", JSON.stringify({}));
        localStorage.setItem("inventory", JSON.stringify([]));
        localStorage.setItem("rubys", JSON.stringify(0)); // ✅ Store reset rubies
        localStorage.setItem("popups", JSON.stringify([]));
    };

    // ✅ Function to mark a puzzle as solved
    const markPuzzleAsSolved = (puzzleId: string) => {
        setPuzzlesSolved((prev) => {
            const newState = { ...prev, [puzzleId]: true };
            localStorage.setItem("puzzlesSolved", JSON.stringify(newState));
            return newState;
        });
    };

    // ✅ Add item to inventory
    const addToInventory = (item: string) => {
        setInventory((prev) => {
            const newInventory = [...prev, item];
            localStorage.setItem("inventory", JSON.stringify(newInventory));
            return newInventory;
        });
    };

    // ✅ Remove item from inventory
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

    // ✅ Function to reset Rubies
    const resetRubies = () => {
        setRubys(0);
        localStorage.setItem("rubys", JSON.stringify(0));
    };

    return (
        <GlobalStateContext.Provider value={{
            isVisible, puzzlesSolved, inventory, popups, wikiIndex, rubys,
            toggleVisibility: () => setIsVisible((prev) => !prev),
            markPuzzleAsSolved,
            resetPuzzles, addToInventory, removeFromInventory,
            addRuby, resetRubies, setPopup, resetPopups, setWikiIndex
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
