import React from 'react';
import { View } from 'react-native';
import MultiScreen from './MultiScreen';

const SubscriptionScreen = () => {
  return (
    <View>
      <MultiScreen
        title={'Nie przegap nowych filmów'}
        subtitle={
          'Zaloguj się, aby zobaczyć najnowsze materiały z Twoich ulubionych kanałów YouTube.'
        }
        button={'ZALOGUJ SIĘ'}
        icon={'clipboard-play'}
      />
    </View>
  );
};

export default SubscriptionScreen;
