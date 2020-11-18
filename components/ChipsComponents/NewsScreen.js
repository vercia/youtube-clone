import React, { useContext } from 'react';
import { View } from 'react-native';
import TopNavigationDiscovery from './TopNavigationDiscovery';
import { AppContext } from '../AppContext';
import CardElement from '../CardElement';
import ProfileDiscovery from '../ProfileDiscovery';
import { ScrollView } from 'react-native-gesture-handler';

const NewsScreen = ({ navigation }) => {
  const { KEY, setChipData, chipData } = useContext(AppContext);

  return (
    <View>
      <TopNavigationDiscovery back={() => navigation.navigate('Odkrywaj')} />
      <ScrollView>
        <ProfileDiscovery
          title={'Wiadomości'}
          subtitle={'35,1 mln subskrypcji'}
          avatarImg={require('../../images/avatarMusic.jpg')}
          bannerImg={require('../../images/news.jpg')}
          headerText={'Najważniejsze wiadomości'}
        />
        <CardElement
          apiAdress={`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&chart=mostPopular&maxResults=2&regionCode=PL&videoCategoryId=25&key=${KEY}`}
          setState={setChipData}
          state={chipData}
        />
      </ScrollView>
    </View>
  );
};

export default NewsScreen;
