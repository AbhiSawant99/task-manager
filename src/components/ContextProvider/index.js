import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

const AppContext = () => useContext(DataContext);

const ContextProvider = ({ children }) => {
    const [allTask, setAllTask] = useState(JSON.parse(localStorage.getItem('allTask')));

    return (
        <DataContext.Provider
            value={{
                allTask,
                setAllTask
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export { AppContext, ContextProvider };