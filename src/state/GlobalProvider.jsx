import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({
    theme: "light",
    toggleTheme: () => {}
});

const useGlobals = () => {
    const context = useContext(GlobalContext)
    if(!context){
        throw new Error( `Can't use "useGlobals without a GlobalProvider "` );
    }

    return context;
}

const GlobalProvider = ({ children }) => {
    const [ theme, setTheme ] = useState("light")
    const toggleTheme = () => {
        // setDarkMode(!darkMode)
        //Get the whole html document
        const root = window.document.documentElement
        if( theme === "light" ){
            root.classList.remove("light")
            root.classList.add("dark")
            setTheme("dark")
        }else{
            root.classList.remove("dark")
            root.classList.add("light")
            setTheme("light")
        }
        
    }

    return(
        <GlobalContext.Provider value={{theme, toggleTheme}}>
            {children}
        </GlobalContext.Provider>
    )
}

export { useGlobals }

export default GlobalProvider;