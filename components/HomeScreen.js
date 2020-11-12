import React, { useContext } from 'react';
import { View } from 'react-native';
import TopNavigation from './TopNavigation';
import CardElement from './CardElement';
import { AppContext } from './AppContext';

const HomeScreen = () => {
  const { KEY } = useContext(AppContext);

  return (
    <View>
      <TopNavigation />
      <CardElement
        apiAdress={`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=2&regionCode=PL&key=${KEY}`}
      />
    </View>
  );
};

export default HomeScreen;
