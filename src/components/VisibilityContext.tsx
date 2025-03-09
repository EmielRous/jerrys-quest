import React, { createContext, useContext, useState } from "react";

// Define the type of state we want to share
interface VisibilityContextType {
    isVisible: boolean;
    toggleVisibility: () => void;
}

// Create the Context
const VisibilityContext = createContext<VisibilityContextType | undefined>(undefined);

// Create a Provider Component
export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to toggle visibility
    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <VisibilityContext.Provider value={{ isVisible, toggleVisibility }}>
            {children}
        </VisibilityContext.Provider>
    );
};

// Custom hook to use the context
export const useVisibility = () => {
    const context = useContext(VisibilityContext);
    if (!context) {
        throw new Error("useVisibility must be used within a VisibilityProvider");
    }
    return context;
};
