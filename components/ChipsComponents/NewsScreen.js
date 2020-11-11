import React, {useContext} from 'react';
import { View } from 'react-native';
import TopNavigationDiscovery from './TopNavigationDiscovery'
import { AppContext } from '../AppContext';
import CardElement from '../CardElement'

const NewsScreen = ({navigation}) => {
  const {KEY} = useContext(AppContext)

  return (
    <View>
      <TopNavigationDiscovery back={() => navigation.navigate('Odkrywaj')} />
      <CardElement
        apiAdress={`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&chart=mostPopular&maxResults=5&regionCode=PL&videoCategoryId=25&key=${KEY}`}
      />
    </View>
  );
};

export default NewsScreen;
