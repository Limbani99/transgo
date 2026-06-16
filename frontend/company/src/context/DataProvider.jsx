import { createContext, useContext } from "react";

export const Data = createContext();

export const DataProvider = ({ children }) => {
    const value = {

    }

    return (
        <Data.Provider value={value}>
            {children}
        </Data.Provider>
    )
}



export const useData = () => {
    const context = useContext(Data);
    return context;
};