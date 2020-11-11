import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import TopNavigationDiscovery from './TopNavigationDiscovery';
import CardElement from '../CardElement';
import { AppContext } from '../AppContext';

const TopScreen = ({ navigation }) => {
  const { KEY } = useContext(AppContext);

  return (
    <View>
      <TopNavigationDiscovery back={() => navigation.navigate('Odkrywaj')} />
      <Text>Top screen</Text>
      <CardElement
        apiAdress={`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&chart=mostPopular&maxResults=10&key=${KEY}`}
      />
    </View>
  );
};

export default TopScreen;
