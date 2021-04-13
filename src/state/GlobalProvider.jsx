import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({
    darkMode: undefined,
    toggleDarkMode: () => {}
});

const useGlobals = () => {
    const context = useContext(GlobalContext)
    if(!context){
        throw new Error( `Can't use "useGlobals without a GlobalProvider "` );
    }

    return context;
}

const GlobalProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = (darkMode) => {
        setDarkMode(!darkMode)
        //Get the whole html document
        const root = window.document.documentElement

        if(!darkMode){
            root.classList.remove("dark")
            root.classList.add("light")
        }else{
            root.classList.remove("light")
            root.classList.add("dark")
        }
    }

    return(
        <GlobalContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </GlobalContext.Provider>
    )
}

export { useGlobals }

export default GlobalProvider;