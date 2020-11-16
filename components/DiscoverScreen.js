import React, { useContext } from 'react';
import { View,Text } from 'react-native';
import ChipDiscover from './ChipDiscover';
import { AppContext } from './AppContext';
import TopNavigation from './TopNavigation';
import { ScrollView } from 'react-native-gesture-handler';
import CardElement from './CardElement'

const DiscoverScreen = ({ navigation }) => {
  const { setTitleNavigation, KEY } = useContext(AppContext);

  const firstColumn = [
    {
      title: 'Na czasie',
      icon: 'cards-heart',
      press: () => {
        navigation.navigate('Na czasie'), setTitleNavigation('Na czasie');
      },
      color: '#c33117'
    },
    {
      title: 'Gry',
      icon: 'gamepad-variant',
      press: () => {
        navigation.navigate('Gry'), setTitleNavigation('Gry');
      },
      color: '#c39e77'
    },
    {
      title: 'Na żywo',
      icon: 'radio-tower',
      press: () => {
        navigation.navigate('Na żywo'), setTitleNavigation('Na żywo');
      },
      color: '#e77719'
    }
  ];

  const secondColumn = [
      {
        title: 'Muzyka',
        icon: 'music',
        press: () => {
          navigation.navigate('Muzyka'), setTitleNavigation('Muzyka');
        },
        color: '#1c927d'
      },
      {
        title: 'Wiadomości',
        icon: 'newspaper',
        press: () => {
          navigation.navigate('Wiadomości'), setTitleNavigation('Wiadomości');
        },
        color: '#1e4fd4'
      }
  ];

  return (
    <View>
      <TopNavigation />
      <ScrollView>
        <View style={{ backgroundColor: '#ddd', flexDirection: 'row' }}>
          <View style={{ width: '50%' }}>
            {firstColumn.map((item) => {
              return (
                <ChipDiscover
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  press={item.press}
                  color={item.color}
                />
              );
            })}
          </View>
          <View style={{ width: '50%' }}>
            {secondColumn.map((item) => {
              return (
                <ChipDiscover
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  press={item.press}
                  color={item.color}
                />
              );
            })}
          </View>
        </View>
        <Text style={{ fontSize: 18, padding: 15 }}>
          Filmy zyskujące popularność
        </Text>
        {/* <CardElement
          apiAdress={`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=2&regionCode=PL&key=${KEY}`}
        /> */}
      </ScrollView>
    </View>
  );
};

export default DiscoverScreen;
