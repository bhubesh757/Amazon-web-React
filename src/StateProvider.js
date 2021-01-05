import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

// higher order component
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull the info from the data layer
export const useStateValue = () => useContext(StateContext);