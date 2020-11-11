import React, {useContext} from 'react';
import { View } from 'react-native';
import ChipDiscover from './ChipDiscover';
import { AppContext } from './AppContext';
import TopNavigation from './TopNavigation'

const DiscoverScreen = ({navigation}) => {
  const {chipState, setChipState} = useContext(AppContext)

  const arrChip = [
    {
      title: 'Na czasie',
      icon: 'cards-heart',
      press: () => {navigation.navigate('Na czasie'), setChipState(!chipState)}
    },
    {
      title: 'Gry',
      icon: 'gamepad-variant',
      press: () => { navigation.navigate('Gry'), setChipState(!chipState)}
    },
    {
      title: 'Na żywo',
      icon: 'radio-tower',
      press: () => { navigation.navigate('Na żywo'), setChipState(!chipState)}
    },
    {
      title: 'Muzyka',
      icon: 'music',
      press: () => { navigation.navigate('Muzyka'), setChipState(!chipState)}
    }
  ];

  return (
    <View >
      <TopNavigation />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {arrChip.map((item) => {
          return (
            <ChipDiscover
              key={item.title}
              title={item.title}
              icon={item.icon}
              press={item.press}
            />
          );
        })}
      </View>
      <ChipDiscover title={'Wiadomości'} icon={'newspaper'} press={() => navigation.navigate('Wiadomości')}/>
    </View>
  );
};

export default DiscoverScreen;
