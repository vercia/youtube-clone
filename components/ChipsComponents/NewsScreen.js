import React, { useContext } from 'react';
import { View } from 'react-native';
import TopNavigationDiscovery from './TopNavigationDiscovery';
import { AppContext } from '../AppContext';
import CardElement from '../CardElement';
import ProfileDiscovery from '../ProfileDiscovery';

const NewsScreen = ({ navigation }) => {
  const { KEY } = useContext(AppContext);

  return (
    <View>
      <TopNavigationDiscovery back={() => navigation.navigate('Odkrywaj')} />
      <ProfileDiscovery
        title={'Wiadomości'}
        subtitle={'35,1 mln subskrypcji'}
        avatarImg={require('../../images/avatarMusic.jpg')}
        bannerImg={require('../../images/news.jpg')}
        headerText={'Najważniejsze wiadomości'}
      />
      {/* <CardElement
        apiAdress={`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&chart=mostPopular&maxResults=5&regionCode=PL&videoCategoryId=25&key=${KEY}`}
      /> */}
    </View>
  );
};

export default NewsScreen;
