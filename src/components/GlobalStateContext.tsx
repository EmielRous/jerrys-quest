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
    isWikiOpen: boolean; // ✅ New global state
    setWikiOpen: (value: boolean) => void; // ✅ Function to update it
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
    getNextNegativeMessage: () => string;
    getNextPositiveMessage: () => string;
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
    const [negativeIndex, setNegativeIndex] = useState(0);
    const [positiveIndex, setPositiveIndex] = useState(0);
    const [isWikiOpen, setWikiOpen] = useState(false); // ✅ Add this state


    useEffect(() => {
        localStorage.setItem("wikiIndex", wikiIndex.toString());
    }, [wikiIndex]);

    const negativeMessages = [
        "Nope", "Helaas", "Jammer dan", "Homoooooo!", "Pff, dat noemt zich een MSc",
        "Nee man", "Echt niet!", "Nein Nein Nein Nein", "Lever je papiertje maar weer in",
        "Helaas pindakaas", "Ha! je moeder!", "Loser!", "Jammer man", "Allemaal onvoldoende!",
        "MAND!!!!", "Nice try", "Probeer opnieuw", "Goed bezig", "Geef niet op!",
        "Is dit spel ondertussen al frustrerender dan je thesis?"
    ];

    const positiveMessages = [
        "Cum Laude! Hier is een robijn", "Je moeder zou trots zijn", "Alles onder controle",
        "Oke maar deze was makkelijk",
        "Dit is genieten, kijk toch eens wat een robijnen",
        "Met elke robijn krijg je meer persoonlijkheid",
        "RUBY RUBY RUBY RUBY (AAAAAAAAH)",
    ];

    const getNextNegativeMessage = () => {
        const message = negativeMessages[negativeIndex];
        setNegativeIndex((prev) => (prev + 1) % negativeMessages.length);
        return message;
    };

    const getNextPositiveMessage = () => {
        const message = positiveMessages[positiveIndex];
        setPositiveIndex((prev) => (prev + 1) % positiveMessages.length);
        return message;
    };

    const cycleKleding = () => {
        setKledingIndex((prev) => (prev + 1) % 4);
        setVouwIndex(0);
    };

    const cycleVouw = () => {
        setVouwIndex((prev) => (prev === null ? 0 : prev + 1));
    };

    const resetVouwSequence = () => {
        setVouwIndex(null);
    };

    const setPopup = (popupName: string, value: boolean) => {
        setPopups((prev) => {
            const newPopups = { ...prev, [popupName]: value };
            localStorage.setItem("popups", JSON.stringify(newPopups));
            return newPopups;
        });
    };

    const resetPopups = () => {
        setPopups({});
        localStorage.setItem("popups", JSON.stringify({}));
    };

    const resetPuzzles = () => {
        setPuzzlesSolved({});
        setInventory([]);
        setRubys(0);
        resetPopups();
        localStorage.setItem("puzzlesSolved", JSON.stringify({}));
        localStorage.setItem("inventory", JSON.stringify([]));
        localStorage.setItem("rubys", JSON.stringify(0));

    };

    const markPuzzleAsSolved = (puzzleId: string) => {
        setPuzzlesSolved((prev) => {
            const newState = { ...prev, [puzzleId]: true };
            localStorage.setItem("puzzlesSolved", JSON.stringify(newState));
            return newState;
        });
    };

    const addToInventory = (item: string) => {
        setInventory((prev) => {
            const newInventory = [...prev, item];
            localStorage.setItem("inventory", JSON.stringify(newInventory));
            return newInventory;
        });
    };

    const removeFromInventory = (item: string) => {
        setInventory((prev) => {
            const newInventory = prev.filter((i) => i !== item);
            localStorage.setItem("inventory", JSON.stringify(newInventory));
            return newInventory;
        });
    };

    const addRuby = () => {
        setRubys((prev) => {
            const newCount = prev + 1;
            localStorage.setItem("rubys", JSON.stringify(newCount));
            return newCount;
        });
    };

    const resetRubies = () => {
        setRubys(0);
        localStorage.setItem("rubys", JSON.stringify(0));
    };

    const updateWikiIndex = (index: number) => {
        setWikiIndex(index);
        localStorage.setItem("wikiIndex", index.toString());
    };

    return (
        <GlobalStateContext.Provider value={{
            isVisible, puzzlesSolved, inventory, popups, wikiIndex, rubys, kledingIndex, vouwIndex, isWikiOpen, setWikiOpen,
            toggleVisibility: () => setIsVisible((prev) => !prev),
            markPuzzleAsSolved, resetPuzzles, addToInventory, removeFromInventory,
            addRuby, resetRubies, setPopup, resetPopups, updateWikiIndex,
            cycleKleding, cycleVouw, resetVouwSequence,
            getNextNegativeMessage, getNextPositiveMessage
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
