import React, { createContext, useState } from 'react';
import TopNavigation from './TopNavigation';

export const AppContext = createContext();

export default function AppContextProvider(props) { 
    const [chipState,setChipState] = useState(false)

    return (
        <AppContext.Provider
            value={{
                chipState,
                setChipState
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}
