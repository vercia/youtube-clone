import React from 'react';
import { View } from 'react-native';
import TopNavigationDiscovery from './TopNavigationDiscovery';
import CardElement from '../CardElement';
import { AppContext } from '../AppContext';

const GamesScreen = ({ navigation }) => {
  const { KEY } = useContext(AppContext);

  return (
    <View>
      <TopNavigationDiscovery back={() => navigation.navigate('Odkrywaj')} />
      <CardElement
        apiAdress={`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&chart=mostPopular&maxResults=5&regionCode=PL&videoCategoryId=20&key=${KEY}`}
      />
    </View>
  );
};

export default GamesScreen;
