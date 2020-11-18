import React, { useContext } from 'react';
import { View,Image,Text } from 'react-native';
import {Avatar,Button} from 'react-native-paper'
import TopNavigationDiscovery from './TopNavigationDiscovery';
import CardElement from '../CardElement';
import { AppContext } from '../AppContext';
import ProfileDiscovery from '../ProfileDiscovery';
import { ScrollView } from 'react-native-gesture-handler';

const MusicScreen = ({ navigation }) => {
  const { KEY,setChipData,chipData } = useContext(AppContext);

  return (
    <View>
      <ScrollView>
        <TopNavigationDiscovery back={() => navigation.navigate('Odkrywaj')} />
        <ProfileDiscovery
          title={'Muzyka'}
          subtitle={'113 mln subskrypcji'}
          avatarImg={require('../../images/avatarMusic.jpg')}
          bannerImg={require('../../images/released.png')}
          headerText={'Największe hity'}
        />
        <CardElement
          apiAdress={`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&chart=mostPopular&maxResults=2&regionCode=PL&videoCategoryId=10&key=${KEY}`}
          setState={setChipData}
          state={chipData}
        />
      </ScrollView>
    </View>
  );
};

export default MusicScreen;
