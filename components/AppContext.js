import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export default function AppContextProvider(props) {
  const KEY = 'YOUR_API_KEY';
  const [titleNavigation, setTitleNavigation] = useState('');
  const [modalSearchVisible, setModalSearchVisible] = useState(false);
  const [modalScreenVisible, setModalScreenVisible] = useState(false);
  const [modalCameraVisible, setModalCameraVisible] = useState(false);
  const [modalAccountVisible, setModalAccountVisible] = useState(false);
  const [modalOptionsVisible, setModalOptionsVisible] = useState(false);
  const [modalCommentsVisible, setModalCommentsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [cardData, setCardData] = useState([])
  const [chipData, setChipData] = useState([]);

  const renderCount = (x) => {
    if (x.length == 4) {
      return `${x.slice(0, 1)} tys.`
    } else if (x.length == 5) {
      return `${x.slice(0, 2)} tys.`
    } else if (x.length == 6) {
      return `${x.slice(0, 3)} tys.`
    } else if (x.length == 7) {
      return `${x.slice(0, 1)} mln.`
    } else if (x.length == 8) {
      return `${x.slice(0, 2)} mln.`
    } else if (x.length == 9) {
      return `${x.slice(0, 3)} mln.`
    } else if (x.length == 10) {
      return `${x.slice(0, 1)} mld.`
    } else if (x.length == 11) {
      return `${x.slice(0, 2)} mld.`
    } else if (x.length == 12) {
      return `${x.slice(0, 3)} mld.`
    } else {
      return x
    }
  };

  const fetchSearch = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${searchQuery}&type=video&key=${KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchData(data.items);
      });
  };

  return (
    <AppContext.Provider
      value={{
        titleNavigation,
        setTitleNavigation,
        KEY,
        renderCount,
        modalSearchVisible,
        setModalSearchVisible,
        modalScreenVisible,
        setModalScreenVisible,
        modalCameraVisible,
        setModalCameraVisible,
        modalAccountVisible,
        setModalAccountVisible,
        fetchSearch,
        searchQuery,
        setSearchQuery,
        searchData,
        cardData,
        setCardData,
        chipData,
        setChipData,
        modalOptionsVisible,
        setModalOptionsVisible,
        modalCommentsVisible,
        setModalCommentsVisible
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
