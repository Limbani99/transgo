import React from "react";

const DataProvider = ({ children }) => {


    return (
        <DataContext.Provider value={{}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider")
    }
    return context;
}