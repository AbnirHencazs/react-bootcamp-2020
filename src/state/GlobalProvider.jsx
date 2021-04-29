import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './globalReducer'
import { SET_THEME, SET_SEARCH_QUERY, SET_USER, UNSET_USER, ADD_FAVOURITE, REMOVE_FAVOURITE } from '../utils/constants'

const GlobalContext = createContext({
    theme: "light",
    toggleTheme: () => {},
    searchQuery: '',
    submitSearchQuery: () => {},
    user: {},
    updateUser: () => {},
    favourites: [],
    addFavourite: () => {},
    removeFavourite: () => {}
});

const useGlobals = () => {
    const context = useContext(GlobalContext)
    if(!context){
        throw new Error( `Can't use "useGlobals without a GlobalProvider "` );
    }

    return context;
}

const GlobalProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, {
        theme:"light", 
        searchQuery: "",
        user: JSON.parse(localStorage.getItem("userInfo")),
        favourites: JSON.parse(localStorage.getItem("favouriteVideos"))
    })

    useEffect(() => {
        if(state.user === null){
            localStorage.setItem("userInfo", JSON.stringify({}))
            return
        }
        
        localStorage.setItem("userInfo", JSON.stringify(state.user))
    },[state.user])

    useEffect(() => {
        if(state.favourites === null){
            localStorage.setItem("favouriteVideos", JSON.stringify([]))
            return
        }

        localStorage.setItem("favouriteVideos", JSON.stringify(state.favourites))
    },[state.favourites])

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

    const addFavourite = (video) => {
        dispatch({type: ADD_FAVOURITE, payload: video})
    }

    const removeFavourite = (video) => {
        dispatch({type: REMOVE_FAVOURITE, payload:video})
    }

    const updateUser = (user) => {
        if( state.user === null || state.user.authenticated){
            dispatch({
                type:UNSET_USER,
                payload: {
                }
            })
        }else{
            dispatch({
                type:SET_USER,
                payload: user
            })
        }
    }

    return(
        <GlobalContext.Provider 
            value={{theme: state.theme, toggleTheme, searchQuery: state.searchQuery, submitSearchQuery, user:state.user, updateUser, favourites:state.favourites, addFavourite, removeFavourite}}>
            {children}
        </GlobalContext.Provider>
    )
}

export { useGlobals }

export default GlobalProvider;