import React from 'react';
import { View } from 'react-native';
import MultiScreen from './MultiScreen';

const NotificationsScreen = () => {
  return (
    <View>
      <MultiScreen
        title={'Tutaj znajdziesz swoje powiadomienia'}
        subtitle={
          'Nie przegap najnowszych filmów i innych treści z Twoich ulubionych kanałów.'
        }
        button={'WŁĄCZ POWIADOMIENIA'}
        icon={'bell'}
      />
    </View>
  );
};

export default NotificationsScreen;
