import React, { createContext, useContext, useReducer } from 'react';
import reducer from './globalReducer'
import { SET_THEME, SET_SEARCH_QUERY } from '../utils/constants'

const GlobalContext = createContext({
    theme: "light",
    toggleTheme: () => {},
    searchQuery: '',
    submitSearchQuery: () => {}
});

const useGlobals = () => {
    const context = useContext(GlobalContext)
    if(!context){
        throw new Error( `Can't use "useGlobals without a GlobalProvider "` );
    }

    return context;
}

const GlobalProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, {theme:"light", searchQuery: ""})
    const submitSearchQuery = (input) => {
        dispatch( { type: SET_SEARCH_QUERY, payload: input } )
    }
    
    const toggleTheme = () => {
        //Get the whole html document
        const root = window.document.documentElement
        if( state.theme === "light" ){
            root.classList.remove("light")
            root.classList.add("dark")
            dispatch( { type:SET_THEME, payload:"dark" } )
        }else{
            root.classList.remove("dark")
            root.classList.add("light")
            dispatch( { type:SET_THEME, payload:"light" } )
        }
    }

    return(
        <GlobalContext.Provider value={{theme: state.theme, toggleTheme, searchQuery: state.searchQuery, submitSearchQuery}}>
            {children}
        </GlobalContext.Provider>
    )
}

export { useGlobals }

export default GlobalProvider;