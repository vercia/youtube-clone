import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export default function AppContextProvider(props) {
  const KEY = 'AIzaSyD15wmuWdyY5yNlu_44OGjeJOMnWThNLmo';
  const [titleNavigation, setTitleNavigation] = useState('');

  return (
    <AppContext.Provider
      value={{
        titleNavigation,
        setTitleNavigation,
        KEY
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
