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
        apiAdress={`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&chart=mostPopular&maxResults=10&key=${KEY}`}
      />
    </View>
  );
};

export default HomeScreen;
