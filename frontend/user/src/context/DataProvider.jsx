import React, { createContext } from 'react'

export const DataContext = createContext();
const DataProvider = ({ children }) => {
    
    const value = {

    }
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext);
  return context;
};