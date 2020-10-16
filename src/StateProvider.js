import React, {
    Children,
    createContext,
    useContext,
    useReducer
} from "react";

//prepare data layer
export const StateContext = createContext();

//reducer listens to changes
//children is referring to the APP of stateprovider in indexjs.
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Hook that allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);