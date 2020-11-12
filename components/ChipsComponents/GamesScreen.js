import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import TopNavigationDiscovery from './TopNavigationDiscovery';
import CardElement from '../CardElement';
import { AppContext } from '../AppContext';

const GamesScreen = ({ navigation }) => {
  const { KEY } = useContext(AppContext);

  return (
    <View>
      <TopNavigationDiscovery back={() => navigation.navigate('Odkrywaj')} />
      <Image
        source={require('../../images/news.jpg')}
        style={{ height: 220 }}
      />
      <View style={{ flexDirection: 'row', padding: 15 }}>
        <Avatar.Image size={70} source={require('../../images/games.jpg')} />
        <View style={{ left: 15, top: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 3 }}>
            Gry
          </Text>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', right: 15 }}
          >
            <Button color='red' labelStyle={{ fontWeight: 'bold' }}>
              SUBSKRYBUJ
            </Button>
            <Text>86,9 mln</Text>
          </View>
        </View>
      </View>
      <CardElement
        apiAdress={`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&chart=mostPopular&maxResults=5&regionCode=PL&videoCategoryId=20&key=${KEY}`}
      />
    </View>
  );
};

export default GamesScreen;
