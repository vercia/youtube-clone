import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export default function AppContextProvider(props) {
  const KEY = '0AIzaSyAthwZijUeqfiR1FDUgH8cEIfYnbkTijjM';
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
