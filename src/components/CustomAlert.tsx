import React, { createContext, useContext, useState } from "react";

// Create Context
const AlertContext = createContext<{ showAlert: (message: string) => void } | undefined>(undefined);

export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) throw new Error("useAlert must be used within an AlertProvider");
    return context;
};

// Alert Provider Component
export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [alertMessage, setAlertMessage] = useState<string | null>(null);

    const showAlert = (message: string) => setAlertMessage(message);

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}
            {alertMessage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md">
                    <div
                        className="text-white p-6 rounded-lg shadow-xl border border-red-500 backdrop-blur-xl flex flex-col items-center text-center"
                        style={{
                            background: "linear-gradient(135deg, #070a26 0%, #1a0b38 40%, #1a0b38 55%, #070a26 100%)"
                        }}
                    >
                        <p className="text-lg mb-4">{alertMessage}</p>
                        <button
                            onClick={() => setAlertMessage(null)}
                            className="px-6 py-3 !bg-red-500 rounded-lg transition-all shadow-md font-bold"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </AlertContext.Provider>
    );
};
