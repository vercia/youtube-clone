import React, { useContext } from 'react';
import { View,Image,Text } from 'react-native';
import {Avatar,Button} from 'react-native-paper'
import TopNavigationDiscovery from './TopNavigationDiscovery';
import CardElement from '../CardElement';
import { AppContext } from '../AppContext';

const MusicScreen = ({ navigation }) => {
  const { KEY } = useContext(AppContext);

  return (
    <View>
      <TopNavigationDiscovery back={() => navigation.navigate('Odkrywaj')} />
      <Image
        source={require('../../images/released.png')}
        style={{ width: '100%', height: 100 }}
      />
      <View>
        <Avatar.Image
          size={100}
          source={require('../../images/avatarMusic.jpg')}
        />
        <Text>Muzyka</Text>
        <Text>113 mln subskrypcji</Text>
        <Button>SUBSKRYBUJ</Button>
      </View>
      <Text>Największe hity</Text>
      <CardElement
        apiAdress={`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&chart=mostPopular&maxResults=5&regionCode=PL&videoCategoryId=10&key=${KEY}`}
      />
    </View>
  );
};

export default MusicScreen;
